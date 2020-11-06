<template>
    <div>
        <!-- banner -->
        <page-banner :url="require('../../assets/banner/activity.png')"></page-banner>
        <div class="page-container">

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
                        叙州区召开文化和旅游发展大会和旅游发展大会
                    </div>
                    <div class="sub clearfix">
                        <div class="pull-left tag active">
                            报名中
                        </div>
                        <div class="pull-right">
                            245人已报名
                        </div>
                    </div>
                    <div class="flex-table">
                        <div class="item">
                            <div class="label">活动地点：</div>
                            <div class="value">叙州区某某路某某号某某地区一楼叙州区某某路某叙州区某某路某叙州区某某路某</div>
                        </div>
                        <div class="item">
                            <div class="label">活动时间：</div>
                            <div class="value">2020/11/13 - 2020/11/25</div>
                        </div>
                        <div class="item">
                            <div class="label">报名时间：</div>
                            <div class="value">2020/11/13 - 2020/11/25</div>
                        </div>
                        <div class="item">
                            <div class="label">主办单位：</div>
                            <div class="value">叙州区文化馆、叙州区图书馆、叙州区文化馆、叙州区图书馆、叙州区文化馆、叙州区图书馆</div>
                        </div>
                        <div class="item">
                            <div class="label">报名人数：</div>
                            <div class="value">300人</div>
                        </div>
                    </div>
                    <Button type="warning" long @click="modalVisible = true">立即报名</Button>
                </div>
                <div class="right-md pull-right page-swiper">
                    <swiper ref="mySwiper" :options="swiperOption">
                        <swiper-slide>
                            <div class="item">
                                <img src="../../assets/temp/801.png" alt="">
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                             <div class="item">
                                <img src="../../assets/temp/801.png" alt="">
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                             <div class="item">
                                <img src="../../assets/temp/801.png" alt="">
                            </div>
                        </swiper-slide>
                        <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
                </div>
            </div>
            <div class="clearfix">
                <div class="page-content pull-left">
                    <div class="page-title">
                        活动介绍
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
                                <img src="../../assets/temp/map.png" alt="">
                            </p>
                        </div>
                    </div>
                    <share-bar></share-bar>
                    <widget-comment></widget-comment>
                </div>
                <div class="page-aside pull-right">
                    <widget-activity></widget-activity>
                    <widget-news></widget-news>
                </div>
            </div>
        </div>
        <Modal
            v-model="modalVisible"
            closable
            title="现在提交报名吗？">
            <p class="text-center">我们将根据你提交的信息进行审核，请及时查看报名信息。</p>
            <div slot="footer">
                <Button class="mr20" @click="modalVisible = false">取消</Button>
                <Button class="border-primary" @click="submit">确定</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: 'News',
        components: {},
        data() {
            return {
                modalVisible: false,
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
				}
            }
        },
        methods: {
            submit() {
                this.modalVisible = false
                setTimeout(()=>{
                    this.$Message.success('申请成功')
                },500)
            }
        },
        mounted() {
        }
    }
</script>
