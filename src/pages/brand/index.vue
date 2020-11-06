<template>
	<div>
        <!-- banner -->
        <page-banner :url="require('../../assets/banner/news.png')"></page-banner>
		<div class="page-container">
            <div class="breadcrumb">
                <router-link to="/">首页</router-link>
                <i class="icon icon-arrow-right"></i>
                <router-link to="">一级目录</router-link>
                <i class="icon icon-arrow-right"></i>
                <span>二级目录</span>
            </div>
			<div class="brand-index">

                <div class="flex">
                    <div class="item">
						<img src="../../assets/brand-1.png" alt="" />
					</div>

                    <div class="item">
                        <router-link to="/brand/list?type=1">
                            <div class="font-title font-title-brand-index-1">阅读品牌</div>
                            <div class="fixed-1">
                                <i class="icon icon-decorate-brand"></i>
                            </div>
                            <div class="fixed-2">
                                <i class="icon icon-decorate-brand"></i>
                            </div>
                            <img src="../../assets/brand-2.png" alt="" />
                        </router-link>
                    </div>

                    <div class="item">
						<img src="../../assets/brand-3.png" alt="" />
					</div>
                </div>

                <div class="flex">

                    <div class="item">
                        <router-link to="/brand/list?type=2">
                            <div class="font-title font-title-brand-index-2">文博品牌</div>
                            <div class="fixed-1">
                                <i class="icon icon-decorate-brand"></i>
                            </div>
                            <div class="fixed-2">
                                <i class="icon icon-decorate-brand"></i>
                            </div>
                            <img src="../../assets/brand-4.png" alt="" />
                        </router-link>
                    </div>

                    <div class="item">
						<img src="../../assets/brand-5.png" alt="" />
					</div>
					
                    <div class="item">
                        <router-link to="/brand/list?type=2">
                            <div class="font-title font-title-brand-index-3">戏曲品牌</div>
                            <div class="fixed-1">
                                <i class="icon icon-decorate-brand"></i>
                            </div>
                            <div class="fixed-2">
                                <i class="icon icon-decorate-brand"></i>
                            </div>
                            <img src="../../assets/brand-6.png" alt="" />
                        </router-link>
                    </div>
                </div>
            </div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Brand',
		components: {
        },
        mounted() {
        }
	}
</script>
