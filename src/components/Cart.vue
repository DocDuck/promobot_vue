<template>
  <v-row justify="center">
    <v-dialog v-model="isCardOpen" scrollable max-width="800px">
      <v-card>        
        <v-simple-table id="printableTable" v-if="tableData.length">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left not-printable"> Изображение</th>
                <th class="text-left">Товар</th>
                <th class="text-left">Описание</th>
                <th class="text-left">Цена</th>
                <th class="text-left">Количество</th>
                <th class="text-left not-printable">Удалить</th>              
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in tableData" :key="i">
                <td class="not-printable"><styled-icon :color="item.description"></styled-icon></td>
                <td>{{ item.name }}</td>
                <td>{{ item.description }}</td>
                <td>${{ item.price }}</td>
                <td>
                  <v-btn class="not-printable" color="darken-1" small text @click="onPlus(item.id)">+</v-btn>
                    {{ item.amount }}
                  <v-btn class="not-printable" color="darken-1" small text @click="onMinus(item.id)">-</v-btn>
                </td>
                <td class="not-printable" ><v-btn color="red" small text @click="onRemove(item.id)">Х</v-btn></td>
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
      tableData: []
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
      onPlus (id) {
        this.tableData.find(item => item.id === id).amount++        
      },
      onMinus (id) {
        if (this.tableData.find(item => item.id === id).amount > 0) {
          this.tableData.find(item => item.id === id).amount--
        }        
      },
      onRemove (id) {
        this.$emit('onRemove', id)
      }
    },
    watch: {
      products () {
        this.tableData = [...this.products].map( item => ({amount: 1, ...item}))
      }    
    },
    mounted () {
      console.log('im mounted', this.products )
      this.tableData = [...this.products].map( item => ({amount: 1, ...item}))
    },
  }
</script>

<style scoped>
  @media print {
    table td, th {
      text-align: center !important;
    }
    table .not-printable {
      display:none !important;
    }
}
</style>>
