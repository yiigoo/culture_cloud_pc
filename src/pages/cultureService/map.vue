<template>
	<div>
        <!-- banner -->
        <page-banner :url="require('../../assets/banner/banner-service.png')"></page-banner>
		<div class="page-container">
			
            <div class="breadcrumb">
                <router-link to="/">首页</router-link>
                <i class="icon icon-arrow-right"></i>
                <router-link to="">一级目录</router-link>
                <i class="icon icon-arrow-right"></i>
                <span>二级目录</span>
            </div>

            <div class="search-catalogue-md">
                <search-types :types="types" @on-change="type1Change">
                    选择类型：
                </search-types>
            </div>

			<div class="service-map-index service-map-page">
                <div class="service-map">
                    <div class="title">
                        热门景点
                    </div>
                    <div class="list">
                        <div class="item" v-for="item in 15" :key="item">
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
	export default {
		name: 'CultureService',
		components: {
        },
        data() {
            return {
                types: [
                    { value: 'all' , label: '全部' },
                    { value: '1' , label: '类型1' },
                    { value: '2' , label: '类型2' }
                ],
            }
        },
        methods: {
            type1Change() {
                
            }
        },
        mounted() {
        }
	}
</script>
