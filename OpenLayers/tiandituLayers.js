
// 自己的tk
// let TK = '2b7cbf61123cbe4e9ec6267a87e7442f';
let TK = '69b22d4fb7b657b65435014987e3007c';


let getUrl = function (type) {
    let url = 'http://t{randomNumber}.tianditu.gov.cn/DataServer?T={type}&x={x}&y={y}&l={z}';
    url = url.replace('{randomNumber}', Math.round(Math.random() * 7).toString());
    url = url.replace('{type}', type);
    url = url + "&tk=" + TK;
    return url;
}

let getResolutionsExpert = function (size) {

    let resolutions = new Array(18);
    let matrixIds = new Array(18);
    for (let z = 0; z < 19; ++z) {
        //分辨率
        resolutions[z] = size / Math.pow(2, z);
        //放大等级
        matrixIds[z] = z;
    }
    return resolutions;
}

let getOptional = function (url) {

    let projection = ol.proj.get('EPSG:4326');
    let projectionExtent = projection.getExtent();
    let size = ol.extent.getWidth(projectionExtent) / 256;

    return new ol.source.XYZ({
        crossOrigin: 'anonymous',
        wrapX: true,
        //切片xyz获取方法
        tileUrlFunction: function (tileCoord) {
            const z = tileCoord[0];
            const x = tileCoord[1];
            let y = tileCoord[2];
            let completeUrl = url.replace('{z}', z.toString())
                .replace('{y}', y.toString())
                .replace('{x}', x.toString());
            return completeUrl;
        },
        //坐标系
        projection: projection,
        tileGrid: new ol.tilegrid.TileGrid({
            origin: ol.extent.getTopLeft(projectionExtent),
            tileSize: [256, 256],
            //分辨率数组 天地图为 1.40625
            // resolutions: getResolutions(1.40625, 22)
            resolutions: getResolutionsExpert(size)
        }),
    })
}

// const type = 'w'; // 墨卡托
let TYPE = 'c';  // WGS84
//影像图
let IMG_C = 'img_' + TYPE;
let CIA_C = 'cia_' + TYPE;
let IBO_C = 'ibo_' + TYPE;

let VEC_C = 'vec_' + TYPE;
let CVA_C = 'cva_' + TYPE;
//影像图
// function getIMG_CLayer() {
//     let layer = new ol.layer.Tile({
//         name: "天地图影像图层",
//         source: getOptional(getUrl(IMG_C))
//     });
//     return layer;
// }
//
// function getVEC_CLayer(color) {
//     let layer = new ol.layer.Tile({
//         name: "天地图矢量图层",
//         source: getOptional(getUrl(VEC_C))
//     });
//
//
//     let layerColor = color ? new ol.layer.Image({
//         name: "天地图矢量图层",
//         source: getSource(layer, color)
//     }) : layer;
//     return layerColor;
// }
//
// function getCVA_CLayer(color) {
//     let layer = new ol.layer.Tile({
//         name: "天地图矢量注记层",
//         source: getOptional(getUrl(CVA_C))
//     });
//     let layerColor = color? new ol.layer.Image({
//         name: "天地图矢量注记层",
//         source: getSource(layer, color)
//     }) : layer;
//     return layerColor;
// }
//
// function getCIA_CLayer() {
//     let layer = new ol.layer.Tile({
//         name: "天地图影像注记图层",
//         source: getOptional(getUrl(CIA_C)),
//         zIndex: 1,
//     });
//     return layer;
// }
//
// function getIBO_CLayer() {
//     let layer = new ol.layer.Tile({
//         name: "天地图影像境界图层",
//         source: getOptional(getUrl(IBO_C)),
//         zIndex: 1,
//     });
//     return layer;
// }

