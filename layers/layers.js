var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});

        var lyr_tristautak_0 = new ol.layer.Tile({
            'title': 'tristautak_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                url: 'http://tmap.elte.hu/tiles3/2/{z}/{x}/{y}.png'
            })
        });var format_tvonal_1 = new ol.format.GeoJSON();
var features_tvonal_1 = format_tvonal_1.readFeatures(json_tvonal_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tvonal_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_tvonal_1.addFeatures(features_tvonal_1);var lyr_tvonal_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tvonal_1, 
                style: style_tvonal_1,
                title: '<img src="styles/legend/tvonal_1.png" /> útvonal'
            });var format_fotkhtrkp_2 = new ol.format.GeoJSON();
var features_fotkhtrkp_2 = format_fotkhtrkp_2.readFeatures(json_fotkhtrkp_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fotkhtrkp_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_fotkhtrkp_2.addFeatures(features_fotkhtrkp_2);var lyr_fotkhtrkp_2 = new ol.layer.Heatmap({
                declutter: true,
                source:jsonSource_fotkhtrkp_2, 
                radius: 10 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
                title: 'fotók hőtérkép'
            });var format_fotk_3 = new ol.format.GeoJSON();
var features_fotk_3 = format_fotk_3.readFeatures(json_fotk_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fotk_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_fotk_3.addFeatures(features_fotk_3);var lyr_fotk_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fotk_3, 
                style: style_fotk_3,
                title: '<img src="styles/legend/fotk_3.png" /> fotók'
            });

lyr_tristautak_0.setVisible(true);lyr_tvonal_1.setVisible(true);lyr_fotkhtrkp_2.setVisible(true);lyr_fotk_3.setVisible(true);
var layersList = [baseLayer,lyr_tristautak_0,lyr_tvonal_1,lyr_fotkhtrkp_2,lyr_fotk_3];
lyr_tvonal_1.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_fotk_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_tvonal_1.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', });
lyr_fotk_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_tvonal_1.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_fotk_3.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_fotk_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});