import * as React from 'react';
import clsx from 'classnames';
export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({className, ...props}, ref) => <textarea ref={ref} className={clsx('textarea', className)} {...props} />
);
Textarea.displayName = 'Textarea';
