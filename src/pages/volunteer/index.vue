<template>
	<div>
        <!-- banner -->
        <page-banner :url="require('../../assets/banner/banner-volunteer.png')"></page-banner>
		<div class="text-center">设计未完成</div>
		<ul>
			<li><router-link to="/volunteer/list">活动招募</router-link></li>
			<li><router-link to="/volunteer/star">志愿之星</router-link></li>
			<li><router-link to="/volunteer/team">明星团队</router-link></li>
			<li><router-link to="/volunteer/mien">志愿者风采</router-link></li>
			<li><router-link to="/volunteer/training">培训驿站</router-link></li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'News',
		components: {
        },
        mounted() {
        }
	}
</script>
