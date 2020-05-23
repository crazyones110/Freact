import React, { ReactFragment } from 'react'
import { FormErrors } from './validator'
import { Input } from '../input/input'
import { createMakeClasses } from '../helpers/createMakeClasses'
import './form.scss'

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
  onChange: (value: FormData) => void
  errors: FormErrors
  errorsDisplayMode?: 'first' | 'all'
}
const classes = createMakeClasses('freact-form')
export const Form: React.FC<Props> = ({
  fields,
  value: formData,
  buttons,
  onSubmit,
  onChange,
  errors,
  errorsDisplayMode = 'first',
}) => {
  const selfOnSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    onSubmit(e)
  }
  const onInputChange = (name: string, value: string) => {
    const newFormData = { ...formData, [name]: value }
    onChange(newFormData)
  }
  return (
    <form onSubmit={selfOnSubmit}>
      <table className={classes('table')}>
        {fields.map(field => (
          <tr key={field.name} className={classes('tr')}>
            <td className={classes('td')}>{field.label}</td>
            <td className={classes('td')}>
              <Input
                className={classes('input')}
                type={field.input.type}
                value={formData[field.name]}
                onChange={e => onInputChange(field.name, e.target.value)}
              />
              <div className={classes('error')}>
                {errorsDisplayMode === 'first'
                  ? errors[field.name]?.[0]
                  : errors[field.name]?.join(',')}
              </div>
            </td>
          </tr>
        ))}
        <tr className={classes('tr')}>
          <td className={classes('td')} />
          <td className={classes('td')}>{buttons}</td>
        </tr>
      </table>
    </form>
  )
}
