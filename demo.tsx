import React from 'react'


type Props = {
  code: string
}
export const Demo: React.FC<Props> = props => {
  return (
    <div>
      {props.children}
      <pre>
        {props.code}
      </pre>
    </div>
  )
}