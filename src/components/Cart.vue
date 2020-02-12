<template>
  <v-row justify="center">
    <v-dialog v-model="isCardOpen" scrollable max-width="300px">
      <v-card>        
        <v-list>
          <v-subheader>ТОВАРЫ</v-subheader>
          <v-list-item-group v-model="item" color="primary">
          <v-list-item
            v-for="(item, i) in products"
            :key="i"
            :inactive="inactive"
          >
            <v-list-item-avatar v-if="avatar">
              <styled-icon :color="item.description"></styled-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{item.name}}</v-list-item-title>
              <v-list-item-subtitle>{{item.description}}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon>
                <v-icon color="grey lighten-1">убрать товар</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
          
        </v-list-item-group>
        </v-list>          
        <v-card-actions>
          <v-btn color="blue darken-1" text @click="isCardOpen = false">Закрыть</v-btn>
          <v-btn color="blue darken-1" text @click="buy">Купить</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
  import styled from 'vue-styled-components' 
  
  const backgroundProps = { color: String };

  const StyledIcon = styled('div', backgroundProps)`
    display: block;
    width: 24px; 
    height: 24px;
    background: ${props => props.color ?  props.color : 'gray'};
  `;

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
