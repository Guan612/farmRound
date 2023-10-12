<template>
    <div id="login">
    <h1>欢迎您。欢迎来到xxx</h1>
    <n-input type="text" placeholder="电话号码" clearable v-model=telphone />
    <n-button>登录测试</n-button>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                telphone:'',
                password:''
            }  
        }
    }
</script>
<script setup>
    import { NButton,NInput} from 'naive-ui'
    import { zhCN, dateZhCN } from 'naive-ui'
</script>

<style>

</style>