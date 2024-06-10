var wms_layers = [];

var format_bus_stop_0 = new ol.format.GeoJSON();
var features_bus_stop_0 = format_bus_stop_0.readFeatures(json_bus_stop_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bus_stop_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bus_stop_0.addFeatures(features_bus_stop_0);
var lyr_bus_stop_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bus_stop_0, 
                style: style_bus_stop_0,
                popuplayertitle: "bus_stop",
                interactive: true,
                title: '<img src="styles/legend/bus_stop_0.png" /> bus_stop'
            });
var format_school_stop_1 = new ol.format.GeoJSON();
var features_school_stop_1 = format_school_stop_1.readFeatures(json_school_stop_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_school_stop_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_school_stop_1.addFeatures(features_school_stop_1);
var lyr_school_stop_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_school_stop_1, 
                style: style_school_stop_1,
                popuplayertitle: "school_stop",
                interactive: true,
                title: '<img src="styles/legend/school_stop_1.png" /> school_stop'
            });
var format_roadswgs1984_2 = new ol.format.GeoJSON();
var features_roadswgs1984_2 = format_roadswgs1984_2.readFeatures(json_roadswgs1984_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_roadswgs1984_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roadswgs1984_2.addFeatures(features_roadswgs1984_2);
var lyr_roadswgs1984_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_roadswgs1984_2, 
                style: style_roadswgs1984_2,
                popuplayertitle: "roadswgs1984",
                interactive: true,
                title: '<img src="styles/legend/roadswgs1984_2.png" /> roadswgs1984'
            });

        var lyr_openstreetmap_3 = new ol.layer.Tile({
            'title': 'open street map',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

lyr_bus_stop_0.setVisible(true);lyr_school_stop_1.setVisible(true);lyr_roadswgs1984_2.setVisible(true);lyr_openstreetmap_3.setVisible(true);
var layersList = [lyr_bus_stop_0,lyr_school_stop_1,lyr_roadswgs1984_2,lyr_openstreetmap_3];
lyr_bus_stop_0.set('fieldAliases', {'Bus_stop_n': 'Bus_stop_n', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_school_stop_1.set('fieldAliases', {'Name_of_Sc': 'Name_of_Sc', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_roadswgs1984_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'name': 'name', 'ref': 'ref', 'type': 'type', 'oneway': 'oneway', 'bridge': 'bridge', 'maxspeed': 'maxspeed', 'Shape_Leng': 'Shape_Leng', });
lyr_bus_stop_0.set('fieldImages', {'Bus_stop_n': '', 'Latitude': '', 'Longitude': '', });
lyr_school_stop_1.set('fieldImages', {'Name_of_Sc': '', 'Latitude': '', 'Longitude': '', });
lyr_roadswgs1984_2.set('fieldImages', {'OBJECTID': '', 'osm_id': '', 'name': '', 'ref': '', 'type': '', 'oneway': '', 'bridge': '', 'maxspeed': '', 'Shape_Leng': '', });
lyr_bus_stop_0.set('fieldLabels', {'Bus_stop_n': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', });
lyr_school_stop_1.set('fieldLabels', {'Name_of_Sc': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', });
lyr_roadswgs1984_2.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'osm_id': 'inline label - visible with data', 'name': 'inline label - visible with data', 'ref': 'inline label - visible with data', 'type': 'inline label - visible with data', 'oneway': 'inline label - visible with data', 'bridge': 'header label - visible with data', 'maxspeed': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', });
lyr_roadswgs1984_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});