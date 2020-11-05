<template>
	<div class="page-conainter page-conainter-inner">
		<div class="global-opt-tips">
			<div class="wrapper">
				<i class="icon" :class="[`icon-${type}`]"></i>
				<div class="top" :class="[`top-${type}`]">
					<slot name="tips">
					</slot>
				</div>
				<div class="bottom">
					<slot name="btns">
						<Button @click="backIndex">返回首页</Button>
					</slot>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			type: {
				type: String,
				default: 'success' // success , fail
			}
		},
		methods: {
			backIndex() {
				this.$router.push({
					path: '/'
				})
			}
		}
	}
</script>
