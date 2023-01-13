import { useMemo } from "react";

let globalContainer: HTMLDivElement | undefined = undefined;

/**
 * gets a reference to the global container that the button portal should be
 * rended into
 * @returns the html div element for the portal
 */
export function usePortalContainer(): HTMLDivElement {
  return useMemo(() => {
    if (!globalContainer) {
      globalContainer = document.createElement("div");
      attachContainerToLogout(globalContainer)
    }
    return globalContainer;
  }, []);
}

function attachContainerToLogout(container: HTMLDivElement) {
  const buttonContainer = document.querySelector(
    `button[aria-label="Log out user."]`
  )?.parentElement;
  if (!buttonContainer) {
    setTimeout(() => attachContainerToLogout(container), 100);
    return;
  }
  buttonContainer.appendChild(container);
}
