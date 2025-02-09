import React, { createContext, useContext, useEffect } from 'react';

const baseURL = import.meta.env.BASE_URL || '';

const ImagePathUpdaterContext = createContext();

function useImagePathUpdater() {
    useEffect(() => {
        function updateImagePaths() {
            // Update img src attributes
            document.querySelectorAll('img').forEach((img) => {
                const currentSrc = img.getAttribute('src');

                // Skip if already prefixed correctly or if it's an absolute URL
                if (!currentSrc || currentSrc.startsWith('http') || currentSrc.startsWith(baseURL)) {
                    return;
                }

                // Ensure only relative paths are updated
                if (currentSrc.startsWith('/')) {
                    img.setAttribute('src', baseURL + currentSrc);
                }
            });

            // Update background-image in inline styles
            document.querySelectorAll('[style*="backgroundImage"]').forEach((element) => {
                const currentStyle = element.getAttribute('style');
                const urlMatch = currentStyle.match(/url\(["']?([^"')]+)["']?\)/);

                if (urlMatch) {
                    const currentUrl = urlMatch[1];

                    // Skip if already prefixed correctly or if it's an absolute URL
                    if (!currentUrl.startsWith('http') && !currentUrl.startsWith(baseURL) && currentUrl.startsWith('/')) {
                        const newStyle = currentStyle.replace(
                          /url\(["']?([^"')]+)["']?\)/,
                          `url(${baseURL}${currentUrl})`
                        );
                        element.setAttribute('style', newStyle);
                    }
                }
            });
        }

        updateImagePaths();

        // Efficiently observe only new added images and elements with style attribute
        const observer = new MutationObserver((mutationsList) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'childList' || mutation.type === 'attributes') {
                    updateImagePaths();
                }
            }
        });

        observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['style'] });

        return () => observer.disconnect();
    }, []); // Empty dependency array ensures it runs only once
}

export function ImagePathUpdaterProvider({ children }) {
    useImagePathUpdater();

    return (
      <ImagePathUpdaterContext.Provider value={{}}>
          {children}
      </ImagePathUpdaterContext.Provider>
    );
}

export function useImagePathUpdaterContext() {
    return useContext(ImagePathUpdaterContext);
}