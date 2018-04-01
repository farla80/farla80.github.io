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

        var lyr_josm_0 = new ol.layer.Tile({
            'title': 'josm_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                url: 'http://tmap.elte.hu/tiles3/2/{z}/{x}/{y}.png'
            })
        });var format_outalltracks_1 = new ol.format.GeoJSON();
var features_outalltracks_1 = format_outalltracks_1.readFeatures(json_outalltracks_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_outalltracks_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_outalltracks_1.addFeatures(features_outalltracks_1);var lyr_outalltracks_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_outalltracks_1, 
                style: style_outalltracks_1,
                title: '<img src="styles/legend/outalltracks_1.png" /> outall tracks'
            });var format_outalltrack_points_2 = new ol.format.GeoJSON();
var features_outalltrack_points_2 = format_outalltrack_points_2.readFeatures(json_outalltrack_points_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_outalltrack_points_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_outalltrack_points_2.addFeatures(features_outalltrack_points_2);var lyr_outalltrack_points_2 = new ol.layer.Heatmap({
                declutter: true,
                source:jsonSource_outalltrack_points_2, 
                radius: 10 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
                title: 'outall track_points'
            });

lyr_josm_0.setVisible(true);lyr_outalltracks_1.setVisible(true);lyr_outalltrack_points_2.setVisible(true);
var layersList = [baseLayer,lyr_josm_0,lyr_outalltracks_1,lyr_outalltrack_points_2];
lyr_outalltracks_1.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_outalltracks_1.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', });
lyr_outalltracks_1.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_outalltracks_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});