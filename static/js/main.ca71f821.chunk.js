(this["webpackJsonppl3281-experiment"]=this["webpackJsonppl3281-experiment"]||[]).push([[0],[,,,,,,function(e,t,n){},,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),c=n.n(r),i=(n(14),n(15),n(6),n(2)),l=n(3),s=n(1),u=n(5),h=n(4),m=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={circleStyle:{display:"none",marginLeft:0,marginTop:0,borderColor:"black"}},a.box=o.a.createRef(),a.circle=o.a.createRef(),a.createCircle=a.createCircle.bind(Object(s.a)(a)),a.handleScreenClick=a.handleScreenClick.bind(Object(s.a)(a)),a}return Object(l.a)(n,[{key:"createCircle",value:function(){var e=this.box.current.getBoundingClientRect();this.setState({circleStyle:{display:"inline-block",marginLeft:Math.random()*(e.width-40)+10,marginTop:Math.random()*(e.height-40)+10}})}},{key:"handleScreenClick",value:function(e){var t=this.circle.current.getBoundingClientRect(),n=[t.x+t.width/2,t.y+t.height/2+window.scrollY];this.props.onMouseDown(Math.pow(Math.pow(e.pageX-n[0],2)+Math.pow(e.pageY-n[1],2),.5)),this.setState({circleStyle:{display:"none",marginLeft:10,marginTop:10}})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"game",onMouseDown:this.handleScreenClick,onMouseMove:this.props.onMouseMove,ref:this.box},o.a.createElement("div",null,o.a.createElement("span",{className:"circle",style:this.state.circleStyle,ref:this.circle}))),o.a.createElement("button",{className:"button",onClick:this.createCircle},"Give Circle"))}}]),n}(o.a.Component),d=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={x:0,y:0,records:[]},a._onMouseDown=a._onMouseDown.bind(Object(s.a)(a)),a._onMouseMove=a._onMouseMove.bind(Object(s.a)(a)),a}return Object(l.a)(n,[{key:"_onMouseMove",value:function(e){this.setState({x:e.pageX,y:e.pageY})}},{key:"_onMouseDown",value:function(e){this.state.records.push(e),this.setState({records:this.state.records})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(m,{onMouseDown:this._onMouseDown,onMouseMove:this._onMouseMove}),o.a.createElement("div",null,o.a.createElement("h4",null,"~",this.state.x," | ",this.state.y,"~"),o.a.createElement("ul",null,this.state.records.map((function(e){return o.a.createElement("li",null,o.a.createElement("span",null,"~ ",e," ~"))})))))}}]),n}(o.a.Component);var p=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("h2",null," PL3281 Experiment Prototype "),o.a.createElement(d,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.ca71f821.chunk.js.map