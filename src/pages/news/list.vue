<template>
	<div>
        <!-- banner -->
        <page-banner :url="require('../../assets/banner/news.png')"></page-banner>
        
        <div class="page-conainter clearfix">
            <div class="page-aside">

                <div class="page-menu">
                    <div class="title">
                        文旅资讯
                    </div>
                    <div class="list">
                        <ul>
                            <li class="active"><a href="#">最新资讯</a></li>
                            <li><a href="#">最新资讯2</a></li>
                            <li><a href="#">最新资讯3</a></li>
                        </ul>
                    </div>
                </div>

                <div class="aside-widget">
                    <div class="page-title">
                        最新活动
                    </div>
                    <div class="wrapper list-activity">
                        <ul>
                            <li>
                                <a href="">
                                    <img src="../../assets/temp/302.png" alt="">
                                    <div class="title">
                                        活动标题活动标题活动标题活动标题活动标题活动标题
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src="../../assets/temp/302.png" alt="">
                                    <div class="title">
                                        活动标题活动标题活动标题活动标题活动标题活动标题
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src="../../assets/temp/302.png" alt="">
                                    <div class="title">
                                        活动标题活动标题活动标题活动标题活动标题活动标题
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="page-content">
                <div class="news-list page-list-loading">
                    <div class="item" v-for="(item,index) in list" :key="index">
                        <div class="img">
                            <a href=""><img :src="item.pictures" alt=""></a>
                        </div>
                        <div class="wrapper">
                            <div class="title">
                                <a href="">{{ item.title }}</a>
                            </div>
                            <div class="sub">{{ $dayjs(item.createTime).format('YYYY-MM-DD') }}  {{ item.venueName }}</div>
                            <div class="content">
                                {{ item.content }}
                            </div>
                            <div class="bar">
                                <span><i class="icon icon-eye"></i> 201</span>
                                <a href=""><i class="icon icon-like"></i> 201</a>
                            </div>
                        </div>
                    </div>
                    <Spin size="large" fix v-if="loading"></Spin>
                </div>

                <div class="page-pager">
                    <Page 
                        @on-change="pageChange"
                        :current="pageNum" 
                        :total="total" 
                        :pageSize="pageSize" 
                        :disabled ="loading">
                    </Page>
                </div>

            </div>
        </div>
	</div>
</template>

<script>
	export default {
		name: 'Activity',
		components: {
        },
        data() {
            return {
                pageSize: 9,
                pageNum: 1,
                total: 0,
                loading: false,
                list: []
            }
        },
        methods: {
            getList() {
                this.loading = true
                this.$http.get(
                    'api-sys/sysInformation/list',
                    {
                        params: {
                            pageSize: this.pageSize,
                            pageNum: this.pageNum
                        }
                    }
                )
                .then(res=>{
                    this.total = res.total 
                    this.list = res.rows
                    this.loading = false
                })
            },
            pageChange(current) {
                this.pageNum = current
                this.getList()
            }
        },
        mounted() {
            this.getList()
        }
	}
</script>
