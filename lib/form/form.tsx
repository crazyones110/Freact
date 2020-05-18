import React, { ReactFragment } from 'react'

interface Fields {
  name: string
  label: string
  input: {
    type: string
  }
}

type Props = {
  value: { [key: string]: string }
  fields: Fields[],
  buttons: ReactFragment,
  onSubmit: React.FormEventHandler
}
export const Form: React.FC<Props> = ({ fields, value, buttons, onSubmit }) => {
  return (
    <form>
      {fields.map(field => (
        <div key={field.name}>
          {field.label}
          <input type={field.input.type} />
        </div>
      ))}
      <div>
        {buttons}
      </div>
    </form>
  )
}
