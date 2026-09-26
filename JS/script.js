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
      { id: 35, name: "Lenovo Yoga Tab Plus", priceDescuento: "$699.00", image: "../assets/images/tabletas/lenovo-yoga-tab.webp", url: "productabletas.html?id=35" },
  { id: 36, name: "Samsung Galaxy Tab S10 FE+", priceDescuento: "$579.50", image: "../assets/images/tabletas/samsung-galaxy-tab-s10-fe.webp", url: "productabletas.html?id=36" },
  { id: 37, name: "Xiaomi Pad 7 Pro", priceDescuento: "$639.50", image: "../assets/images/tabletas/xiami-pad-7.webp", url: "productabletas.html?id=37" },
  { id: 38, name: "Google Pixel Tablet", priceDescuento: "$529.00", image: "../assets/images/tabletas/google-pixle.webp", url: "productabletas.html?id=38" },
  { id: 39, name: "Huawei MatePad 11.5", priceDescuento: "$479.50", image: "../assets/images/tabletas/huawei.webp", url: "productabletas.html?id=39" },
  { id: 40, name: "iPad (2025)", priceDescuento: "$549.00", image: "../assets/images/tabletas/apple-ipad-11-inch.webp", url: "productabletas.html?id=40" },
  { id: 41, name: "Lenovo Tab M11", priceDescuento: "$479.00", image: "../assets/images/tabletas/lenovo-tab-m11.webp", url: "productabletas.html?id=41" },
  { id: 42, name: "Samsung Galaxy Tab A9", priceDescuento: "$469.00", image: "../assets/images/tabletas/a9-table.webp", url: "productabletas.html?id=42" },
  { id: 43, name: "Amazon Fire HD 10", priceDescuento: "$459.00", image: "../assets/images/tabletas/amanzo-10hd.webp", url: "productabletas.html?id=43" },
  { id: 44, name: "Amazon Fire 7", priceDescuento: "$449.00", image: "../assets/images/tabletas/amazon-fire-7.webp", url: "productabletas.html?id=44" },
  { id: 45, name: "Apple iPad mini (2024)", priceDescuento: "$579.00", image: "../assets/images/tabletas/apple-ipad-mini.webp", url: "productabletas.html?id=45" },

  { id: 16, name: "Nothing Phone 1", priceDescuento: "$690.00", image: "../assets/images/celulares/nothing-phone-1.webp", url: "productcelulares.html?id=16" },
  { id: 17, name: "Galaxy S24 ultra", priceDescuento: "$1000.00", image: "../assets/images/exclusivo/24blanco.webp", url: "productexclusivo.html?id=17" },
  { id: 18, name: "Galaxy A55 5G", priceDescuento: "$450.99", image: "../assets/images/celulares/galaxy-a-55-blanco.webp", url: "productcelulares.html?id=18" },
  { id: 19, name: "Iphone 16e", priceDescuento: "$800.50", image: "../assets/images/celulares/apple-s-iphone-16e-is-here-features-price-colors-more.webp", url: "productcelulares.html?id=19" },
  { id: 20, name: "Samsung Galaxy A36 5G", priceDescuento: "$549.00", image: "../assets/images/celulares/samsung-galaxy-a36-5g-128-gb-6-gb-awesome-white-neu-eu.webp", url: "productcelulares.html?id=20" },
  { id: 21, name: "Iphone 11 pro max", priceDescuento: "$404.50", image: "../assets/images/celulares/descarga.webp", url: "productcelulares.html?id=21" },
  { id: 22, name: "Iphone 12 pro max", priceDescuento: "$590.50", image: "../assets/images/celulares/iphone-13-pro-max.webp", url: "productcelulares.html?id=22" },
  { id: 23, name: "Iphone 14 pro max", priceDescuento: "$850.00", image: "../assets/images/celulares/iphone.webp", url: "productcelulares.html?id=23" },
  { id: 24, name: "Oppo A60", priceDescuento: "$180.50", image: "../assets/images/celulares/oppo-a60-blanco.webp", url: "productcelulares.html?id=24" },
  { id: 25, name: "Oneplus 12", priceDescuento: "$500.00", image: "../assets/images/celulares/oneplus-12-glacial-white.webp", url: "productcelulares.html?id=25" },
  { id: 26, name: "Samsung Galaxy Z flip 7 FE", priceDescuento: "$1100.50", image: "../assets/images/celulares/dimensiones-filtradas-del-galaxy-z-fold-7-y-galaxy-z-flip-7.webp", url: "productcelulares.html?id=26" },
  { id: 27, name: "VIVO X100 PRO", priceDescuento: "$850.50", image: "../assets/images/celulares/vivo-x100-pro-blanco.webp", url: "productcelulares.html?id=27" },
  { id: 28, name: "OPPO find X8", priceDescuento: "$800.00", image: "../assets/images/celulares/oppo-find-x8-pro-blanco.webp", url: "productcelulares.html?id=28" },
  { id: 29, name: "Samsung Galaxy A26 5G", priceDescuento: "$350.00", image: "../assets/images/celulares/samsung-galaxy-a26-5g-smartphone-exynos-1380-ecran-super.webp", url: "productcelulares.html?id=29" },
  { id: 30, name: "Oneplus 13", priceDescuento: "$600.00", image: "../assets/images/celulares/oneplus-13-5g-up-for-pre-order-on-amazon-uk.webp", url: "productcelulares.html?id=30" },

  { id: 46, name: "Sagencom D27", image: "../assets/images/telefonos-fijos/fijo-3.webp", priceDescuento: "$30.00", url: "productfijo.html?id=46" },
  { id: 47, name: "Panasonic 40s", image: "../assets/images/telefonos-fijos/fijo-4.webp", priceDescuento: "$34.00", url: "productfijo.html?id=47" },
  { id: 48, name: "philips 20t", image: "../assets/images/telefonos-fijos/fijo1.webp", priceDescuento: "$40.00", url: "productfijo.html?id=48" },
  { id: 49, name: "Gigaset 10gen", image: "../assets/images/telefonos-fijos/fijo10.webp", priceDescuento: "$39.00", url: "productfijo.html?id=49" },
  { id: 50, name: "gigaset 5gen", image: "../assets/images/telefonos-fijos/fijo11.webp", priceDescuento: "$33.00", url: "productfijo.html?id=50" },
  { id: 51, name: "Vtech 12l", image: "../assets/images/telefonos-fijos/fijo12.webp", priceDescuento: "$15.00", url: "productfijo.html?id=51" },
  { id: 52, name: "Vtech 10l", image: "../assets/images/telefonos-fijos/fijo13.webp", priceDescuento: "$35.00", url: "productfijo.html?id=52" },
  { id: 53, name: "Panasonic 20s", image: "../assets/images/telefonos-fijos/fijo14.webp", priceDescuento: "$50.00", url: "productfijo.html?id=53" },
  { id: 54, name: "Gigaset 7gen", image: "../assets/images/telefonos-fijos/fijo2.webp", priceDescuento: "$25.00", url: "productfijo.html?id=54" },
  { id: 55, name: "panasonic 10s", image: "../assets/images/telefonos-fijos/fijo5.webp", priceDescuento: "$15.00", url: "productfijo.html?id=55" },
  { id: 56, name: "Avaya 5progen", image: "../assets/images/telefonos-fijos/avaya-1416-digital-phone-1416-telephone-ip-office.webp", priceDescuento: "$24.00", url: "productfijo.html?id=56" },
  { id: 57, name: "Gigaset 8gen", image: "../assets/images/telefonos-fijos/fijo7.webp", priceDescuento: "$40.00", url: "productfijo.html?id=57" },
  { id: 58, name: "Gigaset 4gen", image: "../assets/images/telefonos-fijos/fijo8.webp", priceDescuento: "$36.00", url: "productfijo.html?id=58" },
  { id: 59, name: "Gigaset pro 12gen", image: "../assets/images/telefonos-fijos/fijo9.webp", priceDescuento: "$20.00", url: "productfijo.html?id=59" },
  { id: 60, name: "gigaset note 19gen", image: "../assets/images/telefonos-fijos/descarga.webp", priceDescuento: "$17.00", url: "productfijo.html?id=60" },

  { id: 1, name: "Adaptador OTG", image: "../assets/images/gadget/adaptador-otg.webp", priceDescuento: "$6.99", url: "productgadget.html?id=1" },
  { id: 2, name: "Anillo de luz", image: "../assets/images/gadget/anillo-de-luz.webp", priceDescuento: "$12.00", url: "productgadget.html?id=2" },
  { id: 3, name: "Cargador Inalambrico magnetico", image: "../assets/images/gadget/cargador-inalambrico-magnetic.webp", priceDescuento: "$9.00", url: "productgadget.html?id=3" },
  { id: 4, name: "control bluetooth para tomar fotos", image: "../assets/images/gadget/controle-remoto.webp", priceDescuento: "$8.00", url: "productgadget.html?id=4" },
  { id: 5, name: "guantes tactiles", image: "../assets/images/gadget/guantes-tactiless.webp", priceDescuento: "$18.00", url: "productgadget.html?id=5" },
  { id: 6, name: "Lampara para lectura", image: "../assets/images/gadget/lamapra-de-lentura.webp", priceDescuento: "$14.50", url: "productgadget.html?id=6" },
  { id: 7, name: "Lente macro", image: "../assets/images/gadget/lente-macro.webp", priceDescuento: "$19.50", url: "productgadget.html?id=7" },
  { id: 8, name: "soporte multiuso", image: "../assets/images/gadget/mobile-charger-holding.webp", priceDescuento: "$5.00", url: "productgadget.html?id=8" },
  { id: 9, name: "Powerban", image: "../assets/images/gadget/power-ban.webp", priceDescuento: "$25.50", url: "productgadget.html?id=9" },
  { id: 10, name: "soporte para telefonos", image: "../assets/images/gadget/sostenedor-de-telefono.webp", priceDescuento: "$7.00", url: "productgadget.html?id=10" },
  { id: 11, name: "Style pen", image: "../assets/images/gadget/style-pen.webp", priceDescuento: "$3.00", url: "productgadget.html?id=11" },
  { id: 12, name: "Soporte magnetico para carro", image: "../assets/images/gadget/suporte-magnetico.webp", priceDescuento: "$4.00", url: "productgadget.html?id=12" },
  { id: 13, name: "Teclado para telefono y tablets", image: "../assets/images/gadget/teclado-para-telefono-y-tables.webp", priceDescuento: "$22.00", url: "productgadget.html?id=13" },
  { id: 14, name: "Tripode para fotos", image: "../assets/images/gadget/tripode-flexible.webp", priceDescuento: "$7.00", url: "productgadget.html?id=14" },
  { id: 15, name: "funda para celular", image: "../assets/images/gadget/funda-con-espaco-para-accses.webp", priceDescuento: "$17.00", url: "productgadget.html?id=15" },

  { id: 76, name: "iPhone 14 Pro Max", priceDescuento: "$999.00", image: "../assets/images/exclusivo/iphone14-2.webp", url: "productexclusivo.html?id=76" },
{ id: 77, name: "iPad Air 5", priceDescuento: "$699.00", image: "../assets/images/exclusivo/ipadblanca.webp", url: "productexclusivo.html?id=77" },
{ id: 78, name: "Samsung Galaxy S24 Ultra", priceDescuento: "$1199.00", image: "../assets/images/exclusivo/24blanco.webp", url: "productexclusivo.html?id=78" },
{ id: 79, name: "Xiaomi Pad 6 Pro", priceDescuento: "$499.00", image: "../assets/images/exclusivo/xiaomi-pad-6.webp", url: "productexclusivo.html?id=79" },
{ id: 80, name: "Apple Watch Series 9", priceDescuento: "$429.00", image: "../assets/images/exclusivo/apleee-waht-9-series.webp", url: "productexclusivo.html?id=80" },
{ id: 81, name: "Sony WH-1000XM5", priceDescuento: "$349.00", image: "../assets/images/exclusivo/audisoni2.webp", url: "productexclusivo.html?id=81" },
{ id: 82, name: "GoPro HERO12 Black", priceDescuento: "$429.00", image: "../assets/images/exclusivo/gopro2.webp", url: "productexclusivo.html?id=82" },
{ id: 83, name: "Nintendo Switch OLED", priceDescuento: "$260.00", image: "../assets/images/exclusivo/oled.webp", url: "productexclusivo.html?id=83" },
{ id: 84, name: "DJI Mini 4 Pro", priceDescuento: "$849.00", image: "../assets/images/exclusivo/dron.webp", url: "productexclusivo.html?id=84" },
{ id: 85, name: "Logitech MX Master 3S", priceDescuento: "$99.00", image: "../assets/images/exclusivo/mouseamazon2.webp", url: "productexclusivo.html?id=85" },
{ id: 86, name: "Samsung Galaxy Tab A9", priceDescuento: "$799.00", image: "../assets/images/exclusivo/a9-blanca.webp", url: "productexclusivo.html?id=86" },
{ id: 87, name: "Amazon Echo Dot 5th Gen", priceDescuento: "$49.00", image: "../assets/images/exclusivo/bocina.webp", url: "productexclusivo.html?id=87" },

