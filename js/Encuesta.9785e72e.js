(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Encuesta"],{"0a4d":function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"container-fluid color"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 text-right color-fondo"},[s("img",{attrs:{src:t("e090"),height:"80px"}})])]),e._m(0),e.encuestaResuelta?s("div",{staticClass:"d-flex justify-content-center my-4"},[s("h1",[e._v("LA ENCUESTA YA FUE PREVIAMENTE COMPLETADA")])]):e._e(),e.encuestaResuelta?e._e():s("div",[e._m(1),e._m(2),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("label",{staticClass:"textoEncabezado",attrs:{for:""}},[e._v(" En general, ¿qué grado de satisfacción tiene hacia del servicio?")]),s("vue-feedback-reaction",{staticStyle:{"font-size":"19"},attrs:{labels:["Muy mal","Mal","Normal","Bueno","Excelente"]},model:{value:e.feedbackGral,callback:function(a){e.feedbackGral=a},expression:"feedbackGral"}})],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("label",{staticClass:"textoEncabezado",attrs:{for:""}},[e._v(" ¿Cómo valora la atención recibida por el Personal ?")]),s("vue-feedback-reaction",{attrs:{labels:["Muy mal","Mal","Normal","Bueno","Excelente"]},model:{value:e.feedbackPersonal,callback:function(a){e.feedbackPersonal=a},expression:"feedbackPersonal"}})],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("label",{staticClass:"textoEncabezado",attrs:{for:""}},[e._v(" ¿Que opinión le merece el cumplimiento de los plazos de entrega del producto?")]),s("vue-feedback-reaction",{attrs:{labels:["Muy mal","Mal","Normal","Bueno","Excelente"],"label-class":"font-medium text-sm text-gray-500"},model:{value:e.feedbackPlazo,callback:function(a){e.feedbackPlazo=a},expression:"feedbackPlazo"}})],1)]),s("div",{staticClass:"row mt-5"},[e._m(3),s("div",{staticClass:"col-12"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.comentarios,expression:"comentarios"}],staticClass:"form-control",domProps:{value:e.comentarios},on:{input:function(a){a.target.composing||(e.comentarios=a.target.value)}}})])]),s("div",{staticClass:"row mt-3"},[s("div",{staticClass:"col-12 mb-2"},[s("button",{staticClass:"btn btn-primary col-12",on:{click:e.enviar}},[e._v("Enviar")])])])])])},o=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"mt-3"},[t("h2",{staticClass:"text-center"},[e._v("¡ GRACIAS POR TU PREFERENCIA !")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"row mt-4"},[t("div",{staticClass:"col-12"},[t("h5",{staticClass:"text-center",attrs:{for:"encabezado"}},[e._v(" ENCUESTA DE SATISFACCIÓN DEL CLIENTE ")])])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"row mt-4"},[t("div",{staticClass:"col-12"},[t("p",{staticClass:"text-justify",staticStyle:{"font-size":"20px"},attrs:{for:"msg"}},[e._v(" Fue un placer para nosotros Concreto2H el haberle prestado de sus servicios, estamos en constante crecimiento es por ello que su opinión es de suma importancia. ")])])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"col-12"},[t("label",{staticClass:"textoEncabezado",attrs:{for:"opinion"}},[e._v("Dejenos sus observaciones: ")])])}],c=t("572a"),i={guardarValoracion:function(e){return c["a"].post("/correos/guardarValoracion",{datos:e}).then((function(e){return e.data})).catch((function(e){return e}))},verificarEncuesta:function(e){return c["a"].post("/correos/verificarEncuesta",{codPedido:e}).then((function(e){return e.data})).catch((function(e){return e}))}},n=i,r={data:function(){return{encuestaResuelta:!1,feedbackGral:"",feedbackPersonal:"",feedbackPlazo:"",comentarios:"",codPedido:0}},created:function(){this.codPedido=void 0!=this.$route.params.id?this.$route.params.id:0},mounted:function(){this.varificarEncuestaValoracion()},methods:{enviar:function(){var e=this,a={codPedido:this.codPedido,general:this.feedbackGral,personal:this.feedbackPersonal,producto:this.feedbackPlazo,comentarios:this.comentarios};this.$loading(!0),n.guardarValoracion(a).then((function(){e.varificarEncuestaValoracion(),e.$loading(!1)})).catch((function(a){e.$loading(!1),console.error(a)}))},varificarEncuestaValoracion:function(){var e=this;this.$loading(!0),n.verificarEncuesta(this.codPedido).then((function(a){a.value?e.encuestaResuelta=!1:e.encuestaResuelta=!0,e.$loading(!1)})).catch((function(a){e.$loading(!1),console.error(a)}))}}},l=r,d=(t("98e8"),t("2877")),u=Object(d["a"])(l,s,o,!1,null,"3387f882",null);a["default"]=u.exports},"98e8":function(e,a,t){"use strict";var s=t("b1b7"),o=t.n(s);o.a},b1b7:function(e,a,t){},e090:function(e,a,t){e.exports=t.p+"img/C2H.4515406f.png"}}]);
//# sourceMappingURL=Encuesta.9785e72e.js.map