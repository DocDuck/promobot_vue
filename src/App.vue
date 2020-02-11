<template>
  <v-app>
    <v-content>
      <List @openCart='handleOpenCart'/>
      <Cart :isOpen='isCartOpen' v-bind='chosenItems'/>
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
    }
  }
};
</script>
