"use strict";(self["webpackChunk"]=self["webpackChunk"]||[]).push([[908],{5908:(a,l,e)=>{e.r(l),e.d(l,{default:()=>k});var n=e(641),o=e(33);const i={style:{width:"90%"}},d=(0,n.Lk)("div",{class:"mb-6"},[(0,n.Lk)("h2",null,"Planes de entrenamiento")],-1),t={class:"d-flex justify-end mt-6"},u=(0,n.Lk)("span",null,"Añadir Nuevo",-1);function r(a,l,e,r,s,m){const c=(0,n.g2)("v-btn"),k=(0,n.g2)("v-icon"),b=(0,n.g2)("v-row"),v=(0,n.g2)("v-form"),p=(0,n.g2)("v-text-field"),P=(0,n.g2)("v-spacer"),S=(0,n.g2)("v-card"),f=(0,n.g2)("v-dialog");return(0,n.uX)(),(0,n.CE)("div",i,[d,(0,n.Lk)("div",null,[(0,n.bF)(v,null,{default:(0,n.k6)((()=>[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(m.listadoPlanesSemanales,((a,l)=>((0,n.uX)(),(0,n.Wv)(b,{"no-gutters":"",class:"mb-2",key:a.idPlanSemanal},{default:(0,n.k6)((()=>[(0,n.bF)(c,{style:{width:"82%"},onClick:l=>m.push(a.idPlanSemanal)},{default:(0,n.k6)((()=>[(0,n.eW)((0,o.v_)(a.nombrePlanSemanal),1)])),_:2},1032,["onClick"]),(0,n.bF)(c,{style:{width:"4%"},color:"red",onClick:l=>m.eliminarPlan(a.idPlanSemanal)},{default:(0,n.k6)((()=>[(0,n.bF)(k,null,{default:(0,n.k6)((()=>[(0,n.eW)("mdi-delete")])),_:1})])),_:2},1032,["onClick"])])),_:2},1024)))),128))])),_:1})]),(0,n.Lk)("div",t,[(0,n.bF)(c,{onClick:l[0]||(l[0]=a=>s.dialog=!0)},{default:(0,n.k6)((()=>[(0,n.bF)(k,null,{default:(0,n.k6)((()=>[(0,n.eW)("mdi-plus")])),_:1}),u])),_:1})]),(0,n.bF)(f,{modelValue:s.dialog,"onUpdate:modelValue":l[3]||(l[3]=a=>s.dialog=a)},{default:(0,n.k6)((()=>[(0,n.bF)(S,{class:"pa-4"},{default:(0,n.k6)((()=>[(0,n.bF)(v,{class:"pa-4"},{default:(0,n.k6)((()=>[(0,n.bF)(b,null,{default:(0,n.k6)((()=>[(0,n.bF)(p,{label:"Nombre del plan",modelValue:s.nuevoPlanSemanal.nombre,"onUpdate:modelValue":l[1]||(l[1]=a=>s.nuevoPlanSemanal.nombre=a)},null,8,["modelValue"])])),_:1}),(0,n.bF)(b,null,{default:(0,n.k6)((()=>[(0,n.bF)(p,{label:"Descripcion del plan",modelValue:s.nuevoPlanSemanal.descripcion,"onUpdate:modelValue":l[2]||(l[2]=a=>s.nuevoPlanSemanal.descripcion=a)},null,8,["modelValue"])])),_:1})])),_:1}),(0,n.Lk)("div",null,[(0,n.bF)(b,{class:"pa-4"},{default:(0,n.k6)((()=>[(0,n.bF)(c,{onClick:m.cerrarDialog},{default:(0,n.k6)((()=>[(0,n.bF)(k,null,{default:(0,n.k6)((()=>[(0,n.eW)("mdi-close-box")])),_:1}),(0,n.eW)(" Cerrar ")])),_:1},8,["onClick"]),(0,n.bF)(P),(0,n.bF)(c,{onClick:m.accionGuardar},{default:(0,n.k6)((()=>[(0,n.bF)(k,null,{default:(0,n.k6)((()=>[(0,n.eW)("mdi-content-save-edit")])),_:1}),(0,n.eW)(" Guardar ")])),_:1},8,["onClick"])])),_:1})])])),_:1})])),_:1},8,["modelValue"])])}e(269);const s={data(){return{dialog:!1,nuevoPlanSemanal:{idPlanSemanal:0,nombre:"",descripcion:"",planDiario:[]}}},methods:{accionGuardar(){this.$store.commit("guardarPlanSemanalNuevo",{idPlanSemanal:this.nuevoPlanSemanal.idPlanSemanal,nombrePlanSemanal:this.nuevoPlanSemanal.nombre,descripcionPlanSemanal:this.nuevoPlanSemanal.descripcion,planDiario:this.nuevoPlanSemanal.planDiario}),this.cerrarDialog()},eliminarPlan(a){this.$store.commit("eliminarPlanSemanal",a)},cerrarDialog(){this.dialog=!1,this.nuevoPlanSemanal.nombrePlanSemanal="",this.nuevoPlanSemanal.descripcionPlanSemanal=""},push(a){return this.$router.push(`${this.$router.currentRoute._rawValue.path}/${a}`)}},computed:{listadoPlanesSemanales(){return this.$store.getters.listadoPlanesSemanales}}};var m=e(6262);const c=(0,m.A)(s,[["render",r]]),k=c}}]);
//# sourceMappingURL=908.6208df20.js.map