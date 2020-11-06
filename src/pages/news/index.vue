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
                    <router-view></router-view>
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
