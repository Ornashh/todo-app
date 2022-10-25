import React, { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

const createWrapper = (id) => {
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", id);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
};

const Portal = ({ children, wrapperId }) => {
  const [element, setElement] = useState(null);

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;

    if (!element) {
      systemCreated = true;
      element = createWrapper(wrapperId);
    }
    setElement(element);

    return () => {
      if (systemCreated && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (element === null) return null;

  return createPortal(children, element);
};

export default Portal;
