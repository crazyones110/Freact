import React, { ReactFragment } from 'react'
import { Input } from '../input/input'
import { createMakeClasses } from '../helpers/createMakeClasses'
import './form.scss'

export interface Field {
  name: string
  label: string
  input: {
    type: string
  }
}
export interface FormData {
  [K: string]: string
}
export interface Errors {
  [K: string]: string[]
}
type Props = {
  value: FormData
  fields: Field[]
  buttons: ReactFragment
  onSubmit: React.FormEventHandler<HTMLFormElement>
  onChange: (value: FormData) => void
  errors: Errors
  errorsDisplayMode?: 'first' | 'all'
  errorTranslation?: (msg: string) => string | undefined
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
  errorTranslation,
}) => {
  const selfOnSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    onSubmit(e)
  }
  const onInputChange = (name: string, value: string) => {
    const newFormData = { ...formData, [name]: value }
    onChange(newFormData)
  }
  const transformError = (msg: string) => {
    const map: {
      [index: string]: string
      required: string
      minLength: string
      maxLength: string
      formatting: string
    } = {
      required: '必填',
      minLength: '太短',
      maxLength: '太长',
      formatting: '格式错误',
    }
    return errorTranslation?.(msg) ?? map[msg] ?? '未知错误'
  }
  return (
    <form onSubmit={selfOnSubmit}>
      <table className={classes('table')}>
        <tbody>
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
                    ? transformError(errors[field.name]?.[0])
                    : errors[field.name]?.map(transformError).join(',')}
                </div>
              </td>
            </tr>
          ))}
          <tr className={classes('tr')}>
            <td className={classes('td')} />
            <td className={classes('td')}>{buttons}</td>
          </tr>
        </tbody>
      </table>
    </form>
  )
}
