(()=>{"use strict";var e,r={353:(e,r,n)=>{var t=n(2939),o=n(8613),a=n(5892),s=n(3601),i=n(7136),l=n(6734),c=n(6310),u=n(3126),p=(n(2113),n(261));const d=new a.Z({attributions:'© <a href="http://www.geo.admin.ch/internet/geoportal/en/home.html">National parks / geo.admin.ch</a>',crossOrigin:"anonymous",params:{LAYERS:"ch.bafu.schutzgebiete-paerke_nationaler_bedeutung"},projection:"EPSG:21781",url:"https://wms.geo.admin.ch/"});d.set("olcs.projection",(0,u.U2)("EPSG:3857")),Cesium.Ion.defaultAccessToken=p.x;const m=new c.Z({layers:[new l.Z({source:new s.Z}),new i.Z({source:d})],target:"map",view:new o.ZP({center:[860434.6266531206,6029479.0044273855],zoom:6})}),h=new t.Z({map:m,time:()=>Cesium.JulianDate.now()});h.getCesiumScene().terrainProvider=Cesium.createWorldTerrain(),h.setEnabled(!0),document.getElementById("enable").addEventListener("click",(()=>h.setEnabled(!h.getEnabled())))}},n={};function t(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return r[e].call(a.exports,a,a.exports,t),a.exports}t.m=r,e=[],t.O=(r,n,o,a)=>{if(!n){var s=1/0;for(c=0;c<e.length;c++){for(var[n,o,a]=e[c],i=!0,l=0;l<n.length;l++)(!1&a||s>=a)&&Object.keys(t.O).every((e=>t.O[e](n[l])))?n.splice(l--,1):(i=!1,a<s&&(s=a));i&&(e.splice(c--,1),r=o())}return r}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,o,a]},t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.j=924,(()=>{var e={924:0};t.O.j=r=>0===e[r];var r=(r,n)=>{var o,a,[s,i,l]=n,c=0;for(o in i)t.o(i,o)&&(t.m[o]=i[o]);if(l)var u=l(t);for(r&&r(n);c<s.length;c++)a=s[c],t.o(e,a)&&e[a]&&e[a][0](),e[s[c]]=0;return t.O(u)},n=self.webpackChunkol_cesium=self.webpackChunkol_cesium||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))})();var o=t.O(void 0,[351],(()=>t(353)));o=t.O(o)})();
//# sourceMappingURL=customProj.195b9700034b3ee13262.js.map