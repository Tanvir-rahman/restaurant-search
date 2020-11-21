<template>
  <el-select v-model="selectedOption" placeholder="Order by" @change="updatedOption">
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
export default class Order extends Vue {
  private options: Array<object> = [
    {
      label: 'Ascending',
      value: 'asc'
    },
    {
      label: 'Descending',
      value: 'desc'
    }
  ]
  private selectedOption: any =     {
    label: 'Ascending',
    value: 'asc'
  };

  public updatedOption(val: object): void {
    this.$emit('order', val);
  }
}
</script>

<style lang="scss" scoped>
</style>
