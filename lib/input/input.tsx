import React, { InputHTMLAttributes } from 'react'
import { createMakeClasses } from '../helpers/createMakeClasses'
import './input.scss'

type Props = InputHTMLAttributes<HTMLInputElement>
const classes = createMakeClasses('freact-input')
export const Input: React.FC<Props> = ({className, ...rest}) => {
  return (
    <input className={classes(undefined, className!)} {...rest}/>
  )
}