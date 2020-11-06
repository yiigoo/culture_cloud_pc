<template>
	<div>
		<!-- banner -->
        <page-banner :url="require('../../assets/banner/banner-heritage.png')"></page-banner>
        
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
            <pager-rows ref="rows" request="" :pageSize="12" :params="params">
                <template v-slot="slotProps">
                    <div class="base-card-list">
                        <div class="item mb20" v-for="(item,index) in 12" :key="index">
                            <router-link :to="`/heritage-exhibition-detail?id=${1}`" class="img height260">
                                <img src="../../assets/temp/903.png" alt="">
                            </router-link>
                            <div class="wrapper">
                                <div class="title">
                                    <router-link :to="`/heritage-exhibition-detail?id=${1}`">
                                        非遗展示非遗展示非遗展示非遗展示非遗展示
                                    </router-link>
                                </div>
                                <div class="sub">
                                    非遗介绍非遗介绍非遗介绍非遗介绍非遗介绍非遗介绍非遗介绍非遗介绍非遗介绍非遗介绍非遗介绍
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
