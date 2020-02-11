<template>
  <v-app>
    <v-content>
      <List @openCart='handleOpenCart' @openDetail='handleOpenDetail'/>
      <Detail/>
      <Cart :isOpen='isCartOpen' @onOpen="handleOpenCart" v-model='chosenItems'/>
    </v-content>
  </v-app>
</template>

<script>
import List from './components/List';
import Cart from './components/Cart';

export default {
  name: 'App',

  components: {
    List,
    Cart
  },

  data: () => ({
    currentItem: {},
    isCartOpen: false,
    isDetailOPen: false,
    chosenItems: []
  }),

  methods: {
    handleOpenCart (value) {
      console.log('карточка открыта', value)
      this.isCartOpen = value      
    },
    handleOpenDetail (id) {
      console.log('смотрю товар', id)
      this.isDetailOpen = true
    }
  }
};
</script>
