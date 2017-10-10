import React from 'react'
import { shallow, mount } from 'enzyme'
import Board from './Board'

describe('Board.js', () => {
  it('renders without crashing', () => {
    const squares = Array(9).fill(null)
    const wrapper = shallow(<Board squares={squares} />)

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should call a function on click', () => {
    const squares = Array(9).fill(null)
    const onClickEvent = jest.fn()
    const wrapper = mount(<Board squares={squares} onClick={onClickEvent} />)
    const button = wrapper.find('button.square').first()
    button.simulate('click')

    expect(onClickEvent).toBeCalledWith(0)
  })
})
