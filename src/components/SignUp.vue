<template>
    <section>
        <div class="form-container">
            <h1>SignUp</h1>
            <form @submit.prevent="handleSubmit" >
                <div class="control">
                    <label for="">Username</label>
                    <input type="text" id="username"  v-model="username"   placeholder="Enter username...">
                </div>
                <div class="control">
                    <label for="">Email</label>
                    <input type="text" id="email" v-model="email"  placeholder="Enter Email...">
                </div>
                <div class="control">
                    <label for="">Password</label>
                    <input type="text" id="password"  v-model="password" placeholder="Enter password">
                </div>
                <div class="control">
                    <label for="">Confirm Password</label>
                    <input type="text" id="confirm_password"  v-model="confirm_password" placeholder="Confirm password">
                </div>
                <div class="control">
                    <input type="submit" value="SignUp">
                </div>
            </form>
            <div class="link">
                <p>Already have an acount?<router-link to="/login"> Login</router-link></p>
            </div>
        </div>
        </section>
</template>

<script>
    import firebase from 'firebase'
export default {
    name:'SignUp',
    data(){
        return{
                username:"",
                email:"",
                password:"",
                confirm_password:""
            }
        },
        methods:{
           handleSubmit() {
               firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
               .then(() =>{
                   alert("Acount created")
                   this.$router.push('/login')  
               })
               .catch(error =>{
                   alert(error.message)
               })
               
           }
    }
}

</script>

<style>

 *{
        font-family: sans-serif;
        color: white;
    }
    .form-container{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background: linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3));
        width: 380px;
        padding: 50px 30px;
        border-radius: 10px;
        box-shadow: 7px 7px 60px #000;
        
    }
    h1{
        text-transform: uppercase;
        font-size: 2em;
        text-align: center;
        margin-bottom: 2em;
    }
    .control input{
        width: 100%;
        display: block;
        padding: 10px;
        background: linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3));
        color: #222;
        border: none;
        outline: none;
        margin: 1em 0;
    }
    .control input[type="submit"]{
        background: linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3));
        color: white;
        font-size: 1.2em;
    
    }
    .control input,select,textarea{
        color:white;
    }
    .link p {
        text-decoration: none;
        color: white;
    }
</style>