import React from 'react'
import { shallow, mount } from 'enzyme'
import Game from './Game'

describe('Game.js', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Game />)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Same player should not play 2 times in a row', () => {
    const wrapper = mount(<Game />)
    const firstPlayer = wrapper.find('div.game-info').children().first().text()
    expect(firstPlayer).toEqual('Next player: X')

    const button = wrapper.find('button.square').first()
    button.simulate('click')
    const secondPlayer = wrapper.find('div.game-info').children().first().text()
    expect(secondPlayer).toEqual('Next player: O')
  })

  it('should declare a winner', () => {
    const wrapper = mount(<Game />)

    const round1 = wrapper.find('button.square').at(0)
    round1.simulate('click')
    const round2 = wrapper.find('button.square').at(1)
    round2.simulate('click')
    const round3 = wrapper.find('button.square').at(3)
    round3.simulate('click')
    const round4 = wrapper.find('button.square').at(2)
    round4.simulate('click')
    const round5 = wrapper.find('button.square').at(6)
    round5.simulate('click')

    const winnerDeclaration = wrapper.find('.game-info').children().first().text()
    console.log(winnerDeclaration)
    expect(winnerDeclaration).toEqual('Winner: X')
  })
})
