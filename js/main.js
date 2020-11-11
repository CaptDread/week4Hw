

let icuCunt = document.querySelector('.map')


let waypoint = new Waypoint({
    element: document.getElementById('basic-waypoint'),
    handler: function(down) {
        console.log('first waypoint triggered')
        icuCunt.setAttribute('id', 'mapid')
        var mymap = L.map('mapid').setView([51.505, -0.09], 13);
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1IjoiY2FwdGRyZWFkIiwiYSI6ImNraGJqb2ZrcTAwZHgycXFteHdiN3lvMm8ifQ.3oSI5Tn6ktZqx6f1Fo0GGA'
        }).addTo(mymap);
        gsap.to('.dreadlogo', { 
            duration: 2.5,
            ease: "back.inOut(1)",
            y: 200,
            x: -210.7,
            scale: .3,
        });
    }
})

  