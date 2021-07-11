<template>

<nav>
  <ul class="nav_link">
    
    <li ><a href="">Admin Login</a></li>
    <li ><router-link to="/login"><a href="">User Login</a></router-link></li>
    <li ><router-link to="/signup"><a href="">SignUp</a></router-link></li>
   
  </ul>
</nav>


</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300&display=swap');
  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;

  }
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
  

</style>

<script>
import firebase from 'firebase'
export default {
    name:'Navbar',
    data() {
      return{
        isLoggedIn: false,
        currentUser: false
      }
    },
    
    methods:{
      logout: function(){
        firebase.auth().signOut().then(()=>{
          this.$router.push('/login')
        })
      }
    }



}
</script>
