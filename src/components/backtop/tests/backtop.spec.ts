import { describe, expect, it } from 'vitest'

import { mount } from '@vue/test-utils'
import Backtop from '../src/backtop.vue'

describe('Backtop:Test', () => {
  it('should render slot', () => {
    const wrapper = mount(Backtop, {
      slots: {
        default: ''
      }
    })
    expect(wrapper.classes()).toContain('k-backtop')
  })
})
