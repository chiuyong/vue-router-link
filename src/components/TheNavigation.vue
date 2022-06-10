<template>
  <nav id="nav">
    <p class="logo">The Vue Travel App</p>
    <ul class="nav-links">
      <li class="links">
        <router-link to="/"> Home </router-link>
      </li>
      <li v-for="destination in destinations" :key="destination.name" class="links">
        <router-link :to="{ name: 'destinationDetails', params: { id: destination.id } }">
          {{ destination.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import store from '@/store'
export default {
  data() {
    return {
      destionationId: this.$route.params.id,
      destinations: store.destinations
    }
  }
}
</script>

<style lang="scss" scoped>
#nav {
  display: flex;
  a {
    color: #2c3e50;
    text-decoration: none;
    font-weight: bold;

    &.link-active {
      color: #ab26ab;
    }
  }
}
.nav-links {
  display: flex;
}
.links {
  padding-right: 20px;
  list-style: none;
}
.links:hover {
  text-decoration: underline;
}
.logo {
  font-size: 20px;
  color: purple;
  font-weight: bold;
}
</style>
