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

			<div class="brand-list clearfix page-list-loading">
                <div class="item" v-for="item in 9" :key="item">
                    <router-link :to="`/brand/detail?id=${item}`">
                        <img src="../../assets/temp/501.png" alt="">
                        <div class="title">
                            品牌名称品牌名称品牌名称品牌名称品牌
                        </div>
                        <div class="shadow"></div>
                    </router-link>
                </div>
				<Spin size="large" fix v-if="loading"></Spin>
            </div>

			 <div class="page-pager">
				<Page 
					:current="1" 
					:total="90" 
					:pageSize="9" 
					:disabled ="loading">
				</Page>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'BrandList',
		components: {
		},
		data() {
			return {
				loading: false
			}
		},
        mounted() {
        }
	}
</script>
