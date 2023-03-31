import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { DoubleKButton } from '..'

describe('Button:Test', () => {
    it('should render slot', () => {
        const renderButton = mount(DoubleKButton, {
            slots: {
                default: 'Hello World',
                tag: 'tag'
            }
        })
        expect(renderButton.text()).toBe('Hello Worldtag')
    })
})
