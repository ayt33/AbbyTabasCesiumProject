async function start(){
    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzOWFlNzMyYS03ZDI1LTRkM2QtODVmMS05YmVjMWEwMzAyZmIiLCJpZCI6MTgwNjU3LCJpYXQiOjE3MDA5MjgwMTV9.Gcsr4MWlXAC3UTqou9u_MEEYDjtAjhaC5nOkHRFq9Rg';                

    const viewer = new Cesium.Viewer("cesiumContainer", {
      shouldAnimate: true,
      terrain: Cesium.Terrain.fromWorldTerrain(),
      baseLayer: Cesium.ImageryLayer.fromWorldImagery({
      style: Cesium.IonWorldImageryStyle.AERIAL_WITH_LABELS,
    }),
    baseLayerPicker: false,
    });

    const layers = viewer.scene.imageryLayers;
    const osmBuildingsTileset = await Cesium.createOsmBuildingsAsync();
    viewer.scene.primitives.add(osmBuildingsTileset);

    try {
    const resource = await Cesium.IonResource.fromAssetId(2366593);
    const dataSource = await Cesium.KmlDataSource.load(resource, {
        camera: viewer.scene.camera,
        canvas: viewer.scene.canvas,
    });
    await viewer.dataSources.add(dataSource);
    await  viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(-102.306983, 39.422619, 7000000),
        orientation: {
        heading: Cesium.Math.toRadians(0.0),
        pitch: Cesium.Math.toRadians(-100.0)
        }
    });
    } catch (error) {
    console.log(error);
    }
}

start();
    