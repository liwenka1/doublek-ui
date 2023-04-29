import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Icon from '../src/icon.vue'

describe('Icon:Test', () => {
  it('should have name', () => {
    const wrapper = mount(Icon, {
      props: {
        name: 'cart-add-fill'
      }
    })
    expect(wrapper.classes()).toContain('k-icon-cart-add-fill')
  })
})
