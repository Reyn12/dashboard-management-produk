<script>
export default {
    layout: 'default',
    data() {
        return {
            username: 'emilys', // username default dari DummyJSON
            password: 'emilyspass',     // password default dari DummyJSON
            error: null,
            loading: false
        }
    },
    methods: {
        async handleLogin() {
            try {
                this.loading = true
                this.error = null

                const data = await $fetch('https://dummyjson.com/auth/login', {
                    method: 'POST',
                    body: {
                        username: this.username,
                        password: this.password
                    }
                })

                console.log('Login berhasil:', data)

                // Simpan token di localStorage
                localStorage.setItem('auth-token', data.token)
                localStorage.setItem('user-data', JSON.stringify(data))

                // Redirect ke dashboard
                this.$router.push('/admin/dashboard')

            } catch (error) {
                this.error = error.message || 'Login gagal, coba lagi'
                console.error('Login error:', error)
            } finally {
                this.loading = false
            }
        }
    }
}
</script>

<template>
    <section class="container">
        <div class="login-container">
            <div class="circle circle-one" />
            <div class="form-container">
                <img
                    src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png"
                    alt="illustration"
                    class="illustration"
                >
                <h1 class="opacity">LOGIN ADMIN</h1>
                <form @submit.prevent="handleLogin">
                    <input
                        v-model="username"
                        type="text"
                        placeholder="USERNAME"
                        :disabled="loading"
                    >
                    <input
                        v-model="password"
                        type="password"
                        placeholder="PASSWORD"
                        :disabled="loading"
                    >
                    <p v-if="error" class="error-message">{{ error }}</p>
                    <button
                        class="opacity"
                        type="submit"
                        :disabled="loading"
                    >{{ loading ? 'LOADING...' : 'LOGIN' }}</button>
                </form>
                <div class="register-forget opacity">
                    <a href="#">REGISTER</a>
                    <a href="#">FORGOT PASSWORD</a>
                </div>
            </div>
            <div class="circle circle-two" />
        </div>
    </section>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: var(--color-primary);
    color: var(--color-white);
    letter-spacing: 1px;
}

a {
    text-decoration: none;
    color: var(--color-white);
}

h1 {
    font-size: 2.5rem;
}

.login-container {
    position: relative;
    width: 22.2rem;
}

.form-container {
    border: 1px solid hsla(0, 0%, 65%, 0.158);
    box-shadow: 0 0 36px 1px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    backdrop-filter: blur(20px);
    z-index: 99;
    padding: 2rem;
}

.login-container form input {
    display: block;
    padding: 14.5px;
    width: 100%;
    margin: 2rem 0;
    color: var(--color-white);
    outline: none;
    background-color: #9191911f;
    border: none;
    border-radius: 5px;
    font-weight: 500;
    letter-spacing: 0.8px;
    font-size: 15px;
    backdrop-filter: blur(15px);
}

.login-container form input:focus {
    box-shadow: 0 0 16px 1px rgba(0, 0, 0, 0.2);
    animation: wobble 0.3s ease-in;
}

.login-container form button {
    background-color: var(--color-primary);
    color: var(--color-white);
    display: block;
    padding: 13px;
    border-radius: 8px; /* Lebih bulat */
    outline: none;
    font-size: 18px;
    letter-spacing: 1.5px;
    font-weight: bold;
    width: 100%;
    cursor: pointer;
    margin-bottom: 2rem;
    transition: all 0.2s ease-in-out;
    border: none;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Tambah bayangan */
}

.login-container form input::placeholder {
    color: var(--color-white);
    opacity: 0.8; /* Biar tidak terlalu mencolok */
}

.login-container form button:hover {
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.15);
    transform: scale(1.02);
}

.circle {
    width: 8rem;
    height: 8rem;
    background: var(--color-primary);
    border-radius: 50%;
    position: absolute;
}

.illustration {
    position: absolute;
    top: -14%;
    right: -2px;
    width: 90%;
}

.circle-one {
    top: 0;
    left: 0;
    z-index: -1;
    transform: translate(-45%, -45%);
}

.circle-two {
    bottom: 0;
    right: 0;
    z-index: -1;
    transform: translate(45%, 45%);
}

.register-forget {
    margin: 1rem 0;
    display: flex;
    justify-content: space-between;
}

.opacity {
    opacity: 0.6;
}

@keyframes wobble {
    0% {
        transform: scale(1.025);
    }
    25% {
        transform: scale(1);
    }
    75% {
        transform: scale(1.025);
    }
    100% {
        transform: scale(1);
    }
}

@media screen and (max-width: 768px) {
    .login-container {
        width: 90%;
        max-width: 22.2rem;
    }

    .illustration {
        width: 70%;
        top: -10%;
    }

    h1 {
        font-size: 2rem;
    }

    .form-container {
        padding: 1.5rem;
    }

    .login-container form input {
        margin: 1.5rem 0;
        padding: 12px;
    }
}

@media screen and (max-width: 480px) {
    .illustration {
        width: 60%;
        top: -8%;
    }

    h1 {
        font-size: 1.8rem;
    }

    .register-forget {
        flex-direction: column;
        gap: 0.8rem;
        align-items: center;
    }

    /* Error Message */
    .error-message {
        color: #ff4757;
        font-size: 14px;
        margin: 10px 0;
        text-align: center;
        background: rgba(255, 71, 87, 0.1);
        padding: 8px;
        border-radius: 4px;
    }
}
</style>