(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Pedidos"],{"07ac":function(e,t,a){var n=a("23e7"),r=a("6f53").values;n({target:"Object",stat:!0},{values:function(e){return r(e)}})},"159b":function(e,t,a){var n=a("da84"),r=a("fdbc"),o=a("17c2"),i=a("9112");for(var s in r){var c=n[s],l=c&&c.prototype;if(l&&l.forEach!==o)try{i(l,"forEach",o)}catch(d){l.forEach=o}}},"17c2":function(e,t,a){"use strict";var n=a("b727").forEach,r=a("a640"),o=a("ae40"),i=r("forEach"),s=o("forEach");e.exports=i&&s?[].forEach:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}},3965:function(e,t,a){"use strict";a("99af"),a("96cf");var n=a("1da1"),r=a("572a"),o=a("bc3a"),i=a.n(o),s={obtenerUltimoDescuentoCliente:function(e,t){return r["a"].get("/pedidos/obtener-descuento-cliente/".concat(e,"/").concat(t)).then((function(e){return e.data})).catch((function(e){return e}))},obtenerPedidos:function(e,t,a){return r["a"].get("/pedidos/obtener-pedidos/".concat(e,"/").concat(t,"/").concat(a)).then((function(e){return e.data})).catch((function(e){return e}))},guardarPedido:function(e){return r["a"].post("/pedidos/guardar",e,{headers:{"Content-Type":"application/json"}}).then((function(e){return e.data})).catch((function(e){console.log(e)}))},obtenerCierres:function(e){return r["a"].get("/pedidos/obtener-cierres/".concat(e)).then((function(e){return e.data})).catch((function(e){return e}))},guardarCierre:function(e,t){return r["a"].get("/pedidos/guardar-cierres/".concat(e,"/").concat(t)).then((function(e){return e.data})).catch((function(e){return e}))},cancelarCierre:function(e,t){return r["a"].get("/pedidos/cancelar-cierres/".concat(e,"/").concat(t)).then((function(e){return e.data})).catch((function(e){return e}))},obtenerPedidosDetenidos:function(e){return r["a"].get("/pedidos/pedidos-detenidos/".concat(e)).then((function(e){return e.data})).catch((function(e){console.log(e)}))},autorizarPedidoDetenido:function(e,t,a){return r["a"].get("/pedidos/autorizar-pedido-detenido/".concat(e,"/").concat(t,"/").concat(a)).then((function(e){return e.data})).catch((function(e){return e}))}},c=i.a.create({baseURL:"https://cors.bridged.cc/https://maps.googleapis.com/maps/api/distancematrix/"});s.obtenerTiempoDistancia=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(a,t),console.log("SERVICIO GOOGLE fuera"),e.next=4,c.get().then((function(e){console.log("SERVICIO GOOGLE ",e)}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),s.cambiarEstatusPedido=function(e,t,a){return r["a"].get("/pedidos/cambiar-estatus/".concat(e,"/").concat(t,"/").concat(a)).then((function(e){return e.data})).catch((function(e){return e}))},s.cambiarEstatus=function(e,t,a){return r["a"].get("/pedidos/cambiar-status/".concat(e,"/").concat(t,"/").concat(a)).then((function(e){return e.data})).catch((function(e){return e}))},s.reagendarPedido=function(e){return r["a"].post("/pedidos/reagendar-pedido/",e,{headers:{"Content-Type":"application/json"}}).then((function(e){return console.log(e.data),e.data})).catch((function(e){return e}))},t["a"]=s},4160:function(e,t,a){"use strict";var n=a("23e7"),r=a("17c2");n({target:"Array",proto:!0,forced:[].forEach!=r},{forEach:r})},"498a":function(e,t,a){"use strict";var n=a("23e7"),r=a("58a8").trim,o=a("c8d2");n({target:"String",proto:!0,forced:o("trim")},{trim:function(){return r(this)}})},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,a){var n=a("1d80"),r=a("5899"),o="["+r+"]",i=RegExp("^"+o+o+"*"),s=RegExp(o+o+"*$"),c=function(e){return function(t){var a=String(n(t));return 1&e&&(a=a.replace(i,"")),2&e&&(a=a.replace(s,"")),a}};e.exports={start:c(1),end:c(2),trim:c(3)}},"6f53":function(e,t,a){var n=a("83ab"),r=a("df75"),o=a("fc6a"),i=a("d1e7").f,s=function(e){return function(t){var a,s=o(t),c=r(s),l=c.length,d=0,u=[];while(l>d)a=c[d++],n&&!i.call(s,a)||u.push(e?[a,s[a]]:s[a]);return u}};e.exports={entries:s(!0),values:s(!1)}},"868f":function(e,t,a){"use strict";var n=a("572a"),r={obtenerDatosCP:function(e){return n["a"].get("/generales/codigoPostal/".concat(e)).then((function(e){return e.data})).catch((function(e){return e}))},obtenerParametro:function(e){return n["a"].get("/generales/parametro/".concat(e)).then((function(e){return e.data})).catch((function(e){return e}))},obtenerEmpresasCombo:function(){return n["a"].get("/empresas/combo").then((function(e){return console.log(e),e.data})).catch((function(e){return e}))}};t["a"]=r},a15b:function(e,t,a){"use strict";var n=a("23e7"),r=a("44ad"),o=a("fc6a"),i=a("a640"),s=[].join,c=r!=Object,l=i("join",",");n({target:"Array",proto:!0,forced:c||!l},{join:function(e){return s.call(o(this),void 0===e?",":e)}})},b626:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container mt-3"},[a("b-modal",{attrs:{centered:"",size:"md",title:"Reagendar pedido","header-bg-variant":e.headerBgVariant,"header-text-variant":e.headerTextVariant},scopedSlots:e._u([{key:"modal-footer",fn:function(){return[a("div",{staticClass:"w-100"},[a("b-button",{staticClass:"float-right",attrs:{variant:"danger"},on:{click:function(t){e.modalShow=!1}}},[e._v(" Cancelar ")]),a("b-button",{staticClass:"float-right mr-2",attrs:{variant:"primary"},on:{click:e.ReagendarPedido}},[e._v(" Aceptar ")])],1)]},proxy:!0}]),model:{value:e.modalShow,callback:function(t){e.modalShow=t},expression:"modalShow"}},[a("b-container",{staticClass:"container",attrs:{fluid:""}},[a("div",{staticClass:"col-12"},[a("strong",[a("label",[e._v("Hora de salida de la planta")])]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.pedidoReagendar.horaSalida,expression:"pedidoReagendar.horaSalida"}],staticClass:"form-control",attrs:{type:"time"},domProps:{value:e.pedidoReagendar.horaSalida},on:{input:function(t){t.target.composing||e.$set(e.pedidoReagendar,"horaSalida",t.target.value)}}})]),a("div",{staticClass:"col-12"},[a("strong",[a("label",[e._v("Fecha de salida")])]),a("b-form-datepicker",{attrs:{size:"sm",locale:"es"},model:{value:e.pedidoReagendar.fechaSalida,callback:function(t){e.$set(e.pedidoReagendar,"fechaSalida",t)},expression:"pedidoReagendar.fechaSalida"}})],1),a("div",{staticClass:"col-12"},[a("strong",[a("label",[e._v("Motivo")])]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.pedidoReagendar.motivo,expression:"pedidoReagendar.motivo"}],staticClass:"form-control",attrs:{rows:"2"},domProps:{value:e.pedidoReagendar.motivo},on:{input:function(t){t.target.composing||e.$set(e.pedidoReagendar,"motivo",t.target.value)}}})])])],1),a("b-modal",{attrs:{id:e.infoModal.id,title:e.infoModal.title,"ok-only":"",codigo:e.infoModal.codigo,"hide-footer":""},on:{hide:e.resetInfoModal}},[e._l(e.infoModal.content,(function(t,n){return a("tr",{key:n},[a("th",[e._v(e._s(n))]),"Observación"!=n&&"Observacion"!=n?a("td",[e._v(e._s(t))]):e._e(),"Observación"==n||"Observacion"==n?a("td",{staticClass:"text-danger font-weight-bold"},[e._v(e._s(t))]):e._e()])})),a("b-button",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"mt-3",attrs:{variant:"outline-primary",block:"",to:e.rutaNuevo+"?id="+e.idSeleccionado}},[a("i",{staticClass:"fa fa-eye"}),e._v(" Más información ")])],2),e._m(0),a("b-row",[a("div",{staticClass:"form-group col-sm-12 col-md-6 col-lg-5 col-xl-4 mb-1"},[a("label",[e._v("Desde:")]),a("b-form-datepicker",{staticClass:"mb-2",attrs:{locale:"es",size:"sm"},model:{value:e.desde,callback:function(t){e.desde=t},expression:"desde"}})],1),a("div",{staticClass:"form-group col-sm-12 col-md-6 col-lg-5 col-xl-4 mb-1"},[a("label",[e._v("Hasta:")]),a("b-form-datepicker",{staticClass:"mb-2",attrs:{locale:"es",size:"sm"},model:{value:e.hasta,callback:function(t){e.hasta=t},expression:"hasta"}})],1)]),a("b-row",{staticClass:"d-flex justify-content-between"},[a("div",{staticClass:"col-sm-12 col-md-4 col-lg-2 mb-2"},[a("b-button",{staticClass:"mr-2",attrs:{block:"",variant:"success"},on:{click:e.buscarPedidos}},[a("i",{staticClass:"fa fa-search"}),e._v(" Buscar ")])],1)]),a("b-row",{staticClass:"my-2"},[a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{label:"Filtrar","label-cols-sm":"1","label-cols-md":"2","label-size":"sm","label-for":"filterInput"}},[a("b-input-group",{attrs:{size:"sm"}},[a("b-form-input",{attrs:{type:"search",id:"filterInput",placeholder:"Escribe el filtro...",autocomplete:"off"},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}}),a("b-input-group-append",[a("b-button",{attrs:{disabled:!e.filter},on:{click:function(t){e.filter=""}}},[a("i",{staticClass:"fas fa-times"})])],1)],1)],1)],1),a("b-col",{attrs:{md:"3"}},[a("b-form-group",{attrs:{label:"Por página","label-cols-sm":"2","label-cols-md":"2","label-cols-lg":"4","label-size":"sm","label-for":"perPageSelect"}},[a("b-form-select",{attrs:{id:"perPageSelect",size:"sm",options:e.pageOptions},model:{value:e.perPage,callback:function(t){e.perPage=t},expression:"perPage"}})],1)],1),a("b-col",{attrs:{md:"3","offset-md":"2"}},[a("b-button",{staticClass:"btn btn-sm py-1 mt-1 btn-block",attrs:{variant:"primary"},on:{click:e.redirect}},[a("i",{staticClass:"fa fa-plus"}),e._v(" Nuevo ")])],1)],1),a("b-container",{attrs:{fluid:""}},[a("b-form-group",{attrs:{label:"Filtrar por planta:"}},[a("div",{staticClass:"row"},[a("b-form-checkbox-group",{attrs:{id:"checkbox-group-1",options:e.plantas,name:"flavour-1"},on:{change:e.seleccionados},model:{value:e.selectPlantas,callback:function(t){e.selectPlantas=t},expression:"selectPlantas"}}),e.items.length>0?a("b-col",{staticClass:"col-md-3 col-sm-12 col-12",attrs:{"align-self":"end"}},[a("b-button",{staticClass:"btn btn-sm py-1 mt-1 btn-block",attrs:{block:"",variant:"success"},on:{click:e.exportarExcel}},[a("i",{staticClass:"fas fa-file-excel"}),e._v(" Exportar Excel ")])],1):e._e()],1)])],1),a("b-table",{attrs:{small:"",stacked:"md","head-variant":"dark",hover:e.hover,striped:e.striped,bordered:e.bordered,items:e.items,fields:e.fields,"current-page":e.currentPage,"per-page":e.perPage,filter:e.filter,filterIncludedFields:e.filterOn,"sort-by":e.sortBy,"sort-desc":e.sortDesc,"sort-direction":e.sortDirection},on:{"update:sortBy":function(t){e.sortBy=t},"update:sort-by":function(t){e.sortBy=t},"update:sortDesc":function(t){e.sortDesc=t},"update:sort-desc":function(t){e.sortDesc=t},filtered:e.onFiltered},scopedSlots:e._u([{key:"cell(horaSalidaYPlanta)",fn:function(t){return[a("p",[e._v(e._s(e.hora(t.item.horaSalida))),a("br"),e._v(" "+e._s(t.item.nombrePlanta))])]}},{key:"cell(estatusPedido)",fn:function(t){return["T"===t.item.estatus?a("b-badge",{staticClass:"p-2",attrs:{variant:"success"}},[e._v(" Terminado ")]):e._e(),"P"===t.item.estatus?a("b-badge",{staticClass:"p-2",attrs:{variant:"secondary"}},[e._v(" Pendiente ")]):e._e(),"PV"===t.item.estatus?a("b-badge",{staticClass:"p-2",attrs:{variant:"secondary"}},[e._v(" Pendiente de Confirmar ")]):e._e(),"PC"===t.item.estatus?a("b-badge",{staticClass:"p-2",attrs:{variant:"primary"}},[e._v(" Pendiente de Confirmar ")]):e._e(),"RG"===t.item.estatus?a("b-badge",{staticClass:"p-2",attrs:{variant:"secondary"}},[e._v(" Reagendar ")]):e._e(),"S"===t.item.estatus?a("b-badge",{staticClass:"p-2",attrs:{variant:"info"}},[e._v(" Surtiendo ")]):e._e(),"C"===t.item.estatus?a("b-badge",{staticClass:"p-2",attrs:{variant:"danger"}},[e._v(" Cancelado ")]):e._e(),"DA"===t.item.estatus?a("b-badge",{staticClass:"p-2",attrs:{variant:"warning"}},[e._v(" Pendiente Autorización ")]):e._e(),"DC"===t.item.estatus?a("b-badge",{staticClass:"p-2",attrs:{variant:"warning"}},[e._v(" Pendiente Limite Credito ")]):e._e()]}},{key:"cell(acciones)",fn:function(t){return["PC"!=t.item.estatus&&"PV"!=t.item.estatus?a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mr-1",attrs:{disabled:"DA"===t.item.estatus||"DC"===t.item.estatus||"C"===t.item.estatus||"T"==t.item.estatus,size:"sm",variant:"primary",title:"Generar Nota Remisión"},on:{click:function(a){return e.generarNotaRemision(t.item)}}},[a("i",{staticClass:"fas fa-tasks"})]):e._e(),"PC"===t.item.estatus||"PV"===t.item.estatus?a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mr-1",attrs:{size:"sm",variant:"success",title:"Confirmar Pedido"},on:{click:function(a){return e.ConfirmarPedido(t.item)}}},[a("i",{staticClass:"fas fa-check"})]):e._e(),"PC"===t.item.estatus||"PV"===t.item.estatus||"RG"===t.item.estatus?a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mr-1",attrs:{size:"sm",variant:"secondary",title:"Reagendar"},on:{click:function(a){return e.ModalReagendarPedido(t.item)}}},[a("i",{staticClass:"fas fa-history"})]):e._e()]}},{key:"cell(cancelarPedido)",fn:function(t){return[a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mr-1",attrs:{disabled:"S"==t.item.estatus||"T"==t.item.estatus||"C"==t.item.estatus,size:"sm",variant:"danger",title:"Cancelar Pedido"},on:{click:function(a){return e.CancelarPedido(t.item)}}},[a("i",{staticClass:"fa fa-times"})])]}},{key:"cell(actions)",fn:function(t){return[a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mr-1",attrs:{size:"sm",title:"Ver Detalle",variant:"outline-info"},on:{click:function(a){return e.modal(t.item,t.index,a.target)}}},[a("i",{staticClass:"fa fa-eye"})]),a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mr-1",attrs:{to:e.rutaNuevo+t.item.folioPedido,disabled:"C"==t.item.estatus,size:"sm",title:"Editar",variant:"outline-info"}},[a("i",{staticClass:"fa fa-edit"})])]}}])}),a("b-pagination",{staticClass:"mt-1",attrs:{"total-rows":e.totalRows,"per-page":e.perPage,align:"center","aria-controls":"my-table"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mt-3"},[a("h3",[a("i",{staticClass:"fas fa-clipboard-list"}),e._v(" Pedidos")])])}],o=(a("99af"),a("4de4"),a("4160"),a("a15b"),a("d81d"),a("fb6a"),a("b64b"),a("d3b7"),a("07ac"),a("3ca3"),a("498a"),a("159b"),a("ddb0"),a("2b3d"),a("96cf"),a("1da1")),i=a("868f"),s=a("3965"),c=a("3d20"),l=a.n(c),d=a("c1df"),u=a.n(d),f={data:function(){var e=new Date,t=new Date(e.getFullYear(),e.getMonth(),e.getDate()),a=t.toISOString().slice(0,10);return{refresh:null,desde:a,hasta:a,items:[],itemsCopy:[],plantas:[],selectPlantas:[],totalRows:1,currentPage:1,perPage:5,pageOptions:[5,10,15],sortBy:"",sortDesc:!1,bordered:!0,hover:!0,striped:!0,sortDirection:"asc",filter:null,filterOn:[],fields:[{key:"folioPedido",label:"Pedido",sortable:!0,sortDirection:"desc"},{key:"cliente",label:"Cliente",sortable:!0,sortDirection:"desc"},{key:"vendedor",label:"Vendedor",sortable:!0,sortDirection:"desc"},{key:"formatoCantidad",label:"Cantidad",sortable:!0,class:"text-center"},{key:"nomenclatura",label:"Producto",sortable:!0,class:"text-center"},{key:"fechaSalida",label:"Fecha Salida",sortable:!0,class:"text-center"},{key:"horaSalidaYPlanta",label:"Hora Salida",sortable:!0,class:"text-center"},{key:"estatusPedido",label:"Estatus",sortable:!0,class:"text-center"},{key:"actions",label:"",class:"text-center"},{key:"acciones",label:"Acciones",class:"text-center"},{key:"cancelarPedido",label:"",class:"text-center"}],permisoEscritura:!0,rutaNuevo:"pedidos/registro/",modalShow:!1,headerBgVariant:"dark",headerTextVariant:"light",pedidoReagendar:{folioPedido:0,fechaSalida:"",horaSalida:"",motivo:""},folioPedidoCancelar:0,infoModal:{id:"info-modal",title:"",content:"",codigo:""},idSeleccionado:0}},components:{},mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.ObtenerPedidos();case 2:return t.next=4,e.CargarRenglones();case 4:e.refresh=setInterval((function(){e.ObtenerPedidos(),e.seleccionados()}),6e4),e.plantas.push({text:"Planta-1",value:1},{text:"Planta-2",value:2}),e.itemsCopy=e.items;case 7:case"end":return t.stop()}}),t)})))()},created:function(){},destroyed:function(){clearInterval(this.refresh)},computed:{sortOptions:function(){return this.fields.filter((function(e){return e.sortable})).map((function(e){return{text:e.label,value:e.key}}))}},methods:{exportarExcel:function(){this.$loading(!0);var e=Object.keys(this.items[0]).join("♪")+"\n";for(var t in this.items)e+=Object.values(this.items[t]).join("♪"),e+="\n";console.log("CSV #1 ",e),e=e.replaceAll(","," "),e=e.replaceAll("♪",","),console.log("CSV #2 ",e);var a=new Blob([e],{type:"text/csv"}),n=window.URL.createObjectURL(a),r=document.createElement("a");r.setAttribute("hidden",""),r.setAttribute("href",n),r.setAttribute("download","ListadoPedidos-".concat(this.desde,"-").concat(this.hasta,".csv")),document.body.appendChild(r),r.click(),document.body.removeChild(r),this.$loading(!1)},hora:function(e){console.log(e);var t=u()(e,"LT").format("LT");return t},onFiltered:function(e){this.totalRows=e.length,this.currentPage=1},seleccionados:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.length>0?(t.items=[],e.forEach((function(e){var a=[];a=t.itemsCopy.filter((function(t){return t.codPlanta==e})),a.forEach((function(e){return t.items.push(e)}))}))):t.ObtenerPedidos(),t.CargarRenglones();case 2:case"end":return a.stop()}}),a)})))()},buscarPedidos:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.ObtenerPedidos();case 2:e.itemsCopy=e.items;case 3:case"end":return t.stop()}}),t)})))()},ObtenerPedidos:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i["a"].obtenerParametro("PrimerAvisoSalida");case 2:return a=t.sent,t.next=5,i["a"].obtenerParametro("SegundoAvisoSalida");case 5:return n=t.sent,e.$loading(!0),t.next=9,s["a"].obtenerPedidos(0,e.desde,e.hasta).then((function(t){e.items=t.data,e.CargarRenglones(),console.log(t.data),t.data.forEach((function(e){var t=u()("".concat(e.fechaSalida," ").concat(e.horaSalida),"YYYY-MM-DD HH:mm").format("YYYY-MM-DD HH:mm"),r=u()().add(a.data.valor,"hours").format("YYYY-MM-DD HH:mm"),o=u()().add(n.data.valor,"hours").format("YYYY-MM-DD HH:mm");"T"==e.estatus&&(e._rowVariant="success"),"C"==e.estatus&&(e._rowVariant="danger"),"S"==e.estatus&&(e._rowVariant="primary"),"PC"!=e.estatus&&"PV"!=e.estatus&&"RG"!=e.estatus||(u()(r).isBefore(t)?s["a"].cambiarEstatus(e.folioPedido,"PC","Pendiente de confirmar"):u()(t).isBefore(o)?(s["a"].cambiarEstatus(e.folioPedido,"RG","Se acabó el tiempo"),e._rowVariant="warning"):s["a"].cambiarEstatus(e.folioPedido,"PV","Se acaba el tiempo"))})),e.$loading(!1)})).catch((function(e){console.log(e)}));case 9:case"end":return t.stop()}}),t)})))()},redirect:function(){var e=this;setTimeout((function(){e.$router.push({path:"".concat(e.rutaNuevo,"0")})}),500)},CargarRenglones:function(){var e=this;setTimeout((function(){e.totalRows=e.items.length,console.log(e.totalRows)}),1e3)},CancelarPedido:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if("S"!=e.estatus&&"T"!=e.estatus){a.next=4;break}t.$swal.fire({text:"No se puede cancelar el pedido seleccionado.",icon:"warning"}),a.next=11;break;case 4:return a.next=6,t.$swal.fire({text:"¿Desea cancelar el pedido de "+e.cliente+"?",icon:"question",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Aceptar",cancelButtonText:"Cancelar"});case 6:if(n=a.sent,!n.value){a.next=11;break}return t.folioPedidoCancelar=e.folioPedido,a.next=11,t.CapturarObservacion();case 11:case"end":return a.stop()}}),a)})))()},ConfirmarPedido:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if("PC"==e.estatus||"PV"==e.estatus){a.next=4;break}t.$swal.fire({text:"No se puede confirmar el pedido, favor de actualizar la pantalla.",icon:"warning"}),a.next=10;break;case 4:return a.next=6,t.$swal.fire({title:"¡ATENCIÓN!",text:"¿Desea confirmar el pedido del cliente: "+e.cliente+", para la obra: "+e.obra+", con la cantidad de: "+e.cantidad+"m³?",icon:"question",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Aceptar",cancelButtonText:"Cancelar"});case 6:if(n=a.sent,!n.value){a.next=10;break}return a.next=10,t.CambiarEstatusPedido(e.folioPedido,!0,"ok");case 10:case"end":return a.stop()}}),a)})))()},ModalReagendarPedido:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.modalShow=!0,t.pedidoReagendar.fechaSalida=e.fechaSalida,t.pedidoReagendar.horaSalida=e.horaSalida,t.pedidoReagendar.folioPedido=e.folioPedido,t.pedidoReagendar.motivo="";case 5:case"end":return a.stop()}}),a)})))()},ReagendarPedido:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""!==e.pedidoReagendar.motivo.trim()){t.next=4;break}e.$swal.fire({text:"El campo del motivo, no puede estar vacío.",icon:"warning"}),t.next=7;break;case 4:return console.log(e.pedidoReagendar),t.next=7,s["a"].reagendarPedido(e.pedidoReagendar).then((function(t){t.value&&(e.modalShow=!1,e.$swal.fire({text:t.message,icon:"success"}),e.ObtenerPedidos()),e.$loading(!1)})).catch((function(e){console.log(e)}));case 7:case"end":return t.stop()}}),t)})))()},generarNotaRemision:function(e){"DA"===e.estatus||"DC"===e.estatus?this.$swal.fire({text:"Favor de contactar al personal de credito y cobranza para autorizar el pedido pedido",icon:"warning"}):"C"===e.estatus?this.$swal.fire({text:"Favor de actualizar la pantalla.",icon:"warning"}):this.$router.push({path:"/dosificador/nota-de-remision/registro/".concat(e.folioPedido)})},CapturarObservacion:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l.a.fire({title:"Ingrese una observación:",html:'<textarea id="swal-input2" class="swal2-input" placeholder="Capture una observación" style="margin-top: 20px; margin-bottom: 20px; height: 120px;">',focusConfirm:!1,showCancelButton:!0,confirmButtonText:"Aceptar",cancelButtonText:"Cancelar",confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",preConfirm:function(){a=l.a.getPopup().querySelector("#swal-input2").value;var e=l.a.getPopup().querySelector("#swal-input2");e.style.borderColor="",""===a&&(e.style.borderColor="red",l.a.showValidationMessage("Favor de ingresar una observación."))}});case 2:if(n=t.sent,r=n.value,!r){t.next=8;break}return e.observacion=a,t.next=8,e.CambiarEstatusPedido(e.folioPedidoCancelar,!1,e.observacion);case 8:case"end":return t.stop()}}),t)})))()},CambiarEstatusPedido:function(e,t,a){var n=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n.$loading(!0),console.log(e,t,a),r.next=4,s["a"].cambiarEstatusPedido(e,t,a).then((function(e){n.folioPedidoCancelar=0,n.ObtenerPedidos(),e.value?n.$swal.fire({title:"¡ÉXITO!",text:e.message,icon:"success"}):n.$swal.fire({title:"¡ATENCIÓN!",text:e.message,icon:"info"}),n.$loading(!1)})).catch((function(e){console.log(e)}));case 4:case"end":return r.stop()}}),r)})))()},modal:function(e,t,a){var n="";this.idSeleccionado=e.codigo,this.infoModal.title="Datos del pedido #".concat(e.folioPedido),n+="{ ",n+='"Folio pedido" : ": '.concat(e.folioPedido,'\\n\\n", '),n+='"Cliente" : ":  '.concat(e.cliente,'\\n\\n",'),n+='"Fecha de Salida" : ":  '.concat(e.fechaSalida,'\\n\\n",'),n+='"Hora de Salida" : ":  '.concat(e.horaSalida,'\\n\\n",'),n+='"Obra" : ":  '.concat(e.obra,'\\n\\n",'),n+='"Cantidad" : ":  '.concat(e.cantidad,' m³\\n\\n",'),n+='"Cierre" : ":  '.concat(e.cierre?"Si":"No",'\\n\\n",'),n+='"Cantidad Cierre" : ":  '.concat(e.cantidadCierre,' m³\\n\\n",'),n+='"Vendedor" : ":  '.concat(e.vendedor,'\\n\\n",'),n+='"Usuario" : ":  '.concat(e.usuario,'\\n\\n",'),n+='"Observación" : ":  '.concat(e.observacion,'\\n\\n",'),n+='"E-1" : ":  '.concat(e.tieneFibra?" Fibra ":"N/A",' \\n\\n",'),n+='"E-2" : ":  '.concat(e.tieneImper?" Imper ":"N/A",' \\n\\n"'),n+="}",n=JSON.parse(n),this.infoModal.content=n,this.$root.$emit("bv::show::modal",this.infoModal.id,a)},resetInfoModal:function(){this.infoModal.title="",this.infoModal.content=""}}},m=f,p=a("2877"),b=Object(p["a"])(m,n,r,!1,null,"1c8021b8",null);t["default"]=b.exports},b64b:function(e,t,a){var n=a("23e7"),r=a("7b0b"),o=a("df75"),i=a("d039"),s=i((function(){o(1)}));n({target:"Object",stat:!0,forced:s},{keys:function(e){return o(r(e))}})},c8d2:function(e,t,a){var n=a("d039"),r=a("5899"),o="​᠎";e.exports=function(e){return n((function(){return!!r[e]()||o[e]()!=o||r[e].name!==e}))}},d81d:function(e,t,a){"use strict";var n=a("23e7"),r=a("b727").map,o=a("1dde"),i=a("ae40"),s=o("map"),c=i("map");n({target:"Array",proto:!0,forced:!s||!c},{map:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},fb6a:function(e,t,a){"use strict";var n=a("23e7"),r=a("861d"),o=a("e8b5"),i=a("23cb"),s=a("50c4"),c=a("fc6a"),l=a("8418"),d=a("b622"),u=a("1dde"),f=a("ae40"),m=u("slice"),p=f("slice",{ACCESSORS:!0,0:0,1:2}),b=d("species"),v=[].slice,h=Math.max;n({target:"Array",proto:!0,forced:!m||!p},{slice:function(e,t){var a,n,d,u=c(this),f=s(u.length),m=i(e,f),p=i(void 0===t?f:t,f);if(o(u)&&(a=u.constructor,"function"!=typeof a||a!==Array&&!o(a.prototype)?r(a)&&(a=a[b],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return v.call(u,m,p);for(n=new(void 0===a?Array:a)(h(p-m,0)),d=0;m<p;m++,d++)m in u&&l(n,d,u[m]);return n.length=d,n}})}}]);
//# sourceMappingURL=Pedidos.447a8d73.js.map