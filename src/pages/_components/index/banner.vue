<template>
	<div class="banner-carousel">
		<swiper ref="mySwiper" :options="swiperOption">
            <swiper-slide>
				<div 
					class="item" 
					:style="{ 'background-image': `url(${require('../../../assets/banner/index.png')})` }">
				</div>
            </swiper-slide>
			<swiper-slide>
				<div 
					class="item" 
					:style="{ 'background-image': `url(${require('../../../assets/banner/index.png')})` }">
				</div>
            </swiper-slide>
			<swiper-slide>
				<div 
					class="item" 
					:style="{ 'background-image': `url(${require('../../../assets/banner/index.png')})` }">
				</div>
            </swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				swiperOption: {
					autoplay: {
                        disableOnInteraction: false,
                        delay: 5000
					},
					
					loop: true,
					pagination: {
						el: '.swiper-pagination',
						clickable: true
					}
				}
			}
		},
		mounted() {
		}
	}
</script>
