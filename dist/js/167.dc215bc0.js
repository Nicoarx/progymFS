"use strict";(self["webpackChunk"]=self["webpackChunk"]||[]).push([[167],{9699:(t,e,n)=>{n.d(e,{A:()=>k});var o=n(641);const i=(0,o.Lk)("span",null,"Inicio",-1),u=(0,o.Lk)("span",null,"Entrenamiento",-1),r=(0,o.Lk)("span",null,"Rutina",-1),a=(0,o.Lk)("span",null,"Clientes",-1),s=(0,o.Lk)("span",null,"Estadisticas",-1);function l(t,e,n,l,c,d){const p=(0,o.g2)("v-icon"),v=(0,o.g2)("v-btn"),k=(0,o.g2)("v-bottom-navigation");return(0,o.uX)(),(0,o.Wv)(k,{grow:""},{default:(0,o.k6)((()=>[(0,o.bF)(v,{value:"agenda",onClick:e[0]||(e[0]=t=>d.push("/inicio"))},{default:(0,o.k6)((()=>[(0,o.bF)(p,{icon:"mdi-home"}),i])),_:1}),d.condicion?((0,o.uX)(),(0,o.Wv)(v,{key:0,value:"entrenamiento",onClick:e[1]||(e[1]=t=>d.push("/entrenamientos"))},{default:(0,o.k6)((()=>[(0,o.bF)(p,{icon:"mdi-weight-lifter"}),u])),_:1})):(0,o.Q3)("",!0),d.condicion?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.Wv)(v,{key:1,value:"rutina",onClick:e[2]||(e[2]=t=>d.push(`/entrenamientos/${d.rutina}`))},{default:(0,o.k6)((()=>[(0,o.bF)(p,{icon:"mdi-weight-lifter"}),r])),_:1})),d.condicion?((0,o.uX)(),(0,o.Wv)(v,{key:2,value:"clientes",onClick:e[3]||(e[3]=t=>d.push("/clientes"))},{default:(0,o.k6)((()=>[(0,o.bF)(p,{icon:"mdi-account-group"},{default:(0,o.k6)((()=>[(0,o.eW)("mdi-account-group")])),_:1}),a])),_:1})):(0,o.Q3)("",!0),d.condicion?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.Wv)(v,{key:3,value:"estadisticas"},{default:(0,o.k6)((()=>[(0,o.bF)(p,{icon:"mdi-account-group"},{default:(0,o.k6)((()=>[(0,o.eW)("mdi-file-chart")])),_:1}),s])),_:1}))])),_:1})}var c=n(269);const d={methods:{push(t){return 1==this.$store.getters.tipoUsuario?this.$router.push(`/entrenador${t}`):this.$router.push(`/cliente${t}`)}},computed:{condicion(){return 1==this.$store.getters.tipoUsuario},rutina(){return c.A.rutinaCliente()}}};var p=n(6262);const v=(0,p.A)(d,[["render",l]]),k=v},9441:(t,e,n)=>{n.d(e,{A:()=>c});var o=n(641),i=n(33);const u=(0,o.Lk)("span",null,"Perfil",-1);function r(t,e,n,r,a,s){const l=(0,o.g2)("v-toolbar-title"),c=(0,o.g2)("v-spacer"),d=(0,o.g2)("v-icon"),p=(0,o.g2)("v-btn"),v=(0,o.g2)("v-toolbar");return(0,o.uX)(),(0,o.Wv)(v,{class:"mb-6"},{default:(0,o.k6)((()=>[(0,o.bF)(l,null,{default:(0,o.k6)((()=>[(0,o.eW)(" Bienvenido, "+(0,i.v_)(s.username),1)])),_:1}),(0,o.bF)(c),(0,o.bF)(p,{onClick:e[0]||(e[0]=t=>s.push())},{default:(0,o.k6)((()=>[(0,o.bF)(d,{icon:"mdi-account"}),u])),_:1})])),_:1})}const a={data(){return{}},methods:{push(){return 1==this.$store.getters.tipoUsuario?this.$router.push("/entrenador/perfil"):this.$router.push("/cliente/perfil")}},computed:{username(){return this.$store.getters.profileInfo.nombre}}};var s=n(6262);const l=(0,s.A)(a,[["render",r]]),c=l},7167:(t,e,n)=>{n.r(e),n.d(e,{default:()=>d});var o=n(641),i=n(3751);function u(t,e,n,u,r,a){const s=(0,o.g2)("topToolbar"),l=(0,o.g2)("router-view"),c=(0,o.g2)("bottomNav");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(s),(0,o.bF)(l,null,{default:(0,o.k6)((({Component:t})=>[(0,o.bF)(i.eB,{mode:"out-in"},{default:(0,o.k6)((()=>[((0,o.uX)(),(0,o.CE)("div",{class:"d-flex justify-center",key:this.$route.fullPath},[((0,o.uX)(),(0,o.Wv)((0,o.$y)(t)))]))])),_:2},1024)])),_:1}),(0,o.bF)(c)],64)}var r=n(9699),a=n(9441);const s={components:{bottomNav:r.A,topToolbar:a.A}};var l=n(6262);const c=(0,l.A)(s,[["render",u]]),d=c}}]);
//# sourceMappingURL=167.dc215bc0.js.map