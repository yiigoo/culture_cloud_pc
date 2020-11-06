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

			<service></service>
            <div class="mt40"></div>
            <div class="home-title">
                <div class="font-title font-title-map">
                    文旅地图
                </div>
            </div>
			<div class="service-map-index">
                <div class="service-map">
                    <div class="title">
                        热门景点
                    </div>
                    <div class="list">
                        <div class="item" v-for="item in 5" :key="item">
                            <a href="">
                                <div class="img"><img src="../../assets/temp/101.png" alt=""></div>
                                <div class="wrapper">
                                    <div class="name">七星山森林公园</div>
                                    <div class="sub">
                                        地址：四川省宜宾市叙州区详细地址详细地址详细地址详细地址...
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="more">
                        <a href="">查看所有景点</a>
                    </div>
                </div>
                <div class="map-show">
                    <img src="../../assets/temp/map.png" alt="" class="temp">

                    <!-- 坐标， 图层显示，后续套地图看能否用上 -->
                    <img src="../../assets/location.png" style="position: absolute; left: 80px; top: 300px;" alt="">
                    <img src="../../assets/location-active.png"  style="position: absolute; left: 300px; top: 200px;" alt="">
                    <div class="layer" style="position: absolute; left: 210px; top: 130px;">
                        <router-link to="">
							<div class="img">
                                <img src="../../assets/temp/101.png" alt="">
							</div>
							<div class="wrapper">
								<div class="name">七星山森林公园</div>
								<div class="sub">
									3A景区 热门景点
								</div>
							</div>
						</router-link>
                    </div>
                </div>
            </div>

		</div>
	</div>
</template>

<script>
	import service from '../_components/index/service'
	export default {
		name: 'CultureService',
		components: {
			service
        },
        mounted() {
        }
	}
</script>
