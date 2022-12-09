import React, { useEffect } from "react";

const PageLayout = ({ title = "", children }) => {
  useEffect(() => {
    document.title = `${title ? title : "Loading"} | Unsplash`;
  }, [title]);

  return <>{children}</>;
};

export default PageLayout;
