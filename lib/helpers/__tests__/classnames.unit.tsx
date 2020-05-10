// import * as renderer from 'react-test-renderer'
// import React from 'react'
import { classnames } from '../classnames'

describe('classnames', () => {
  it('接受一个className', () => {
    const result = classnames('a')
    expect(result).toEqual('a')
  })
  it('接受两个className', () => {
    const result = classnames('a', 'b')
    expect(result).toEqual('a b')
  })
  it('接受奇奇怪怪的classNames', () => {
    const result = classnames('a', false, null, undefined,  '中文')
    expect(result).toEqual('a 中文')
  })
  it('什么都不传', () => {
    const result = classnames()
    expect(result).toEqual('')
  })
})
