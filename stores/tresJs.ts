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
      {
        id: 3,
        label: "Particles",
        href: "/tres/particles",
      },
      {
        id: 4,
        label: "Galaxy Generator",
        href: "/tres/galaxyGenerator",
      },
      {
        id: 5,
        label: "Scroll based animation",
        href: "/tres/scrollBasedAnimation",
      },
    ],
  }),
  actions: {},
});
