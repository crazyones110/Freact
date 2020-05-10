import * as renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../icon'
import {mount} from 'enzyme'

describe('icon组件', () => {
  it('render successfully', () => {
    const json = renderer.create(<Icon icon="bytedance"/>).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('onClick', () => {
    const fn = jest.fn()
    const component= mount(<Icon icon="bytedance" onClick={fn}/>)
    component.find('svg').simulate('click')
    expect(fn).toBeCalled()
  })
})