<template>
    <div id="login">
    <h1>欢迎您。欢迎来到xxx</h1>
    <n-input type="text" placeholder="电话号码" clearable v-model='userInifo.telphone' />
    <n-input type="password" placeholder="密码" v-model="userInifo.password"></n-input>
    <n-button @click="login">登录测试</n-button>
    </div>
</template>

<script setup>
    import { NButton,NInput} from 'naive-ui'
    import { zhCN, dateZhCN } from 'naive-ui'
    import { reactive, ref } from 'vue';
    const userInifo = ref({
        telphone:'',
        password:''
    })
    function login(){
        alert('点击了登录');
        console.log("账号是"+userInifo.telphone+'密码是'+userInifo.password)
    }

</script>
<script>

</script>

<style>
#login{
    margin: 0;
    padding: 0;
}
</style>