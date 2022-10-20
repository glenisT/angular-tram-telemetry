function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{VVaf:function(e,t,r){"use strict";r.r(t),r.d(t,"SessionsModule",(function(){return W}));var a=r("bFKe"),n=r("ofXK"),o=r("3Pt+"),i=r("tyNb"),c=r("zMWy"),s=r("YUcS"),l=r("jgPy"),u=r("bTqV"),b=r("bv9b"),m=r("fXoL"),p=r("Wp6s"),d=r("kmnG"),f=r("qFsG"),g=r("XiUz");function h(e,t){1&e&&(m.ac(0,"small",17),m.Lc(1," Email is required "),m.Zb())}var y,w=((y=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"submitEmail",value:function(){this.submitButton.disabled=!0,this.progressBar.mode="indeterminate"}}]),e}()).\u0275fac=function(e){return new(e||y)},y.\u0275cmp=m.Ob({type:y,selectors:[["app-forgot-password"]],viewQuery:function(e,t){var r;1&e&&(m.Qc(b.a,!0),m.Qc(u.a,!0)),2&e&&(m.yc(r=m.jc())&&(t.progressBar=r.first),m.yc(r=m.jc())&&(t.submitButton=r.first))},decls:24,vars:5,consts:[[1,"page-wrap","height-100","black"],[1,"session-form-hold"],["mode","determinate",1,"session-progress"],[1,"text-center","pt-8","pb-16"],["width","60px","src","assets/images/logo.png","alt","",1,"mb-05"],[1,"text-muted","m-0"],[3,"ngSubmit"],["fpForm","ngForm"],[1,""],[1,"full-width"],["matInput","","name","email","required","","placeholder","Email","value","",3,"ngModel","ngModelChange"],["email","ngModel"],["class","form-error-msg",4,"ngIf"],["mat-raised-button","",1,"mat-primary","full-width","mb-1",3,"disabled"],[1,"text-center"],[1,"mat-primary","text-center","full-width",3,"routerLink"],["fxFlex",""],[1,"form-error-msg"]],template:function(e,t){if(1&e&&(m.ac(0,"div",0),m.ac(1,"div",1),m.Vb(2,"mat-progress-bar",2),m.ac(3,"mat-card"),m.ac(4,"mat-card-content"),m.ac(5,"div",3),m.Vb(6,"img",4),m.ac(7,"p",5),m.Lc(8,"New password will be sent to your email address"),m.Zb(),m.Zb(),m.ac(9,"form",6,7),m.ic("ngSubmit",(function(){return t.submitEmail()})),m.ac(11,"div",8),m.ac(12,"mat-form-field",9),m.ac(13,"input",10,11),m.ic("ngModelChange",(function(e){return t.userEmail=e})),m.Zb(),m.Zb(),m.Jc(15,h,2,0,"small",12),m.Zb(),m.ac(16,"button",13),m.Lc(17,"Submit"),m.Zb(),m.ac(18,"div",14),m.ac(19,"a",15),m.Lc(20,"Sign in"),m.Zb(),m.Vb(21,"span",16),m.ac(22,"a",15),m.Lc(23,"Create a new account"),m.Zb(),m.Zb(),m.Zb(),m.Zb(),m.Zb(),m.Zb(),m.Zb()),2&e){var r=m.zc(10),a=m.zc(14);m.Gb(13),m.rc("ngModel",t.userEmail),m.Gb(2),m.rc("ngIf",a.errors&&(a.dirty||a.touched)&&(null==a||null==a.errors?null:a.errors.required)),m.Gb(1),m.rc("disabled",r.invalid),m.Gb(3),m.rc("routerLink","/sessions/signin"),m.Gb(3),m.rc("routerLink","/sessions/signup")}},directives:[b.a,p.a,p.b,o.s,o.m,o.n,d.b,f.b,o.b,o.q,o.l,o.o,n.m,u.a,i.j,g.a],styles:[""]}),y);function v(e,t){1&e&&(m.ac(0,"small",17),m.Lc(1," Password is required "),m.Zb())}var x,Z,L,k,C,O,S=((x=function(){function e(){_classCallCheck(this,e),this.lockscreenData={password:""}}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"unlock",value:function(){console.log(this.lockscreenData),this.submitButton.disabled=!0,this.progressBar.mode="indeterminate"}}]),e}()).\u0275fac=function(e){return new(e||x)},x.\u0275cmp=m.Ob({type:x,selectors:[["app-lockscreen"]],viewQuery:function(e,t){var r;1&e&&(m.Qc(b.a,!0),m.Qc(u.a,!0)),2&e&&(m.yc(r=m.jc())&&(t.progressBar=r.first),m.yc(r=m.jc())&&(t.submitButton=r.first))},decls:23,vars:4,consts:[[1,"page-wrap","height-100","black"],[1,"session-form-hold","session-lockscreen"],["mode","determinate",1,"session-progress"],["fxFlex","column","fxFlexWrap","wrap"],["fxFlexWrap","wrap",1,"lockscreen-user"],["src","assets/images/face-3.jpg","alt","",1,"lockscreen-face"],[1,"m-0","font-normal"],[1,"text-muted"],[3,"ngSubmit"],["lockscreenForm","ngForm"],[1,""],[1,"full-width"],["type","password","name","password","required","","matInput","","placeholder","Password",3,"ngModel","ngModelChange"],["password","ngModel"],["class","form-error-msg",4,"ngIf"],["mat-raised-button","",1,"mat-primary","full-width","mb-05",3,"disabled"],["mat-raised-button","","color","accent",1,"mat-primary","full-width",3,"routerLink"],[1,"form-error-msg"]],template:function(e,t){if(1&e&&(m.ac(0,"div",0),m.ac(1,"div",1),m.Vb(2,"mat-progress-bar",2),m.ac(3,"mat-card"),m.ac(4,"mat-card-content"),m.ac(5,"div",3),m.ac(6,"div",4),m.Vb(7,"img",5),m.ac(8,"h5",6),m.Lc(9,"John Doe"),m.Zb(),m.ac(10,"small",7),m.Lc(11,"Last seen 1 hour ago"),m.Zb(),m.Zb(),m.ac(12,"form",8,9),m.ic("ngSubmit",(function(){return t.unlock()})),m.ac(14,"div",10),m.ac(15,"mat-form-field",11),m.ac(16,"input",12,13),m.ic("ngModelChange",(function(e){return t.lockscreenData.password=e})),m.Zb(),m.Zb(),m.Jc(18,v,2,0,"small",14),m.Zb(),m.ac(19,"button",15),m.Lc(20,"Unlock"),m.Zb(),m.ac(21,"button",16),m.Lc(22,"It's not me!"),m.Zb(),m.Zb(),m.Zb(),m.Zb(),m.Zb(),m.Zb(),m.Zb()),2&e){var r=m.zc(13),a=m.zc(17);m.Gb(16),m.rc("ngModel",t.lockscreenData.password),m.Gb(2),m.rc("ngIf",a.errors&&(a.dirty||a.touched)&&(null==a||null==a.errors?null:a.errors.required)),m.Gb(1),m.rc("disabled",r.invalid),m.Gb(2),m.rc("routerLink","/sessions/signin")}},directives:[b.a,p.a,p.b,g.a,o.s,o.m,o.n,d.b,f.b,o.b,o.q,o.l,o.o,n.m,u.a,i.h],styles:[""]}),x),j=r("yib9"),F=r("nZzT"),I=r("3sEA"),G=r("XNiG"),_=r("1G5W"),A=r("bSwM"),q=r("wl2U"),V=function(){return{}},M=function(){return{y:"40px",opacity:"0",delay:"100ms",duration:"400ms"}},P=function(e){return{value:"*",params:e}},U=((Z=function(){function e(t,r,a,n){_classCallCheck(this,e),this.jwtAuth=t,this.matxLoader=r,this.router=a,this.route=n,this.errorMsg="",this._unsubscribeAll=new G.a}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.signinForm=new o.f({username:new o.d("Watson",o.r.required),password:new o.d("12345678",o.r.required),rememberMe:new o.d(!0)}),this.route.queryParams.pipe(Object(_.a)(this._unsubscribeAll)).subscribe((function(t){return e.return=t.return||"/"}))}},{key:"ngAfterViewInit",value:function(){this.autoSignIn()}},{key:"ngOnDestroy",value:function(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}},{key:"signin",value:function(){var e=this,t=this.signinForm.value;this.loading=!0,this.jwtAuth.signin(t.username,t.password).subscribe((function(t){e.loading=!1,e.router.navigateByUrl(e.return)}),(function(t){e.loading=!1,e.errorMsg=t.message}))}},{key:"autoSignIn",value:function(){var e=this;"/"!==this.return&&(this.matxLoader.open("Automatically Signing you in! \n Return url: ".concat(this.return.substring(0,20),"..."),{width:"320px"}),setTimeout((function(){e.signin(),console.log("autoSignIn"),e.matxLoader.close()}),2e3))}}]),e}()).\u0275fac=function(e){return new(e||Z)(m.Ub(F.a),m.Ub(I.a),m.Ub(i.g),m.Ub(i.a))},Z.\u0275cmp=m.Ob({type:Z,selectors:[["app-signin"]],decls:24,vars:8,consts:[["fxLayout","row wrap","fxLayoutAlign","center center",1,"height-100vh","signup4-wrap",3,"perfectScrollbar"],["fxLayout","row wrap","fxLayout.xs","column","fxLayoutAlign","start stretch","fxFlex","60","fxFlex.xs","94","fxFlex.sm","80",1,"signup4-container","mat-elevation-z4","white"],["fxLayout","column","fxLayoutAlign","center center","fxFlex","40",1,"signup4-header"],["fxLayout","row wrap","fxLayoutAlign","center center",1,""],["width","200px","src","assets/images/illustrations/lighthouse.svg","alt",""],["fxFlex","60","fxLayout","row wrap","fxLayoutAlign","center center"],[1,"signup4-form","grey-100",3,"formGroup","ngSubmit"],["appearance","outline",1,"full-width"],["matInput","","formControlName","username","type","text","name","username","placeholder","Username"],["matInput","","formControlName","password","type","password","name","password","placeholder","********"],["formControlName","rememberMe"],["fxLayout","row wrap","fxLayoutAlign","start center",2,"margin-top","20px"],["loadingText","Signing in...","color","primary",1,"mr-16",3,"loading"],[1,"px-16"],["routerLink","/sessions/signup",1,"font-weight-bold","mat-color-primary"]],template:function(e,t){1&e&&(m.ac(0,"div",0),m.ac(1,"div",1),m.ac(2,"div",2),m.ac(3,"div",3),m.Vb(4,"img",4),m.Zb(),m.Zb(),m.ac(5,"div",5),m.ac(6,"form",6),m.ic("ngSubmit",(function(){return t.signin()})),m.ac(7,"mat-form-field",7),m.ac(8,"mat-label"),m.Lc(9,"Email"),m.Zb(),m.Vb(10,"input",8),m.Zb(),m.ac(11,"mat-form-field",7),m.ac(12,"mat-label"),m.Lc(13,"Password"),m.Zb(),m.Vb(14,"input",9),m.Zb(),m.ac(15,"mat-checkbox",10),m.Lc(16,"Remember this computer"),m.Zb(),m.ac(17,"div",11),m.ac(18,"button-loading",12),m.Lc(19,"Sign in"),m.Zb(),m.ac(20,"span",13),m.Lc(21,"or"),m.Zb(),m.ac(22,"a",14),m.Lc(23,"Sign Up"),m.Zb(),m.Zb(),m.Zb(),m.Zb(),m.Zb(),m.Zb()),2&e&&(m.rc("perfectScrollbar",m.tc(4,V)),m.Gb(1),m.rc("@animate",m.uc(6,P,m.tc(5,M))),m.Gb(5),m.rc("formGroup",t.signinForm),m.Gb(12),m.rc("loading",t.loading))},directives:[g.c,g.b,a.b,g.a,o.s,o.m,o.g,d.b,d.e,f.b,o.b,o.l,o.e,A.a,q.a,i.j],styles:[""],data:{animation:j.a}}),Z),N=function(){return{}},E=function(){return{y:"120px",opacity:"0",delay:"100ms",duration:"400ms"}},z=function(e){return{value:"*",params:e}},B=((L=function(){function e(t){_classCallCheck(this,e),this.fb=t}return _createClass(e,[{key:"ngOnInit",value:function(){var e,t,r=new o.d("",o.r.required);new o.d("",(e=r,t=!1,function(r){return t||(t=!0,e.valueChanges.subscribe((function(){r.updateValueAndValidity()}))),e.value===r.value?null:{equalTo:{control:e,value:e.value}}})),this.signupForm=this.fb.group({username:["",o.r.required],email:["",[o.r.required,o.r.email]],password:r,agreed:[!1,o.r.required]})}},{key:"onSubmit",value:function(){this.signupForm.invalid||console.log(this.signupForm.value)}}]),e}()).\u0275fac=function(e){return new(e||L)(m.Ub(o.c))},L.\u0275cmp=m.Ob({type:L,selectors:[["app-signup"]],decls:28,vars:7,consts:[["fxLayout","row wrap","fxLayoutAlign","center center",1,"height-100vh","signup4-wrap",3,"perfectScrollbar"],["fxLayout","row wrap","fxLayout.xs","column","fxLayoutAlign","start stretch","fxFlex","60","fxFlex.xs","94","fxFlex.sm","80",1,"signup4-container","mat-elevation-z4"],["fxLayout","column","fxLayoutAlign","center center","fxFlex","40",1,"signup4-header","grey-200"],["fxLayout","row wrap","fxLayoutAlign","center center",1,""],["width","200px","src","assets/images/illustrations/posting_photo.svg","alt",""],["fxFlex","60","fxLayout","row wrap","fxLayoutAlign","center center"],[1,"signup4-form","white",3,"formGroup","ngSubmit"],["appearance","outline",1,"full-width"],["matInput","","formControlName","username","type","text","name","username","placeholder","Username"],["matInput","","formControlName","email","type","email","name","email","placeholder","Email"],["matInput","","formControlName","password","type","password","name","password","placeholder","********"],["formControlName","agreed"],["fxLayout","row wrap","fxLayoutAlign","start center",2,"margin-top","20px"],["mat-flat-button","","color","primary"],[2,"padding","0px 8px 0px 16px"],["routerLink","/sessions/signin",1,"font-weight-bold","mat-color-primary"]],template:function(e,t){1&e&&(m.ac(0,"div",0),m.ac(1,"div",1),m.ac(2,"div",2),m.ac(3,"div",3),m.Vb(4,"img",4),m.Zb(),m.Zb(),m.ac(5,"div",5),m.ac(6,"form",6),m.ic("ngSubmit",(function(){return t.onSubmit()})),m.ac(7,"mat-form-field",7),m.ac(8,"mat-label"),m.Lc(9,"Username"),m.Zb(),m.Vb(10,"input",8),m.Zb(),m.ac(11,"mat-form-field",7),m.ac(12,"mat-label"),m.Lc(13,"Email"),m.Zb(),m.Vb(14,"input",9),m.Zb(),m.ac(15,"mat-form-field",7),m.ac(16,"mat-label"),m.Lc(17,"Password"),m.Zb(),m.Vb(18,"input",10),m.Zb(),m.ac(19,"mat-checkbox",11),m.Lc(20,"I agree with terms and condtions"),m.Zb(),m.ac(21,"div",12),m.ac(22,"button",13),m.Lc(23,"Sign Up"),m.Zb(),m.ac(24,"span",14),m.Lc(25,"or"),m.Zb(),m.ac(26,"a",15),m.Lc(27,"Sign In"),m.Zb(),m.Zb(),m.Zb(),m.Zb(),m.Zb(),m.Zb()),2&e&&(m.rc("perfectScrollbar",m.tc(3,N)),m.Gb(1),m.rc("@animate",m.uc(5,z,m.tc(4,E))),m.Gb(5),m.rc("formGroup",t.signupForm))},directives:[g.c,g.b,a.b,g.a,o.s,o.m,o.g,d.b,d.e,f.b,o.b,o.l,o.e,A.a,u.a,i.j],styles:[""],data:{animation:j.a}}),L),D=r("NFeN"),Q=function(){return["/"]},R=function(){return["/"]},T=[{path:"",children:[{path:"signup",component:B,data:{title:"Signup"}},{path:"signin",component:U,data:{title:"Signin"}},{path:"forgot-password",component:w,data:{title:"Forgot password"}},{path:"lockscreen",component:S,data:{title:"Lockscreen"}},{path:"404",component:(C=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}(),C.\u0275fac=function(e){return new(e||C)},C.\u0275cmp=m.Ob({type:C,selectors:[["app-not-found"]],decls:15,vars:2,consts:[[1,"page-wrap","height-100","default-bg"],[1,"app-error"],[1,"fix"],["color","warn",1,"error-icon"],[1,"error-text"],[1,"error-title"],[1,"error-subtitle"],[1,"error-actions"],["mat-raised-button","","color","primary",1,"mb-1","mr-05",3,"routerLink"],["mat-raised-button","","color","warn"]],template:function(e,t){1&e&&(m.ac(0,"div",0),m.ac(1,"div",1),m.ac(2,"div",2),m.ac(3,"mat-icon",3),m.Lc(4,"error"),m.Zb(),m.ac(5,"div",4),m.ac(6,"h1",5),m.Lc(7,"404"),m.Zb(),m.ac(8,"div",6),m.Lc(9,"Page Not Found!"),m.Zb(),m.Zb(),m.Zb(),m.ac(10,"div",7),m.ac(11,"button",8),m.Lc(12,"Back to Dashboard"),m.Zb(),m.ac(13,"button",9),m.Lc(14,"Report this Problem"),m.Zb(),m.Zb(),m.Zb(),m.Zb()),2&e&&(m.Gb(11),m.rc("routerLink",m.tc(1,Q)))},directives:[D.a,u.a,i.h],styles:[""]}),C),data:{title:"Not Found"}},{path:"error",component:(k=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}(),k.\u0275fac=function(e){return new(e||k)},k.\u0275cmp=m.Ob({type:k,selectors:[["app-error"]],decls:15,vars:2,consts:[[1,"page-wrap","height-100","default-bg"],[1,"app-error"],[1,"fix"],["color","warn",1,"error-icon"],[1,"error-text"],[1,"error-title"],[1,"error-subtitle"],[1,"error-actions"],["mat-raised-button","","color","primary",1,"mb-1","mr-05",3,"routerLink"],["mat-raised-button","","color","warn"]],template:function(e,t){1&e&&(m.ac(0,"div",0),m.ac(1,"div",1),m.ac(2,"div",2),m.ac(3,"mat-icon",3),m.Lc(4,"warning"),m.Zb(),m.ac(5,"div",4),m.ac(6,"h1",5),m.Lc(7,"500"),m.Zb(),m.ac(8,"div",6),m.Lc(9,"Server Error!"),m.Zb(),m.Zb(),m.Zb(),m.ac(10,"div",7),m.ac(11,"button",8),m.Lc(12,"Back to Dashboard"),m.Zb(),m.ac(13,"button",9),m.Lc(14,"Report this Problem"),m.Zb(),m.Zb(),m.Zb(),m.Zb()),2&e&&(m.Gb(11),m.rc("routerLink",m.tc(1,R)))},directives:[D.a,u.a,i.h],styles:[""]}),k),data:{title:"Error"}}]}],W=((O=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=m.Sb({type:O}),O.\u0275inj=m.Rb({factory:function(e){return new(e||O)},imports:[[n.c,o.h,o.p,c.a,l.a,s.a,a.c,i.k.forChild(T)]]}),O)},yib9:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var a=r("R0Ic"),n=Object(a.g)([Object(a.m)({opacity:"{{opacity}}",transform:"scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})"}),Object(a.e)("{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)",Object(a.m)("*"))],{params:{duration:"200ms",delay:"0ms",opacity:"0",scale:"1",x:"0",y:"0",z:"0"}}),o=[Object(a.o)("animate",[Object(a.n)("void => *",[Object(a.p)(n)])]),Object(a.o)("fadeInOut",[Object(a.l)("0",Object(a.m)({opacity:0,display:"none"})),Object(a.l)("1",Object(a.m)({opacity:1,display:"block"})),Object(a.n)("0 => 1",Object(a.e)("300ms")),Object(a.n)("1 => 0",Object(a.e)("300ms"))])]}}]);