<template>
	<div>
		<page-banner :url="require('../../assets/banner/banner-feedback.png')"></page-banner>
		<div class="page-container page-container-inner user-md">
			<div class="user-content page-content feedback-md">
				<div class="wrapper-box">
					<div class="user-title">
						意见反馈
					</div>
					<div class="form">
						<Form hide-required-mark ref="pageForm" :model="pageForm" :label-width="150" :rules="rules">
							<FormItem label="姓名" prop="name">
								<Input v-model="pageForm.name" class="w250px"></Input>
							</FormItem>
							<FormItem label="手机" prop="mobile">
								<Input v-model="pageForm.mobile" class="w250px"></Input>
							</FormItem>
							<FormItem label="选择主题" prop="theme">
								<div class="box-checkbox active">
									文字内容
								</div>
								<div v-for="item in 6" :key="item" class="box-checkbox">
									文字内容
								</div>
							</FormItem>
							<FormItem label="内容" prop="content">
								<Input maxlength="100" show-word-limit type="textarea" v-model="pageForm.content" :rows="4"></Input>
							</FormItem>
							<FormItem label="文件" prop="files">
								<div class="upload-md">
									<div class="tips">支持PNG、JPG格式图片，可上传五张图片，单张不超过1MB。</div>
									<Upload
										show-upload-list
										multiple
										action="//jsonplaceholder.typicode.com/posts/">
										<div>
											<div class="box">
												<i class="icon icon-camera"></i>
												添加图片
											</div>
										</div>
									</Upload>
								</div>
								
							</FormItem>
							<FormItem>
								<Button type="warning" @click="submit" class="mr30">
									提交
								</Button>
							</FormItem>
						</Form>
					</div>
				</div>
			</div>
		</div>
	</div>
	
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				rules: {
					name: [
                        { required: true , message: '请输入姓名' }
					],
					mobile: [
                        { required: true , message: '请输入手机' }
					],
					theme: [
                        { required: true , message: '请选择主题' }
					],
					content: [
                        { required: true , message: '请输入内容' }
					],
				},
				pageForm: {
					name: '',
					mobile: '',
					theme: '1',
					content: ''
				},
				success: false
			}
		},
		methods: {
			submit() {
				this.$refs['pageForm'].validate((valid) => {
                    if (valid) {
						this.success = true
						setTimeout(()=>{
							this.$Message.success('反馈成功')
						},1000)
                    }
                })
			}
		}
	};
</script>
