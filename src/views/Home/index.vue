<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-aside style="height: 100vh;">
      <el-input placeholder="Filter by Name" icon="search" />
      <el-menu :default-openeds="['1', '3']" style="height: 100vh;">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>Categories</template>
          <el-menu-item><Categories /></el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
  </el-container>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import Categories from '@/views/Home/Categories.vue';

import { namespace } from 'vuex-class'
const globalValues = namespace('globalValues')

@Component({
  components: {
    Categories
  }
})

export default class Home extends Vue {
    @globalValues.State
  public isLoading!: boolean
}
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
  font-style: none;
}
</style>
