import { defineStore } from "pinia";

export const useTresJsStore = defineStore("tresJs", {
  state: () => ({
    routes: [
      {
        id: 0,
        label: "Box",
        href: "/tres/box",
      },
      {
        id: 1,
        label: "Torus",
        href: "/tres/torus",
      },
      {
        id: 2,
        label: "Haunted House",
        href: "/tres/hauntedHouse",
      },
    ],
  }),
  actions: {},
});
