<template>
    <div class="cart-info">
      <span>购买总数：{{total}}</span>
      <span>总价：{{totalPrice}}</span>
      <button @click="clearShopCar">清空购物车</button>
    </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'
    export default {
      name: "cart-info",
      data () {
        return {}
      },
      methods: {
        ...mapMutations({
          VXclearShopCar:   'CLEAR_SHOP_CAR'
        }),
        clearShopCar () {
          if (!this.shopCarList.length) {
            return
          }
          let copy = [];
          for (let i = 0; i < this.shopCarList.length; i++) {
            copy.push(JSON.parse(JSON.stringify(this.shopCarList[i])))
          }
          this.VXclearShopCar()
          this.$emit('clearShopCarList', copy)
        }
      },
      computed: {
        ...mapGetters([
          'shopCarList'
        ]),
        total () {
          let total = 0;
          for (let i = 0; i < this.shopCarList.length; i++) {
            total += this.shopCarList[i].count
          }
          return total
        },
        totalPrice () {
          let totalPrice = 0;
          for (let i = 0; i < this.shopCarList.length; i++) {
            totalPrice += this.shopCarList[i].price * this.shopCarList[i].count
          }
          return totalPrice
        }
      }
    }
</script>

<style scoped>

</style>
