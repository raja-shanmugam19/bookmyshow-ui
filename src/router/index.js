import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieDetail from '@/components/moviedetail/MovieDetail.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/movie/:id',
      name: 'MovieDetail',
      component: MovieDetail
    }
  ],
  mode: 'history'
})
