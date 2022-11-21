import { forwardRef } from 'react'
import clsx from 'clsx'

type ContainerProps = {
  className?: string
  children?: React.ReactNode
  ref: React.Ref<HTMLDivElement>
}

const OuterContainer = forwardRef(function OuterContainer(
  { className, children, ...props }: ContainerProps,
  ref
) {
  return (
    <div ref={ref} className={clsx('sm:px-8', className)} {...props}>
      <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
    </div>
  )
})

const InnerContainer = forwardRef(function InnerContainer(
  { className, children, ...props }: ContainerProps,
  ref
) {
  return (
    <div
      ref={ref}
      className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
      {...props}
    >
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </div>
  )
})

type ContainerType = typeof OuterContainer & {
  Inner: typeof InnerContainer
}

export const Container = forwardRef(function Container(
  { children, ...props }: ContainerProps,
  ref
) {
  return (
    <OuterContainer ref={ref} {...props}>
      {children}
    </OuterContainer>
  )
}) as ContainerType
