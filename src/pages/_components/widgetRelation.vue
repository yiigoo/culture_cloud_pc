<template>
	<div class="aside-widget">
		<div class="page-title">
			相关阅读
		</div>
		<div class="wrapper list-activity">
			<ul>
				<li v-for="item in 3" :key="item">
					<a href="">
						<img src="../../assets/temp/302.png" alt="">
						<div class="title">
							活动标题活动标题活动标题活动标题活动标题活动标题
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
