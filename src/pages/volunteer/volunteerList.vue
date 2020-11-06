<template>
	<div>
		<!-- banner -->
        <page-banner :url="require('../../assets/banner/banner-volunteer.png')"></page-banner>
        
        <div class="page-container">

            <div class="breadcrumb">
                <router-link to="/">首页</router-link>
                <i class="icon icon-arrow-right"></i>
                <router-link to="">一级目录</router-link>
                <i class="icon icon-arrow-right"></i>
                <span>二级目录</span>
            </div>
            
            <div class="search-catalogue-md">
                <search-types :types="types" @on-change="type1Change">
                    选择类型：
                </search-types>
                <search-types :types="types" @on-change="type2Change">
                    选择状态：
                </search-types>
            </div>
            <!-- request 接口 ， slotProps.rows = data.rows , pageSize 每页个数 -->
            <pager-rows ref="rows" request="api-biz/bizActivity/list" :pageSize="9" :params="params">
                <template v-slot="slotProps">
                    <div class="base-card-list-large clearfix">
                        <div class="item" v-for="(item,index) in slotProps.rows" :key="index">
                            <router-link :to="`/volunteer/list/detail?id=${1}`" class="img">
                                <div class="tag active">
                                    招募中
                                </div>
                                <img :src="item.pictures" alt="">
                            </router-link>
                            <div class="wrapper">
                                <div class="title">
                                    <router-link :to="`/volunteer/list/detail?id=${1}`">
                                        活动名称活动名称活动名称活动名称活动名称活动名称
                                    </router-link>
                                </div>
                                
                                <div class="sub">
                                   2020-09-01 10:00~2020-09-10 17:00 <br />
								   叙州区XXX路XXX号
								   <div class="clearfix">
									   <div class="pull-right imt">
										   已报名   103
									   </div>
									   招募人数   500
									   
								   </div>
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
		components: {},
        data() {
            return {
                types: [
                    { value: 'all' , label: '全部' },
                    { value: '1' , label: '类型1' },
                    { value: '2' , label: '类型2' }
                ],
                params: {
                    type1: 'all',
                    type2: 'all'
                } // 搜索参数
            }
        },
        methods: {
            type1Change(value) {
                this.params.type1 = value
                this.$refs['rows'].reload()
            },
            type2Change(value) {
                this.params.type2 = value
                 this.$refs['rows'].reload()
            }
        }
	}
</script>
