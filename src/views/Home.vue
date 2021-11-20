<!--
Home.vue created by m1367
time: 2021 20:28
-->
<template>
    <div class="home">
        <div class="top">
            <div class="inline-block">
                <span>粉丝层级</span>
                <el-select v-model="value1" placeholder="Select">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    >
                    </el-option>
                </el-select>
            </div>
            <div class="inline-block">
                <span>作者分类</span>
                <el-select v-model="value1" placeholder="Select">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    >
                    </el-option>
                </el-select>
            </div>
            <div class="inline-block">
                <span>认证类型</span>
                <el-select v-model="value1" placeholder="Select">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    >
                    </el-option>
                </el-select>
            </div>
            <div class="inline-block">
                <span>处罚类型</span>
                <el-select v-model="value1" placeholder="Select">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    >
                    </el-option>
                </el-select>
            </div>
            <div class="inline-block">
                <span>平台态度</span>
                <el-select v-model="value1" placeholder="Select">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    >
                    </el-option>
                </el-select>
            </div>
            <div class="inline-block">
                <span>数据</span>
                <el-date-picker
                    v-model="value1"
                    type="daterange"
                    range-separator="To"
                    start-placeholder="Start date"
                    end-placeholder="End date"
                >
                </el-date-picker>
            </div>
            <div class="inline-block">
                <el-input class="filter-input"></el-input>
            </div>
        </div>

        <el-pagination
            v-model:currentPage="currentPage3"
            :page-size="100"
            layout="prev, pager, next, jumper"
            :total="1000"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
        >
        </el-pagination>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const value1 = ref('');
const currentPage3 = ref(5);
const options = ref([
    {
        value: 'Option1',
        label: 'Option1',
    },
    {
        value: 'Option2',
        label: 'Option2',
    },
    {
        value: 'Option3',
        label: 'Option3',
    },
    {
        value: 'Option4',
        label: 'Option4',
    },
    {
        value: 'Option5',
        label: 'Option5',
    },
])

const handleSizeChange = (val) => {
    console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
    console.log(`current page: ${val}`)
}
</script>

<style scoped>
.inline-block {
    display: inline-block;
}
.home .top {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
}
.home .top span {
    margin-right: 5px;
}

.home /deep/ .el-input__inner {
    border-radius: 8px;
}
</style>
