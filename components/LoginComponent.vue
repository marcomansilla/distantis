<template lang="pug">
div#auth-form.is-desktop.is-vcentered
	h3.title.is-3 Distantis Challenge Login
	form(@keyup="clearErrors")
		b-field(label="E-mail" :type="error.display?'is-danger':''" :message="error.errors[0]")
			b-input(v-model="user.email", type="email" required)
		b-field(label="Password" :type="error.display?'is-danger':''" :message="error.errors[1]")
			b-input(v-model="user.password", type="password" required)
		button(class="button is-info is-fullwidth", @click.prevent="login") Login
</template>

<script>
 import Cookies from 'universal-cookie';
 import axios from 'axios';
 const cookies = new Cookies();
 export default {
	 data(){
		 return {
			 user:{
				 email:'',
				 password:''
			 },
			 error:{
				 display:false,
				 errors:[]
			 }
		 }
	 },
	 methods:{
		 async login(){
			 await axios.post(`${process.env.AUTH_URL}`,this.user )
						.then(response=>{
							if (response.data.errors.length) {
								this.error.display=true;
								this.error.errors = response.data.errors
							} else {
								cookies.set('is_logged', true);
								cookies.set('jwt_token', response.data.data)
								this.$router.go('/')
							}

						})
						.catch(error=>console.log(error))
		 },
		 clearErrors(){
			 this.error.display=false;
			 this.error.errors=[]
		 }

	 }
 }
</script>

<style lang="scss">
#auth-form {
	width:30%;
	padding:3rem;
	margin:18rem auto;
	background-color:rgba(255,255,255,.8);
	overflow-x:hidden;
	overflow-y:hidden;
	h3 {
	   text-align:center;
	}
}

@media (max-width: 700px){
#auth-form {
	width:90%
 }
}
</style>
