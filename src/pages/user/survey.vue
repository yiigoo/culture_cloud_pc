<template>
	<div>
        <page-banner :url="require('../../assets/banner/login.png')"></page-banner>
		<div class="page-container page-container-inner" v-if="!finished">
			<div class="survey-md">
				<div class="survey-header">
					<div class="title">
						中小学生网络直播课效果问卷调查
					</div>
					<div class="sub">
						同学们，从开始网络直播，已有半月时间，你是否已经适应这种教学方式，对老师的教学是否满意？请认真填写本问卷，让老师们及时了解你的想法，及时调整教学策略。谢谢！
					</div>
				</div>
				<div class="wrapper form-survey">
					<Form 
						hide-required-mark 
						ref="pageForm" 
						:model="pageForm" 
						label-position="top" 
						:rules="rules">
						<FormItem label="Q1：你感觉网络授课和线下授课效果一样吗？（单选）" prop="q1">
							<Input placeholder="请输入" v-model="pageForm.q1"></Input>
						</FormItem>

						<FormItem label="Q2：你感觉网络授课和线下授课效果一样吗？（单选）" prop="q2">
							<RadioGroup v-model="pageForm.q2" vertical size="large">
								<Radio label="apple">
									<span>Apple</span>
								</Radio>
								<Radio label="android">
									<span>Android</span>
								</Radio>
							</RadioGroup>
						</FormItem>

						<FormItem label="Q3：你感觉网络授课和线下授课效果一样吗？（单选）" prop="q3">
							<CheckboxGroup v-model="pageForm.q3" size="large">
								<Checkbox label="香蕉"></Checkbox>
								<Checkbox label="苹果"></Checkbox>
								<Checkbox label="西瓜"></Checkbox>
							</CheckboxGroup>
						</FormItem>

						<FormItem label="Q4：你感觉网络授课和线下授课效果一样吗？（单选）" prop="q4">
							<Input 
								:rows="4"
								show-word-limit
								maxlength="100"
								type="textarea" 
								placeholder="请输入" 
								v-model="pageForm.q4">
							</Input>
						</FormItem>
						
						<FormItem>
							<div class="btns">
								<Button type="warning" long @click="submit" class="mt10">
									登录
								</Button>
							</div>
						</FormItem>
					</Form>
				</div>
			</div>
        </div>

		<operate-tips type="success" v-if="finished">
			<div slot="tips">感谢你填写完本次问卷！</div>
		</operate-tips>

		<!-- <operate-tips type="fail">
			<div slot="tips">抱歉，你提交的信息有误！</div>
			<div slot="btns">
				<Button>重新填写</Button>
			</div>
		</operate-tips> -->


	</div>
</template>

<script>
	export default {
		data() {
			return {
				rules: {
					q1: [
                        { required: true , message: '请输入' }
					],
					q2: [
                        { required: true , message: '请输入' }
					],
					q3: [
                        { required: true , message: '请输入' }
					],
					q4: [
                        { required: true , message: '请输入' }
                    ],
                    
				},
				pageForm: {
					q1: '',
					q2: '',
					q3: [],
					q4: ''
				},
				finished: false
			}
		},
		methods: {
			submit() {
				this.$refs['pageForm'].validate((valid) => {
                    if (valid) {
						this.finished = true
                    }
                })
			},
		}
	}
</script>
