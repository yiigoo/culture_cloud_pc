<template>
	<div>
		<div class="home-title">
			<div class="font-title font-title-team">
				文化社团
			</div>
		</div>
		<div class="base-team-list clearfix">
			<div class="item" v-for="item in 3" :key="item">
				<a href="" class="img">
					<img src="../../../assets/temp/103.png" alt="">
				</a>
				<div class="wrapper">
					<div class="title">
						<a href="">社团名称社团名称</a>
					</div>
					<div class="sub">社团介绍社团介绍社团介绍社团介绍社团介绍社团介绍社团介绍社团介绍社团介绍社团介绍社团介绍</div>
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
