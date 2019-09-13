<template lang="pug">
div
	h2.title.is-2 Bookings listing
	div
		b-field.columns(horizontal)
			b-field.is-one-third(label="Select Dates", label-position="inside", expanded, @change="setDates()")
				b-datepicker(v-model="dates" placeholder="Dates", range)

			b-field.is-one-third(label="Records Per page", label-position="inside")
				b-select(placeholder="Select Records per page", v-model="reservationParams.pagination.per_page", expanded)
					option(v-for="pnum in page_limit" :value="pnum" :selected="pnum==reservationParams.pagination.per_page") {{pnum}}

			b-field.is-one-third
				b-button.is-medium.is-primary(type="submit", @click="filterBookings", expanded) Apply filter
	br
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
			 dates:[],
			 page_limit:[5,10,15,20,25,30],
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
		 setDates(){
			 console.log(dates)
		 },
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
	 }
 }
</script>
