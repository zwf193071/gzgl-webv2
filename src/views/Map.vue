<template>
    <div id="mapDiv">

    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import esriLoader from 'esri-loader'

const options = {
    url: 'http://localhost:8080/arcgis_js_api/library/4.7/init.js'
}
esriLoader.loadModules ([
	"esri/Map",
	'esri/views/MapView',
], options)
.then (([
			Map,
			MapView
		]) => {
	const map = new Map ({
		basemap: "streets"
	})
	const mapview = new MapView ({
		container: "viewDiv",
		map: map,
		zoom: 12,
		center: [ 102.7346125, 25.0563901 ]
	})
}, reason => {
	console.log (reason);
})

@Component
export default class Map extends Vue {
    
}
</script>
<style lang="less" scoped>
#mapDiv {
	width: 100%;
	height: 100%;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
}
</style>