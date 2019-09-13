<template lang="pug">
b-table(:data="data", :columns="columns", detailed, detail-key="id", @details-open="(row, index) => $buefy.toast.open(`Expanded ${row.hotel}`)")
	template(slot="detail", slot-scope="data")
		b-table(field="adults",visible="true", Label="Adults") {{data.row}}

</template>

<script>
 export default {
	 props:['data'],
	 data(){
		 return {
			 columns: [
				 {
					 field: 'id',
					 label: 'ID',
					 width: '40',
					 numeric: true
				 },
				 {
					 field: 'hotel',
					 label: 'Hotel',
				 },
				 {
					 field: 'status',
					 label: 'Status',
				 },
				 {
					 field: 'checkin',
					 label: 'Checkin',
				 },
				 {
					 field: 'checkout',
					 label: 'Checkout',
				 },
				 {
					 field: 'town',
					 label: 'Town'
				 },
				 {
					 field: 'cancellation_date',
					 label: 'Cancellation Date'
				 }
			 ]
		 }
	 }
 }
</script>
