<template>
  <el-row class="container">
    <div>首页</div>
    <div class="logOut">
      <el-button @click="logOut()">登出</el-button>
    </div>
  </el-row>
</template>

<script>
export default{
  data () {
    return {
    }
  },
  components: {
  },
  created () {
    // this.getUserInfo()
  },
  methods: {
    getUserInfo () {
      this.$store.dispatch('getUser')
    },
    logOut () {
      this.$store.dispatch('logOut')
      this.$router.push({
        path: '/login'
      })
    }
  }
}
</script>

<style scoped>
.container {
  text-align: center
}
.logOut {
  margin-top: 20px;
}
</style>
