import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import breadcrumb from '../src/breadcrumb.vue'

describe('Breadcrumb:Test', () => {
  it('should render slot', () => {
    const wrapper = mount(breadcrumb, {
      slots: {
        default: 'Hello World'
      }
    })
    expect(wrapper.text()).toContain('Hello World')
  })

//   it('should have class', () => {
//     const wrapper = mount(breadcrumb)
//     expect(wrapper.classes()).toContain('k-breadcrumb')
//   })
})
