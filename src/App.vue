<template>
  <div id="app">
    <v-container>
      <v-row>
        <v-col>
          <MovieList/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import MovieList  from '@/components/movielist/MovieList.vue'

export default {
  name: "App",
  components : {
    MovieList
  },};
</script>

<style>
</style>
