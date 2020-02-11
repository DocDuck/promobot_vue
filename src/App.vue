<template>
  <v-app>
    <v-content>
      <List/>
    </v-content>
  </v-app>
</template>

<script>
import List from './components/List';

export default {
  name: 'App',

  components: {
    List,
  },

  data: () => ({
    //
  }),
};
</script>
