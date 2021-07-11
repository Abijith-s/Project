<template>
<div class="home">
  <nav>
     <ul class="nav_link">
        <li ><router-link v-on:click="logout" to="/login"><a href="">Logout</a></router-link></li>
     </ul>
  </nav>
  <div class="body_container">
      <h1 >Welcome</h1>
  </div>
</div>
</template>

<script>
export default {
    name:'Home'
}
</script>


<style>
nav{
    display: flex;
    flex-direction: column;
    
    width: 100%;
    height: 75px;
    background-color: #505d61;
    line-height: 75px;
    padding: 0px 100px;
    position: fixed;
    z-index: 1;
  }
  nav ul{
    margin-left: auto;
  }
  nav ul li {
    display: inline-block;
    list-style: none;
  }
  nav ul li a {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    text-transform: capitalize;
    padding: 0px 32px;
  }
  nav ul li a:hover{
    color: #c0d96f;
  }
  .body_container{
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%,-50%);
        background: linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3));
        width: 500px;
        padding: 50px 30px;
        border-radius: 10px;
        box-shadow: 7px 7px 60px #000;
        
    }
</style>