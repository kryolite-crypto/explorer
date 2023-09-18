import{s as ma,n as Et,e as ba}from"../chunks/scheduler.e108d1fd.js";import{S as ka,i as ga,g as h,s as k,m as v,h as d,j as C,x as P,c as g,n as m,f as o,k as f,a as b,z as r,o as D,D as wt,e as ra}from"../chunks/index.c3f76b74.js";import{e as A}from"../chunks/each.e59479a4.js";import{e as S}from"../chunks/singletons.9df88cc4.js";import{p as xa}from"../chunks/stores.ad850d5d.js";async function Ca({fetch:n,params:t}){return{transaction:await(await n(`https://testnet-1.kryolite.io/tx/${t.txid}`)).json()}}const il=Object.freeze(Object.defineProperty({__proto__:null,load:Ca},Symbol.toStringTag,{value:"Module"}));function ca(n,t,e){const a=n.slice();return a[1]=t[e].consumeToken,a[3]=e,a}function ia(n,t,e){const a=n.slice();return a[4]=t[e].value,a[3]=e,a}function oa(n,t,e){const a=n.slice();return a[6]=t[e].tokenId,a[3]=e,a}function fa(n,t,e){const a=n.slice();return a[8]=t[e].to,a[3]=e,a}function ua(n,t,e){const a=n.slice();return a[10]=t[e],a[3]=e,a}function Pa(n){let t;return{c(){t=v("n/a")},l(e){t=m(e,"n/a")},m(e,a){b(e,t,a)},d(e){e&&o(t)}}}function ya(n){let t;return{c(){t=v("Vote")},l(e){t=m(e,"Vote")},m(e,a){b(e,t,a)},d(e){e&&o(t)}}}function Ea(n){let t;return{c(){t=v("RegValidator")},l(e){t=m(e,"RegValidator")},m(e,a){b(e,t,a)},d(e){e&&o(t)}}}function Ta(n){let t;return{c(){t=v("Contract")},l(e){t=m(e,"Contract")},m(e,a){b(e,t,a)},d(e){e&&o(t)}}}function qa(n){let t;return{c(){t=v("View")},l(e){t=m(e,"View")},m(e,a){b(e,t,a)},d(e){e&&o(t)}}}function Va(n){let t;return{c(){t=v("Block")},l(e){t=m(e,"Block")},m(e,a){b(e,t,a)},d(e){e&&o(t)}}}function Ia(n){let t;return{c(){t=v("Genesis")},l(e){t=m(e,"Genesis")},m(e,a){b(e,t,a)},d(e){e&&o(t)}}}function Ra(n){let t;return{c(){t=v("Transaction")},l(e){t=m(e,"Transaction")},m(e,a){b(e,t,a)},d(e){e&&o(t)}}}function Da(n){let t,e=n[0].data.transaction.height+"",a,i;return{c(){t=h("a"),a=v(e),this.h()},l(c){t=d(c,"A",{class:!0,href:!0});var u=C(t);a=m(u,e),u.forEach(o),this.h()},h(){f(t,"class","text svelte-qk8c5b"),f(t,"href",i=S+"/height/"+n[0].data.transaction.height)},m(c,u){b(c,t,u),r(t,a)},p(c,u){u&1&&e!==(e=c[0].data.transaction.height+"")&&D(a,e),u&1&&i!==(i=S+"/height/"+c[0].data.transaction.height)&&f(t,"href",i)},d(c){c&&o(t)}}}function wa(n){let t,e="<br/>";return{c(){t=h("p"),t.innerHTML=e,this.h()},l(a){t=d(a,"P",{class:!0,"data-svelte-h":!0}),P(t)!=="svelte-521bsh"&&(t.innerHTML=e),this.h()},h(){f(t,"class","text svelte-qk8c5b")},m(a,i){b(a,t,i)},p:Et,d(a){a&&o(t)}}}function Sa(n){let t,e=n[0].data.transaction.from+"",a,i;return{c(){t=h("a"),a=v(e),this.h()},l(c){t=d(c,"A",{class:!0,href:!0});var u=C(t);a=m(u,e),u.forEach(o),this.h()},h(){f(t,"class","text svelte-qk8c5b"),f(t,"href",i=S+"/ledger/"+n[0].data.transaction.from)},m(c,u){b(c,t,u),r(t,a)},p(c,u){u&1&&e!==(e=c[0].data.transaction.from+"")&&D(a,e),u&1&&i!==(i=S+"/ledger/"+c[0].data.transaction.from)&&f(t,"href",i)},d(c){c&&o(t)}}}function Ha(n){let t,e="<br/>";return{c(){t=h("p"),t.innerHTML=e,this.h()},l(a){t=d(a,"P",{class:!0,"data-svelte-h":!0}),P(t)!=="svelte-521bsh"&&(t.innerHTML=e),this.h()},h(){f(t,"class","text svelte-qk8c5b")},m(a,i){b(a,t,i)},p:Et,d(a){a&&o(t)}}}function Ma(n){let t,e=n[0].data.transaction.to+"",a,i;return{c(){t=h("a"),a=v(e),this.h()},l(c){t=d(c,"A",{class:!0,href:!0});var u=C(t);a=m(u,e),u.forEach(o),this.h()},h(){f(t,"class","text svelte-qk8c5b"),f(t,"href",i=S+"/ledger/"+n[0].data.transaction.to)},m(c,u){b(c,t,u),r(t,a)},p(c,u){u&1&&e!==(e=c[0].data.transaction.to+"")&&D(a,e),u&1&&i!==(i=S+"/ledger/"+c[0].data.transaction.to)&&f(t,"href",i)},d(c){c&&o(t)}}}function La(n){let t,e="<br/>";return{c(){t=h("p"),t.innerHTML=e,this.h()},l(a){t=d(a,"P",{class:!0,"data-svelte-h":!0}),P(t)!=="svelte-521bsh"&&(t.innerHTML=e),this.h()},h(){f(t,"class","text svelte-qk8c5b")},m(a,i){b(a,t,i)},p:Et,d(a){a&&o(t)}}}function ja(n){let t;return{c(){t=v("n/a")},l(e){t=m(e,"n/a")},m(e,a){b(e,t,a)},d(e){e&&o(t)}}}function Aa(n){let t;return{c(){t=v("Stale")},l(e){t=m(e,"Stale")},m(e,a){b(e,t,a)},d(e){e&&o(t)}}}function za(n){let t;return{c(){t=v("Duplicate contract")},l(e){t=m(e,"Duplicate contract")},m(e,a){b(e,t,a)},d(e){e&&o(t)}}}function Fa(n){let t;return{c(){t=v("Unknown")},l(e){t=m(e,"Unknown")},m(e,a){b(e,t,a)},d(e){e&&o(t)}}}function $a(n){let t;return{c(){t=v("Verify failed")},l(e){t=m(e,"Verify failed")},m(e,a){b(e,t,a)},d(e){e&&o(t)}}}function Ka(n){let t;return{c(){t=v("Invalid method")},l(e){t=m(e,"Invalid method")},m(e,a){b(e,t,a)},d(e){e&&o(t)}}}function Ba(n){let t;return{c(){t=v("Invalid payload")},l(e){t=m(e,"Invalid payload")},m(e,a){b(e,t,a)},d(e){e&&o(t)}}}function Ga(n){let t;return{c(){t=v("Contract snapshot missing")},l(e){t=m(e,"Contract snapshot missing")},m(e,a){b(e,t,a)},d(e){e&&o(t)}}}function Na(n){let t;return{c(){t=v("Contract entrypoint missing")},l(e){t=m(e,"Contract entrypoint missing")},m(e,a){b(e,t,a)},d(e){e&&o(t)}}}function Oa(n){let t;return{c(){t=v("Contract execution failed")},l(e){t=m(e,"Contract execution failed")},m(e,a){b(e,t,a)},d(e){e&&o(t)}}}function Ua(n){let t;return{c(){t=v("Invalid contract")},l(e){t=m(e,"Invalid contract")},m(e,a){b(e,t,a)},d(e){e&&o(t)}}}function Wa(n){let t;return{c(){t=v("Too low balance")},l(e){t=m(e,"Too low balance")},m(e,a){b(e,t,a)},d(e){e&&o(t)}}}function Ja(n){let t;return{c(){t=v("Success")},l(e){t=m(e,"Success")},m(e,a){b(e,t,a)},d(e){e&&o(t)}}}function Qa(n){let t;return{c(){t=v("Pending")},l(e){t=m(e,"Pending")},m(e,a){b(e,t,a)},d(e){e&&o(t)}}}function Xa(n){let t;return{c(){t=v("Verifying")},l(e){t=m(e,"Verifying")},m(e,a){b(e,t,a)},d(e){e&&o(t)}}}function Ya(n){let t;return{c(){t=v("Waiting")},l(e){t=m(e,"Waiting")},m(e,a){b(e,t,a)},d(e){e&&o(t)}}}function _a(n){let t,e=n[10]+"",a,i;return{c(){t=h("a"),a=v(e),this.h()},l(c){t=d(c,"A",{class:!0,href:!0});var u=C(t);a=m(u,e),u.forEach(o),this.h()},h(){f(t,"class","text svelte-qk8c5b"),f(t,"href",i=S+"/tx/"+n[10])},m(c,u){b(c,t,u),r(t,a)},p(c,u){u&1&&e!==(e=c[10]+"")&&D(a,e),u&1&&i!==(i=S+"/tx/"+c[10])&&f(t,"href",i)},d(c){c&&o(t)}}}function Za(n){let t,e=n[8]+"",a,i;return{c(){t=h("a"),a=v(e),this.h()},l(c){t=d(c,"A",{class:!0,href:!0});var u=C(t);a=m(u,e),u.forEach(o),this.h()},h(){f(t,"class","text"),f(t,"href",i=S+"/ledger/"+n[8])},m(c,u){b(c,t,u),r(t,a)},p(c,u){u&1&&e!==(e=c[8]+"")&&D(a,e),u&1&&i!==(i=S+"/ledger/"+c[8])&&f(t,"href",i)},d(c){c&&o(t)}}}function tl(n){let t,e="<br/>";return{c(){t=h("p"),t.innerHTML=e,this.h()},l(a){t=d(a,"P",{class:!0,"data-svelte-h":!0}),P(t)!=="svelte-521bsh"&&(t.innerHTML=e),this.h()},h(){f(t,"class","text")},m(a,i){b(a,t,i)},p:Et,d(a){a&&o(t)}}}function ha(n){let t;function e(c,u){return c[8]==null||c[8]=="kryo:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"?tl:Za}let a=e(n),i=a(n);return{c(){i.c(),t=ra()},l(c){i.l(c),t=ra()},m(c,u){i.m(c,u),b(c,t,u)},p(c,u){a===(a=e(c))&&i?i.p(c,u):(i.d(1),i=a(c),i&&(i.c(),i.m(t.parentNode,t)))},d(c){c&&o(t),i.d(c)}}}function da(n){var c;let t,e=(((c=n[6])==null?void 0:c.substring(0,12))??"")+"",a,i;return{c(){t=h("a"),a=v(e),this.h()},l(u){t=d(u,"A",{class:!0,href:!0});var _=C(t);a=m(_,e),_.forEach(o),this.h()},h(){f(t,"class","text"),f(t,"href",i=S+"/tx/"+n[6])},m(u,_){b(u,t,_),r(t,a)},p(u,_){var j;_&1&&e!==(e=(((j=u[6])==null?void 0:j.substring(0,12))??"")+"")&&D(a,e),_&1&&i!==(i=S+"/tx/"+u[6])&&f(t,"href",i)},d(u){u&&o(t)}}}function pa(n){let t,e=(n[4]/1e6).toFixed(2)+"",a;return{c(){t=h("p"),a=v(e),this.h()},l(i){t=d(i,"P",{class:!0});var c=C(t);a=m(c,e),c.forEach(o),this.h()},h(){f(t,"class","text")},m(i,c){b(i,t,c),r(t,a)},p(i,c){c&1&&e!==(e=(i[4]/1e6).toFixed(2)+"")&&D(a,e)},d(i){i&&o(t)}}}function va(n){let t,e=n[1]+"",a;return{c(){t=h("p"),a=v(e),this.h()},l(i){t=d(i,"P",{class:!0});var c=C(t);a=m(c,e),c.forEach(o),this.h()},h(){f(t,"class","text")},m(i,c){b(i,t,c),r(t,a)},p(i,c){c&1&&e!==(e=i[1]+"")&&D(a,e)},d(i){i&&o(t)}}}function el(n){let t,e,a,i="Transaction details",c,u,_,j,qe="Transaction Id",Qt,dt,Tt=n[0].data.transaction.transactionId+"",St,Xt,U,Ve="Transaction Type",Yt,W,Zt,J,Ie="Height",te,Ht,Q,Re="Timestamp / Nonce",ee,pt,qt=n[0].data.transaction.timestamp+"",Mt,ae,X,De="Public Key",le,vt,Vt=n[0].data.transaction.publicKey+"",Lt,ne,Y,we="Sender",se,Z,re,tt,Se="Recipient",ce,et,ie,at,He="Value",oe,mt,It=(n[0].data.transaction.value/1e6).toFixed(2)+"",jt,fe,lt,Me="Signature",ue,bt,Rt=n[0].data.transaction.signature+"",At,_e,nt,Le="Execution Result",he,st,de,rt,je="Parents",pe,ct,ve,it,Ae="Data",me,kt,Dt=n[0].data.transaction.data+"",zt,be,N,ot,ze="Transaction effects",ke,w,z,ft,Fe="Recipient",ge,xe,F,ut,$e="TokenId",Ce,Pe,$,_t,Ke="Value",ye,Ee,K,ht,Be="Consume Token",Te;function Ge(l,x){return l[0].data.transaction.transactionType==0?Ra:l[0].data.transaction.transactionType==1?Ia:l[0].data.transaction.transactionType==2?Va:l[0].data.transaction.transactionType==3?qa:l[0].data.transaction.transactionType==4?Ta:l[0].data.transaction.transactionType==5?Ea:l[0].data.transaction.transactionType==6?ya:Pa}let Ft=Ge(n),B=Ft(n);function Ne(l,x){return l[0].data.transaction.height==null?wa:Da}let $t=Ne(n),H=$t(n);function Oe(l,x){return l[0].data.transaction.from==null||l[0].data.transaction.from=="kryo:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"?Ha:Sa}let Kt=Oe(n),M=Kt(n);function Ue(l,x){return l[0].data.transaction.to==null||l[0].data.transaction.to=="kryo:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"?La:Ma}let Bt=Ue(n),L=Bt(n);function We(l,x){return l[0].data.transaction.executionResult==0?Ya:l[0].data.transaction.executionResult==1?Xa:l[0].data.transaction.executionResult==2?Qa:l[0].data.transaction.executionResult==3?Ja:l[0].data.transaction.executionResult==4?Wa:l[0].data.transaction.executionResult==5?Ua:l[0].data.transaction.executionResult==6?Oa:l[0].data.transaction.executionResult==7?Na:l[0].data.transaction.executionResult==8?Ga:l[0].data.transaction.executionResult==9?Ba:l[0].data.transaction.executionResult==10?Ka:l[0].data.transaction.executionResult==11?$a:l[0].data.transaction.executionResult==12?Fa:l[0].data.transaction.executionResult==13?za:l[0].data.transaction.executionResult==14?Aa:ja}let Gt=We(n),G=Gt(n),gt=A(n[0].data.transaction.parents),E=[];for(let l=0;l<gt.length;l+=1)E[l]=_a(ua(n,gt,l));let xt=A(n[0].data.transaction.effects),T=[];for(let l=0;l<xt.length;l+=1)T[l]=ha(fa(n,xt,l));let Ct=A(n[0].data.transaction.effects),q=[];for(let l=0;l<Ct.length;l+=1)q[l]=da(oa(n,Ct,l));let Pt=A(n[0].data.transaction.effects),V=[];for(let l=0;l<Pt.length;l+=1)V[l]=pa(ia(n,Pt,l));let yt=A(n[0].data.transaction.effects),I=[];for(let l=0;l<yt.length;l+=1)I[l]=va(ca(n,yt,l));return{c(){t=h("div"),e=h("div"),a=h("p"),a.textContent=i,c=k(),u=h("div"),_=h("div"),j=h("p"),j.textContent=qe,Qt=k(),dt=h("p"),St=v(Tt),Xt=k(),U=h("p"),U.textContent=Ve,Yt=k(),W=h("p"),B.c(),Zt=k(),J=h("p"),J.textContent=Ie,te=k(),H.c(),Ht=k(),Q=h("p"),Q.textContent=Re,ee=k(),pt=h("p"),Mt=v(qt),ae=k(),X=h("p"),X.textContent=De,le=k(),vt=h("p"),Lt=v(Vt),ne=k(),Y=h("p"),Y.textContent=we,se=k(),Z=h("p"),M.c(),re=k(),tt=h("p"),tt.textContent=Se,ce=k(),et=h("p"),L.c(),ie=k(),at=h("p"),at.textContent=He,oe=k(),mt=h("p"),jt=v(It),fe=k(),lt=h("p"),lt.textContent=Me,ue=k(),bt=h("p"),At=v(Rt),_e=k(),nt=h("p"),nt.textContent=Le,he=k(),st=h("p"),G.c(),de=k(),rt=h("p"),rt.textContent=je,pe=k(),ct=h("p");for(let l=0;l<E.length;l+=1)E[l].c();ve=k(),it=h("p"),it.textContent=Ae,me=k(),kt=h("p"),zt=v(Dt),be=k(),N=h("div"),ot=h("p"),ot.textContent=ze,ke=k(),w=h("div"),z=h("div"),ft=h("p"),ft.textContent=Fe,ge=k();for(let l=0;l<T.length;l+=1)T[l].c();xe=k(),F=h("div"),ut=h("p"),ut.textContent=$e,Ce=k();for(let l=0;l<q.length;l+=1)q[l].c();Pe=k(),$=h("div"),_t=h("p"),_t.textContent=Ke,ye=k();for(let l=0;l<V.length;l+=1)V[l].c();Ee=k(),K=h("div"),ht=h("p"),ht.textContent=Be,Te=k();for(let l=0;l<I.length;l+=1)I[l].c();this.h()},l(l){t=d(l,"DIV",{class:!0});var x=C(t);e=d(x,"DIV",{class:!0});var s=C(e);a=d(s,"P",{class:!0,"data-svelte-h":!0}),P(a)!=="svelte-6qpxi1"&&(a.textContent=i),c=g(s),u=d(s,"DIV",{class:!0});var R=C(u);_=d(R,"DIV",{});var p=C(_);j=d(p,"P",{class:!0,"data-svelte-h":!0}),P(j)!=="svelte-oopf7z"&&(j.textContent=qe),Qt=g(p),dt=d(p,"P",{class:!0});var Je=C(dt);St=m(Je,Tt),Je.forEach(o),Xt=g(p),U=d(p,"P",{class:!0,"data-svelte-h":!0}),P(U)!=="svelte-lk6ew4"&&(U.textContent=Ve),Yt=g(p),W=d(p,"P",{class:!0});var Qe=C(W);B.l(Qe),Qe.forEach(o),Zt=g(p),J=d(p,"P",{class:!0,"data-svelte-h":!0}),P(J)!=="svelte-wfamk1"&&(J.textContent=Ie),te=g(p),H.l(p),Ht=g(p),Q=d(p,"P",{class:!0,"data-svelte-h":!0}),P(Q)!=="svelte-13gilcq"&&(Q.textContent=Re),ee=g(p),pt=d(p,"P",{class:!0});var Xe=C(pt);Mt=m(Xe,qt),Xe.forEach(o),ae=g(p),X=d(p,"P",{class:!0,"data-svelte-h":!0}),P(X)!=="svelte-13pv59u"&&(X.textContent=De),le=g(p),vt=d(p,"P",{class:!0});var Ye=C(vt);Lt=m(Ye,Vt),Ye.forEach(o),ne=g(p),Y=d(p,"P",{class:!0,"data-svelte-h":!0}),P(Y)!=="svelte-8f720r"&&(Y.textContent=we),se=g(p),Z=d(p,"P",{class:!0});var Ze=C(Z);M.l(Ze),Ze.forEach(o),re=g(p),tt=d(p,"P",{class:!0,"data-svelte-h":!0}),P(tt)!=="svelte-1om8m5b"&&(tt.textContent=Se),ce=g(p),et=d(p,"P",{class:!0});var ta=C(et);L.l(ta),ta.forEach(o),ie=g(p),at=d(p,"P",{class:!0,"data-svelte-h":!0}),P(at)!=="svelte-u7yvv9"&&(at.textContent=He),oe=g(p),mt=d(p,"P",{class:!0});var ea=C(mt);jt=m(ea,It),ea.forEach(o),fe=g(p),lt=d(p,"P",{class:!0,"data-svelte-h":!0}),P(lt)!=="svelte-17a6fxy"&&(lt.textContent=Me),ue=g(p),bt=d(p,"P",{class:!0});var aa=C(bt);At=m(aa,Rt),aa.forEach(o),_e=g(p),nt=d(p,"P",{class:!0,"data-svelte-h":!0}),P(nt)!=="svelte-1jzt62t"&&(nt.textContent=Le),he=g(p),st=d(p,"P",{class:!0});var la=C(st);G.l(la),la.forEach(o),de=g(p),rt=d(p,"P",{class:!0,"data-svelte-h":!0}),P(rt)!=="svelte-yiuz5p"&&(rt.textContent=je),pe=g(p),ct=d(p,"P",{class:!0});var na=C(ct);for(let y=0;y<E.length;y+=1)E[y].l(na);na.forEach(o),ve=g(p),it=d(p,"P",{class:!0,"data-svelte-h":!0}),P(it)!=="svelte-1r6hllw"&&(it.textContent=Ae),me=g(p),kt=d(p,"P",{class:!0});var sa=C(kt);zt=m(sa,Dt),sa.forEach(o),p.forEach(o),R.forEach(o),s.forEach(o),be=g(x),N=d(x,"DIV",{class:!0});var Nt=C(N);ot=d(Nt,"P",{class:!0,"data-svelte-h":!0}),P(ot)!=="svelte-17s20p1"&&(ot.textContent=ze),ke=g(Nt),w=d(Nt,"DIV",{class:!0});var O=C(w);z=d(O,"DIV",{class:!0});var Ot=C(z);ft=d(Ot,"P",{class:!0,"data-svelte-h":!0}),P(ft)!=="svelte-1qdtuot"&&(ft.textContent=Fe),ge=g(Ot);for(let y=0;y<T.length;y+=1)T[y].l(Ot);Ot.forEach(o),xe=g(O),F=d(O,"DIV",{class:!0});var Ut=C(F);ut=d(Ut,"P",{class:!0,"data-svelte-h":!0}),P(ut)!=="svelte-1i9oi2s"&&(ut.textContent=$e),Ce=g(Ut);for(let y=0;y<q.length;y+=1)q[y].l(Ut);Ut.forEach(o),Pe=g(O),$=d(O,"DIV",{class:!0});var Wt=C($);_t=d(Wt,"P",{class:!0,"data-svelte-h":!0}),P(_t)!=="svelte-1rbygej"&&(_t.textContent=Ke),ye=g(Wt);for(let y=0;y<V.length;y+=1)V[y].l(Wt);Wt.forEach(o),Ee=g(O),K=d(O,"DIV",{class:!0});var Jt=C(K);ht=d(Jt,"P",{class:!0,"data-svelte-h":!0}),P(ht)!=="svelte-t8kvy5"&&(ht.textContent=Be),Te=g(Jt);for(let y=0;y<I.length;y+=1)I[y].l(Jt);Jt.forEach(o),O.forEach(o),Nt.forEach(o),x.forEach(o),this.h()},h(){f(a,"class","title"),f(j,"class","header"),f(dt,"class","text svelte-qk8c5b"),f(U,"class","header"),f(W,"class","text svelte-qk8c5b"),f(J,"class","header"),f(Q,"class","header"),f(pt,"class","text svelte-qk8c5b"),f(X,"class","header"),f(vt,"class","text svelte-qk8c5b"),f(Y,"class","header"),f(Z,"class","text svelte-qk8c5b"),f(tt,"class","header"),f(et,"class","text svelte-qk8c5b"),f(at,"class","header"),f(mt,"class","text svelte-qk8c5b"),f(lt,"class","header"),f(bt,"class","text svelte-qk8c5b"),f(nt,"class","header"),f(st,"class","text svelte-qk8c5b"),f(rt,"class","header"),f(ct,"class","text svelte-qk8c5b"),f(it,"class","header"),f(kt,"class","text svelte-qk8c5b"),f(u,"class","container"),f(e,"class","info svelte-qk8c5b"),f(ot,"class","title"),f(ft,"class","header"),f(z,"class","column"),f(ut,"class","header"),f(F,"class","column"),f(_t,"class","header"),f($,"class","column"),f(ht,"class","header"),f(K,"class","column"),f(w,"class","container"),f(N,"class","effects svelte-qk8c5b"),f(t,"class","main svelte-qk8c5b")},m(l,x){b(l,t,x),r(t,e),r(e,a),r(e,c),r(e,u),r(u,_),r(_,j),r(_,Qt),r(_,dt),r(dt,St),r(_,Xt),r(_,U),r(_,Yt),r(_,W),B.m(W,null),r(_,Zt),r(_,J),r(_,te),H.m(_,null),r(_,Ht),r(_,Q),r(_,ee),r(_,pt),r(pt,Mt),r(_,ae),r(_,X),r(_,le),r(_,vt),r(vt,Lt),r(_,ne),r(_,Y),r(_,se),r(_,Z),M.m(Z,null),r(_,re),r(_,tt),r(_,ce),r(_,et),L.m(et,null),r(_,ie),r(_,at),r(_,oe),r(_,mt),r(mt,jt),r(_,fe),r(_,lt),r(_,ue),r(_,bt),r(bt,At),r(_,_e),r(_,nt),r(_,he),r(_,st),G.m(st,null),r(_,de),r(_,rt),r(_,pe),r(_,ct);for(let s=0;s<E.length;s+=1)E[s]&&E[s].m(ct,null);r(_,ve),r(_,it),r(_,me),r(_,kt),r(kt,zt),r(t,be),r(t,N),r(N,ot),r(N,ke),r(N,w),r(w,z),r(z,ft),r(z,ge);for(let s=0;s<T.length;s+=1)T[s]&&T[s].m(z,null);r(w,xe),r(w,F),r(F,ut),r(F,Ce);for(let s=0;s<q.length;s+=1)q[s]&&q[s].m(F,null);r(w,Pe),r(w,$),r($,_t),r($,ye);for(let s=0;s<V.length;s+=1)V[s]&&V[s].m($,null);r(w,Ee),r(w,K),r(K,ht),r(K,Te);for(let s=0;s<I.length;s+=1)I[s]&&I[s].m(K,null)},p(l,[x]){if(x&1&&Tt!==(Tt=l[0].data.transaction.transactionId+"")&&D(St,Tt),Ft!==(Ft=Ge(l))&&(B.d(1),B=Ft(l),B&&(B.c(),B.m(W,null))),$t===($t=Ne(l))&&H?H.p(l,x):(H.d(1),H=$t(l),H&&(H.c(),H.m(_,Ht))),x&1&&qt!==(qt=l[0].data.transaction.timestamp+"")&&D(Mt,qt),x&1&&Vt!==(Vt=l[0].data.transaction.publicKey+"")&&D(Lt,Vt),Kt===(Kt=Oe(l))&&M?M.p(l,x):(M.d(1),M=Kt(l),M&&(M.c(),M.m(Z,null))),Bt===(Bt=Ue(l))&&L?L.p(l,x):(L.d(1),L=Bt(l),L&&(L.c(),L.m(et,null))),x&1&&It!==(It=(l[0].data.transaction.value/1e6).toFixed(2)+"")&&D(jt,It),x&1&&Rt!==(Rt=l[0].data.transaction.signature+"")&&D(At,Rt),Gt!==(Gt=We(l))&&(G.d(1),G=Gt(l),G&&(G.c(),G.m(st,null))),x&1){gt=A(l[0].data.transaction.parents);let s;for(s=0;s<gt.length;s+=1){const R=ua(l,gt,s);E[s]?E[s].p(R,x):(E[s]=_a(R),E[s].c(),E[s].m(ct,null))}for(;s<E.length;s+=1)E[s].d(1);E.length=gt.length}if(x&1&&Dt!==(Dt=l[0].data.transaction.data+"")&&D(zt,Dt),x&1){xt=A(l[0].data.transaction.effects);let s;for(s=0;s<xt.length;s+=1){const R=fa(l,xt,s);T[s]?T[s].p(R,x):(T[s]=ha(R),T[s].c(),T[s].m(z,null))}for(;s<T.length;s+=1)T[s].d(1);T.length=xt.length}if(x&1){Ct=A(l[0].data.transaction.effects);let s;for(s=0;s<Ct.length;s+=1){const R=oa(l,Ct,s);q[s]?q[s].p(R,x):(q[s]=da(R),q[s].c(),q[s].m(F,null))}for(;s<q.length;s+=1)q[s].d(1);q.length=Ct.length}if(x&1){Pt=A(l[0].data.transaction.effects);let s;for(s=0;s<Pt.length;s+=1){const R=ia(l,Pt,s);V[s]?V[s].p(R,x):(V[s]=pa(R),V[s].c(),V[s].m($,null))}for(;s<V.length;s+=1)V[s].d(1);V.length=Pt.length}if(x&1){yt=A(l[0].data.transaction.effects);let s;for(s=0;s<yt.length;s+=1){const R=ca(l,yt,s);I[s]?I[s].p(R,x):(I[s]=va(R),I[s].c(),I[s].m(K,null))}for(;s<I.length;s+=1)I[s].d(1);I.length=yt.length}},i:Et,o:Et,d(l){l&&o(t),B.d(),H.d(),M.d(),L.d(),G.d(),wt(E,l),wt(T,l),wt(q,l),wt(V,l),wt(I,l)}}}function al(n,t,e){let a;return ba(n,xa,i=>e(0,a=i)),[a]}class ol extends ka{constructor(t){super(),ga(this,t,al,el,ma,{})}}export{ol as component,il as universal};