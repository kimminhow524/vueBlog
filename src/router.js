import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue';
import Home from './components/Home.vue';
import Detail from './components/Detail.vue';
import ErrorPage from './components/Error.vue';
import Author from './components/Author.vue';
import Comment from './components/Comment.vue';

const routes = [
  {
    path: "/list",
    component: List,
  },
  {
    path: "/",
    component: Home, 
  }
 , {
    path: "/detail/:id(\\d+)",
    component: Detail, 
    children:[{
     path: "/author",
    component: Author
  },
  {
    path: "/Comment",
    component: Comment
  }
]
  }
  , {
    path: "/:any(.*)",
    component: ErrorPage, 
  }
 ,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 