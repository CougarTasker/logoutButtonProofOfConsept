import { FunctionComponent, useEffect } from "react";
const extraButtonID = "extra-button";
export const ParasiteButton: FunctionComponent = () => {
  useEffect(() => {
    const extraButton = document.getElementById(extraButtonID);
    const logoutButton = document.querySelector(
      `button[aria-label="Log out user."]`
    );
    if (extraButton !== null && logoutButton !== null) {
      extraButton.parentNode?.removeChild(extraButton);
      logoutButton.parentElement?.appendChild(extraButton);
    }
  });

  return (
    <button id={extraButtonID} onClick={() => alert("hello Bilal")}>
      click me
    </button>
  );
};
