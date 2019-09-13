<template lang="pug">
div#floating-container
	p.title Booking detail # {{booking.id}}
		div.tile.is-parent.notification(horizontal)
			div.container.is-fluid
				b-tabs(v-model="activeTab")
					b-tab-item(label="Guests")
						b-table(:data="booking.guests")
							template(slot-scope="props")
								b-table-column(field="last_name", label="Last Name") {{props.row.last_name}}
								b-table-column(field="first_name", label="First Name") {{props.row.first_name}}
								b-table-column(field="age", label="Age") {{props.row.age}}
								b-table-column(field="country", label="Country") {{props.row.country.name}}
					b-tab-item(label="Details")
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
