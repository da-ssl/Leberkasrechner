var Map,
    cm,
    ll = new L.LatLng(48.045784, 11.965914),
    ll2 = new L.LatLng(48.045784, 11.965914);

    function showCoordinates (e) {
        alert(e.latlng);
    }

    function centerMap (e) {
        Map.panTo(e.latlng);
    }

    function zoomIn (e) {
        Map.zoomIn();
    }

    function zoomOut (e) {
        Map.zoomOut();
    }

Map = L.map('meineKarte', {
    center: ll,
    zoom: 15,
    contextmenu: true,
    contextmenuWidth: 180,
    contextmenuItems: [{
        text: 'Koordinaten anzeigen',
        callback: showCoordinates
    }, {
        text: 'Karte hier zentrieren',
        callback: centerMap
    }, '-', {
        text: 'Hereinzoomen',
        icon: 'ext/images/zoom-in.png',
        callback: zoomIn
    }, {
        text: 'Herauszoomen',
        icon: 'ext/images/zoom-out.png',
        callback: zoomOut
}]
});

        //Layers mit Tileserver und Copyright-Anzeige verbinden     
        var OpenStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 19, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>-Mitwirkende'}).addTo(Map);
        var OpenRailwayMap = L.tileLayer('https://{s}.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png', {	maxZoom: 19, attribution: 'Kartendaten: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>-Mitwirkende | Kartenstil: &copy; <a href="https://www.OpenRailwayMap.org">OpenRailwayMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'});
        var OpenStreetMap_DE = L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {maxZoom: 18, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>-Mitwirkende'});
        var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {maxZoom: 17, attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'});
        var OPNVKarte = L.tileLayer('https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png', {maxZoom: 18, attribution: 'Karte <a href="https://memomaps.de/">memomaps.de</a> <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Kartendaten &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>-Mitwirkende'});

        //==============MARKIERER================

        //Metzgerei Heimann
        var Heimann = L.marker([48.04538, 11.963264]);
        Heimann.bindPopup("<b>Metzgerei Heimann</b><br>Do gibts sowohl an Leber-, ois a an Kaskas!").openPopup();

        //Metzgerei Maisch
        var gruenesIcon = new L.Icon({iconUrl: '../ext/images/marker-icon-2x-green.png', shadowUrl: '../ext/images/shadow.png', iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41] });
        var Maisch = L.marker([48.04408, 11.966831], {icon: gruenesIcon});
        Maisch.bindPopup("<b>Metzgerei Maisch</b><br>Leberkas vom Metzger Maisch gibts aus Grafing!");
	
        //Metzgerei Kammerloher
        var gelbesIcon = new L.Icon({iconUrl: '../ext/images/marker-icon-gold.png', shadowUrl: '../ext/images/shadow.png', iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41] });
        var Kammerloher = L.marker([48.046904, 11.967248], {icon: gelbesIcon});
        Kammerloher.bindPopup("<b>Metzgerei Kammerloher</b><br>Fleisch & Wurscht vom Feinsten!");

        //Metzgerei Saißrainer
        var lilaIcon = new L.Icon({iconUrl: '../ext/images/marker-icon-violet.png', shadowUrl: '../ext/images/shadow.png', iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41] });
        var Saissrainer = L.marker([48.045342, 11.966539], {icon: lilaIcon});
        Saissrainer.bindPopup("<b>Metzgerei Saißrainer</b><br>Do gibts wos gscheids fürn Hunger");

        //Hier wird eine Gruppe von Metzgereien erstellt, damit diese in den Layer-Einstellungen deaktiviert werden kann
        var Metzgereien = L.layerGroup([Heimann, Maisch, Kammerloher, Saissrainer]).addTo(Map);

        //Layer definieren
        var baseMaps = {
            "OpenStreetMap": OpenStreetMap,
            "OpenTopoMap": OpenTopoMap,
            "OpenStreetMap DE": OpenStreetMap_DE,
            "ÖPNVKarte": OPNVKarte,
        };

        var overlayMaps = {
            "OpenRailwayMap": OpenRailwayMap,
            "Metzgereien": Metzgereien,
        };

        L.control.layers(baseMaps, overlayMaps, Metzgereien).addTo(Map);

        //Suche in Leaflet
        Map.addControl( new L.Control.Search({
            url: 'https://nominatim.openstreetmap.org/search?format=json&q={s}',
            jsonpParam: 'json_callback',
            propertyName: 'display_name',
            propertyLoc: ['lat','lon'],
            marker: L.marker([0,0],{icon: gruenesIcon}),
            autoCollapse: true,
            autoType: false,
            minLength: 2
        }) );

        //Fullscreen
        Map.addControl(new L.Control.Fullscreen());

        

