<template lang="pug">
div
	h2.title.is-2 Bookings listing
	div
		b-field.is-horizontal
			b-field.column(label="Select Checkin Date")
				b-datepicker(:show-week-number="false", placehoder="Click to select", icon="calendar-today")

			b-field.column(label="Select Checkout Date")
				b-datepicker(:show-week-number="false", placehoder="Click to select", icon="calendar-today")
	bookings-table-component(:data="response_bookings", @sortBy="fetchSorted")
	br
	pagination-component(:data="response_pagination", @paginate="browseReservations")
	b-loading(:is-full-page="true" :active.sync="response_bookings.length==0" :can-cancel="false")
</template>

<script>
 import axios from 'axios'
 import { mapGetters } from 'vuex'
 import PaginationComponent from '@/components/PaginationComponent.vue'
 import BookingsTableComponent from '@/components/BookingsTableComponent.vue'
 export default {
	 components:{
		 BookingsTableComponent,
		 PaginationComponent
	 },
	 data(){
		 return {
			 response_bookings:[],
			 response_pagination:{},
			 reservationParams:{
				 includeCancelledBookings:false,
				 startDate:"2019-09-10",
				 endDate: "2019-09-10",
				 pagination:{
					 page:1,
					 per_page:10
				 },
				 sort:{
					 field:"id",
					 order:"desc"
				 }
			 },
		 }
	 },
	 computed:{
		 ...mapGetters(['auth'])
	 },
	 methods:{
		 fetchReservations(){
			 axios.post(`${process.env.BOOKING_URL}`, this.reservationParams, {headers:{Authorization: `Bearer ${this.auth.jwt_token}`}})
				  .then(response=>{
					  if (response.data.errors.length==0){
						  this.response_bookings=response.data.data.bookings;
						  this.response_pagination=response.data.data.pagination;
					  }
				  })
		 },
		 fetchSorted(data){
			 this.reservationParams.sort=data;
			 this.fetchReservations()
		 },
		 browseReservations(data){
			 this.reservationParams.pagination.page=data;
			 this.fetchReservations()
		 }

	 },
	 mounted(){
		 this.fetchReservations()
	 },
	 created(){
		 this.$on('paginate', (data)=>{console.log(data)})
	 }
 }
</script>
