<template>
	
	<Row>
		<Col span="8">
			<Select 
				clearable
				@on-change="provinceChange"
				placeholder="省" 
				v-model="currentValue[0]" 
				class="pr10">
				<Option 
					v-for="item in provinceList" 
					:value="item.value" 
					:key="item.value">
					{{ item.label }}
				</Option>
			</Select>
		</Col>
		<Col span="8">
			<Select 
				clearable
				@on-change="cityChange"
				v-model="currentValue[1]" 
				class="pl5 pr10">
				<Option v-for="item in cityList" :value="item.value" :key="item.value">
					{{ item.label }}
				</Option>
			</Select>
		</Col>
		<Col span="8">
			<Select
				@on-change="districtChange"
				v-model="currentValue[2]" 
				class="pl5">
				<Option v-for="item in districtList" :value="item.value" :key="item.value">
					{{ item.label }}
				</Option>
			</Select>
		</Col>
	</Row>
</template>

<script>
	import areas from './area.js'
	export default {
		components: {},
		props: {
			value: {
				type: Array,
				default: [ null , null, null ]
			}
		},
		data() {
			return {
				provinceList: [],
				cityList: [],
				districtList: [],
				province: '',
				city: '',
				district: '',
				currentValue: []
			}
		},
		methods: {
			// 省份修改
			provinceChange(value) {
				this.getCityList(value)
				this.currentValue = [value, null, null]
			},
			// 城市修改
			cityChange(value) {
				this.getDistrictList(value)
				this.currentValue.splice( 1 , 1 , value)
				this.currentValue.splice( 2 , 1 , null)

			},
			// 区域修改
			districtChange(value) {
				this.currentValue.splice( 2 , 1 , value)
			},
			// 获取城市列表
			getCityList(value) {
				this.cityList = []
				if (value) {
					for (const key in areas.city_list) {
						if( Number(key) > Number(value) && Number(key) < Number(value) + 9999 ){
							this.cityList.push({
								value: key,
								label: areas.city_list[key]
							})
						}
					}
				}
			},
			// 获取区域
			getDistrictList(value) {
				this.districtList = []
				if (value) {
					for (const key in areas.county_list) {
						if( Number(key) > Number(value) && Number(key) < Number(value) + 99 ){
							this.districtList.push({
								value: key,
								label: areas.county_list[key]
							})
						}
					}
				}
			},
			setValue() {
				this.currentValue[0] && this.getCityList(this.currentValue[0])
				this.currentValue[1] && this.getDistrictList(this.currentValue[1])
			}
		},
		watch: {
			value(val) {
				this.currentValue = val
				this.setValue()
			}
		},
		created() {
			this.currentValue = this.value.map(i=>{
				return i
			})
			console.log(this.currentValue === this.value)
			this.setValue()
		},
		mounted() {
			// 省份转数组
			for (const key in areas.province_list) {
				this.provinceList.push({
					value: key,
					label: areas.province_list[key]
				})
			}
		}
	};
</script>
