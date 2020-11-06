<template>
	<div class="user-content page-content">
		<div class="wrapper-box">
			<div class="page-tabs-wrapper">
                <div class="item" @click="onChange('1')" :class="{active: currentType === '1'}">近一周</div>
                <div class="item" @click="onChange('2')" :class="{active: currentType === '2'}">近一月</div>
                <div class="item" @click="onChange('3')" :class="{active: currentType === '3'}">全部</div>
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
				currentType: '1',
				params: {
					type: '1'
				}
			}
		},
		methods: {
			onChange(type) {
				if( type !== this.currentType ){
					this.currentType = type
					this.params.type = type
					this.$refs['rows'].reload()
				}
			}
		},
		watch: {
		},
		mounted() {
		}
	};
</script>
