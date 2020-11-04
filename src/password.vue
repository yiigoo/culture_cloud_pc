<template>
	<div class="page-conainter page-conainter-inner">
		<!-- <page-header>
		</page-header>
		<div class="page-body">
			<router-view>
			</router-view>
		</div>
		<page-footer>
		</page-footer> -->
		<br />
		<br />
		<br />
		<br />
		<br />
		<div class="user-md">
			<div class="user-content page-content">
				<!-- <div class="wrapper-box">
					<div class="user-title">
						个人信息
					</div>
				</div> -->

				<div class="wrapper-box">
					<div class="user-title">
						修改密码
					</div>
					<Form hide-required-mark ref="pageForm" :model="pageForm" :label-width="150" :rules="rules">
						<FormItem label="原密码" prop="orginPassword">
							<Input type="password" v-model="pageForm.orginPassword" class="w250px"></Input>
						</FormItem>
						<FormItem label="新密码" prop="password">
							<Input type="password" v-model="pageForm.password" class="w250px"></Input>
						</FormItem>
						<FormItem label="确认密码" prop="passwordCheck">
							<Input type="password" v-model="pageForm.passwordCheck" class="w250px"></Input>
						</FormItem>
						<FormItem>
							<Button type="warning" @click="submit" class="mr30">
								保存信息
							</Button>
							<div class="form-submit-tips success" v-show="success">
								信息提交并修改成功
							</div>
						</FormItem>
					</Form>
					
				</div>
        	</div>
		</div>
		
	</div>
</template>

<script>
	export default {
		components: {},
		data() {
			const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入新密码'))
                } else {
                    if (this.pageForm.passwordCheck !== '') {
                        // 对第二个密码框单独验证
                        this.$refs.pageForm.validateField('passwordCheck')
                    }
                    callback()
                }
            };
            const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入确认密码'))
                } else if (value !== this.pageForm.password) {
                    callback(new Error('与新密码不一致'))
                } else {
                    callback()
                }
            }
			return {
				rules: {
					orginPassword: [
                        { required: true , message: '输入原密码' }
                    ],
					password: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    passwordCheck: [
                        { validator: validatePassCheck, trigger: 'blur' }
                    ],
				},
				pageForm: {
					orginPassword: '',
					password: '',
					passwordCheck: ''
				},
				success: false
			}
		},
		methods: {
			submit() {
				this.$refs['pageForm'].validate((valid) => {
                    if (valid) {
						// 密码修改后重新登录
						this.success = true
						setTimeout(()=>{
							sessionStorage.token = ''
							this.$router.push({
								path: '/user/login'
							})
						},1000)
                    }
                })
			}
		}
	};
</script>
