<template>
	<div>
        <!-- banner -->
        <page-banner :url="require('../../assets/banner/banner-heritage.png')"></page-banner>

		<div class="page-container">
			<div class="breadcrumb">
				<router-link to="/">首页</router-link>
				<i class="icon icon-arrow-right"></i>
				<router-link to="">一级目录</router-link>
				<i class="icon icon-arrow-right"></i>
				<span>二级目录</span>
			</div>

			<div class="heritage-md">
				<div class="heritage-md-header">
					<div class="left">
						<div class="font-title font-title-heritage-1"></div>
						<div class="text mt20">
							历史积淀 瑰宝传承<br />
							宜宾市叙州区<br />
							非物质文化遗产名录
						</div>
						<router-link to="/heritage-directories" class="more">查看更多</router-link>
					</div>
					<div class="right page-swiper">
						<swiper ref="mySwiperTop" :options="swiperOptionTop">
							<swiper-slide>
								<div class="item">
									<div class="title">
										<a href="">文化遗产名称</a>
									</div>
									<img src="../../assets/temp/801.png" alt="">
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="item">
									<div class="title">
										<a href="">文化遗产名称</a>
									</div>
									<img src="../../assets/temp/801.png" alt="">
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="item">
									<div class="title">
										<a href="">文化遗产名称</a>
									</div>
									<img src="../../assets/temp/801.png" alt="">
								</div>
							</swiper-slide>
							<div class="swiper-pagination swiper-pagination-top" slot="pagination"></div>
						</swiper>
					</div>
				</div>

				<div class="heritage-list mt20 mb40 clearfix">
					<div class="item" v-for="item in 2" :key="item">
						<a class="img">
							<img src="../../assets/temp/701.png" alt="" />
						</a>
						<div class="wrapper">
							<div class="fixed-1">
								<i class="icon icon-decorate"></i>
							</div>
							<div class="fixed-2">
								<i class="icon icon-decorate"></i>
							</div>
							<div class="title">
								<a href="">横江号子</a>
							</div>
							<div class="sub">
								横江号子非遗传承人唱响成贵高铁横江号子非遗传承人唱响成贵高铁横江号子非遗传承人唱响成贵高铁横江号子非遗传承人唱响成贵高铁。
							</div>
							<router-link :to="`/heritage-directories-detail?id=${1}`" class="more">查看更多 ></router-link>
						</div>
					</div>
				</div>

				<div class="home-title">
					<div class="font-title font-title-heritage-2"></div>
				</div>
				<div class="heritage-show pb20">
					<div class="box">
						<div class="left page-swiper">
							<swiper ref="mySwiperBottom" :options="swiperOptionBottom">
								<swiper-slide  v-for="item in 3" :key="item">
									<div class="item">
										<div class="title">
											<a href="">文化遗产名称</a>
										</div>
										<img src="../../assets/temp/902.png" alt="">
									</div>
								</swiper-slide>
								<div class="swiper-pagination swiper-pagination-bottom" slot="pagination"></div>
							</swiper>
						</div>
						<div class="right clearfix">
							<div class="item" v-for="item in 4" :key="item">
								<router-link :to="`/heritage-exhibition-detail?id=${1}`">
									<div class="shadow"></div>
									<img src="../../assets/temp/601.png" alt="">
									<div class="text">
										<div class="title">
											展示遗产名称
										</div>
										非遗展示简介非遗展示简介非遗展示简介非遗展示简介非遗展示简介 ...
									</div>
								</router-link>
							</div>
						</div>
					</div>
				</div>
				<router-link class="page-more" to="/heritage-exhibition">查看更多</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'News',
		components: {
		},
		data() {
			return {
				swiperOptionTop: {
					autoplay: {
                        disableOnInteraction: false,
                        delay: 5000
					},
					loop: true,
					pagination: {
						el: '.swiper-pagination-top',
						clickable: true
					}
				},
				swiperOptionBottom: {
					autoplay: {
                        disableOnInteraction: false,
                        delay: 5000
					},
					
					loop: true,
					pagination: {
						el: '.swiper-pagination-bottom',
						clickable: true
					}
				}		
			}
		},
        mounted() {
        }
	}
</script>
