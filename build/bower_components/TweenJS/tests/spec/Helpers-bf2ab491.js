beforeEach(function(){this.baseAssetsPath="../_assets/",this.getFilePath=function(e){return"string"==typeof e?this.baseAssetsPath+e:this.baseAssetsPath+e.src},this.findClass=function(e){for(var t=document.styleSheets.length-1;t>=0;t--)for(var s=document.styleSheets[t].cssRules||document.styleSheets[t].rules||[],n=0;n<s.length;n++)if(s[n].selectorText===e)return!0;return!1};var e={toBeInRange:function(){return{compare:function(e,t,s){var n={};return s=s||0,n.pass=t+s>=e&&e>=t-s?!0:!1,n}}}};jasmine.addMatchers(e)});