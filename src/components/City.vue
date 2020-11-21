<template>
  <div>
  <el-select
    v-model="value"
    filterable
    :clearable="true"
    remote
    reserve-keyword
    placeholder="Please enter city name"
    :remote-method="filteredCities"
    :loading="loading"
    no-match-text="No matching data"
    no-data-text="No data"
    @change="updatedOption"
  >
    <el-option
      v-for="item in cityList"
      :key="item.id"
      :label="item.name"
      :value="item.id">
    </el-option>
  </el-select>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Debounce } from 'vue-debounce-decorator'

import { namespace } from 'vuex-class'

const cities = namespace('cities')

@Component
export default class City extends Vue {
  private loading: boolean = false;
  private value: any = [];

  mounted() {
    this.filteredCities('');  
  }

  @cities.State
  public cityList!: Array<object>

  @cities.Action
  public getAllCities!: (params: any) => void

  @Debounce(500)
  public filteredCities(query: string): void {
    if (query !== '') {
      this.loading = true;

      const params:any = {};
      params.q = query;
      try {
        this.getAllCities(params);
      } catch (error) {
      } finally {
        this.loading = false
      }
    }
  }

  public updatedOption(val: any): void {
    this.$emit('cityUpdate', val);
  }
}
</script>

<style lang="scss" scoped>
</style>
