import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    userList: [
      { id: 12, name: "테스터" },
      { id: 13, name: "다미장" },
      { id: 11, name: "user" },
    ],
  }),
  getters: {
    getUserName: (state) => state.userList[0].name,
  },
});
