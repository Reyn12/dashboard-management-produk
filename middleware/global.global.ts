// middleware/global.global.ts
import { defineNuxtRouteMiddleware, navigateTo } from '#app'

export default defineNuxtRouteMiddleware((to) => {
  // Hanya terapkan middleware untuk rute admin
  if (to.path.startsWith('/admin') && to.path !== '/admin/login') {
    // Gunakan process.client untuk cek apakah di client-side
    // Ini lebih konsisten daripada import.meta.client
    if (import.meta.client) {
      const token = localStorage.getItem('auth-token')
      if (!token) {
        return navigateTo('/admin/login', { redirectCode: 301 })
      }
    } else {
      // Di server-side, kita tidak bisa akses localStorage
      // Jadi kita redirect saja ke login untuk amannya
      return navigateTo('/admin/login', { redirectCode: 301 })
    }
  }
})