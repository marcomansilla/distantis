<template lang="pug">
div#floating-container
	p.title Booking detail # {{booking.id}}
		div.tile.is-parent.notification(horizontal)
			div.container.is-fluid
				h3.title.is-3 Booking
				div.columns.is-multiline
					div.column.is-one-third
						p
							strong Booking id:
							span {{booking.id}}
					div.column.is-one-third
						p
							strong Hotel:
							span {{booking.hotel}}
					div.column.is-one-third
						p
							strong Checkin:
							span {{booking.checkin}}
					div.column.is-one-third
						p
							strong Checkout:
							span {{booking.checkout}}
					div.column.is-one-third
						p
							strong Cancellation date:
							span {{booking.cancellation_date}}
					div.column.is-one-third
						p
							strong Adults:
							span {{booking.adults}}
					div.column.is-one-third
						p
							strong Children:
							span {{booking.children}}
					div.column.is-one-third
						p
							strong Updated:
							span {{booking.updated_at}}
					div.column.is-one-third
						p
							strong Room type:
							span {{booking.roomtype}}
					div.column.is-one-third
						p
							strong Currency:
							span {{booking.currency}}
					div.column.is-one-third
						p
							strong Status:
							span {{booking.status}}
					div.column.is-full
						p
							strong Observation:
							span {{booking.observation}}
				hr
				h3.title.is-3 Guest Information
				b-table(:data="booking.guests")
					template(slot-scope="props")
						b-table-column(field="last_name", label="Last Name") {{props.row.last_name}}
						b-table-column(field="first_name", label="First Name") {{props.row.first_name}}
						b-table-column(field="age", label="Age") {{props.row.age}}
						b-table-column(field="country", label="Country") {{props.row.country.name}}
				hr
				h3.title.is-3 Details
				b-table(:data="booking.details")
					template(slot-scope="props")
						b-table-column(field="date", label="Date") {{props.row.date}}
						b-table-column(field="base_value", label="Base Value") {{props.row.base_value}}
						b-table-column(field="total", label="Total") {{props.row.total}}
						b-table-column(field="total_with_tax", label="Total with Tax") {{props.row.total_with_tax}}
</template>

<script>
 export default {
	 props:['booking'],
	 data(){
		 return{
			 activeTab:0
		 }
	 }
 }
</script>

<style lang="scss">
 #floating-container {
	 background-color:#fff;
	 padding:2rem;
	 border-radius:5px;
 }
</style>
