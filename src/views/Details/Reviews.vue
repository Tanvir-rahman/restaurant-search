<template>
  <div class="review">
    <h2 class="title">Reviews</h2>
    <el-row :gutter="10" style="margin: 0;">
    <el-col :xs="24" :sm="12" :md="8" v-for="review in reviews" :key="review.id">
      <el-card class="item" v-if="review.review">
        <div class="desc"><span class="subtitle">Name:</span> {{ review.review.user.name || 'N/A'}}</div>
        <p class="desc"><span class="subtitle">Details:</span> {{ review.review.review_text || 'N/A'}}</p>
        <el-rate
          :value="Number(review.review.rating)"
          disabled
          show-score
          text-color="#ff9900"
          class="desc">
        </el-rate>
        <p class="desc"><span class="subtitle">Time:</span> {{ review.review.review_time_friendly || 'N/A'}}</p>
      </el-card>
    </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Reviews extends Vue {
  @Prop({ default: [] })
  readonly reviews!: Array<object>;
}
</script>
<style lang="scss" scoped>
.review {
  margin-bottom: 40px;
  .title {
    font-size: 30px;
    text-align: center;
    margin: 10px 0;
  }
  .item {
    height: 180px;
    margin-bottom: 10px;
    overflow: auto;
    font-size: 14px;
    .desc {
      margin-bottom: 10px;
    }
    .subtitle {
      font-weight: bold;
    }
  }
 }
</style>
