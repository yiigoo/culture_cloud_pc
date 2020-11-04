<template>
	<div>
		<page-header>
		</page-header>
		<div class="page-body">
			<router-view>
			</router-view>
		</div>
		<page-footer>
		</page-footer>
	</div>
</template>

<script>
	import pageHeader from './layout/header'
	import pageFooter from './layout/footer'
	export default {
		components: { pageHeader , pageFooter },
		data() {
			return {
			}
		}
	};
</script>