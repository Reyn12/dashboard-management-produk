<template>
    <div class="admin-layout">
      <div class="sidebar">
        <!-- Sidebar navigasi admin -->
      </div>
      
      <div class="main-content">
        <nav class="admin-navbar">
          <!-- Navbar admin -->
        </nav>
        
        <main>
          <slot /> <!-- Ini akan diisi konten dari page admin -->
        </main>
      </div>
    </div>
  </template>
  
  <style scoped>
  .admin-layout {
    display: flex;
    min-height: 100vh;
  }
  
  .sidebar {
    width: 250px;
    background-color: #2c3e50;
    color: white;
  }
  
  .main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  .admin-navbar {
    height: 60px;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  main {
    flex: 1;
    padding: 20px;
    background-color: #f5f7fa;
  }
  </style>