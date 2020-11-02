<template>
	<div>
		<div class="banner banner-swiper">
            <div class="static">
                <img src="../../assets/banner/user.png" alt="" />
            </div>
        </div>
        
        <div class="page-conainter page-conainter-inner">
            <div class="user-md clearfix">
                <div class="user-menu page-aside">
                    <div class="top">
                        <div class="avatar">
                            <img src="../../assets/temp/avatar.png" alt="" img="img-avatar" />
                        </div>
                        <div class="name">
                            李文蕊
                        </div>
                        <a class="edit">
                            <i class="icon icon-edit"></i>
                        </a>
                    </div>
                    <div class="list">
                        <ul>
                            <li :class="{active: currentMenu === item.to}" v-for="(item, index) in menus" :key="index">
                                <router-link :to="item.to">
                                    <i class="icon"  :class="[`icon-user-${item.icon}`]"></i>
                                    {{ item.name }}
                                </router-link>
                            </li>
                            <li>
                                <a href="">
                                    <i class="icon icon-user-logout"></i>
                                    退出
                                </a>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <router-view></router-view>
            </div>
        </div>
	</div>
</template>

<script>
	export default {
		name: 'userMain',
		components: {
        },
        data() {
            return {
                currentMenu: '/user/account',
                menus: [
                    {
                        to: '/user/account',
                        icon: 'account',
                        name: '个人资料'
                    },
                    {
                        to: '/user/activity',
                        icon: 'activity',
                        name: '活动报名'
                    },
                    {
                        to: '',
                        icon: 'house',
                        name: '场馆预订'
                    },
                    {
                        to: '',
                        icon: 'volunteer',
                        name: '志愿者服务'
                    },
                    {
                        to: '',
                        icon: 'integral',
                        name: '我的积分'
                    },
                    {
                        to: '',
                        icon: 'comment',
                        name: '我的评论'
                    },
                    {
                        to: '',
                        icon: 'view',
                        name: '我的足迹'
                    },
                    {
                        to: '',
                        icon: 'message',
                        name: '我的消息'
                    },
                    {
                        to: '',
                        icon: 'feedback',
                        name: '我的反馈'
                    },
                    {
                        to: '',
                        icon: 'survey',
                        name: '问卷调查'
                    }
                ]      
            }
        },
        watch: {
			'$route.meta' (meta) {
                // 默认指向目录
                this.currentMenu = this.$route.meta.subMenu
			}
		},
        mounted() {
            const currentMenu = this.$route.meta.subMenu
            this.menus.forEach(i=>{
                if (i.to === currentMenu) {
                    this.currentMenu = currentMenu
                }
            })
        }
	}
</script>
