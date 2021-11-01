(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["VendedoresRegistro"],{"23aa":function(e,t,r){"use strict";var o=r("d1af"),a=r.n(o);a.a},af03:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"container mt-3"},[r("div",[0==e.parametro?r("h3",[r("i",{staticClass:"fas fa-users"}),e._v(" Registrar Vendedor")]):e._e(),e.parametro>0?r("h3",[r("i",{staticClass:"fas fa-users"}),e._v(" Actualizar Vendedor")]):e._e(),r("hr")]),r("b-form",{on:{submit:e.onSubmit}},[r("b-row",[r("b-col",{staticClass:"col-md-4 col-sm-12 col-12"},[r("b-form-group",{attrs:{id:"input-group-1",label:"Nombre *","label-for":"txtNombre"}},[r("b-form-input",{staticClass:"text-capitalize",attrs:{id:"txtNombre",type:"text",required:"",placeholder:"Nombre(s)"},model:{value:e.form.nombre,callback:function(t){e.$set(e.form,"nombre",t)},expression:"form.nombre"}})],1)],1),r("b-col",{staticClass:"col-md-4 col-sm-12 col-12"},[r("b-form-group",{attrs:{id:"input-group-2",label:"Apellido Paterno *","label-for":"txtApellidoP"}},[r("b-form-input",{staticClass:"text-capitalize",attrs:{id:"txtApellidoP",type:"text",required:"",placeholder:"Apellido Paterno"},model:{value:e.form.apellidoP,callback:function(t){e.$set(e.form,"apellidoP",t)},expression:"form.apellidoP"}})],1)],1),r("b-col",{staticClass:"col-md-4 col-sm-12 col-12"},[r("b-form-group",{attrs:{id:"input-group-3",label:"Apellido Materno *","label-for":"txtApellidoM"}},[r("b-form-input",{staticClass:"text-capitalize",attrs:{id:"txtApellidoM",type:"text",required:"",placeholder:"Apellido Materno"},model:{value:e.form.apellidoM,callback:function(t){e.$set(e.form,"apellidoM",t)},expression:"form.apellidoM"}})],1)],1)],1),r("b-row",[r("b-col",{staticClass:"col-md-4 col-sm-12 col-12"},[r("b-form-group",{attrs:{id:"input-group-4",label:"RFC","label-for":"txtRFC"}},[r("b-form-input",{staticClass:"text-uppercase",attrs:{id:"txtRFC",type:"text",placeholder:"RFC...",state:e.form.rFCValidate.esValido},model:{value:e.form.rFC,callback:function(t){e.$set(e.form,"rFC",t)},expression:"form.rFC"}}),""!=e.form.rFC?r("b-form-invalid-feedback",{attrs:{id:"input-live-feedback"}},[e._v(" Usa el formato válido para el RFC ")]):e._e()],1)],1),r("b-col",{staticClass:"col-md-4 col-sm-12 col-12"},[r("b-form-group",{attrs:{id:"input-group-4",label:"Número de celular *","label-for":"txtCelular"}},[r("b-form-input",{attrs:{id:"txtCelular",type:"text",required:"",placeholder:"Número de celular..."},model:{value:e.form.celular,callback:function(t){e.$set(e.form,"celular",t)},expression:"form.celular"}})],1)],1),r("b-col",{staticClass:"col-md-4 col-sm-12 col-12"},[r("b-form-group",{attrs:{id:"input-group-4",label:"Correo electrónico *","label-for":"txtCorreoE"}},[r("b-form-input",{attrs:{id:"txtCorreoE",type:"email",required:"",placeholder:"Correo electrónico..."},model:{value:e.form.correo,callback:function(t){e.$set(e.form,"correo",t)},expression:"form.correo"}})],1)],1)],1),r("b-row",{staticClass:"mt-3"},[r("b-col",{staticClass:"col-md-6 col-sm-12 col-12",attrs:{"align-self":"end"}}),r("b-col",{staticClass:"col-md-3 col-sm-12 col-12",attrs:{"align-self":"end"}},[r("b-button",{staticClass:"mr-2 mt-2",attrs:{type:"submit",block:"",variant:"success"}},[r("i",{staticClass:"fa fa-save"}),e._v(" Guardar ")])],1),r("b-col",{staticClass:"col-md-3 col-sm-12 col-12",attrs:{"align-self":"end"}},[r("b-button",{staticClass:"mr-2 mt-2",attrs:{block:"",variant:"danger"},on:{click:e.cancelar}},[e._v(" Cancelar ")])],1)],1)],1)],1)])},a=[],l=(r("96cf"),r("1da1")),n=r("b52f"),i=r("3d20"),c=r.n(i),s={data:function(){return{form:{nombre:"",apellidoP:"",apellidoM:"",rFC:"",estatus:1,codigo:0,tipoEmpleado:"",celular:"",correo:"",codigoTipoEmpleado:4,rFCValidate:{msg:"",esValido:null}},parametro:0}},components:{},mounted:function(){this.parametro=void 0!=this.$route.params.id?this.$route.params.id:0,console.log("P->",this.parametro),this.parametro>0&&this.CargarVendedor()},created:function(){},watch:{"form.rFC":function(e){console.log(this.form.rFC),""!=this.form.rFC?(this.form.rFC=this.form.rFC.toUpperCase(),/^([A-Z,Ñ,&]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[A-Z|\d]{3})$/.test(e)?(this.form.rFCValidate.esValido=!0,this.form.rFCValidate.msg="El RFC es válido"):(this.form.rFCValidate.esValido=!1,this.form.rFCValidate.msg="El RFC NO es válido")):(this.form.rFCValidate.esValido=null,this.form.rFCValidate.msg="")}},computed:{},methods:{onSubmit:function(e){e.preventDefault(),this.guardarVendedor()},guardarVendedor:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.a.fire({title:"¡ATENCIÓN!",text:"¿Desea guardar el Vendedor?",showCancelButton:!0,icon:"question",confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Aceptar",cancelButtonText:"Cancelar"});case 2:if(r=t.sent,!r.value){t.next=7;break}return e.$loading(!0),t.next=7,n["a"].guardarVendedor(e.form).then((function(t){t.value?(c.a.fire("¡EXITO!","Se guardo correctamente el Vendedor","success"),window.history.back()):c.a.fire("¡ATENCIÓN!",t.message,"error"),e.$loading(!1)})).catch((function(t){console.log(t),e.$loading(!1)}));case 7:case"end":return t.stop()}}),t)})))()},cancelar:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=0==e.parametro?"¿Desea cancelar el registro de un nuevo vendedor?":"¿Desea cancelar la actualización del vendedor?",console.log(r),t.next=4,c.a.fire({title:"¡ATENCIÓN!",text:r,showCancelButton:!0,icon:"question",confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Aceptar",cancelButtonText:"Cancelar"});case 4:o=t.sent,o.value&&window.history.back();case 6:case"end":return t.stop()}}),t)})))()},CargarVendedor:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$loading(!0),t.next=3,n["a"].obtenerVendedores(e.parametro).then((function(t){t.value&&(e.form.codigo=t.data[0].codigo,e.form.nombre=t.data[0].nombre,e.form.apellidoP=t.data[0].apellidoP,e.form.apellidoM=t.data[0].apellidoM,e.form.rFC=t.data[0].rFC,e.form.celular=t.data[0].celular,e.form.correo=t.data[0].correo),e.$loading(!1)})).catch((function(t){console.log(t),e.$loading(!1)}));case 3:case"end":return t.stop()}}),t)})))()}}},d=s,u=(r("23aa"),r("2877")),m=Object(u["a"])(d,o,a,!1,null,"5082cecb",null);t["default"]=m.exports},b52f:function(e,t,r){"use strict";var o=r("572a"),a={obtenerVendedores:function(e){return o["a"].get("/vendedores/todos/".concat(e)).then((function(e){return e.data})).catch((function(e){return e}))},guardarVendedor:function(e){return o["a"].post("/Vendedores/guardar",e,{headers:{"Content-Type":"application/json"}}).then((function(e){return e.data})).catch((function(e){return e}))}};t["a"]=a},d1af:function(e,t,r){}}]);
//# sourceMappingURL=VendedoresRegistro.044a093c.js.map