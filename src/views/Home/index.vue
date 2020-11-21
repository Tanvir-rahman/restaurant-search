<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-aside style="height: 100vh;">
      <el-input placeholder="Search..." v-model="filter" @input="filteredRestaurant"/>
      <el-menu style="height: 100vh;">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>Categories</template>
          <Categories @categoryUpdate="assignCategory"/>
        </el-submenu>
        <el-menu-item index="2">
          <Sort @sort="assignSort"/>
        </el-menu-item>
        <el-menu-item index="3">
          <Order @order="assignOrder"/>
        </el-menu-item>
        <el-menu-item index="4">
          <City @cityUpdate="assignCity" />
        </el-menu-item>
      </el-menu>
    </el-aside>
    <Restaurants :restaurants="restaurantList" />
  </el-container>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Debounce } from 'vue-debounce-decorator'

import Categories from '@/views/Home/Categories.vue';
import Sort from '@/components/Sort.vue';
import Order from '@/components/Order.vue';
import City from '@/components/City.vue';
import Restaurants from '@/views/Home/Restaurants.vue';

import { namespace } from 'vuex-class'

const globalValues = namespace('globalValues')
const restaurants = namespace('restaurants')

@Component({
  components: {
    Categories,
    Sort,
    Order,
    City,
    Restaurants,
  }
})

export default class Home extends Vue {
  private filter: string = '';
  private sortValue: string = '';
  private orderValue: string = '';
  private category: string = '';
  private city: string = '';

  @globalValues.State
  public isLoading!: boolean

  mounted() {
    this.filteredRestaurant();  
  }

  @restaurants.State
  public restaurantList!: Array<object>

  @restaurants.Action
  public getAllRestaurants!: (params: any) => void

  public assignSort(val: string): void {
    this.sortValue = val;
    this.filteredRestaurant();
  }

  public assignOrder(val: string): void {
    this.orderValue = val;
    this.filteredRestaurant();
  }

  public assignCategory(val: string): void {
    this.category = val;
    this.filteredRestaurant();
  }

  public assignCity(val: string): void {
    this.city = val;
    this.filteredRestaurant();
  }

  @Debounce(500)
  public filteredRestaurant(): void {
    const params:any = {};

    if(this.filter) {
      params.q = this.filter;
    }

    if(this.sortValue) {
      params.sort = this.sortValue;
    }

    if(this.orderValue) {
      params.order = this.orderValue;
    }

    if(this.category) {
      params.category = this.category;
    }

    if(this.city) {
      params.entity_type = 'city';
      params.entity_id = this.city;
    }

    this.getAllRestaurants(params);
  }
}
</script>
<style lang="scss" scoped>
</style>
