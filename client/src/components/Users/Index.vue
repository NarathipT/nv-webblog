<template>
    <div>
        <h2>Get All Users</h2>
        <h4>จำนวนผู้ใช้งาน {{users.length}}</h4>
        <div v-for="user in users" v-bind:key="user.id">
            <!-- <p>id : {{user.id}}</p> -->
            <p>ชื่อ-นามสกุล : {{user.name}} - {{user.lastname}}</p>
            <!-- <p>email : {{user.email}}</p>
            <p>password : {{user.password}}</p> -->
            <p><button v-on:click="navigateTo('/user/show/'+user.id)">view detail</button></p>
            <hr>
        </div>
    </div>
</template>
<script>
import UserService from '@/services/UserService'
export default {
    // created() {
    //     this.$http.get('http://localhost:8081/user')
    //     .then(function (response){
    //         console.log(response)
    //     })
    // }
    data () {
        return {
            users: []
        }
    },
    async created() {
        try{
            this.users = (await UserService.index()).data
        }catch(err){
            console.log(err)
        }
    },
    methods: {
        navigateTo (route){
            this.$router.push(route)
        }
    },
}
</script>
<style scoped>

</style>

