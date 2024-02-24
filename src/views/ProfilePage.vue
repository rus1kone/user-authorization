<template>
  <div class="profile__info">
    <h3 class="profile__title">Hi {{ userStore.currentUser?.username }}!</h3>
    <h5 class="profile__info-desc">User information:</h5>
    <p class="profile__info-username">
      username: {{ userStore.currentUser?.username }}
    </p>
    <p class="profile__info-password">
      password: {{ userStore.currentUser?.password }}
    </p>
  </div>
</template>

<script setup>
import { useUserStore } from "../stores/userStore";
const userStore = useUserStore();
</script>

<style>
.profile__info {
  margin: 0 auto;
  max-width: 1000px;
  background-color: #ffa500;
  border-radius: 5px;
  padding: 20px;
}

.profile__title {
  font-size: 22px;
  color: #242424;
  text-align: center;
  font-weight: 700;
}

.profile__info-desc {
  font-size: 20px;
  color: #242424;
  font-weight: 700;
}

.profile__info-username {
  font-size: 18px;
  margin-left: 20px;
  color: #242424;
  font-weight: 500;
}

.profile__info-password {
  font-size: 18px;
  margin-left: 20px;
  color: #242424;
  font-weight: 500;
}
</style>
