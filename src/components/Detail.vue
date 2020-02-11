<template>
  <v-row justify="center">
    <v-card>
        <v-card-title>Товар</v-card-title>
            <v-card-text class="pt-4" style="position: relative;">
                <h3 class="display-1 font-weight-light orange--text mb-2">{{product.name}}</h3>
                <p>{{product.price}}</p>
                <p>{{product.description}}</p>
            </v-card-text>         
            <v-card-actions>
                <v-btn color="blue darken-1" text @click="$emit('onClose')">Закрыть</v-btn>
                <v-btn color="blue darken-1" text @click="buy">Добавить</v-btn>
            </v-card-actions>
    </v-card>    
  </v-row>
</template>
<script>
    export default {
        props: ['product'],
        computed: {
        isDescOpen: {
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
            console.log(this.product)
        }
    }
</script>

<style scoped>
    
</style>