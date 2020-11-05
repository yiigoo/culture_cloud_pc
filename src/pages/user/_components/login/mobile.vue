<template>
	<Form hide-required-mark ref="pageForm" :model="pageForm" label-position="top" :rules="rules">
		<FormItem label="手机号" prop="mobile">
			<Input placeholder="请输入" v-model="pageForm.mobile"></Input>
		</FormItem>
		<FormItem label="验证码" prop="code">
			<Row>
				<Col span="14">
					<div class="pr10">
						<Input placeholder="请输入" v-model="pageForm.code"></Input>
					</div>
				</Col>
				<Col span="10" class="text-right">
					<Button :disabled="sending">获取验证码</Button>
				</Col>
			</Row>
			
		</FormItem>
		<FormItem>
			<Button type="warning" long @click="submit" class="mt10">
				登录
			</Button>
		</FormItem>
	</Form>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				rules: {
					mobile: [
                        { required: true , message: '手机号' }
                    ],
                    code: [
                       { required: true , message: '请输入验证码' }
                    ],
				},
				pageForm: {
					mobile: '',
					code: ''
				},
				sending: false
			}
		},
		methods: {
			submit() {
				this.$refs['pageForm'].validate((valid) => {
                    if (valid) {
						// 密码修改后重新登录
						sessionStorage.token = '我是token'
						this.$router.push({
							path: '/user'
						})
                    }
                })
			}
		}
	};
</script>
