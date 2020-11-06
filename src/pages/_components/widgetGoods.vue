<template>
	<div class="aside-widget">
		<div class="page-title">
			其他商品
		</div>
		<div class="wrapper list-activity">
			<ul>
				<li v-for="item in 3" :key="item">
					<a href="">
						<img src="../../assets/temp/302.png" alt="">
						<div class="title">
							商品名称商品名称商品名称商品名称
						</div>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			// 上级参数这里定义接收
			// parentParams: {
			// 	type: Object,
			// 	default: {}
			// }
		},
		components: {

		}
	}
</script>
