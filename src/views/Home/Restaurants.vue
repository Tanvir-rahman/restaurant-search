<template>
  <el-row :gutter="10" style="margin: 0; width: 100%; height: 100vh">
    <el-col v-for="restaurant in restaurants" :key="restaurant.restaurant.id" :xs="24" :sm="12" :md="8">
      <el-card :body-style="{ padding: '0px' }" class="card">
        <img :src="restaurant.restaurant.thumb || 'https://image.freepik.com/free-vector/breakfast-food-doodle-set-vector-illustration_57490-47.jpg'" class="image">
        <div style="padding: 14px;">
          <span>{{ restaurant.restaurant.name }}</span>
          <div class="bottom clearfix">
            <span class="time">Rating: {{ restaurant.restaurant.user_rating.aggregate_rating }}</span>
            <span type="text" class="address">{{ restaurant.restaurant.location.address }}, {{ restaurant.restaurant.location.city }}</span>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col v-if="restaurants.length === 0" class="no-data-container">
      <img src="https://admissions.nyinst.com/images/no-data.png" />
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Restaurants extends Vue {
  @Prop({ default: [] })
  readonly restaurants!: Array<object>;
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/responsive';
  .card {
    margin-bottom: 10px;
    height: 600px;
  }

  .time {
    font-size: 13px;
    color: #999;
    width: 20%;
  }
  
  .bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 13px;
    line-height: 12px;
  }

  .address {
    padding: 0;
    width: 80%;
    text-overflow: ellipsis;
    text-align: end;
  }

  .image {
    width: 100%;
    display: block;
  }

  .no-data-container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>