{ id: 88, name: "Xbox Series X", priceDescuento: "$349.00", image: "../assets/images/exclusivo/xboxblanco.webp", url: "productexclusivo2.html?id=88" },
{ id: 89, name: "Canon EOS R50", priceDescuento: "$899.00", image: "../assets/images/exclusivo/camera-canon-eos-r50-mirrorless-18-45mm-branca-br.webp", url: "productexclusivo2.html?id=89" },
{ id: 90, name: "Canon EOS R10", priceDescuento: "$899.00", image: "../assets/images/exclusivo/canon10.webp", url: "productexclusivo2.html?id=90" }, 
{ id: 91, name: "MacBook Pro M4", priceDescuento: "$1799.00", image: "../assets/images/exclusivo/silver-m4.webp", url: "productexclusivo2.html?id=91" },
{ id: 92, name: "Surface Pro 11", priceDescuento: "$1275.00", image: "../assets/images/exclusivo/surface-11-blanca.webp", url: "productexclusivo2.html?id=92" },
{ id: 93, name: "PlayStation 5", priceDescuento: "$559.00", image: "../assets/images/exclusivo/play-5.webp", url: "productexclusivo2.html?id=93" },
{ id: 94, name: "Galaxy Watch 6", priceDescuento: "$335.00", image: "prin/Smartwatch Watch6 Classic 43 Mm Bt Silver___.jpg", url: "productexclusivo2.html?id=94" },
{ id: 95, name: "JBL Vibe Bean", priceDescuento: "$40.00", image: "../assets/images/exclusivo/jbl-vibe-blancos.webp", url: "productexclusivo2.html?id=96" },
{ id: 97, name: "Razer Blade Stealth 13", priceDescuento: "$2656.00", image: "../assets/images/exclusivo/razer-blade-blanca.webp", url: "productexclusivo2.html?id=97" },
{ id: 98, name: "Bocina JBL Go 4", priceDescuento: "$60.00", image: "../assets/images/exclusivo/portatil-go-4-jbl-blanca-r-254-8.webp", url: "productexclusivo2.html?id=98" },
{ id: 99, name: "Fujifilm Instax Mini 12", priceDescuento: "$84.00", image: "../assets/images/exclusivo/instaxblanca.webp", url: "productexclusivo2.html?id=99" },
{ id: 100, name: "Fitbit Charge 6", priceDescuento: "$139.00", image: "../assets/images/exclusivo/fifitblanco.webp", url: "productexclusivo2.html?id=100" },

 { id: 101, name: "Audifonos JBL Synchros E50 BT", priceDescuento: "$130.05", url: "productaudifonos.html?id=101", image: "../assets/images/audifonos/audifonos-jbl-synchros-e50-bt-blanco.webp" },
  { id: 102, name: "Audifonos Bose Quietcomfort", priceDescuento: "$217.70", url: "productaudifonos.html?id=102", image: "../assets/images/audifonos/audifonos-bluetooth-quietcomfort-white-smoke.webp" },
  { id: 103, name: "Audifonos JBL Tune flex 2 con ANC", priceDescuento: "$89.90", url: "productaudifonos.html?id=103", image: "../assets/images/audifonos/jbl-tune-flex-true-wireless-noise-cancelling-earbuds-white.webp" },
  { id: 104, name: "Audifonos Gaming JBL Quantum 800", priceDescuento: "$124.05", url: "productaudifonos.html?id=104", image: "../assets/images/audifonos/suchawki-jbl-quantum-100p-nauszne.webp" },
  { id: 105, name: "Audifonos inalambricos JBL tune 520 Over Ear", priceDescuento: "$39.02", url: "productaudifonos.html?id=105", image: "../assets/images/audifonos/imagen.webp" },
  { id: 106, name: "JBL TUNE 120TWS", priceDescuento: "$84.15", url: "productaudifonos.html?id=106", image: "../assets/images/audifonos/jbl-tune-120tws.webp" },
  { id: 107, name: "Audifonos JBL 200 TWS", priceDescuento: "$64.00", url: "productaudifonos.html?id=107", image: "../assets/images/audifonos/jbl-200-tws.webp" },
  { id: 108, name: "Audifonos Sony WH-CH500", priceDescuento: "$84.00", url: "productaudifonos.html?id=108", image: "../assets/images/audifonos/win-sony-wh-ch500-wireless-bluetooth-nfc-on-ear-headphones.webp" },
  { id: 109, name: "Audifonos Inalambricos Sony WH-CH520", priceDescuento: "$53.12", url: "productaudifonos.html?id=109", image: "../assets/images/audifonos/audifonos-inalambricos-bluetooth-wh-ch520-blancos.webp" },
  { id: 110, name: "Audifonos Samsung Galaxy Buds 3 Pro", priceDescuento: "$134.00", url: "productaudifonos.html?id=110", image: "../assets/images/audifonos/galaxy-buds3-pro-white-samsung-chile.webp" },
  { id: 111, name: "Audifonos Samsung Buds 2 Pro", priceDescuento: "$45.00", url: "productaudifonos.html?id=111", image: "../assets/images/audifonos/buds-blancos.webp" },
  { id: 112, name: "Sony WF-1000XM4", priceDescuento: "$246.00", url: "productaudifonos.html?id=112", image: "../assets/images/audifonos/sony-wf-1000xm4-blanco.webp" },

 { id: 113, name: "Bose Acoustimass 10 seies IV", priceDescuento: "$559.03", url: "produc audio para el hogar.html?id=113", image: "../assets/images/audio-para-el-hogar/bose-acoustimass-10-home-entertainment-speaker-system-5-1.webp" },
  { id: 114, name: "Chaine HiFi Philips BTM3360 _ Darty", priceDescuento: "$117.41", url: "produc audio para el hogar.html?id=114", image: "../assets/images/audio-para-el-hogar/chaine-hifi-philips-btm3360-darty.webp" },
  { id: 115, name: "Harman Kardon BDS-3D753", priceDescuento: "$439.90", url: "produc audio para el hogar.html?id=115", image: "../assets/images/audio-para-el-hogar/harman-kardon-bds-3d753.webp" },
  { id: 116, name: "JBL Bar 9_1 True Wireless Surround with Dolby Atmos 820-Watt", priceDescuento: "$699.03", url: "produc audio para el hogar.html?id=116", image: "../assets/images/audio-para-el-hogar/minicomponente.webp" },
  { id: 117, name: "Microcomponente Sony CMT SBT40D 50W RMS", priceDescuento: "$184.26", url: "produc audio para el hogar.html?id=117", image: "../assets/images/audio-para-el-hogar/microcomponente-sony-cmt-sbt40d-50w-rms.webp" },
  { id: 118, name: "Samsung HT-H5550W", priceDescuento: "$280.00", url: "produc audio para el hogar.html?id=118", image: "../assets/images/audio-para-el-hogar/samsung-ht-h5550w-5-1-3d.webp" },
  { id: 119, name: "Sharp XL-BH530 CD Mini Shelf System", priceDescuento: "$279.02", url: "produc audio para el hogar.html?id=119", image: "../assets/images/audio-para-el-hogar/sharp-xl-bh530-cd-mini-shelf-system.webp" },
  { id: 120, name: "Sony modelo MHCSHAKEX3D", priceDescuento: "$261.23", url: "produc audio para el hogar.html?id=120", image: "../assets/images/audio-para-el-hogar/sony-modelo-mhcshakex3d-potencia-de-1200w-rms.webp" },
  { id: 121, name: "SAMSUNG - Mx-j630 - Home Cinema - 2", priceDescuento: "$323.19", url: "produc audio para el hogar.html?id=121", image: "../assets/images/audio-para-el-hogar/samsung-mx-j630-home-cinema-2-stereo.webp" },
  { id: 122, name: "MHC-GPX3_ME2 Salida 10400W .", priceDescuento: "$384.23", url: "produc audio para el hogar.html?id=122", image: "../assets/images/audio-para-el-hogar/mhc-gpx3-me2-salida-10400w-pmpo-950w-rms-bandeja-1-cd.webp" },
  { id: 123, name: "Altavoz LG LK72B", priceDescuento: "$119.02", url: "produc audio para el hogar.html?id=123", image: "../assets/images/audio-para-el-hogar/altavoz-lg-lk72b.webp" },
  { id: 124, name: "LG XBOOM CL87 2350W", priceDescuento: "$573.18", url: "produc audio para el hogar.html?id=124", image: "../assets/images/audio-para-el-hogar/lg-xboom-cl87-2350w.webp" },
  { id: 125, name: "LG CK43 XBOOM", priceDescuento: "$174.03", url: "produc audio para el hogar.html?id=125", image: "../assets/images/audio-para-el-hogar/lg-ck43-xboom.webp" },
  { id: 126, name: "LG XBOOM CL 98", priceDescuento: "$599.25", url: "produc audio para el hogar.html?id=126", image: "../assets/images/audio-para-el-hogar/lg-xboom-cl-98.webp" },
  { id: 127, name: "Panasonic SC-AKX18", priceDescuento: "$269.01", url: "produc audio para el hogar.html?id=127", image: "../assets/images/audio-para-el-hogar/panasonic-350w-bookshelf-stereo-system-black-sc-akx18.webp" },


  { id: 128, name: "Bocina jbl Boombox 3 Wi-Fi 80W negra", priceDescuento: "$498", image: "../assets/images/audio-personal/bocina-jbl-boombox-3-wi-fi-80w-negra.webp", url: "produc audiopersonal.html?id=128" },
  { id: 129, name: "Bocina jbl clip 4", priceDescuento: "$59.50", image: "../assets/images/audio-personal/bocina-jbl-clip-4-blanca.webp", url: "produc audiopersonal.html?id=129" },
  { id: 130, name: "Bocina jbl flip 6", priceDescuento: "$110.50", image: "../assets/images/audio-personal/jbl-flip-5-blanca.webp", url: "produc audiopersonal.html?id=130" },
  { id: 131, name: "Bocina jbl go3", priceDescuento: "$37.50", image: "../assets/images/audio-personal/bocina-jbl-go-3-blanca.webp", url: "produc audiopersonal.html?id=131" },
  { id: 132, name: "Bocina jbl GO4", priceDescuento: "$49", image: "../assets/images/audio-personal/bocina-jbl-go4-blanca.webp", url: "produc audiopersonal.html?id=132" },
  { id: 133, name: "Ultimate Ear Megaboom 3", priceDescuento: "$162", image: "../assets/images/audio-personal/ultimate-ear-megaboom-3-blanca.webp", url: "produc audiopersonal.html?id=133" },
  { id: 134, name: "Ultimate Ear Megaboom 4", priceDescuento: "$202.50", image: "../assets/images/audio-personal/ultimate-ear-megaboom-4-negra.webp", url: "produc audiopersonal.html?id=134" },
  { id: 135, name: "Ultimate Ears Wonderboom", priceDescuento: "$77", image: "../assets/images/audio-personal/ultimate-ears-wonderboom-negra.webp", url: "produc audiopersonal.html?id=135" },
  { id: 136, name: "Sony SRS-XB100", priceDescuento: "$57.40", image: "../assets/images/audio-personal/sony-srs-xb100-negra.webp", url: "produc audiopersonal.html?id=136" },
  { id: 137, name: "JBL Charge 6", priceDescuento: "$153", image: "../assets/images/audio-personal/jbl-charge-6-blanca.webp", url: "produc audiopersonal.html?id=137" },
  { id: 138, name: "Bocina JBL Flip 5", priceDescuento: "$103.20", image: "../assets/images/audio-personal/jbl-flip-5-negra.webp", url: "produc audiopersonal.html?id=138" },
  { id: 139, name: "Sony ULT Field 5", priceDescuento: "$270", image: "../assets/images/audio-personal/sony-ult-field-5-blanca.webp", url: "produc audiopersonal.html?id=139" },

  { id: 140, name: "Altavoz JBL 1100 W Bluetooth", priceDescuento: "$1,749.00", url: "produc audio profecional.html?id=140", image: "../assets/images/audio-pro/altavoz-jbl-1100-w-bluetooth-negro-partybox-ultimate-le.webp" },
  { id: 141, name: "Micrófono inalámbrico 330158", priceDescuento: "$33.99", url: "produc audio profecional.html?id=141", image: "../assets/images/audio-pro/microfono-inalambrico-radioshack-negro-3301587-le-upscale.webp" },
  { id: 142, name: "Micrófono USB para transmisión con filtro", priceDescuento: "$42.49", url: "produc audio profecional.html?id=142", image: "../assets/images/audio-pro/microfono-usb-para-transmision-con-filtro-radioshack-negro.webp" },
  { id: 143, name: "Parlante de torre 4001942 150 W", priceDescuento: "$189.99", url: "produc audio profecional.html?id=143", image: "../assets/images/audio-pro/parlante-de-torre-radioshack-4001942-150-w-le-upscale.webp" },
  { id: 144, name: "Parlante LG XBOOM RNC7 420 W Bluetooth", priceDescuento: "$279.00", url: "produc audio profecional.html?id=144", image: "../assets/images/audio-pro/parlante-lg-xboom-rnc7-420-w-bluetooth-negro-le-upscale.webp" },
  { id: 145, name: "Parlante Activo 4001923 60 W Bluetooth", priceDescuento: "$129.99", url: "produc audio profecional.html?id=145", image: "../assets/images/audio-pro/parlante-radioshack-activo-4001923-60-w-bluetooth-negro-le.webp" },
  { id: 146, name: "Parlante Sony 1000 Watts Bluetooth SRSULT1000", priceDescuento: "$969.00", url: "produc audio profecional.html?id=146", image: "../assets/images/audio-pro/parlante-sony-1000-watts-bluetooth-negro-srsult1000-le.webp" },
  { id: 147, name: "Parlantes Activo dual 500 W Bluetooth", priceDescuento: "$89.99", url: "produc audio profecional.html?id=147", image: "../assets/images/audio-pro/parlantes-radioshack-activo-dual-500-w-bluetooth-negro-le.webp" },
  { id: 148, name: "Sistema de micrófono inalámbrico DJI Mic Mini", priceDescuento: "$225.00", url: "produc audio profecional.html?id=148", image: "../assets/images/audio-pro/sistema-de-microfono-inalambrico-dji-negro-mic-mini-le.webp" },
  { id: 149, name: "Sistema de micrófonos inalámbricos", priceDescuento: "$80.99", url: "produc audio profecional.html?id=149", image: "../assets/images/audio-pro/sistema-de-microfonos-inalambricos-radioshack-negro-le.webp" },
  { id: 150, name: "Micrófono 2607050", priceDescuento: "$29.99", url: "produc audio profecional.html?id=150", image: "../assets/images/audio-pro/microfono-radioshack-2607050-le-upscale-balanced-x4-tone.webp" },
  { id: 151, name: "Megáfono 3202715 25 W", priceDescuento: "$17.99", url: "produc audio profecional.html?id=151", image: "../assets/images/audio-pro/megafono-radioshack-3202715-25-w-blanco-y-rojo-le-upscale.webp" },
  { id: 152, name: "Megáfono 3202716 75W", priceDescuento: "$49.99", url: "produc audio profecional.html?id=152", image: "../assets/images/audio-pro/megafono-radioshack-3202716-75w-blanco-con-azul-le-upscale.webp" },
  { id: 153, name: "Karaoke Portátil 4001970", priceDescuento: "$29.99", url: "produc audio profecional.html?id=153", image: "../assets/images/audio-pro/karaoke-portatil-radioshack-4001970-negro-le-upscale.webp" },
  { id: 154, name: "Altavoz tipo torre 240 W Bluetooth", priceDescuento: "$225.01", url: "produc audio profecional.html?id=154", image: "../assets/images/audio-pro/altavoz-tipo-torre-radioshack-240-w-bluetooth-negro-le.webp" },



  { id: 155, name: "Spectra Vision Pro (Blanco)", priceDescuento: "$24.00", url: "productaccesorios.html?id=155", image: "../assets/images/accesorios-gaming/gafas-blancas.webp" },
  { id: 156, name: "Spectra Vision Pro (Negro)", priceDescuento: "$25.60", url: "productaccesorios.html?id=156", image: "../assets/images/accesorios-gaming/gafas-negras.webp" },
  { id: 157, name: "Aurelius X2 Wireless (Azul)", priceDescuento: "$36.00", url: "productaccesorios.html?id=157", image: "../assets/images/accesorios-gaming/audifonos-azul.webp" },
  { id: 158, name: "Aurelius X2 Wireless (Morado)", priceDescuento: "$40.00", url: "productaccesorios.html?id=158", image: "../assets/images/accesorios-gaming/audifonos-morados.webp" },
  { id: 159, name: "Aurelius X2 Wireless (Rojo)", priceDescuento: "$44.00", url: "productaccesorios.html?id=159", image: "../assets/images/accesorios-gaming/audifonos-rojos.webp" },
  { id: 160, name: "Logitech G733 Wireless", priceDescuento: "$72.00", url: "productaccesorios.html?id=160", image: "../assets/images/accesorios-gaming/logitech-auriculares-inalambricos-g733.webp" },
  { id: 161, name: "RedWave Studio USB Mic", priceDescuento: "$48.00", url: "productaccesorios.html?id=161", image: "../assets/images/accesorios-gaming/microfono-rojo.webp" },
  { id: 162, name: "Nebula M7 (Azul)", priceDescuento: "$22.40", url: "productaccesorios.html?id=162", image: "../assets/images/accesorios-gaming/mouse-azul.webp" },
  { id: 163, name: "Nebula M7 RGB", priceDescuento: "$28.00", url: "productaccesorios.html?id=163", image: "../assets/images/accesorios-gaming/mouse-rgb-usb.webp" },
  { id: 164, name: "Spectra SunShield", priceDescuento: "$32.00", url: "productaccesorios.html?id=164", image: "../assets/images/accesorios-gaming/gafas-blancas.webp" },
  { id: 165, name: "Spectra UV Shield", priceDescuento: "$30.40", url: "productaccesorios.html?id=165", image: "../assets/images/accesorios-gaming/gafas-negras.webp" },
  { id: 166, name: "900° Racing Pedal Pro", priceDescuento: "$96.00", url: "productaccesorios.html?id=166", image: "../assets/images/accesorios-gaming/hot-sale-900-degree-pedal-and-gear-gaming-racing.webp" },
  { id: 167, name: "Titan Switchboard Pro", priceDescuento: "$48.00", url: "productaccesorios.html?id=167", image: "../assets/images/accesorios-gaming/teclado-rgb-sin-mouse.webp" },
  { id: 168, name: "Titan Mini RGB 60%", priceDescuento: "$36.00", url: "productaccesorios.html?id=168", image: "../assets/images/accesorios-gaming/teclado-rgb.webp" },
  { id: 169, name: "Titan Switchboard Pro (Edición Morada)", priceDescuento: "$56.00", url: "productaccesorios.html?id=169", image: "../assets/images/accesorios-gaming/teclado-morado.webp" },

