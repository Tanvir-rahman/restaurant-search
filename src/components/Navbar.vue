<template>
  <div class="nav">
    <div>
      <router-link :to="{ name: 'home' }" tag="div" class="nav-text">
        Restaurant Seach App
      </router-link>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class Navbar extends Vue {}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/responsive';
.nav {
  width: 100%;
  height: 6rem;
  background-color: #242424;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 4rem;
  @include respond(tab) {
    min-height: 9rem;
    padding: 0 1rem;
  }
  .nav-text {
    padding: 0.5rem 0.5rem;
    font-size: 2.4rem;
    color: #fff;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
