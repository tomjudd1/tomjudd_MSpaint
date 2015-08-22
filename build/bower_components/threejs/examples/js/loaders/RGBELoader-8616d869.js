THREE.HDRLoader=THREE.RGBELoader=function(r){this.manager=void 0!==r?r:THREE.DefaultLoadingManager},THREE.RGBELoader.prototype=Object.create(THREE.BinaryTextureLoader.prototype),THREE.RGBELoader.prototype._parser=function(r){{var e=-1,a=1,t=2,n=3,i=4,o=function(r,o){switch(r){case a:console.error("THREE.RGBELoader Read Error: "+(o||""));break;case t:console.error("THREE.RGBELoader Write Error: "+(o||""));break;case n:console.error("THREE.RGBELoader Bad File Format: "+(o||""));break;default:case i:console.error("THREE.RGBELoader: Error: "+(o||""))}return e},s=1,d=2,f=4,E="\n",l=function(r,e,a){e=e?e:1024;for(var t=r.pos,n=-1,i=0,o="",s=128,d=String.fromCharCode.apply(null,new Uint16Array(r.subarray(t,t+s)));0>(n=d.indexOf(E))&&e>i&&t<r.byteLength;)o+=d,i+=d.length,t+=s,d+=String.fromCharCode.apply(null,new Uint16Array(r.subarray(t,t+s)));return n>-1?(!1!==a&&(r.pos+=i+n+1),o+d.slice(0,n)):!1},u=function(r){var e,t,i=/^#\?(\S+)$/,E=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,u=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,c=/^\s*FORMAT=(\S+)\s*$/,g=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,h={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};if(r.pos>=r.byteLength||!(e=l(r)))return o(a,"no header found");if(!(t=e.match(i)))return o(n,"bad initial token");for(h.valid|=s,h.programtype=t[1],h.string+=e+"\n";;){if(e=l(r),!1===e)break;if(h.string+=e+"\n","#"!==e.charAt(0)){if((t=e.match(E))&&(h.gamma=parseFloat(t[1],10)),(t=e.match(u))&&(h.exposure=parseFloat(t[1],10)),(t=e.match(c))&&(h.valid|=d,h.format=t[1]),(t=e.match(g))&&(h.valid|=f,h.height=parseInt(t[1],10),h.width=parseInt(t[2],10)),h.valid&d&&h.valid&f)break}else h.comments+=e+"\n"}return h.valid&d?h.valid&f?h:o(n,"missing image size specifier"):o(n,"missing format specifier")},c=function(r,e,t){var s,d,f,E,l,u,c,g,h,p,m,y,R,b=e,L=t;if(8>b||b>32767||2!==r[0]||2!==r[1]||128&r[2])return new Uint8Array(r);if(b!==(r[2]<<8|r[3]))return o(n,"wrong scanline width");if(s=new Uint8Array(4*e*t),!s||!s.length)return o(i,"unable to allocate buffer space");for(d=0,f=0,g=4*b,R=new Uint8Array(4),u=new Uint8Array(g);L>0&&f<r.byteLength;){if(f+4>r.byteLength)return o(a);if(R[0]=r[f++],R[1]=r[f++],R[2]=r[f++],R[3]=r[f++],2!=R[0]||2!=R[1]||(R[2]<<8|R[3])!=b)return o(n,"bad rgbe scanline format");for(c=0;g>c&&f<r.byteLength;){if(E=r[f++],y=E>128,y&&(E-=128),0===E||c+E>g)return o(n,"bad scanline data");if(y)for(l=r[f++],h=0;E>h;h++)u[c++]=l;else u.set(r.subarray(f,f+E),c),c+=E,f+=E}for(p=b,h=0;p>h;h++)m=0,s[d]=u[h+m],m+=b,s[d+1]=u[h+m],m+=b,s[d+2]=u[h+m],m+=b,s[d+3]=u[h+m],d+=4;L--}return s},g=new Uint8Array(r);g.byteLength}g.pos=0;var h=u(g);if(e!==h){var p=h.width,m=h.height,y=c(g.subarray(g.pos),p,m);if(e!==y)return{width:p,height:m,data:y,header:h.string,gamma:h.gamma,exposure:h.exposure,format:THREE.RGBEFormat,type:THREE.UnsignedByteType}}return null};