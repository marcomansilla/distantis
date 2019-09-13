<template lang="pug">
	div
		nav.navbar.header.has-shadow.is-primary(role="navigation", aria-label="main navigation")
			div.nav-brand
				a.navbar-item
					h3.title.is-2 Distantis
		div.navbar-burger
			span
			span
			span
		section.main-content.columns
			aside.column.is-2.section
				p.menu-label.i-hidden-touch Menu
				ul.menu-list
					li
						nuxt-link(to="/")
							b-icon(icon="cogs")
							span Admin
					li
						a(@click="logout")
							b-icon(icon="exit-run")
							span Exit

		div.container.column.is-10
			nuxt

</template>

<script>
 import { mapActions } from 'vuex';
 const Cookies = process.client ? require('js-cookie') : undefined;

 export default {
	 data () {
		 return {
		 }
	 },

	 methods:{
		 logout(){
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
