// @ts-ignore
import React from './libs/react.js';

function Headline({ className, children }) {
  return (
    <h1 tabIndex="-1" className={`Headline ${className}`.trim()}>
      {children}
    </h1>
  );
}

Headline.propTypes = {
  className: string,
  children: Node.isRequired
}