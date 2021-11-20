<!--
NavMenuItem.vue created by Rick
time: 2021 22:10
-->
<template>
    <!-- 在template标签上使用v-for，:key="index"不能写在template标签上，因为其标签不会被渲染，会引起循环错误-->
    <template v-for="(item, index) in data">
        <!--有子集-->
        <el-sub-menu :key="item.id" :index="item.path" v-if="item.children.length > 0">
            <template #title>
                <el-icon><component :is="item.icon"></component></el-icon>
                <span>{{item.name}}</span>
            </template>
            <NavMenuItem :data="item.children" />
        </el-sub-menu>
        <!--无子集-->
        <el-menu-item :key="item.id" :index="item.path" v-else>
            <el-icon><component :is="item.icon"></component></el-icon>
            <span>{{item.name}}</span>
        </el-menu-item>
    </template>
</template>

<script setup>

defineProps({data: {type: Array, required: true}});
</script>

<style scoped>

</style>
