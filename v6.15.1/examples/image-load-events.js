"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6070],{9032:function(t,e,o){var n=o(6291),i=o(5883),s=o(1376),d=o(4354);function a(t){this.el=t,this.loading=0,this.loaded=0}a.prototype.addLoading=function(){++this.loading,this.update()},a.prototype.addLoaded=function(){++this.loaded,this.update()},a.prototype.update=function(){const t=(this.loaded/this.loading*100).toFixed(1)+"%";this.el.style.width=t},a.prototype.show=function(){this.el.style.visibility="visible"},a.prototype.hide=function(){const t=this.el.style;setTimeout((function(){t.visibility="hidden",t.width=0}),250)};const r=new a(document.getElementById("progress")),c=new i.Z({url:"https://ahocevar.com/geoserver/wms",params:{LAYERS:"topp:states"},serverType:"geoserver"});c.on("imageloadstart",(function(){r.addLoading()})),c.on(["imageloadend","imageloaderror"],(function(){r.addLoaded()}));const l=new s.Z({layers:[new n.Z({source:c})],target:"map",view:new d.ZP({center:[-10997148,4569099],zoom:4})});l.on("loadstart",(function(){r.show()})),l.on("loadend",(function(){r.hide()}))}},function(t){var e=function(e){return t(t.s=e)};e(9877),e(9032)}]);
//# sourceMappingURL=image-load-events.js.map