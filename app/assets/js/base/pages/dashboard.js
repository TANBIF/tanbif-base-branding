setQuery("*");
$(document).ready(function () {
    $.ajax({
        url: "https://records-ws.tanbif.ditnet.ac.tz/occurrences?jsoncallback=?",
        success: function (result) {
            $("#occurrence").html(result.totalRecords);
        },
    });
    $.ajax({
        url: "http://collections.tanbif.ditnet.ac.tz/ws/dataResource/count",
        success: function (result) {
            $("#datasets").html(result.total);
        },
    });
    $.ajax({
        url: "http://collections.tanbif.ditnet.ac.tz/ws/institution/count",
        crossDomain: !0,
        success: function (result) {
            $("#institutions").html(result.total);
        },
    });
    $.ajax({
        url: "http://collections.tanbif.ditnet.ac.tz/ws/collection/count",
        crossDomain: !0,
        success: function (result) {
            $("#collections").html(result.total);
        },
    });
    var siteSearch = $("#siteSearchInputHome");
    siteSearch.keyup(function () {
        var query = siteSearch.val().trim();
        if (query == "") query = "*";
        setQuery(query);
    });
});


var map;
var locationCentre = new google.maps.LatLng(-6.3, 35.0);

var wmsMapType = new google.maps.ImageMapType({
    getTileUrl: function (coord, zoom) {
        return "https://tile.openstreetmap.org/" +
            zoom + "/" + coord.x + "/" + coord.y + ".png";
    },
    tileSize: new google.maps.Size(256, 256),
    isPng: true,
    alt: "TanBIF species layer",
    name: "TanBIF",
    maxZoom: 19,
    attributes: "gos"
});


function initialize() {}



function setQuery(query) {
    $("#occurrenceSearch").attr("href", "occurrence-search.html?q=" + query);
    $("#speciesSearch").attr("href", "species-search.html?q=" + query);
    $("#datasetSearch").attr("href", "datasets-search.html?q=" + query);
    $("#publisherSearch").attr("href", "publishers-search.html?q=" + query);
    $("#resourceSearch").attr("href", "resources-search.html?q=" + query);
    $("#all").attr("href", "all.html?q=" + query);
    console.log(query);
}

var map = L.map("map_canvas").setView([-6.977324, 39.285585], 6);
map.scrollWheelZoom.disable();

L.tileLayer('https://tile.gbif.org/3857/omt/{z}/{x}/{y}@2x.png?style=gbif-classic&basisOfRecord=PRESERVED_SPECIMEN', {
    attribution: 'Generated a day ago © OpenStreetMap contributors, © <a href="">OpenMapTiles</a>, <a href="">TanBIF</a>',
    maxZoom: 22,
    renderer: L.canvas(),
}).addTo(map);

// L.marker([-6, 35]).addTo(map)
//         .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//         .openPopup();


$.ajax({
    url: "https://records-ws.tanbif.ditnet.ac.tz/occurrences?jsoncallback=?",
    success: function (result) {
        var page_size=result.totalRecords
        $.get('https://records-ws.tanbif.ditnet.ac.tz/occurrences/search?q=*:*&&pageSize=' + page_size, function (data, code, t) {

            data.occurrences.forEach(function (row, index) {
                if ("decimalLatitude" in row && "decimalLongitude" in row){
                    var scientificName = '';
                    if ("scientificName" in row) {
                        scientificName = row.scientificName;
                    } else {
                        scientificName = row.raw_scientificName;
                    }
                    var institute = '';
                    if ("institutionName" in row)
                        institute = row.institutionName + "( " + row.raw_institutionCode + " )";
                    else
                        institute = row.raw_institutionCode;
                    var text = `<div class="row" style="width: 500px">
                                <div class="col-sm-4">
                                <b>Scientific name: </b><br>
                                <b>Data provider:</b><br>
                                <b>Latitude & Longitude:</b>
                                </div>
                                <div class="col-sm-6">
                                `+scientificName+`<br>
                                `+institute+`<br>
                                `+row.decimalLatitude+` , `+row.decimalLongitude+`
                                </div>
                                </div>
`
                    circle = L.circle([row.decimalLatitude, row.decimalLongitude],{
                        color: '#e6704c',
                        fillColor:'#e6704c',
                        fillOpacity:0.8,
                        radius: 5,
                    }).addTo(map).bindPopup('<h3>Occurrence record</h3>'+text);
                }
            })
        })
    },
});