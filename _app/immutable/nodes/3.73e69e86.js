import{s as Nt,n as et,e as Bt}from"../chunks/scheduler.e108d1fd.js";import{S as Ft,i as Gt,g as v,s as T,h as g,x as H,c as D,j as S,f as s,k as u,a as f,z as _,D as U,m as d,n as p,o as lt,e as tt}from"../chunks/index.c3f76b74.js";import{e as w}from"../chunks/each.e59479a4.js";import{e as q}from"../chunks/singletons.eee57c50.js";import{p as Ot}from"../chunks/stores.91af7302.js";async function Ut({fetch:o,params:t}){return{transactions:await(await o(`https://testnet-1.kryolite.io/tx/height/${t.height}`)).json()}}const Se=Object.freeze(Object.defineProperty({__proto__:null,load:Ut},Symbol.toStringTag,{value:"Module"}));function Et(o,t,e){const l=o.slice();return l[1]=t[e].executionResult,l[3]=e,l}function Tt(o,t,e){const l=o.slice();return l[4]=t[e].value,l[3]=e,l}function Dt(o,t,e){const l=o.slice();return l[6]=t[e].to,l[3]=e,l}function St(o,t,e){const l=o.slice();return l[8]=t[e].from,l[3]=e,l}function wt(o,t,e){const l=o.slice();return l[10]=t[e].height,l[3]=e,l}function Ht(o,t,e){const l=o.slice();return l[12]=t[e].transactionType,l[3]=e,l}function Mt(o,t,e){const l=o.slice();return l[14]=t[e].transactionId,l[3]=e,l}function jt(o){let t,e=o[14].substring(0,12)+"",l,r;return{c(){t=v("a"),l=d(e),this.h()},l(a){t=g(a,"A",{class:!0,href:!0});var c=S(t);l=p(c,e),c.forEach(s),this.h()},h(){u(t,"class","text"),u(t,"href",r=q+"/tx/"+o[14])},m(a,c){f(a,t,c),_(t,l)},p(a,c){c&1&&e!==(e=a[14].substring(0,12)+"")&&lt(l,e),c&1&&r!==(r=q+"/tx/"+a[14])&&u(t,"href",r)},d(a){a&&s(t)}}}function Wt(o){let t;return{c(){t=d("n/a")},l(e){t=p(e,"n/a")},m(e,l){f(e,t,l)},d(e){e&&s(t)}}}function Jt(o){let t;return{c(){t=d("Vote")},l(e){t=p(e,"Vote")},m(e,l){f(e,t,l)},d(e){e&&s(t)}}}function Kt(o){let t;return{c(){t=d("RegValidator")},l(e){t=p(e,"RegValidator")},m(e,l){f(e,t,l)},d(e){e&&s(t)}}}function Qt(o){let t;return{c(){t=d("Contract")},l(e){t=p(e,"Contract")},m(e,l){f(e,t,l)},d(e){e&&s(t)}}}function Xt(o){let t;return{c(){t=d("View")},l(e){t=p(e,"View")},m(e,l){f(e,t,l)},d(e){e&&s(t)}}}function Yt(o){let t;return{c(){t=d("Block")},l(e){t=p(e,"Block")},m(e,l){f(e,t,l)},d(e){e&&s(t)}}}function Zt(o){let t;return{c(){t=d("Genesis")},l(e){t=p(e,"Genesis")},m(e,l){f(e,t,l)},d(e){e&&s(t)}}}function te(o){let t;return{c(){t=d("Transaction")},l(e){t=p(e,"Transaction")},m(e,l){f(e,t,l)},d(e){e&&s(t)}}}function Lt(o){let t,e;function l(c,k){return c[12]==0?te:c[12]==1?Zt:c[12]==2?Yt:c[12]==3?Xt:c[12]==4?Qt:c[12]==5?Kt:c[12]==6?Jt:Wt}let r=l(o),a=r(o);return{c(){t=v("p"),a.c(),e=T(),this.h()},l(c){t=g(c,"P",{class:!0});var k=S(t);a.l(k),e=D(k),k.forEach(s),this.h()},h(){u(t,"class","text")},m(c,k){f(c,t,k),a.m(t,null),_(t,e)},p(c,k){r!==(r=l(c))&&(a.d(1),a=r(c),a&&(a.c(),a.m(t,e)))},d(c){c&&s(t),a.d()}}}function ee(o){let t,e=o[10]+"",l,r;return{c(){t=v("a"),l=d(e),this.h()},l(a){t=g(a,"A",{class:!0,href:!0});var c=S(t);l=p(c,e),c.forEach(s),this.h()},h(){u(t,"class","text"),u(t,"href",r=q+"/height/"+o[10])},m(a,c){f(a,t,c),_(t,l)},p(a,c){c&1&&e!==(e=a[10]+"")&&lt(l,e),c&1&&r!==(r=q+"/height/"+a[10])&&u(t,"href",r)},d(a){a&&s(t)}}}function le(o){let t,e="<br/>";return{c(){t=v("p"),t.innerHTML=e,this.h()},l(l){t=g(l,"P",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-521bsh"&&(t.innerHTML=e),this.h()},h(){u(t,"class","text")},m(l,r){f(l,t,r)},p:et,d(l){l&&s(t)}}}function At(o){let t;function e(a,c){return a[10]==null?le:ee}let l=e(o),r=l(o);return{c(){r.c(),t=tt()},l(a){r.l(a),t=tt()},m(a,c){r.m(a,c),f(a,t,c)},p(a,c){l===(l=e(a))&&r?r.p(a,c):(r.d(1),r=l(a),r&&(r.c(),r.m(t.parentNode,t)))},d(a){a&&s(t),r.d(a)}}}function ne(o){let t,e=o[8]+"",l,r;return{c(){t=v("a"),l=d(e),this.h()},l(a){t=g(a,"A",{class:!0,href:!0});var c=S(t);l=p(c,e),c.forEach(s),this.h()},h(){u(t,"class","text"),u(t,"href",r=q+"/ledger/"+o[8])},m(a,c){f(a,t,c),_(t,l)},p(a,c){c&1&&e!==(e=a[8]+"")&&lt(l,e),c&1&&r!==(r=q+"/ledger/"+a[8])&&u(t,"href",r)},d(a){a&&s(t)}}}function ae(o){let t,e="<br/>";return{c(){t=v("p"),t.innerHTML=e,this.h()},l(l){t=g(l,"P",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-521bsh"&&(t.innerHTML=e),this.h()},h(){u(t,"class","text")},m(l,r){f(l,t,r)},p:et,d(l){l&&s(t)}}}function Rt(o){let t;function e(a,c){return a[8]==null||a[8]=="kryo:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"?ae:ne}let l=e(o),r=l(o);return{c(){r.c(),t=tt()},l(a){r.l(a),t=tt()},m(a,c){r.m(a,c),f(a,t,c)},p(a,c){l===(l=e(a))&&r?r.p(a,c):(r.d(1),r=l(a),r&&(r.c(),r.m(t.parentNode,t)))},d(a){a&&s(t),r.d(a)}}}function re(o){let t,e=o[6]+"",l,r;return{c(){t=v("a"),l=d(e),this.h()},l(a){t=g(a,"A",{class:!0,href:!0});var c=S(t);l=p(c,e),c.forEach(s),this.h()},h(){u(t,"class","text"),u(t,"href",r=q+"/ledger/"+o[6])},m(a,c){f(a,t,c),_(t,l)},p(a,c){c&1&&e!==(e=a[6]+"")&&lt(l,e),c&1&&r!==(r=q+"/ledger/"+a[6])&&u(t,"href",r)},d(a){a&&s(t)}}}function ce(o){let t,e="<br/>";return{c(){t=v("p"),t.innerHTML=e,this.h()},l(l){t=g(l,"P",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-521bsh"&&(t.innerHTML=e),this.h()},h(){u(t,"class","text")},m(l,r){f(l,t,r)},p:et,d(l){l&&s(t)}}}function $t(o){let t;function e(a,c){return a[6]==null||a[6]=="kryo:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"?ce:re}let l=e(o),r=l(o);return{c(){r.c(),t=tt()},l(a){r.l(a),t=tt()},m(a,c){r.m(a,c),f(a,t,c)},p(a,c){l===(l=e(a))&&r?r.p(a,c):(r.d(1),r=l(a),r&&(r.c(),r.m(t.parentNode,t)))},d(a){a&&s(t),r.d(a)}}}function qt(o){let t,e=(o[4]/1e6).toFixed(2)+"",l;return{c(){t=v("p"),l=d(e),this.h()},l(r){t=g(r,"P",{class:!0});var a=S(t);l=p(a,e),a.forEach(s),this.h()},h(){u(t,"class","text")},m(r,a){f(r,t,a),_(t,l)},p(r,a){a&1&&e!==(e=(r[4]/1e6).toFixed(2)+"")&&lt(l,e)},d(r){r&&s(t)}}}function ie(o){let t;return{c(){t=d("n/a")},l(e){t=p(e,"n/a")},m(e,l){f(e,t,l)},d(e){e&&s(t)}}}function oe(o){let t;return{c(){t=d("Stale")},l(e){t=p(e,"Stale")},m(e,l){f(e,t,l)},d(e){e&&s(t)}}}function se(o){let t;return{c(){t=d("Duplicate contract")},l(e){t=p(e,"Duplicate contract")},m(e,l){f(e,t,l)},d(e){e&&s(t)}}}function fe(o){let t;return{c(){t=d("Unknown")},l(e){t=p(e,"Unknown")},m(e,l){f(e,t,l)},d(e){e&&s(t)}}}function _e(o){let t;return{c(){t=d("Verify failed")},l(e){t=p(e,"Verify failed")},m(e,l){f(e,t,l)},d(e){e&&s(t)}}}function ue(o){let t;return{c(){t=d("Invalid method")},l(e){t=p(e,"Invalid method")},m(e,l){f(e,t,l)},d(e){e&&s(t)}}}function he(o){let t;return{c(){t=d("Invalid payload")},l(e){t=p(e,"Invalid payload")},m(e,l){f(e,t,l)},d(e){e&&s(t)}}}function de(o){let t;return{c(){t=d("Contract snapshot missing")},l(e){t=p(e,"Contract snapshot missing")},m(e,l){f(e,t,l)},d(e){e&&s(t)}}}function pe(o){let t;return{c(){t=d("Contract entrypoint missing")},l(e){t=p(e,"Contract entrypoint missing")},m(e,l){f(e,t,l)},d(e){e&&s(t)}}}function me(o){let t;return{c(){t=d("Contract execution failed")},l(e){t=p(e,"Contract execution failed")},m(e,l){f(e,t,l)},d(e){e&&s(t)}}}function ve(o){let t;return{c(){t=d("Invalid contract")},l(e){t=p(e,"Invalid contract")},m(e,l){f(e,t,l)},d(e){e&&s(t)}}}function ge(o){let t;return{c(){t=d("Too low balance")},l(e){t=p(e,"Too low balance")},m(e,l){f(e,t,l)},d(e){e&&s(t)}}}function be(o){let t;return{c(){t=d("Success")},l(e){t=p(e,"Success")},m(e,l){f(e,t,l)},d(e){e&&s(t)}}}function ke(o){let t;return{c(){t=d("Pending")},l(e){t=p(e,"Pending")},m(e,l){f(e,t,l)},d(e){e&&s(t)}}}function Ce(o){let t;return{c(){t=d("Verifying")},l(e){t=p(e,"Verifying")},m(e,l){f(e,t,l)},d(e){e&&s(t)}}}function xe(o){let t;return{c(){t=d("Waiting")},l(e){t=p(e,"Waiting")},m(e,l){f(e,t,l)},d(e){e&&s(t)}}}function zt(o){let t,e;function l(c,k){return c[1]==0?xe:c[1]==1?Ce:c[1]==2?ke:c[1]==3?be:c[1]==4?ge:c[1]==5?ve:c[1]==6?me:c[1]==7?pe:c[1]==8?de:c[1]==9?he:c[1]==10?ue:c[1]==11?_e:c[1]==12?fe:c[1]==13?se:c[1]==14?oe:ie}let r=l(o),a=r(o);return{c(){t=v("p"),a.c(),e=T(),this.h()},l(c){t=g(c,"P",{class:!0});var k=S(t);a.l(k),e=D(k),k.forEach(s),this.h()},h(){u(t,"class","text")},m(c,k){f(c,t,k),a.m(t,null),_(t,e)},p(c,k){r!==(r=l(c))&&(a.d(1),a=r(c),a&&(a.c(),a.m(t,e)))},d(c){c&&s(t),a.d()}}}function ye(o){let t,e="Transactions at Height",l,r,a,c,k="TransactionId",ot,st,M,z,Ct="Type",ft,_t,j,N,xt="Height",ut,ht,L,B,yt="Sender",dt,pt,A,F,Vt="Recipient",mt,vt,R,G,Pt="Value",gt,bt,$,O,It="Status",kt,W=w(o[0].data.transactions),C=[];for(let i=0;i<W.length;i+=1)C[i]=jt(Mt(o,W,i));let J=w(o[0].data.transactions),x=[];for(let i=0;i<J.length;i+=1)x[i]=Lt(Ht(o,J,i));let K=w(o[0].data.transactions),y=[];for(let i=0;i<K.length;i+=1)y[i]=At(wt(o,K,i));let Q=w(o[0].data.transactions),V=[];for(let i=0;i<Q.length;i+=1)V[i]=Rt(St(o,Q,i));let X=w(o[0].data.transactions),P=[];for(let i=0;i<X.length;i+=1)P[i]=$t(Dt(o,X,i));let Y=w(o[0].data.transactions),I=[];for(let i=0;i<Y.length;i+=1)I[i]=qt(Tt(o,Y,i));let Z=w(o[0].data.transactions),E=[];for(let i=0;i<Z.length;i+=1)E[i]=zt(Et(o,Z,i));return{c(){t=v("p"),t.textContent=e,l=T(),r=v("div"),a=v("div"),c=v("p"),c.textContent=k,ot=T();for(let i=0;i<C.length;i+=1)C[i].c();st=T(),M=v("div"),z=v("p"),z.textContent=Ct,ft=T();for(let i=0;i<x.length;i+=1)x[i].c();_t=T(),j=v("div"),N=v("p"),N.textContent=xt,ut=T();for(let i=0;i<y.length;i+=1)y[i].c();ht=T(),L=v("div"),B=v("p"),B.textContent=yt,dt=T();for(let i=0;i<V.length;i+=1)V[i].c();pt=T(),A=v("div"),F=v("p"),F.textContent=Vt,mt=T();for(let i=0;i<P.length;i+=1)P[i].c();vt=T(),R=v("div"),G=v("p"),G.textContent=Pt,gt=T();for(let i=0;i<I.length;i+=1)I[i].c();bt=T(),$=v("div"),O=v("p"),O.textContent=It,kt=T();for(let i=0;i<E.length;i+=1)E[i].c();this.h()},l(i){t=g(i,"P",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-aa6f4c"&&(t.textContent=e),l=D(i),r=g(i,"DIV",{class:!0});var h=S(r);a=g(h,"DIV",{class:!0});var n=S(a);c=g(n,"P",{class:!0,"data-svelte-h":!0}),H(c)!=="svelte-zx6fx7"&&(c.textContent=k),ot=D(n);for(let m=0;m<C.length;m+=1)C[m].l(n);n.forEach(s),st=D(h),M=g(h,"DIV",{class:!0});var b=S(M);z=g(b,"P",{class:!0,"data-svelte-h":!0}),H(z)!=="svelte-1xbr4o"&&(z.textContent=Ct),ft=D(b);for(let m=0;m<x.length;m+=1)x[m].l(b);b.forEach(s),_t=D(h),j=g(h,"DIV",{class:!0});var nt=S(j);N=g(nt,"P",{class:!0,"data-svelte-h":!0}),H(N)!=="svelte-1ybwqx7"&&(N.textContent=xt),ut=D(nt);for(let m=0;m<y.length;m+=1)y[m].l(nt);nt.forEach(s),ht=D(h),L=g(h,"DIV",{class:!0});var at=S(L);B=g(at,"P",{class:!0,"data-svelte-h":!0}),H(B)!=="svelte-v02jid"&&(B.textContent=yt),dt=D(at);for(let m=0;m<V.length;m+=1)V[m].l(at);at.forEach(s),pt=D(h),A=g(h,"DIV",{class:!0});var rt=S(A);F=g(rt,"P",{class:!0,"data-svelte-h":!0}),H(F)!=="svelte-1qdtuot"&&(F.textContent=Vt),mt=D(rt);for(let m=0;m<P.length;m+=1)P[m].l(rt);rt.forEach(s),vt=D(h),R=g(h,"DIV",{class:!0});var ct=S(R);G=g(ct,"P",{class:!0,"data-svelte-h":!0}),H(G)!=="svelte-1rbygej"&&(G.textContent=Pt),gt=D(ct);for(let m=0;m<I.length;m+=1)I[m].l(ct);ct.forEach(s),bt=D(h),$=g(h,"DIV",{class:!0});var it=S($);O=g(it,"P",{class:!0,"data-svelte-h":!0}),H(O)!=="svelte-1i7thym"&&(O.textContent=It),kt=D(it);for(let m=0;m<E.length;m+=1)E[m].l(it);it.forEach(s),h.forEach(s),this.h()},h(){u(t,"class","title"),u(c,"class","header"),u(a,"class","column"),u(z,"class","header"),u(M,"class","column"),u(N,"class","header"),u(j,"class","column"),u(B,"class","header"),u(L,"class","column"),u(F,"class","header"),u(A,"class","column"),u(G,"class","header"),u(R,"class","column"),u(O,"class","header"),u($,"class","column"),u(r,"class","container transactions")},m(i,h){f(i,t,h),f(i,l,h),f(i,r,h),_(r,a),_(a,c),_(a,ot);for(let n=0;n<C.length;n+=1)C[n]&&C[n].m(a,null);_(r,st),_(r,M),_(M,z),_(M,ft);for(let n=0;n<x.length;n+=1)x[n]&&x[n].m(M,null);_(r,_t),_(r,j),_(j,N),_(j,ut);for(let n=0;n<y.length;n+=1)y[n]&&y[n].m(j,null);_(r,ht),_(r,L),_(L,B),_(L,dt);for(let n=0;n<V.length;n+=1)V[n]&&V[n].m(L,null);_(r,pt),_(r,A),_(A,F),_(A,mt);for(let n=0;n<P.length;n+=1)P[n]&&P[n].m(A,null);_(r,vt),_(r,R),_(R,G),_(R,gt);for(let n=0;n<I.length;n+=1)I[n]&&I[n].m(R,null);_(r,bt),_(r,$),_($,O),_($,kt);for(let n=0;n<E.length;n+=1)E[n]&&E[n].m($,null)},p(i,[h]){if(h&1){W=w(i[0].data.transactions);let n;for(n=0;n<W.length;n+=1){const b=Mt(i,W,n);C[n]?C[n].p(b,h):(C[n]=jt(b),C[n].c(),C[n].m(a,null))}for(;n<C.length;n+=1)C[n].d(1);C.length=W.length}if(h&1){J=w(i[0].data.transactions);let n;for(n=0;n<J.length;n+=1){const b=Ht(i,J,n);x[n]?x[n].p(b,h):(x[n]=Lt(b),x[n].c(),x[n].m(M,null))}for(;n<x.length;n+=1)x[n].d(1);x.length=J.length}if(h&1){K=w(i[0].data.transactions);let n;for(n=0;n<K.length;n+=1){const b=wt(i,K,n);y[n]?y[n].p(b,h):(y[n]=At(b),y[n].c(),y[n].m(j,null))}for(;n<y.length;n+=1)y[n].d(1);y.length=K.length}if(h&1){Q=w(i[0].data.transactions);let n;for(n=0;n<Q.length;n+=1){const b=St(i,Q,n);V[n]?V[n].p(b,h):(V[n]=Rt(b),V[n].c(),V[n].m(L,null))}for(;n<V.length;n+=1)V[n].d(1);V.length=Q.length}if(h&1){X=w(i[0].data.transactions);let n;for(n=0;n<X.length;n+=1){const b=Dt(i,X,n);P[n]?P[n].p(b,h):(P[n]=$t(b),P[n].c(),P[n].m(A,null))}for(;n<P.length;n+=1)P[n].d(1);P.length=X.length}if(h&1){Y=w(i[0].data.transactions);let n;for(n=0;n<Y.length;n+=1){const b=Tt(i,Y,n);I[n]?I[n].p(b,h):(I[n]=qt(b),I[n].c(),I[n].m(R,null))}for(;n<I.length;n+=1)I[n].d(1);I.length=Y.length}if(h&1){Z=w(i[0].data.transactions);let n;for(n=0;n<Z.length;n+=1){const b=Et(i,Z,n);E[n]?E[n].p(b,h):(E[n]=zt(b),E[n].c(),E[n].m($,null))}for(;n<E.length;n+=1)E[n].d(1);E.length=Z.length}},i:et,o:et,d(i){i&&(s(t),s(l),s(r)),U(C,i),U(x,i),U(y,i),U(V,i),U(P,i),U(I,i),U(E,i)}}}function Ve(o,t,e){let l;return Bt(o,Ot,r=>e(0,l=r)),[l]}class we extends Ft{constructor(t){super(),Gt(this,t,Ve,ye,Nt,{})}}export{we as component,Se as universal};
