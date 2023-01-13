import { FunctionComponent } from "react";
import { usePortalContainer } from "./usePortalContainer";
import { Button } from "@twilio/flex-ui";
import ReactDOM from "react-dom";

export const ParasiteButton: FunctionComponent = () => {
  const container = usePortalContainer();

  return ReactDOM.createPortal(
    <Button onClick={() => alert("hello Bilal")} size="small">Click Me</Button>,
    container
  );
};
