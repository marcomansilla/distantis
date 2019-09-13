<template lang="pug">
div
	b-table(:data="data", backend-sorting, :default-sort-direction="defaultSortOrder", :default-sort="[sortField, sortOrder]", @sort="onSort")
		template(slot-scope="props")
			b-table-column(field="id", label="ID", sortable) {{props.row.id}}
			b-table-column(field="hotel", label="Hotel", sortable) {{props.row.hotel}}
			b-table-column(field="status", label="Status", sortable) {{props.row.status}}
			b-table-column(field="checkin", label="Checkin", sortable) {{props.row.checkin}}
			b-table-column(field="checkout", label="Checkout", sortable) {{props.row.checkout}}
			b-table-column(field="town", label="Town", sortable) {{props.row.town}}
			b-table-column(field="cancellation_date", label="Cancellation Date", sortable) {{props.row.cancellation_date}}
			b-table-column(field="adults", label="Adults", centered) {{props.row.adults}}
			b-table-column(field="children", label="Children", centered) {{props.row.children}}
			b-table-column(label="Details", centered)
				button.button.is-primary(@click="showDetails(props.row)")
					b-icon(icon="card-search")

	b-modal(:active.sync="detailsModal.display")
		details-component(:booking="detailsModal.data")

</template>

<script>
 import DetailsComponent from '@/components/DetailsComponent.vue'

 export default {
	 props:['data'],
	 components:{
		 DetailsComponent
	 },
	 data(){
		 return {
			 detailsModal:{
				 display:false,
				 data:[]
			 },
			 sortField:'id',
			 sortOrder:'desc',
			 defaultSortOrder:'desc',
		 }
	 },
	 methods:{
		 showDetails(details){
			 this.detailsModal.data=details;
			 this.detailsModal.display=true
		 },
		 onSort(field, order){
			 this.$emit('sortBy', {field, order})
		 }
	 }
 }
</script>
