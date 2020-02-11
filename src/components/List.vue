<template>
  <v-container>
    <v-row
     align="center"
     justify="space-between"
     class="mb16"
     >
      <h2 class="display-2">Список товаров</h2>
      <v-btn color="blue" class="my-button white--text" @click="$emit('openCart', true)" medium right top>
        Корзина
      </v-btn>
    </v-row>
    <v-layout row wrap>
        <template v-if="preparedProductsList.length < 3">
          <v-row pa-1>
            <v-col  v-for="(product, index) in preparedProductsList" :key="index">
              <v-hover>
                <v-card slot-scope="{hover}" class="mx-auto" color="gray lighten-4" height="350">
                  <styled-image :color="product.description">
                    <v-expand-transition>
                      <div v-if="hover" class="d-flex transition-fast-in-fast-out orange draken-2 display-3 v-card--reveal display3 black--text" style="height: 100%;">
                        ${{product.price}}
                      </div>
                    </v-expand-transition>
                  </styled-image>

                  <v-card-text class="pt-4" style="position: relative;">
                    <h3 class="display-1 font-weight-light orange--text mb-2">{{product.name}}</h3>
                    <v-btn @click="onOpenDetail(product.id)" color="green" class="my-button white--text" medium right top>
                      Посмотреть
                    </v-btn>
                  </v-card-text>                
                </v-card>
              </v-hover>      
            </v-col>
          </v-row>    
        </template>
        <template v-else>
          <v-carousel
            cycle
            height="400"
            hide-delimiter-background
            show-arrows-on-hover
          >
            <v-carousel-item
              v-for="(product, i) in preparedProductsList"
              :key="i"
            >
              <v-sheet
                height="100%"
              >
                <v-hover>
                  <v-card slot-scope="{hover}" class="mx-auto" color="gray lighten-4" height="350">
                    <styled-image :color="product.description">
                      <v-expand-transition>
                        <div v-if="hover" class="d-flex transition-fast-in-fast-out orange draken-2 display-3 v-card--reveal display3 black--text" style="height: 100%;">
                          ${{product.price}}
                        </div>
                      </v-expand-transition>
                    </styled-image>

                    <v-card-text class="pt-4" style="position: relative;">
                      <h3 class="display-1 font-weight-light orange--text mb-2">{{product.name}}</h3>
                      <v-btn @click="onOpenDetail(product.id)" color="green" class="my-button white--text" medium right top>
                        Посмотреть
                      </v-btn>
                    </v-card-text>                
                  </v-card>
                </v-hover>      
  
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </template>        
    </v-layout>
  </v-container>
</template>

<script>
  import styled from 'vue-styled-components' 
  import products from '@/products.js'

  const backgroundProps = { color: String };

  const StyledImage = styled('div', backgroundProps)`
    display: block;
    width: 100%; 
    height: 60%;
    background: ${props => props.color ?  props.color : 'white'};
  `;

  export default {
    components: {
      StyledImage
    },
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
      },
      onOpenDetail (id) {
        this.$emit('openDetail', id)    
      }
    },
    mounted () {
      // при создании компонента готовим данные для отрисовки карточек товаров
      this.getRandomLimitedList(this.products)
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

</style>