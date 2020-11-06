<template>
	<div>
        <page-banner :url="require('../../assets/banner/banner-user.png')"></page-banner>
        
        <div class="page-container">
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
                                <a @click="modalVisible = true">
                                    <i class="icon icon-user-logout"></i>
                                    退出
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <router-view></router-view>
            </div>
            <Modal
                v-model="modalVisible"
                closable
                width="400"
                title="是否退出登录？">
                <div slot="footer">
                    <Button class="mr20" @click="modalVisible = false">取消</Button>
                    <Button class="border-primary" @click="logout">确定</Button>
                </div>
            </Modal>
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
                modalVisible: false,
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
                       to: '/user/venue',
                        icon: 'house',
                        name: '场馆预订'
                    },
                    {
                        to: '/user/volunteer',
                        icon: 'volunteer',
                        name: '志愿者服务'
                    },
                    {
                        to: '/user/integral',
                        icon: 'integral',
                        name: '我的积分'
                    },
                    {
                        to: '/user/comment',
                        icon: 'comment',
                        name: '我的评论'
                    },
                    {
                        to: '/user/view',
                        icon: 'view',
                        name: '我的足迹'
                    },
                    {
                        to: '/user/message',
                        icon: 'message',
                        name: '我的消息'
                    },
                    {
                        to: '/user/feedback',
                        icon: 'feedback',
                        name: '我的反馈'
                    },
                    {
                       to: '/user/survey',
                        icon: 'survey',
                        name: '问卷调查'
                    }
                ]      
            }
        },
        methods: {
            logout() {
                sessionStorage.token = ''
                this.modalVisible =false
                setTimeout(()=>{
                    this.$router.push({
                        path: '/login'
                    })
                },500)
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
