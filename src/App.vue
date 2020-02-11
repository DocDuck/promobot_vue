<template>
  <v-app>
    <v-content>
      <List @openCart='handleOpenCart'/>
      <Cart :isOpen='isCartOpen' @onOpen="setCartVisibility" v-model='chosenItems'/>
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
    isCartOpen: false,
    chosenItems: []
  }),

  methods: {
    handleOpenCart (itemsList = []) {
      console.log('карточка открыта')
      this.isCartOpen = true
      this.chosenItems = itemsList || []
    },
    setCartVisibility (value) {
      this.isCartOpen = value
    }
  }
};
</script>
