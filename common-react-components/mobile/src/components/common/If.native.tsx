import React from 'react';

interface IfProps {
  condition: boolean;
  children: any;
  elseChild?: JSX.Element | null;
};

const If = ({ condition, children, elseChild = null }: IfProps): JSX.Element => {
  return (
    <>
      {condition
        ? children
        : elseChild
      }
    </>
  );
};

export default If;