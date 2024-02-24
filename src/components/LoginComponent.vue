<template>
  <div :class="overlayClass" class="overlay">
    <form class="form" @submit.prevent="checkUser">
      <h3>Account</h3>
      <input
        v-model="enteredUsername"
        placeholder="username"
        type="text"
        required
      />
      <input
        v-model="enteredPassword"
        placeholder="password"
        type="password"
        required
      />
      <button type="submit">login</button>
      <p class="form__text">{{ userStore.tooltip }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "../stores/userStore";

const userStore = useUserStore();
const enteredUsername = ref("");
const enteredPassword = ref("");
const overlayClass = ref("");

const checkUser = () => {
  userStore.checkUser({
    username: enteredUsername.value,
    password: enteredPassword.value,
    overlayClass: overlayClass,
  });
};
</script>

<style>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(36, 36, 36);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 1s ease .3s;
}

.disabled {
  visibility: hidden;
  opacity: 0;
}

.disabled form {
  visibility: hidden;
  opacity: 0;
}

.form {
  transition: all 0.3s ease 0s;
  background-color: #242424; /* Цвет фона формы */
  padding: 50px 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background-color: #ffa500;
  text-align: center;
}

.form__text {
  color: #242424;
  font-size: 16px;
  font-weight: 700;
}

.form h3 {
  color: #242424;
  transition: all 0.3s ease 0s;
}

input[type="text"],
input[type="password"] {
  width: 300px;
  padding: 10px;
  margin-bottom: 15px;
  border: none;
  border-radius: 5px;
  background-color: #242424;
  transition: all 0.3s ease 0s;
  color: #ffa500;
}

input[type="text"]:focus,
input[type="password"]:focus {
  outline: none;
  box-shadow: 0 0 5px #ffa500;
}

input::placeholder {
  font-size: 15px;
  font-family: sans-serif;
  color: #ffa500;
  font-weight: 600;
}

input:hover {
  background-color: #242424;
  /* transform: translate(5px, 7px); */
  transform: scale(0.97);
}

button {
  padding: 10px 20px;
  background-color: #242424;
  color: #ffa500;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease 0s;
  text-align: center;
}

button:hover {
  background-color: #242424;
  transform: scale(0.97);
}
</style>