{ id: 170, name: "Silla Gamer Elite", priceDescuento: "$135.00", url: "productgaming.html?id=170", image: "../assets/images/sillas/gamer-set-up-silla-gamer-black.webp" },
{ id: 171, name: "Silla Gamer Pro", priceDescuento: "$153.00", url: "productgaming.html?id=171", image: "../assets/images/sillas/silla.webp" },
{ id: 172, name: "Silla Gamer Comfort", priceDescuento: "$160.00", url: "productgaming.html?id=172", image: "../assets/images/sillas/descubre-la-comodidad-definitiva-para-tus.webp" },
{ id: 173, name: "Escritorio Gamer ThunderX3", priceDescuento: "$187.50", url: "productgaming.html?id=173", image: "../assets/images/sillas/thunderx3-mesa-gaming-con-iluminacion-rgb-y.webp" },
{ id: 174, name: "Silla Gamer Premium", priceDescuento: "$210.00", url: "productgaming.html?id=174", image: "../assets/images/sillas/cadeira-gamer-black-hawk-com-apoio-cervical.webp" },
{ id: 175, name: "Silla Gamer Ergonomía", priceDescuento: "$187.00", url: "productgaming.html?id=175", image: "../assets/images/sillas/amazon-com-respawn-110-ergonomic-gaming-chair.webp" },
{ id: 176, name: "Escritorio Gamer Esquinero ShadowEdge", priceDescuento: "$140.00", url: "productgaming.html?id=176", image: "../assets/images/sillas/mesa-blanca.webp" },
{ id: 177, name: "Silla Gamer Dowinx Pro", priceDescuento: "$144.00", url: "productgaming.html?id=177", image: "../assets/images/sillas/cadeira-gamer-ii-reclinavel-180o-giratoria-preta.webp" },
{ id: 178, name: "Silla Gamer Deluxe", priceDescuento: "$210.00", url: "productgaming.html?id=178", image: "../assets/images/sillas/silla-con-celeste.webp" },
{ id: 179, name: "Escritorio Gamer Elevado", priceDescuento: "$110.50", url: "productgaming.html?id=179", image: "../assets/images/sillas/b5b12714-deb1-4521-9490-9a9920721246.webp" },
{ id: 180, name: "Silla Gamer ThunderX3 STYLE", priceDescuento: "$192.00", url: "productgaming.html?id=180", image: "../assets/images/sillas/thunderx3-spain-professional-gaming-chair-bc3-blue.webp" },
{ id: 181, name: "Escritorio Gamer Esquinero BlackFire", priceDescuento: "$161.50", url: "productgaming.html?id=181", image: "../assets/images/sillas/b94213bd-e8b1-470d-a72c-454406dda68d.webp" },
{ id: 182, name: "Escritorio Gamer Modular", priceDescuento: "$136.00", url: "productgaming.html?id=182", image: "../assets/images/sillas/mesa-amarilla.webp" },
{ id: 183, name: "Silla Gamer Merax Viper", priceDescuento: "$240.00", url: "productgaming.html?id=183", image: "../assets/images/sillas/prices-may-vary-ergonomic-design-of-gaming.webp" },
{ id: 184, name: "Silla Gamer Dowinx Sakura", priceDescuento: "$126.00", url: "productgaming.html?id=184", image: "../assets/images/sillas/silla-rosada.webp" },

