<template>
	<div class="home-row mt30">
		<div class="home-title">
			<div class="font-title font-title-artist">
				名师简介
			</div>
		</div>
		<div class="person-list clearfix">
			<div class="item" v-for="item in 8" :key="item">
				<div class="img">
					<a href=""><img src="../../../assets/temp/avatar2.png" alt=""></a>
				</div>
				<div class="name">
					<a href="">李小小</a>
				</div>
				<div class="sub">
					服务时长：102小时
				</div>
			</div>
		</div>
		<router-link class="page-more" to="/culture-team/art">查看更多</router-link>
	</div>
	
</template>

<script>
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
