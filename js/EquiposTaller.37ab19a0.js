(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["EquiposTaller"],{e5a7:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"container my-5"},[e._m(0),s("table-sortable",{attrs:{items:e.items,fields:e.fields,rutaNuevo:e.rutaNuevo,permisoEscritura:e.permisoEscritura}})],1)])},o=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"my-5"},[s("h3",[s("i",{staticClass:"fas fa-truck"}),e._v(" Equipos")])])}],i=s("7230"),r=s("20af"),l={data:function(){return{rutaNuevo:"/catalogos/equipos/registro/",items:[],fields:[{key:"identificador",label:"Identificador",sortable:!0,class:"text-center"},{key:"descripcion",label:"Nombre",sortable:!0,sortDirection:"desc"},{key:"modelo",label:"Modelo",sortable:!0,class:"text-center"},{key:"tipoEquipo",label:"Tipo de equipo",sortable:!0,class:"text-center"},{key:"estatus",label:"Estatus",sortable:!0,class:"text-center"},{key:"actions",label:"Acciones"},{key:"estatusEquipos",label:"",sortable:!0,class:"text-center"}],permisoEscritura:!0}},components:{TableSortable:i["a"]},mounted:function(){var e=this;this.$loading(!0),r["a"].equipos().then((function(t){return e.items=t.data,e.$loading(!1),t.data})).catch((function(e){console.log(e)}))},methods:{}},c=l,n=s("2877"),u=Object(n["a"])(c,a,o,!1,null,"41df4a85",null);t["default"]=u.exports}}]);
//# sourceMappingURL=EquiposTaller.37ab19a0.js.map