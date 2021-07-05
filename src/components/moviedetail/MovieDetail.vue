<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-row no-gutters class="pt-5" v-show="singleMovie">
          <v-col cols="8">
            <v-container class="px-10 pt-10">
              <h1 class="mb-1">
                {{ singleMovie.Title }} ({{ singleMovie.Year }})
              </h1>
              <p class="mb-1"><b>Title:</b> {{ singleMovie.Title }}</p>
              <p class="mb-1"><b>Type:</b> {{ singleMovie.Type }}</p>
              <p class="mb-1"><b>Year:</b> {{ singleMovie.Year }}</p>
              <p class="mb-1"><b>imdbID:</b> {{ singleMovie.imdbID }}</p>
            </v-container>
          </v-col>
          <v-col cols="4">
            <v-card tile class="pa-2">
              <v-img
                :src="singleMovie.Poster"
                height="100%"
                max-height="950"
              ></v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "MovieDetail",
  metaInfo: {
    title: "Movie Details",
  },
  props: ["singleMovie"],
};
</script>
<style>
.mb-1 {
  margin-bottom: 10px;
}
</style>
