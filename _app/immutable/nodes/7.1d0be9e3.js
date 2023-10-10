import{s as le,n as J,e as re}from"../chunks/scheduler.e108d1fd.js";import{S as se,i as ce,g as _,s as m,m as p,h as d,j as C,x as y,c as k,n as v,f as s,k as u,a as f,z as r,o as E}from"../chunks/index.c3f76b74.js";import{e as _t}from"../chunks/singletons.e91b158e.js";import{p as ie}from"../chunks/stores.1226fe87.js";async function oe({fetch:l,params:t}){return{transaction:await(await l(`https://testnet-1.kryolite.io/tx/${t.txid}`)).json()}}const Ne=Object.freeze(Object.defineProperty({__proto__:null,load:oe},Symbol.toStringTag,{value:"Module"}));function ue(l){let t;return{c(){t=p("n/a")},l(e){t=v(e,"n/a")},m(e,a){f(e,t,a)},d(e){e&&s(t)}}}function fe(l){let t;return{c(){t=p("Dev reward")},l(e){t=v(e,"Dev reward")},m(e,a){f(e,t,a)},d(e){e&&s(t)}}}function _e(l){let t;return{c(){t=p("Reg Validator")},l(e){t=v(e,"Reg Validator")},m(e,a){f(e,t,a)},d(e){e&&s(t)}}}function de(l){let t;return{c(){t=p("Contract")},l(e){t=v(e,"Contract")},m(e,a){f(e,t,a)},d(e){e&&s(t)}}}function pe(l){let t;return{c(){t=p("Stake reward")},l(e){t=v(e,"Stake reward")},m(e,a){f(e,t,a)},d(e){e&&s(t)}}}function ve(l){let t;return{c(){t=p("Block reward")},l(e){t=v(e,"Block reward")},m(e,a){f(e,t,a)},d(e){e&&s(t)}}}function he(l){let t;return{c(){t=p("Transaction")},l(e){t=v(e,"Transaction")},m(e,a){f(e,t,a)},d(e){e&&s(t)}}}function be(l){let t,e=l[0].data.transaction.publicKey+"",a;return{c(){t=_("p"),a=p(e),this.h()},l(o){t=d(o,"P",{class:!0});var h=C(t);a=v(h,e),h.forEach(s),this.h()},h(){u(t,"class","text svelte-qk8c5b")},m(o,h){f(o,t,h),r(t,a)},p(o,h){h&1&&e!==(e=o[0].data.transaction.publicKey+"")&&E(a,e)},d(o){o&&s(t)}}}function me(l){let t,e="<br/>";return{c(){t=_("p"),t.innerHTML=e,this.h()},l(a){t=d(a,"P",{class:!0,"data-svelte-h":!0}),y(t)!=="svelte-521bsh"&&(t.innerHTML=e),this.h()},h(){u(t,"class","text svelte-qk8c5b")},m(a,o){f(a,t,o)},p:J,d(a){a&&s(t)}}}function ke(l){let t,e=l[0].data.transaction.from+"",a,o;return{c(){t=_("a"),a=p(e),this.h()},l(h){t=d(h,"A",{class:!0,href:!0});var b=C(t);a=v(b,e),b.forEach(s),this.h()},h(){u(t,"class","text svelte-qk8c5b"),u(t,"href",o=_t+"/ledger/"+l[0].data.transaction.from)},m(h,b){f(h,t,b),r(t,a)},p(h,b){b&1&&e!==(e=h[0].data.transaction.from+"")&&E(a,e),b&1&&o!==(o=_t+"/ledger/"+h[0].data.transaction.from)&&u(t,"href",o)},d(h){h&&s(t)}}}function xe(l){let t,e="<br/>";return{c(){t=_("p"),t.innerHTML=e,this.h()},l(a){t=d(a,"P",{class:!0,"data-svelte-h":!0}),y(t)!=="svelte-521bsh"&&(t.innerHTML=e),this.h()},h(){u(t,"class","text svelte-qk8c5b")},m(a,o){f(a,t,o)},p:J,d(a){a&&s(t)}}}function Ce(l){let t,e=l[0].data.transaction.to+"",a,o;return{c(){t=_("a"),a=p(e),this.h()},l(h){t=d(h,"A",{class:!0,href:!0});var b=C(t);a=v(b,e),b.forEach(s),this.h()},h(){u(t,"class","text svelte-qk8c5b"),u(t,"href",o=_t+"/ledger/"+l[0].data.transaction.to)},m(h,b){f(h,t,b),r(t,a)},p(h,b){b&1&&e!==(e=h[0].data.transaction.to+"")&&E(a,e),b&1&&o!==(o=_t+"/ledger/"+h[0].data.transaction.to)&&u(t,"href",o)},d(h){h&&s(t)}}}function ye(l){let t,e="<br/>";return{c(){t=_("p"),t.innerHTML=e,this.h()},l(a){t=d(a,"P",{class:!0,"data-svelte-h":!0}),y(t)!=="svelte-521bsh"&&(t.innerHTML=e),this.h()},h(){u(t,"class","text svelte-qk8c5b")},m(a,o){f(a,t,o)},p:J,d(a){a&&s(t)}}}function ge(l){let t=l[0].data.transaction.signature+"",e;return{c(){e=p(t)},l(a){e=v(a,t)},m(a,o){f(a,e,o)},p(a,o){o&1&&t!==(t=a[0].data.transaction.signature+"")&&E(e,t)},d(a){a&&s(e)}}}function Pe(l){let t,e="<br/>";return{c(){t=_("p"),t.innerHTML=e,this.h()},l(a){t=d(a,"P",{class:!0,"data-svelte-h":!0}),y(t)!=="svelte-521bsh"&&(t.innerHTML=e),this.h()},h(){u(t,"class","text svelte-qk8c5b")},m(a,o){f(a,t,o)},p:J,d(a){a&&s(t)}}}function Te(l){let t;return{c(){t=p("n/a")},l(e){t=v(e,"n/a")},m(e,a){f(e,t,a)},d(e){e&&s(t)}}}function qe(l){let t;return{c(){t=p("Stale")},l(e){t=v(e,"Stale")},m(e,a){f(e,t,a)},d(e){e&&s(t)}}}function Re(l){let t;return{c(){t=p("Duplicate contract")},l(e){t=v(e,"Duplicate contract")},m(e,a){f(e,t,a)},d(e){e&&s(t)}}}function we(l){let t;return{c(){t=p("Unknown")},l(e){t=v(e,"Unknown")},m(e,a){f(e,t,a)},d(e){e&&s(t)}}}function Ee(l){let t;return{c(){t=p("Verify failed")},l(e){t=v(e,"Verify failed")},m(e,a){f(e,t,a)},d(e){e&&s(t)}}}function Ie(l){let t;return{c(){t=p("Invalid method")},l(e){t=v(e,"Invalid method")},m(e,a){f(e,t,a)},d(e){e&&s(t)}}}function Se(l){let t;return{c(){t=p("Invalid payload")},l(e){t=v(e,"Invalid payload")},m(e,a){f(e,t,a)},d(e){e&&s(t)}}}function Ve(l){let t;return{c(){t=p("Contract snapshot missing")},l(e){t=v(e,"Contract snapshot missing")},m(e,a){f(e,t,a)},d(e){e&&s(t)}}}function De(l){let t;return{c(){t=p("Contract entrypoint missing")},l(e){t=v(e,"Contract entrypoint missing")},m(e,a){f(e,t,a)},d(e){e&&s(t)}}}function Me(l){let t;return{c(){t=p("Contract execution failed")},l(e){t=v(e,"Contract execution failed")},m(e,a){f(e,t,a)},d(e){e&&s(t)}}}function He(l){let t;return{c(){t=p("Invalid contract")},l(e){t=v(e,"Invalid contract")},m(e,a){f(e,t,a)},d(e){e&&s(t)}}}function Le(l){let t;return{c(){t=p("Too low balance")},l(e){t=v(e,"Too low balance")},m(e,a){f(e,t,a)},d(e){e&&s(t)}}}function je(l){let t;return{c(){t=p("Success")},l(e){t=v(e,"Success")},m(e,a){f(e,t,a)},d(e){e&&s(t)}}}function ze(l){let t;return{c(){t=p("Pending")},l(e){t=v(e,"Pending")},m(e,a){f(e,t,a)},d(e){e&&s(t)}}}function Ke(l){let t;return{c(){t=p("Verifying")},l(e){t=v(e,"Verifying")},m(e,a){f(e,t,a)},d(e){e&&s(t)}}}function $e(l){let t;return{c(){t=p("Waiting")},l(e){t=v(e,"Waiting")},m(e,a){f(e,t,a)},d(e){e&&s(t)}}}function Ae(l){let t,e,a,o="Transaction details",h,b,c,I,Vt="Transaction Id",dt,U,Q=l[0].data.transaction.transactionId+"",tt,pt,S,Dt="Transaction Type",vt,V,ht,D,Mt="Timestamp / Nonce",bt,W,X=l[0].data.transaction.timestamp+"",et,mt,M,Ht="Public Key",kt,at,H,Lt="Sender",xt,L,Ct,j,jt="Recipient",yt,z,gt,K,zt="Value",Pt,N,Y=(l[0].data.transaction.value/1e6).toFixed(2)+"",nt,Tt,$,Kt="Signature",qt,A,Rt,B,$t="Execution Result",wt,F,Et,O,At="Data",It,G,Z=(l[0].data.transaction.data||"")+"",lt;function Bt(n,x){return n[0].data.transaction.transactionType==0?he:n[0].data.transaction.transactionType==1?ve:n[0].data.transaction.transactionType==2?pe:n[0].data.transaction.transactionType==3?de:n[0].data.transaction.transactionType==4?_e:n[0].data.transaction.transactionType==5?fe:ue}let rt=Bt(l),R=rt(l);function Ft(n,x){return n[0].data.transaction.publicKey==null||n[0].data.transaction.publicKey==St?me:be}let st=Ft(l),g=st(l);function Ot(n,x){return n[0].data.transaction.from==null||n[0].data.transaction.from==St?xe:ke}let ct=Ot(l),P=ct(l);function Ut(n,x){return n[0].data.transaction.to==null||n[0].data.transaction.to==St?ye:Ce}let it=Ut(l),T=it(l);function Wt(n,x){return n[0].data.transaction.signature=="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"?Pe:ge}let ot=Wt(l),q=ot(l);function Nt(n,x){return n[0].data.transaction.executionResult==0?$e:n[0].data.transaction.executionResult==1?Ke:n[0].data.transaction.executionResult==2?ze:n[0].data.transaction.executionResult==3?je:n[0].data.transaction.executionResult==4?Le:n[0].data.transaction.executionResult==5?He:n[0].data.transaction.executionResult==6?Me:n[0].data.transaction.executionResult==7?De:n[0].data.transaction.executionResult==8?Ve:n[0].data.transaction.executionResult==9?Se:n[0].data.transaction.executionResult==10?Ie:n[0].data.transaction.executionResult==11?Ee:n[0].data.transaction.executionResult==12?we:n[0].data.transaction.executionResult==13?Re:n[0].data.transaction.executionResult==14?qe:Te}let ut=Nt(l),w=ut(l);return{c(){t=_("div"),e=_("div"),a=_("p"),a.textContent=o,h=m(),b=_("div"),c=_("div"),I=_("p"),I.textContent=Vt,dt=m(),U=_("p"),tt=p(Q),pt=m(),S=_("p"),S.textContent=Dt,vt=m(),V=_("p"),R.c(),ht=m(),D=_("p"),D.textContent=Mt,bt=m(),W=_("p"),et=p(X),mt=m(),M=_("p"),M.textContent=Ht,kt=m(),g.c(),at=m(),H=_("p"),H.textContent=Lt,xt=m(),L=_("p"),P.c(),Ct=m(),j=_("p"),j.textContent=jt,yt=m(),z=_("p"),T.c(),gt=m(),K=_("p"),K.textContent=zt,Pt=m(),N=_("p"),nt=p(Y),Tt=m(),$=_("p"),$.textContent=Kt,qt=m(),A=_("p"),q.c(),Rt=m(),B=_("p"),B.textContent=$t,wt=m(),F=_("p"),w.c(),Et=m(),O=_("p"),O.textContent=At,It=m(),G=_("p"),lt=p(Z),this.h()},l(n){t=d(n,"DIV",{class:!0});var x=C(t);e=d(x,"DIV",{class:!0});var ft=C(e);a=d(ft,"P",{class:!0,"data-svelte-h":!0}),y(a)!=="svelte-6qpxi1"&&(a.textContent=o),h=k(ft),b=d(ft,"DIV",{class:!0});var Gt=C(b);c=d(Gt,"DIV",{});var i=C(c);I=d(i,"P",{class:!0,"data-svelte-h":!0}),y(I)!=="svelte-oopf7z"&&(I.textContent=Vt),dt=k(i),U=d(i,"P",{class:!0});var Jt=C(U);tt=v(Jt,Q),Jt.forEach(s),pt=k(i),S=d(i,"P",{class:!0,"data-svelte-h":!0}),y(S)!=="svelte-lk6ew4"&&(S.textContent=Dt),vt=k(i),V=d(i,"P",{class:!0});var Qt=C(V);R.l(Qt),Qt.forEach(s),ht=k(i),D=d(i,"P",{class:!0,"data-svelte-h":!0}),y(D)!=="svelte-13gilcq"&&(D.textContent=Mt),bt=k(i),W=d(i,"P",{class:!0});var Xt=C(W);et=v(Xt,X),Xt.forEach(s),mt=k(i),M=d(i,"P",{class:!0,"data-svelte-h":!0}),y(M)!=="svelte-13pv59u"&&(M.textContent=Ht),kt=k(i),g.l(i),at=k(i),H=d(i,"P",{class:!0,"data-svelte-h":!0}),y(H)!=="svelte-8f720r"&&(H.textContent=Lt),xt=k(i),L=d(i,"P",{class:!0});var Yt=C(L);P.l(Yt),Yt.forEach(s),Ct=k(i),j=d(i,"P",{class:!0,"data-svelte-h":!0}),y(j)!=="svelte-1om8m5b"&&(j.textContent=jt),yt=k(i),z=d(i,"P",{class:!0});var Zt=C(z);T.l(Zt),Zt.forEach(s),gt=k(i),K=d(i,"P",{class:!0,"data-svelte-h":!0}),y(K)!=="svelte-u7yvv9"&&(K.textContent=zt),Pt=k(i),N=d(i,"P",{class:!0});var te=C(N);nt=v(te,Y),te.forEach(s),Tt=k(i),$=d(i,"P",{class:!0,"data-svelte-h":!0}),y($)!=="svelte-17a6fxy"&&($.textContent=Kt),qt=k(i),A=d(i,"P",{class:!0});var ee=C(A);q.l(ee),ee.forEach(s),Rt=k(i),B=d(i,"P",{class:!0,"data-svelte-h":!0}),y(B)!=="svelte-1jzt62t"&&(B.textContent=$t),wt=k(i),F=d(i,"P",{class:!0});var ae=C(F);w.l(ae),ae.forEach(s),Et=k(i),O=d(i,"P",{class:!0,"data-svelte-h":!0}),y(O)!=="svelte-1r6hllw"&&(O.textContent=At),It=k(i),G=d(i,"P",{class:!0});var ne=C(G);lt=v(ne,Z),ne.forEach(s),i.forEach(s),Gt.forEach(s),ft.forEach(s),x.forEach(s),this.h()},h(){u(a,"class","title"),u(I,"class","header"),u(U,"class","text svelte-qk8c5b"),u(S,"class","header"),u(V,"class","text svelte-qk8c5b"),u(D,"class","header"),u(W,"class","text svelte-qk8c5b"),u(M,"class","header"),u(H,"class","header"),u(L,"class","text svelte-qk8c5b"),u(j,"class","header"),u(z,"class","text svelte-qk8c5b"),u(K,"class","header"),u(N,"class","text svelte-qk8c5b"),u($,"class","header"),u(A,"class","text svelte-qk8c5b"),u(B,"class","header"),u(F,"class","text svelte-qk8c5b"),u(O,"class","header"),u(G,"class","text svelte-qk8c5b"),u(b,"class","container"),u(e,"class","info svelte-qk8c5b"),u(t,"class","main svelte-qk8c5b")},m(n,x){f(n,t,x),r(t,e),r(e,a),r(e,h),r(e,b),r(b,c),r(c,I),r(c,dt),r(c,U),r(U,tt),r(c,pt),r(c,S),r(c,vt),r(c,V),R.m(V,null),r(c,ht),r(c,D),r(c,bt),r(c,W),r(W,et),r(c,mt),r(c,M),r(c,kt),g.m(c,null),r(c,at),r(c,H),r(c,xt),r(c,L),P.m(L,null),r(c,Ct),r(c,j),r(c,yt),r(c,z),T.m(z,null),r(c,gt),r(c,K),r(c,Pt),r(c,N),r(N,nt),r(c,Tt),r(c,$),r(c,qt),r(c,A),q.m(A,null),r(c,Rt),r(c,B),r(c,wt),r(c,F),w.m(F,null),r(c,Et),r(c,O),r(c,It),r(c,G),r(G,lt)},p(n,[x]){x&1&&Q!==(Q=n[0].data.transaction.transactionId+"")&&E(tt,Q),rt!==(rt=Bt(n))&&(R.d(1),R=rt(n),R&&(R.c(),R.m(V,null))),x&1&&X!==(X=n[0].data.transaction.timestamp+"")&&E(et,X),st===(st=Ft(n))&&g?g.p(n,x):(g.d(1),g=st(n),g&&(g.c(),g.m(c,at))),ct===(ct=Ot(n))&&P?P.p(n,x):(P.d(1),P=ct(n),P&&(P.c(),P.m(L,null))),it===(it=Ut(n))&&T?T.p(n,x):(T.d(1),T=it(n),T&&(T.c(),T.m(z,null))),x&1&&Y!==(Y=(n[0].data.transaction.value/1e6).toFixed(2)+"")&&E(nt,Y),ot===(ot=Wt(n))&&q?q.p(n,x):(q.d(1),q=ot(n),q&&(q.c(),q.m(A,null))),ut!==(ut=Nt(n))&&(w.d(1),w=ut(n),w&&(w.c(),w.m(F,null))),x&1&&Z!==(Z=(n[0].data.transaction.data||"")+"")&&E(lt,Z)},i:J,o:J,d(n){n&&s(t),R.d(),g.d(),P.d(),T.d(),q.d(),w.d()}}}let St="kryo:weamtrfsr7twjpbkybbfbudkp4fzmw97zrdk4yvkbi";function Be(l,t,e){let a;return re(l,ie,o=>e(0,a=o)),[a]}class Ge extends se{constructor(t){super(),ce(this,t,Be,Ae,le,{})}}export{Ge as component,Ne as universal};