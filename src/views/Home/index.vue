<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-aside style="height: 100vh;">
      <el-input placeholder="Search..." v-model="filter" @input="filteredRestaurant"/>
      <el-menu :default-openeds="['1', '3']" style="height: 100vh;">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>Categories</template>
          <el-menu-item><Categories /></el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <Restaurants :restaurants="restaurantList" />
  </el-container>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Debounce } from 'vue-debounce-decorator'

import Categories from '@/views/Home/Categories.vue';
import Restaurants from '@/views/Home/Restaurants.vue';

import { namespace } from 'vuex-class'

const globalValues = namespace('globalValues')
const restaurants = namespace('restaurants')

@Component({
  components: {
    Categories,
    Restaurants
  }
})

export default class Home extends Vue {
  private filter: string = '';

  @globalValues.State
  public isLoading!: boolean
  mounted() {
    this.filteredRestaurant();  
  }
  @restaurants.State
  public restaurantList!: Array<object>

  @restaurants.Action
  public getAllRestaurants!: (params: any) => void

  @Debounce(500)
  public filteredRestaurant(): void {
    const params:any = {};

    if(this.filter) {
      params.q = this.filter;
    }
    console.log('sdfsdf');
    this.getAllRestaurants(params);
  }
}
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
  font-style: none;
}
</style>
