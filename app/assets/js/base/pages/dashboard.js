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
var map = L.map("map").setView([-6.877324, 39.285585], 6);
map.scrollWheelZoom.disable();
L.tileLayer("https://tile.gbif.org/3857/omt/{z}/{x}/{y}@2x.png?style=gbif-classic&basisOfRecord=PRESERVED_SPECIMEN", { maxZoom: 22, renderer: L.canvas() }).addTo(map);
L.tileLayer("https://api.gbif.org/v2/map/occurrence/density/{z}/{x}/{y}@1x.png?style=purpleYellow.point", {
    attribution: 'Generated a day ago © OpenStreetMap contributors, © <a href="">OpenMapTiles</a>, <a href="">GBIF</a> TanBif.',
    maxZoom: 22,
    renderer: L.canvas(),
}).addTo(map);

function setQuery(query) {
    $("#occurrenceSearch").attr("href", "occurrence-search.html?q=" + query);
    $("#speciesSearch").attr("href", "species-search.html?q=" + query);
    $("#datasetSearch").attr("href", "datasets-search.html?q=" + query);
    $("#publisherSearch").attr("href", "publishers-search.html?q=" + query);
    $("#resourceSearch").attr("href", "resources-search.html?q=" + query);
    $("#all").attr("href", "all.html?q=" + query);
    console.log(query);
}
