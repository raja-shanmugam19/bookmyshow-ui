<template>
  <div class="leftContainer column">
    <v-row>
      <v-col class="d-flex justify-content" justify-startclass cols="4" sm="4">
        <v-text-field
          v-model="searchMovie"
          label="Search Movie"
          solo
        ></v-text-field>
        <v-col v-for="(item, index) in wholeResponse" :key="index">
          <v-card @click="showMovieDetails(item)">
            <v-card-text>{{ item.Title }}</v-card-text>
            <v-card-text class="year">{{ item.Year }}</v-card-text>
          </v-card>
        </v-col>
      </v-col>
      <v-col>
        <MovieDetail :singleMovie="singleMovie"></MovieDetail>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import MovieDetail from "../moviedetail/MovieDetail.vue";
import movieService from "../../services/MovieService";

export default {
  name: "MovieList",
  components: {
    MovieDetail,
  },
  data() {
    return {
      wholeResponses: [],
      loading: true,
      singleMovie: "",
      searchMovie: null,
      apiUrl: "http://localhost:3000/movielist",
    };
  },
  methods: {
    showMovieDetails(item) {
      this.singleMovie = item;
    },
  },

  mounted() {
    movieService
      .getMovieDetails(this.apiUrl)
      .then((response) => {
        this.wholeResponses = response;
        this.loading = false;
        console.log(this.wholeResponses);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed: {
    wholeResponse() {
      if (this.searchMovie) {
        return this.wholeResponses.filter((item) => {
          return this.searchMovie
            .toLowerCase()
            .split(" ")
            .every((v) => item.Title.toLowerCase().includes(v));
        });
      } else {
        return this.wholeResponses;
      }
    },
  },
};
</script>
<style>
.searchMovie {
  width: 250px;
  height: 30px;
}
.leftContainer {
  margin-top: 20px;
}
.d-flex {
  margin-left: -80px;
}
.year {
  margin-left: 0px;
}
</style>