<template>
	<div>
        <!-- banner -->
        <page-banner :url="require('../../assets/banner/banner-volunteer.png')"></page-banner>
        <div class="page-container">

            <div class="breadcrumb">
                <router-link to="/">首页</router-link>
                <i class="icon icon-arrow-right"></i>
                <router-link to="">一级目录</router-link>
                <i class="icon icon-arrow-right"></i>
                <span>二级目录</span>
            </div>
            
            <div class="clearfix">
                <div class="page-aside">
                    <div class="page-menu">
                        <div class="title">
                            志愿者
                        </div>
                        <div class="list">
                            <ul>
                                <li><router-link to="/volunteer/list">活动招募</router-link></li>
                                <li><router-link to="/volunteer/star">志愿之星</router-link></li>
                                <li><router-link to="/volunteer/team">明星团队</router-link></li>
                                <li><router-link to="/volunteer/mien">志愿者风采</router-link></li>
                                <li><router-link to="/volunteer/training">培训驿站</router-link></li>
                            </ul>
                        </div>
                    </div>
                    <widget-activity class="mt20"></widget-activity>
                </div>
                <div class="page-content">
                    <div class="page-detail">
                        <div class="detail-wrapper">
                            <div class="title">
                                团队详情团队详情团队详情团队详情团队详情团队详情团队详情团队详情团队详情
                            </div>
                            <div class="sub">
                                时间：2020-10-20 来源：叙州文化馆 阅读：201
                            </div>
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
                    </div>
                    <share-bar></share-bar>
                    
                    <widget-comment class="mt20" :params="commentParams">
                    </widget-comment>
                </div>
            </div>
        </div>
	</div>
</template>

<script>
	export default {
		name: 'Dir',
		components: {
        },
        data() {
            return {
                commentParams: {}
            }
        }
	}
</script>
