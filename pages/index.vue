<template lang="pug">
bookings-component
</template>

<script>
 import BookingsComponent from '@/components/BookingsComponent.vue'
 import {mapGetters} from 'vuex';
 export default {
	 name: 'Admin',
	 components:{BookingsComponent},
	 computed:{
		 ...mapGetters(['auth'])
	 },
	 mounted(){
		 console.log(this.auth)
	 }
 }
</script>

<style lang="scss">

</style>
