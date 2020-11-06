<template>
	<div>
        <page-banner :url="require('../../assets/banner/login.png')"></page-banner>
		<div class="page-container page-container-inner">
            <div class="login-md">
                <div class="left">
                    <div class="tabs">
                        <a @click="type = 'password'" :class="{ active: type === 'password'}">密码登录</a>
                        <a @click="type = 'mobile'" :class="{ active: type === 'mobile'}">手机登录</a>
                        <a @click="type = 'qrcode'" :class="{ active: type === 'qrcode'}">二维码登录</a>
                    </div>
					<div class="login-types">
						<password v-if="type === 'password'"></password>
                        <mobile v-if="type === 'mobile'"></mobile>
                        <qrcode v-if="type === 'qrcode'"></qrcode>
                        <div class="tips text-right" v-show="type !== 'qrcode'">
                            <router-link to="/register">还没有注册，立即注册 ></router-link>
                        </div>
					</div>
                </div>
                <div class="right">
                    <div class="text">欢迎来到叙州<br />文化馆</div>
                    <img src="../../assets/img-login.png" alt="">
                </div>
            </div>
        </div>
	</div>
</template>

<script>
    import password from './_components/login/password'
    import mobile from './_components/login/mobile'
    import qrcode from './_components/login/qrcode'
	export default {
		name: 'Login',
		components: {
            password,
            mobile,
            qrcode
        },
        data() {
            return  {
                type: 'password'
            }
        },
		mounted() {
		}
	}
</script>
