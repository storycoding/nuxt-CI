import { mount } from '@vue/test-utils'
import AppLogo from '../../components/AppLogo.vue'

describe('Component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(AppLogo)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})