(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ReporteForaneos"],{"07ac":function(e,t,n){var o=n("23e7"),r=n("6f53").values;o({target:"Object",stat:!0},{values:function(e){return r(e)}})},"159b":function(e,t,n){var o=n("da84"),r=n("fdbc"),a=n("17c2"),c=n("9112");for(var s in r){var i=o[s],u=i&&i.prototype;if(u&&u.forEach!==a)try{c(u,"forEach",a)}catch(l){u.forEach=a}}},"16c6":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"container"},[e._m(0),n("hr"),n("b-row",[n("div",{staticClass:"form-group col-sm-12 col-md-6 col-lg-5 col-xl-4 mb-1"},[n("label",[e._v("Desde:")]),n("b-form-datepicker",{staticClass:"mb-2",attrs:{locale:"es"},model:{value:e.desde,callback:function(t){e.desde=t},expression:"desde"}})],1),n("div",{staticClass:"form-group col-sm-12 col-md-6 col-lg-5 col-xl-4 mb-1"},[n("label",[e._v("Hasta:")]),n("b-form-datepicker",{staticClass:"mb-2",attrs:{locale:"es"},model:{value:e.hasta,callback:function(t){e.hasta=t},expression:"hasta"}})],1)]),n("div",{staticClass:"row"},[n("div",{staticClass:"form-group col-sm-12 col-md-4 mb-2"},[n("label",[e._v("Equipos:")]),n("div",{staticClass:"input-group"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.equipo,expression:"equipo"}],staticClass:"form-control",on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.equipo=t.target.multiple?n:n[0]},e.restablecerDatos]}},e._l(e.equipos,(function(t){return n("option",{key:t.value,domProps:{value:t}},[e._v(" "+e._s(t.text)+" ")])})),0)])])]),n("div",[n("b-row",[n("b-col",{staticClass:"col-md-3 col-sm-12 col-12",attrs:{"align-self":"end"}},[n("b-button",{staticClass:"mr-2 mt-2",attrs:{block:"",variant:"primary"},on:{click:e.BuscarDatosReporteForaneos}},[n("i",{staticClass:"fas fa-search"}),e._v(" Buscar Datos ")])],1),e.datos?n("b-col",{staticClass:"col-md-3 col-sm-12 col-12",attrs:{"align-self":"end"}},[n("b-button",{staticClass:"mr-2 mt-2",attrs:{block:"",variant:"dark"},on:{click:e.GenerarReporteMensual}},[n("i",{staticClass:"fas fa-chart-bar"}),e._v(" Generar Reporte ")])],1):e._e(),e.datos?n("b-col",{staticClass:"col-md-3 col-sm-12 col-12",attrs:{"align-self":"end"}},[n("b-button",{staticClass:"mr-2 mt-2",attrs:{block:"",variant:"success"},on:{click:e.exportarExcel}},[n("i",{staticClass:"fas fa-file-excel"}),e._v(" Exportar Excel ")])],1):e._e()],1),e.datos?n("div",[n("hr"),n("b-row",{staticClass:"my-2"},[n("b-col",{attrs:{md:"4"}},[n("b-form-group",{attrs:{label:"Filtrar","label-cols-sm":"1","label-cols-md":"2","label-size":"sm","label-for":"filterInput"}},[n("b-input-group",{attrs:{size:"sm"}},[n("b-form-input",{attrs:{type:"search",id:"filterInput",placeholder:"Escribe el filtro...",autocomplete:"off"},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}}),n("b-input-group-append",[n("b-button",{attrs:{disabled:!e.filter},on:{click:function(t){e.filter=""}}},[n("i",{staticClass:"fas fa-times"})])],1)],1)],1)],1),n("b-col",{attrs:{md:"3"}},[n("b-form-group",{attrs:{label:"Por página","label-cols-sm":"2","label-cols-md":"2","label-cols-lg":"4","label-size":"sm","label-for":"perPageSelect"}},[n("b-form-select",{attrs:{id:"perPageSelect",size:"sm",options:e.pageOptions},model:{value:e.perPage,callback:function(t){e.perPage=t},expression:"perPage"}})],1)],1)],1),n("b-table",{attrs:{small:"",stacked:"md","head-variant":"dark",hover:e.hover,striped:e.striped,bordered:e.bordered,items:e.items,fields:e.fields,"current-page":e.currentPage,"per-page":e.perPage,filter:e.filter,filterIncludedFields:e.filterOn,"sort-by":e.sortBy,"sort-desc":e.sortDesc,"sort-direction":e.sortDirection},on:{"update:sortBy":function(t){e.sortBy=t},"update:sort-by":function(t){e.sortBy=t},"update:sortDesc":function(t){e.sortDesc=t},"update:sort-desc":function(t){e.sortDesc=t},filtered:e.onFiltered},scopedSlots:e._u([{key:"cell(estatus)",fn:function(t){return["D"==t.item.estatusNuevo?n("b-badge",{staticClass:"p-2",attrs:{variant:"danger"}},[e._v("Detenido Limite Credito")]):e._e(),"DP"==t.item.estatusNuevo?n("b-badge",{staticClass:"p-2",attrs:{variant:"danger"}},[e._v("Detenido Falta Pago")]):e._e()]}}],null,!1,3125670860)}),n("b-pagination",{staticClass:"mt-1",attrs:{"total-rows":e.totalRows,"per-page":e.perPage,align:"center","aria-controls":"my-table"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1):e._e()],1)],1)])},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[n("i",{staticClass:"fa fa-chart-line"}),e._v(" Reporte de Tiros Foráneos")])])}],a=(n("4de4"),n("4160"),n("a15b"),n("d81d"),n("fb6a"),n("b64b"),n("d3b7"),n("07ac"),n("3ca3"),n("159b"),n("ddb0"),n("2b3d"),n("96cf"),n("1da1")),c=n("20af"),s=n("49fb"),i={data:function(){var e=new Date,t=new Date(e.getFullYear(),e.getMonth()-1,e.getDate()),n=new Date(e.getFullYear(),e.getMonth(),e.getDate()),o=t.toISOString().slice(0,10),r=n.toISOString().slice(0,10);return{desde:o,hasta:r,equipo:0,equipos:[{value:0,text:"Todos"}],datos:!1,items:[],totalRows:1,currentPage:1,perPage:5,pageOptions:[5,10,15],sortBy:"",sortDesc:!1,bordered:!0,hover:!0,striped:!0,sortDirection:"asc",filter:null,filterOn:[],fields:[{key:"notaRemision",label:"Nota Remisión",sortable:!0,sortDirection:"desc"},{key:"fechaSalida",label:"Fecha",sortable:!0,class:"text-center"},{key:"equipo",label:"Equipo",sortable:!0,sortDirection:"desc"},{key:"operador",label:"Operador",sortable:!0,class:"text-center"},{key:"tiempoFuera",label:"Tiempo Fuera",sortable:!0,class:"text-center"},{key:"kilometrosRecorridos",label:"Kilometros Recorridos",sortable:!0,class:"text-center"},{key:"horometrajeRecorrido",label:"Horometraje Recorrido",sortable:!0,class:"text-center"}]}},components:{},mounted:function(){},created:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.ObtenerEquipos();case 2:case"end":return t.stop()}}),t)})))()},computed:{sortOptions:function(){return this.fields.filter((function(e){return e.sortable})).map((function(e){return{text:e.label,value:e.key}}))}},methods:{ObtenerEquipos:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$loading(!0),t.next=3,c["a"].equipos(0).then((function(t){t.value&&(t.data.forEach((function(t){var n={value:t.codigo,text:t.nombre};e.equipos.push(n)})),console.log(e.equipos),e.equipo=e.equipos[0])}));case 3:e.$loading(!1);case 4:case"end":return t.stop()}}),t)})))()},BuscarDatosReporteForaneos:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.items=[],console.log("Equipo -> ",e.equipo),e.$loading(!0),t.next=5,s["a"].ObtenerReporteMensualForaneos(e.desde,e.hasta,e.equipo.value);case 5:n=t.sent,n.value?(e.datos=!0,e.items=n.data,console.log(e.items),e.CargarRenglones(),e.$loading(!1)):(e.datos=!1,e.$loading(!1),e.$swal.fire({text:n.message,icon:"warning"}));case 7:case"end":return t.stop()}}),t)})))()},GenerarReporteMensual:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$loading(!0),t.next=3,s["a"].GenerarReporteForaneos(e.desde,e.hasta,e.equipo.value,e.items);case 3:if(n=t.sent,!n.value){t.next=12;break}return t.next=7,e.ImprimirReporteForaneos(n.data);case 7:e.$loading(!1),o=e.$swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:function(t){t.addEventListener("mouseenter",e.$swal.stopTimer),t.addEventListener("mouseleave",e.$swal.resumeTimer)}}),o.fire({icon:"success",title:"Reporte de entradas y salidas descargado."}),t.next=14;break;case 12:e.$loading(!1),e.$swal.fire({text:n.message,icon:"warning"});case 14:case"end":return t.stop()}}),t)})))()},ImprimirReporteForaneos:function(e){return Object(a["a"])(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=document.createElement("a"),o="Reporte de Tiros Foraneos",n.href="data:application/pdf;base64,"+e,n.download=o,t.next=6,n.click();case 6:case"end":return t.stop()}}),t)})))()},onFiltered:function(e){this.totalRows=e.length,this.currentPage=1},CargarRenglones:function(){var e=this;setTimeout((function(){e.totalRows=e.items.length}),1e3)},restablecerDatos:function(){this.datos=!1,this.items=[]},exportarExcel:function(){this.$loading(!0);var e=Object.keys(this.items[0]).join("♪")+"\n";for(var t in this.items)e+=Object.values(this.items[t]).join("♪"),e+="\n";console.log("CSV #1 ",e),e=e.replaceAll(","," "),e=e.replaceAll("♪",","),console.log("CSV #2 ",e);var n=new Blob([e],{type:"text/csv"}),o=window.URL.createObjectURL(n),r=document.createElement("a");r.setAttribute("hidden",""),r.setAttribute("href",o),r.setAttribute("download","download.csv"),document.body.appendChild(r),r.click(),document.body.removeChild(r),this.$loading(!1)}}},u=i,l=n("2877"),p=Object(l["a"])(u,o,r,!1,null,"795d5206",null);t["default"]=p.exports},"17c2":function(e,t,n){"use strict";var o=n("b727").forEach,r=n("a640"),a=n("ae40"),c=r("forEach"),s=a("forEach");e.exports=c&&s?[].forEach:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}},"20af":function(e,t,n){"use strict";n("99af");var o=n("572a"),r={equipos:function(e){return null==e||void 0==e||0==e?o["a"].get("/equipos/todos").then((function(e){return e.data})).catch((function(e){return e})):o["a"].get("/equipos/".concat(e)).then((function(e){return console.log("EQUIPO ",e.data),e.data})).catch((function(e){return e}))},guardar:function(e){return console.log(e),o["a"].post("/equipos/guardar",e,{headers:{"Content-Type":"application/json"}}).then((function(e){return e.data})).catch((function(e){return e}))},marcas:function(e){return e=null==e||void 0==e?0:e,o["a"].get("/equipos/marcas/".concat(e)).then((function(e){return e.data})).catch((function(e){return e}))},modelos:function(e){return e=null==e||void 0==e?0:e,o["a"].get("/equipos/modelos/".concat(e)).then((function(e){return e.data})).catch((function(e){return e}))},marcasCombo:function(){return o["a"].get("/equipos/marcasCombo").then((function(e){return e.data})).catch((function(e){return e}))},modelosCombo:function(){return o["a"].get("/equipos/modelosCombo").then((function(e){return e.data})).catch((function(e){return e}))},tanquesDiesel:function(e){return e=null==e||void 0==e?0:e,o["a"].get("/equipos/tanques/".concat(e)).then((function(e){return e.data})).catch((function(e){return e}))},tipoEquipoCombo:function(){return o["a"].get("/equipos/tipoEquipoCombo").then((function(e){return e.data})).catch((function(e){return e}))},obtenerConsumiblesCombo:function(){return o["a"].get("/equipos/consumiblesCombo").then((function(e){return e.data})).catch((function(e){return e}))},guardarMarca:function(e){return o["a"].post("/equipos/guardar/marca",e,{headers:{"Content-Type":"application/json"}}).then((function(e){return e.data})).catch((function(e){return e}))},guardarModelo:function(e){return o["a"].post("/equipos/guardar/modelo",e,{headers:{"Content-Type":"application/json"}}).then((function(e){return e.data})).catch((function(e){return e}))},guardarTanque:function(e){return o["a"].post("/equipos/guardar/tanque",e,{headers:{"Content-Type":"application/json"}}).then((function(e){return e.data})).catch((function(e){return e}))},tiposEquipo:function(e){return e=null==e||void 0==e?0:e,o["a"].get("/equipos/tiposEquipo/".concat(e)).then((function(e){return e.data})).catch((function(e){return e}))},guardarTipoEquipo:function(e){return o["a"].post("/equipos/guardar/tipoEquipo",e,{headers:{"Content-Type":"application/json"}}).then((function(e){return e.data})).catch((function(e){return e}))},entradasSalidas:function(e){return o["a"].get("/equipos/entradasSalidas/".concat(e)).then((function(e){return e.data})).catch((function(e){return e}))},actualizarEstatusEquipo:function(e,t){return o["a"].get("/equipos/actualizar-estatus/".concat(e,"/").concat(t)).then((function(e){return console.log(e),e.data})).catch((function(e){return e}))}};t["a"]=r},4160:function(e,t,n){"use strict";var o=n("23e7"),r=n("17c2");o({target:"Array",proto:!0,forced:[].forEach!=r},{forEach:r})},"49fb":function(e,t,n){"use strict";n("99af");var o=n("572a"),r={ObtenerReporteMensualMetros:function(e,t,n){return o["a"].post("/reportes/obtener-reporte-mensual-metros/".concat(e,"/").concat(t),n,{headers:{"Content-Type":"application/json"}}).then((function(e){return e.data})).catch((function(e){console.log(e)}))},GenerarReporteMensualMetros:function(e,t,n){return o["a"].post("/reportes/imprimir-reporte-mensual-metros/".concat(e,"/").concat(t),n,{headers:{"Content-Type":"application/json"}}).then((function(e){return e.data})).catch((function(e){console.log(e)}))},ObtenerReporteMensualClientes:function(e,t,n){return o["a"].post("/reportes/obtener-reporte-mensual-clientes/".concat(e,"/").concat(t,"/").concat(n)).then((function(e){return e.data})).catch((function(e){console.log(e)}))},GenerarReporteMensualClientes:function(e,t,n){return o["a"].post("/reportes/imprimir-reporte-mensual-clientes/".concat(e,"/").concat(t),n,{headers:{"Content-Type":"application/json"}}).then((function(e){return e.data})).catch((function(e){console.log(e)}))},ObtenerReporteVolumenXObra:function(e,t,n){return o["a"].post("/reportes/obtener-reporte-volumen-obra/".concat(e,"/").concat(t),n,{headers:{"Content-Type":"application/json"}}).then((function(e){return e.data})).catch((function(e){console.log(e)}))},GenerarReporteVolumenXObra:function(e,t,n){return o["a"].post("/reportes/imprimir-reporte-volumen-obra/".concat(e,"/").concat(t),n,{headers:{"Content-Type":"application/json"}}).then((function(e){return e.data})).catch((function(e){console.log(e)}))},ObtenerReporteMensualProductos:function(e,t,n){return o["a"].post("/reportes/obtener-reporte-mensual-productos/".concat(e,"/").concat(t),n,{headers:{"Content-Type":"application/json"}}).then((function(e){return e.data})).catch((function(e){console.log(e)}))},GenerarReporteMensualProductos:function(e,t,n){return o["a"].post("/reportes/imprimir-reporte-mensual-productos/".concat(e,"/").concat(t),n,{headers:{"Content-Type":"application/json"}}).then((function(e){return e.data})).catch((function(e){console.log(e)}))},ObtenerDemandaArticulo:function(){return o["a"].get("/reportes/obtener-demanda-articulos").then((function(e){return console.log("R -> ",e),e.data})).catch((function(e){console.log(e)}))},ObtenerReporteMensualEntradasSalidas:function(e,t,n){return o["a"].post("/reportes/obtener-reporte-entradas-salidas/".concat(e,"/").concat(t,"/").concat(n),{headers:{"Content-Type":"application/json"}}).then((function(e){return e.data})).catch((function(e){console.log(e)}))},GenerarReporteEntradasSalidas:function(e,t,n,r){return o["a"].post("/reportes/imprimir-reporte-entradas-salidas/".concat(e,"/").concat(t,"/").concat(n),r,{headers:{"Content-Type":"application/json"}}).then((function(e){return e.data})).catch((function(e){console.log(e)}))},ObtenerReporteMensualEquipos:function(e,t,n){return o["a"].post("/reportes/obtener-reporte-mensual-equipos/".concat(e,"/").concat(t,"/").concat(n),{headers:{"Content-Type":"application/json"}}).then((function(e){return e.data})).catch((function(e){console.log(e)}))},GenerarReporteEquipos:function(e,t,n,r){return o["a"].post("/reportes/imprimir-reporte-mensual-equipos/".concat(e,"/").concat(t,"/").concat(n),r,{headers:{"Content-Type":"application/json"}}).then((function(e){return e.data})).catch((function(e){console.log(e)}))},ObtenerReporteMensualNocturnos:function(e,t,n){return o["a"].post("/reportes/obtener-reporte-nocturnos/".concat(e,"/").concat(t,"/").concat(n),{headers:{"Content-Type":"application/json"}}).then((function(e){return e.data})).catch((function(e){console.log(e)}))},GenerarReporteNocturnos:function(e,t,n,r){return o["a"].post("/reportes/imprimir-reporte-nocturnos/".concat(e,"/").concat(t,"/").concat(n),r,{headers:{"Content-Type":"application/json"}}).then((function(e){return e.data})).catch((function(e){console.log(e)}))},ObtenerReporteMensualForaneos:function(e,t,n){return o["a"].post("/reportes/obtener-reporte-foraneos/".concat(e,"/").concat(t,"/").concat(n),{headers:{"Content-Type":"application/json"}}).then((function(e){return e.data})).catch((function(e){console.log(e)}))},GenerarReporteForaneos:function(e,t,n,r){return o["a"].post("/reportes/imprimir-reporte-foraneos/".concat(e,"/").concat(t,"/").concat(n),r,{headers:{"Content-Type":"application/json"}}).then((function(e){return e.data})).catch((function(e){console.log(e)}))},ObtenerReportePedidosCancelados:function(e,t,n,r){return o["a"].post("/reportes/obtener-reporte-pedidos-cancelados/".concat(e,"/").concat(t,"/").concat(n,"/").concat(r),{headers:{"Content-Type":"application/json"}}).then((function(e){return e.data})).catch((function(e){console.log(e)}))},GenerarReportePedidosCancelados:function(e,t,n,r,a){return o["a"].post("/reportes/imprimir-reporte-pedidos-cancelados/".concat(e,"/").concat(t,"/").concat(n,"/").concat(r),a,{headers:{"Content-Type":"application/json"}}).then((function(e){return e.data})).catch((function(e){console.log(e)}))},ObtenerReportePedidosReagendados:function(e,t,n,r){return o["a"].post("/reportes/obtener-reporte-pedidos-reagendados/".concat(e,"/").concat(t,"/").concat(n,"/").concat(r),{headers:{"Content-Type":"application/json"}}).then((function(e){return e.data})).catch((function(e){console.log(e)}))},GenerarReportePedidosReagendados:function(e,t,n,r,a){return o["a"].post("/reportes/imprimir-reporte-pedidos-reagendados/".concat(e,"/").concat(t,"/").concat(n,"/").concat(r),a,{headers:{"Content-Type":"application/json"}}).then((function(e){return e.data})).catch((function(e){console.log(e)}))}};t["a"]=r},"6f53":function(e,t,n){var o=n("83ab"),r=n("df75"),a=n("fc6a"),c=n("d1e7").f,s=function(e){return function(t){var n,s=a(t),i=r(s),u=i.length,l=0,p=[];while(u>l)n=i[l++],o&&!c.call(s,n)||p.push(e?[n,s[n]]:s[n]);return p}};e.exports={entries:s(!0),values:s(!1)}},a15b:function(e,t,n){"use strict";var o=n("23e7"),r=n("44ad"),a=n("fc6a"),c=n("a640"),s=[].join,i=r!=Object,u=c("join",",");o({target:"Array",proto:!0,forced:i||!u},{join:function(e){return s.call(a(this),void 0===e?",":e)}})},b64b:function(e,t,n){var o=n("23e7"),r=n("7b0b"),a=n("df75"),c=n("d039"),s=c((function(){a(1)}));o({target:"Object",stat:!0,forced:s},{keys:function(e){return a(r(e))}})},d81d:function(e,t,n){"use strict";var o=n("23e7"),r=n("b727").map,a=n("1dde"),c=n("ae40"),s=a("map"),i=c("map");o({target:"Array",proto:!0,forced:!s||!i},{map:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},fb6a:function(e,t,n){"use strict";var o=n("23e7"),r=n("861d"),a=n("e8b5"),c=n("23cb"),s=n("50c4"),i=n("fc6a"),u=n("8418"),l=n("b622"),p=n("1dde"),d=n("ae40"),f=p("slice"),m=d("slice",{ACCESSORS:!0,0:0,1:2}),h=l("species"),b=[].slice,g=Math.max;o({target:"Array",proto:!0,forced:!f||!m},{slice:function(e,t){var n,o,l,p=i(this),d=s(p.length),f=c(e,d),m=c(void 0===t?d:t,d);if(a(p)&&(n=p.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?r(n)&&(n=n[h],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return b.call(p,f,m);for(o=new(void 0===n?Array:n)(g(m-f,0)),l=0;f<m;f++,l++)f in p&&u(o,l,p[f]);return o.length=l,o}})}}]);
//# sourceMappingURL=ReporteForaneos.7b865ccc.js.map