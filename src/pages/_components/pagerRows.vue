<template>
    <div>
        <div class="page-list-loading">
            <slot :rows="rows"></slot>
            <Spin size="large" fix v-if="loading"></Spin>
        </div>
        <div class="page-pager">
            <Page 
                @on-change="pageChange"
                :current="pageNum" 
                :total="total" 
                :pageSize="pageSize" 
                :disabled ="loading">
            </Page>
        </div>
    </div>
</template>

<script>
	export default {
        name: 'PagerRows',
        props: {
            request: {
                type: String,
                default() {
                    return ''
                }
            },
            pageSize: {
                type: Number,
                default() {
                    return 5
                }
            },
            params: {
                type: Object,
                default() {
                    return {}
                }
            },
        },
        data() {
            return {
                pageNum: 1,
                total: 10,
                loading: false,
                rows: []
            }
        },
        methods: {
            getRows() {
                this.loading = true
                this.$http.get( this.request ,
                    {
                        params: {
                            pageSize: this.pageSize,
                            pageNum: this.pageNum,
                            ...this.params
                        }
                    }
                )
                .then(res=>{
                    this.total = res.total 
                    this.rows = res.rows
                    this.loading = false
                })
            },
            pageChange(current) {
                this.pageNum = current
                this.getRows()
            },
            reload() {
                this.pageNum = 1
                this.getRows()
            }
        },
        mounted() {
            if( !this.request ){
                console.error(' pager-list 输入 api ')
            }else{
                this.getRows()
            }
        }
	}
</script>
