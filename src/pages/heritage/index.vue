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

			<div class="heritage-md">
				<div class="heritage-md-header">
					<div class="left">
						<div class="font-heritage-cate"></div>
						<div class="text">
							历史积淀 瑰宝传承<br />
							宜宾市叙州区<br />
							非物质文化遗产名录
						</div>
						<a class="more">查看更多</a>
					</div>
					<div class="right">

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
							<a href="" class="more">查看更多 ></a>
						</div>
					</div>
				</div>

				<div class="home-title">
					<div class="font-heritage-show"></div>
				</div>
				<div class="heritage-show">
					<div class="box">
						<div class="left">

						</div>
						<div class="right clearfix">
							<div class="item" v-for="item in 4" :key="item">
								<a href="">
									<div class="shadow"></div>
									<img src="../../assets/temp/601.png" alt="">
									<div class="text">
										<div class="title">
											展示遗产名称
										</div>
										非遗展示简介非遗展示简介非遗展示简介非遗展示简介非遗展示简介 ...
									</div>
								</a>
							</div>
						</div>
					</div>
					<a href="" class="more">查看更多</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'News',
		components: {
        },
        mounted() {
        }
	}
</script>
