import React, { ReactFragment } from 'react'
import { FormErrors } from './validator'
import { Input } from '../input/input'

export interface Fields {
  name: string
  label: string
  input: {
    type: string
  }
}
export interface FormData {
  [K: string]: string
}
type Props = {
  value: FormData
  fields: Fields[]
  buttons: ReactFragment
  onSubmit: React.FormEventHandler<HTMLFormElement>
  onChange: (value: FormData) => void,
  errors: FormErrors
}
export const Form: React.FC<Props> = ({
  fields,
  value: formData,
  buttons,
  onSubmit,
  onChange,
  errors
}) => {
  const selfOnSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    onSubmit(e)
  }
  const onInputChange = (name: string, value: string) => {
    const newFormData = {...formData, [name]: value}
    onChange(newFormData)
  }
  return (
    <form onSubmit={selfOnSubmit}>
      {fields.map(field => (
        <div key={field.name}>
          {field.label}
          <Input
            type={field.input.type}
            value={formData[field.name]}
            onChange={(e) => onInputChange(field.name, e.target.value)}
          />
          <div>{errors[field.name]}</div>
        </div>
      ))}
      <div>{buttons}</div>
    </form>
  )
}