{ id: 185, name: "Control Xbox", priceDescuento: "$55.00", url: "productosvideojuegos.html?id=185", image: "../assets/images/videojuegos/xbox-wireless-controller-dawn-shadow-special-edition.webp" },
{ id: 186, name: "Spider-Man 2 (PS5)", priceDescuento: "$65.00", url: "productosvideojuegos.html?id=186", image: "../assets/images/videojuegos/spiderman-2-ps5.webp" },
{ id: 187, name: "The Last of Us Part 2 (PS4)", priceDescuento: "$45.00", url: "productosvideojuegos.html?id=187", image: "../assets/images/videojuegos/the-las-of-us-part-2.webp" },
{ id: 188, name: "Mando Retro N64", priceDescuento: "$25.00", url: "productosvideojuegos.html?id=188", image: "../assets/images/videojuegos/miadore-retro-n-64-bit-n64-controller-wired-gamepad.webp" },
{ id: 189, name: "Control PS5 DualSense", priceDescuento: "$65.00", url: "productosvideojuegos.html?id=189", image: "../assets/images/videojuegos/control-ps5.webp" },
{ id: 190, name: "Control DualShock 4", priceDescuento: "$55.00", url: "productosvideojuegos.html?id=190", image: "../assets/images/videojuegos/control-de-ps4.webp" },
{ id: 191, name: "Marvel's Spider-Man Miles Morales PS4", priceDescuento: "$35.00", url: "productosvideojuegos.html?id=191", image: "../assets/images/videojuegos/marvel-s-spider-man-miles-morales.webp" },
{ id: 192, name: "Control Xbox One Fat 500GB", priceDescuento: "$230.00", url: "productosvideojuegos.html?id=192", image: "../assets/images/videojuegos/xbox-one-fat-500gb-completo-frete-gratis-leia-toda.webp" },
{ id: 193, name: "Mortal Kombat X", priceDescuento: "$45.00", url: "productosvideojuegos.html?id=193", image: "../assets/images/videojuegos/mortal-kombat-x.webp" },
{ id: 194, name: "PlayStation 2 (PS2)", priceDescuento: "$85.00", url: "productosvideojuegos.html?id=194", image: "../assets/images/videojuegos/playstation-2-ps2.webp" },
{ id: 195, name: "Nintendo Switch (Neon Red/Neon Blue)", priceDescuento: "$280.00", url: "productosvideojuegos.html?id=195", image: "../assets/images/videojuegos/nintendo-switch-neon-red-neon-blue.webp" },
{ id: 196, name: "PlayStation 3", priceDescuento: "$120.00", url: "productosvideojuegos.html?id=196", image: "../assets/images/videojuegos/sony-ps3.webp" },
{ id: 197, name: "Viernes 13 (PS5)", priceDescuento: "$56.00", url: "productosvideojuegos.html?id=197", image: "../assets/images/videojuegos/viernes-13.webp" },
{ id: 198, name: "Xbox Series S", priceDescuento: "$255.00", url: "productosvideojuegos.html?id=198", image: "../assets/images/videojuegos/xbox-series-s.webp" },
{ id: 199, name: "PS5", priceDescuento: "$630.00", url: "productosvideojuegos.html?id=199", image: "../assets/images/videojuegos/playstation-5-console.webp" },


