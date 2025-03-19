<template>
    <div class="default-layout">
        <slot />
    </div>
</template>

<style scoped>
.default-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow-y: auto;
    width: 100%;
    max-width: 100%;
    padding: 0;
    margin: 0;
}

/* Media query untuk tampilan mobile */
@media (max-width: 768px) {
    .default-layout {
        padding: 0;
    }
}
</style>