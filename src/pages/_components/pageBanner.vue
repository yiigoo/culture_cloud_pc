<template>
	<div class="page-banner">
        <div class="static" 
            :style="`background-image:url(${url})`">
        </div>
    </div>
</template>

<script>
	export default {
        name: 'pageBanner',
        props: {
            url: {
                type: String,
                default() {
                    return ''
                }
            }
        },
        mounted() {
        }
	}
</script>
