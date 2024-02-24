import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "userStore",

  state: () => ({
    users: [
      { username: "David", password: "12345" },
      { username: "Ruslan", password: "54321" },
      { username: "Kiril", password: "123456789" },
    ],
    currentUser: null,
    tooltip: null,
  }),

  actions: {
    checkUser({ username, password, overlayClass }) {
      const match = this.users.some(
        (user) => user.username === username && user.password === password
      );

      if (match) {
        console.log("Указанный пользователь существует");
        overlayClass.value = "disabled";
      } else {
        console.log("Указанного пользователя не существует");
        overlayClass.value = "overlay";
        this.tooltip = "Указанного пользователя не существует";
      }

      const user = this.users.find(
        (user) => user.username === username && user.password === password
      );

      if (user) {
        this.currentUser = user;
        console.log("Logged in as:", user);
      } else {
        console.log("Invalid username or password");
      }
    },
  },
});
