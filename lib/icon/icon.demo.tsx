import { Demo } from '../../demo'
import { IconExample } from './Icon.example'
import React from 'react'

// const x = require('!!raw-loader!./icon.example.tsx')
const x = {default: 'code'}

export const IconDemo: React.FC =  () => {
  return (
    <Demo code={x.default}>
      <IconExample/>
    </Demo>
  )
}