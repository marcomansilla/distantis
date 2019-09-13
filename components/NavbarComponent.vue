<template lang="pug">
b-navbar
	template(slot="brand")
		nuxt-link(class="navbar-item", to="/")
			h3.title.is-3 Distantis
	template(slot="start")
		nuxt-link.has-text-white(class="navbar-item", to="/")
			b-icon(icon="cogs")
			strong  Admin

	template(slot="end")
		b-navbar-item(tag="div")
			a.button.is-danger(@click="$emit('logout')")
				b-icon(icon="exit-run")
				strong Logout
</template>

<style lang="scss">
 .navbar {
	 background-color:#714dd2
 }
</style>
