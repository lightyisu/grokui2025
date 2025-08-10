import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Voice from '@/views/VoiceView.vue'
import FileView from '@/views/FileView.vue'
import TaskView from '@/views/TaskView.vue'
import ProjectView from '@/views/ProjectView.vue'
import HistoryView from '@/views/HistoryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/voice',
      name: 'voice',
      component: Voice,
    },
    {
      path: '/file',
      name: 'file',
      component: FileView,
    },
    {
      path:'/task',
      name:'task',
      component:TaskView
    },
    {
      path:'/project',
      name:'project',
      component:ProjectView
    },
    {
      path:'/history',
      name:'history',
      component:HistoryView
    }
  ],
})

export default router
