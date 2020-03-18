import HelloWorld from "./../components/HelloWorld";

export default {
  title: "Hello World"
};

export const withDefault = () => ({
  components: {
    HelloWorld
  },
  template: `
  <div style="margin: 30px auto; padding: 0 20px; border: solid 1px blue;">
    <HelloWorld></HelloWorld>
  </div>`
});
