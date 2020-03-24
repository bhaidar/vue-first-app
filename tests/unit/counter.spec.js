// Import the `mount()` method from the test utils
// and the component you want to test
import { mount } from "@vue/test-utils";
import Counter from "@/components/Counter";

describe("Counter.vue", () => {
  it("mounts a component and prints the counts", () => {
    // Mount the component and you have the wrapper
    const wrapper = mount(Counter);

    // Access the actual Vue instance via `wrapper.vm`
    const vm = wrapper.vm;

    // display the value of the count
    console.log(vm.count);
  });

  it("renders the correct markup", () => {
    // Mount the component and you have the wrapper
    const wrapper = mount(Counter);

    expect(wrapper.html()).toContain('<span class="count">0</span>');
  });

  // it's also easy to check for the existence of elements
  it("has a button", () => {
    // Mount the component and you have the wrapper
    const wrapper = mount(Counter);

    expect(wrapper.contains("button")).toBe(true);
  });

  it("button click should increment the count", () => {
    // Mount the component and you have the wrapper
    const wrapper = mount(Counter);

    expect(wrapper.vm.count).toBe(0);

    const button = wrapper.find("button");
    button.trigger("click");

    expect(wrapper.vm.count).toBe(1);
  });
});
