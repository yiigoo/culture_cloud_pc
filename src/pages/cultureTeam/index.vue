<template>
	<div>
        <!-- banner -->
        <page-banner :url="require('../../assets/banner/banner-culture-team.png')"></page-banner>

		<div class="page-container">
			<div class="breadcrumb">
				<router-link to="/">首页</router-link>
				<i class="icon icon-arrow-right"></i>
				<router-link to="">一级目录</router-link>
				<i class="icon icon-arrow-right"></i>
				<span>二级目录</span>
			</div>
			<team></team>
			<br /><br />
			<art></art>
		</div>
	</div>
</template>

<script>
	import team from './_compontents/team'
	import art from './_compontents/art'
	
	export default {
		name: 'CultureTeam',
		components: {
			team, art
        },
        mounted() {
        }
	}
</script>
