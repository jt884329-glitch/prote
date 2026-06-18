
const map = L.map("map").setView(
    [19.4678, -99.5944],
    15
);

L.tileLayer(
    "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        maxZoom:19,
        attribution:"© OpenStreetMap"
    }
).addTo(map);

const negocios = [

    {
        nombre:"Papelería Lupita",
        descripcion:"Copias e impresiones",
        lat:19.4680,
        lng:-99.5930
    },

    {
        nombre:"Tienda Don Juan",
        descripcion:"Abarrotes",
        lat:19.4690,
        lng:-99.5960
    }

];

negocios.forEach(negocio => {

    L.marker([
        negocio.lat,
        negocio.lng
    ])
    .addTo(map)
    .bindPopup(`
        <h3>${negocio.nombre}</h3>
        <p>${negocio.descripcion}</p>
    `);

});const map = L.map("map").setView(
    [19.4678, -99.5944],
    15
);

L.tileLayer(
    "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        maxZoom:19,
        attribution:"© OpenStreetMap"
    }
).addTo(map);

const negocios = [

    {
        nombre:"Papelería Lupita",
        descripcion:"Copias e impresiones",
        lat:19.4680,
        lng:-99.5930
    },

    {
        nombre:"Tienda Don Juan",
        descripcion:"Abarrotes",
        lat:19.4690,
        lng:-99.5960
    }

];

negocios.forEach(negocio => {

    L.marker([
        negocio.lat,
        negocio.lng
    ])
    .addTo(map)
    .bindPopup(`
        <h3>${negocio.nombre}</h3>
        <p>${negocio.descripcion}</p>
    `);

});