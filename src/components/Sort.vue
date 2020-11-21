<template>
  <el-select v-model="selectedOption" placeholder="Sort by" @change="updatedOption">
    <el-option
      v-for="item in options"
      :label="item.label"
      :value="item.value"
      :key="item.value"
    >
    </el-option>
  </el-select>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class Sort extends Vue {
  private options: Array<object> = [
    {
      label: 'Rating',
      value: 'rating'
    },
    {
      label: 'Cost',
      value: 'cost'
    }
  ]
  private selectedOption: any = {
    label: 'Rating',
    value: 'rating'
  };

  public updatedOption(val: object): void {
    this.$emit('sort', val);
  }
}
</script>

<style lang="scss" scoped>
</style>
