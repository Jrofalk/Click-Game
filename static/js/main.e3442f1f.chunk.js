(window["webpackJsonpclick-game"]=window["webpackJsonpclick-game"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"image":"https://i.pinimg.com/564x/d3/f0/b0/d3f0b0aa5e242b679452bbbcae1aafd5.jpg","clicked":false},{"id":2,"image":"https://i.pinimg.com/originals/99/d8/bd/99d8bddea97c10a0ac467316daa51291.jpg","clicked":false},{"id":3,"image":"https://i.pinimg.com/474x/6c/5f/05/6c5f058e4a68257eb042eeb7c19a90a7--dagger-rose-tattoo-traditional-traditional-tattoo-knife.jpg?b=t","clicked":false},{"id":4,"image":"https://i.pinimg.com/474x/40/b6/0f/40b60f8f30596bdda55e4f73f8486f55--sailor-jerry-tattoos-vintage-tattoos.jpg?b=t","clicked":false},{"id":5,"image":"https://i.pinimg.com/474x/aa/34/82/aa3482ecc1a734074b38acbfc0876475--sailor-jerry-flower-floral-tattoos.jpg","clicked":false},{"id":6,"image":"https://i.pinimg.com/474x/26/f0/a7/26f0a71d65bebbc42861dffa037c91f3--american-traditional-rose-tattoo-young-ones.jpg","clicked":false},{"id":7,"image":"https://i.pinimg.com/originals/a3/02/5f/a3025f0940d72dcecff8732c7b536514.jpg","clicked":false},{"id":8,"image":"https://i.pinimg.com/474x/8f/02/76/8f0276f20b78b7e1e16041d0137e8f8b--black-rose-tattoos-traditional-rose-tattoos.jpg","clicked":false},{"id":9,"image":"https://i.pinimg.com/474x/fb/45/d0/fb45d036ba54d73bba879b90c7d868be--american-traditional-rose-traditional-rose-tattoos.jpg","clicked":false},{"id":10,"image":"https://i.pinimg.com/originals/b7/c2/cf/b7c2cff4a9c4f83e7e39daebd45ef438.jpg","clicked":false}]')},,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),c=a.n(i),o=a(2),n=a.n(o),r=(a(14),a(3)),s=a(4),d=a(7),l=a(5),f=a(8);a(15);var m=function(e){return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{id:e.id,src:e.image,onClick:e.selectCard})))};a(16);var g=function(e){return c.a.createElement("div",{className:"wrapper"},e.children)};a(17);var b=function(e){return c.a.createElement("h1",{className:"title"},e.children)},p=a(6),u=function(e){function t(){var e,a;Object(r.a)(this,t);for(var i=arguments.length,c=new Array(i),o=0;o<i;o++)c[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={cards:p,score:0,bestScore:0,clicked:[]},a.gameSet=function(){a.state.score>a.state.bestScore&&(a.setState({bestScore:a.state.score}),console.log(a.state.bestScore)),a.setState({score:0}),a.setState({clicked:[]})},a.selectCard=function(e){var t=e.target.id;a.state.clicked.indexOf(t)>-1?(a.gameSet(),a.state.cards.sort((function(){return Math.random()-.5}))):(a.setState({score:a.state.score+1}),a.setState({clicked:a.state.clicked.concat(t)}),a.state.cards.sort((function(){return Math.random()-.5})),10===a.state.score&&a.gameSet())},a}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(g,null,c.a.createElement(b,null,"Rose Tattoo Current Streak:",this.state.score," Best Score:",this.state.bestScore),this.state.cards.map((function(t){return c.a.createElement(m,{selectCard:e.selectCard,id:t.id,key:t.id,image:t.image})})))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(c.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.e3442f1f.chunk.js.map