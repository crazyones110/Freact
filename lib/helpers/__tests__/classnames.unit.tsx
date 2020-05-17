import { classnames } from '../classnames'
import { createMakeClasses } from '../createMakeClasses'

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
describe('createMakeClasses', () => {
  it ('接受字符串或对象', () => {
    const classes = createMakeClasses('freact-layout')
    expect(classes()).toEqual('freact-layout')
    expect(classes('x')).toEqual('freact-layout-x')
    expect(classes({y:true, z: false})).toEqual('freact-layout-y')
    expect(classes({y:true, z: true})).toEqual('freact-layout-y freact-layout-z')
    expect(classes({y:true, z: true}, 'red')).toEqual('freact-layout-y freact-layout-z red')
  })
})
