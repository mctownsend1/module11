<template>
  <div class="container">
    <router-link to="/about">About</router-link> |
    <router-link to="/quotes">Quotes</router-link> |
    <router-link to="/contact">Contact</router-link>
    <GoBack />
    <router-view> </router-view>
  </div>
</template>

<script>
import GoBack from "./components/GoBack.vue";
export default { components: { GoBack } };
</script>
