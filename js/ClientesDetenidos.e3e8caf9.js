(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ClientesDetenidos"],{"65a8":function(t,e,n){"use strict";n("99af");var r=n("572a"),o={eliminaDocumento:function(t){return r["a"].get("/clientes/cliente-documento/".concat(t)).then((function(t){return t.data})).catch((function(t){console.log(t)}))},documentosCliente:function(t){return r["a"].get("/clientes/documentos/".concat(t)).then((function(t){return t.data})).catch((function(t){return t}))},clientes:function(t){return null==t||void 0==t||0==t?r["a"].get("/clientes/todos").then((function(t){return t.data})).catch((function(t){return t})):r["a"].get("/clientes/".concat(t)).then((function(t){return t.data})).catch((function(t){return t}))},clientesCombo:function(){return r["a"].get("/clientes/clientes-combo").then((function(t){return t.data})).catch((function(t){return t}))},guardarDireccion:function(t){return r["a"].post("/clientes/direcciones/guardar",t,{headers:{"Content-Type":"application/json"}}).then((function(t){return t.data})).catch((function(t){console.log(t)}))},guardarContacto:function(t){return r["a"].post("/clientes/contactos/guardar",t,{headers:{"Content-Type":"application/json"}}).then((function(t){return t.data})).catch((function(t){console.log(t)}))},guardarCliente:function(t){return r["a"].post("/clientes/guardar",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){return t.data})).catch((function(t){console.log(t)}))},guardarClienteForzar:function(t){return r["a"].post("/clientes/cliente-forzar/guardar",t,{headers:{"Content-Type":"application/json"}}).then((function(t){return t.data})).catch((function(t){console.log(t)}))},guardarUsuario:function(t){return r["a"].post("/clientes/guardarUsuarioCliente",t,{headers:{"Content-Type":"application/json"}}).then((function(t){return t.data})).catch((function(t){console.log(t)}))},obtenerUsuario:function(t){return r["a"].get("/clientes/obtenerUsuarioCliente/".concat(t)).then((function(t){return t.data})).catch((function(t){console.log(t)}))},sugerirUsuario:function(t){return r["a"].get("/clientes/sugerenciaUsuario/".concat(t)).then((function(t){return t.data})).catch((function(t){console.log(t)}))},obtenerClientesAgente:function(t){return r["a"].get("/clientes/clientes-agente/".concat(t)).then((function(t){return t.data})).catch((function(t){return t}))},obtenerClientesDetenidos:function(){return r["a"].get("/clientes/clientes-detenidos/").then((function(t){return t.data})).catch((function(t){return t}))},obtenerDireccion:function(t){return r["a"].get("/clientes/direccion/".concat(t)).then((function(t){return t.data})).catch((function(t){return t}))},obtenerClientesCobranza:function(){return r["a"].get("/clientes/cobranza/").then((function(t){return t.data})).catch((function(t){return t}))},actualizarEstatusCliente:function(t,e){return r["a"].get("/clientes/actualizar-estatus/".concat(t,"/").concat(e)).then((function(t){return t.data})).catch((function(t){return t}))},obtenerSegmentos:function(){return r["a"].get("/clientes/segmentos").then((function(t){return t.data})).catch((function(t){return t}))},obtenerTiposClientes:function(){return r["a"].get("/clientes/tipos-cliente").then((function(t){return t.data})).catch((function(t){return t}))},obtenerTiposClienteCredito:function(){return r["a"].get("/clientes/tipos-cliente-credito").then((function(t){return t.data})).catch((function(t){return t}))},obtenerTiposListaPrecios:function(){return r["a"].get("/clientes/tipos-lista-precios").then((function(t){return t.data})).catch((function(t){return t}))},ObtenerHistorialCliente:function(t,e,n){return r["a"].get("/clientes/historial-cliente/".concat(t,"/").concat(e,"/").concat(n)).then((function(t){return t.data})).catch((function(t){return t}))},obtenerClientes:function(t){return r["a"].get("/clientes/obtener-clientes/".concat(t)).then((function(t){return t.data})).catch((function(t){return t}))}};e["a"]=o},"72b5":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{attrs:{fluid:""}},[n("h3",[n("i",{staticClass:"fas fa-user-lock"}),t._v(" Clientes Detenidos")]),n("hr"),t.items.length>0?n("div",[n("b-row",{staticClass:"my-2"},[n("b-col",{attrs:{md:"4"}},[n("b-form-group",{attrs:{label:"Filtrar","label-cols-sm":"1","label-cols-md":"2","label-size":"sm","label-for":"filterInput"}},[n("b-input-group",{attrs:{size:"sm"}},[n("b-form-input",{attrs:{type:"search",id:"filterInput",placeholder:"Escribe el filtro...",autocomplete:"off"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),n("b-input-group-append",[n("b-button",{attrs:{disabled:!t.filter},on:{click:function(e){t.filter=""}}},[n("i",{staticClass:"fas fa-times"})])],1)],1)],1)],1),n("b-col",{attrs:{md:"3"}},[n("b-form-group",{attrs:{label:"Por página","label-cols-sm":"2","label-cols-md":"2","label-cols-lg":"4","label-size":"sm","label-for":"perPageSelect"}},[n("b-form-select",{attrs:{id:"perPageSelect",size:"sm",options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)],1)],1),n("b-table",{attrs:{small:"",stacked:"md","head-variant":"dark",hover:t.hover,striped:t.striped,bordered:t.bordered,items:t.items,fields:t.fields,"current-page":t.currentPage,"per-page":t.perPage,filter:t.filter,filterIncludedFields:t.filterOn,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"sort-direction":t.sortDirection},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(estatus)",fn:function(e){return["DC"==e.item.estatusNuevo?n("b-badge",{staticClass:"p-2",attrs:{variant:"danger"}},[t._v("Detenido Limite Credito")]):t._e(),"D"==e.item.estatusNuevo?n("b-badge",{staticClass:"p-2",attrs:{variant:"danger"}},[t._v("Detenido Por Cobranza")]):t._e(),"DP"==e.item.estatusNuevo?n("b-badge",{staticClass:"p-2",attrs:{variant:"danger"}},[t._v("Detenido Limite de Plazo")]):t._e()]}}],null,!1,395993100)}),n("b-pagination",{staticClass:"mt-1",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,align:"center","aria-controls":"my-table"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1):n("div",[n("b-alert",{attrs:{show:"",variant:"warning"}},[t._v("No se encontraron registros de "),n("strong",[t._v("clientes detenidos")])])],1)])},o=[],a=(n("4de4"),n("d81d"),n("96cf"),n("1da1")),c=n("65a8"),i={data:function(){return{items:[],credenciales:{usuario:"",password:""},totalRows:1,currentPage:1,perPage:5,pageOptions:[5,10,15],sortBy:"",sortDesc:!1,bordered:!0,hover:!0,striped:!0,sortDirection:"asc",filter:null,filterOn:[],fields:[{key:"nombreCompleto",label:"Nombre",sortable:!0,sortDirection:"desc"},{key:"celular",label:"Celular",sortable:!0,class:"text-center"},{key:"correo",label:"Correo",sortable:!0,class:"text-center"},{key:"nombreVendedor",label:"Vendedor",sortable:!0,class:"text-center"},{key:"estatus",label:"Estatus",class:"text-center"}]}},components:{},computed:{sortOptions:function(){return this.fields.filter((function(t){return t.sortable})).map((function(t){return{text:t.label,value:t.key}}))}},mounted:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.ObtenerClientesDetenidos();case 2:return e.next=4,t.CargarRenglones();case 4:case"end":return e.stop()}}),e)})))()},methods:{onFiltered:function(t){this.totalRows=t.length,this.currentPage=1},ObtenerClientesDetenidos:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.items=[],t.$loading(!0),e.next=4,c["a"].obtenerClientesDetenidos().then((function(e){t.$loading(!1),console.log(e),e.value&&(t.items=e.data)})).catch((function(e){t.$loading(!1),console.log(e)}));case 4:case"end":return e.stop()}}),e)})))()},CargarRenglones:function(){var t=this;console.log("----\x3e"+this.items.length),setTimeout((function(){t.totalRows=t.items.length}),1e3)}}},s=i,u=n("2877"),l=Object(u["a"])(s,r,o,!1,null,null,null);e["default"]=l.exports},8418:function(t,e,n){"use strict";var r=n("c04e"),o=n("9bf2"),a=n("5c6c");t.exports=function(t,e,n){var c=r(e);c in t?o.f(t,c,a(0,n)):t[c]=n}},"99af":function(t,e,n){"use strict";var r=n("23e7"),o=n("d039"),a=n("e8b5"),c=n("861d"),i=n("7b0b"),s=n("50c4"),u=n("8418"),l=n("65f0"),d=n("1dde"),f=n("b622"),g=n("2d00"),p=f("isConcatSpreadable"),b=9007199254740991,h="Maximum allowed index exceeded",m=g>=51||!o((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),C=d("concat"),v=function(t){if(!c(t))return!1;var e=t[p];return void 0!==e?!!e:a(t)},y=!m||!C;r({target:"Array",proto:!0,forced:y},{concat:function(t){var e,n,r,o,a,c=i(this),d=l(c,0),f=0;for(e=-1,r=arguments.length;e<r;e++)if(a=-1===e?c:arguments[e],v(a)){if(o=s(a.length),f+o>b)throw TypeError(h);for(n=0;n<o;n++,f++)n in a&&u(d,f,a[n])}else{if(f>=b)throw TypeError(h);u(d,f++,a)}return d.length=f,d}})},d81d:function(t,e,n){"use strict";var r=n("23e7"),o=n("b727").map,a=n("1dde"),c=n("ae40"),i=a("map"),s=c("map");r({target:"Array",proto:!0,forced:!i||!s},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=ClientesDetenidos.e3e8caf9.js.map