<template>
  <div class="page">
    <header>
      <nav>
        <router-link to="/"> Home </router-link>
        <router-link to="/render"> Render Test </router-link>
        <router-link to="/calc"> Calculation </router-link>
      </nav>
    </header>
    <router-view></router-view>
    <footer>
      <h2>Footer!</h2>
    </footer>
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
};
</script>

<style scoped>
header,
footer {
  height: 4rem;
  background: #ddd;
}
</style>
