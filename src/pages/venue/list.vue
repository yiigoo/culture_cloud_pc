<template>
	<div>
		<!-- banner -->
        <page-banner :url="require('../../assets/banner/banner-venue.png')"></page-banner>
        
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
            <pager-rows ref="rows" request="" :pageSize="9">
                <template v-slot="slotProps">
                    <div class="base-card-list-large clearfix">
                        <div class="item" v-for="(item,index) in 9" :key="index">
                            <router-link :to="`/venue-detail?id=${1}`" class="img">
                                <img src="../../assets/temp/201.png" alt="">
                            </router-link>
                            <div class="wrapper">
                                <div class="title">
                                    <router-link :to="`/venue-detail?id=${1}`">
                                        场馆名称场馆名称场馆名称
                                    </router-link>
                                </div>
                                
                                <div class="sub">
                                    开放时间：周一至周五 9:00 - 17:00<br />
									场馆地址：四川省宜宾市叙州区某路某层某号
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
		name: 'Venue',
		components: {
        },
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
