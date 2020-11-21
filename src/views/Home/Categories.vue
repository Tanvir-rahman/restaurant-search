<template>
  <div>
    <el-radio-group v-model="checkedCategory" class="categories" @change="updatedOption">
      <el-radio v-for="category in categoryList" :label="category.categories.id" :key="category.categories.id" class="category">{{category.categories.name}}</el-radio>
    </el-radio-group>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import { namespace } from 'vuex-class'
const categories = namespace('categories')

@Component
export default class Categories extends Vue {
  private checkedCategory: number = 1;

  async mounted() {
    await this.getAllCategories();
  }
  @categories.State
  public categoryList!: Array<object>

  @categories.Action
  public getAllCategories!: () => void

  public updatedOption(val: object): void {
    console.log(val);
    this.$emit('categoryUpdate', val);
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/responsive';
.categories {
  display: flex;
  flex-direction: column;
  padding: 10px 50px;
  .category {
    margin-bottom: 10px;
  }
}
</style>
