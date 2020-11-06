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
            <!-- request 接口 ， slotProps.rows = data.rows , pageSize 每页个数 -->
            <pager-rows request="api-sys/sysInformation/list" :pageSize="9">
                <template v-slot="slotProps">
                    <div class="base-card-list-large clearfix">
                        <div class="item" v-for="(item,index) in slotProps.rows" :key="index">
                            <a href="" class="img">
                                <div class="tag" :class="{ active: item.status === '报名中' }">
                                    {{ item.status }}
                                </div>
                                <img :src="item.pictures" alt="">
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
                    </div>
                </template>
            </pager-rows>
            
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
            }
        }
	}
</script>
