<template>
    <div class="auth-layout">
      <div class="auth-container">
        <div class="auth-logo">
          <!-- Logo perusahaan -->
          <h2>Dashboard Management Product</h2>
        </div>
        
        <main class="auth-content">
          <slot /> <!-- Form login akan muncul di sini -->
        </main>
        
        <footer class="auth-footer">
          <p>© 2025 Dashboard Management Product</p>
        </footer>
      </div>
    </div>
  </template>
  
  <style scoped>
  .auth-layout {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f7fa;
  }
  
  .auth-container {
    width: 400px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    padding: 2rem;
  }
  
  .auth-logo {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .auth-footer {
    margin-top: 2rem;
    text-align: center;
    font-size: 0.8rem;
    color: #7f8c8d;
  }
  </style>