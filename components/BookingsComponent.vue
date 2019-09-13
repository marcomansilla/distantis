<template lang="pug">
div
	h2.title.is-2 Bookings listing
	div
		b-field.is-horizontal
			b-field.column(label="Select Checkin Date", label-position="inside")
				b-input(type="date", v-model="reservationParams.startDate", icon-left="calendar-month")
			b-field.column(label="Select Checkout Date", label-position="inside")
				b-input(type="date", v-model="reservationParams.endDate", icon-left="calendar-month")

			b-field.column
				b-button.is-medium.is-fullwidth.is-primary(type="submit", @click="filterBookings") Apply filter
	bookings-table-component(:data="response_bookings", @sortBy="fetchSorted")
	br
	pagination-component(:data="response_pagination", @paginate="browseReservations")
	b-loading(:is-full-page="true" :active.sync="loadingData" :can-cancel="false")
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
			 loadingData:false,
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
			 this.loadingData=true;
			 axios.post(`${process.env.BOOKING_URL}`, this.reservationParams, {headers:{Authorization: `Bearer ${this.auth.jwt_token}`}})
				  .then(response=>{
					  if (response.data.errors.length==0){
						  this.response_bookings=response.data.data.bookings;
						  this.response_pagination=response.data.data.pagination;
						  this.loadingData=false;
					  }else if (response.data.errors[0]=='No booking found.') {
						  this.$buefy.dialog.alert({
							  title: 'Error',
							  message: 'No records have been found on the selected dates, please try again',
							  type: 'is-danger',
							  hasIcon: true,
							  icon: 'times-circle',
							  iconPack: 'fa'
						  });
						  this.response_bookings=[];
						  this.response_pagination={};
						  this.loadingData=false;
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
		 },
		 filterBookings(){
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
