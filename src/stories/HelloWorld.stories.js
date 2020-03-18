import StoryRouter from "storybook-vue-router";

//import store from './../store';
import HelloWorld from "./../components/HelloWorld";

export default {
  title: "Hello World",
  decorators: [StoryRouter({})]
};

export const withDefault = () => ({
  components: {
    HelloWorld
  },
  //store,
  template: `
  <div style="margin: 30px auto; padding: 0 20px; border: solid 1px blue;">
    <HelloWorld></HelloWorld>
  </div>`
});
