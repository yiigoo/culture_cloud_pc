<template>
	<div class="qrcode">
		<qrcode :value="qrcodeUrl" :options="{ width: 220 , margin : 0 }" tag="img"></qrcode>
		<div class="tips mt10">
			手机扫码二维码
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import VueQrcode from '@chenfengyuan/vue-qrcode'
	Vue.component(VueQrcode.name, VueQrcode)
	export default {
		data(){
			return {
				qrcodeUrl: 'temp'
			}
		},
		mounted() {
			// 生产二维码链接
			this.qrcodeUrl = 'www.baidu.com'
		}
	};
</script>
