<template>
	<div class="footer">
        <div class="wrapper">
            <div class="friend-list">
                <router-link to="/links">友情链接</router-link>
                <router-link to="/about">关于我们</router-link>
                <router-link to="/contact">联系我们</router-link>
                <router-link to="/feedback">意见反馈</router-link>
                <router-link to="/sitemap">网站地图</router-link>
            </div>
            联系电话：0755-12345678　|　传真：22223333　|　地址：四川省宜宾市叙州区某号某楼 <br />
            Copyright @ 2020  叙州区文化馆版权所有，未经授权禁止复制或镜像　备案号: 35457889787877     
        </div>
    </div>
</template>

<script>
	export default {
		name: 'Footer',
		components: {
		}
	}
</script>
