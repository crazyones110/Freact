import React, { useState } from 'react'

type Props = {
  code: string
}
export const Demo: React.FC<Props> = props => {
  const [codeVisible, setCodeVisible] = useState(false)
  return (
    <div>
      <div>{props.children}</div>
      <div>
        <button onClick={() => setCodeVisible(!codeVisible)}>
          {codeVisible ? 'hide code' : 'show code'}
        </button>
      </div>
      {codeVisible && <pre>{props.code}</pre>}
    </div>
  )
}
