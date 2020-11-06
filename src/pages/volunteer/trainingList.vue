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
            <pager-rows request="api-sys/sysInformation/list" :pageSize="5">
                <template v-slot="slotProps">
                    <div class="news-list page-list-loading">
                        <div class="item" v-for="(item,index) in slotProps.rows" :key="index">
                            <div class="img">
                                <router-link :to="`/volunteer/training/detail?id=${item.id}`">
                                    <img :src="item.pictures" alt="">
                                </router-link>
                                
                            </div>
                            <div class="wrapper">
                                <div class="title">
                                    <router-link :to="`/volunteer/training/detail?id=${item.id}`">{{ item.title }}</router-link>
                                </div>
                                <div class="content mt15">
                                    {{ item.content }}
                                </div>
                                <div class="bar sub">
                                    2020-10-20  叙州文化馆
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
