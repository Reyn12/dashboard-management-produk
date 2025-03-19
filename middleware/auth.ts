// middleware/auth.ts
import { defineNuxtRouteMiddleware, navigateTo } from 'nuxt/app'

export default defineNuxtRouteMiddleware((_to, _from) => {
    // Gunakan useNuxtApp().ssrContext untuk cek apakah di client-side
    if (import.meta.client) {
      const token = localStorage.getItem('auth-token')
      if (!token) {
        return navigateTo('/admin/login')
      }
    }
  })