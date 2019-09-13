<template lang="pug">
div
	b-pagination(:total="data.total", :per-page="data.per_page", :current.sync="data.current_page" @change="pageChange")
</template>

<script>
 export default {
	 props:['data'],
	 methods:{
		 pageChange(page){
			 this.$emit('paginate', page)
		 }
	 }
 }
</script>
