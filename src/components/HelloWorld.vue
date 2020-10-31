<template>
	<div class="hello">
		<img src="../assets/logo.png" alt="">
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: 'HelloWorld',
		props: {
			msg: String
		},
		mounted() {
			axios({
				url: 'bizActivityType/list'
			})
			.then(() => {

			})
		}
	}
</script>
