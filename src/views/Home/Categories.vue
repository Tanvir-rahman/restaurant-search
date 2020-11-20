<template>
  <div>
    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">Check all</el-checkbox>
    <div style="margin: 15px 0;"></div>
    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange" class="cities">
      <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Categories extends Vue {
  private cities: Array<String> = [
    'Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'
  ];
  private checkedCities: Array<String> = [];
  private checkAll: Boolean = false;
  private isIndeterminate: Boolean = true;

  public handleCheckAllChange(val: Boolean): void {
    this.checkedCities = val ? this.cities : [];
    this.isIndeterminate = false;
  }

  public handleCheckedCitiesChange(value: Array<String>) {
    let checkedCount = value.length;
    this.checkAll = checkedCount === this.cities.length;
    this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/responsive';
.cities {
  display: flex;
  flex-direction: column;
}
</style>
