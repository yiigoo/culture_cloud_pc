<template>
	<div class="user-content page-content">
		<div class="wrapper-box">
			<div class="page-tabs-wrapper">
                <div class="item" @click="onChange('1')" :class="{active: currentType === '1'}">近一周</div>
                <div class="item" @click="onChange('2')" :class="{active: currentType === '2'}">近一月</div>
                <div class="item" @click="onChange('3')" :class="{active: currentType === '3'}">全部</div>
            </div>
			 <pager-rows ref="rows" request="" :pageSize="5" :params="params">
                <template v-slot="slotProps">
					<div class="figure-list mt20">
						<div class="item" v-for="item in 5" :key="item">
							<div class="img">
								<a href="">
									<img src="../../assets/temp/102.png" alt="">
								</a>
							</div>
							<div class="wrapper">
								<div class="title">
									<a href="">资讯标题资讯标题标题资讯标题资讯标题资讯标题资讯标题资讯标题资讯标题资讯标题资讯标题资讯标题资讯标题资讯标题资讯标题</a>
								</div>
								<div class="sub">
									文旅资讯
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
		components: {
			
		},
		data() {
			return {
				currentType: '1',
				params: {
					type: '1'
				}
			}
		},
		methods: {
			onChange(type) {
				if( type !== this.currentType ){
					this.currentType = type
					this.params.type = type
					this.$refs['rows'].reload()
				}
			}
		},
		watch: {
		},
		mounted() {
		}
	};
</script>
