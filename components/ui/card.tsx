import * as React from 'react';
import clsx from 'classnames';
export function Card({className, ...props}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={clsx('card', className)} {...props}/>;
}
export function CardContent({className, ...props}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={clsx('p-6', className)} {...props}/>;
}
