import { defineStore } from "pinia";
import { ref } from "vue"

export const useUiStore = defineStore("ui", () => {
  let drawer = ref(false)

  return {
    drawer
  };

});

export default {
  useUiStore,
};
