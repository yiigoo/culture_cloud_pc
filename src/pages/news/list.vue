<template>
	<div>
        <!-- banner -->
        <page-banner :url="require('../../assets/banner/news.png')"></page-banner>
        <div class="page-conainter">
            <div class="breadcrumb">
                <router-link to="/">首页</router-link>
                <i class="icon icon-arrow-right"></i>
                <router-link to="">一级目录</router-link>
                <i class="icon icon-arrow-right"></i>
                <span>二级目录</span>
            </div>
            <div class="clearfix">
                <div class="page-aside">
                    <div class="page-menu">
                        <div class="title">
                            文旅资讯
                        </div>
                        <div class="list">
                            <ul>
                                <li class="active"><a href="#">最新资讯</a></li>
                                <li><a href="#">最新资讯2</a></li>
                            </ul>
                        </div>
                    </div>
                    <widget-activity class="mt20"></widget-activity>
                </div>
                <div class="page-content">
                    <!-- request 接口 ， slotProps.rows = data.rows , pageSize 每页个数 -->
                    <pager-rows request="api-sys/sysInformation/list" :pageSize="5">
                        <template v-slot="slotProps">
                            <div class="news-list page-list-loading">
                                <div class="item" v-for="(item,index) in slotProps.rows" :key="index">
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
                            </div>
                        </template>
                    </pager-rows>
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
        data() {
            return {
            }
        }
	}
</script>
