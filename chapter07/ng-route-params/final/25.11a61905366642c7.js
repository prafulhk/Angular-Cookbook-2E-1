"use strict";(self.webpackChunkng_route_params=self.webpackChunkng_route_params||[]).push([[25],{25:(C,_,e)=>{e.r(_),e.d(_,{UserDetailsComponent:()=>U});var s=e(564),a=e(368),i=e(920),u=e(704),c=e(684),l=e(212),m=e(320),E=e(864),D=e(608);function O(n,o){if(1&n&&(s.I0R(0,"section",6)(1,"h4",7),s.OEk(2,"Similar Users"),s.C$Y(),s.wR5(3,"app-users-list",8),s.C$Y()),2&n){const t=o.ngIf;s.yG2(3),s.E7m("users",t)}}function I(n,o){if(1&n&&(s.SAx(0),s.I0R(1,"div",1)(2,"a",2)(3,"span",3),s.OEk(4," arrow_back "),s.C$Y()(),s.I0R(5,"article"),s.wR5(6,"img",4),s.I0R(7,"h4"),s.OEk(8),s.C$Y()()(),s.yuY(9,O,4,1,"section",5),s.wVc(10,"async"),s.k70()),2&n){const t=o.ngIf,r=s.GaO();s.yG2(6),s._6D("src",t.picture.thumbnail,s.K6U),s.yG2(2),s.CAO("",t.name.first," ",t.name.last,""),s.yG2(),s.E7m("ngIf",s.kDX(10,4,r.similarUsers$))}}let U=(()=>{class n{constructor(){this.route=(0,s.uUt)(i.gV),this.userService=(0,s.uUt)(E.o),this.user$=this.route.paramMap.pipe((0,u.k)(t=>t.get("uuid")),(0,c.I)(t=>!!t),(0,l.y)(t=>{this.similarUsers$=(0,m.of)(this.userService.getSimilar(t))}),(0,u.k)(t=>this.userService.getById(t)||null))}static#s=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275cmp=s.In1({type:n,selectors:[["app-user-details"]],standalone:!0,features:[s.UHJ],decls:2,vars:3,consts:[[4,"ngIf"],[1,"flex","gap-4","items-center","justify-center"],["routerLink","/",1,"hover:text-slate-500"],[1,"material-symbols-outlined"],[3,"src"],["class","mt-6",4,"ngIf"],[1,"mt-6"],[1,"text-center","mb-3"],[3,"users"]],template:function(r,f){1&r&&(s.yuY(0,I,11,6,"ng-container",0),s.wVc(1,"async")),2&r&&s.E7m("ngIf",s.kDX(1,1,f.user$))},dependencies:[a.MD,a.u_,a.a,i.qQ,i.ER,D.Q]})}return n})()}}]);