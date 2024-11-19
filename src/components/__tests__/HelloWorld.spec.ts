import { describe, it, expect } from "vitest";
import { nextTick } from "vue";
import { render } from "@testing-library/vue";
import CustomElementBlock from "../CustomElementBlock.vue";
import { mount } from "@vue/test-utils";

describe("HelloWorld", () => {
  it("renders on its own", async () => {
    const element = document.createElement("hello-world");
    document.body.appendChild(element);
    await window.customElements.whenDefined("hello-world");
    expect(element.innerHTML).toContain("Hello, World!");
  });
  it("renders with testing library", async () => {
    const wrapper = render(CustomElementBlock);
    await window.customElements.whenDefined("hello-world");
    expect(wrapper.html()).toContain("Hello, World!");
  });
  it("fails to render inside Vue Component", async () => {
    const wrapper = mount(CustomElementBlock, {});
    await window.customElements.whenDefined("hello-world");
    await nextTick();
    console.log("!!Wrapper!!");
    console.log(wrapper.html());
    console.log("!!Wrapper!!");

    expect(wrapper.html()).toContain("Hello, World!");
  });
  it("renders inside Vue Component", async () => {
    const div = document.createElement("div");
    const container = document.body.appendChild(div);
    const wrapper = mount(CustomElementBlock, {
      attachTo: container,
    });
    await window.customElements.whenDefined("hello-world");
    await nextTick();
    console.log("!!Wrapper!!");
    console.log(wrapper.html());
    console.log("!!Wrapper!!");

    expect(wrapper.html()).toContain("Hello, World!");
  });
});
