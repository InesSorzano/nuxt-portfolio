import{u as P,d as B,e as H,f as j,h as U,r as N,g as G,i as J,j as L,k as X,p as Z,l as Q,w as W,m as Y,n as K,_ as C,o as x,c as S,a as e,q as I,s as y,F as $,v as ee,x as u,y as p,z as R,A as te,B as ne,C as se,D as oe,E as T,G as ae,H as le}from"./entry.48a53ff8.js";async function M(t,n=P()){const{path:a,matched:s}=n.resolve(t);if(!s.length||(n._routePreloaded||(n._routePreloaded=new Set),n._routePreloaded.has(a)))return;const l=n._preloadPromises=n._preloadPromises||[];if(l.length>4)return Promise.all(l).then(()=>M(t,n));n._routePreloaded.add(a);const r=s.map(o=>{var d;return(d=o.components)==null?void 0:d.default}).filter(o=>typeof o=="function");for(const o of r){const d=Promise.resolve(o()).catch(()=>{}).finally(()=>l.splice(l.indexOf(d)));l.push(d)}await Promise.all(l)}const A=globalThis.requestIdleCallback||(t=>{const n=Date.now(),a={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-n))};return setTimeout(()=>{t(a)},1)}),re=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),ie=t=>{const n=B();n.isHydrating?n.hooks.hookOnce("app:suspense:resolve",()=>{A(t)}):A(t)},ce=(...t)=>t.find(n=>n!==void 0),de="noopener noreferrer";function ue(t){const n=t.componentName||"NuxtLink",a=(s,l)=>{if(!s||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return s;const r=t.trailingSlash==="append"?W:Y;if(typeof s=="string")return r(s,!0);const o="path"in s?s.path:l(s).path;return{...s,name:void 0,path:r(o,!0)}};return H({name:n,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(s,{slots:l}){const r=P(),o=j(()=>{const c=s.to||s.href||"";return a(c,r.resolve)}),d=j(()=>s.external||s.target&&s.target!=="_self"?!0:typeof o.value=="object"?!1:o.value===""||U(o.value,{acceptRelative:!0})),h=N(!1),m=N(null),k=c=>{var g;m.value=s.custom?(g=c==null?void 0:c.$el)==null?void 0:g.nextElementSibling:c==null?void 0:c.$el};if(s.prefetch!==!1&&s.noPrefetch!==!0&&s.target!=="_blank"&&!fe()){const g=B();let v,f=null;G(()=>{const E=me();ie(()=>{v=A(()=>{var b;(b=m==null?void 0:m.value)!=null&&b.tagName&&(f=E.observe(m.value,async()=>{f==null||f(),f=null;const _=typeof o.value=="string"?o.value:r.resolve(o.value).fullPath;await Promise.all([g.hooks.callHook("link:prefetch",_).catch(()=>{}),!d.value&&M(o.value,r).catch(()=>{})]),h.value=!0}))})})}),J(()=>{v&&re(v),f==null||f(),f=null})}return()=>{var E,b;if(!d.value){const _={ref:k,to:o.value,activeClass:s.activeClass||t.activeClass,exactActiveClass:s.exactActiveClass||t.exactActiveClass,replace:s.replace,ariaCurrentValue:s.ariaCurrentValue,custom:s.custom};return s.custom||(h.value&&(_.class=s.prefetchedClass||t.prefetchedClass),_.rel=s.rel),L(X("RouterLink"),_,l.default)}const c=typeof o.value=="object"?((E=r.resolve(o.value))==null?void 0:E.href)??null:o.value||null,g=s.target||null,v=s.noRel?null:ce(s.rel,t.externalRelAttribute,c?de:"")||null,f=()=>K(c,{replace:s.replace});return s.custom?l.default?l.default({href:c,navigate:f,get route(){if(!c)return;const _=Z(c);return{path:_.pathname,fullPath:_.pathname,get query(){return Q(_.search)},hash:_.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:c}},rel:v,target:g,isExternal:d.value,isActive:!1,isExactActive:!1}):null:L("a",{ref:m,href:c,rel:v,target:g},(b=l.default)==null?void 0:b.call(l))}}})}const D=ue({componentName:"NuxtLink"});function me(){const t=B();if(t._observer)return t._observer;let n=null;const a=new Map,s=(r,o)=>(n||(n=new IntersectionObserver(d=>{for(const h of d){const m=a.get(h.target);(h.isIntersecting||h.intersectionRatio>0)&&m&&m()}})),a.set(r,o),n.observe(r),()=>{a.delete(r),n.unobserve(r),a.size===0&&(n.disconnect(),n=null)});return t._observer={observe:s}}function fe(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}const _e={props:["href","src"]},he=e("br",null,null,-1),pe={id:""},ge=["href"],ve=["src"],xe={class:"ml-28 text-left"},be=e("br",null,null,-1);function ye(t,n,a,s,l,r){return x(),S($,null,[he,e("div",pe,[e("a",{href:a.href,rel:"noopener noreferrer",target:"_blank"},[e("img",{src:a.src,class:"w-10 m-2 float-left relative"},null,8,ve)],8,ge),e("div",xe,[I(t.$slots,"content",{},()=>[y(" Fallback Content ")])])]),be],64)}const we=C(_e,[["render",ye]]),Ce={},Se={class:"mx-auto p-8 max-w-sm w-full lg:max-w-full bg-white rounded-3xl shadow-md shadow-gray-500 my-5"};function ke(t,n){return x(),S("div",Se,[I(t.$slots,"default")])}const Ee=C(Ce,[["render",ke]]);const Te={},Ae={class:"shadow-sm bg-white"},Be={class:"container mx-auto p-4 flex justify-center"},Ie={class:"flex gap-4"},je={class:"container mx-auto p-4"};function Ne(t,n){const a=D,s=ee("scroll-to");return x(),S("div",null,[e("header",Ae,[e("nav",Be,[e("ul",Ie,[e("li",null,[u(a,{to:"#index"},{default:p(()=>[y("Home")]),_:1})]),e("li",null,[u(a,{to:"#experience"},{default:p(()=>[y("Experience")]),_:1})]),e("li",null,[R((x(),te(a,{to:{path:"/",hash:"#contact"}},{default:p(()=>[y("Contact")]),_:1})),[[s,{el:"#contact"}]])])])])]),e("div",je,[I(t.$slots,"default",{},void 0,!0)])])}const Le=C(Te,[["render",Ne],["__scopeId","data-v-d5649c08"]]),F=""+globalThis.__publicAssetsURL("images/github.png"),z=""+globalThis.__publicAssetsURL("images/linkedin.png");const qe={},Pe=ne('<header class="shadow-sm bg-white" data-v-3cf1cac8><nav class="container mx-auto p-4 flex justify-center" data-v-3cf1cac8><ul data-v-3cf1cac8><li data-v-3cf1cac8><p data-v-3cf1cac8> © Ines Sorzano Cabrera 2023 </p></li><li class="w-20 flex mx-auto" data-v-3cf1cac8><a href="https://github.com/InesSorzano" rel="noopener noreferrer" target="_blank" data-v-3cf1cac8><img src="'+F+'" alt="github logo" data-v-3cf1cac8></a><a href="https://www.linkedin.com/in/in%C3%A9s-sorzano-5a2907208" rel="noopener noreferrer" target="_blank" data-v-3cf1cac8><img src="'+z+'" alt="linkedin logo" data-v-3cf1cac8></a></li></ul></nav></header>',1),$e=[Pe];function Re(t,n){return x(),S("div",null,$e)}const Me=C(qe,[["render",Re],["__scopeId","data-v-3cf1cac8"]]),w={_origin:"https://api.emailjs.com"},De=(t,n="https://api.emailjs.com")=>{w._userID=t,w._origin=n},V=(t,n,a)=>{if(!t)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!n)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class q{constructor(n){this.status=n?n.status:0,this.text=n?n.responseText:"Network Error"}}const O=(t,n,a={})=>new Promise((s,l)=>{const r=new XMLHttpRequest;r.addEventListener("load",({target:o})=>{const d=new q(o);d.status===200||d.text==="OK"?s(d):l(d)}),r.addEventListener("error",({target:o})=>{l(new q(o))}),r.open("POST",w._origin+t,!0),Object.keys(a).forEach(o=>{r.setRequestHeader(o,a[o])}),r.send(n)}),Fe=(t,n,a,s)=>{const l=s||w._userID;return V(l,t,n),O("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:l,service_id:t,template_id:n,template_params:a}),{"Content-type":"application/json"})},ze=t=>{let n;if(typeof t=="string"?n=document.querySelector(t):n=t,!n||n.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return n},Ve=(t,n,a,s)=>{const l=s||w._userID,r=ze(a);V(l,t,n);const o=new FormData(r);return o.append("lib_version","3.11.0"),o.append("service_id",t),o.append("template_id",n),o.append("user_id",l),O("/api/v1.0/email/send-form",o)},Oe={init:De,send:Fe,sendForm:Ve},He=""+globalThis.__publicAssetsURL("images/profile_pic.jpg");const Ue={head:{script:[{src:"https://www.google.com/recaptcha/api.js"}]},data(){return{currentAnchor:"about"}},mounted(){window.addEventListener("scroll",this.handleScroll)},destroyed(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleAnchorClick(t){const a=t.target.getAttribute("href").substring(1);document.getElementById(a)&&(this.currentAnchor=a,console.log(a))},handleScroll(){const t=["about","experience","contact"],n=window.scrollY-80;for(const a of t){const s=document.getElementById(a),l=s.getBoundingClientRect();if(l.top<=n&&l.bottom>=n){let r=s.getAttribute("id");if(r!==this.currentAnchor){this.currentAnchor=r;break}}}},resetForm(){document.getElementById("name").value="",document.getElementById("email").value="",document.getElementById("message").value=""},restoreSendButton(t,n){t.classList.add("hidden"),n.innerHTML="Submit"},sendEmail(){let t=document.getElementById("sending"),n=document.getElementById("submit_text");t.classList.remove("hidden"),n.innerHTML="",Oe.sendForm("service_x653keh","template_3c4pmkm",this.$refs.form,"YEznwqMeHyGnJg_Xx").then(a=>{console.log("SUCCESS!",a.text),this.restoreSendButton(t,n),this.resetForm()},a=>{console.log("FAILED...",a.text),this.restoreSendButton(t,n)})}}},i=t=>(ae("data-v-497b5b5e"),t=t(),le(),t),Ge={class:"flex"},Je=i(()=>e("div",{class:"left-0 h-[calc(100vh-8rem)] w-10 fixed md:left-16 justify-center flex flex-col items-center"},[e("a",{href:"https://github.com/InesSorzano",rel:"noopener noreferrer",target:"_blank"},[e("img",{src:F,alt:"github logo"})]),e("a",{href:"https://www.linkedin.com/in/in%C3%A9s-sorzano-5a2907208",rel:"noopener noreferrer",target:"_blank"},[e("img",{src:z,alt:"linkedin logo"})])],-1)),Xe={class:"h-full text-center w-full mx-5 md:mx-40 px-10"},Ze=i(()=>e("div",{id:"index",class:"my-5"},null,-1)),Qe={id:"about",class:"max-h-fit"},We={class:"mx-auto max-w-sm w-full lg:max-w-full lg:flex bg-white rounded-3xl shadow-md shadow-gray-500 my-5"},Ye=i(()=>e("div",{class:"m-10 h-56 lg:h-auto lg:w-56 flex bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden",title:"Woman holding a mug"},[e("div",{class:"relative lg:w-48 m-auto h-100 mx-auto"},[e("img",{src:He,class:"w-48 mx-auto rounded-full shadow-lg"})])],-1)),Ke={class:"lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"},et={class:"mb-8"},tt=i(()=>e("p",{class:"text-sm text-gray-600 flex items-center"},null,-1)),nt=i(()=>e("div",{class:"text-gray-900 font-bold text-xl mb-2"}," Inés Sorzano Cabrera ",-1)),st=i(()=>e("span",{class:"text-sm text-gray-500"}," Full stack junior developer ",-1)),ot=i(()=>e("p",{class:"text-gray-700 text-base"},null,-1)),at={class:"mt-4 space-x-3 md:mt-6"},lt=i(()=>e("a",{href:"files/cv.pdf",download:"cv_inessorzano.pdf",class:"inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300"}," Currículum ",-1)),rt={class:"inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-500"},it={id:"experience",class:"my-5"},ct=i(()=>e("h1",{class:"font-bold"}," EXPERIENCE",-1)),dt=i(()=>e("p",{class:"float-right"}," 2021 - Now",-1)),ut=i(()=>e("p",null,[e("b",{style:{color:"green"}}," Panoimagen ")],-1)),mt=i(()=>e("p",null,"Web application development with Django and Nodejs ",-1)),ft=i(()=>e("p",null,"Backend: Django (Python)",-1)),_t=i(()=>e("p",null,"Database management: PostgreSQL",-1)),ht=i(()=>e("p",null,"Front end HTML, CSS, Javascript, Node.js, Bootstrap and TailwindCSS",-1)),pt=i(()=>e("p",null,"Nginx",-1)),gt=i(()=>e("p",null,"Tasks: Redis y Celery",-1)),vt=i(()=>e("p",null,"Object detection: Detectron2 and Tensorflow lite",-1)),xt=i(()=>e("p",{class:"float-right"}," 2020 - 2021",-1)),bt=i(()=>e("p",null,[e("strong",null," IES.Comercio")],-1)),yt=i(()=>e("p",null,"Grado Superior de Desarrollo de Aplicaciones Multiplataforma",-1)),wt=i(()=>e("p",null,"Comercio Grado Superior de Desarrollo de Aplicaciones Multiplataforma",-1)),Ct={name:"contact"},St={id:"contact",class:"my-5"},kt=i(()=>e("h1",{class:"font-bold"}," CONTACT ME",-1)),Et={class:"py-6 mx-0"},Tt=i(()=>e("p",{class:"flex items-center mx-0 justify-center"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"w-5 h-5 mr-2 sm:mr-6"},[e("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}),e("path",{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"})]),e("a",{href:"mailto:inessorzano@gmail.com",class:"mb-1"},"inessorzano@gmail.com")],-1)),At=i(()=>e("label",{class:"block"},[e("input",{type:"text",placeholder:"Name",name:"name",id:"name",required:"",class:"block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-b-2 border-gray-200"})],-1)),Bt=i(()=>e("label",{class:"block"},[e("input",{type:"email",placeholder:"Email",name:"email",id:"email",required:"",class:"block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-b-2 border-gray-200"})],-1)),It={class:"block"},jt=i(()=>e("button",{type:"submit",class:"inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-900 bg-border-2 border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 self-center px-8 py-3 text-lg rounded"},[e("svg",{"aria-hidden":"true",id:"sending",role:"status",class:"hidden mx-auto inline w-4 h-4 mr-3 text-white animate-spin",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"#E5E7EB"}),e("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentColor"})]),e("p",{id:"submit_text"},"Submit")],-1)),Nt={class:"h-[calc(100vh-8rem)] w-10 fixed right-0 md:right-16 justify-center flex items-center"};function Lt(t,n,a,s,l,r){const o=D,d=we,h=Ee,m=Le,k=Me;return x(),S($,null,[u(m,null,{default:p(()=>[e("div",Ge,[Je,e("div",Xe,[Ze,e("div",Qe,[e("div",We,[Ye,e("div",Ke,[e("div",et,[tt,nt,st,ot,e("div",at,[lt,e("a",rt,[u(o,{to:"#contact"},{default:p(()=>[y("Contact")]),_:1})])])])])])]),e("div",it,[ct,u(h,null,{default:p(()=>[u(d,{src:"/images/panoi.jpg"},{content:p(()=>[dt,ut,mt,ft,_t,ht,pt,gt,vt]),_:1}),u(d,{src:"/images/studies.png"},{content:p(()=>[xt,bt,yt,wt]),_:1})]),_:1})]),e("a",Ct,[e("div",St,[kt,u(h,null,{default:p(()=>[e("section",Et,[e("form",{ref:"form",onSubmit:n[1]||(n[1]=se((...c)=>r.sendEmail&&r.sendEmail(...c),["prevent"])),method:"POST",target:"_blank",rel:"noopener noreferrer",class:"flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"},[Tt,At,Bt,e("label",It,[R(e("textarea",{rows:"3",id:"message","onUpdate:modelValue":n[0]||(n[0]=c=>t.message=c),name:"message",required:"",class:"block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-2 border-gray-200"},null,512),[[oe,t.message]])]),jt],544)])]),_:1})])])]),e("div",Nt,[e("ul",null,[e("li",null,[u(o,{to:"#about",class:T([l.currentAnchor==="about"?"bg-slate-900":"bg-slate-400","m-5 w-5 h-5 rounded-full flex justify-center"]),onClick:r.handleAnchorClick},null,8,["class","onClick"])]),e("li",null,[u(o,{to:"#experience",class:T([l.currentAnchor==="experience"?"bg-slate-900":"bg-slate-400","bg-slate-400 m-5 w-5 h-5 rounded-full flex justify-center"])},null,8,["class"])]),e("li",null,[u(o,{to:"#contact",class:T([l.currentAnchor==="contact"?"bg-slate-900":"bg-slate-400","bg-slate-400 m-5 w-5 h-5 rounded-full flex justify-center"])},null,8,["class"])])])])])]),_:1}),u(k)],64)}const Pt=C(Ue,[["render",Lt],["__scopeId","data-v-497b5b5e"]]);export{Pt as default};
