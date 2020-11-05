<template>
	<Form hide-required-mark ref="pageForm" :model="pageForm" label-position="top" :rules="rules">
		<FormItem label="用户名" prop="username">
			<Input placeholder="请输入" v-model="pageForm.username"></Input>
		</FormItem>
		<FormItem label="密码" prop="password">
			<Input placeholder="请输入" type="password" v-model="pageForm.password"></Input>
		</FormItem>
		<FormItem label="验证码" prop="code">
			<Row>
				<Col span="14">
					<div class="pr10">
						<Input placeholder="请输入" v-model="pageForm.code"></Input>
					</div>
				</Col>
				<Col span="10" class="text-right">
					<img src="../../../../assets/temp/code.png" alt="" class="code">
					<!-- width: 112px; height: 36px; -->
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
					username: [
                        { required: true , message: '用户名' }
                    ],
					password: [
                        { required: true , message: '请输入密码' }
                    ],
                    code: [
                       { required: true , message: '请输入验证码' }
                    ],
				},
				pageForm: {
					username: '',
					password: '',
					code: ''
				}
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