{ id: 200, name: "ASUS TUF Gaming Laptop",  image: "../assets/images/laptops/power-and-performance-with-the-asus-tuf-gaming.webp", priceDescuento: "$760.00", url: "productslaptops.html?id=200" },
{ id: 201, name: "Lenovo ThinkPad T14s Gen 3",  image: "../assets/images/laptops/the-thinkpad-t14s-gen-3-has-all-you-need-to-get.webp",priceDescuento: "$748.00", url: "productslaptops.html?id=201" },
{ id: 202, name: "ASUS ZenBook / ROG Strix", image: "../assets/images/laptops/asus-zenbook-13-ultra-slim-laptop-13-3-fhd.webp", priceDescuento: "$1,148.00", url: "productslaptops.html?id=202" },
{ id: 203, name: "Lenovo Legion Gaming Laptop", image: "../assets/images/laptops/lenovo-legion-5-15-gaming-laptop.webp", priceDescuento: "$975.00", url: "productslaptops.html?id=203" },
{ id: 204, name: "Acer Nitro Gaming Laptop",image: "../assets/images/laptops/notebook-acer-gamer-nitro-v15-anv15-51-7837.webp", priceDescuento: "$880.00", url: "productslaptops.html?id=204" },
{ id: 205, name: "MSI GE62VR Apache Pro", image: "../assets/images/laptops/msi-ge62vr-apache-pro-gaming-laptop-intel-coretm.webp", priceDescuento: "$1,120.50", url: "productslaptops.html?id=205" },
{ id: 206, name: "Alienware M18 R2", image: "../assets/images/laptops/alienware-m18-r2-gaming-laptop.webp", priceDescuento: "$850.50", url: "productslaptops.html?id=206" },
{ id: 207, name: "ACEMAGIC Metal Series Laptop",image: "../assets/images/laptops/limited-time-deal-acemagic-laptop-computer-16gb.webp" , priceDescuento: "$616.20", url: "productslaptops.html?id=207" },
{ id: 208, name: "Lenovo LOQ Gaming Laptop", image: "../assets/images/laptops/latest-lenovo-loq-15irh8-gaming-laptop-gives-you-a.webp" , priceDescuento: "$840.00", url: "productslaptops.html?id=208" },
{ id: 209, name: "MSI Gaming Laptop",image: "../assets/images/laptops/msi-ge62vr-apache-pro-gaming-laptop-intel-coretm.webp", priceDescuento: "$1,020.00", url: "productslaptops.html?id=209" },
{ id: 210, name: "MSI Vector Gaming Laptop",image: "../assets/images/laptops/laptop-mit-18-qwuxga-display-intel-core.webp", priceDescuento: "$1,290.00", url: "productslaptops.html?id=210" },
{ id: 211, name: "MSI Raider GE Gaming Laptop",image: "../assets/images/laptops/now-is-the-time-to-score-the-hottest-holiday-deals.webp", priceDescuento: "$1,740.00", url: "productslaptops.html?id=211" },
{ id: 212, name: "HP Omen Gaming Laptop", image: "../assets/images/laptops/hp-omen-16-16-1-fhd-165hz-gaming-laptop-intel.webp",priceDescuento: "$1,760.00", url: "productslaptops.html?id=212" },
{ id: 213, name: "MSI Gaming Laptop (Ryzen)", image: "../assets/images/laptops/latest-amd-ryzen-5-7430u-processors-is-here-the.webp" ,priceDescuento: "$1,530.00", url: "productslaptops.html?id=213" },
{ id: 214, name: "ASUS TUF Gaming Laptop (144Hz)", image: "../assets/images/laptops/asus.webp", priceDescuento: "$1,312.00", url: "productslaptops.html?id=214" },

