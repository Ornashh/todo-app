import React from 'react';

const PageLayout = ({title = "", children}) => {
  document.title = title;

  return <>{children}</>
};

export default PageLayout;