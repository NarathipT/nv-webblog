<template>
    <div>
        <h1>Show User</h1>
        <div v-if="user">
            <p>id : {{user.id}}</p>
            <p>ชื่อ-นามสกุล : {{user.name}} - {{user.lastname}}</p>
            <p>email : {{user.email}}</p>
            <p>password : {{user.password}}</p>
        </div>
        <div v-else>User not exist</div>
    </div>
</template>
<script>
import UserService from '@/services/UserService'
export default {
    data() {
        return{
            user: null
        }
    },
    // created() {
    //     this.userId = this.$route.params.userId
    // },
    async created() {
        try {
            let userId = this.$route.params.userId
            this.user = (await UserService.show(userId)).data
            console.log(this.user)
        } catch (error) {
            console.log(error)
        }
        
    },
}
</script>
<style scoped>

</style>


