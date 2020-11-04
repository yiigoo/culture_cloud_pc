<template>
	<div>
		<div class="page-other">
           <div class="page-other-title">网站地图</div>
           <div class="sitemap-list clearfix">
                <div class="item" v-for="item in 7" :key="item">
                    <a href="" class="title">文旅资讯</a>
                    <div class="subs">
                        <ul>
                            <li>
                                <a href="">文旅资讯</a>
                            </li>
                            <li>
                                <a href="">文旅资讯</a>
                            </li>
                            <li>
                                <a href="">文旅资讯</a>
                            </li>
                            <li>
                                <a href="">文旅资讯</a>
                            </li>
                        </ul>
                    </div>
                </div>
           </div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'About',
		components: {
		}
	}
</script>
