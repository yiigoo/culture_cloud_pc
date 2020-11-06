<template>
	<pager-rows request="api-sys/sysInformation/list" :pageSize="5">
        <template v-slot="slotProps">
            <div class="news-list page-list-loading">
                <div class="item" v-for="(item,index) in slotProps.rows" :key="index">
                    <div class="img">
                        <router-link :to="`/news/detail?id=${item.id}`">
                            <img :src="item.pictures" alt="">
                        </router-link>
                        
                    </div>
                    <div class="wrapper">
                        <div class="title">
                            <router-link :to="`/news/detail?id=${item.id}`">{{ item.title }}</router-link>
                        </div>
                        <div class="sub">{{ $dayjs(item.createTime).format('YYYY-MM-DD') }}  {{ item.venueName }}</div>
                        <div class="content">
                            {{ item.content }}
                        </div>
                        <div class="bar">
                            <span><i class="icon icon-eye"></i> 201</span>
                            <a href=""><i class="icon icon-like"></i> 201</a>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </pager-rows>
</template>

<script>
	export default {
		name: 'News',
		components: {
        },
        data() {
            return {
            }
        }
	}
</script>
