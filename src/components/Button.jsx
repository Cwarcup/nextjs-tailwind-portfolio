import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  primary:
    'bg-primaryText-800 font-semibold text-primaryText-100 hover:bg-primaryText-700 active:bg-primaryText-800 active:text-primaryText-100/70 dark:bg-primaryText-700 dark:hover:bg-primaryText-600 dark:active:bg-primaryText-700 dark:active:text-primaryText-100/70',
  secondary:
    'bg-primaryText-50 font-medium text-primaryText-900 hover:bg-primaryText-100 active:bg-primaryText-100 active:text-primaryText-900/60 dark:bg-primaryText-800/50 dark:text-primaryText-300 dark:hover:bg-primaryText-800 dark:hover:text-primaryText-50 dark:active:bg-primaryText-800/50 dark:active:text-primaryText-50/70',
}

export function Button({ variant = 'primary', className, href, ...props }) {
  className = clsx(
    'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
    variantStyles[variant],
    className
  )

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}
