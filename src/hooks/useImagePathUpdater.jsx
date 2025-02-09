import { useEffect } from "react";

const baseURL = import.meta.env.BASE_URL || "";

function useImagePathUpdater() {
    useEffect(() => {
        function updateImagePaths() {
            document.querySelectorAll("img").forEach((img) => {
                const currentSrc = img.getAttribute("src");

                // Skip if already prefixed correctly or if it's an absolute URL
                if (!currentSrc || currentSrc.startsWith("http") || currentSrc.startsWith(baseURL)) {
                    return;
                }

                // Ensure only relative paths are updated
                if (currentSrc.startsWith("/")) {
                    img.setAttribute("src", baseURL + currentSrc);
                }
            });
        }

        updateImagePaths();

        // Efficiently observe only new added images
        const observer = new MutationObserver((mutationsList) => {
            for (const mutation of mutationsList) {
                if (mutation.type === "childList") {
                    updateImagePaths();
                }
            }
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => observer.disconnect();
    }, []); // Empty dependency array ensures it runs only once

    return null;
}

export default useImagePathUpdater;
