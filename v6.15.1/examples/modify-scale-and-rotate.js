"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7545],{9709:function(e,t,n){var o=n(1376),r=n(4354),i=n(9039),c=n(7975),s=n(720),a=n(7138),f=n(4498),u=n(2365),m=n(1038),y=n(5469),g=n(3077),d=n(9847),l=n(5783),w=n(2010),Z=n(1372),h=n(6923),p=n(6104);const C=new w.Z({source:new d.Z}),G=new l.Z,E=new i.ZP({geometry:function(e){const t=e.get("modifyGeometry");return t?t.geometry:e.getGeometry()},fill:new c.Z({color:"rgba(255, 255, 255, 0.2)"}),stroke:new s.Z({color:"#ffcc33",width:2}),image:new a.Z({radius:7,fill:new c.Z({color:"#ffcc33"})})});function M(e){let t,n,o;const r=e.getType();if("Polygon"===r){let o=0,r=0,i=0;n=e.getCoordinates()[0].slice(1),n.forEach((function(e){o+=e[0],r+=e[1],i++})),t=[o/i,r/i]}else"LineString"===r?(t=e.getCoordinateAt(.5),n=e.getCoordinates()):t=(0,h.qg)(e.getExtent());let i;return n?(i=n.map((function(e){const n=e[0]-t[0],o=e[1]-t[1];return n*n+o*o})),o=Math.sqrt(Math.max.apply(Math,i))/3):o=Math.max((0,h.dz)(e.getExtent()),(0,h.Cr)(e.getExtent()))/3,{center:t,coordinates:n,minRadius:o,sqDistances:i}}const v=new Z.Z({source:G,style:function(e){const t=[E],n=e.get("modifyGeometry"),o=M(n?n.geometry:e.getGeometry()),r=o.center;if(r){t.push(new i.ZP({geometry:new y.Z(r),image:new a.Z({radius:4,fill:new c.Z({color:"#ff3333"})})}));const e=o.coordinates;if(e){const n=o.minRadius,r=o.sqDistances,s=n*n,f=e.filter((function(e,t){return r[t]>s}));t.push(new i.ZP({geometry:new g.Z(f),image:new a.Z({radius:4,fill:new c.Z({color:"#33cc33"})})}))}}return t}}),q=new o.Z({layers:[C,v],target:"map",view:new r.ZP({center:[-11e6,46e5],zoom:4})}),x=new f.Z({source:G}).getOverlay().getStyleFunction(),P=new f.Z({source:G,condition:function(e){return(0,p.Xp)(e)&&!(0,p.QC)(e)},deleteCondition:p.Fi,insertVertexCondition:p.Fi,style:function(e){return e.get("features").forEach((function(t){const n=t.get("modifyGeometry");if(n){const t=e.getGeometry().getCoordinates();let o=n.point;if(!o){o=t,n.point=o,n.geometry0=n.geometry;const e=M(n.geometry0);n.center=e.center,n.minRadius=e.minRadius}const r=n.center,i=n.minRadius;let c,s;c=o[0]-r[0],s=o[1]-r[1];const a=Math.sqrt(c*c+s*s);if(a>i){const e=Math.atan2(s,c);c=t[0]-r[0],s=t[1]-r[1];const o=Math.sqrt(c*c+s*s);if(o>0){const t=Math.atan2(s,c),i=n.geometry0.clone();i.scale(o/a,void 0,r),i.rotate(t-e,r),n.geometry=i}}}})),x(e)}});let k;P.on("modifystart",(function(e){e.features.forEach((function(e){e.set("modifyGeometry",{geometry:e.getGeometry().clone()},!0)}))})),P.on("modifyend",(function(e){e.features.forEach((function(e){const t=e.get("modifyGeometry");t&&(e.setGeometry(t.geometry),e.unset("modifyGeometry",!0))}))})),q.addInteraction(P),q.addInteraction(new u.Z({condition:function(e){return(0,p.Xp)(e)&&(0,p.QC)(e)},layers:[v]}));const I=document.getElementById("type");function R(){k=new m.ZP({source:G,type:I.value}),q.addInteraction(k)}I.onchange=function(){q.removeInteraction(k),R()},R()}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(9709)}]);
//# sourceMappingURL=modify-scale-and-rotate.js.map