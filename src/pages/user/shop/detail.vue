<template>
    <div>
        <!-- banner -->
        <page-banner :url="require('../../../assets/banner/banner-shop.png')"></page-banner>
        <div class="page-container" v-if="!finished">

            <div class="breadcrumb">
                <router-link to="/">首页</router-link>
                <i class="icon icon-arrow-right"></i>
                <router-link to="">一级目录</router-link>
                <i class="icon icon-arrow-right"></i>
                <span>二级目录</span>
            </div>

            <div class="page-detail mb20 clearfix">
                <div class="left-md pull-left">
                    <div class="title">
                        积分兑换礼品积分兑换礼品积分兑换礼品
                    </div>
                    <div class="sub clearfix">
                        <div class="pull-left tag active">
                            20积分
                        </div>
                    </div>
                    <div class="flex-table">
                        <div class="item">
                            <div class="label">商品编号：</div>
                            <div class="value">1</div>
                        </div>
                        <div class="item">
                            <div class="label">商品数量：</div>
                            <div class="value">2332</div>
                        </div>
                        <div class="item">
                            <div class="label">发货地址：</div>
                            <div class="value">叙州区文化馆</div>
                        </div>
                    </div>
                    <Button type="warning" long @click="modalVisible = true">立即报名</Button>
                </div>
                <div class="right-md pull-right page-swiper">
                    <swiper ref="mySwiper" :options="swiperOption">
                        <swiper-slide>
                            <div class="item">
                                <img src="../../../assets/temp/801.png" alt="">
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                             <div class="item">
                                <img src="../../../assets/temp/801.png" alt="">
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                             <div class="item">
                                <img src="../../../assets/temp/801.png" alt="">
                            </div>
                        </swiper-slide>
                        <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
                </div>
            </div>
            <div class="clearfix">
                <div class="page-content pull-left">
                    <div class="page-title">
                        商品介绍
                    </div>
                    <div class="page-content-wrapper">
                        <div class="editor">
                            <p>月18日下午，宜宾市叙州区召开文化和旅游发展大会暨创建天府旅游名县候选县、四川省现代公共文化服务体系示范县动员会，总结近年来文化旅游工作成效，认真分析文化旅游发展中存在的突出问题，安排部署今后五年的文化旅游发展工作。区委副书记、区长陈良云讲话，区委副书记罗世俊主持会议。市文广旅游局副局长赖小路到会指导。</p>
                            <p>
                                陈良云在讲话中，着重讲了五个方面的意见：
                            </p>
                            <p>
                                一是提高政治站位，切实增强建设文化强区和旅游强区的使命感和责任感。大力发展文化和旅游，是贯彻落实中央、省委、市委指示精神的必然要求，是满足人民群众对美好生活需要的有效途径 ，也是建设长江上游高质量发展先导区的重要抓手，要切实增强建设文化强区和旅游强区的使命感和责任感。 二是充分肯定成绩，更加坚定建设文化强区和旅游强区的信心和决心。近年来，全区上下大力推进文化强区和旅游强区建设，重点文旅项目加快推进，文艺作品屡创佳绩，文化旅游基础设施极大改善。
                            </p>
                            <p>
                                <img src="../../../assets/temp/map.png" alt="">
                            </p>
                        </div>
                    </div>
                    <share-bar></share-bar>
                    <widget-comment class="mt20"></widget-comment>
                </div>
                <div class="page-aside pull-right">
                    <widget-goods></widget-goods>
                    <widget-news class="mt20"></widget-news>
                </div>
            </div>
        </div>
        <Modal
            v-model="modalVisible"
            closable
            width="600"
            title="填写兑换信息">
                <div class="change-form">
                    <Form hide-required-mark ref="pageForm" :model="pageForm" :label-width="80" :rules="rules">
                    <FormItem label="兑换数量" prop="count">
                        <InputNumber v-model="pageForm.count" :min="1" :precision="0" class="w100" ></InputNumber>
                    </FormItem>
                    <FormItem label="收货人" prop="name">
                        <Input v-model="pageForm.name"></Input>
                    </FormItem>
                    <FormItem label="收货地址" prop="address">
                        <Input type="textarea" v-model="pageForm.address"></Input>
                    </FormItem>
                     <FormItem label="联系电话" prop="mobile">
                        <Input v-model="pageForm.mobile"></Input>
                    </FormItem>
                     <FormItem label="其他备注" prop="remark">
                        <Input type="textarea" v-model="pageForm.remark"></Input>
                    </FormItem>
                </Form>
                </div>
                <div slot="footer">
                <div class="change-form">
                    <Button type="warning" long @click="submit">立即兑换</Button>
                </div>
            </div>
        </Modal>
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
        name: 'shop',
        components: {},
        data() {
            return {
                modalVisible: false,
                finished: false,
                swiperOption: {
					autoplay: {
                        disableOnInteraction: false,
                        delay: 5000
					},
					
					loop: true,
					pagination: {
						el: '.swiper-pagination',
						clickable: true
					}
                },
                rules: {
                    name: { required: true , message: '输入' },
                    address: { required: true , message: '输入' },
                    mobile: { required: true , message: '输入' }
                },
                pageForm: {
                    count: 1,
                    name: '',
                    address: '',
                    mobile: '',
                    remark: ''
                }
            }
        },
        methods: {
            submit() {
                this.modalVisible = false
                setTimeout(()=>{
                    this.$Message.success('兑换成功')
                    this.finished = true
                },500)
            }
        },
        mounted() {
        }
    }
</script>
