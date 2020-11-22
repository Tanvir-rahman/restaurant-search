<template>
  <div class="menu">
    <h2 class="title">Daily Menu</h2>
    <p class="desc"> No Menu Found (Api Issue) </p>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class DailyMenu extends Vue {
  @Prop({ default: [] })
  readonly menu!: Array<object>;
}
</script>
<style lang="scss" scoped>
  .menu {
    margin: 40px 0;
    .title {
      font-size: 30px;
      text-align: center;
      margin: 10px 0;
    }
    .desc {
      text-align: center;
      font-size: 16px;
    }
  }
</style>
