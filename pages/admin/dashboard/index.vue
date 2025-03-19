<script>
export default {
  setup() {
    const userData = ref(null)
    const router = useRouter()

    onMounted(() => {
      // Ambil data user dari localStorage
      if (import.meta.client) {
        const userDataStr = localStorage.getItem('user-data')
        if (userDataStr) {
          userData.value = JSON.parse(userDataStr)
        }
      }
    })

    function handleLogout() {
      try {
        // Hapus token dan data user dari localStorage
        localStorage.removeItem('auth-token')
        localStorage.removeItem('user-data')
        
        // Redirect ke halaman login
        router.push('/admin/login')
        
        // Tambahkan notifikasi logout berhasil jika perlu
        alert('Logout berhasil')
      } catch (error) {
        console.error('Logout error:', error)
      }
    }

    return {
      userData,
      handleLogout
    }
  }
}
</script>

<template>
    <div class="dashboard-container">
      <div class="dashboard-header">
        <h2>Dashboard Admin</h2>
        <button class="logout-btn" @click="handleLogout">Logout</button>
      </div>
      <div class="dashboard-content">
        <p>Selamat datang di Dashboard Admin</p>
        <!-- Konten dashboard lainnya di sini -->
      </div>
    </div>
  </template>
  

  
  <style scoped>
  .dashboard-container {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .dashboard-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    padding-bottom: 15px;
    border-bottom: 1px solid #eee;
  }
  
  .logout-btn {
    background-color: var(--color-primary);
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>