<template>
  <div>
    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">Check all</el-checkbox>
    <div style="margin: 10px 0;"></div>
    <el-checkbox-group v-model="checkedCategories" @change="handleCheckedCategoriesChange" class="categories">
      <el-checkbox v-for="category in categoryList" :label="category" :key="category.categories.id">{{category.categories.name}}</el-checkbox>
    </el-checkbox-group>
    {{ checkedCategories }}
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import { namespace } from 'vuex-class'
const categories = namespace('categories')

@Component
export default class Categories extends Vue {
  private checkedCategories: Array<object> = [];
  private checkAll: boolean = false;
  private isIndeterminate: boolean = true;

  public handleCheckAllChange(val: boolean): void {
    this.checkedCategories = val ? this.categoryList : [];
    this.isIndeterminate = false;
  }

  public handleCheckedCategoriesChange(value: Array<object>) {
    let checkedCount = value.length;
    this.checkAll = checkedCount === this.categoryList.length;
    this.isIndeterminate = checkedCount > 0 && checkedCount < this.categoryList.length;
  }

  async mounted() {
    await this.getAllCategories();
  }
  @categories.State
  public categoryList!: Array<object>

  @categories.Action
  public getAllCategories!: () => void
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/responsive';
.categories {
  display: flex;
  flex-direction: column;
}
</style>
