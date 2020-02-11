<template>
  <v-row justify="center">
    <v-dialog v-model="isCardOpen" scrollable max-width="300px">
      <v-card>
        <v-card-title>Товары</v-card-title>
        <v-divider></v-divider>
            тут будет список товаров
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" text @click="isCardOpen = false">Закрыть</v-btn>
          <v-btn color="blue darken-1" text @click="buy">Купить</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>

  export default {
    props: ['value', 'isOpen'],
    data: () => ({
      
    }),
    computed: {
      isCardOpen: {
        get: function () { return this.isOpen },
        set: function (value) {
            this.$emit('onOpen', value)
        }
      }
    },
    methods: {
      removeProduct (id) {
        console.log('товар удалён', id)
      },
      buy() {
        console.log('вот что я купил', this.value )   
      }
    },
    mounted () {
        console.log('isCardOpen', this.isCardOpen)
    }
  }
</script>

<style scoped>
    
</style>