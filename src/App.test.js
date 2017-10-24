import {mount} from 'vue-test-utils'
import App from './App'

describe('App', () => {
  it('can mount horizontal', () => {
    const wrapper = mount(App, {
      mocks: {
        $mq: {
          phone: true
        }
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})

