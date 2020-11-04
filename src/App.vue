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
		<CheckboxGroup size="large" :value="'twitter'">
			<Checkbox label="twitter">
				<span>Twitter</span>
			</Checkbox>
			<Checkbox label="facebook">
				<span>Facebook</span>
			</Checkbox>
			<Checkbox label="github">
				<span>Github</span>
			</Checkbox>
			<Checkbox label="snapchat">
				<span>Snapchat</span>
			</Checkbox>
		</CheckboxGroup>
		<div class="user-md">
			<div class="user-content page-content">
				<!-- <div class="wrapper-box">
					<div class="user-title">
						个人信息
					</div>
				</div> -->

				<!-- <div class="wrapper-box">
					<div class="user-title">
						个人信息
					</div>
					<Form hide-required-mark ref="pageForm" :model="pageForm" :label-width="150" :rules="rules">

						<FormItem label="用户账户">
							<Input disabled v-model="pageForm.code" class="w250px"></Input>
						</FormItem>

						<FormItem label="真实姓名" prop="name">
							<Input v-model="pageForm.name" class="w250px"></Input>
						</FormItem>

						<FormItem label="性别" prop="sex">
							 <RadioGroup v-model="pageForm.sex" size="large">
								<Radio label="男">
									<span>男</span>
								</Radio>
								<Radio label="女" class="ml20">
									<span>女</span>
								</Radio>
							</RadioGroup>
						</FormItem>

						<FormItem label="年龄" prop="age">
							<InputNumber :max="100" :min="1" v-model="pageForm.age" class="w250px"></InputNumber>
						</FormItem>

						<FormItem label="手机号码" prop="mobile">
							<Input v-model="pageForm.mobile" class="w250px"></Input>
						</FormItem>

						<FormItem label="身份证号码" prop="idcard">
							<Input v-model="pageForm.idcard" class="w400px"></Input>
						</FormItem>

						<FormItem label="电子邮箱" prop="email">
							<Input v-model="pageForm.email" class="w400px"></Input>
						</FormItem>

						<FormItem label="行政地区" prop="">
							<div class="w400px">
								<area-Selector v-model="areaArray">
								</area-Selector>
							</div>
						</FormItem>

						<FormItem label="详细地址" prop="address">
							<Input v-model="pageForm.address" class="w400px"></Input>
						</FormItem>

						<FormItem>
							<Button type="warning" @click="submit" class="mr30" :disabled="success">
								保存信息
							</Button>
							<div class="form-submit-tips success" v-show="success">
								信息提交并修改成功
							</div>
						</FormItem>
					</Form>
					
				</div> -->
        	</div>
		</div>
		
	</div>
</template>

<script>
	import areas from './area.js'
	import areaSelector from './areaSelector'
	export default {
		components: {
			areaSelector
		},
		data() {
			return {
				areaArray: [null,null,null], // [ "440000", "440300", "440304" ]
				rules: {},
				pageForm: {
					code: 'zhangsan',
					name: '',
					sex: '男',
					age: null,
					mobile: '',
					idcard: '',
					email: '',
					province: '',
					city: '',
					district: '',
					address: ''
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
							this.success = false
						},1000)
                    }
                })
			}
		},
		mounted() {
		}
	};
</script>
