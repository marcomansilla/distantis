<template lang="pug">
	div
		navbar-component(@logout="signout")

		div.container.column.is-10
			nuxt

</template>

<script>
 import NavbarComponent from '@/components/NavbarComponent.vue';
 import { mapActions } from 'vuex';
 const Cookies = process.client ? require('js-cookie') : undefined;

 export default {
	 components:{
		 NavbarComponent
	 },
	 methods:{
		 signout(){
			 this.$buefy.dialog.confirm({
				 title: 'Close Session',
				 message: 'Are you sure you want to close the current session?',
				 confirmText: 'Close Session',
				 type: 'is-danger',
				 hasIcon: true,
				 onConfirm: () => {
					 this.$store.commit('setAuth', {is_logged:false, jwt_token:''});
					 Object.keys(Cookies.get()).forEach(function(cookie) {
						 Cookies.remove(cookie);
					 });
					 this.$router.go('/login')
					 this.$buefy.toast.open('Session Closed!')
				 }

			 })
		 }
	 }
 }
</script>

<style lang="scss">
 .navbar-brand {
	 .navbar-item {
		 h3.title {
			 color:#fff
		 }
	 }
 }
</style>