{ id: 215, name: "SAMSUNG UHD 4K", priceDescuento: "$800.99", image: "../assets/images/tv/img-2025-08-12-a-las-19-31-49-453e839d.webp", url: "productvideos.html?id=215" },
{ id: 216, name: "DYNAMIC CRYSTAL COLOUR", priceDescuento: "$750.00", image: "../assets/images/tv/img-20250723-wa0004.webp", url: "productvideos.html?id=216" },
{ id: 217, name: "SAMSUNG UHP", priceDescuento: "$330.00", image: "../assets/images/tv/img-20250723-wa0005.webp", url: "productvideos.html?id=217" },
{ id: 218, name: "LG UHP", priceDescuento: "$450.00", image: "../assets/images/tv/img-20250812-wa0064.webp", url: "productvideos.html?id=218" },
{ id: 219, name: "SONY", priceDescuento: "$375.00", image: "../assets/images/tv/img-20250812-wa0065.webp", url: "productvideos.html?id=219" },
{ id: 220, name: "LG SMART TV", priceDescuento: "$430.50", image: "../assets/images/tv/img-20250812-wa0067.webp", url: "productvideos.html?id=220" },
{ id: 221, name: "NOC-ROKU TV", priceDescuento: "$679.50", image: "../assets/images/tv/img-20250812-wa0069.webp", url: "productvideos.html?id=221" },
{ id: 222, name: "HISENSE TV", priceDescuento: "$995.00", image: "../assets/images/tv/img-20250812-wa0086.webp", url: "productvideos.html?id=222" },
{ id: 223, name: "TD SYSTEMS TV", priceDescuento: "$259.50", image: "../assets/images/tv/img-20250812-wa0087.webp", url: "productvideos.html?id=223" },
{ id: 224, name: "TCL TV", priceDescuento: "$600.00", image: "../assets/images/tv/img-20250812-wa0088.webp", url: "productvideos.html?id=224" },
{ id: 225, name: "SAMSUNG TV PLUS", priceDescuento: "$800.00", image: "../assets/images/tv/img-20250812-wa0089.webp", url: "productvideos.html?id=225" },
{ id: 226, name: "TUTU TV 42", priceDescuento: "$680.00", image: "../assets/images/tv/img-20250812-wa0090.webp", url: "productvideos.html?id=226" },
{ id: 227, name: "SAMSUNG TV", priceDescuento: "$622.00", image: "../assets/images/tv/samsung-2020.webp", url: "productvideos.html?id=227" },
{ id: 228, name: "SAMSUNG TV 4K", priceDescuento: "$480.00", image: "../assets/images/tv/samsung-4k-uhd.webp", url: "productvideos.html?id=228" },
{ id: 229, name: "SAMSUNG SMART TV", priceDescuento: "$550.00", image: "../assets/images/tv/samsung-uhd.webp", url: "productvideos.html?id=229" },

