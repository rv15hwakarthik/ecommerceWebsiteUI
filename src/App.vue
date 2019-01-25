<template >
  <div >
    <router-view/>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
        searchText:""
      }
      
    }
  }
</script>

<style>
.font{
font-family:sans-serif
}
</style>
