(this["webpackJsonppl3281-experiment"]=this["webpackJsonppl3281-experiment"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(8),o=n.n(r),l=(n(14),n(6),n(2)),c=n(3),s=n(1),u=n(5),h=n(4),d=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={circleStyle:{display:"none",marginLeft:0,marginTop:0,borderColor:"black"},buttonStyle:{display:"inline-block"}},a.box=i.a.createRef(),a.circle=i.a.createRef(),a.createCircle=a.createCircle.bind(Object(s.a)(a)),a.handleScreenClick=a.handleScreenClick.bind(Object(s.a)(a)),a.removeCircle=a.removeCircle.bind(Object(s.a)(a)),a.showButton=a.showButton.bind(Object(s.a)(a)),a}return Object(c.a)(n,[{key:"createCircle",value:function(){var e=this,t=this.box.current.getBoundingClientRect();this.setState({circleStyle:{display:"inline-block",marginLeft:Math.random()*(t.width-40)+10,marginTop:Math.random()*(t.height-40)+10},buttonStyle:{display:"none"}}),setTimeout((function(){return e.removeCircle()}),this.props.delay)}},{key:"removeCircle",value:function(){var e=this;this.setState({circleStyle:{display:"none"}}),setTimeout((function(){return e.showButton()}),400)}},{key:"showButton",value:function(){this.setState({buttonStyle:{display:"inline-block"}})}},{key:"handleScreenClick",value:function(e){if("none"===this.state.buttonStyle.display)if("none"!==this.state.circleStyle.display){var t=this.circle.current.getBoundingClientRect(),n=[t.x+t.width/2,t.y+t.height/2+window.scrollY],a=Math.pow(Math.pow(e.pageX-n[0],2)+Math.pow(e.pageY-n[1],2),.5);this.props.onMouseDown(Math.round(100*a)/100),this.setState({circleStyle:{display:"none",marginLeft:10,marginTop:10}})}else this.props.onMouseDown("Late")}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"game",onMouseDown:this.handleScreenClick,onMouseMove:this.props.onMouseMove,ref:this.box},i.a.createElement("span",{className:"circle",style:this.state.circleStyle,ref:this.circle}),i.a.createElement("div",{className:"buttonDiv"},i.a.createElement("button",{className:"button",style:this.state.buttonStyle,onClick:this.createCircle},"Give Circle"))))}}]),n}(i.a.Component),m=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).DEFAULT_INPUT="Type desired delay here",a.state={x:0,y:0,records:[],timeOnScreen:1750,inputValue:a.DEFAULT_INPUT},a._onMouseDown=a._onMouseDown.bind(Object(s.a)(a)),a._onMouseMove=a._onMouseMove.bind(Object(s.a)(a)),a._handleChange=a._handleChange.bind(Object(s.a)(a)),a._handleSubmit=a._handleSubmit.bind(Object(s.a)(a)),a}return Object(c.a)(n,[{key:"_onMouseMove",value:function(e){this.setState({x:e.pageX,y:e.pageY})}},{key:"_onMouseDown",value:function(e){this.state.records.push(e),this.setState({records:this.state.records})}},{key:"_handleChange",value:function(e){this.setState({inputValue:e.target.value})}},{key:"_handleSubmit",value:function(e){isNaN(this.state.inputValue)?this.setState({inputValue:this.state.timeOnScreen}):this.setState({timeOnScreen:this.state.inputValue})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(d,{onMouseDown:this._onMouseDown,onMouseMove:this._onMouseMove,delay:this.state.timeOnScreen}),i.a.createElement("div",null,i.a.createElement("p",null,'Please click on the "Give Circle" button, then click on the exact center of the circle that appears.'),i.a.createElement("input",{type:"text",value:this.state.inputValue,onChange:this._handleChange}),i.a.createElement("button",{onClick:this._handleSubmit},"Change Delay"),i.a.createElement("span",{style:{"font-size":"14px"}}," Current Delay: ",this.state.timeOnScreen," ms"),i.a.createElement("p",{className:"scoreTitle"},i.a.createElement("u",null,i.a.createElement("span",null,"Score (Average: ",this.state.records.length>0?Math.round(this.state.records.filter((function(e){return"number"==typeof e})).reduce((function(e,t){return e+t}),0)/this.state.records.filter((function(e){return"number"==typeof e})).length*100)/100:0),i.a.createElement("span",null," | Late Rate: ",this.state.records.length>0?Math.round(this.state.records.filter((function(e){return"Late"===e})).length/this.state.records.length*100)/100:0,")"))),i.a.createElement("ul",{className:"score"},this.state.records.map((function(e){return i.a.createElement("li",null,i.a.createElement("span",null,"~ ",e," ~"))})))))}}]),n}(i.a.Component);var p=function(){return i.a.createElement("div",{className:"App App-header"},i.a.createElement("h2",null," PL3281 Experiment Prototype "),i.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,n){},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.5d88e2cb.chunk.js.map