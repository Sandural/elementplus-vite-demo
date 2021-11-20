<!--
index.vue created by Rick
time: 2021 20:31
-->
<template>
    <div class="container">
        <header></header>
        <nav>
            <NavMenu />
        </nav>
        <main>
            <router-view></router-view>
        </main>
        <footer></footer>
    </div>
</template>

<script setup>
import NavMenu from '~/components/layouts/NavMenu.vue';
import { ref } from 'vue';

const isCollapse = ref(true);
const handleClose = (key, keypath) => {
    console.log(key, keypath);
};
</script>

<style scoped>
.container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
}
.container header {
    grid-column: 1 / 13;
    height: 60px;
    background-color: #f5f5f5;
}

.container nav {
    grid-column: 1 / 3;
    height: calc(100vh - 120px);
    background-color: #21ba45;
}

.container main {
    grid-column: 3 / 13;
    //background-color: #da0404;
}

.container footer {
    grid-column: 1 / 13;
    height: 60px;
    background-color: #f5f5f5;
}
</style>
