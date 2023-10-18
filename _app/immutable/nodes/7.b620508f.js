import{s as le,n as J,e as re}from"../chunks/scheduler.e108d1fd.js";import{S as ie,i as se,g as d,s as b,m as p,h as _,j as C,x as y,c as k,n as v,f as i,k as u,a as f,z as r,o as E}from"../chunks/index.c3f76b74.js";import{e as dt}from"../chunks/singletons.f2220016.js";import{p as ce}from"../chunks/stores.b6625f64.js";async function oe({fetch:l,params:t}){return{transaction:await(await l(`https://testnet-1.kryolite.io/tx/${t.txid}`)).json()}}const Ne=Object.freeze(Object.defineProperty({__proto__:null,load:oe},Symbol.toStringTag,{value:"Module"}));function ue(l){let t;return{c(){t=p("n/a")},l(e){t=v(e,"n/a")},m(e,a){f(e,t,a)},d(e){e&&i(t)}}}function fe(l){let t;return{c(){t=p("Dev reward")},l(e){t=v(e,"Dev reward")},m(e,a){f(e,t,a)},d(e){e&&i(t)}}}function de(l){let t;return{c(){t=p("Reg Validator")},l(e){t=v(e,"Reg Validator")},m(e,a){f(e,t,a)},d(e){e&&i(t)}}}function _e(l){let t;return{c(){t=p("Contract")},l(e){t=v(e,"Contract")},m(e,a){f(e,t,a)},d(e){e&&i(t)}}}function pe(l){let t;return{c(){t=p("Stake reward")},l(e){t=v(e,"Stake reward")},m(e,a){f(e,t,a)},d(e){e&&i(t)}}}function ve(l){let t;return{c(){t=p("Block reward")},l(e){t=v(e,"Block reward")},m(e,a){f(e,t,a)},d(e){e&&i(t)}}}function he(l){let t;return{c(){t=p("Transaction")},l(e){t=v(e,"Transaction")},m(e,a){f(e,t,a)},d(e){e&&i(t)}}}function me(l){let t,e=l[0].data.transaction.publicKey+"",a;return{c(){t=d("p"),a=p(e),this.h()},l(o){t=_(o,"P",{class:!0});var h=C(t);a=v(h,e),h.forEach(i),this.h()},h(){u(t,"class","text svelte-qk8c5b")},m(o,h){f(o,t,h),r(t,a)},p(o,h){h&1&&e!==(e=o[0].data.transaction.publicKey+"")&&E(a,e)},d(o){o&&i(t)}}}function be(l){let t,e="<br/>";return{c(){t=d("p"),t.innerHTML=e,this.h()},l(a){t=_(a,"P",{class:!0,"data-svelte-h":!0}),y(t)!=="svelte-521bsh"&&(t.innerHTML=e),this.h()},h(){u(t,"class","text svelte-qk8c5b")},m(a,o){f(a,t,o)},p:J,d(a){a&&i(t)}}}function ke(l){let t,e=l[0].data.transaction.from+"",a,o;return{c(){t=d("a"),a=p(e),this.h()},l(h){t=_(h,"A",{class:!0,href:!0});var m=C(t);a=v(m,e),m.forEach(i),this.h()},h(){u(t,"class","text svelte-qk8c5b"),u(t,"href",o=dt+"/ledger/"+l[0].data.transaction.from)},m(h,m){f(h,t,m),r(t,a)},p(h,m){m&1&&e!==(e=h[0].data.transaction.from+"")&&E(a,e),m&1&&o!==(o=dt+"/ledger/"+h[0].data.transaction.from)&&u(t,"href",o)},d(h){h&&i(t)}}}function xe(l){let t,e="<br/>";return{c(){t=d("p"),t.innerHTML=e,this.h()},l(a){t=_(a,"P",{class:!0,"data-svelte-h":!0}),y(t)!=="svelte-521bsh"&&(t.innerHTML=e),this.h()},h(){u(t,"class","text svelte-qk8c5b")},m(a,o){f(a,t,o)},p:J,d(a){a&&i(t)}}}function Ce(l){let t,e=l[0].data.transaction.to+"",a,o;return{c(){t=d("a"),a=p(e),this.h()},l(h){t=_(h,"A",{class:!0,href:!0});var m=C(t);a=v(m,e),m.forEach(i),this.h()},h(){u(t,"class","text svelte-qk8c5b"),u(t,"href",o=dt+"/ledger/"+l[0].data.transaction.to)},m(h,m){f(h,t,m),r(t,a)},p(h,m){m&1&&e!==(e=h[0].data.transaction.to+"")&&E(a,e),m&1&&o!==(o=dt+"/ledger/"+h[0].data.transaction.to)&&u(t,"href",o)},d(h){h&&i(t)}}}function ye(l){let t,e="<br/>";return{c(){t=d("p"),t.innerHTML=e,this.h()},l(a){t=_(a,"P",{class:!0,"data-svelte-h":!0}),y(t)!=="svelte-521bsh"&&(t.innerHTML=e),this.h()},h(){u(t,"class","text svelte-qk8c5b")},m(a,o){f(a,t,o)},p:J,d(a){a&&i(t)}}}function ge(l){let t=l[0].data.transaction.signature+"",e;return{c(){e=p(t)},l(a){e=v(a,t)},m(a,o){f(a,e,o)},p(a,o){o&1&&t!==(t=a[0].data.transaction.signature+"")&&E(e,t)},d(a){a&&i(e)}}}function Pe(l){let t,e="<br/>";return{c(){t=d("p"),t.innerHTML=e,this.h()},l(a){t=_(a,"P",{class:!0,"data-svelte-h":!0}),y(t)!=="svelte-521bsh"&&(t.innerHTML=e),this.h()},h(){u(t,"class","text svelte-qk8c5b")},m(a,o){f(a,t,o)},p:J,d(a){a&&i(t)}}}function Te(l){let t;return{c(){t=p("n/a")},l(e){t=v(e,"n/a")},m(e,a){f(e,t,a)},d(e){e&&i(t)}}}function qe(l){let t;return{c(){t=p("Stale")},l(e){t=v(e,"Stale")},m(e,a){f(e,t,a)},d(e){e&&i(t)}}}function Re(l){let t;return{c(){t=p("Duplicate contract")},l(e){t=v(e,"Duplicate contract")},m(e,a){f(e,t,a)},d(e){e&&i(t)}}}function we(l){let t;return{c(){t=p("Unknown")},l(e){t=v(e,"Unknown")},m(e,a){f(e,t,a)},d(e){e&&i(t)}}}function Ee(l){let t;return{c(){t=p("Verify failed")},l(e){t=v(e,"Verify failed")},m(e,a){f(e,t,a)},d(e){e&&i(t)}}}function Se(l){let t;return{c(){t=p("Invalid method")},l(e){t=v(e,"Invalid method")},m(e,a){f(e,t,a)},d(e){e&&i(t)}}}function De(l){let t;return{c(){t=p("Invalid payload")},l(e){t=v(e,"Invalid payload")},m(e,a){f(e,t,a)},d(e){e&&i(t)}}}function Ie(l){let t;return{c(){t=p("Contract snapshot missing")},l(e){t=v(e,"Contract snapshot missing")},m(e,a){f(e,t,a)},d(e){e&&i(t)}}}function Ve(l){let t;return{c(){t=p("Contract entrypoint missing")},l(e){t=v(e,"Contract entrypoint missing")},m(e,a){f(e,t,a)},d(e){e&&i(t)}}}function Le(l){let t;return{c(){t=p("Contract execution failed")},l(e){t=v(e,"Contract execution failed")},m(e,a){f(e,t,a)},d(e){e&&i(t)}}}function Me(l){let t;return{c(){t=p("Invalid contract")},l(e){t=v(e,"Invalid contract")},m(e,a){f(e,t,a)},d(e){e&&i(t)}}}function He(l){let t;return{c(){t=p("Too low balance")},l(e){t=v(e,"Too low balance")},m(e,a){f(e,t,a)},d(e){e&&i(t)}}}function je(l){let t;return{c(){t=p("Success")},l(e){t=v(e,"Success")},m(e,a){f(e,t,a)},d(e){e&&i(t)}}}function ze(l){let t;return{c(){t=p("Pending")},l(e){t=v(e,"Pending")},m(e,a){f(e,t,a)},d(e){e&&i(t)}}}function Ke(l){let t;return{c(){t=p("Verifying")},l(e){t=v(e,"Verifying")},m(e,a){f(e,t,a)},d(e){e&&i(t)}}}function Fe(l){let t;return{c(){t=p("Waiting")},l(e){t=v(e,"Waiting")},m(e,a){f(e,t,a)},d(e){e&&i(t)}}}function $e(l){let t,e,a,o="Transaction details",h,m,s,S,It="Transaction Id",_t,U,Q=l[0].data.transaction.transactionId+"",tt,pt,D,Vt="Transaction Type",vt,I,ht,V,Lt="Timestamp / Nonce",mt,W,X=l[0].data.transaction.timestamp+"",et,bt,L,Mt="Public Key",kt,at,M,Ht="Sender",xt,H,Ct,j,jt="Recipient",yt,z,gt,K,zt="Value",Pt,N,Y=(l[0].data.transaction.value/1e6).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+"",nt,Tt,F,Kt="Signature",qt,$,Rt,A,Ft="Execution Result",wt,B,Et,O,$t="Data",St,G,Z=(l[0].data.transaction.data||"")+"",lt;function At(n,x){return n[0].data.transaction.transactionType==0?he:n[0].data.transaction.transactionType==1?ve:n[0].data.transaction.transactionType==2?pe:n[0].data.transaction.transactionType==3?_e:n[0].data.transaction.transactionType==4?de:n[0].data.transaction.transactionType==5?fe:ue}let rt=At(l),R=rt(l);function Bt(n,x){return n[0].data.transaction.publicKey==null||n[0].data.transaction.publicKey==Dt?be:me}let it=Bt(l),g=it(l);function Ot(n,x){return n[0].data.transaction.from==null||n[0].data.transaction.from==Dt?xe:ke}let st=Ot(l),P=st(l);function Ut(n,x){return n[0].data.transaction.to==null||n[0].data.transaction.to==Dt?ye:Ce}let ct=Ut(l),T=ct(l);function Wt(n,x){return n[0].data.transaction.signature=="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"?Pe:ge}let ot=Wt(l),q=ot(l);function Nt(n,x){return n[0].data.transaction.executionResult==0?Fe:n[0].data.transaction.executionResult==1?Ke:n[0].data.transaction.executionResult==2?ze:n[0].data.transaction.executionResult==3?je:n[0].data.transaction.executionResult==4?He:n[0].data.transaction.executionResult==5?Me:n[0].data.transaction.executionResult==6?Le:n[0].data.transaction.executionResult==7?Ve:n[0].data.transaction.executionResult==8?Ie:n[0].data.transaction.executionResult==9?De:n[0].data.transaction.executionResult==10?Se:n[0].data.transaction.executionResult==11?Ee:n[0].data.transaction.executionResult==12?we:n[0].data.transaction.executionResult==13?Re:n[0].data.transaction.executionResult==14?qe:Te}let ut=Nt(l),w=ut(l);return{c(){t=d("div"),e=d("div"),a=d("p"),a.textContent=o,h=b(),m=d("div"),s=d("div"),S=d("p"),S.textContent=It,_t=b(),U=d("p"),tt=p(Q),pt=b(),D=d("p"),D.textContent=Vt,vt=b(),I=d("p"),R.c(),ht=b(),V=d("p"),V.textContent=Lt,mt=b(),W=d("p"),et=p(X),bt=b(),L=d("p"),L.textContent=Mt,kt=b(),g.c(),at=b(),M=d("p"),M.textContent=Ht,xt=b(),H=d("p"),P.c(),Ct=b(),j=d("p"),j.textContent=jt,yt=b(),z=d("p"),T.c(),gt=b(),K=d("p"),K.textContent=zt,Pt=b(),N=d("p"),nt=p(Y),Tt=b(),F=d("p"),F.textContent=Kt,qt=b(),$=d("p"),q.c(),Rt=b(),A=d("p"),A.textContent=Ft,wt=b(),B=d("p"),w.c(),Et=b(),O=d("p"),O.textContent=$t,St=b(),G=d("p"),lt=p(Z),this.h()},l(n){t=_(n,"DIV",{class:!0});var x=C(t);e=_(x,"DIV",{class:!0});var ft=C(e);a=_(ft,"P",{class:!0,"data-svelte-h":!0}),y(a)!=="svelte-6qpxi1"&&(a.textContent=o),h=k(ft),m=_(ft,"DIV",{class:!0});var Gt=C(m);s=_(Gt,"DIV",{});var c=C(s);S=_(c,"P",{class:!0,"data-svelte-h":!0}),y(S)!=="svelte-oopf7z"&&(S.textContent=It),_t=k(c),U=_(c,"P",{class:!0});var Jt=C(U);tt=v(Jt,Q),Jt.forEach(i),pt=k(c),D=_(c,"P",{class:!0,"data-svelte-h":!0}),y(D)!=="svelte-lk6ew4"&&(D.textContent=Vt),vt=k(c),I=_(c,"P",{class:!0});var Qt=C(I);R.l(Qt),Qt.forEach(i),ht=k(c),V=_(c,"P",{class:!0,"data-svelte-h":!0}),y(V)!=="svelte-13gilcq"&&(V.textContent=Lt),mt=k(c),W=_(c,"P",{class:!0});var Xt=C(W);et=v(Xt,X),Xt.forEach(i),bt=k(c),L=_(c,"P",{class:!0,"data-svelte-h":!0}),y(L)!=="svelte-13pv59u"&&(L.textContent=Mt),kt=k(c),g.l(c),at=k(c),M=_(c,"P",{class:!0,"data-svelte-h":!0}),y(M)!=="svelte-8f720r"&&(M.textContent=Ht),xt=k(c),H=_(c,"P",{class:!0});var Yt=C(H);P.l(Yt),Yt.forEach(i),Ct=k(c),j=_(c,"P",{class:!0,"data-svelte-h":!0}),y(j)!=="svelte-1om8m5b"&&(j.textContent=jt),yt=k(c),z=_(c,"P",{class:!0});var Zt=C(z);T.l(Zt),Zt.forEach(i),gt=k(c),K=_(c,"P",{class:!0,"data-svelte-h":!0}),y(K)!=="svelte-u7yvv9"&&(K.textContent=zt),Pt=k(c),N=_(c,"P",{class:!0});var te=C(N);nt=v(te,Y),te.forEach(i),Tt=k(c),F=_(c,"P",{class:!0,"data-svelte-h":!0}),y(F)!=="svelte-17a6fxy"&&(F.textContent=Kt),qt=k(c),$=_(c,"P",{class:!0});var ee=C($);q.l(ee),ee.forEach(i),Rt=k(c),A=_(c,"P",{class:!0,"data-svelte-h":!0}),y(A)!=="svelte-1jzt62t"&&(A.textContent=Ft),wt=k(c),B=_(c,"P",{class:!0});var ae=C(B);w.l(ae),ae.forEach(i),Et=k(c),O=_(c,"P",{class:!0,"data-svelte-h":!0}),y(O)!=="svelte-1r6hllw"&&(O.textContent=$t),St=k(c),G=_(c,"P",{class:!0});var ne=C(G);lt=v(ne,Z),ne.forEach(i),c.forEach(i),Gt.forEach(i),ft.forEach(i),x.forEach(i),this.h()},h(){u(a,"class","title"),u(S,"class","header"),u(U,"class","text svelte-qk8c5b"),u(D,"class","header"),u(I,"class","text svelte-qk8c5b"),u(V,"class","header"),u(W,"class","text svelte-qk8c5b"),u(L,"class","header"),u(M,"class","header"),u(H,"class","text svelte-qk8c5b"),u(j,"class","header"),u(z,"class","text svelte-qk8c5b"),u(K,"class","header"),u(N,"class","text svelte-qk8c5b"),u(F,"class","header"),u($,"class","text svelte-qk8c5b"),u(A,"class","header"),u(B,"class","text svelte-qk8c5b"),u(O,"class","header"),u(G,"class","text svelte-qk8c5b"),u(m,"class","container"),u(e,"class","info svelte-qk8c5b"),u(t,"class","main svelte-qk8c5b")},m(n,x){f(n,t,x),r(t,e),r(e,a),r(e,h),r(e,m),r(m,s),r(s,S),r(s,_t),r(s,U),r(U,tt),r(s,pt),r(s,D),r(s,vt),r(s,I),R.m(I,null),r(s,ht),r(s,V),r(s,mt),r(s,W),r(W,et),r(s,bt),r(s,L),r(s,kt),g.m(s,null),r(s,at),r(s,M),r(s,xt),r(s,H),P.m(H,null),r(s,Ct),r(s,j),r(s,yt),r(s,z),T.m(z,null),r(s,gt),r(s,K),r(s,Pt),r(s,N),r(N,nt),r(s,Tt),r(s,F),r(s,qt),r(s,$),q.m($,null),r(s,Rt),r(s,A),r(s,wt),r(s,B),w.m(B,null),r(s,Et),r(s,O),r(s,St),r(s,G),r(G,lt)},p(n,[x]){x&1&&Q!==(Q=n[0].data.transaction.transactionId+"")&&E(tt,Q),rt!==(rt=At(n))&&(R.d(1),R=rt(n),R&&(R.c(),R.m(I,null))),x&1&&X!==(X=n[0].data.transaction.timestamp+"")&&E(et,X),it===(it=Bt(n))&&g?g.p(n,x):(g.d(1),g=it(n),g&&(g.c(),g.m(s,at))),st===(st=Ot(n))&&P?P.p(n,x):(P.d(1),P=st(n),P&&(P.c(),P.m(H,null))),ct===(ct=Ut(n))&&T?T.p(n,x):(T.d(1),T=ct(n),T&&(T.c(),T.m(z,null))),x&1&&Y!==(Y=(n[0].data.transaction.value/1e6).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+"")&&E(nt,Y),ot===(ot=Wt(n))&&q?q.p(n,x):(q.d(1),q=ot(n),q&&(q.c(),q.m($,null))),ut!==(ut=Nt(n))&&(w.d(1),w=ut(n),w&&(w.c(),w.m(B,null))),x&1&&Z!==(Z=(n[0].data.transaction.data||"")+"")&&E(lt,Z)},i:J,o:J,d(n){n&&i(t),R.d(),g.d(),P.d(),T.d(),q.d(),w.d()}}}let Dt="kryo:weamtrfsr7twjpbkybbfbudkp4fzmw97zrdk4yvkbi";function Ae(l,t,e){let a;return re(l,ce,o=>e(0,a=o)),[a]}class Ge extends ie{constructor(t){super(),se(this,t,Ae,$e,le,{})}}export{Ge as component,Ne as universal};