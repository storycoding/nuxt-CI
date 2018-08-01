import { mount } from '@vue/test-utils'
import AppLogo from '../../components/AppLogo.vue'

describe('AppLogo', () => {
	test('renders correctly', () => {
	  const wrapper = mount(AppLogo)
	  expect(wrapper.element).toMatchSnapshot()
	})
})