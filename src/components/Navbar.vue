<template>
  <div class="nav">
    <router-link :to="{ name: 'home' }" tag="div" class="nav-text">
      Restaurant Finder App
    </router-link>
    <div class="main-links" v-if="this.$route.name !== 'details'">
      <el-input placeholder="Search..." v-model="filter" @input="filteredRestaurant"/>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Debounce } from 'vue-debounce-decorator'

import { namespace } from 'vuex-class'

const restaurants = namespace('restaurants')

@Component
export default class Navbar extends Vue {
  private filter: string = '';

  @restaurants.Action
  public getAllRestaurants!: (params: any) => void

  @Debounce(500)
  public filteredRestaurant(): void {
    const params:any = {};

    if(this.filter) {
      params.q = this.filter;
    }

    this.getAllRestaurants(params);
  }
}
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
    justify-content: space-between;
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

  @media only screen and (min-width: 769px) {
    .main-links {
      display: none;
    }
  }
</style>
