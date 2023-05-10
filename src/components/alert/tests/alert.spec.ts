import { describe, expect, it } from 'vitest'

import { mount } from '@vue/test-utils'
import Alert from '../src/alert.vue'
// The component to test

describe('Alert:Test', () => {
  it('should render slot', () => {
    const wrapper = mount(Alert, {
      props: {
        title: 'hello world'
      }
    })
    expect(wrapper.text()).toContain('hello world')
  })
})
