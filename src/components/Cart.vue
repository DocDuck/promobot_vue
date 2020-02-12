<template>
  <v-row justify="center">
    <v-dialog v-model="isCardOpen" scrollable max-width="800px">
      <v-card>        
        <v-simple-table id="printableTable" v-if="products.length">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Изображение</th>
                <th class="text-left">Товар</th>
                <th class="text-left">Описание</th>
                <th class="text-left">Цена</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in products" :key="item.name">
                <td><styled-icon :color="item.description"></styled-icon></td>
                <td>{{ item.name }}</td>
                <td>{{ item.description }}</td>
                <td>${{ item.price }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <v-card-text class="pt-4" v-else>
          <h3 class="title font-weight-light orange--text mb-2">Ничего нет...</h3></v-card-text>    
        <v-card-actions class="justify-space-around">
          <v-btn class="title" color="blue darken-1" @click="isCardOpen = false">Закрыть</v-btn>
          <v-btn class="title" v-if="products.length" v-print="'#printableTable'" color="blue darken-1">Распечатать позиции</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
 
  import { StyledIcon } from '../components/StyledComponents'

  export default {
    components: {
      StyledIcon
    },
    props: ['isOpen', 'products'],
    data: () => ({
      
    }),
    computed: {
      isCardOpen: {
        get: function () { return this.isOpen },
        set: function (value) {
            this.$emit('onOpen', value)
        }
      },
      productList () {
        return this.products || []
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
