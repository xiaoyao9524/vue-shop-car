<template>
  <div>
    <v-header></v-header>
    <div class="container">
      <shop-list ref="shopList"></shop-list>
      <shop-car @changeItem="removeItemX"></shop-car>
      <cart-info @clearShopCarList="clearShopCarList"></cart-info>
    </div>
  </div>
</template>

<script>
  import vHeader from './components/Header/Header'
  import ShopList from './components/ShopList/ShopList'
  import ShopCar from './components/ShopCar/ShopCar'
  import CartInfo from './components/CartInfo/CartInfo'

  export default {
    methods: {
      removeItemX (evtValue) {
        this.$refs.shopList.removeItem(evtValue)
      },
      clearShopCarList (shopCarList) {
        this.$refs.shopList.removeAllItem(shopCarList)
      }
    },
    components: {
      vHeader,
      ShopList,
      ShopCar,
      CartInfo
    }
}
</script>

<style>
  .container {
    margin: 0 auto;
    width: 980px;

  }
  .container table, .container h3{
    text-align: center;
  }
</style>
