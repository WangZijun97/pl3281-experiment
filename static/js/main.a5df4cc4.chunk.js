(this["webpackJsonppl3281-experiment"]=this["webpackJsonppl3281-experiment"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(8),i=n.n(r),c=(n(14),n(6),n(2)),l=n(3),s=n(1),u=n(5),h=n(4),d=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={circleStyle:{display:"none",marginLeft:0,marginTop:0,borderColor:"black"},buttonStyle:{display:"inline-block"}},a.box=o.a.createRef(),a.circle=o.a.createRef(),a.createCircle=a.createCircle.bind(Object(s.a)(a)),a.handleScreenClick=a.handleScreenClick.bind(Object(s.a)(a)),a.removeCircle=a.removeCircle.bind(Object(s.a)(a)),a.showButton=a.showButton.bind(Object(s.a)(a)),a}return Object(l.a)(n,[{key:"createCircle",value:function(){var e=this,t=this.box.current.getBoundingClientRect();this.setState({circleStyle:{display:"inline-block",marginLeft:Math.random()*(t.width-40)+10,marginTop:Math.random()*(t.height-40)+10},buttonStyle:{display:"none"}}),setTimeout((function(){return e.removeCircle()}),this.props.delay)}},{key:"removeCircle",value:function(){var e=this;this.setState({circleStyle:{display:"none"}}),setTimeout((function(){return e.showButton()}),400)}},{key:"showButton",value:function(){this.setState({buttonStyle:{display:"inline-block"}})}},{key:"handleScreenClick",value:function(e){if("none"===this.state.buttonStyle.display)if("none"!==this.state.circleStyle.display){var t=this.circle.current.getBoundingClientRect(),n=[t.x+t.width/2,t.y+t.height/2+window.scrollY],a=Math.pow(Math.pow(e.pageX-n[0],2)+Math.pow(e.pageY-n[1],2),.5);this.props.onMouseDown(Math.round(100*a)/100),this.setState({circleStyle:{display:"none",marginLeft:10,marginTop:10}})}else this.props.onMouseDown("Late")}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"game",onMouseDown:this.handleScreenClick,onMouseMove:this.props.onMouseMove,ref:this.box},o.a.createElement("span",{className:"circle",style:this.state.circleStyle,ref:this.circle}),o.a.createElement("div",{className:"buttonDiv"},o.a.createElement("button",{className:"button",style:this.state.buttonStyle,onClick:this.createCircle},"Give Circle"))))}}]),n}(o.a.Component),m=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={x:0,y:0,records:[]},a._onMouseDown=a._onMouseDown.bind(Object(s.a)(a)),a._onMouseMove=a._onMouseMove.bind(Object(s.a)(a)),a.delay=1e3,a}return Object(l.a)(n,[{key:"_onMouseMove",value:function(e){this.setState({x:e.pageX,y:e.pageY})}},{key:"_onMouseDown",value:function(e){this.state.records.push(e),this.setState({records:this.state.records})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(d,{onMouseDown:this._onMouseDown,onMouseMove:this._onMouseMove,delay:this.delay}),o.a.createElement("div",null,o.a.createElement("p",null,'Please click on the "Give Circle" button, then click on the exact center of the circle that appears.'),o.a.createElement("p",{className:"scoreTitle"},o.a.createElement("u",null,o.a.createElement("span",null,"Score (Average: ",this.state.records.length>0?Math.round(this.state.records.filter((function(e){return"number"==typeof e})).reduce((function(e,t){return e+t}),0)/this.state.records.filter((function(e){return"number"==typeof e})).length*100)/100:0),o.a.createElement("span",null," | Late Rate: ",Math.round(this.state.records.filter((function(e){return"Late"===e})).length/this.state.records.length*100)/100,")"))),o.a.createElement("ul",{className:"score"},this.state.records.map((function(e){return o.a.createElement("li",null,o.a.createElement("span",null,"~ ",e," ~"))})))))}}]),n}(o.a.Component);var p=function(){return o.a.createElement("div",{className:"App App-header"},o.a.createElement("h2",null," PL3281 Experiment Prototype "),o.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,n){},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.a5df4cc4.chunk.js.map