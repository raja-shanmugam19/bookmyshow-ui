import axios from 'axios';

export default {

    getMovieDetails(apiUrl) {
        return axios.get(apiUrl)
          .then((response) => {
              return response.data.Search;
          })

    }
}