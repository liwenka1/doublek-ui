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
  it("should have type", () => {
    const wrapper = mount(Button, {
      props: {
        type: "primary",
      },
    });
    expect(wrapper.classes()).toContain("k-button--primary");
  });
  it("should have size", () => {
    const wrapper = mount(Button, {
      props: {
        type: "large",
      },
    });
    expect(wrapper.classes()).toContain("k-button--large");
  });
  it("should have disable", () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true,
      },
    });
    expect(wrapper.classes()).toContain("is-disabled");
  });
  it("should have loading", () => {
    const wrapper = mount(Button, {
      props: {
        loading: true,
      },
    });
    expect(wrapper.classes()).toContain("is-loading");
  });
  it("should have round", () => {
    const wrapper = mount(Button, {
      props: {
        round: true,
      },
    });
    expect(wrapper.classes()).toContain("is-round");
  });
  it("should have plain", () => {
    const wrapper = mount(Button, {
      props: {
        plain: true,
      },
    });
    expect(wrapper.classes()).toContain("is-plain");
  });
  it("should have circle", () => {
    const wrapper = mount(Button, {
      props: {
        circle: true,
      },
    });
    expect(wrapper.classes()).toContain("is-circle");
  });
  it("should have link", () => {
    const wrapper = mount(Button, {
      props: {
        link: true,
      },
    });
    expect(wrapper.classes()).toContain("is-link");
  });
});
