<template>
    <v-container>
        <v-row
            class="m16"
            justify="center">
            <v-card>
                <v-card-title>Товар</v-card-title>
                    <v-card-text class="pt-4" style="position: relative;">
                        <h3 class="display-1 font-weight-light orange--text mb-2">{{product.name}}</h3>
                        <p>${{product.price}}</p>
                        <p>{{product.description}}</p>
                    </v-card-text>         
                    <v-card-actions>
                        <v-btn color="blue darken-1" text @click="$emit('onClose')">Закрыть</v-btn>
                        <v-btn :disabled="isAdded" color="blue darken-1" text @click="add">Добавить</v-btn>
                    </v-card-actions>
            </v-card>    
        </v-row>
    </v-container>
</template>
<script>
    export default {
        props: ['product'],
        data: () => ({
            isAdded: false
        }),
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
            add() {
                this.$emit('addItem', this.product)
                alert(`Продукт ${this.product.name} добавлен!`)
                this.isAdded = true
            }
        }
    }
</script>

<style scoped>
    
</style>