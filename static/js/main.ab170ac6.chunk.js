(this.webpackJsonpbookshelf=this.webpackJsonpbookshelf||[]).push([[0],{3:function(e,t,a){e.exports={flexRow:"App_flexRow__3odh4",appScrollable:"App_appScrollable__1_Ir_",appUnscrollable:"App_appUnscrollable__16ZJJ",darkOverlay:"App_darkOverlay__2bKUU",header:"App_header__1WD9l",menu:"App_menu__Ej9tT",logo:"App_logo__2W_jI",lang:"App_lang__oghY5",content:"App_content__3kRYK",options:"App_options__2-fSG App_flexRow__3odh4",optionButton:"App_optionButton__3QnGb",optionButtonActive:"App_optionButtonActive__1Guu7",year:"App_year__359bs",yearFocus:"App_yearFocus__3WwsL",divider:"App_divider__28Qrw",years:"App_years__2mqGJ App_flexRow__3odh4",yearsFocus:"App_yearsFocus__abV9x",bookResults:"App_bookResults__KCPzm",activeYear:"App_activeYear__5q5N2",resultsNumber:"App_resultsNumber__3XINW",bookCovers:"App_bookCovers__2_Quy",book:"App_book__3A6TY",addBook:"App_addBook__21Vcx",addCenter:"App_addCenter__36tcr",stars:"App_stars__17z9H",menuItemsDesktop:"App_menuItemsDesktop__1B-Hm",menuItemsMobile:"App_menuItemsMobile__3a0JN",srcDivider:"App_srcDivider__19Xgd",dropdown:"App_dropdown__3wf2Y",flag:"App_flag__3rQGG",en:"App_en__2al45"}},32:function(e,t,a){"use strict";a.r(t);var n=a(4),s=a.n(n),c=a(20),o=a.n(c),r=a(8),i=a.n(r),l=a(13),d=a(19),j=a(12),b=a(6),u=a(3),p=a.n(u),A=a(9),_=a.n(A),h=a(17);a(27);h.a.initializeApp({apiKey:"AIzaSyBgf4cMYXFudM-jea42t4dfz4dCwonnT8Q",authDomain:"bookshelf-ac6cc.firebaseapp.com",projectId:"bookshelf-ac6cc",storageBucket:"bookshelf-ac6cc.appspot.com",messagingSenderId:"522879903285",appId:"1:522879903285:web:2a8ee3c30885e2e085f37c",measurementId:"G-87XEN3NTBH"});var v=h.a,m=a(1),x=[];var O=function(e){var t=e.exit,a=e.booksData,s=e.usersData,c=e.lang,o=Object(n.useState)(""),r=Object(b.a)(o,2),l=r[0],d=r[1],u=Object(n.useState)(void 0),p=Object(b.a)(u,2),A=p[0],h=p[1];return Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(i.a.mark((function e(){var t,n,c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(c in t=[],n=[],s)t.push(s[c].bookID);for(o in a)n.push(a[o].bookID),x.push(a[o].cover);h(n.filter((function(e){return!t.includes(e)})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a,s]),Object(m.jsx)(m.Fragment,{children:void 0!==A&&Object(m.jsxs)("div",{className:_.a.addComponent,children:[Object(m.jsxs)("div",{className:_.a.header,children:[Object(m.jsxs)("div",{children:[c.addBook,"\xa0"]}),Object(m.jsx)("div",{onClick:t,className:_.a.xButton,children:"+"})]}),Object(m.jsx)("div",{className:_.a.content,children:Object(m.jsx)("div",{className:_.a.bookCovers,children:Object.keys(A).map((function(e,t){return Object(m.jsx)("div",{children:Object(m.jsx)("img",{className:_.a.addImg,src:x[parseInt(A[t])],alt:"BookCover",onClick:function(){return d(A[t])}},t)})}))})}),Object(m.jsx)("div",{className:_.a.footer,children:Object(m.jsx)("button",{onClick:function(){var e=v.database().ref("users/0/books"),a=new Date;e.child(l).set({bookID:l,finishDate:"".concat(a.getFullYear(),"-").concat(a.getMonth()+1,"-").concat(a.getDate()),note:"",stars:"0",startDate:"".concat(a.getFullYear(),"-").concat(a.getMonth()+1,"-").concat(a.getDate())}),d(""),t()},disabled:""===l,children:c.add})})]})})},f=a(5),g=a.n(f),k=void 0,N=void 0,C=void 0;var B=function(e){var t=e.exit,a=e.booksData,s=e.usersData,c=e.bookID,o=e.lang,r=Object(n.useState)(void 0),d=Object(b.a)(r,2),u=d[0],p=d[1],A=Object(n.useState)(void 0),_=Object(b.a)(A,2),h=_[0],x=_[1],O=Object(n.useState)(),f=Object(b.a)(O,2),B=f[0],D=f[1];return Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p(a),D(s.stars),x(s),C=s.note,N=s.startDate,k=s.finishDate;case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a,s]),Object(m.jsx)(m.Fragment,{children:!1===[u,h].includes(void 0)&&Object(m.jsxs)("div",{className:g.a.edit,children:[Object(m.jsxs)("div",{className:g.a.header,children:[Object(m.jsx)("div",{children:o.bookSettings}),Object(m.jsx)("div",{onClick:t,className:g.a.xButton,children:"+"})]}),Object(m.jsxs)("div",{className:g.a.content,children:["".concat(u.title," - ").concat(u.author),Object(m.jsx)("div",{className:g.a.comment,children:Object(m.jsxs)("div",{className:g.a.wrapper,children:[Object(m.jsx)("div",{className:g.a.startingDate,children:Object(m.jsxs)("form",{children:[Object(m.jsx)("label",{htmlFor:"finish",children:Object(m.jsxs)("div",{className:g.a.dateText,children:[o.beginning,":"]})}),Object(m.jsx)("input",{type:"date",name:"finish",defaultValue:h.startDate,onChange:function(e){return N=e.target.value}})]})}),Object(m.jsx)("img",{src:u.cover,alt:"bookCover"}),Object(m.jsx)("div",{className:g.a.finishDate,children:Object(m.jsxs)("form",{children:[Object(m.jsxs)("div",{className:g.a.dateText,children:[o.completion,":"]}),Object(m.jsx)("label",{htmlFor:"end"}),Object(m.jsx)("input",{type:"date",name:"end",defaultValue:k,onChange:function(e){return k=e.target.value}})]})}),Object(m.jsxs)("div",{children:[o.rating,":",Object(m.jsxs)("div",{className:g.a.starsContainer,children:[Object(m.jsx)("div",{className:g.a.stars,children:Object(l.a)(Array(5)).slice(0).reverse().map((function(e,t){return Object(m.jsxs)("div",{className:g.a.label,children:[Object(m.jsx)("input",{className:g.a.input,type:"radio",id:"r".concat(t),name:"rg1",onChange:function(){return D(t+1)}}),Object(m.jsx)("label",{htmlFor:"r".concat(t),children:B<=t?Object(m.jsx)(m.Fragment,{children:"\u2606"}):Object(m.jsx)(m.Fragment,{children:"\u2605"})})]},t)}))}),Object(m.jsx)("div",{className:g.a.starsNull,onClick:function(){return D(0)},children:"\xd8"})]})]})]})}),Object(m.jsxs)("div",{className:g.a.comment,children:[o.note,":"]}),Object(m.jsx)("div",{children:Object(m.jsx)("textarea",{defaultValue:C,onChange:function(e){return C=e.target.value}})})]}),Object(m.jsxs)("div",{className:g.a.footer,children:[Object(m.jsx)("button",{onClick:function(){v.database().ref("users/0/books").child(c).set(null),t()},children:o.delete}),Object(m.jsx)("button",{onClick:function(){v.database().ref("users/0/books").child(c).set({bookID:c,finishDate:k,stars:B,startDate:N,note:C}),t()},children:o.save})]})]})})},D="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAyCAYAAACqNX6+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMjHxIGmVAAAAnklEQVR4Xu3RsQ2AQBADwUMipgBCGv3SH0QVG4yldQMze2arE5BYQGIBiQUkFpBYQGIBiQUkFpBYQGIBiQUkFpBYQGIBifW9lQYkNiCxAYkNSGxAYgMSG5DYgMQGJDYgsQGJDUhsQGIDEhuQ2IDEBiS2edax73Uq0vy3LlUCEgtILCCxgMQCEgtILCCxgMQCEgtILCCxgMQCEgtIqWu/EKoshNxJL88AAAAASUVORK5CYII=",y="data:image/png;base64,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",I=0,S=p.a.appScrollable,U=void 0,F=void 0,G=void 0,E={en:{flag:y,annualBreakdown:"Annual Breakdown",all:"All",bookSettings:"Book Settings",beginning:"Beginning",completion:"Completion",note:"Note",rating:"Rating",delete:"Delete",save:"Save",addBook:"Add Book",add:"Add"},hu:{flag:D,annualBreakdown:"\xc9ves Bont\xe1s",all:"\xd6sszes",bookSettings:"K\xf6nyv Be\xe1ll\xedt\xe1sok",beginning:"Kezd\xe9s",completion:"Befejez\xe9s",note:"Megjegyz\xe9s",rating:"\xc9rt\xe9kel\xe9s",delete:"T\xf6rl\xe9s",save:"Ment\xe9s",addBook:"K\xf6nyv Hozz\xe1ad\xe1sa",add:"Hozz\xe1ad\xe1s"}};var Q=function(){var e=Object(n.useState)(E.hu),t=Object(b.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(void 0),o=Object(b.a)(c,2),r=o[0],u=o[1],A=Object(n.useState)([]),_=Object(b.a)(A,2),h=_[0],x=_[1],f=Object(n.useState)(!1),g=Object(b.a)(f,2),k=g[0],N=g[1],C=Object(n.useState)(!1),Q=Object(b.a)(C,2),Y=Q[0],w=Q[1],M=Object(n.useState)({}),R=Object(b.a)(M,2),Z=R[0],z=R[1],J=function(){N(!1),S=p.a.appScrollable},V=function(){w(!1),S=p.a.appScrollable};return Object(n.useEffect)((function(){var e=[],t={};function a(){return(a=Object(j.a)(i.a.mark((function a(){var n,s,c,o,r,j,b,p;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=v.database().ref("users/0/books"),a.next=3,n.once("value");case 3:for(o in s=a.sent,c=s.val())t[o]={finishDate:c[o].finishDate,stars:c[o].stars},e.push(c[o].finishDate.slice(0,4));return r=v.database().ref("allBooks"),a.next=9,r.once("value");case 9:for(p in j=a.sent,b=j.val(),c)t[p]=Object(d.a)(Object(d.a)({},t[p]),{},{bookID:b[p].bookID,cover:b[p].cover});e.join(),e.sort(),(e=Object(l.a)(new Set(e))).reverse(),x(e),0===I&&u(e[0]),z(t),G=b,F=c;case 21:case"end":return a.stop()}}),a)})))).apply(this,arguments)}!function(){a.apply(this,arguments)}()}),[k,Y]),Object(m.jsx)(m.Fragment,{children:0!==Object.keys(Z).length&&Object(m.jsxs)("div",{className:S,children:[!0===k&&(S=p.a.appUnscrollable,Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:p.a.darkOverlay,onClick:function(){N(!1),S=p.a.appScrollable}}),Object(m.jsx)(B,{exit:J,booksData:G[U],usersData:F[U],bookID:U,lang:a})]})),!0===Y&&(S=p.a.appUnscrollable,Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:p.a.darkOverlay,onClick:function(){w(!1),S=p.a.appScrollable}}),Object(m.jsx)(O,{exit:V,booksData:G,usersData:F,lang:a})]})),Object(m.jsx)("div",{className:p.a.header,children:Object(m.jsxs)("div",{className:p.a.menu,children:[Object(m.jsx)("p",{unselectable:"on",className:p.a.logo,children:"BookShelf"}),Object(m.jsxs)("div",{className:p.a.lang,children:[Object(m.jsx)("img",{onClick:function(){return s(E.hu)},src:D,alt:"huFlag"}),Object(m.jsx)("img",{onClick:function(){return s(E.en)},src:y,alt:"enFlag"})]})]})}),Object(m.jsxs)("div",{className:p.a.content,children:[Object(m.jsxs)("div",{className:p.a.options,children:[Object(m.jsx)("div",{className:"All"!==r?p.a.optionButtonActive:p.a.optionButton,onClick:function(){return u(h[0])},children:a.annualBreakdown}),Object(m.jsx)("div",{className:"All"===r?p.a.optionButtonActive:p.a.optionButton,onClick:function(){return u("All")},children:a.all})]}),Object(m.jsx)("div",{className:p.a.divider}),"All"!==r&&Object(m.jsx)("div",{className:p.a.years,children:h.map((function(e,t){return Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:r===h[t]?p.a.yearsFocus:p.a.year,onClick:function(){u(h[t]),S=p.a.appScrollable},children:Object(m.jsx)(m.Fragment,{children:e})})},t)}))}),Object(m.jsxs)("div",{className:p.a.bookResults,children:[Object(m.jsx)("div",{className:p.a.activeYear,children:"All"===r?a.all:r}),"\xa0",Object(m.jsx)("div",{className:p.a.resultsNumber,children:I})]}),(I=0,Object(m.jsxs)("div",{className:p.a.bookCovers,children:[Object.keys(Z).map((function(e,t){return("All"===r||Z[e].finishDate.slice(0,4)===r)&&(I+=1,Object(m.jsxs)("div",{className:p.a.book,onClick:function(){U=Z[e].bookID,N(!0)},children:[Object(m.jsx)("img",{src:Z[e].cover,alt:"BookCover"}),Object(m.jsxs)("div",{children:[Object(l.a)(Array(parseInt(Z[e].stars))).map((function(){return"\u2605"})),Object(l.a)(Array(5-parseInt(Z[e].stars))).map((function(){return"\u2606"}))]})]},t))})),Object(m.jsx)("div",{className:p.a.addBook,onClick:function(){return w(!0)},children:Object(m.jsx)("div",{className:p.a.addCenter})})]}))]})]})})};o.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(Q,{})}),document.getElementById("root"))},5:function(e,t,a){e.exports={edit:"Edit_edit__TX-hT",header:"Edit_header__1BqaT",footer:"Edit_footer__3Rrrm",xButton:"Edit_xButton__2bFWM",content:"Edit_content__2pCMO",comment:"Edit_comment__Gew0B",wrapper:"Edit_wrapper__1xSU8",startingDate:"Edit_startingDate__l2rER",finishDate:"Edit_finishDate__EkaZ_",starsContainer:"Edit_starsContainer__2oGsg",stars:"Edit_stars__2Z55C",starsNull:"Edit_starsNull__3Wlzc",input:"Edit_input__GHRYe",label:"Edit_label__1NZ_G"}},9:function(e,t,a){e.exports={addComponent:"Add_addComponent__L04DB",header:"Add_header__ks6wE",footer:"Add_footer__3Dnoz",xButton:"Add_xButton__R9enx",content:"Add_content__1H-Jz",bookCovers:"Add_bookCovers__3-FOy",addImg:"Add_addImg__1k54E"}}},[[32,1,2]]]);
//# sourceMappingURL=main.ab170ac6.chunk.js.map