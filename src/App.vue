<template>
  <v-app>
    <v-content>
      <List v-if="!isDetailOpen" @openCart='handleOpenCart' @openDetail='handleOpenDetail'/>
      <Detail v-if="isDetailOpen" :isOpen='isDetailOpen' :product="currentItem" @onClose="handleCloseDetail" />
      <Cart :isOpen='isCartOpen' @onOpen="handleOpenCart" v-model='chosenItems'/>
    </v-content>
  </v-app>
</template>

<script>
import List from './components/List';
import Cart from './components/Cart';
import Detail from './components/Detail';
import products from '@/products.js'

export default {
  name: 'App',

  components: {
    List,
    Cart,
    Detail
  },

  data: () => ({
    currentItem: {},
    isCartOpen: false,
    isDetailOpen: false,
    chosenItems: []
  }),

  methods: {
    handleOpenCart (value) {
      console.log('карточка открыта', value)
      this.isCartOpen = value      
    },
    handleOpenDetail (productId) {
      this.currentItem = products.find(item => item.id === productId)
      this.isDetailOpen = true
    },
    handleCloseDetail () {      
      this.isDetailOpen = false
    }
  }
};
</script>
