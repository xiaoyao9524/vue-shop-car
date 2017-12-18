import * as types from './mutation-types'

const matutaions = {
  [types.SET_TEST] (state, test) {
    state.test = test
  },
  [types.ADD_TO_CAR] (state, item) {
    var obj = state.shopCarList.find(function (obj, index) {
        return obj.id === item.id
    })
    if (!obj) {
      item.count = 1
      item.stock--
      state.shopCarList.push(item)
    } else {
      obj.count = 1
    }
  },
  [types.ADD_ITEM] (state, item) {
    if (item.stock <= 0) {
      return
    }
    var data = state.shopCarList.find(function (obj, index) {
      return obj.id === item.id
    })
    if (data) {
      item.count++
      item.stock--
    }
  },
  [types.REDUCE_ITEM] (state, item) {
    var data = state.shopCarList.find(function (obj, index) {
      return obj.id === item.id
    })
    if (data) {
      item.count--
      item.stock++
      if (item.count <= 0) {
        let index = state.shopCarList.findIndex(function (obj, index) {
          return obj.id === item.id
        })
        state.shopCarList.splice(index, 1)
      }
    }
  },
  [types.REMOVE_ITEM] (state, item) {
    let num = state.shopCarList.findIndex(function (a, index) {
      return a.id === item.id
    })
    state.shopCarList.splice(num, 1)
  },
  [types.CLEAR_SHOP_CAR] (state) {
    state.shopCarList = []
  }
}

export default matutaions
