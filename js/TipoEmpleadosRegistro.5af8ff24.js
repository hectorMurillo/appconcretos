(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["TipoEmpleadosRegistro"],{"159b":function(t,o,e){var n=e("da84"),a=e("fdbc"),r=e("17c2"),i=e("9112");for(var c in a){var u=n[c],s=u&&u.prototype;if(s&&s.forEach!==r)try{i(s,"forEach",r)}catch(l){s.forEach=r}}},"17c2":function(t,o,e){"use strict";var n=e("b727").forEach,a=e("a640"),r=e("ae40"),i=a("forEach"),c=r("forEach");t.exports=i&&c?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"20af":function(t,o,e){"use strict";e("99af");var n=e("572a"),a={equipos:function(t){return null==t||void 0==t||0==t?n["a"].get("/equipos/todos").then((function(t){return t.data})).catch((function(t){return t})):n["a"].get("/equipos/".concat(t)).then((function(t){return console.log("EQUIPO ",t.data),t.data})).catch((function(t){return t}))},guardar:function(t){return console.log(t),n["a"].post("/equipos/guardar",t,{headers:{"Content-Type":"application/json"}}).then((function(t){return t.data})).catch((function(t){return t}))},marcas:function(t){return t=null==t||void 0==t?0:t,n["a"].get("/equipos/marcas/".concat(t)).then((function(t){return t.data})).catch((function(t){return t}))},modelos:function(t){return t=null==t||void 0==t?0:t,n["a"].get("/equipos/modelos/".concat(t)).then((function(t){return t.data})).catch((function(t){return t}))},marcasCombo:function(){return n["a"].get("/equipos/marcasCombo").then((function(t){return t.data})).catch((function(t){return t}))},modelosCombo:function(){return n["a"].get("/equipos/modelosCombo").then((function(t){return t.data})).catch((function(t){return t}))},tanquesDiesel:function(t){return t=null==t||void 0==t?0:t,n["a"].get("/equipos/tanques/".concat(t)).then((function(t){return t.data})).catch((function(t){return t}))},tipoEquipoCombo:function(){return n["a"].get("/equipos/tipoEquipoCombo").then((function(t){return t.data})).catch((function(t){return t}))},obtenerConsumiblesCombo:function(){return n["a"].get("/equipos/consumiblesCombo").then((function(t){return t.data})).catch((function(t){return t}))},guardarMarca:function(t){return n["a"].post("/equipos/guardar/marca",t,{headers:{"Content-Type":"application/json"}}).then((function(t){return t.data})).catch((function(t){return t}))},guardarModelo:function(t){return n["a"].post("/equipos/guardar/modelo",t,{headers:{"Content-Type":"application/json"}}).then((function(t){return t.data})).catch((function(t){return t}))},guardarTanque:function(t){return n["a"].post("/equipos/guardar/tanque",t,{headers:{"Content-Type":"application/json"}}).then((function(t){return t.data})).catch((function(t){return t}))},tiposEquipo:function(t){return t=null==t||void 0==t?0:t,n["a"].get("/equipos/tiposEquipo/".concat(t)).then((function(t){return t.data})).catch((function(t){return t}))},guardarTipoEquipo:function(t){return n["a"].post("/equipos/guardar/tipoEquipo",t,{headers:{"Content-Type":"application/json"}}).then((function(t){return t.data})).catch((function(t){return t}))},entradasSalidas:function(t){return n["a"].get("/equipos/entradasSalidas/".concat(t)).then((function(t){return t.data})).catch((function(t){return t}))},actualizarEstatusEquipo:function(t,o){return n["a"].get("/equipos/actualizar-estatus/".concat(t,"/").concat(o)).then((function(t){return console.log(t),t.data})).catch((function(t){return t}))}};o["a"]=a},4160:function(t,o,e){"use strict";var n=e("23e7"),a=e("17c2");n({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},"77c1":function(t,o,e){"use strict";e.r(o);var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"container py-5"},[t._m(0),e("div",{staticClass:"py-5"},[e("b-form",{on:{submit:t.onSubmit}},[e("b-row",[e("b-col",{staticClass:"col-md-5 col-sm-12 col-12"},[e("b-form-group",{attrs:{id:"input-group-2",label:"Tipo de empleado","label-for":"txtTipoEmpleado"}},[e("b-form-input",{ref:"txtTipoEmpleado",staticClass:"text-capitalize",attrs:{id:"txtTipoEmpleado",type:"text",required:"",placeholder:"Sistemas"},model:{value:t.form.tipoEmpleado,callback:function(o){t.$set(t.form,"tipoEmpleado",o)},expression:"form.tipoEmpleado"}})],1)],1),e("b-col",{staticClass:"col-md-5 col-sm-12 col-12"},[e("b-form-group",{attrs:{id:"input-group-4",label:"Tipo de equipo","label-for":"cboTipo"}},[e("b-form-select",{attrs:{options:t.tiposEquipo,id:"cboTipo"},model:{value:t.form.codTipoEquipo,callback:function(o){t.$set(t.form,"codTipoEquipo",o)},expression:"form.codTipoEquipo"}})],1)],1),e("b-col",{directives:[{name:"show",rawName:"v-show",value:t.mostrarEstatus,expression:"mostrarEstatus"}],staticClass:"col-md-2 col-sm-12 col-12"},[e("b-form-group",{attrs:{label:"Estatus:"}},[e("b-form-checkbox",{attrs:{id:"chckEstatus",name:"chckEstatus",switch:"",size:"lg"},model:{value:t.form.estatus,callback:function(o){t.$set(t.form,"estatus",o)},expression:"form.estatus"}},[t._v(" "+t._s(t.form.estatus?"Activo":"Inactivo")+" ")])],1)],1)],1),e("b-row",[e("b-col",{staticClass:"col-md-6 col-sm-12 col-12",attrs:{"align-self":"end"}}),e("b-col",{staticClass:"col-md-3 col-sm-12 col-12",attrs:{"align-self":"end"}},[e("b-button",{staticClass:"mr-2 mt-2",attrs:{type:"submit",block:"",variant:"success"}},[e("i",{staticClass:"fa fa-save"}),t._v(" Guardar ")])],1),e("b-col",{staticClass:"col-md-3 col-sm-12 col-12",attrs:{"align-self":"end"}},[e("b-button",{staticClass:"mr-2 mt-2",attrs:{block:"",variant:"danger"},on:{click:t.cancelar}},[t._v(" Cancelar ")])],1)],1)],1)],1)])},a=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("h3",[e("i",{staticClass:"fas"}),t._v(" Registro de tipos de empleado")])}],r=(e("4160"),e("159b"),e("acec")),i=e("20af"),c={data:function(){return{mostrarEstatus:!1,codTipoEmpleado:0,form:{tipoEmpleado:"",estatus:!0,codTipoEquipo:0},tiposEquipo:[{value:0,text:"Seleccione el equipo"}]}},mounted:function(){this.consultarTipos(),this.$refs.txtTipoEmpleado.focus(),this.codTipoEmpleado=parseInt(this.getUrlParameter("id")),this.codTipoEmpleado>0&&(this.cargarTipoEmpleado(),this.mostrarEstatus=!0)},methods:{onSubmit:function(t){t.preventDefault(),this.guardarTipoEmpleado()},cargarTipoEmpleado:function(){var t=this;this.codTipoEmpleado=parseInt(this.getUrlParameter("id")),this.$loading(!0),this.codTipoEmpleado>0&&r["a"].tiposEmpleado(this.codTipoEmpleado).then((function(o){t.form.tipoEmpleado=o.data[0].descripcion,t.form.estatus=o.data[0].estatus,t.form.codigoTipoEquipo=o.data[0].codTipoEquipo})).catch((function(t){console.log(t)})),this.$loading(!1)},consultarTipos:function(){var t=this;i["a"].tipoEquipoCombo().then((function(o){console.log(o),o.value&&o.data.forEach((function(o){var e={value:o.codigo,text:o.descripcion};t.tiposEquipo.push(e)}))}))},guardarTipoEmpleado:function(){var t=this,o={codigo:this.codTipoEmpleado,descripcion:this.form.tipoEmpleado,estatus:this.form.estatus,codTipoEquipo:this.form.codTipoEquipo};r["a"].guardarTipoEmpleado(o).then((function(o){o.value?(t.$swal.fire({text:o.message,icon:"success"}),window.history.back()):t.$swal.fire({text:o.message,icon:"error"})}))},cancelar:function(){var t=0==this.codTipoEmpleado?"¿Desea cancelar el registro de un nuevo tipo de empleado?":"¿Desea cancelar la actualización del registro?";console.log(t),this.$swal.fire({title:t,text:"",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, volver al catálogo",cancelButtonText:"Cancelar"}).then((function(t){t.value&&window.history.back()}))}}},u=c,s=e("2877"),l=Object(s["a"])(u,n,a,!1,null,"1dad2be0",null);o["default"]=l.exports},8418:function(t,o,e){"use strict";var n=e("c04e"),a=e("9bf2"),r=e("5c6c");t.exports=function(t,o,e){var i=n(o);i in t?a.f(t,i,r(0,e)):t[i]=e}},"99af":function(t,o,e){"use strict";var n=e("23e7"),a=e("d039"),r=e("e8b5"),i=e("861d"),c=e("7b0b"),u=e("50c4"),s=e("8418"),l=e("65f0"),p=e("1dde"),d=e("b622"),f=e("2d00"),m=d("isConcatSpreadable"),h=9007199254740991,g="Maximum allowed index exceeded",E=f>=51||!a((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),b=p("concat"),T=function(t){if(!i(t))return!1;var o=t[m];return void 0!==o?!!o:r(t)},v=!E||!b;n({target:"Array",proto:!0,forced:v},{concat:function(t){var o,e,n,a,r,i=c(this),p=l(i,0),d=0;for(o=-1,n=arguments.length;o<n;o++)if(r=-1===o?i:arguments[o],T(r)){if(a=u(r.length),d+a>h)throw TypeError(g);for(e=0;e<a;e++,d++)e in r&&s(p,d,r[e])}else{if(d>=h)throw TypeError(g);s(p,d++,r)}return p.length=d,p}})},acec:function(t,o,e){"use strict";var n=e("572a"),a={empleados:function(){return n["a"].get("/empleados/todos").then((function(t){return console.log(t.data),t.data})).catch((function(t){return t}))},obtenerPersonalCargaDiesel:function(t){return t=null==t||void 0==t||0==t?0:t,n["a"].get("/empleados/personalCargaDiesel/".concat(t)).then((function(t){return t.data})).catch((function(t){return t}))},tipos:function(){return n["a"].get("/empleados/tipos").then((function(t){return t.data})).catch((function(t){return t}))},tiposUtilizados:function(){return n["a"].get("/empleados/tiposUtilizados").then((function(t){return t.data})).catch((function(t){return t}))},guardarEmpleado:function(t){return n["a"].post("/empleados/guardar",t,{headers:{"Content-Type":"application/json"}}).then((function(t){return t.data})).catch((function(t){console.log(t)}))},subtipo:function(t){return n["a"].post("/empleados/SubTipos",{codTipo:t},{headers:{"Content-Type":"application/json"}}).then((function(t){return console.log("SUBTIPOSSS-> ",t),t.data})).catch((function(t){console.log(t)}))},obtenerEmpleado:function(t){return n["a"].get("/Empleados/".concat(t)).then((function(t){return t.data})).catch((function(t){return t}))},tiposEmpleado:function(t){return t=null==t||void 0==t?0:t,n["a"].get("/empleados/tiposEmpleado/".concat(t)).then((function(t){return t.data})).catch((function(t){return t}))},guardarTipoEmpleado:function(t){return n["a"].post("/empleados/guardar/tipoEmpleado",t,{headers:{"Content-Type":"application/json"}}).then((function(t){return t.data})).catch((function(t){return t}))}};o["a"]=a},fdbc:function(t,o){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=TipoEmpleadosRegistro.5af8ff24.js.map