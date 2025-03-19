<template>
    <nav class="navbar">
        <div class="navbar-container">
            <div class="navbar-logo">
                <NuxtLink to="/">
                    <h1>Cyber Market</h1>
                </NuxtLink>
            </div>

            <div class="hamburger" :class="{ 'active': isMenuOpen }" @click="toggleMenu">
                <span class="bar" />
                <span class="bar" />
                <span class="bar" />
            </div>

            <div class="navbar-right">
                <ul class="navbar-menu" :class="{ 'active': isMenuOpen }">
                    <li class="navbar-item">
                        <NuxtLink to="/" class="navbar-link">Home</NuxtLink>
                    </li>
                    <li class="navbar-item">
                        <NuxtLink to="/features" class="navbar-link">Features</NuxtLink>
                    </li>
                    <li class="navbar-item">
                        <NuxtLink to="/pricing" class="navbar-link">Pricing</NuxtLink>
                    </li>
                    <li class="navbar-item">
                        <NuxtLink to="/about" class="navbar-link">About</NuxtLink>
                    </li>
                    <li class="navbar-item">
                        <NuxtLink to="/contact" class="navbar-link">Contact</NuxtLink>
                    </li>
                </ul>
                <button class="order-btn">Order Now</button>
            </div>
        </div>
    </nav>
</template>
  
  <script>
export default {
    data() {
        return {
            isMenuOpen: false
        }
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen
        }
    }
}
</script>
  
  <style scoped>
.navbar {
    background-color: var(--color-white);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
}

.navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    max-width: 1200px;
    margin: 0 auto;
    height: 70px;
    position: relative;
}

.navbar-logo {
    flex: 1;
}

.navbar-logo a {
    text-decoration: none;
    color: var(--color-primary);
}

.navbar-logo h1 {
    font-size: 1.8rem;
    font-weight: 700;
    margin: 0;
}

.navbar-right {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
}

.navbar-menu {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}

.navbar-item {
    margin-left: 2rem;
}

.navbar-link {
    text-decoration: none;
    color: var(--color-gray-dark);
    font-weight: 500;
    transition: color 0.3s ease;
}

.navbar-link:hover {
    color: var(--color-primary);
}

.order-btn {
    background-color: var(--color-primary);
    color: var(--color-white);
    border: none;
    padding: 0.8rem 2rem;
    border-radius: 10px;
    font-weight: 700;
    cursor: pointer;
    margin-left: 2rem;
    transition: background-color 0.3s ease;
}

.order-btn:hover {
    background-color: var(--color-primary-dark);
}

.hamburger {
    display: none;
    cursor: pointer;
}

.bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    background-color: var(--color-primary);
    transition: all 0.3s ease-in-out;
}

@media (max-width: 768px) {
    .navbar-right {
        flex-direction: column;
        align-items: flex-start;
    }

    .hamburger {
        display: block;
        order: 2;
    }

    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }

    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }

    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }

    .navbar-menu {
        position: fixed;
        left: -100%;
        top: 70px;
        flex-direction: column;
        background-color: var(--color-white);
        width: 100%;
        text-align: center;
        transition: 0.3s;
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
        padding: 1rem 0;
    }

    .navbar-menu.active {
        left: 0;
    }

    .navbar-item {
        margin: 1.5rem 0;
    }

    .order-btn {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        margin: 0;
        padding: 0.8rem 2rem;
        width: 80%;
        max-width: 300px;
        display: none;
    }

    .navbar-menu.active ~ .order-btn,
    .navbar-menu.active + .order-btn {
        display: block;
    }

    .navbar-container {
        position: relative;
    }

    .navbar-right {
        position: static;
        width: auto;
    }

    .order-btn {
        position: absolute;
        bottom: -60px;
        left: 50%;
        transform: translateX(-50%);
        width: 80%;
        z-index: 1001;
        display: none;
    }

    .navbar-menu.active ~ .order-btn {
        display: block;
    }
}
</style>