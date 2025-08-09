import * as React from 'react';
import clsx from 'classnames';
export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({className, ...props}, ref) => <input ref={ref} className={clsx('input', className)} {...props} />
);
Input.displayName = 'Input';
