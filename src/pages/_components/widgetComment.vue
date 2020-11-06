<template>
	<div class="widget-comment">
		<div class="page-title">
			热门评论
		</div>
		<pager-rows ref="rows" request="" :pageSize="3" :params="params">
			<template v-slot="slotProps">
				<div class="comment-list">
					<div class="item" v-for="item in 3" :key="item">
						<div class="avatar">
							<img src="../../assets/temp/avatar.png" alt="" />
						</div>
						<div class="wrapper">
							<div class="top clearfix">
								<div class="pull-left">
									159****5用户
								</div>
								<div class="pull-right">
									2020-08-20  11:08
								</div>
							</div>
							<div class="content">
								新闻评论内容新闻评论内容新闻评论内容新闻评论内容新闻评论内容新闻评论内容新闻评论内容新闻评论内容新闻评论内容新闻评论内容新闻评论内容新闻评论内容新闻评论内容
							</div>
							<div class="img-list clearfix">
								<div class="img">
									<a href=""><img src="../../assets/temp/302.png" alt="" :preview="item" /></a>
								</div>
								<div class="img">
									<a href=""><img src="../../assets/temp/302.png" alt="" :preview="item" /></a>
								</div>
								<div class="img">
									<a href=""><img src="../../assets/temp/302.png" alt="" :preview="item" /></a>
								</div>
								<div class="img more">
									<a href="">
										<div class="shadow">+5</div>
										<img src="../../assets/temp/302.png" alt="" />
									</a>
								</div>
							</div>
							<div class="bar">
								<a href="#"><i class="icon icon-comment"></i> 2156</a>
								<a href="#"><i class="icon icon-like"></i> 2156</a>
							</div>
						</div>
					</div>
				</div>
			</template>
		</pager-rows>
	</div>
</template>

<script>
	import Vue from 'vue'
	import preview from 'vue-photo-preview'
	import 'vue-photo-preview/dist/skin.css'
	Vue.use(preview,{
		fullscreenEl: false,
		closeOnScroll: false,
		bgOpacity: .7
	})
	export default {
		props: {
			// 上级参数这里定义接收
			// parentParams: {
			// 	type: Object,
			// 	default: {}
			// }
			params: {
                type: Object,
                default() {
                    return {}
                }
            },
		},
		data() {
			return {
			}
		},
		components: {

		}
	}
</script>