{ id: 230, name: "Convertidor de AV (RCA) a HDMI", priceDescuento: "$12.00", image: "../assets/images/accesorios-tv/img-20250819-wa0019.webp", url: "productaccesorios2.html?id=230" },
{ id: 231, name: "Klip Xtreme, modelo KPM", priceDescuento: "$30.00", image: "../assets/images/accesorios-tv/img-20250819-wa0020.webp", url: "productaccesorios2.html?id=231" },
{ id: 232, name: "LG Magic Remote", priceDescuento: "$84.00", image: "../assets/images/accesorios-tv/img-20250819-wa0021.webp", url: "productaccesorios2.html?id=232" },
{ id: 233, name: "Convertidor de RCA a HDMI", priceDescuento: "$13.00", image: "../assets/images/accesorios-tv/img-20250819-wa0022.webp", url: "productaccesorios2.html?id=233" },
{ id: 234, name: "Cable HDMI 4k PoerBear", priceDescuento: "$8.00", image: "../assets/images/accesorios-tv/img-20250819-wa0023.webp", url: "productaccesorios2.html?id=234" },
{ id: 235, name: "Soporte de pared para TV", priceDescuento: "$33.50", image: "../assets/images/accesorios-tv/img-20250819-wa0024.webp", url: "productaccesorios2.html?id=235" },
{ id: 236, name: "Soporte de pared TV de 32 pulgadas", priceDescuento: "$29.50", image: "../assets/images/accesorios-tv/img-20250819-wa0025.webp", url: "productaccesorios2.html?id=236" },
{ id: 237, name: "Cable AV (Audios/videos)", priceDescuento: "$18.00", image: "../assets/images/accesorios-tv/img-20250819-wa0026.webp", url: "productaccesorios2.html?id=237" },
{ id: 238, name: "Control remoto PIX 6428", priceDescuento: "$27.50", image: "../assets/images/accesorios-tv/img-20250819-wa0027.webp", url: "productaccesorios2.html?id=238" },
{ id: 239, name: "Adaptador de HDMI MinI", priceDescuento: "$7.00", image: "../assets/images/accesorios-tv/img-20250819-wa0028.webp", url: "productaccesorios2.html?id=239" },
{ id: 240, name: "Amazon fire TV Stick Lite", priceDescuento: "$39.00", image: "../assets/images/accesorios-tv/img-20250819-wa0029.webp", url: "productaccesorios2.html?id=240" },
{ id: 241, name: "Soporte de TV de 26 a 55 pulgadas", priceDescuento: "$20.00", image: "../assets/images/accesorios-tv/img-20250819-wa0033.webp", url: "productaccesorios2.html?id=241" },
{ id: 242, name: "Mando a distancia", priceDescuento: "$9.00", image: "../assets/images/accesorios-tv/img-20250819-wa0034.webp", url: "productaccesorios2.html?id=242" },
{ id: 243, name: "Soporte de TV de 37 a 70 Pulgadas", priceDescuento: "$19.00", image: "../assets/images/accesorios-tv/img-20250819-wa0036.webp", url: "productaccesorios2.html?id=243" },
{ id: 244, name: "Control Remoto LG SMART TV", priceDescuento: "$10.00", image: "../assets/images/accesorios-tv/img-20250819-wa0037.webp", url: "productaccesorios2.html?id=244" },

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
              <button onclick="window.cart.removeFromCart(${item.id})" style="background:#ff3b3f;color:#fff;border:none;padding:5px 10px;border-radius:4px;cursor:pointer;font-size:12px;">✕</button>
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
