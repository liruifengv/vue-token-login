<template>
  <el-row class="container">
    <Item :type="'register'"/>
  </el-row>
</template>

<script>
import Item from '../components/Item'
export default{
  data () {
    return {
    }
  },
  components: {
    Item
  },
  methods: {}
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;
}
</style>
