<template>
	<div class="user-content page-content">
		<div class="wrapper-box">
			<div class="user-title">
				志愿者名单
			</div>
			<div class="page-flex-table clearfix">
				<div class="row">
					<div class="item">
						<div class="label">所属团队：</div>
						<div class="value">xxxx</div>
					</div>
					<div class="item">
						<div class="label">团队服务时长：</div>
						<div class="value">xxxx</div>
					</div>
					<div class="item">
						<div class="label">志愿者积分：</div>
						<div class="value">xxxx</div>
					</div>
				</div>
				<div class="row">
					<div class="item">
						<div class="label">注册时间：</div>
						<div class="value">xxxx</div>
					</div>
					<div class="item">
						<div class="label">个人服务时长：</div>
						<div class="value">xxxx</div>
					</div>
					<div class="item">
						<div class="label">参加活动数：</div>
						<div class="value">xxxx</div>
					</div>
				</div>
			</div>
		</div>

		<div class="wrapper-box">
			<div class="page-tabs-wrapper">
                <div class="item" @click="onChange('1')" :class="{active: currentType === '1'}">全部</div>
                <div class="item" @click="onChange('2')" :class="{active: currentType === '2'}">已报名</div>
                <div class="item" @click="onChange('3')" :class="{active: currentType === '3'}">已结束</div>
				<div class="item" @click="onChange('4')" :class="{active: currentType === '4'}">已取消</div>
            </div>
			<pager-rows ref="rows" request="" :pageSize="5" :params="params">
                <template v-slot="slotProps">
					<div class="order-list">
						<div class="item" v-for="item in 5" :key="item">
							<div class="img">
								<a href=""><img src="../../assets/temp/402.png" alt=""></a>
							</div>
							<div class="wrapper">
								<div class="title">
									<a href="">
										<strong>323232</strong>
									</a>
								</div>
								<div class="sub">
									活动日期：2020年10月10日 <br>
									活动时间：下午 5:00 <br>
									活动地点：文化馆三楼
								</div>
							</div>
							<div class="bar">
								<div class="row status">
									已报名
								</div>
								<div class="row">
									<router-link to="/user/volunteer/detail" class="btn">查看详情</router-link>
								</div>
								<div class="row">
									<a @click="modalVisible = true" class="btn">取消预订</a>
								</div>
							</div>
						</div>
					</div>
                </template>
			</pager-rows>
		</div>
		<Modal
			v-model="modalVisible"
			closable
			width="400"
			title="是否取消预订？">
			<div slot="footer">
				<Button class="mr20" @click="modalVisible = false">取消</Button>
				<Button class="border-primary" @click="cancelOrder">确定</Button>
			</div>
		</Modal>
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
				},
				modalVisible: false
			}
		},
		methods: {
			onChange(type) {
				if( type !== this.currentType ){
					this.currentType = type
					this.params.type = type
					this.$refs['rows'].reload()
				}
			},
			cancelOrder() {
				this.$refs['rows'].reload()
				this.modalVisible = false
			}
		},
		watch: {
		},
		mounted() {
		}
	};
</script>
