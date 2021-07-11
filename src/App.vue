<template>
  <div id="App">
    
    
    <div class="body">
      <router-view/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components:{
   
  }
  
}
</script>

<style>
  body{
    background-image: url("https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXBhZ2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
    -webkit-background-size: cover;  
    background-size: cover;
    background-position: center center;
    height: 100vh;
  }
</style>
