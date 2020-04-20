(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{20:function(e,t,a){e.exports=a(52)},25:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),c=a.n(l),o=(a(25),a(6)),u=a(4),i=a.n(u),m=a(8),s=a(1);function h(e){var t=e.countries,a=e.handleCountry;if(!t)return"Loading...";var n=t.map((function(e,t){return r.a.createElement("option",{value:e.Country,key:t},e.Country)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Country Picker"),r.a.createElement("select",{onChange:function(e){a(e.target.value)},defaultValue:"DEFAULT"},r.a.createElement("option",{value:"DEFAULT",disabled:!0},"Choose a country..."),n))}function d(){var e=Date.now(),t=new Intl.DateTimeFormat("en",{year:"numeric",month:"short",day:"2-digit"}).formatToParts(e),a=Object(s.a)(t,5),n=a[0].value,l=a[2].value,c=a[4].value,o="".concat(l,"-").concat(n,"-").concat(c);return r.a.createElement("h5",null,o)}var E=a(3),f=a.n(E);function C(e){var t=e.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"New Confirmed"),r.a.createElement("th",null,"New Deaths"),r.a.createElement("th",null,"New Recovered"),r.a.createElement("th",null,"Total Confirmed"),r.a.createElement("th",null,"Total Deaths"),r.a.createElement("th",null,"Total Recovered")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(f.a,{start:0,end:t.NewConfirmed,duration:1.5,separator:","})),r.a.createElement("td",null,r.a.createElement(f.a,{start:0,end:t.NewDeaths,duration:1.5,separator:","})),r.a.createElement("td",null,r.a.createElement(f.a,{start:0,end:t.NewRecovered,duration:1.5,separator:","})),r.a.createElement("td",null,r.a.createElement(f.a,{start:0,end:t.TotalConfirmed,duration:1.5,separator:","})),r.a.createElement("td",null,r.a.createElement(f.a,{start:0,end:t.TotalDeaths,duration:1.5,separator:","})),r.a.createElement("td",null,r.a.createElement(f.a,{start:0,end:t.TotalRecovered,duration:1.5,separator:","}))))))}function v(e){var t=e.data;return t?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Global Stats"),r.a.createElement(d,null),r.a.createElement(C,{data:t})):null}a(32);function b(e){var t=e.data,a=t.Country,n=t.NewConfirmed,l=t.NewDeaths,c=t.NewRecovered,o=t.TotalConfirmed,u=t.TotalDeaths,i=t.TotalRecovered;return a?r.a.createElement("div",{className:"showTable"},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Country"),r.a.createElement("th",null,"New Confirmed"),r.a.createElement("th",null,"New Deaths"),r.a.createElement("th",null,"New Recovered"),r.a.createElement("th",null,"Total Confirmed"),r.a.createElement("th",null,"Total Deaths"),r.a.createElement("th",null,"Total Recovered")),r.a.createElement("tr",null,r.a.createElement("td",null,a.toLocaleString()),r.a.createElement("td",null,n.toLocaleString()),r.a.createElement("td",null,l.toLocaleString()),r.a.createElement("td",null,c.toLocaleString()),r.a.createElement("td",null,o.toLocaleString()),r.a.createElement("td",null,u.toLocaleString()),r.a.createElement("td",null,i.toLocaleString()))))):r.a.createElement("table",{className:"hideTable"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null),r.a.createElement("th",null),r.a.createElement("th",null),r.a.createElement("th",null),r.a.createElement("th",null),r.a.createElement("th",null)),r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",null),r.a.createElement("td",null),r.a.createElement("td",null),r.a.createElement("td",null),r.a.createElement("td",null),r.a.createElement("td",null),r.a.createElement("td",null))))}function p(e){var t=e.country;return r.a.createElement(b,{data:t})}a(33);function y(e){var t=e.countries,a=e.handleCountry,l=Object(n.useState)(t),c=Object(s.a)(l,2),u=c[0],i=c[1],m=Object(n.useState)(!0),h=Object(s.a)(m,2),d=h[0],E=h[1],f=Object(n.useState)(!0),C=Object(s.a)(f,2),v=C[0],b=C[1],p=Object(n.useState)(!0),y=Object(s.a)(p,2),w=y[0],D=y[1],g=Object(n.useState)(!0),T=Object(s.a)(g,2),O=T[0],j=T[1],S=Object(n.useState)(!1),N=Object(s.a)(S,2),k=N[0],L=N[1],F=function(e){return new Promise((function(){var a=Object(o.a)(t).sort((function(t,a){return"highDeath"===e?(E(!1),a.TotalDeaths-t.TotalDeaths):"lowDeath"===e?(E(!0),t.TotalDeaths-a.TotalDeaths):"highConfirm"===e?(b(!1),a.TotalConfirmed-t.TotalConfirmed):"lowConfirm"===e?(b(!0),t.TotalConfirmed-a.TotalConfirmed):"highDaily"===e?(j(!1),a.NewDeaths-t.NewDeaths):"lowDaily"===e?(j(!0),t.NewDeaths-a.NewDeaths):"alphaOrder"===e?(D(!1),t.Country.localeCompare(a.Country)):"nonAlphaOrder"===e?(D(!0),a.Country.localeCompare(t.Country)):null}));return i(a)})).then(L(!0))},R=function(e){return e.map((function(e,t){return r.a.createElement("tr",{key:t,onClick:function(){return function(e){a(e)}(e)},className:"table-row"},r.a.createElement("td",null,e.Country.toLocaleString()," "),r.a.createElement("td",null,e.TotalConfirmed.toLocaleString()),r.a.createElement("td",null,e.TotalDeaths.toLocaleString()),r.a.createElement("td",null,e.NewDeaths.toLocaleString()))}))};return t?r.a.createElement(r.a.Fragment,null,r.a.createElement("table",{className:"all-table-container"},r.a.createElement("tbody",{className:"all-table"},r.a.createElement("tr",null,w?r.a.createElement("th",{onClick:function(){return F("alphaOrder")}},"Country \u25bd"):r.a.createElement("th",{onClick:function(){return F("nonAlphaOrder")}},"Country \u25b3"),v?r.a.createElement("th",{onClick:function(){return F("highConfirm")}},"Total Confirmed \u25b3"):r.a.createElement("th",{onClick:function(){return F("lowConfirm")}},"Total Confirmed \u25bd"),d?r.a.createElement("th",{onClick:function(){return F("highDeath")}},"Total Deaths \u25b3"):r.a.createElement("th",{onClick:function(){return F("lowDeath")}},"Total Deaths \u25bd"),O?r.a.createElement("th",{onClick:function(){return F("highDaily")}},"Daily Death \u25b3"):r.a.createElement("th",{onClick:function(){return F("lowDaily")}},"Daily Death \u25bd")),R(k?u:t)))):null}function w(e){var t=e.countries,a=e.handleCountry;return r.a.createElement(y,{countries:t,handleCountry:a})}function D(e){var t=e.onSearch;return r.a.createElement("input",{placeholder:"Search...",onKeyUp:function(e){t(e.target.value)}})}function g(){return r.a.createElement("h1",null,"Covid-19 Tracker")}var T=a(19),O=a.n(T),j=function(){var e=Object(m.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("https://api.covid19api.com/summary");case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();a(51);var S=function(){var e=Object(n.useState)({}),t=Object(s.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)({}),u=Object(s.a)(c,2),d=u[0],E=u[1],f=Object(n.useState)([]),C=Object(s.a)(f,2),b=C[0],y=C[1],T=Object(n.useState)([]),O=Object(s.a)(T,2),S=O[0],N=O[1];function k(e){return e.map((function(e){return N((function(t){return[].concat(Object(o.a)(t),[e])})),y((function(t){return[].concat(Object(o.a)(t),[e])}))}))}return Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j().then((function(e){l(e.data),k(e.data.Countries)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(g,null),a?r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{data:a.Global}),r.a.createElement(h,{countries:a.Countries,handleCountry:function(e){var t=a.Countries.find((function(t){return t.Country===e}));E(t)}}),r.a.createElement(D,{onSearch:function(e){N(b.filter((function(t){return-1!==t.Country.toLowerCase().search(e)})))}}),r.a.createElement(p,{country:d}),r.a.createElement(w,{countries:S,handleCountry:function(e){E(e)}})):null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.a996ec6c.chunk.js.map