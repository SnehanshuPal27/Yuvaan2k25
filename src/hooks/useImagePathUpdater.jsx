import React, { createContext, useContext, useEffect } from 'react';

const baseURL = import.meta.env.BASE_URL || '';

const ImagePathUpdaterContext = createContext();

function useImagePathUpdater() {
    useEffect(() => {
        async function fetchAndUpdateCSS(url, sheet) {
            try {
                const response = await fetch(url);
                if (response.ok) {
                    let cssText = await response.text();
                    cssText = cssText.replace(/url\(["']?(\/[^"')]+)["']?\)/g, `url("${baseURL}$1")`);
                    const style = document.createElement('style');
                    style.textContent = cssText;
                    document.head.appendChild(style);
                    if (sheet) {
                        sheet.disabled = true;
                    }
                }
            } catch (e) {
                console.warn('Error fetching or updating CSS:', e);
            }
        }

        function updateImagePaths() {
            // Update img elements
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

            // Update background images in inline styles
            document.querySelectorAll('[style*="background-image"]').forEach((element) => {
                const currentStyle = element.style.backgroundImage;
                if (currentStyle.includes('url("') && !currentStyle.includes(baseURL)) {
                    const imageUrl = currentStyle.match(/url\("([^"]+)"\)/)[1];
                    if (imageUrl.startsWith('/')) {
                        element.style.backgroundImage = `url("${baseURL}${imageUrl}")`;
                    }
                }
            });

            // Update background images in stylesheets
            for (const sheet of document.styleSheets) {
                if (sheet.href) {
                    fetchAndUpdateCSS(sheet.href, sheet);
                } else {
                    try {
                        for (const rule of sheet.cssRules) {
                            if (rule.style && rule.style.backgroundImage) {
                                const currentStyle = rule.style.backgroundImage;
                                if (currentStyle.includes('url("') && !currentStyle.includes(baseURL)) {
                                    const imageUrl = currentStyle.match(/url\("([^"]+)"\)/)[1];
                                    if (imageUrl.startsWith('/')) {
                                        rule.style.backgroundImage = `url("${baseURL}${imageUrl}")`;
                                    }
                                }
                            }
                        }
                    } catch (e) {
                        console.warn('Error accessing stylesheet:', e);
                    }
                }
            }
        }

        updateImagePaths();

        // Efficiently observe only new added images and style changes
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