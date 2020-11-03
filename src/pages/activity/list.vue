<template>
	<div>
		<!-- banner -->
        <page-banner :url="require('../../assets/banner/activity.png')"></page-banner>
        
        <div class="page-conainter">
            <div class="search-catalogue-md">
                <div class="item">
                    <div class="label">选择类型：</div>
                    <div class="value">
                        <a href="" class="active">全部</a>
                        <a href="">文字内容</a>
                        <a href="">文字内容</a>
                        <a href="">文字内容</a>
                        <a href="">文字内容</a>
                        <a href="">文字内容</a>
                        <a href="">文字内容</a>
                        <a href="">文字内容</a>
                        <a href="">文字内容</a>
                    </div>
                </div>
                <div class="item">
                    <div class="label">选择状态：</div>
                    <div class="value">
                        <a href="" class="active">全部</a>
                        <a href="">文字内容</a>
                        <a href="">文字内容</a>
                        <a href="">文字内容</a>
                        <a href="">文字内容</a>
                        <a href="">文字内容</a>
                        <a href="">文字内容</a>
                        <a href="">文字内容</a>
                    </div>
                </div>
            </div>
            <div class="base-card-list-large clearfix page-list-loading">
                <div class="item" v-for="(item,index) in list" :key="index">
                    <a href="" class="img">
                        <div class="tag" :class="{ active: item.status === '报名中' }">
                            {{ item.status }}
                        </div>
                        <img :src="item.pictureList[0]" alt="">
                    </a>
                    <div class="wrapper">
                        <div class="title">
                            <a href="">{{ item.name }}</a>
                        </div>
                        
                        <div class="sub">
                            报名时间：{{ $dayjs(item.applyStartTime).format('YYYY-MM-DD HH:mm') }} ~ {{ $dayjs(item.applyEndime).format('YYYY-MM-DD HH:mm') }}<br />
                            地点：{{ item.venueName }}
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
                    'api-biz/bizActivity/list',
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
