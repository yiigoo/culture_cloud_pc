<template>
	<div>
        <!-- banner -->
        <page-banner :url="require('../../assets/banner/banner-brand.png')"></page-banner>
		<div class="page-container">

            <div class="breadcrumb">
                <router-link to="/">首页</router-link>
                <i class="icon icon-arrow-right"></i>
                <router-link to="">一级目录</router-link>
                <i class="icon icon-arrow-right"></i>
                <span>二级目录</span>
            </div>
			<pager-rows ref="rows" request="" :pageSize="9" :params="params">
                <template v-slot="slotProps">
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
					</div>
                </template>
			</pager-rows>
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
			}
		},
        mounted() {
        }
	}
</script>
