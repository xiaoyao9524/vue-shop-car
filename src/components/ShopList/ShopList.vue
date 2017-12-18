<template>
  <div class="shop-list">
    <h3>商品信息</h3>
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>名称</th>
          <th>价格</th>
          <th>数量</th>
          <th>库存</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in shopList">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.price}}</td>
          <td>{{item.count}}</td>
          <td>{{item.stock}}</td>
          <td>
            <button @click="addToCar(item)" v-if="item.count === 0">加入购物车</button>
            <button @click="reduceItem(item)" v-if="item.count > 0">-</button>
            <button @click="addItem(item)" v-if="item.count" :disabled="item.stock<=0">+</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'

  export default {
    data: function () {
      return {
        shopList: [
          {
            id: 1,
            name: '鱼香肉丝',
            price: 12,
            stock: 4,
            count: 0
          },
          {
            id: 2,
            name: '宫保鸡丁',
            price: 14,
            stock: 5,
            count: 0
          },
          {
            id: 3,
            name: '土豆丝',
            price: 10,
            stock: 2,
            count: 0
          },
          {
            id: 4,
            name: '米饭',
            price: 2,
            stock: 3,
            count: 0
          }
        ]
      }
    },
    methods: {
      removeItem(item) {
        let obj = this.shopList .find(function (data) {
          return item.id === data.id
        })

        let count = item.count
        let stock = item.stock
        obj.stock = count + stock
        obj.count = 0
      },
      removeAllItem (shopCarList) {
        for (let i = 0; i < shopCarList.length; i++) {
          this.removeItem(shopCarList[i]);
        }
      },
      ...mapMutations({
        addToCar: 'ADD_TO_CAR',
        addItem: 'ADD_ITEM',
        reduceItem: 'REDUCE_ITEM'
      })
    },
    computed: {
      ...mapGetters([
        'shopCarList'
      ])
    }
  }
</script>

<style>
  .shop-list {
    margin: 30px 0;
  }
  h3 {
    margin: 20px 0;
  }
  table,th,td {
    border: 2px solid #ccc;
  }
  table {
    width: 100%;
    height: 30px;
    border-spacing: 0;
    border-collapse: collapse;
  }
  tbody tr:hover {
    background: #c9c9c9;
    border: 2px solid red;
  }
  .btn {
    padding: 3px 8px;
  }
</style>
