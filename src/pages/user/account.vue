<template>
	<div>
        <div class="user-content page-content">
            <info></info>
            <password></password>
        </div>
	</div>
</template>

<script>
import '@/styles/coverViewui.less'
import '@/styles/base.less'
import '@/styles/icon.less'
    import info from './_components/info'
    import password from './_components/password'
	export default {
		name: 'Account',
		components: {
            info,
            password
        },
        
	}
</script>
