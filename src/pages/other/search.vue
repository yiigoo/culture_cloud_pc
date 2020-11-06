<template>
	<div>
		<!-- banner -->
        <page-banner :url="require('../../assets/banner/banner-search.png')"></page-banner>
        
        <div class="search-md">
			
            <div class="tips">找到30条符合“文化”的结果</div>
            <pager-rows ref="rows" request="" :pageSize="5">
                <template v-slot="slotProps">
					<div class="figure-list mt20">
						<div class="item" v-for="item in 5" :key="item">
							<div class="img">
								<a href="">
									<img src="../../assets/temp/102.png" alt="">
								</a>
							</div>
							<div class="wrapper">
								<div class="title">
									<a href="" v-html="highlight('文化资讯标题资讯标题文化标题资讯标题资讯标题资讯标题资讯标题资讯标题资讯标题资讯标题资讯标题资讯标题资讯标题资讯标题资讯标题')">
                                    </a>
								</div>
								<div class="sub">
									文旅资讯
								</div>
							</div>
						</div>
					</div>
                </template>
			 </pager-rows>
			 <!-- <div class="empty">
				<i class="icon icon-find mb20"></i>
				<br />
				很抱歉，没有找到符合“文化”相关的内容
			 </div> -->
        </div>
	</div>
</template>

<script>
	export default {
		name: 'Activity',
		components: {},
        data() {
            return {
               keyword: '文化'
            }
        },
        methods: {
            highlight(text) {
                return text.replace(new RegExp( this.keyword, 'g'),`<span class="highlight">${this.keyword}</span>`)
            },
        },
        mounted() {
            debugger
             this.keyword = this.$route.query.keyword
        }
	}
</script>
