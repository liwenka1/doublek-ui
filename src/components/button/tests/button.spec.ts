import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Button from "../src/button.vue";

describe("Button:Test", () => {
  it("should render slot", () => {
    const wrapper = mount(Button, {
      slots: {
        default: "Hello World",
      },
    });
    expect(wrapper.text()).toContain("Hello World");
  });
  it('should have class', () => {
    const wrapper = mount(Button, {
      props: {
        type: 'primary'
      }
    });
    expect(wrapper.classes()).toContain('k-button--primary');
  });
});
