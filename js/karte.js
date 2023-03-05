var Map,
    butchers,
    cm,
    ll = new L.LatLng(48.045784, 11.965914),
    ll2 = new L.LatLng(48.045784, 11.965914);




class leberkasMap extends L.map {
    constructor (htmlId) {
        super(htmlId, {center: ll, 
            zoom: 13, 
            contextmenu: true,
            contextmenuWith: 180,
            /*contestmenuItems: [
                {
                    text: 'Koordinaten anzeigen',
                    callback: this.showCoordinates
                }, {
                    text: 'Karte hier zentrieren',
                    callback: this.centerMap
                }, '-', {
                    text: 'Hereinzoomen',
                    icon: 'ext/images/zoom-in.png',
                    callback: this.zoomIn
                }, {
                    text: 'Herauszoomen',
                    icon: 'ext/images/zoom-out.png',
                    callback: this.zoomOut
                }
            ]*/
        })

        var OpenStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 19, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>-Mitwirkende'}).addTo(this);
        var OpenStreetMap_DE = L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {maxZoom: 18, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>-Mitwirkende'});

        var markers = L.markerClusterGroup();

        for(var i = 0; i < butchers.length; i++) {
            var b = butchers[i];
            try {
                var btitle = b["tags"]["name"];
                var marker = L.marker(new L.LatLng(b["lat"], b["lon"]), {title: btitle});}
            catch(error) {} 
            marker.bindPopup(btitle)
            markers.addLayer(marker);
        }

        this.baseMaps = {
            "OpenStreetMap": OpenStreetMap,
            "OpenStreetMap DE": OpenStreetMap_DE,
        };
        
        this.overlayMaps = {
            "Metzgereien": markers 
        };
        
        L.control.layers(this.baseMaps, this.overlayMaps).addTo(this);

        //Suche in Leaflet
        this.addControl( new L.Control.Search({
            url: 'https://nominatim.openstreetmap.org/search?format=json&q={s}',
            jsonpParam: 'json_callback',
            propertyName: 'display_name',
            propertyLoc: ['lat','lon'],
            marker: L.marker([0,0]),
            autoCollapse: true,
            autoType: false,
            minLength: 2
        }) );

        //Fullscreen
        this.addControl(new L.Control.Fullscreen());


    }

    showCoordinates (e) {
        alert(e.latlng);
    }
    
    centerMap (e) {
        this.panTo(e.latlng);
    }
    
    zoomIn (e) {
        this.zoomIn();
    }
    
    zoomOut (e) {
        this.zoomOut();
    }

}

fetch('https://leberkasrechner.de/js/butchers.json')
    .then(response => response.json())
    .then(jsonData => {
        butchers = jsonData;
        lmap = new leberkasMap('meineKarte')
    })
    .catch(error => console.error(error));