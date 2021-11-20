<!--
NavMenu.vue created by Rick
time: 2021 21:21
-->
<template>
    <el-menu
        router
        :default-active="defaultActive"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        :collapse="isCollapse">
        <!-- 递归动态菜单 -->
        <NavMenuItem :data="menus"></NavMenuItem>
    </el-menu>
</template>

<script setup>
import { ref } from 'vue'
import NavMenuItem from './NavMenuItem.vue'
import menus from './menu'

const isCollapse = ref(false);
const defaultActive = ref('1');
const handleOpen = (key, keypath) => {
    console.log('open', key, keypath)
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 100%;
    height: 100%;
}
</style>
