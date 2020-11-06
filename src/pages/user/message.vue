<template>
	<div class="user-content page-content">
		<div class="wrapper-box">
			<div class="page-tabs-wrapper">
                <div class="item" @click="onChange('1')" :class="{active: currentType === '1'}">全部</div>
                <div class="item" @click="onChange('2')" :class="{active: currentType === '2'}">未读</div>
                <div class="item" @click="onChange('3')" :class="{active: currentType === '3'}">已读</div>
            </div>
			 <pager-rows ref="rows" request="" :pageSize="5" :params="params">
                <template v-slot="slotProps">
					<div class="message-list mt20">
						<div class="item" v-for="item in 5" :key="item">
							<div class="title">
								<strong>消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息 ...</strong>
							</div>
							<div class="sub">
								2020-5-6 20:10
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
