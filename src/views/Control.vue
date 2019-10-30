<template>
    <div class="wrap">
        <div id="viewDiv"></div> 
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import * as esriLoader from 'esri-loader'  

@Component
export default class Map extends Vue {
	mounted() {
		const options = {
			url: 'https://js.arcgis.com/3.24/'
		}
		esriLoader.loadModules([
			'esri/map',
			'dojo/domReady!'
		], options).then(([Map]) => {
			let map = new Map('viewDiv', {
				basemap: 'topo',
				center: [113.3209952545166, 23.090055306224895],
				zoom: 15
			})
		}).catch (err => {})
	}
}
</script>
<style scoped>
@import url('https://js.arcgis.com/3.24/esri/css/esri.css');
.wrap {
	width: 100%;
	height: 100%;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
}
</style>