<template>
	<div class="header header-index">
        <div class="page-conainter">
            <div class="logo">
                <a href="#"><img src="../assets/logo.png" alt=""></a>
            </div>
            <div class="nav">
                <ul>
                    <li :class="{ active: activeName === '/' }">
						<a @click="changeIndex('/')">首页</a>
					</li>
                    <li :class="{ active: activeName === '/news' }">
						<a @click="changeIndex('/news')">文旅资讯</a>
					</li>
					<li :class="{ active: activeName === '/activity' }">
						<a @click="changeIndex('/activity')">文旅活动</a>
					</li>
					<li :class="{ active: activeName === '/xx' }">
						<a @click="changeIndex('/xx')">场馆预订</a>
					</li>
					<li :class="{ active: activeName === '/xx' }">
						<a @click="changeIndex('/xx')">非遗传承</a>
					</li>
					<li :class="{ active: activeName === '/xx' }">
						<a @click="changeIndex('/xx')">品牌推荐</a>
					</li>
					<li :class="{ active: activeName === '/xx' }">
						<a @click="changeIndex('/xx')">文旅服务</a>
					</li>
					<li :class="{ active: activeName === '/xx' }">
						<a @click="changeIndex('/xx')">文化社团</a>
					</li>
					<li :class="{ active: activeName === '/xx' }">
						<a @click="changeIndex('/xx')">志愿者</a>
					</li>
                </ul>
            </div>
            <div class="bar">
                <div class="item">
                    <a href="#">
                        <i class="icon icon-search"></i>
                    </a>
                </div>
                <div class="item">
                    <a href="#">
                        <i class="icon icon-user"></i>
                    </a>
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
				activeName: '/'
			}
		},
		methods: {
			changeIndex(name) {
				this.activeName = name
				this.$router.push({
					path: name
				})
			}
		},
		mounted() {
			console.log(this.$route)
		}

	}
</script>
