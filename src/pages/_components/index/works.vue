<template>
	<div>
		<div class="home-title">
			<div class="font-title font-title-works">
				文旅作品
			</div>
		</div>
		<div class="home-swiper">
			<swiper ref="mySwiper" class="base-card-imgs" :options="swiperOption">
				<swiper-slide class="item" v-for="item in 8" :key="item">
					<a href="" class="img">
						<img src="../../../assets/temp/102.png" alt="">
					</a>
					<div class="wrapper">
						<div class="title">
							<a href="">作品名称作品名称</a>
						</div>
						<div class="sub">左边的绿色</div>
					</div>
				</swiper-slide>
			</swiper>
			<i class="icon icon-arrow-swiper-left works-arrow-prev"></i>
			<i class="icon icon-arrow-swiper-right works-arrow-next"></i>
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
                        prevEl: '.works-arrow-prev',
                        nextEl: '.works-arrow-next'
                    },
                }
			}
		}
	}
</script>
