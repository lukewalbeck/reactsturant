(this.webpackJsonpreacttest=this.webpackJsonpreacttest||[]).push([[0],{104:function(e,t,a){},109:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(31),c=a.n(l),i=(a(72),a(6)),o=a(7),s=a(9),m=a(8),u=a(10),h=a(111),p=a(21),d=a.n(p),E=a(53),b=a(54),v=a.n(b),f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={names:["student-athlete.","software developer.","teammate.","leader."],name:"",tick:0,fadeBool:!0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.fadeBool;return r.a.createElement("div",null,r.a.createElement(h.a,{id:"Hello"},r.a.createElement("h1",null,"My name is Lucas Walbeck and I am a ",r.a.createElement(p.Fade,{in:a},r.a.createElement("div",{style:{display:"inline"}},t))),r.a.createElement("br",null)),r.a.createElement(E.Parallax,{bgImage:v.a,strength:500},r.a.createElement(p.Fade,{big:!0},r.a.createElement("h1",{id:"USD"},"I'm currently in my senior year at the University of San Diego pursuing a B.S. in Computer Science and a minor in Finance."))),r.a.createElement(h.a,null,r.a.createElement(p.Fade,{bottom:!0},r.a.createElement("h3",null,"This is my personal website used for showcasing my personal projects and experiences. Feel free to contact me through my email, LinkedIn, or just explore my site!"))))}},{key:"nextName",value:function(){var e=this,t=this.state,a=t.names,n=t.tick;n>=a.length&&(this.setState({tick:0}),n=0),setTimeout((function(){e.setState({fadeBool:!1})}),1e3),this.setState({name:a[n],fadeBool:!0,tick:n+1})}},{key:"componentDidMount",value:function(){var e=this;this.nextName(),setInterval((function(){return e.nextName()}),1500)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}}]),t}(r.a.Component),g=a(18),y=a.n(g),j=a(56),k=a.n(j).a.create({baseURL:"https://lwalbeck.pythonanywhere.com/",responseType:"json"}),O=a(119),w=a(112),x=a(25),C=a.n(x),I=a(26),S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={project:[],loaded:!1,apiCall:e.apiCall},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.project,a=e.loaded;return r.a.createElement("div",null,!a&&r.a.createElement("h2",{style:{margin:"25px"}},"Loading Projects..."),r.a.createElement(C.a,{when:a},r.a.createElement("h2",{style:{margin:"25px"}},"Projects"),r.a.createElement("div",{style:{width:"100%"}},r.a.createElement("div",{style:P},t))))}},{key:"componentDidMount",value:function(){var e,t,a,n;return y.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return e={Authorization:"Api-Key RYiV1aLG.LsqIQoRhrytrhPrJox96fWG3kSR8sCb3"},l.next=3,y.a.awrap(k.get(this.state.apiCall,{headers:e}));case 3:for(t=l.sent,a=[],t=t.data,n=0;n<t.length;n++)a.push(r.a.createElement(L,{item:t[n],key:n}));this.setState({project:a,loaded:!0});case 8:case"end":return l.stop()}}),null,this)}}]),t}(r.a.Component),L=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={item:e.item},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.item;return r.a.createElement(O.a,{style:{maxWidth:"23rem",margin:"0 10px 10px 25px"}},r.a.createElement(O.a.Img,{variant:"top",src:e.image}),r.a.createElement(O.a.Body,null,r.a.createElement(O.a.Title,null,e.title),r.a.createElement(O.a.Text,{style:{overflow:"auto",height:"12em"}},e.description),r.a.createElement(w.a,{variant:"outline-primary",href:e.github,target:"_blank"},r.a.createElement(I.a,{icon:["fab","github"]}))))}}]),t}(r.a.Component),P={display:"flex",flexWrap:"wrap",margin:"0 auto"},W=S,R=a(29),B=a(113),D=a(114),T=a(115),M=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={pythonProgress:0,webProgress:0,cProgress:0,dbProgress:0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.pythonProgress,a=e.webProgress,n=e.cProgress,l=e.dbProgress;return r.a.createElement("div",{style:{margin:"0 auto",width:"100%"},id:"skills"},r.a.createElement(d.a,null,r.a.createElement("h2",{style:{margin:"25px"}},"Skills"),r.a.createElement(B.a,{style:{margin:"25px"}},r.a.createElement(D.a,{style:{alignItems:"center"}},r.a.createElement(T.a,{xs:3},r.a.createElement("h4",null,"Python / Java / C#")),r.a.createElement(T.a,{sm:8},r.a.createElement(R.a,{now:t,label:"Experienced"}))),r.a.createElement(D.a,{style:{alignItems:"center"}},r.a.createElement(T.a,{xs:3},r.a.createElement("h4",null,"HTML / CSS / JS")),r.a.createElement(T.a,{sm:8},r.a.createElement(R.a,{now:a,label:"Proficient"}))),r.a.createElement(D.a,{style:{alignItems:"center"}},r.a.createElement(T.a,{xs:3},r.a.createElement("h4",null,"C / C++ / Swift")),r.a.createElement(T.a,{sm:8},r.a.createElement(R.a,{now:n,label:"Classroom"}))),r.a.createElement(D.a,{style:{alignItems:"center"}},r.a.createElement(T.a,{xs:3},r.a.createElement("h4",null,"SQL / mySQL")),r.a.createElement(T.a,{sm:8},r.a.createElement(R.a,{now:l,label:"Comfortable"}))))))}},{key:"componentDidMount",value:function(){var e=this;this.pythonInterval=setInterval((function(){e.setState({pythonProgress:90})}),400),this.webInterval=setInterval((function(){e.setState({webProgress:75})}),800),this.cInterval=setInterval((function(){e.setState({cProgress:60})}),1200),this.dbInterval=setInterval((function(){e.setState({dbProgress:50})}),1600)}},{key:"componentWillUnmount",value:function(){clearInterval(this.pythonInterval),clearInterval(this.webInterval),clearInterval(this.cInterval),clearInterval(this.dbInterval)}}]),t}(r.a.Component),J=(a(104),a(27)),U=a(57),_=a(58),A=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={posts:[],loaded:!1,apiCall:e.apiCall},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.posts,a=e.loaded;return r.a.createElement("div",null,!a&&r.a.createElement("h3",null,"Loading Posts..."),r.a.createElement(C.a,{when:a},r.a.createElement("div",null,r.a.createElement("h2",{style:{margin:"25px"}},"Blog"),r.a.createElement("div",null,t))))}},{key:"componentDidMount",value:function(){var e,t,a,n;return y.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return e={Authorization:"Api-Key RYiV1aLG.LsqIQoRhrytrhPrJox96fWG3kSR8sCb3"},l.next=3,y.a.awrap(k.get(this.state.apiCall,{headers:e}));case 3:for(t=l.sent,a=[],t=t.data,n=0;n<t.length;n++)a.push(r.a.createElement(G,{item:t[n],key:n}));this.setState({posts:a,loaded:!0});case 8:case"end":return l.stop()}}),null,this)}},{key:"componentWillUnmount",value:function(){this.loaded=!1}}]),t}(r.a.Component),G=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={post:e.item},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.post,t=new Date(e.updated_at);return t=t.toLocaleDateString(),r.a.createElement(O.a,{style:{maxWidth:"25rem",margin:"0 25px 10px 25px"}},r.a.createElement(O.a.Img,{variant:"top",src:e.image}),r.a.createElement(O.a.Body,null,r.a.createElement(O.a.Title,null,e.title," - ",t),r.a.createElement(O.a.Text,{style:{overflow:"auto",height:"10em"}},e.content),r.a.createElement(w.a,{variant:"outline-primary"},"Read More")))}}]),t}(r.a.Component);J.b.add(U.a,_.a);var F=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement(M,null),r.a.createElement(W,{apiCall:"/projects/"}),r.a.createElement(A,{apiCall:"/posts/"}))}}]),t}(r.a.Component),N=a(117),Q=a(118),H=a(59),q=a.n(H),z=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"home"},r.a.createElement(N.a,{bg:"dark",variant:"dark",expand:"lg"},r.a.createElement(N.a.Brand,{href:"#home"},"Lucas Walbeck"),r.a.createElement(N.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(N.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(Q.a,{className:"mr-auto"},r.a.createElement(Q.a.Link,{href:"#home"},"Home"),r.a.createElement(Q.a.Link,{href:"#projects"},"Projects"),r.a.createElement(Q.a.Link,{href:"#blog"},"Blog"),r.a.createElement(Q.a.Link,{href:q.a,target:"_blank"},"Resume")),r.a.createElement(Q.a,null,r.a.createElement(Q.a.Link,{href:"https://github.com/lukewalbeck",target:"_blank"},r.a.createElement(w.a,{variant:"outline-light"},r.a.createElement(I.a,{icon:["fab","github"]}))),r.a.createElement(Q.a.Link,{href:"https://www.linkedin.com/in/lucas-walbeck/",target:"_blank"},r.a.createElement(w.a,{variant:"outline-light"},r.a.createElement(I.a,{icon:["fab","linkedin-in"]}))),r.a.createElement(Q.a.Link,{href:"mailto:lukewalbeck@gmail.com",target:"_blank"},r.a.createElement(w.a,{variant:"outline-light"},r.a.createElement(I.a,{icon:"envelope"})))))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=a(64),V=a(22),Y=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h.a,null,r.a.createElement("h2",null,"Projects"),r.a.createElement("hr",null),r.a.createElement("p",null,"Here are a list of my projects that I have worked on or are still working on, with their individual github links."),r.a.createElement("p",null,"This information is generated from the Django REST back-end that I have been developing, so it should be the most up-to-date information regarding my showcase of projects.")),r.a.createElement(W,{apiCall:"/projects/"}))}}]),t}(r.a.Component),$=a(116),X=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={posts:[],loaded:!1,apiCall:e.apiCall},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.posts,a=e.loaded;return r.a.createElement("div",null,r.a.createElement(h.a,null,r.a.createElement("h2",null,"Blog"),r.a.createElement("hr",null),r.a.createElement("p",null,"Welcome to my blog! This is where I will be posting interesting finds that have helped me further develop this website!"),r.a.createElement("p",null,"These posts are generated from the Django REST back-end that I have been developing, so it should be the most up-to-date information regarding my blog posts.")),r.a.createElement("div",{style:{margin:"25px"},id:"mediaContainer"},!a&&r.a.createElement("h3",null,"Loading Posts..."),r.a.createElement(d.a,{when:a},r.a.createElement("div",null,t))))}},{key:"componentDidMount",value:function(){var e,t,a,n;return y.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return e={Authorization:"Api-Key RYiV1aLG.LsqIQoRhrytrhPrJox96fWG3kSR8sCb3"},l.next=3,y.a.awrap(k.get(this.state.apiCall,{headers:e}));case 3:for(t=l.sent,a=[],t=t.data,n=0;n<t.length;n++)a.push(r.a.createElement(Z,{item:t[n],key:n}));this.setState({posts:a,loaded:!0});case 8:case"end":return l.stop()}}),null,this)}}]),t}(r.a.Component),Z=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={post:e.item},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.post,t=new Date(e.updated_at);return t=t.toLocaleDateString(),r.a.createElement($.a,{style:ee},r.a.createElement("img",{width:350,className:"mr-3",src:e.image,alt:"Placeholder"}),r.a.createElement($.a.Body,null,r.a.createElement("h2",null,e.title),r.a.createElement("h6",null,t),r.a.createElement("p",null,e.content)))}}]),t}(r.a.Component),ee={display:"flex",flexWrap:"wrap"},te=X,ae=r.a.createElement(K.a,null,r.a.createElement(z,null),r.a.createElement(V.c,null,r.a.createElement(V.a,{exact:!0,path:"/",component:F}),r.a.createElement(V.a,{path:"/home",component:F}),r.a.createElement(V.a,{path:"/projects",component:Y}),r.a.createElement(V.a,{path:"/blog",component:function(){return r.a.createElement(te,{apiCall:"/posts/"})}})));c.a.render(ae,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},54:function(e,t,a){e.exports=a.p+"static/media/USD.fb395a04.jpg"},59:function(e,t,a){e.exports=a.p+"static/media/LukeWalbeckResume.b49b4fe8.pdf"},67:function(e,t,a){e.exports=a(109)},72:function(e,t,a){}},[[67,1,2]]]);
//# sourceMappingURL=main.bc862bbc.chunk.js.map