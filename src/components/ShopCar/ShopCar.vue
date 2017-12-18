<template>
  <div class="shop-car-list">
    <h3>购物车信息</h3>
    <table>
      <thead>
      <tr>
        <th>id</th>
        <th>名称</th>
        <th>价格</th>
        <th>数量</th>
        <th>小计</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="item in shopCarList">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.price}}</td>
          <td>{{item.count}}</td>
          <td>{{item.price * item.count}}</td>
          <td>
            <button @click="reduceItem(item)">-</button>
            <button @click="addItem(item)" :disabled="item.stock<=0">+</button>
            <button @click="removeItem(item)">X</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'

  export default {
    methods: {
      removeItem (item) {
        this.VxRemoveItem(item)
        this.$emit('changeItem', item)
      },
      ...mapMutations({
        setTest: 'SET_TEST',
        addItem: 'ADD_ITEM',
        reduceItem: 'REDUCE_ITEM',
        VxRemoveItem: 'REMOVE_ITEM'
      })
    },
    computed: {
      ...mapGetters({
        shopCarList: 'shopCarList'
      })
    }
  }
</script>

<style scoped>
  .shop-car-list {
    min-height: 300px;
  }
</style>
