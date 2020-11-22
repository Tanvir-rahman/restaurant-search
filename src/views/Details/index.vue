<template>
  <div class="restaurantDetails">
    <div v-if="restaurantDetails" class="details">
      <h1 class="page-title">{{restaurantDetails.name}}</h1>
      <div class="img-container">
        <img :src="restaurantDetails.thumb || 'https://image.freepik.com/free-vector/breakfast-food-doodle-set-vector-illustration_57490-47.jpg'" class="img"/>
      </div>

      <DailyMenu :menu="restaurantMenu" />

      <Reviews :reviews="restaurantReviews" />

      <p v-if="restaurantDetails.user_rating">
        <span class="subtitle">Overall Rating:</span>
        <el-rate
          :value="Number(restaurantDetails.user_rating.aggregate_rating)"
          disabled
          show-score
          text-color="#ff9900">
        </el-rate>
      </p>
      <p class="time"><span class="subtitle">Timing:</span> {{restaurantDetails.timings || 'N/A'}}</p>
      <div class="contact">
        <h2 class="subtitle">Contact Details</h2>
        <p><span class="subtitle">Address:</span> {{ restaurantDetails.location && restaurantDetails.location.address || 'N/A'}}</p>
        <p><span class="subtitle">City:</span> {{ restaurantDetails.location && restaurantDetails.location.city || 'N/A'}}</p>
        <p><span class="subtitle">Locality:</span> {{restaurantDetails.location && restaurantDetails.location.locality || 'N/A'}}</p>
        <p><span class="subtitle">Phone Number:</span> {{restaurantDetails.phone_numbers || 'N/A' }}</p>
      </div>
    </div>
    <div class="no-data-container" v-else>
      <img src="https://admissions.nyinst.com/images/no-data.png" />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import DailyMenu from '@/views/Details/DailyMenu.vue'
import Reviews from '@/views/Details/Reviews.vue'

import { namespace } from 'vuex-class'

const restaurants = namespace('restaurants')

@Component({
  components: {
    DailyMenu,
    Reviews,
  }
})

export default class Details extends Vue {
  public async mounted() {
    const params:any = {res_id: this.$route.params.id};
    await this.getRestaurantDetails(params);
    await this.getRestaurantReviews(params)
    await this.getRestaurantMenu(params);
  }

  @restaurants.State
  public restaurantDetails!: object

  @restaurants.State
  public restaurantMenu!: Array<object>

  @restaurants.State
  public restaurantReviews!: Array<object>

  @restaurants.Action
  public getRestaurantDetails!: (params: any) => void

  @restaurants.Action
  public getRestaurantMenu!: (params: any) => void

  @restaurants.Action
  public getRestaurantReviews!: (params: any) => void

}
</script>
<style lang="scss" scoped>
  .details {
    font-size: 16px;
    text-align: center;
    .img-container {
      display: flex;
      justify-content: center;
      .img {
        height: 500px;
        width: 500px
      }
    }

    .subtitle {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .time {
      margin: 10px 0;
    }

    .contact p {
      margin-bottom: 5px;
    }
  }
  
  .no-data-container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
