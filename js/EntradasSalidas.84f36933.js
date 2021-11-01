(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["EntradasSalidas"],{"404d":function(t,a,e){"use strict";e("99af");var s=e("572a"),n={obtenerEntradasSalidas:function(t,a){return s["a"].get("/porteros/obtener-entradas-salidas/".concat(t,"/").concat(a)).then((function(t){return t.data})).catch((function(t){console.log(t)}))},obtenerSuministros:function(t,a){return s["a"].get("/porteros/obtener-suministros/".concat(t,"/").concat(a)).then((function(t){return t.data})).catch((function(t){console.log(t)}))},guardarEntradasSalidas:function(t){return s["a"].post("/porteros/guardar-entradas-salidas",t,{headers:{"Content-Type":"application/json"}}).then((function(t){return t.data})).catch((function(t){console.log(t)}))},guardarSuministros:function(t){return s["a"].post("/porteros/guardar-suministros",t,{headers:{"Content-Type":"application/json"}}).then((function(t){return t.data})).catch((function(t){console.log(t)}))}};a["a"]=n},6646:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"container mt-3"},[t._m(0),e("b-row",[e("b-col",{staticClass:"col-md-6 col-sm-12 col-12",attrs:{"align-self":"end"}}),e("b-col",{staticClass:"col-md-3 col-sm-12 col-12",attrs:{"align-self":"end"}},[e("b-button",{staticClass:"mr-2 mt-2",attrs:{block:"",variant:"danger"},on:{click:t.SalidaNueva}},[e("i",{staticClass:"fa fa-plus"}),t._v(" Nueva Salida ")])],1),e("b-col",{staticClass:"col-md-3 col-sm-12 col-12",attrs:{"align-self":"end"}},[e("b-button",{staticClass:"mr-2 mt-2",attrs:{block:"",variant:"primary"},on:{click:t.EntradaNueva}},[e("i",{staticClass:"fa fa-plus"}),t._v(" Nueva Entrada ")])],1)],1),e("b-row",[e("div",{staticClass:"form-group col-sm-12 col-md-6 col-lg-5 col-xl-4 mb-1"},[e("label",[t._v("Desde:")]),e("b-form-datepicker",{staticClass:"mb-2",attrs:{locale:"es",size:"sm"},model:{value:t.desde,callback:function(a){t.desde=a},expression:"desde"}})],1),e("div",{staticClass:"form-group col-sm-12 col-md-6 col-lg-5 col-xl-4 mb-1"},[e("label",[t._v("Hasta:")]),e("b-form-datepicker",{staticClass:"mb-2",attrs:{locale:"es",size:"sm"},model:{value:t.hasta,callback:function(a){t.hasta=a},expression:"hasta"}})],1)]),e("b-row",[e("div",{staticClass:"col-sm-12 col-md-3 col-lg-2 mb-1"},[e("b-button",{staticClass:"mr-2 mt-2",attrs:{block:"",variant:"success"},on:{click:t.buscar}},[e("i",{staticClass:"fa fa-search"}),t._v(" Buscar ")])],1)]),e("div",[e("table-sortable",{staticClass:"mt-3",attrs:{items:t.items,fields:t.fields}})],1)],1)])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mt-3"},[e("h3",[e("i",{staticClass:"fas fa-truck-moving"}),t._v(" Entradas y Salidas")])])}],r=(e("fb6a"),e("96cf"),e("1da1")),o=e("404d"),c=e("7230"),i={data:function(){var t=new Date,a=new Date(t.getFullYear(),t.getMonth(),t.getDate()),e=a.toISOString().slice(0,10);return{desde:e,hasta:e,items:[],fields:[{key:"fecha",label:"Fecha",sortable:!0,class:"text-center"},{key:"planta",label:"Planta",sortable:!0,class:"text-center"},{key:"folioPedido",label:"# P.",sortable:!0,class:"text-center"},{key:"notaRemision",label:"Nota de Remisión",sortable:!0,class:"text-center"},{key:"equipo",label:"Equipo",sortable:!0,sortDirection:"desc"},{key:"usuario",label:"Usuario",sortable:!0,class:"text-center"},{key:"entradasalida",label:"Tipo",class:"text-center"},{key:"action",label:"",class:"text-center"}]}},components:{TableSortable:c["a"]},mounted:function(){this.ObtenerEntradasSalidas()},created:function(){},computed:{},methods:{Inicializar:function(){var t=new Date,a=new Date(t.getFullYear(),t.getMonth(),t.getDate()),e=a.toISOString().slice(0,10);this.desde=e,this.hasta=e,this.items=[],this.ObtenerEntradasSalidas()},ObtenerEntradasSalidas:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.$loading(!0),a.next=3,o["a"].obtenerEntradasSalidas(t.desde,t.hasta).then((function(a){t.items=a.data,t.$loading(!1)})).catch((function(t){console.log(t)}));case 3:case"end":return a.stop()}}),a)})))()},EntradaNueva:function(){this.$router.push({path:"/portero/entradas-salidas/registro/1"})},SalidaNueva:function(){this.$router.push({path:"/portero/entradas-salidas/registro/0"})},buscar:function(){this.ObtenerEntradasSalidas()}}},l=i,d=e("2877"),u=Object(d["a"])(l,s,n,!1,null,"4a8a8a99",null);a["default"]=u.exports},fb6a:function(t,a,e){"use strict";var s=e("23e7"),n=e("861d"),r=e("e8b5"),o=e("23cb"),c=e("50c4"),i=e("fc6a"),l=e("8418"),d=e("b622"),u=e("1dde"),f=e("ae40"),b=u("slice"),m=f("slice",{ACCESSORS:!0,0:0,1:2}),h=d("species"),p=[].slice,v=Math.max;s({target:"Array",proto:!0,forced:!b||!m},{slice:function(t,a){var e,s,d,u=i(this),f=c(u.length),b=o(t,f),m=o(void 0===a?f:a,f);if(r(u)&&(e=u.constructor,"function"!=typeof e||e!==Array&&!r(e.prototype)?n(e)&&(e=e[h],null===e&&(e=void 0)):e=void 0,e===Array||void 0===e))return p.call(u,b,m);for(s=new(void 0===e?Array:e)(v(m-b,0)),d=0;b<m;b++,d++)b in u&&l(s,d,u[b]);return s.length=d,s}})}}]);
//# sourceMappingURL=EntradasSalidas.84f36933.js.map