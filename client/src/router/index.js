import Vue from 'vue'
import Router from 'vue-router'

//User
import UserIndex from '@/components/Users/Index'
import UserCreate from '@/components/Users/CreateUser'
import UserEdit from '@/components/Users/EditUser'
import UserShow from '@/components/Users/ShowUser'

//Login
import Login from '@/components/Login'

//Blog
import BlogIndex from '@/components/Blogs/Index'
import BlogEdit from '@/components/Blogs/EditBlog'
import BlogCreate from '@/components/Blogs/CreateBlog'
import BlogShow from '@/components/Blogs/ShowBlog'

//comment
import CommentIndex from '@/components/Comment/Index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    //User
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/create',
      name: 'user-create',
      component: UserCreate
    },
    {
      path: '/user/edit',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user/show/:userId',
      name: 'user-show',
      component: UserShow
    },
    //login
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    //Blog
    {
      path: '/blogs',
      name: 'blogs',
      component: BlogIndex
    },
    {
      path: '/blog/edit/:blogId',
      name: 'blog-edit',
      component: BlogEdit
    },
    {
      path: '/blog/:blogId',
      name: 'blog',
      component: BlogShow
    },
    {
      path: '/blog/create',
      name: 'blog-edit',
      component: BlogCreate
    },
    //comment
    {
      path: '/comments',
      name: 'comments',
      component: CommentIndex
    },
  ]
})
