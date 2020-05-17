import React, { ReactElement } from 'react'
import { createMakeClasses } from '../../lib/helpers/createMakeClasses'
import './layout.scss'
import { Sider } from './sider'

const classes = createMakeClasses('freact-layout')

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | ReactElement[]
}
export const Layout: React.FC<Props> = ({ className, children, ...rest }) => {
  // FIXME 类型保护
  if ((children as ReactElement[]).length) {
    ;(children as ReactElement[]).forEach(child => {
      if (child.type === Sider) {
        hasSider = true
      }
    })
    ;(children as ReactElement[]).reduce(
      (result, child) => result || child.type === Sider,
      false,
    )
    const hasSider = (children as ReactElement[]).some(child => child.type === Sider)
  }
  return (
    <div
      className={[
        classes(),
        className,
        hasSider ? classes('has-sider') : '',
      ].join(' ')}
      {...rest}
    >
      {children}
    </div>
  )
}
