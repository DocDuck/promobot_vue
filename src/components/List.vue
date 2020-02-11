<template>
  <v-container>
    <h2 class="display-2 mb-4">Список товааров</h2>

    <v-layout row wrap>
      <template v-for="(product, index) in preparedProductsList">
        <v-flex xs2 pa-1 :key="index">
          <v-hover>
            <v-card slot-scope="{hover}" class="mx-auto" color="gray lighten-4" max-width="600" height="350">
              <v-img :src="product.src" :aspect-ratio="16/9">
                <v-expand-transition>
                  <div v-if="hover" class="d-flex transition-fast-in-fast-out orange draken-2 display-3 v-card--reveal display3 black--text" style="height: 100%;">
                    ${{product.price}}
                  </div>
                </v-expand-transition>
              </v-img>

              <v-card-text class="pt-4" style="position: relative;">
                <h3 class="display-1 font-weight-light orange--text mb-2">{{product.name}}</h3>
                <v-btn color="green" class="my-button white--text" medium right top>
                  Купить
                </v-btn>
              </v-card-text>
              
            </v-card>
          </v-hover>
        </v-flex>
      </template>
    </v-layout>
  </v-container>
</template>

<script>
  import products from '@/products.js' 
  export default {
    data: () => ({
      products,
      preparedProductsList: []
    }),
    computed: {
      //
    },
    methods: {
      getRandomLimitedList (sourceArray) {
        // перемешиваем джейсон с товарами
        const sortedArray = sourceArray.sort(() => Math.random() - 0.5 )
        // генерируем случайный рендеринг карточек товаров с 1 до 10
        const cardAmount = Math.floor(1 + Math.random() * 10)
        // кладём ограниченное число товаров из перемешанного массива в новый массив
        for (let i = 0; i < cardAmount; i++) {
          this.preparedProductsList.push(sortedArray[i])          
        }        
      }
    },
    mounted () {
      // при создании компонента готовим данные для отрисовки карточек товаров
      this.getRandomLimitedList(this.products)
      console.log(this.preparedProductsList)
    }
  }
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%; 
}
.v-card h3.display-1 {
  font-size: 24px !important;
}

.my-button {

}
</style>