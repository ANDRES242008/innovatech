(function () {
  document.addEventListener('DOMContentLoaded', () => {
    // ==========================
    // Utilidades
    // ==========================
     const debounce = (fn, wait = 120) => {
      let t;
      return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), wait); };
    };

   const safeParseJSON = (s, fallback) => {
  if (s === null || s === undefined) return fallback;
  try {
    return JSON.parse(s);
  } catch (e) {
    return fallback;
  }
};

    const normalizeText = (t) => (t || '').toLowerCase().trim();








      // ==========================
    // PRODUCTOS (actualiza con tus productos reales)
    // ==========================
    window.products = window.products || [
      { id: 35, name: "Lenovo Yoga Tab Plus", priceDescuento: "$699.00", image: "../img/tabletas/LENOVO Yoga Tab .jpeg", url: "productabletas.html?id=35" },
  { id: 36, name: "Samsung Galaxy Tab S10 FE+", priceDescuento: "$579.50", image: "../img/tabletas/Samsung Galaxy Tab S10 Fe+ .jpeg", url: "productabletas.html?id=36" },
  { id: 37, name: "Xiaomi Pad 7 Pro", priceDescuento: "$639.50", image: "../img/tabletas/xiami pad 7.jpeg", url: "productabletas.html?id=37" },
  { id: 38, name: "Google Pixel Tablet", priceDescuento: "$529.00", image: "../img/tabletas/google pixle.jpeg", url: "productabletas.html?id=38" },
  { id: 39, name: "Huawei MatePad 11.5", priceDescuento: "$479.50", image: "../img/tabletas/huawei.jpeg", url: "productabletas.html?id=39" },
  { id: 40, name: "iPad (2025)", priceDescuento: "$549.00", image: "../img/tabletas/Apple iPad 11-inch.jpeg", url: "productabletas.html?id=40" },
  { id: 41, name: "Lenovo Tab M11", priceDescuento: "$479.00", image: "../img/tabletas/Lenovo Tab M11.jpeg", url: "productabletas.html?id=41" },
  { id: 42, name: "Samsung Galaxy Tab A9", priceDescuento: "$469.00", image: "../img/tabletas/A9 TABLE.jpeg", url: "productabletas.html?id=42" },
  { id: 43, name: "Amazon Fire HD 10", priceDescuento: "$459.00", image: "../img/tabletas/amanzo 10HD.jpeg", url: "productabletas.html?id=43" },
  { id: 44, name: "Amazon Fire 7", priceDescuento: "$449.00", image: "../img/tabletas/Amazon Fire 7 .jpeg", url: "productabletas.html?id=44" },
  { id: 45, name: "Apple iPad mini (2024)", priceDescuento: "$579.00", image: "../img/tabletas/Apple iPad mini.jpeg", url: "productabletas.html?id=45" },

  { id: 16, name: "Nothing Phone 1", priceDescuento: "$690.00", image: "../img/celulares/Nothing Phone (1).jpeg", url: "productcelulares.html?id=16" },
  { id: 17, name: "Galaxy S24 ultra", priceDescuento: "$1000.00", image: "../img/exclusivo/24blanco.jpeg", url: "productexclusivo.html?id=17" },
  { id: 18, name: "Galaxy A55 5G", priceDescuento: "$450.99", image: "../img/celulares/galaxy a 55 blanco.jpeg", url: "productcelulares.html?id=18" },
  { id: 19, name: "Iphone 16e", priceDescuento: "$800.50", image: "../img/celulares/Apple's iPhone 16e Is Here_ Features, Price, Colors, & More.jpeg", url: "productcelulares.html?id=19" },
  { id: 20, name: "Samsung Galaxy A36 5G", priceDescuento: "$549.00", image: "../img/celulares/Samsung Galaxy A36 5g 128 Gb _ 6 Gb - Awesome White Neu & Eu.jpeg", url: "productcelulares.html?id=20" },
  { id: 21, name: "Iphone 11 pro max", priceDescuento: "$404.50", image: "../img/celulares/descarga.jpeg", url: "productcelulares.html?id=21" },
  { id: 22, name: "Iphone 12 pro max", priceDescuento: "$590.50", image: "../img/celulares/iPhone 13 Pro Max.jpeg", url: "productcelulares.html?id=22" },
  { id: 23, name: "Iphone 14 pro max", priceDescuento: "$850.00", image: "../img/celulares/iphone.jpeg", url: "productcelulares.html?id=23" },
  { id: 24, name: "Oppo A60", priceDescuento: "$180.50", image: "../img/celulares/oppo a60 blanco.jpeg", url: "productcelulares.html?id=24" },
  { id: 25, name: "Oneplus 12", priceDescuento: "$500.00", image: "../img/celulares/OnePlus 12 - Glacial White.jpeg", url: "productcelulares.html?id=25" },
  { id: 26, name: "Samsung Galaxy Z flip 7 FE", priceDescuento: "$1100.50", image: "../img/celulares/Dimensiones filtradas del Galaxy Z Fold 7 y Galaxy Z Flip 7 prometen nuevos récords.jpeg", url: "productcelulares.html?id=26" },
  { id: 27, name: "VIVO X100 PRO", priceDescuento: "$850.50", image: "../img/celulares/VIVO X100 PRO blanco.jpeg", url: "productcelulares.html?id=27" },
  { id: 28, name: "OPPO find X8", priceDescuento: "$800.00", image: "../img/celulares/OPPO Find X8 Pro blanco.jpeg", url: "productcelulares.html?id=28" },
  { id: 29, name: "Samsung Galaxy A26 5G", priceDescuento: "$350.00", image: "../img/celulares/Samsung Galaxy A26 5G Smartphone Exynos 1380, écran Super AMOLED FHD+ de 6,7_, 120 Hz, 50MP,.jpeg", url: "productcelulares.html?id=29" },
  { id: 30, name: "Oneplus 13", priceDescuento: "$600.00", image: "../img/celulares/OnePlus 13 5G up for Pre-order on Amazon UK.jpeg", url: "productcelulares.html?id=30" },

  { id: 46, name: "Sagencom D27", image: "../img/telefonos fijos/fijo 3.jpeg", priceDescuento: "$30.00", url: "productfijo.html?id=46" },
  { id: 47, name: "Panasonic 40s", image: "../img/telefonos fijos/fijo 4.jpeg", priceDescuento: "$34.00", url: "productfijo.html?id=47" },
  { id: 48, name: "philips 20t", image: "../img/telefonos fijos/fijo1.jpeg", priceDescuento: "$40.00", url: "productfijo.html?id=48" },
  { id: 49, name: "Gigaset 10gen", image: "../img/telefonos fijos/fijo10.jpeg", priceDescuento: "$39.00", url: "productfijo.html?id=49" },
  { id: 50, name: "gigaset 5gen", image: "../img/telefonos fijos/fijo11.jpeg", priceDescuento: "$33.00", url: "productfijo.html?id=50" },
  { id: 51, name: "Vtech 12l", image: "../img/telefonos fijos/fijo12.jpeg", priceDescuento: "$15.00", url: "productfijo.html?id=51" },
  { id: 52, name: "Vtech 10l", image: "../img/telefonos fijos/fijo13.jpeg", priceDescuento: "$35.00", url: "productfijo.html?id=52" },
  { id: 53, name: "Panasonic 20s", image: "../img/telefonos fijos/fijo14.jpeg", priceDescuento: "$50.00", url: "productfijo.html?id=53" },
  { id: 54, name: "Gigaset 7gen", image: "../img/telefonos fijos/fijo2.jpeg", priceDescuento: "$25.00", url: "productfijo.html?id=54" },
  { id: 55, name: "panasonic 10s", image: "../img/telefonos fijos/fijo5.jpeg", priceDescuento: "$15.00", url: "productfijo.html?id=55" },
  { id: 56, name: "Avaya 5progen", image: "../img/telefonos fijos/Avaya 1416 digital phone 1416 telephone IP Office.jpg", priceDescuento: "$24.00", url: "productfijo.html?id=56" },
  { id: 57, name: "Gigaset 8gen", image: "../img/telefonos fijos/fijo7.jpeg", priceDescuento: "$40.00", url: "productfijo.html?id=57" },
  { id: 58, name: "Gigaset 4gen", image: "../img/telefonos fijos/fijo8.jpeg", priceDescuento: "$36.00", url: "productfijo.html?id=58" },
  { id: 59, name: "Gigaset pro 12gen", image: "../img/telefonos fijos/fijo9.jpeg", priceDescuento: "$20.00", url: "productfijo.html?id=59" },
  { id: 60, name: "gigaset note 19gen", image: "../img/telefonos fijos/descarga.jpg", priceDescuento: "$17.00", url: "productfijo.html?id=60" },

  { id: 1, name: "Adaptador OTG", image: "../img/gadget/adaptador otg.jpeg", priceDescuento: "$6.99", url: "productgadget.html?id=1" },
  { id: 2, name: "Anillo de luz", image: "../img/gadget/anillo de luz.jpeg", priceDescuento: "$12.00", url: "productgadget.html?id=2" },
  { id: 3, name: "Cargador Inalambrico magnetico", image: "../img/gadget/Cargador Inalambrico Magnetic.jpeg", priceDescuento: "$9.00", url: "productgadget.html?id=3" },
  { id: 4, name: "control bluetooth para tomar fotos", image: "../img/gadget/Controle Remoto.jpeg", priceDescuento: "$8.00", url: "productgadget.html?id=4" },
  { id: 5, name: "guantes tactiles", image: "../img/gadget/Guantes tactiless.jpeg", priceDescuento: "$18.00", url: "productgadget.html?id=5" },
  { id: 6, name: "Lampara para lectura", image: "../img/gadget/lamapra de lentura.jpeg", priceDescuento: "$14.50", url: "productgadget.html?id=6" },
  { id: 7, name: "Lente macro", image: "../img/gadget/lente macro.jpeg", priceDescuento: "$19.50", url: "productgadget.html?id=7" },
  { id: 8, name: "soporte multiuso", image: "../img/gadget/Mobile charger holding.jpeg", priceDescuento: "$5.00", url: "productgadget.html?id=8" },
  { id: 9, name: "Powerban", image: "../img/gadget/power ban.jpeg", priceDescuento: "$25.50", url: "productgadget.html?id=9" },
  { id: 10, name: "soporte para telefonos", image: "../img/gadget/sostenedor de telefono.jpeg", priceDescuento: "$7.00", url: "productgadget.html?id=10" },
  { id: 11, name: "Style pen", image: "../img/gadget/style pen .jpeg", priceDescuento: "$3.00", url: "productgadget.html?id=11" },
  { id: 12, name: "Soporte magnetico para carro", image: "../img/gadget/Suporte Magnético .jpeg", priceDescuento: "$4.00", url: "productgadget.html?id=12" },
  { id: 13, name: "Teclado para telefono y tablets", image: "../img/gadget/teclado para telefono y tables.jpeg", priceDescuento: "$22.00", url: "productgadget.html?id=13" },
  { id: 14, name: "Tripode para fotos", image: "../img/gadget/tripode flexible.jpeg", priceDescuento: "$7.00", url: "productgadget.html?id=14" },
  { id: 15, name: "funda para celular", image: "../img/gadget/funda con espaco para accses.jpeg", priceDescuento: "$17.00", url: "productgadget.html?id=15" },

  { id: 76, name: "iPhone 14 Pro Max", priceDescuento: "$999.00", image: "../img/exclusivo/iphone14 2.jpeg", url: "productexclusivo.html?id=76" },
{ id: 77, name: "iPad Air 5", priceDescuento: "$699.00", image: "../img/exclusivo/ipadblanca.jpeg", url: "productexclusivo.html?id=77" },
{ id: 78, name: "Samsung Galaxy S24 Ultra", priceDescuento: "$1199.00", image: "../img/exclusivo/24blanco.jpeg", url: "productexclusivo.html?id=78" },
{ id: 79, name: "Xiaomi Pad 6 Pro", priceDescuento: "$499.00", image: "../img/exclusivo/Xiaomi Pad 6.jpeg", url: "productexclusivo.html?id=79" },
{ id: 80, name: "Apple Watch Series 9", priceDescuento: "$429.00", image: "../img/exclusivo/apleee waht 9 series.jpeg", url: "productexclusivo.html?id=80" },
{ id: 81, name: "Sony WH-1000XM5", priceDescuento: "$349.00", image: "../img/exclusivo/audisoni2.jpeg", url: "productexclusivo.html?id=81" },
{ id: 82, name: "GoPro HERO12 Black", priceDescuento: "$429.00", image: "../img/exclusivo/gopro2.jpeg", url: "productexclusivo.html?id=82" },
{ id: 83, name: "Nintendo Switch OLED", priceDescuento: "$260.00", image: "../img/exclusivo/OLED.jpeg", url: "productexclusivo.html?id=83" },
{ id: 84, name: "DJI Mini 4 Pro", priceDescuento: "$849.00", image: "../img/exclusivo/dron.jpeg", url: "productexclusivo.html?id=84" },
{ id: 85, name: "Logitech MX Master 3S", priceDescuento: "$99.00", image: "../img/exclusivo/mouseamazon2.jpeg", url: "productexclusivo.html?id=85" },
{ id: 86, name: "Samsung Galaxy Tab A9", priceDescuento: "$799.00", image: "../img/exclusivo/A9+ blanca.jpeg", url: "productexclusivo.html?id=86" },
{ id: 87, name: "Amazon Echo Dot 5th Gen", priceDescuento: "$49.00", image: "../img/exclusivo/bocina.jpeg", url: "productexclusivo.html?id=87" },

{ id: 88, name: "Xbox Series X", priceDescuento: "$349.00", image: "../img/exclusivo/xboxblanco.jpeg", url: "productexclusivo2.html?id=88" },
{ id: 89, name: "Canon EOS R50", priceDescuento: "$899.00", image: "../img/exclusivo/CÃ¢mera Canon Eos R50 Mirrorless 18-45Mm Branca Br.jpeg", url: "productexclusivo2.html?id=89" },
{ id: 90, name: "Canon EOS R10", priceDescuento: "$899.00", image: "../img/exclusivo/canon10.jpeg", url: "productexclusivo2.html?id=90" }, 
{ id: 91, name: "MacBook Pro M4", priceDescuento: "$1799.00", image: "../img/exclusivo/silver m4.jpeg", url: "productexclusivo2.html?id=91" },
{ id: 92, name: "Surface Pro 11", priceDescuento: "$1275.00", image: "../img/exclusivo/surface 11 blanca.jpeg", url: "productexclusivo2.html?id=92" },
{ id: 93, name: "PlayStation 5", priceDescuento: "$559.00", image: "../img/exclusivo/Play 5.jpeg", url: "productexclusivo2.html?id=93" },
{ id: 94, name: "Galaxy Watch 6", priceDescuento: "$335.00", image: "prin/Smartwatch Watch6 Classic 43 Mm Bt Silver___.jpg", url: "productexclusivo2.html?id=94" },
{ id: 95, name: "JBL Vibe Bean", priceDescuento: "$40.00", image: "../img/exclusivo/JBL VIBE BLANCOS.jpeg", url: "productexclusivo2.html?id=96" },
{ id: 97, name: "Razer Blade Stealth 13", priceDescuento: "$2656.00", image: "../img/exclusivo/razer blade blanca.jpeg", url: "productexclusivo2.html?id=97" },
{ id: 98, name: "Bocina JBL Go 4", priceDescuento: "$60.00", image: "../img/exclusivo/Portátil Go 4 JBL blanca - R$ 254,8.jpeg", url: "productexclusivo2.html?id=98" },
{ id: 99, name: "Fujifilm Instax Mini 12", priceDescuento: "$84.00", image: "../img/exclusivo/instaxblanca.jpeg", url: "productexclusivo2.html?id=99" },
{ id: 100, name: "Fitbit Charge 6", priceDescuento: "$139.00", image: "../img/exclusivo/fifitblanco.jpeg", url: "productexclusivo2.html?id=100" },

 { id: 101, name: "Audifonos JBL Synchros E50 BT", priceDescuento: "$130.05", url: "productaudifonos.html?id=101", image: "../img/audifonos/Audifonos JBL Synchros E50 BT blanco.jpg" },
  { id: 102, name: "Audifonos Bose Quietcomfort", priceDescuento: "$217.70", url: "productaudifonos.html?id=102", image: "../img/audifonos/Audífonos Bluetooth Quietcomfort White Smoke___.jpeg" },
  { id: 103, name: "Audifonos JBL Tune flex 2 con ANC", priceDescuento: "$89.90", url: "productaudifonos.html?id=103", image: "../img/audifonos/JBL Tune Flex True Wireless Noise Cancelling Earbuds - White.jpeg" },
  { id: 104, name: "Audifonos Gaming JBL Quantum 800", priceDescuento: "$124.05", url: "productaudifonos.html?id=104", image: "../img/audifonos/SÅ‚uchawki JBL Quantum 100P Nauszne.jpeg" },
  { id: 105, name: "Audifonos inalambricos JBL tune 520 Over Ear", priceDescuento: "$39.02", url: "productaudifonos.html?id=105", image: "../img/audifonos/â˜ï¸.jpeg" },
  { id: 106, name: "JBL TUNE 120TWS", priceDescuento: "$84.15", url: "productaudifonos.html?id=106", image: "../img/audifonos/JBL TUNE 120TWS.jpg" },
  { id: 107, name: "Audifonos JBL 200 TWS", priceDescuento: "$64.00", url: "productaudifonos.html?id=107", image: "../img/audifonos/jbl 200 tws.jpg" },
  { id: 108, name: "Audifonos Sony WH-CH500", priceDescuento: "$84.00", url: "productaudifonos.html?id=108", image: "../img/audifonos/WIN- Sony WH-CH500 Wireless Bluetooth NFC On-Ear Headphones.jpeg" },
  { id: 109, name: "Audifonos Inalambricos Sony WH-CH520", priceDescuento: "$53.12", url: "productaudifonos.html?id=109", image: "../img/audifonos/Audífonos inalámbricos Bluetooth WH CH520 Blancos.jpeg" },
  { id: 110, name: "Audifonos Samsung Galaxy Buds 3 Pro", priceDescuento: "$134.00", url: "productaudifonos.html?id=110", image: "../img/audifonos/Galaxy Buds3 Pro White _ Samsung Chile.jpeg" },
  { id: 111, name: "Audifonos Samsung Buds 2 Pro", priceDescuento: "$45.00", url: "productaudifonos.html?id=111", image: "../img/audifonos/buds blancos.jpeg" },
  { id: 112, name: "Sony WF-1000XM4", priceDescuento: "$246.00", url: "productaudifonos.html?id=112", image: "../img/audifonos/Sony WF-1000XM4 Blanco.jpeg" },

 { id: 113, name: "Bose Acoustimass 10 seies IV", priceDescuento: "$559.03", url: "produc audio para el hogar.html?id=113", image: "../img/audio para el hogar/Bose Acoustimass 10 Home Entertainment Speaker System â€“ 5_1.jpg" },
  { id: 114, name: "Chaine HiFi Philips BTM3360 _ Darty", priceDescuento: "$117.41", url: "produc audio para el hogar.html?id=114", image: "../img/audio para el hogar/Chaine HiFi Philips BTM3360 _ Darty.jpg" },
  { id: 115, name: "Harman Kardon BDS-3D753", priceDescuento: "$439.90", url: "produc audio para el hogar.html?id=115", image: "../img/audio para el hogar/Harman Kardon BDS-3D753.jpg" },
  { id: 116, name: "JBL Bar 9_1 True Wireless Surround with Dolby Atmos 820-Watt", priceDescuento: "$699.03", url: "produc audio para el hogar.html?id=116", image: "../img/audio para el hogar/minicomponente.jpeg" },
  { id: 117, name: "Microcomponente Sony CMT SBT40D 50W RMS", priceDescuento: "$184.26", url: "produc audio para el hogar.html?id=117", image: "../img/audio para el hogar/Microcomponente Sony CMT SBT40D 50W RMS.jpg" },
  { id: 118, name: "Samsung HT-H5550W", priceDescuento: "$280.00", url: "produc audio para el hogar.html?id=118", image: "../img/audio para el hogar/Samsung HT-H5550W 5_1 3D.jpeg" },
  { id: 119, name: "Sharp XL-BH530 CD Mini Shelf System", priceDescuento: "$279.02", url: "produc audio para el hogar.html?id=119", image: "../img/audio para el hogar/Sharp XL-BH530 CD Mini Shelf System.jpg" },
  { id: 120, name: "Sony modelo MHCSHAKEX3D", priceDescuento: "$261.23", url: "produc audio para el hogar.html?id=120", image: "../img/audio para el hogar/Sony modelo MHCSHAKEX3D_  potencia de 1200W RMS.jpg" },
  { id: 121, name: "SAMSUNG - Mx-j630 - Home Cinema - 2", priceDescuento: "$323.19", url: "produc audio para el hogar.html?id=121", image: "../img/audio para el hogar/SAMSUNG - Mx-j630 - Home Cinema - 2 (Stereo).jpeg" },
  { id: 122, name: "MHC-GPX3_ME2 Salida 10400W .", priceDescuento: "$384.23", url: "produc audio para el hogar.html?id=122", image: "../img/audio para el hogar/MHC-GPX3_ME2  Salida 10400W PMPO 950W RMS  Bandeja 1 CD.jpeg" },
  { id: 123, name: "Altavoz LG LK72B", priceDescuento: "$119.02", url: "produc audio para el hogar.html?id=123", image: "../img/audio para el hogar/Altavoz LG LK72B.jpeg" },
  { id: 124, name: "LG XBOOM CL87 2350W", priceDescuento: "$573.18", url: "produc audio para el hogar.html?id=124", image: "../img/audio para el hogar/LG XBOOM CL87 2350W.jpeg" },
  { id: 125, name: "LG CK43 XBOOM", priceDescuento: "$174.03", url: "produc audio para el hogar.html?id=125", image: "../img/audio para el hogar/LG CK43 XBOOM.jpeg" },
  { id: 126, name: "LG XBOOM CL 98", priceDescuento: "$599.25", url: "produc audio para el hogar.html?id=126", image: "../img/audio para el hogar/Lg XBOOM CL 98.avif" },
  { id: 127, name: "Panasonic SC-AKX18", priceDescuento: "$269.01", url: "produc audio para el hogar.html?id=127", image: "../img/audio para el hogar/Panasonic 350W Bookshelf Stereo System Black SC-AKX18.jpeg" },


  { id: 128, name: "Bocina jbl Boombox 3 Wi-Fi 80W negra", priceDescuento: "$498", image: "../img/audio personal/Bocina jbl  Boombox  3 Wi-Fi 80W negra.jpg", url: "produc audiopersonal.html?id=128" },
  { id: 129, name: "Bocina jbl clip 4", priceDescuento: "$59.50", image: "../img/audio personal/Bocina jbl clip 4 blanca.jpg", url: "produc audiopersonal.html?id=129" },
  { id: 130, name: "Bocina jbl flip 6", priceDescuento: "$110.50", image: "../img/audio personal/JBL Flip 5 blanca.jpg", url: "produc audiopersonal.html?id=130" },
  { id: 131, name: "Bocina jbl go3", priceDescuento: "$37.50", image: "../img/audio personal/BOcina jbl go 3 blanca.jpg", url: "produc audiopersonal.html?id=131" },
  { id: 132, name: "Bocina jbl GO4", priceDescuento: "$49", image: "../img/audio personal/Bocina jbl go4 blanca.jpg", url: "produc audiopersonal.html?id=132" },
  { id: 133, name: "Ultimate Ear Megaboom 3", priceDescuento: "$162", image: "../img/audio personal/ultimate ear megaboom 3 blanca.jpg", url: "produc audiopersonal.html?id=133" },
  { id: 134, name: "Ultimate Ear Megaboom 4", priceDescuento: "$202.50", image: "../img/audio personal/ultimate ear megaboom 4 negra.webp", url: "produc audiopersonal.html?id=134" },
  { id: 135, name: "Ultimate Ears Wonderboom", priceDescuento: "$77", image: "../img/audio personal/ultimate ears wonderboom negra.webp", url: "produc audiopersonal.html?id=135" },
  { id: 136, name: "Sony SRS-XB100", priceDescuento: "$57.40", image: "../img/audio personal/SONY SRS-XB100 negra.jpg", url: "produc audiopersonal.html?id=136" },
  { id: 137, name: "JBL Charge 6", priceDescuento: "$153", image: "../img/audio personal/jbl charge 6 blanca.jpg", url: "produc audiopersonal.html?id=137" },
  { id: 138, name: "Bocina JBL Flip 5", priceDescuento: "$103.20", image: "../img/audio personal/JBL Flip 5 negra.jpg", url: "produc audiopersonal.html?id=138" },
  { id: 139, name: "Sony ULT Field 5", priceDescuento: "$270", image: "../img/audio personal/SONY ULT FIELD 5 blanca.jpg", url: "produc audiopersonal.html?id=139" },

  { id: 140, name: "Altavoz JBL 1100 W Bluetooth", priceDescuento: "$1,749.00", url: "produc audio profecional.html?id=140", image: "../img/audio pro/Altavoz JBL 1100 W Bluetooth Negro PartyBox Ultimate_LE_upscale_balanced_x4_tone_enhance_50_color_enhance_50.jpg" },
  { id: 141, name: "Micrófono inalámbrico 330158", priceDescuento: "$33.99", url: "produc audio profecional.html?id=141", image: "../img/audio pro/Micrófono inalámbrico RadioShack Negro 3301587_LE_upscale_balanced_x4_tone_enhance_50_color_enhance_50.jpg" },
  { id: 142, name: "Micrófono USB para transmisión con filtro", priceDescuento: "$42.49", url: "produc audio profecional.html?id=142", image: "../img/audio pro/Micrófono USB para transmisión con filtro RadioShack Negro_LE_upscale_balanced_x4_tone_enhance_50_color_enhance_50.jpg" },
  { id: 143, name: "Parlante de torre 4001942 150 W", priceDescuento: "$189.99", url: "produc audio profecional.html?id=143", image: "../img/audio pro/Parlante de torre RadioShack 4001942 150 W_LE_upscale_balanced_x4_tone_enhance_50_color_enhance_50.jpg" },
  { id: 144, name: "Parlante LG XBOOM RNC7 420 W Bluetooth", priceDescuento: "$279.00", url: "produc audio profecional.html?id=144", image: "../img/audio pro/Parlante LG XBOOM RNC7 420 W Bluetooth Negro_LE_upscale_balanced_x4_tone_enhance_50_color_enhance_50.jpg" },
  { id: 145, name: "Parlante Activo 4001923 60 W Bluetooth", priceDescuento: "$129.99", url: "produc audio profecional.html?id=145", image: "../img/audio pro/Parlante RadioShack Activo 4001923 60 W Bluetooth Negro_LE_upscale_balanced_x4.jpg" },
  { id: 146, name: "Parlante Sony 1000 Watts Bluetooth SRSULT1000", priceDescuento: "$969.00", url: "produc audio profecional.html?id=146", image: "../img/audio pro/Parlante Sony 1000 Watts Bluetooth Negro SRSULT1000_LE_upscale_balanced_x4.jpg" },
  { id: 147, name: "Parlantes Activo dual 500 W Bluetooth", priceDescuento: "$89.99", url: "produc audio profecional.html?id=147", image: "../img/audio pro/Parlantes RadioShack Activo dual 500 W Bluetooth Negro_LE_upscale_balanced_x4.jpg" },
  { id: 148, name: "Sistema de micrófono inalámbrico DJI Mic Mini", priceDescuento: "$225.00", url: "produc audio profecional.html?id=148", image: "../img/audio pro/Sistema de micrófono inalámbrico DJI Negro Mic Mini_LE_upscale_balanced_x4.jpg" },
  { id: 149, name: "Sistema de micrófonos inalámbricos", priceDescuento: "$80.99", url: "produc audio profecional.html?id=149", image: "../img/audio pro/Sistema de micrófonos inalámbricos RadioShack Negro_LE_upscale_balanced_x4.jpg" },
  { id: 150, name: "Micrófono 2607050", priceDescuento: "$29.99", url: "produc audio profecional.html?id=150", image: "../img/audio pro/Micrófono Radioshack 2607050_LE_upscale_balanced_x4_tone_enhance_50_color_enhance_50.jpg" },
  { id: 151, name: "Megáfono 3202715 25 W", priceDescuento: "$17.99", url: "produc audio profecional.html?id=151", image: "../img/audio pro/Megáfono RadioShack 3202715 25 W Blanco y rojo_LE_upscale_balanced_x4_tone_enhance_50_color_enhance_50.jpg" },
  { id: 152, name: "Megáfono 3202716 75W", priceDescuento: "$49.99", url: "produc audio profecional.html?id=152", image: "../img/audio pro/Megáfono RadioShack 3202716 75W Blanco con Azul_LE_upscale_balanced_x4_tone_enhance_50_color_enhance_50.jpg" },
  { id: 153, name: "Karaoke Portátil 4001970", priceDescuento: "$29.99", url: "produc audio profecional.html?id=153", image: "../img/audio pro/Karaoke Portátil RadioShack 4001970 Negro_LE_upscale_balanced_x4_tone_enhance_50_color_enhance_50.jpg" },
  { id: 154, name: "Altavoz tipo torre 240 W Bluetooth", priceDescuento: "$225.01", url: "produc audio profecional.html?id=154", image: "../img/audio pro/Altavoz tipo torre RadioShack 240 W Bluetooth Negro_LE_upscale_balanced_x4_tone_enhance_50_color_enhance_50.jpg" },



  { id: 155, name: "Spectra Vision Pro (Blanco)", priceDescuento: "$24.00", url: "productaccesorios.html?id=155", image: "../img/Acessorios/gafas blancas.jpeg" },
  { id: 156, name: "Spectra Vision Pro (Negro)", priceDescuento: "$25.60", url: "productaccesorios.html?id=156", image: "../img/Acessorios/gafas negras.jpeg" },
  { id: 157, name: "Aurelius X2 Wireless (Azul)", priceDescuento: "$36.00", url: "productaccesorios.html?id=157", image: "../img/Acessorios/audifonos azul.jpeg" },
  { id: 158, name: "Aurelius X2 Wireless (Morado)", priceDescuento: "$40.00", url: "productaccesorios.html?id=158", image: "../img/Acessorios/audifonos morados.jpeg" },
  { id: 159, name: "Aurelius X2 Wireless (Rojo)", priceDescuento: "$44.00", url: "productaccesorios.html?id=159", image: "../img/Acessorios/audifonos rojos.jpeg" },
  { id: 160, name: "Logitech G733 Wireless", priceDescuento: "$72.00", url: "productaccesorios.html?id=160", image: "../img/Acessorios/Logitech - Auriculares inalámbricos G733â€¦.jpeg" },
  { id: 161, name: "RedWave Studio USB Mic", priceDescuento: "$48.00", url: "productaccesorios.html?id=161", image: "../img/Acessorios/microfono rojo.jpeg" },
  { id: 162, name: "Nebula M7 (Azul)", priceDescuento: "$22.40", url: "productaccesorios.html?id=162", image: "../img/Acessorios/mouse azul.jpeg" },
  { id: 163, name: "Nebula M7 RGB", priceDescuento: "$28.00", url: "productaccesorios.html?id=163", image: "../img/Acessorios/Mouse rgb usb.jpeg" },
  { id: 164, name: "Spectra SunShield", priceDescuento: "$32.00", url: "productaccesorios.html?id=164", image: "../img/Acessorios/gafas blancas.jpeg" },
  { id: 165, name: "Spectra UV Shield", priceDescuento: "$30.40", url: "productaccesorios.html?id=165", image: "../img/Acessorios/gafas negras.jpeg" },
  { id: 166, name: "900Â° Racing Pedal Pro", priceDescuento: "$96.00", url: "productaccesorios.html?id=166", image: "../img/Acessorios/Hot Sale 900 Degree  Pedal and Gear  Gaming Racingâ€¦.jpeg" },
  { id: 167, name: "Titan Switchboard Pro", priceDescuento: "$48.00", url: "productaccesorios.html?id=167", image: "../img/Acessorios/teclado rgb sin mouse.jpeg" },
  { id: 168, name: "Titan Mini RGB 60%", priceDescuento: "$36.00", url: "productaccesorios.html?id=168", image: "../img/Acessorios/teclado rgb.jpeg" },
  { id: 169, name: "Titan Switchboard Pro (Edición Morada)", priceDescuento: "$56.00", url: "productaccesorios.html?id=169", image: "../img/Acessorios/teclado morado.jpeg" },

{ id: 170, name: "Silla Gamer Elite", priceDescuento: "$135.00", url: "productgaming.html?id=170", image: "../img/SILLAS/Gamer _ set up_ silla gamer _ black _.jpeg" },
{ id: 171, name: "Silla Gamer Pro", priceDescuento: "$153.00", url: "productgaming.html?id=171", image: "../img/SILLAS/silla.jpeg" },
{ id: 172, name: "Silla Gamer Comfort", priceDescuento: "$160.00", url: "productgaming.html?id=172", image: "../img/SILLAS/¡descubre La Comodidad Definitiva Para Tusâ€¦.jpeg" },
{ id: 173, name: "Escritorio Gamer ThunderX3", priceDescuento: "$187.50", url: "productgaming.html?id=173", image: "../img/SILLAS/ThunderX3- Mesa gaming con iluminación RGB yâ€¦.jpeg" },
{ id: 174, name: "Silla Gamer Premium", priceDescuento: "$210.00", url: "productgaming.html?id=174", image: "../img/SILLAS/Cadeira Gamer Black Hawk com Apoio Cervicalâ€¦.jpeg" },
{ id: 175, name: "Silla Gamer Ergonomía", priceDescuento: "$187.00", url: "productgaming.html?id=175", image: "../img/SILLAS/Amazon_com_ RESPAWN 110 Ergonomic Gaming Chairâ€¦.jpeg" },
{ id: 176, name: "Escritorio Gamer Esquinero ShadowEdge", priceDescuento: "$140.00", url: "productgaming.html?id=176", image: "../img/SILLAS/mesa blanca.jpeg" },
{ id: 177, name: "Silla Gamer Dowinx Pro", priceDescuento: "$144.00", url: "productgaming.html?id=177", image: "../img/SILLAS/Cadeira Gamer Ii Reclinável 180Âº Giratória Pretaâ€¦.jpeg" },
{ id: 178, name: "Silla Gamer Deluxe", priceDescuento: "$210.00", url: "productgaming.html?id=178", image: "../img/SILLAS/silla con celeste.jpeg" },
{ id: 179, name: "Escritorio Gamer Elevado", priceDescuento: "$110.50", url: "productgaming.html?id=179", image: "../img/SILLAS/b5b12714-deb1-4521-9490-9a9920721246.jpeg" },
{ id: 180, name: "Silla Gamer ThunderX3 STYLE", priceDescuento: "$192.00", url: "productgaming.html?id=180", image: "../img/SILLAS/ThunderX3 Spain Professional Gaming Chair Bc3 Blue.jpeg" },
{ id: 181, name: "Escritorio Gamer Esquinero BlackFire", priceDescuento: "$161.50", url: "productgaming.html?id=181", image: "../img/SILLAS/b94213bd-e8b1-470d-a72c-454406dda68d.jpeg" },
{ id: 182, name: "Escritorio Gamer Modular", priceDescuento: "$136.00", url: "productgaming.html?id=182", image: "../img/SILLAS/mesa amarilla.jpeg" },
{ id: 183, name: "Silla Gamer Merax Viper", priceDescuento: "$240.00", url: "productgaming.html?id=183", image: "../img/SILLAS/PRICES MAY VARY_ âœ”Ergonomic Design of Gamingâ€¦.jpeg" },
{ id: 184, name: "Silla Gamer Dowinx Sakura", priceDescuento: "$126.00", url: "productgaming.html?id=184", image: "../img/SILLAS/silla rosada.jpeg" },

{ id: 185, name: "Control Xbox", priceDescuento: "$55.00", url: "productosvideojuegos.html?id=185", image: "../img/VIDEOJUEGOS/Xbox Wireless Controller â€“ Dawn Shadow Special Edition [Discontinued].jpeg" },
{ id: 186, name: "Spider-Man 2 (PS5)", priceDescuento: "$65.00", url: "productosvideojuegos.html?id=186", image: "../img/VIDEOJUEGOS/spiderman 2 ps5.jpeg" },
{ id: 187, name: "The Last of Us Part 2 (PS4)", priceDescuento: "$45.00", url: "productosvideojuegos.html?id=187", image: "../img/VIDEOJUEGOS/the las of us part 2.jpeg" },
{ id: 188, name: "Mando Retro N64", priceDescuento: "$25.00", url: "productosvideojuegos.html?id=188", image: "../img/VIDEOJUEGOS/miadore Retro N 64 Bit N64 Controller,Wired Gamepad Controller Joystick for N64 Console N64 System,Gray.jpeg" },
{ id: 189, name: "Control PS5 DualSense", priceDescuento: "$65.00", url: "productosvideojuegos.html?id=189", image: "../img/VIDEOJUEGOS/control ps5.jpeg" },
{ id: 190, name: "Control DualShock 4", priceDescuento: "$55.00", url: "productosvideojuegos.html?id=190", image: "../img/VIDEOJUEGOS/control de ps4.jpeg" },
{ id: 191, name: "Marvel's Spider-Man Miles Morales PS4", priceDescuento: "$35.00", url: "productosvideojuegos.html?id=191", image: "../img/VIDEOJUEGOS/Marvel's Spider-Man_ Miles Morales.jpeg" },
{ id: 192, name: "Control Xbox One Fat 500GB", priceDescuento: "$230.00", url: "productosvideojuegos.html?id=192", image: "../img/VIDEOJUEGOS/Xbox One Fat 500gb Completo Frete Grátis Leia Toda DescriÃ§Ã£obSz.jpeg" },
{ id: 193, name: "Mortal Kombat X", priceDescuento: "$45.00", url: "productosvideojuegos.html?id=193", image: "../img/VIDEOJUEGOS/Mortal kombat x.jpeg" },
{ id: 194, name: "PlayStation 2 (PS2)", priceDescuento: "$85.00", url: "productosvideojuegos.html?id=194", image: "../img/VIDEOJUEGOS/PlayStation 2 (PS2).jpeg" },
{ id: 195, name: "Nintendo Switch (Neon Red/Neon Blue)", priceDescuento: "$280.00", url: "productosvideojuegos.html?id=195", image: "../img/VIDEOJUEGOS/Nintendo Switch (Neon Red_Neon blue).jpeg" },
{ id: 196, name: "PlayStation 3", priceDescuento: "$120.00", url: "productosvideojuegos.html?id=196", image: "../img/VIDEOJUEGOS/SONY PS3.jpeg" },
{ id: 197, name: "Viernes 13 (PS5)", priceDescuento: "$56.00", url: "productosvideojuegos.html?id=197", image: "../img/VIDEOJUEGOS/viernes 13.jpeg" },
{ id: 198, name: "Xbox Series S", priceDescuento: "$255.00", url: "productosvideojuegos.html?id=198", image: "../img/VIDEOJUEGOS/xbox series s.jpeg" },
{ id: 199, name: "PS5", priceDescuento: "$630.00", url: "productosvideojuegos.html?id=199", image: "../img/VIDEOJUEGOS/PlayStation 5 Console.jpeg" },


{ id: 200, name: "ASUS TUF Gaming Laptop",  image: "../img/LAPS/ðŸ”¥ Power and performance with the ASUS TUF Gamingâ€¦.jpeg", priceDescuento: "$760.00", url: "productslaptops.html?id=200" },
{ id: 201, name: "Lenovo ThinkPad T14s Gen 3",  image: "../img/LAPS/The ThinkPad T14s Gen 3 has all you need to getâ€¦.jpeg",priceDescuento: "$748.00", url: "productslaptops.html?id=201" },
{ id: 202, name: "ASUS ZenBook / ROG Strix", image: "../img/LAPS/ASUS ZenBook 13 Ultra-Slim Laptop 13_3_ FHDâ€¦.jpeg", priceDescuento: "$1,148.00", url: "productslaptops.html?id=202" },
{ id: 203, name: "Lenovo Legion Gaming Laptop", image: "../img/LAPS/Lenovo Legion 5 15 Gaming Laptop.jpeg", priceDescuento: "$975.00", url: "productslaptops.html?id=203" },
{ id: 204, name: "Acer Nitro Gaming Laptop",image: "../img/LAPS/Notebook Acer Gamer Nitro V15 ANV15-51-7837â€¦.jpeg", priceDescuento: "$880.00", url: "productslaptops.html?id=204" },
{ id: 205, name: "MSI GE62VR Apache Pro", image: "../img/LAPS/MSI GE62VR Apache Pro Gaming Laptop [IntelÂ® Coreâ„¢â€¦.jpeg", priceDescuento: "$1,120.50", url: "productslaptops.html?id=205" },
{ id: 206, name: "Alienware M18 R2", image: "../img/LAPS/Alienware M18 R2 Gaming Laptop.jpeg", priceDescuento: "$850.50", url: "productslaptops.html?id=206" },
{ id: 207, name: "ACEMAGIC Metal Series Laptop",image: "../img/LAPS/Limited-time deal_ ACEMAGIC Laptop Computer, 16GBâ€¦.jpeg" , priceDescuento: "$616.20", url: "productslaptops.html?id=207" },
{ id: 208, name: "Lenovo LOQ Gaming Laptop", image: "../img/LAPS/Latest LENOVO LOQ 15IRH8 GAMING LAPTOP gives you aâ€¦.jpeg" , priceDescuento: "$840.00", url: "productslaptops.html?id=208" },
{ id: 209, name: "MSI Gaming Laptop",image: "../img/LAPS/MSI GE62VR Apache Pro Gaming Laptop [IntelÂ® Coreâ„¢â€¦.jpeg", priceDescuento: "$1,020.00", url: "productslaptops.html?id=209" },
{ id: 210, name: "MSI Vector Gaming Laptop",image: "../img/LAPS/Laptop mit 18_ QWUXGA Display, Intel Coreâ€¦.jpeg", priceDescuento: "$1,290.00", url: "productslaptops.html?id=210" },
{ id: 211, name: "MSI Raider GE Gaming Laptop",image: "../img/LAPS/NOW is the time to score the hottest holiday dealsâ€¦.jpeg", priceDescuento: "$1,740.00", url: "productslaptops.html?id=211" },
{ id: 212, name: "HP Omen Gaming Laptop", image: "../img/LAPS/HP OMEN 16 16_1_ FHD 165Hz Gaming Laptop (Intelâ€¦.jpeg",priceDescuento: "$1,760.00", url: "productslaptops.html?id=212" },
{ id: 213, name: "MSI Gaming Laptop (Ryzen)", image: "../img/LAPS/Latest AMD Ryzen 5 7430U Processors is here_ Theâ€¦.jpeg" ,priceDescuento: "$1,530.00", url: "productslaptops.html?id=213" },
{ id: 214, name: "ASUS TUF Gaming Laptop (144Hz)", image: "../img/LAPS/asus.jpeg", priceDescuento: "$1,312.00", url: "productslaptops.html?id=214" },

{ id: 215, name: "SAMSUNG UHD 4K", priceDescuento: "$800.99", image: "../img/tv/IMG 2025-08-12 a las 19.31.49_453e839d.jpg", url: "productvideos.html?id=215" },
{ id: 216, name: "DYNAMIC CRYSTAL COLOUR", priceDescuento: "$750.00", image: "../img/tv/IMG-20250723-WA0004.jpg", url: "productvideos.html?id=216" },
{ id: 217, name: "SAMSUNG UHP", priceDescuento: "$330.00", image: "../img/tv/IMG-20250723-WA0005.jpg", url: "productvideos.html?id=217" },
{ id: 218, name: "LG UHP", priceDescuento: "$450.00", image: "../img/tv/IMG-20250812-WA0064.jpg", url: "productvideos.html?id=218" },
{ id: 219, name: "SONY", priceDescuento: "$375.00", image: "../img/tv/IMG-20250812-WA0065.jpg", url: "productvideos.html?id=219" },
{ id: 220, name: "LG SMART TV", priceDescuento: "$430.50", image: "../img/tv/IMG-20250812-WA0067.jpg", url: "productvideos.html?id=220" },
{ id: 221, name: "NOC-ROKU TV", priceDescuento: "$679.50", image: "../img/tv/IMG-20250812-WA0069.jpg", url: "productvideos.html?id=221" },
{ id: 222, name: "HISENSE TV", priceDescuento: "$995.00", image: "../img/tv/IMG-20250812-WA0086.jpg", url: "productvideos.html?id=222" },
{ id: 223, name: "TD SYSTEMS TV", priceDescuento: "$259.50", image: "../img/tv/IMG-20250812-WA0087.jpg", url: "productvideos.html?id=223" },
{ id: 224, name: "TCL TV", priceDescuento: "$600.00", image: "../img/tv/IMG-20250812-WA0088.jpg", url: "productvideos.html?id=224" },
{ id: 225, name: "SAMSUNG TV PLUS", priceDescuento: "$800.00", image: "../img/tv/IMG-20250812-WA0089.jpg", url: "productvideos.html?id=225" },
{ id: 226, name: "TUTU TV 42", priceDescuento: "$680.00", image: "../img/tv/IMG-20250812-WA0090.jpg", url: "productvideos.html?id=226" },
{ id: 227, name: "SAMSUNG TV", priceDescuento: "$622.00", image: "../img/tv/samsung.2020.jpg", url: "productvideos.html?id=227" },
{ id: 228, name: "SAMSUNG TV 4K", priceDescuento: "$480.00", image: "../img/tv/samsung.4k UHD.jpg", url: "productvideos.html?id=228" },
{ id: 229, name: "SAMSUNG SMART TV", priceDescuento: "$550.00", image: "../img/tv/samsung.UHD.jpg", url: "productvideos.html?id=229" },

{ id: 230, name: "Convertidor de AV (RCA) a HDMI", priceDescuento: "$12.00", image: "../img/accesorios tv/IMG-20250819-WA0019.jpg", url: "productaccesorios2.html?id=230" },
{ id: 231, name: "Klip Xtreme, modelo KPM", priceDescuento: "$30.00", image: "../img/accesorios tv/IMG-20250819-WA0020.jpg", url: "productaccesorios2.html?id=231" },
{ id: 232, name: "LG Magic Remote", priceDescuento: "$84.00", image: "../img/accesorios tv/IMG-20250819-WA0021.jpg", url: "productaccesorios2.html?id=232" },
{ id: 233, name: "Convertidor de RCA a HDMI", priceDescuento: "$13.00", image: "../img/accesorios tv/IMG-20250819-WA0022.jpg", url: "productaccesorios2.html?id=233" },
{ id: 234, name: "Cable HDMI 4k PoerBear", priceDescuento: "$8.00", image: "../img/accesorios tv/IMG-20250819-WA0023.jpg", url: "productaccesorios2.html?id=234" },
{ id: 235, name: "Soporte de pared para TV", priceDescuento: "$33.50", image: "../img/accesorios tv/IMG-20250819-WA0024.jpg", url: "productaccesorios2.html?id=235" },
{ id: 236, name: "Soporte de pared TV de 32 pulgadas", priceDescuento: "$29.50", image: "../img/accesorios tv/IMG-20250819-WA0025.jpg", url: "productaccesorios2.html?id=236" },
{ id: 237, name: "Cable AV (Audios/videos)", priceDescuento: "$18.00", image: "../img/accesorios tv/IMG-20250819-WA0026.jpg", url: "productaccesorios2.html?id=237" },
{ id: 238, name: "Control remoto PIX 6428", priceDescuento: "$27.50", image: "../img/accesorios tv/IMG-20250819-WA0027.jpg", url: "productaccesorios2.html?id=238" },
{ id: 239, name: "Adaptador de HDMI MinI", priceDescuento: "$7.00", image: "../img/accesorios tv/IMG-20250819-WA0028.jpg", url: "productaccesorios2.html?id=239" },
{ id: 240, name: "Amazon fire TV Stick Lite", priceDescuento: "$39.00", image: "../img/accesorios tv/IMG-20250819-WA0029.jpg", url: "productaccesorios2.html?id=240" },
{ id: 241, name: "Soporte de TV de 26 a 55 pulgadas", priceDescuento: "$20.00", image: "../img/accesorios tv/IMG-20250819-WA0033.jpg", url: "productaccesorios2.html?id=241" },
{ id: 242, name: "Mando a distancia", priceDescuento: "$9.00", image: "../img/accesorios tv/IMG-20250819-WA0034.jpg", url: "productaccesorios2.html?id=242" },
{ id: 243, name: "Soporte de TV de 37 a 70 Pulgadas", priceDescuento: "$19.00", image: "../img/accesorios tv/IMG-20250819-WA0036.jpg", url: "productaccesorios2.html?id=243" },
{ id: 244, name: "Control Remoto LG SMART TV", priceDescuento: "$10.00", image: "../img/accesorios tv/IMG-20250819-WA0037.jpg", url: "productaccesorios2.html?id=244" },

    ];

    // ==========================
    // panel del carrito 
    // ==========================
 
 (function initCart() {
      const cartKey = 'shoppingCart';

      function getCart() {
        return safeParseJSON(localStorage.getItem(cartKey), []);
      }

      function saveCart(cart) {
        try {
          localStorage.setItem(cartKey, JSON.stringify(cart));
        } catch (e) {
          console.warn('Error guardando carrito', e);
        }
      }

      function addToCart(product, quantity = 1) {
        const cart = getCart();
        const existing = cart.find(item => item.id === product.id);

        if (existing) {
          existing.quantity += quantity;
        } else {
          cart.push({ ...product, quantity });
        }

        saveCart(cart);
        updateCartUI();
        showNotification(`${product.name} agregado al carrito`);
      }

      function removeFromCart(productId) {
        let cart = getCart();
        cart = cart.filter(item => item.id !== productId);
        saveCart(cart);
        updateCartUI();
      }

      function updateCartUI() {
        const cart = getCart();
        const cartCountElem = document.querySelector('.cart-count');
        const cartItemsElem = document.querySelector('.cart-items');
        const cartTotalElem = document.getElementById('cart-total');

        if (!cartCountElem || !cartItemsElem || !cartTotalElem) return;

        const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
        cartCountElem.textContent = totalItems;
        cartCountElem.style.display = totalItems > 0 ? 'inline-flex' : 'none';

        cartItemsElem.innerHTML = '';
        let total = 0;

        if (cart.length === 0) {
          cartItemsElem.innerHTML = '<li style="text-align:center;color:#888;padding:20px;list-style:none;">Tu carrito está vacío</li>';
        } else {
          cart.forEach(item => {
            const li = document.createElement('li');
            const priceNum = parseFloat((item.priceDescuento || item.price || '0').toString().replace(/[^0-9.-]+/g, "")) || 0;
            total += priceNum * (item.quantity || 0);

            li.style.cssText = 'display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;padding:8px;background:#f9f9f9;border-radius:6px;list-style:none;';
            li.innerHTML = `
              <div style="flex:1;">
                <div style="font-weight:600;font-size:14px;">${item.name || 'Producto'}</div>
                <div style="font-size:13px;color:#666;">${item.quantity}x ${item.priceDescuento || item.price || '$0'}</div>
              </div>
              <button onclick="window.cart.removeFromCart(${item.id})" style="background:#ff3b3f;color:#fff;border:none;padding:5px 10px;border-radius:4px;cursor:pointer;font-size:12px;">âœ•</button>
            `;
            cartItemsElem.appendChild(li);
          });
        }

        cartTotalElem.textContent = `$${total.toFixed(2)}`;
      }

      function showNotification(message) {
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
          position: fixed;
          top: 100px;
          right: 20px;
          background: #1D1ABE;
          color: white;
          padding: 15px 20px;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          z-index: 10000;
          font-weight: 600;
          animation: slideInNotif 0.3s ease;
        `;
        document.body.appendChild(notification);

        const style = document.createElement('style');
        style.textContent = `
          @keyframes slideInNotif {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
        `;
        if (!document.querySelector('style[data-notif]')) {
          style.setAttribute('data-notif', 'true');
          document.head.appendChild(style);
        }

        setTimeout(() => {
          notification.style.opacity = '0';
          notification.style.transform = 'translateX(100%)';
          setTimeout(() => notification.remove(), 300);
        }, 2500);
      }

      // Panel del carrito
      const cartLink = document.querySelector('a[aria-label="Ver mi carrito de compras"]') || 
                        document.getElementById('cart-link');
      const cartPanel = document.querySelector('.cart-panel');

      if (cartLink && cartPanel) {
        cartLink.addEventListener('click', (e) => {
          e.preventDefault();
          cartPanel.style.display = cartPanel.style.display === 'none' ? 'block' : 'none';
        });

        document.addEventListener('click', (e) => {
          if (!cartPanel.contains(e.target) && !cartLink.contains(e.target)) {
            cartPanel.style.display = 'none';
          }
        });
      }

      // Exponer funciones globalmente
      window.cart = {
        addToCart,
        removeFromCart,
        updateCartUI,
        getCart
      };

      // Inicializar UI
      updateCartUI();
    })();



















    // ==========================
    // Menú Categorías (unificado)
    // ==========================
 
     (function initCategories() {
      const categoriesLabel = document.querySelector('.categories-label');
      const menuItems = document.querySelector('.menu-items');

      if (categoriesLabel && menuItems) {
        categoriesLabel.addEventListener('click', (e) => {
          e.stopPropagation();
          menuItems.classList.toggle('visible');
        });

        document.addEventListener('click', (e) => {
          if (!categoriesLabel.contains(e.target) && !menuItems.contains(e.target)) {
            menuItems.classList.remove('visible');
          }
        });

        categoriesLabel.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            menuItems.classList.toggle('visible');
          }
        });
      }
    })();
    // ==========================
    // Slider principal
    // ==========================
    (function initMainSlider() {
      const sliderTrack = document.querySelector('.slider-track');
      if (!sliderTrack) return;
      const sliderSlides = Array.from(sliderTrack.children || []);
      const sliderDots = Array.from(document.querySelectorAll('.carousel-dot'));
      const prevBtn = document.querySelector('.prev-slide');
      const nextBtn = document.querySelector('.next-slide');
      let currentIndex = 0;

      function updateDots() {
        if (!sliderDots || sliderDots.length === 0) return;
        sliderDots.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
      }

      function updateSlidePosition() {
        if (sliderSlides.length === 0) return;
        const slideWidth = sliderSlides[0].getBoundingClientRect().width || sliderTrack.clientWidth;
        sliderTrack.style.transition = 'transform 0.5s ease';
        sliderTrack.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
        updateDots();
      }

      sliderDots.forEach((dot, index) => dot.addEventListener('click', () => { currentIndex = index; updateSlidePosition(); }));
      if (prevBtn) prevBtn.addEventListener('click', () => { if (currentIndex > 0) { currentIndex--; updateSlidePosition(); } });
      if (nextBtn) nextBtn.addEventListener('click', () => { if (currentIndex < sliderSlides.length - 1) { currentIndex++; updateSlidePosition(); } });

      window.addEventListener('resize', debounce(updateSlidePosition, 150));
      updateSlidePosition();
    })();

    // ==========================
    // Swiper 
    // ==========================
    (function initSwiper() {
      if (!window.Swiper) return;
      try {
        window.mySwiper = new Swiper('.mySwiper', {
          slidesPerView: 1,
          spaceBetween: 20,
          loop: true,
          autoplay: { delay: 2500, disableOnInteraction: false },
          pagination: { el: '.swiper-pagination', clickable: true },
          navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
          breakpoints: { 600: { slidesPerView: 2 }, 900: { slidesPerView: 3 } }
        });
      } catch (e) { console.warn('Swiper init failed', e); }
    })();

    // ==========================
    // Blue Carousel (responsive + autoplay control)
    // ==========================
    (function initBlueCarousel() {
      const blueTrack = document.querySelector('.blue-carousel__track');
      const blueSlides = blueTrack ? Array.from(blueTrack.children) : [];
      const dotsContainer = document.querySelector('.blue-carousel__dots');
      if (!blueTrack || !dotsContainer || blueSlides.length === 0) return;

      let currentPage = 0;
      let slidesPerPage = 1;
      let pageCount = 1;
      let autoplayId = null;

      function calcPages() {
        const w = window.innerWidth;
        if (w < 600) slidesPerPage = 1;
        else if (w < 1024) slidesPerPage = 2;
        else slidesPerPage = 4;
        pageCount = Math.max(1, Math.ceil(blueSlides.length / slidesPerPage));
      }

      function buildDots() {
        dotsContainer.innerHTML = '';
        for (let i = 0; i < pageCount; i++) {
          const btn = document.createElement('button');
          btn.className = 'blue-carousel__dot';
          btn.setAttribute('role', 'tab');
          btn.setAttribute('aria-label', `Página ${i + 1}`);
          btn.dataset.index = i;
          if (i === currentPage) btn.classList.add('active');
          dotsContainer.appendChild(btn);
        }
      }

      function updateActiveDot() {
        dotsContainer.querySelectorAll('.blue-carousel__dot').forEach((d, i) => d.classList.toggle('active', i === currentPage));
      }

      function goToPage(i) {
        currentPage = (i + pageCount) % pageCount;
        const moveX = currentPage * (blueTrack.clientWidth / pageCount);
        blueTrack.style.transition = 'transform 0.5s ease';
        blueTrack.style.transform = `translateX(-${moveX}px)`;
        updateActiveDot();
      }

      function startAutoplay() { stopAutoplay(); autoplayId = setInterval(() => goToPage(currentPage + 1), 4000); }
      function stopAutoplay() { if (autoplayId) { clearInterval(autoplayId); autoplayId = null; } }

      dotsContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.blue-carousel__dot');
        if (!btn) return;
        stopAutoplay();
        goToPage(parseInt(btn.dataset.index, 10));
        startAutoplay();
      });

      window.addEventListener('resize', debounce(() => { stopAutoplay(); calcPages(); buildDots(); goToPage(currentPage); startAutoplay(); }, 150));

      calcPages();
      buildDots();
      goToPage(0);
      startAutoplay();
    })();

   
    // ==========================
    // BÚSQUEDA CON AUTOCOMPLETADO
    // ==========================
 (function initSearch() {
      const searchInput = document.getElementById('search');
      if (!searchInput) return;

      let dropdown = document.getElementById('autocompleteDropdown');
      if (!dropdown) {
        dropdown = document.createElement('div');
        dropdown.id = 'autocompleteDropdown';
        dropdown.style.cssText = `
          position: absolute;
          z-index: 1000;
          background: #fff;
          border: 1px solid #ddd;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          max-height: 350px;
          overflow-y: auto;
          display: none;
          width: 100%;
          margin-top: 8px;
          border-radius: 0 0 12px 12px;
          padding: 0;
        `;
        searchInput.parentNode.appendChild(dropdown);
      }

      function searchProducts(query) {
        query = normalizeText(query);
        if (!query) return [];
        return window.products.filter(prod =>
          normalizeText(prod.name).includes(query)
        ).slice(0, 8);
      }

      function renderDropdown(results, query) {
        if (!query || results.length === 0) {
          dropdown.innerHTML = `<div style="padding:12px;text-align:center;color:#888;">No hay resultados</div>`;
          dropdown.style.display = 'block';
          return;
        }

        dropdown.innerHTML = results.map(prod => `
          <div class="autocomplete-item" data-id="${prod.id}" style="display:flex;align-items:center;padding:8px 12px;cursor:pointer;gap:10px;border-bottom:1px solid #f0f0f0;">
            <img src="${prod.image || 'https://via.placeholder.com/40'}" alt="" style="width:40px;height:40px;object-fit:contain;border-radius:4px;">
            <div style="flex:1;">
              <div style="font-weight:600;font-size:14px;">${prod.name}</div>
              <div style="color:#1D1ABE;font-size:13px;">${prod.priceDescuento}</div>
            </div>
          </div>
        `).join('') +
          `<div class="autocomplete-viewall" style="padding:10px;text-align:center;cursor:pointer;color:#007bff;font-weight:bold;">Ver todo</div>`;
        dropdown.style.display = 'block';
      }

      let debounceTimer;
      searchInput.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          const query = searchInput.value;
          const results = searchProducts(query);
          renderDropdown(results, query);
        }, 200);
      });

      dropdown.addEventListener('click', (e) => {
        const item = e.target.closest('.autocomplete-item');
        if (item) {
          const productId = parseInt(item.dataset.id);
          const product = window.products.find(p => p.id === productId);
          if (product && product.url) {
            window.location.href = product.url;
          }
        }
        if (e.target.classList.contains('autocomplete-viewall')) {
          window.location.href = '/buscar.html?q=' + encodeURIComponent(searchInput.value);
        }
      });

      document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target) && e.target !== searchInput) {
          dropdown.style.display = 'none';
        }
      });

      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          searchInput.value = '';
          dropdown.style.display = 'none';
        }
      });
    })();










     (function initInfiniteSlider() {
      const tracks = document.querySelector('.slider-tracks');
      if (!tracks) return;
      const slidesOriginal = Array.from(tracks.children);
      if (slidesOriginal.length === 0) return;

      slidesOriginal.forEach(slide => tracks.appendChild(slide.cloneNode(true)));
      const slides = Array.from(tracks.children);
      let currentIndex2 = 0;
      const totalSlides2 = slidesOriginal.length;
      let autoplay2 = null;

      function getSlideWidth() { 
        return slides[0] ? slides[0].getBoundingClientRect().width : tracks.clientWidth; 
      }

      function updateSlidePosition2(transition = true) {
        tracks.style.transition = transition ? 'transform 0.5s ease' : 'none';
        const w = getSlideWidth();
        tracks.style.transform = `translateX(-${w * currentIndex2}px)`;
        updateDotsUI();
      }

      function updateDotsUI() {
        const dots2 = document.querySelectorAll('.carousel-dot');
        if (!dots2 || dots2.length === 0) return;
        dots2.forEach(d => d.classList.remove('active'));
        const idx = currentIndex2 % totalSlides2;
        if (dots2[idx]) dots2[idx].classList.add('active');
      }

      function moveToNext2() {
        currentIndex2++;
        updateSlidePosition2();
        if (currentIndex2 >= totalSlides2) {
          setTimeout(() => { 
            updateSlidePosition2(false); 
            currentIndex2 = 0; 
          }, 520);
        }
      }

      function moveToPrev2() {
        if (currentIndex2 === 0) {
          updateSlidePosition2(false);
          currentIndex2 = totalSlides2;
          setTimeout(() => { 
            currentIndex2--; 
            updateSlidePosition2(); 
          }, 20);
        } else { 
          currentIndex2--; 
          updateSlidePosition2(); 
        }
      }

      const prevBtn2 = document.querySelector('.prev-slide');
      const nextBtn2 = document.querySelector('.next-slide');

      if (nextBtn2) nextBtn2.addEventListener('click', () => { 
        moveToNext2(); 
        resetAutoplay(); 
      });
      
      if (prevBtn2) prevBtn2.addEventListener('click', () => { 
        moveToPrev2(); 
        resetAutoplay(); 
      });
      
      document.querySelectorAll('.carousel-dot').forEach((dot, i) => 
        dot.addEventListener('click', () => { 
          currentIndex2 = i; 
          updateSlidePosition2(); 
          resetAutoplay(); 
        })
      );

      function startAutoplay2() { 
        stopAutoplay2(); 
        autoplay2 = setInterval(moveToNext2, 3000); 
      }
      
      function stopAutoplay2() { 
        if (autoplay2) { 
          clearInterval(autoplay2); 
          autoplay2 = null; 
        } 
      }
      
      function resetAutoplay() { 
        stopAutoplay2(); 
        startAutoplay2(); 
      }

      window.addEventListener('resize', debounce(() => { 
        updateSlidePosition2(false); 
      }, 150));
      
      updateSlidePosition2();
      startAutoplay2();
    })();
    // ==========================
    // Carrito con localStorage
    // ==========================
    (function initCart() {
      const cartKey = 'shoppingCart';
      function getCart() { return safeParseJSON(localStorage.getItem(cartKey), []); }
      function saveCart(cart) { try { localStorage.setItem(cartKey, JSON.stringify(cart)); } catch (e) { console.warn('saveCart failed', e); } }

      function addToCart(product, quantity = 1) {
        const cart = getCart();
        const pid = product.id || product.dataProductId || ('p_' + (product.url || product.title || Math.random()).toString().slice(0, 12));
        const existing = cart.find(item => item.id === pid);
        if (existing) existing.quantity += quantity;
        else cart.push({ ...product, id: pid, quantity: quantity });
        saveCart(cart); updateCartUI();
      }

      function removeFromCart(productId) { let cart = getCart(); cart = cart.filter(item => item.id !== productId); saveCart(cart); updateCartUI(); }

      function updateCartUI() {
        const cart = getCart();
        const cartCountElem = document.querySelector('.cart-count');
        const cartItemsElem = document.querySelector('.cart-items');
        const cartTotalElem = document.getElementById('cart-total');
        if (!cartCountElem || !cartItemsElem || !cartTotalElem) return;
        cartCountElem.textContent = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
        cartItemsElem.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
          const li = document.createElement('li');
          li.textContent = `${item.name || 'Producto'} x${item.quantity} - ${item.priceDescuento || item.price || '$0'}`;
          const removeBtn = document.createElement('button');
          removeBtn.textContent = 'Eliminar';
          removeBtn.style.marginLeft = '10px';
          removeBtn.addEventListener('click', () => removeFromCart(item.id));
          li.appendChild(removeBtn);
          cartItemsElem.appendChild(li);
          const priceNum = parseFloat((item.priceDescuento || item.price || '0').toString().replace(/[^0-9.-]+/g, "")) || 0;
          total += priceNum * (item.quantity || 0);
        });
        cartTotalElem.textContent = `$${total.toFixed(2)}`;
      }

      window.cart = { addToCart, removeFromCart, updateCartUI, getCart };
      updateCartUI();

      const cartLink = document.querySelector('a[aria-label="Ver mi carrito de compras"]');
      const cartPanel = document.querySelector('.cart-panel');
      if (cartLink && cartPanel) {
        cartPanel.style.display = 'none';
        cartLink.addEventListener('click', (e) => { e.preventDefault(); cartPanel.style.display = cartPanel.style.display === 'none' ? 'block' : 'none'; });
        document.addEventListener('click', (e) => { if (!cartPanel.contains(e.target) && !cartLink.contains(e.target)) cartPanel.style.display = 'none'; });
      }
    })();

    // ==========================
    // Galería colecciones
    // ==========================
   (function initCollections() {

    // Función para manejar la previsualización al pasar el ratón (hover)
    function handleThumbnailHover(thumb, collection) {
        // 1. Crear el elemento de previsualización (el popover)
        let preview = collection.querySelector('.preview-popover');
        if (!preview) {
            preview = document.createElement('div');
            preview.className = 'preview-popover';
            collection.appendChild(preview);
        }

        // 2. Mostrar la previsualización al pasar el ratón (mouseenter)
        thumb.addEventListener('mouseenter', (e) => {
            const imgSrc = thumb.getAttribute('src');
            const imgAlt = thumb.getAttribute('alt');

            // Actualiza el contenido del popover con la imagen más grande
            preview.innerHTML = `<img src="${imgSrc}" alt="${imgAlt}">`;
            
            // Posiciona el popover (aparece justo encima/al lado de la miniatura)
            // Se usa getBoundingClientRect para obtener la posición exacta
            const rect = thumb.getBoundingClientRect();
            const collectionRect = collection.getBoundingClientRect();
            
            // Posicionamiento relativo a la sección de la colección
            preview.style.left = `${rect.left - collectionRect.left - 50}px`; // Ajuste horizontal
            preview.style.top = `${rect.top - collectionRect.top - 200}px`;  // Mueve la previsualización hacia arriba
            
            preview.classList.add('is-visible');
        });

        // 3. Ocultar la previsualización al salir del ratón (mouseleave)
        thumb.addEventListener('mouseleave', () => {
            preview.classList.remove('is-visible');
        });

        // Ocultar también si el ratón sale del popover
        preview.addEventListener('mouseleave', () => {
             preview.classList.remove('is-visible');
        });
    }

    // --- Lógica de inicialización original ---
    document.querySelectorAll('.collection').forEach(collection => {
        const mainImage = collection.querySelector('.main-image');
        const mainProductLink = collection.querySelector('.main-product-link a');
        const thumbnails = collection.querySelectorAll('.thumbnails img');
        let caption = collection.querySelector('.caption');

        if (!mainImage || !thumbnails.length) return;

        // ... [El código para crear el caption si no existe es el mismo] ...

        thumbnails.forEach(thumb => {
            // AÑADIDO: Llama a la nueva función de previsualización
            handleThumbnailHover(thumb, collection); 

            // Lógica de click (la funcionalidad de la vez anterior)
            thumb.addEventListener('click', () => {
                const newSrc = thumb.getAttribute('src');
                const newLink = thumb.closest('a') ? thumb.closest('a').getAttribute('href') : null;

                // Restablecer y establecer la clase activa
                thumbnails.forEach(t => t.classList.remove('is-active'));
                thumb.classList.add('is-active');

                // Actualizar la Imagen Principal y el Enlace Principal
                mainImage.setAttribute('src', newSrc);
                if (mainProductLink && newLink) {
                    mainProductLink.setAttribute('href', newLink);
                }

                // Actualizar la Descripción y aplicar la transición
                const newAlt = thumb.getAttribute('alt');
                if (newAlt) {
                     // ... [Lógica de descripción basada en ALT] ...
                    caption.textContent = `Vista previa: ${newAlt}`; 
                } else {
                    caption.textContent = 'Selecciona una imagen para ver detalles.';
                }
                
                mainImage.classList.add('fade-in');
                setTimeout(() => {
                    mainImage.classList.remove('fade-in');
                }, 300);
            });
        });

        if (thumbnails.length > 0) {
             thumbnails[0].classList.add('is-active');
        }
    });
})();

  }); // DOMContentLoaded end
})();
