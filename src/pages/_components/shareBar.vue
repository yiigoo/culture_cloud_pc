<template>
	<div class="share-bar clearfix">
		<div class="pull-left">
			<a href="" class="like">
				<i class="icon icon-like-24"></i>
				3011
			</a>
		</div>
		<div class="pull-right share">
			分享到：
			<a href=""><i class="icon icon-wx"></i></a>
			<a href=""><i class="icon icon-wb"></i></a>
			<a href=""><i class="icon icon-link"></i></a>
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
