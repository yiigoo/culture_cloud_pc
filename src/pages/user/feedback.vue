<template>
	<div class="user-content page-content">
		<div class="wrapper-box">
			<div class="user-title">
				我的反馈
			</div>
			 <pager-rows ref="rows" request="" :pageSize="5" :params="params">
                <template v-slot="slotProps">
					<div class="comment-list">
						<div class="item" v-for="item in 5" :key="item">
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
									<a href=""><img src="../../assets/temp/302.png" alt="" /></a>
								</div>
								<div class="img">
									<a href=""><img src="../../assets/temp/302.png" alt="" /></a>
								</div>
								<div class="img">
									<a href=""><img src="../../assets/temp/302.png" alt="" /></a>
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
	</div>
</template>

<script>
	export default {
		components: {
			
		},
		data() {
			return {
			}
		},
		methods: {
		},
		watch: {
		},
		mounted() {
		}
	};
</script>
