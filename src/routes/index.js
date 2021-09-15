import { createRouter, createWebHashHistory} from 'vue-router'
import Home from'./Home'
import Movie from './Movie'
import About from './about'
import NotFound from './NotFound'
export default createRouter ({
  // Hash
  // http://google.com/#/search
  history: createWebHashHistory(),
  scrollBehavior(){
    return { top: 0 }
  },
  // pages
  routes: [
    {
      path: '/',
      component: Home
    },
    { 
      path: '/movie/:id',
      component: Movie
    },
    { // 페이지경로와 해당 페이지에 연결할 컴포넌트 작성
      path: '/about',
      component: About
    },
    { 
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
})