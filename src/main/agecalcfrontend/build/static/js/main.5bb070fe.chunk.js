(this.webpackJsonpagecalcfrontend=this.webpackJsonpagecalcfrontend||[]).push([[0],{131:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a.n(n),r=a(19),o=a.n(r),s=(a(59),a(60),a(46)),i=a(47),h=a(18),d=a(52),l=a(51),j=a(137),u=a(138),b=a(139),O=a(37),g=a.n(O),m=(a(61),a(48)),f=a.n(m),C=a(36),x=a.n(C),D=a(4),Y=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={dateFrom:new Date,dateTo:new Date,msg:""},n.handleDateFromChange=n.handleDateFromChange.bind(Object(h.a)(n)),n.handleDateToChange=n.handleDateToChange.bind(Object(h.a)(n)),n.performCalculation=n.performCalculation.bind(Object(h.a)(n)),n}return Object(i.a)(a,[{key:"handleDateFromChange",value:function(e){this.setState({dateFrom:e})}},{key:"handleDateToChange",value:function(e){this.setState({dateTo:e})}},{key:"performCalculation",value:function(){var e=this;f.a.get("/api/calc/ageCalc?fromDt=".concat(x()(this.state.dateFrom).format("YYYY-MM-DD"),"&toDt=").concat(x()(this.state.dateTo).format("YYYY-MM-DD"))).then((function(t){return e.setState({msg:t.data})})).catch((function(t){e.setState({msg:t.message}),console.error("There was an error!",t)}))}},{key:"render",value:function(){return Object(D.jsx)("div",{children:Object(D.jsxs)(j.a,{children:[Object(D.jsx)(u.a,{children:Object(D.jsx)(b.a,{children:"Age Calculator "})}),Object(D.jsxs)(u.a,{children:[Object(D.jsx)(b.a,{children:" Date Of Birth /From Date "}),Object(D.jsx)(b.a,{children:Object(D.jsx)(g.a,{selected:this.state.dateFrom,onChange:this.handleDateFromChange,dateFromat:"YYYY-MM-dd"})})]}),Object(D.jsxs)(u.a,{children:[Object(D.jsx)(b.a,{children:" Age upto date "}),Object(D.jsx)(b.a,{children:Object(D.jsx)(g.a,{selected:this.state.dateTo,onChange:this.handleDateToChange,dateFromat:"YYYY-MM-dd"})})]}),Object(D.jsx)(u.a,{children:Object(D.jsxs)(b.a,{children:[Object(D.jsx)("button",{onClick:this.performCalculation,children:"Calculate"})," "]})}),Object(D.jsx)(u.a,{children:Object(D.jsx)(b.a,{children:this.state.msg})})]})})}}]),a}(n.Component);var F=function(){return Object(D.jsx)(Y,{})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,140)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),r(e),o(e)}))};o.a.render(Object(D.jsx)(c.a.StrictMode,{children:Object(D.jsx)(F,{})}),document.getElementById("root")),p()},59:function(e,t,a){},60:function(e,t,a){}},[[131,1,2]]]);
//# sourceMappingURL=main.5bb070fe.chunk.js.map