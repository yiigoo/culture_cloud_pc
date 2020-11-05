<template>
	<div>
        <!-- banner -->
        <page-banner :url="require('../../assets/banner/news.png')"></page-banner>
		<div class="page-conainter">
            <div class="breadcrumb">
                <router-link to="/">首页</router-link>
                <i class="icon icon-arrow-right"></i>
                <router-link to="">一级目录</router-link>
                <i class="icon icon-arrow-right"></i>
                <span>二级目录</span>
            </div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'BrandDetail',
		components: {
        },
        mounted() {
        }
	}
</script>
