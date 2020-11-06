<template>
	<div>
        <div class="user-content page-content">
			<div class="exchange-md">
				<div class="ex-change-top">
					<a href="" class="btn pull-right">积分商城</a>
					当前积分<br />
					<span class="imt">999</span> 分
				</div>
				<div class="point-md">
					<div class="point-header">
						<div class="label">
							项目
						</div>
						<div class="value">
							积分
						</div>
					</div>
					<pager-rows request="api-sys/sysInformation/list" :pageSize="5">
                        <template v-slot="slotProps">
                            <div class="list">
								<div class="item">
									<div class="label">
										<strong>PC端每日签到</strong>
										<div class="sub">2020年10月1日 15:12:02</div>
									</div>
									<div class="value add">
										+10
									</div>
								</div>
								<div class="item" v-for="item in 9" :key="item">
									<div class="label">
										<strong>PC端每日签到</strong>
										<div class="sub">2020年10月1日 15:12:02</div>
									</div>
									<div class="value subtract">
										-10
									</div>
								</div>
								
							</div>
                        </template>
                    </pager-rows>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Integral',
		components: {
		},
		mounted() {
			console.log(this.$route.path)
		}
	}
</script>
