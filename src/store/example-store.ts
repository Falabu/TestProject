import { defineStore } from 'pinia';

export const useExampleStore = defineStore({
  // name of the store
  // it is used in devtools and allows restoring state
  id: 'example',

  // `this` is the store instance

  // a function that returns a fresh state
  state: () => ({
    message: 'Hello Star Wars! :)',
  }),

  // optional getters
  getters: {
    getMessage(): string {
      return this.message;
    },
  },

  // optional actions
  actions: {
    /*
    reset() {
      this.counter = 0
    },
    */
  },
});
