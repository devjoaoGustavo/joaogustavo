<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <v-img :src="require('./assets/million-logo.svg')" width="64" height="64"></v-img>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn depressed small to="/">Home</v-btn> | <v-btn depressed small to="/about">About</v-btn>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>
