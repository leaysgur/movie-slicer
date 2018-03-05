import React from 'react';

const MainHeading = ({ children }) => (
  <h3 className="MainHeading">{children}</h3>
);

const SubHeading = ({ children }) => (
  <h4 className="SubHeading">{children}</h4>
);

export {
  MainHeading,
  SubHeading,
};
