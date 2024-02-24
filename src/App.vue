<template>
  <div>
    <Login></Login>
    <nav class="menu">
      <ul class="menu__list">
        <li class="menu__list-item">
          <router-link to="/" class="menu__list-link">Home</router-link>
        </li>
        <li class="menu__list-item">
          <router-link to="/profile" class="menu__list-link"
            >Profile</router-link
          >
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Login from "./components/LoginComponent.vue";
</script>

<style>
.menu {
  padding: 5px;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.menu__list {
  display: flex;
  align-items: center;
  column-gap: 20px;
}

.menu__list-link {
  font-size: 22px;
  color: #ffa500;
  display: inline-block;
  padding: 10px 15px;
  transition: all 0.3s ease 0s;
  border-radius: 5px;
}

.menu__list-link:hover {
  background-color: #ffa500;
  color: #242424;
}
</style>
