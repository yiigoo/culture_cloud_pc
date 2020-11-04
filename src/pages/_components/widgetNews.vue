<template>
	<div class="aside-widget">
		<div class="page-title">
			最新资讯
		</div>
		<div class="wrapper list-news">
			<ul>
				<li v-for="item in 3" :key="item">
					<a href="">
						<div class="sub">
							2020-10-9
						</div>
						新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题
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
