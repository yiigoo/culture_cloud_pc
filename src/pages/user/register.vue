<template>
	<div>
        <page-banner :url="require('../../assets/banner/login.png')"></page-banner>
		<div class="page-conainter page-conainter-inner">
        </div>
	</div>
</template>

<script>
	export default {
		name: 'Login',
		components: {
		},
		mounted() {
			console.log(this.$route.path)
		}
	}
</script>
