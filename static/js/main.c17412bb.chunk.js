(this["webpackJsonpcat-project"]=this["webpackJsonpcat-project"]||[]).push([[0],{47:function(e,t,n){e.exports=n(66)},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(13),o=n.n(l),r=(n(52),n(14)),s=n(15),m=n(18),i=n(17),u=(n(53),n(54),n(55),function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"tweet"},c.a.createElement("label",null,this.props.name),c.a.createElement("br",null),c.a.createElement("label",null,this.props.content),c.a.createElement("br",null),c.a.createElement("label",null,this.props.date))}}]),n}(a.Component)),d=n(86),h=n(85),p=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).API_URL="https://cat-lovers-server.herokuapp.com/mews",a.loadAllMews=function(){fetch(a.API_URL).then((function(e){return e.json()})).then((function(e){a.setState({allTweets:e})}))},a.onSubmit=function(e){e.preventDefault();var t={name:document.querySelector("#name").value,content:document.querySelector("#content").value,created:(new Date).toDateString()};fetch(a.API_URL,{method:"POST",body:JSON.stringify(t),headers:{"content-type":"application/json"}}).then((function(e){return e.json()})).then((function(){document.querySelector("#name").value="",document.querySelector("#content").value="",a.loadAllMews()}))},a.state={allTweets:[],name:"",description:""},a.loadAllMews(),console.log("Hello"),a}return Object(s.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"Form ms-Grid",dir:"ltr"},c.a.createElement("div",{className:"jumbotron p-3 p-md-5 text-white rounded bg-dark"},c.a.createElement("div",{className:"ms-Grid-row alignItemsDown"},c.a.createElement("div",{className:"ms-Grid-col ms-sm12 ms-md1 ms-lg1"}),c.a.createElement("div",{className:"ms-Grid-col ms-sm12 ms-md2 ms-lg2"},c.a.createElement(d.a,{label:"Name ",required:!0,id:"name"})),c.a.createElement("div",{className:"ms-Grid-col ms-sm12 ms-md7 ms-lg7"},c.a.createElement(d.a,{label:"Description ",required:!0,id:"content",rows:1})),c.a.createElement("div",{className:"ms-Grid-col ms-sm12 ms-md1 ms-lg1"},c.a.createElement(h.a,{onClick:this.onSubmit},"Submit")),c.a.createElement("div",{className:"ms-Grid-col ms-sm12 ms-md1 ms-lg1"})),c.a.createElement("br",null),c.a.createElement("div",{className:"ms-Grid-row"},c.a.createElement("div",{className:"ms-Grid-col ms-sm12 ms-md1 ms-lg1"}),c.a.createElement("div",{className:"ms-Grid-col ms-sm12 ms-md10 ms-lg10"},this.state.allTweets.map((function(e){if(e.name)return c.a.createElement(u,{name:e.name,content:e.content,date:e.created})}))),c.a.createElement("div",{className:"ms-Grid-col ms-sm12 ms-md1 ms-lg1"}))))}}]),n}(a.Component),f=(n(57),n(39)),v=n.n(f),E=n(40),g=n.n(E),b=n(41),j=n.n(b),w=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).API_URL="https://cat-lovers-server.herokuapp.com/locations",a.getExistingLocations=function(){fetch(a.API_URL).then((function(e){return e.json()})).then((function(e){a.setState({locations:e}),console.log(e)}))},a.state={locations:[]},a.getExistingLocations(),a}return Object(s.a)(n,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(v.a,{center:[50.879,4.6997],zoom:3,width:1e3,height:1e3},this.state.locations.map((function(e){return c.a.createElement(g.a,{anchor:[parseFloat(e.latitude),parseFloat(e.longitude)],payload:1,onClick:function(e){e.event,e.anchor,e.payload}})})),c.a.createElement(j.a,{anchor:[50.879,4.6997],offset:[120,79]},c.a.createElement("img",{src:"pigeon.jpg",width:240,height:158,alt:""}))))}}]),n}(a.Component),N=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).LOC_URL="https://cat-lovers-server.herokuapp.com/locations",a.getLocation=function(){fetch("https://ipapi.co/json/").then((function(e){200===e.status?e.json().then((function(e){var t={IP:e.ip,city:e.city,latitude:e.latitude,longitude:e.longitude};fetch(a.LOC_URL,{method:"POST",body:JSON.stringify(t),headers:{"content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e)}))})).catch((function(e){console.log("Fetch Error :-S",e)})):console.log("Looks like there was a problem. Status Code: "+e.status)}))},a.getLocation(),a}return Object(s.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"App container"},c.a.createElement("header",{className:"blog-header py-3"},c.a.createElement("div",{className:"row flex-nowrap justify-content-between align-items-center"},c.a.createElement("div",{className:"col-2 pt-1"},c.a.createElement("a",{className:"text-muted",href:"https://www.linkedin.com/in/ashik-paul-2ab793130/"},"Contact")),c.a.createElement("div",{className:"col-6 text-center"},c.a.createElement("h3",{className:"font-weight-normal blog-header-logo text-dark"},"Twitter for cats and dogs")),c.a.createElement("div",{className:"col-2 d-flex justify-content-end align-items-center"}))),c.a.createElement("hr",null),c.a.createElement(p,null),c.a.createElement(w,null))}}]),n}(a.Component);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(N,null)),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.c17412bb.chunk.js.map