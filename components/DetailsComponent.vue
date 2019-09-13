<template lang="pug">
div.tile.notification
	b-tabs.is-fullwidth(v-model="activeTab")
		b-tab-item(label="Guests")
			b-table(:data="guests")
				template(slot-scope="props")
					b-table-column(field="last_name", label="Last Name") {{props.row.last_name}}
					b-table-column(field="first_name", label="First Name") {{props.row.first_name}}
					b-table-column(field="age", label="Age") {{props.row.age}}
					b-table-column(field="country", label="Country") {{props.row.country.name}}
		b-tab-item(label="Details")
			b-table(:data="details")
				template(slot-scope="props")
					b-table-column(field="base_value", label="Base Value") {{props.row.base_value}}
					b-table-column(field="total", label="Total") {{props.row.total}}
					b-table-column(field="total_with_tax", label="Total with Tax") {{props.row.total_with_tax}}
					b-table-column(field="total_with_tax", label="Total with Tax") {{props.row.total_with_tax}}
</template>

<script>
 export default {
	 props:['booking','details','guests'],
	 data(){
		 return{
			 activeTab:0
		 }
	 }
 }
</script>
