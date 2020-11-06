<template>
	<div>
		<!-- banner -->
        <page-banner :url="require('../../../assets/banner/banner-shop.png')"></page-banner>
        
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
            </div>
            <!-- request 接口 ， slotProps.rows = data.rows , pageSize 每页个数 -->
            <pager-rows ref="rows" request="" :pageSize="12" :params="params">
                <template v-slot="slotProps">
                    <div class="shop-list clearfix">
                        <div class="item" v-for="(item,index) in 12" :key="index">
                            <div class="wrapper">
                                <router-link to="/user/shop/detail" class="img">
                                    <img src="../../../assets/temp/401.png" alt="" />
                                </router-link>
                                <div class="info">
                                    <div class="title">
                                        <router-link to="/user/shop/detail">
                                            礼品名称礼礼品名称礼品礼品名称礼品名称礼品名称礼品名称名称礼品名称礼品名称品礼品名称礼品名称礼品名称礼品名称名称礼品名称礼品名称
                                        </router-link>
                                    </div>
                                    <div class="count">2000 积分</div>
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
