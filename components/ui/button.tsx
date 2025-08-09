import * as React from 'react';
import clsx from 'classnames';
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary'|'secondary'|'ghost', size?: 'sm'|'md'|'lg' };
export function Button({ className, variant='primary', size='md', ...props }: Props) {
  const base = 'btn ' + (variant==='primary' ? 'btn-primary' : variant==='secondary' ? 'btn-secondary' : '');
  const sz = size==='lg' ? 'px-5 py-3 text-base' : size==='sm' ? 'px-3 py-1.5 text-sm' : '';
  return <button className={clsx(base, sz, className)} {...props} />;
}
export default Button;
