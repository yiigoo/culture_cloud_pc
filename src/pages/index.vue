<template>
    <div>
        <banner></banner>
        <div class="page-conainter">
            <div class="home-md">

                <div class="clearfix home-row">
                    <news></news>
                    <guide></guide>
                </div>

                <div class="home-row">
                    <activity></activity>
                </div>

                <div class="home-row">
                    <works></works>
                </div>

                <div class="home-row">
                    <service></service>
                </div>

                <div class="home-row">
                    <team></team>
                </div>

                <div class="home-row">
                    <brand></brand>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import banner from './_components/index/banner'
    import news from './_components/index/news'
    import guide from './_components/index/guide'
    import activity from './_components/index/activity'
    import works from './_components/index/works'
    import service from './_components/index/service'
    import team from './_components/index/team'
    import brand from './_components/index/brand'
    export default {
        components: {
            banner,
            news,
            guide,
            activity,
            works,
            service,
            team,
            brand
        }
    }
</script>
