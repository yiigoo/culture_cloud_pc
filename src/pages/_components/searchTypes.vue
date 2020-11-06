<template>
	<div class="item">
		<div class="label">
			<slot></slot>
		</div>
		<div class="value">
			<a 
				@click="onChange(item.value)"
				:class="{ active: currentActive === item.value }"
				v-for="(item,index) in types" :key="index">
				{{ item.label }}
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			types: {
				type: Array,
				default: []
			}
		},
		data() {
			return {
				currentActive: ''
			}
		},
		methods: {
			setDefault() {
				if( this.types.length) {
					this.currentActive = this.types[0].value
				}
			},
			onChange(value) {
				if( this.currentActive !== value ){
					this.currentActive = value
					this.$emit('on-change', this.currentActive)
				}
			}
		},
		watch: {
			types(types) {
				this.setDefault()
			}
		},
		created() {
			this.setDefault()
		}
	}
</script>
