(this.webpackJsonptip_out_calculator=this.webpackJsonptip_out_calculator||[]).push([[0],{23:function(e,t,a){e.exports=a(37)},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(19),s=a.n(r),c=a(14),u=(a(28),a(5)),o=a(1),m=a(20),h=a(8),b=a(9),i=a(11),p=a(10),E=a(12),d=(a(29),function(e){function t(){var e,a;Object(h.a)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).convertToCents=function(e){return e=(e=Math.floor(100*e)/100)-Math.floor(e)<.5?Math.floor(e):Math.floor(e)+1},a}return Object(E.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props.bartender?this.convertToCents(.06*(this.props.net_sales-this.props.food_sales-this.props.retail_sales)):0,t=this.props.bartender?this.convertToCents(.03*this.props.at_sales):0,a=this.props.expo?this.convertToCents(.02*this.props.food_sales):0,l=this.props.host?this.convertToCents(.005*this.props.food_sales+.005*this.props.at_sales):0,r=this.props.busser?this.convertToCents(.02*this.props.net_sales):0,s=this.convertToCents(e+a+l+r+parseInt(this.props.amount_owed));return n.a.createElement("div",{className:"the_results"},n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("h1",null,"scroll down......"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("h1",null,"scroll down......"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("h1",null,"scroll down......"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("h1",null,"Here are your totals!!"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("p",null,"expo tip out= ",this.props.expo?a:"no expo!"),n.a.createElement("p",null,"bartender tip out= ",this.props.bartender?e:"no bartender!"),n.a.createElement("p",null,"bartender tip out (Afternoon Tea)= ",this.props.bartender?t:"no bartender!"),n.a.createElement("p",null,"host tip out= ",this.props.host?l:"no host!"),n.a.createElement("p",null,"busser tip out= ",this.props.busser?r:"no busser!"),n.a.createElement("h2",{className:"results"},s>0?"BOOOO you owe $".concat(s," to house!"):s<0?"You get $".concat(Math.abs(s)," for being an awesome server!"):"You owe NOTHING. congratulations, I guess!?! "))}}]),t}(n.a.Component)),f=(a(30),function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(i.a)(this,Object(p.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,l="checkbox"===t.type?t.checked:t.value,n=t.name;a.setState(Object(m.a)({},n,l))},a.state={retail_sales:0,net_sales:0,amount_owed:0,food_sales:0,at_sales:0,expo:!1,busser:!1,bartender:!1,host:!1},a}return Object(E.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=Object(o.a)({},this.state);return n.a.createElement("body",null,n.a.createElement("h5",{className:"title"},"Boulder Dushanbe Old Folks Home Tip Out Calculator",n.a.createElement("br",null),"Let's get the heck out of here, shall we?"),n.a.createElement("br",null),n.a.createElement("form",{className:"amounts"},n.a.createElement("label",null,"Let's start with the TOTAL NET SALES!!",n.a.createElement("input",{className:"input",name:"net_sales",type:"number",value:this.state.net_sales,onChange:this.handleInputChange})),n.a.createElement("br",null),n.a.createElement("label",null,"How much is owed (- for what's owed to you, + for what's owed to the house)?!?",n.a.createElement("input",{className:"input",name:"amount_owed",type:"number",value:this.state.amount_owed,onChange:this.handleInputChange})),n.a.createElement("br",null),n.a.createElement("label",null,"Hit me up w the food sales...",n.a.createElement("input",{className:"input",name:"food_sales",type:"number",value:this.state.food_sales,onChange:this.handleInputChange})),n.a.createElement("br",null),n.a.createElement("label",null,"...and those AT SALES!",n.a.createElement("input",{className:"input",name:"at_sales",type:"number",value:this.state.at_sales,onChange:this.handleInputChange})),n.a.createElement("br",null),n.a.createElement("label",null,"Any retail sales?",n.a.createElement("input",{className:"input",name:"retail_sales",type:"number",value:this.state.retail_sales,onChange:this.handleInputChange})),n.a.createElement("br",null),n.a.createElement("label",null,"Who was here today??",n.a.createElement("br",null),n.a.createElement("input",{className:"check",name:"expo",type:"checkbox",value:this.state.expo,onChange:this.handleInputChange}),"Expo"),n.a.createElement("br",null),n.a.createElement("label",null,n.a.createElement("input",{className:"check",name:"busser",type:"checkbox",value:this.state.busser,onChange:this.handleInputChange}),"busser"),n.a.createElement("br",null),n.a.createElement("label",null,n.a.createElement("input",{className:"check",name:"bartender",type:"checkbox",value:this.state.bartender,onChange:this.handleInputChange}),"bartender"),n.a.createElement("br",null),n.a.createElement("label",null,n.a.createElement("input",{className:"check",name:"host",type:"checkbox",value:this.state.host,onChange:this.handleInputChange}),"host"),n.a.createElement("br",null)),n.a.createElement(d,e),n.a.createElement("h1",{className:"title"},"Now get outta here and forget about this place! Til next time...."))}}]),t}(n.a.Component)),v=function(e){return n.a.createElement("div",null,n.a.createElement(f,null))};a(31);var g=function(){return n.a.createElement("div",{className:"whole_thing"},n.a.createElement(u.c,null,n.a.createElement(u.a,{exact:!0,path:"/",component:v})))};s.a.render(n.a.createElement(c.a,null,n.a.createElement(g,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.009bd291.chunk.js.map