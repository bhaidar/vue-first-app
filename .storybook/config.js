import { configure } from "@storybook/vue";

// import Vue from "vue";
// import Vuex from "vuex";

// Vue.use(Vuex);

// store.dispatch("getUser");

// store.commit(
//   "setUser",
//   JSON.parse(
//     '[{ "id": 1, "name": "Bilal Haidar" }] }]'
//   )
// );

// Automatically import all files ending in *.stories.js
configure(
  require.context("../src/stories", true, /\.stories\.js$/),
  module
);
