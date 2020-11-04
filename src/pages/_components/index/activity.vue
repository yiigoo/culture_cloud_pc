<template>
	<div>
		<div class="home-title">
			<div class="font-title font-title-activity">
				文旅活动
			</div>
		</div>
		<div class="home-swiper">
			<swiper ref="mySwiper" class="base-card-list pb5" :options="swiperOption">
				<swiper-slide class="item" v-for="item in 8" :key="item">
					<a href="" class="img">
						<img src="../../../assets/temp/101.png" alt="">
					</a>
					<div class="wrapper">
						<div class="title">
							<a href="">活动名称活动名称活动名称活动名称活动名称活动名称</a>
						</div>
						<div class="sub">地点：文化馆三楼5号会议室</div>
					</div>
				</swiper-slide>
			</swiper>
			<i class="icon icon-arrow-swiper-left activity-arrow-prev"></i>
			<i class="icon icon-arrow-swiper-right activity-arrow-next"></i>
		</div>
	</div>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		components: {
		},
		data() {
			return {
				swiperOption: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                    autoplay: {
                        disableOnInteraction: false,
                        delay: 5000
                    },
                    loop: true,
                    navigation: {
						prevEl: '.activity-arrow-prev',
                        nextEl: '.activity-arrow-next'
                    },
                }
			}
		}
	}
</script>
