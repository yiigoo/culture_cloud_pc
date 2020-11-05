<template>
	<div class="header header-index">
        <div class="page-conainter">
            <div class="logo">
                <a href="#"><img src="../assets/logo.png" alt=""></a>
            </div>
            <div class="nav">
                <ul>
					<li :class="{ active: currentMenu === item.to }" v-for="(item,index) in menus" :key="index">
						<router-link :to="item.to">{{ item.name }}</router-link>
					</li>
                </ul>
            </div>
            <div class="bar">
                <div class="item item-search" :class="{active: searchVisible }">
                    <a @click="showSearch">
                        <i class="icon icon-search"></i>
                    </a>
					<div class="search-box" v-show="searchVisible">
                        <input type="text" @keyup.enter="toSearch" v-model="keyword" />
                    </div>
                </div>
                <div class="item">
					<router-link to="/user"><i class="icon icon-user"></i></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: 'Header',
		components: {
		},
		data() {
			return {
				currentMenu: '/',
				searchVisible: false,
				keyword: '',
				menus: [
					{
						to: '/',
						name: '首页',
					},
					{
						to: '/news',
						name: '文旅资讯',
					},
					{
						to: '/activity',
						name: '文旅活动',
					},
					{
						to: '/venue',
						name: '场馆预订',
					},
					{
						to: '/heritage',
						name: '非遗传承',
					},
					{
						to: '/brand',
						name: '品牌推荐',
					},
					{
						to: '/culture-service',
						name: '文旅服务',
					},
					{
						to: '/art-team',
						name: '文化社团',
					},
					{
						to: '/volunteer',
						name: '志愿者',
					},
				]
			}
		},
		methods: {
			showSearch() {
				this.searchVisible = !this.searchVisible
			},
			toSearch() {
				this.searchVisible = false
				if( this.keyword.trim()) {
					this.$router.push({
						path: '/search',
						query: {
							keyword: this.keyword.trim()
						}
					})
				}
			}
		},
		watch: {
			'$route.meta' (meta) {
				// 默认指向目录
				const currentMenu = meta.menu
				this.menus.forEach(i=>{
					if (i.to === currentMenu) {
						this.currentMenu = currentMenu
					}
				})
				if( !currentMenu) {
					this.currentMenu = ''
				}
			}
		},
		mounted() {
		}

	}
</script>
