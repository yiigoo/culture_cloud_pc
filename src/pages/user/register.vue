<template>
	<div>
        <page-banner :url="require('../../assets/banner/login.png')"></page-banner>
		<div class="page-conainter page-conainter-inner" v-if="!finished">
			<div class="register-md">
				<div class="title">
					<div class="inner">
						注册新用户
					</div>
					<div class="sub">
						欢迎你来到叙州文化馆
					</div>
				</div>
				<div class="wrapper">
					<Form hide-required-mark ref="pageForm" :model="pageForm" label-position="top" :rules="rules">
						<FormItem label="手机号" prop="mobile">
							<Input placeholder="请输入" v-model="pageForm.mobile"></Input>
						</FormItem>
						<FormItem label="验证码" prop="code">
							<Row>
								<Col span="13">
									<div class="pr10">
										<Input placeholder="请输入" v-model="pageForm.code"></Input>
									</div>
								</Col>
								<Col span="11">
									<Button long :disabled="sending">获取验证码</Button>
								</Col>
							</Row>
						</FormItem>
						<FormItem label="输入密码" prop="password">
							<Input type="password" v-model="pageForm.password"></Input>
						</FormItem>
						<FormItem label="确认密码" prop="passwordCheck">
							<Input type="password" v-model="pageForm.passwordCheck"></Input>
						</FormItem>
						<FormItem>
							<Button type="warning" long @click="submit" class="mt10">
								登录
							</Button>
						</FormItem>
					</Form>
				</div>
			</div>
        </div>

		<operate-tips type="success" v-if="finished">
			<div slot="tips">恭喜，你已经完成注册，请尽快补充完善资料</div>
			<div slot="btns">
				<Button @click="to('/user/account')">完善资料</Button>
				<Button @click="to('/')">返回首页</Button>
			</div>
		</operate-tips>

		<!-- <operate-tips type="fail">
			<div slot="tips">抱歉，你的注册未完成，请重新填写信息</div>
			<div slot="btns">
				<Button>重新注册</Button>
			</div>
		</operate-tips> -->


	</div>
</template>

<script>
	export default {
		data() {
			const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'))
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
					mobile: [
                        { required: true , message: '手机号' }
                    ],
                    code: [
                       { required: true , message: '请输入验证码' }
					],
					password: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    passwordCheck: [
                        { validator: validatePassCheck, trigger: 'blur' }
                    ],
				},
				pageForm: {
					mobile: '',
					code: '',
					password: '',
					passwordCheck: ''
				},
				sending: false,
				finished: false
			}
		},
		methods: {
			submit() {
				this.$refs['pageForm'].validate((valid) => {
                    if (valid) {
						// 密码修改后重新登录
						sessionStorage.token = '我是token'
						this.finished = true
                    }
                })
			},
			to( path ) {
				this.$router.push({
					path: path
				})
			}
		}
	}
</script>
