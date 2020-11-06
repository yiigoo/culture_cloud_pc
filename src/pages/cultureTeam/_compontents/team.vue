<template>
	<div class="home-md">
		<div class="home-title">
			<div class="font-title font-title-team">
				文化社团
			</div>
		</div>
		<div class="home-swiper">
			<swiper ref="mySwiper" class="base-card-list-large item-block" :options="swiperOption">
				<swiper-slide class="item" v-for="item in 8" :key="item">
					<router-link class="img height285" to="/culture-team/list/detail">
						<img src="../../../assets/temp/904.png" alt="">
					</router-link>
					<div class="wrapper">
						<div class="title">
							<a href="">社团名称社团名称社团名称社团名称社团</a>
						</div>
						<div class="sub">社团名称社团名称社团名称社团名称社团社团名称社团名称社团名称社团名称社团</div>
					</div>
				</swiper-slide>
			</swiper>
			<i class="icon icon-arrow-swiper-left activity-arrow-prev"></i>
			<i class="icon icon-arrow-swiper-right activity-arrow-next"></i>
		</div>
		<router-link class="page-more" to="/culture-team">查看更多</router-link>
	</div>
	
</template>

<script>
	export default {
		components: {
		},
		data() {
			return {
				swiperOption: {
                    slidesPerView: 3,
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
