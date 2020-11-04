<template>
	<div>
		<div class="home-title">
			<div class="font-title font-title-brand">
				品牌推荐
			</div>
		</div>
		<div class="base-brand-list clearfix">
			<div class="item" v-for="item in 4" :key="item">
				<a href="" class="img">
					<img src="../../../assets/temp/104.png" alt="">
				</a>
				<div class="wrapper">
					<div class="title">
						<a href="">品牌名称品牌名称</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		components: {
		}
	}
</script>
