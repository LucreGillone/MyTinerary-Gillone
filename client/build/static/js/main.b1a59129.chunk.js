(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{111:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(22),s=n.n(c),a=(n(61),n(76),n(77),n(5)),i=n(3),o=n.n(i),l=n(8),u=n(10),j=n(14),d=n.n(j),p={signUp:function(e){return function(){var t=Object(u.a)(o.a.mark((function t(n,r){var c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.post("https://gillone-mytinerary.herokuapp.com/api/user/signUp",Object(l.a)({},e));case 2:return(c=t.sent).data.success&&n({type:"LOGGED",payload:c.data.response}),t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},logUser:function(e){return function(){var t=Object(u.a)(o.a.mark((function t(n,r){var c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.post("https://gillone-mytinerary.herokuapp.com/api/user/logIn",Object(l.a)({},e));case 2:return(c=t.sent).data.success&&n({type:"LOGGED",payload:c.data.response}),t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},logOut:function(){return function(){var e=Object(u.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"LOG_OUT"});case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},logInLS:function(e){return function(){var t=Object(u.a)(o.a.mark((function t(n,r){var c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.get("https://gillone-mytinerary.herokuapp.com/api/tokenVerification",{headers:{Authorization:"Bearer "+e}});case 3:c=t.sent,n({type:"LOGGED",payload:{token:e,firstName:c.data.firstName,src:c.data.src,_id:c.data._id}}),t.next=10;break;case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",n({type:"LOG_OUT"}));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,n){return t.apply(this,arguments)}}()}},m=n(9),b=n(0),h={logOut:p.logOut},O=Object(m.b)((function(e){return{token:e.users.token,firstName:e.users.firstName,src:e.users.src}}),h)((function(e){return Object(b.jsxs)("nav",{className:"navBar",children:[Object(b.jsx)(a.c,{exact:!0,to:"/",children:Object(b.jsx)("p",{children:"Home"})}),Object(b.jsx)(a.c,{to:"/cities",children:Object(b.jsx)("p",{children:"Cities"})}),Object(b.jsx)("div",{className:"profilePicContainer",children:e.src?Object(b.jsx)("div",{className:"profilePic",style:{backgroundImage:'url("'.concat(e.src,'")')}}):Object(b.jsx)("img",{src:"/assets/person-circle.svg",alt:"userIcon"})}),!e.token&&Object(b.jsx)(a.c,{to:"/signUp",children:Object(b.jsx)("p",{children:"Sign up"})}),e.token?Object(b.jsx)("p",{children:e.firstName}):null,!e.token&&Object(b.jsx)(a.c,{to:"/logIn",children:Object(b.jsx)("p",{children:"Log in"})}),e.token&&Object(b.jsx)("p",{onClick:function(){return e.logOut()},children:"Log out"})]})})),f=function(){return Object(b.jsxs)("header",{children:[Object(b.jsx)(O,{}),Object(b.jsxs)("div",{className:"title",children:[Object(b.jsx)("img",{src:"/assets/logo.png",className:"logo",alt:"logo"}),Object(b.jsx)("h1",{children:"MyTinerary"}),Object(b.jsx)("h2",{children:"Find your perfect trip, designed by insiders who know and love their cities!"})]})]})},g=function(){return Object(b.jsx)("div",{className:"hero",children:Object(b.jsx)("video",{autoPlay:"autoplay",muted:!0,loop:!0,id:"video",children:Object(b.jsx)("source",{src:"/assets/video_hero.mp4",type:"video/mp4"})})})},x=function(){return Object(b.jsxs)("footer",{children:[Object(b.jsxs)("div",{className:"iconsRef",children:[Object(b.jsx)(a.b,{to:"/",children:Object(b.jsx)("img",{src:"/assets/home.svg",alt:"homeIcon"})}),Object(b.jsx)(a.b,{to:"/cities",children:Object(b.jsx)("img",{src:"/assets/building.svg",alt:"citiesIcon"})}),Object(b.jsx)("img",{src:"/assets/person-circle.svg",alt:"userIcon"})]}),Object(b.jsx)("p",{children:"MyTinerary \xa9 | Lucrecia Gillone | MindHub 2021"}),Object(b.jsxs)("div",{className:"socialMediaIcons",children:[Object(b.jsx)("img",{src:"/assets/instagram.svg",alt:"instagramIcon"}),Object(b.jsx)("img",{src:"/assets/facebook.svg",alt:"facebookIcon"}),Object(b.jsx)("img",{src:"/assets/twitter.svg",alt:"twitterIcon"})]})]})},y=n(6),v=n(55),C=n(113),k=n(114),I=n(115),w=[{src:[{picture:"/assets/agra.jpg",city:"Agra"},{picture:"/assets/cairo.jpg",city:"Cairo"},{picture:"/assets/bali.jpg",city:"Bali"},{picture:"/assets/cappadocia.jpg",city:"Cappadocia"}]},{src:[{picture:"/assets/machu_picchu.jpg",city:"Machu Picchu"},{picture:"/assets/london.jpg",city:"London"},{picture:"/assets/moscow.jpg",city:"Moscow"},{picture:"/assets/new_york.jpg",city:"New York"}]},{src:[{picture:"/assets/paris.jpg",city:"Paris"},{picture:"/assets/sydney.jpg",city:"Sydney"},{picture:"/assets/rome.jpg",city:"Rome"},{picture:"/assets/vatnajokull.jpg",city:"Vatnajokull"}]}],N=function(e){var t=Object(r.useState)(0),n=Object(y.a)(t,2),c=n[0],s=n[1],a=Object(r.useState)(!1),i=Object(y.a)(a,2),o=i[0],l=i[1],u=function(){if(!o){var e=c===w.length-1?0:c+1;s(e)}},j=function(){if(!o){var e=0===c?w.length-1:c-1;s(e)}},d=w.map((function(e,t){return Object(b.jsx)(v.a,{onExiting:function(){return l(!0)},onExited:function(){return l(!1)},children:Object(b.jsx)("div",{className:"photoContainer",children:Object(b.jsx)("div",{className:"photos",children:e.src.map((function(e){return Object(b.jsx)("div",{className:"photo",style:{backgroundImage:'url("'.concat(e.picture,'")')},children:Object(b.jsx)("h3",{children:e.city})},e.city)}))})})},t)}));return Object(b.jsxs)(C.a,{className:"carousel-fade",interval:"3000",activeIndex:c,next:u,previous:j,children:[Object(b.jsx)(k.a,{items:d,activeIndex:c,onClickHandler:function(e){o||s(e)}}),d,Object(b.jsx)(I.a,{direction:"prev",directionText:"",onClickHandler:j}),Object(b.jsx)(I.a,{direction:"next",directionText:"",onClickHandler:u})]})},_=function(){return Object(b.jsxs)("div",{className:"callToA",children:[Object(b.jsx)("h3",{children:"Ready to take off?"}),Object(b.jsxs)(a.b,{to:"/cities",children:[Object(b.jsx)("h4",{children:"Click Here"}),Object(b.jsx)("img",{src:"/assets/plane_ticket.png",alt:"planeTicket"})]})]})},T=function(){return Object(b.jsxs)("main",{children:[Object(b.jsx)(g,{}),Object(b.jsx)(f,{}),Object(b.jsx)(_,{}),Object(b.jsx)("h2",{id:"popularMyt",children:"Popular Mytineraries"}),Object(b.jsx)("div",{className:"plane",style:{backgroundImage:'url("/assets/ventana.png")'},children:Object(b.jsx)(N,{})}),Object(b.jsx)(x,{})]})},E={getAllCities:function(e){return function(){var e=Object(u.a)(o.a.mark((function e(t,n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://gillone-mytinerary.herokuapp.com/api/cities");case 2:if((r=e.sent).data.success){e.next=5;break}throw new Error("Issues between backend & database");case 5:t({type:"GET_ALL_CITIES",payload:r.data.response});case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},filterCities:function(e){return function(t,n){t({type:"FILTER_CITIES",payload:e})}},getOneCity:function(e){return function(){var t=Object(u.a)(o.a.mark((function t(n,r){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"GET_ONE_CITY",payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}},S={getAllCities:E.getAllCities,filterCities:E.filterCities},L=Object(m.b)((function(e){return{infoCities:e.cities.filteredCities,token:e.users.token,name:e.users.name}}),S)((function(e){var t=Object(r.useState)(!0),n=Object(y.a)(t,2),c=n[0],s=n[1];if(Object(r.useEffect)((function(){function t(){return(t=Object(u.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.getAllCities();case 3:t.next=9;break;case 5:return t.prev=5,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",!1);case 9:s(!1);case 10:case"end":return t.stop()}}),t,null,[[0,5]])})))).apply(this,arguments)}window.scrollTo(0,0),function(){t.apply(this,arguments)}()}),[]),c)return Object(b.jsxs)("div",{className:"loading",children:[Object(b.jsx)("img",{src:"/assets/flying-airplane.gif",alt:"plane flying gif"}),Object(b.jsx)("h3",{children:"Loading..."})]});var i=e.infoCities.length>0?e.infoCities.map((function(e,t){return Object(b.jsx)(a.b,{to:"/city/".concat(e._id),children:Object(b.jsx)("div",{className:"cityCards",style:{backgroundImage:'url("'.concat(e.picture,'")')},children:Object(b.jsxs)("div",{className:"cardsTitles",children:[Object(b.jsx)("h3",{children:e.city}),Object(b.jsxs)("h3",{children:["-",e.country]})]})})},t)})):Object(b.jsx)("h3",{children:"We couldn't find a match for your search. Try another city!"});return Object(b.jsxs)("div",{className:"body",children:[Object(b.jsx)(O,{}),Object(b.jsx)("div",{style:{backgroundImage:'url("/assets/airport_board.jpg")'},className:"boardImg"}),Object(b.jsxs)("div",{className:"inputContainer",children:[Object(b.jsx)("img",{src:"/assets/plane_icon.png",alt:"plane icon"}),Object(b.jsx)("input",{type:"text",placeholder:"Choose your destination",onChange:function(t){e.filterCities(t.target.value)}})]}),Object(b.jsx)("div",{className:"citiesContainer",children:i}),Object(b.jsx)(x,{})]})})),A={getActivitiesByItinerary:function(e){return function(){var t=Object(u.a)(o.a.mark((function t(n,r){var c,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.get("https://gillone-mytinerary.herokuapp.com/api/activities/".concat(e));case 3:return c=t.sent,s=c.data.response,t.abrupt("return",s);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",{success:!1,response:t.t0});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,n){return t.apply(this,arguments)}}()}},B={getItineraryByCity:function(e){return function(){var t=Object(u.a)(o.a.mark((function t(n,r){var c,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.get("https://gillone-mytinerary.herokuapp.com/api/itineraries/".concat(e));case 3:c=t.sent,s=c.data.response,n({type:"GET_ITINERARY_BY_CITYID",payload:s}),t.next=11;break;case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",{success:!1,response:t.t0});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,n){return t.apply(this,arguments)}}()},addComment:function(e,t,n){return Object(u.a)(o.a.mark((function r(){var c;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,d.a.put("https://gillone-mytinerary.herokuapp.com/api/comments/".concat(e),{comment:t,type:"addComment"},{headers:{Authorization:"Bearer "+n}});case 3:if(!(c=r.sent).data.success){r.next=8;break}return r.abrupt("return",{success:!0,response:c.data.response});case 8:throw new Error;case 9:r.next=14;break;case 11:return r.prev=11,r.t0=r.catch(0),r.abrupt("return",{success:!1,response:r.t0});case 14:case"end":return r.stop()}}),r,null,[[0,11]])})))},deleteComment:function(e,t,n){return function(){var r=Object(u.a)(o.a.mark((function r(c){return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,d.a.put("https://gillone-mytinerary.herokuapp.com/api/comments/".concat(e),{commentId:t,type:"deleteComment"},{headers:{Authorization:"Bearer "+n}});case 3:if(!r.sent.data.success){r.next=8;break}return r.abrupt("return",{success:!0});case 8:throw new Error;case 9:r.next=14;break;case 11:return r.prev=11,r.t0=r.catch(0),r.abrupt("return",{success:!1,response:r.t0});case 14:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(e){return r.apply(this,arguments)}}()},editComment:function(e,t,n){return Object(u.a)(o.a.mark((function r(){var c;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,d.a.put("https://gillone-mytinerary.herokuapp.com/api/comments/".concat(e),{comment:t,type:"editComment"},{headers:{Authorization:"Bearer "+n}});case 3:if(!(c=r.sent).data.success){r.next=8;break}return r.abrupt("return",{success:!0,response:c.data.response});case 8:throw new Error;case 9:r.next=14;break;case 11:return r.prev=11,r.t0=r.catch(0),r.abrupt("return",{success:!1,response:r.t0});case 14:case"end":return r.stop()}}),r,null,[[0,11]])})))},likeDislike:function(e,t){return Object(u.a)(o.a.mark((function n(){var r;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,d.a.put("https://gillone-mytinerary.herokuapp.com/api/itinerary/like/".concat(e),{},{headers:{Authorization:"Bearer "+t}});case 3:return r=n.sent,n.abrupt("return",r);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))}},U=function(e){var t=e.Activities;return Object(b.jsxs)("div",{className:"activity",children:[Object(b.jsx)("div",{className:"activityPic",style:{backgroundImage:'url("'.concat(t.src,'")')}}),Object(b.jsx)("h5",{children:t.activity})]})},G=n(15),P=n.n(G),F=Object(m.b)((function(e){return{token:e.users.token,_id:e.users._id}}))((function(e){var t=Object(r.useState)(!1),n=Object(y.a)(t,2),c=n[0],s=n[1],a=Object(r.useRef)();Object(r.useEffect)((function(){s(!1)}),[e.updateComment]);var i=e.newComment.userId._id===e._id,o=Object(b.jsxs)("div",{className:"textArea",children:[Object(b.jsx)("div",{children:c?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",{type:"text",defaultValue:e.newComment.comment,ref:a}),Object(b.jsx)("img",{src:"/assets/check.svg",alt:"send",onClick:function(){return e.edit(e.newComment._id,a.current.value,e.token)}})]}):Object(b.jsx)("p",{children:e.newComment.comment})}),Object(b.jsx)("img",{src:"/assets/pencil.svg",alt:"pencil",onClick:function(){return s(!c)}}),Object(b.jsx)("img",{src:"/assets/trash.svg",alt:"trash",onClick:function(){P.a.fire({title:"Are you sure?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(t){t.isConfirmed&&(e.delete(e.itineraryId,e.newComment._id,e.token),P.a.fire("Deleted!","Your comment has been deleted.","success"))}))}})]}),l=i?o:Object(b.jsx)("p",{children:e.newComment.comment});return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"textArea",children:[Object(b.jsx)("div",{className:"profilePic",style:{backgroundImage:'url("'.concat(e.newComment.userId.src,'")')},children:" "}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h6",{children:e.newComment.userId.firstName}),l]})]})})})),Y={addComment:B.addComment,editComment:B.editComment,deleteComment:B.deleteComment},D=Object(m.b)((function(e){return{token:e.users.token}}),Y)((function(e){var t=Object(r.useState)(e.comments),n=Object(y.a)(t,2),c=n[0],s=n[1],a=Object(r.useState)(!1),i=Object(y.a)(a,2),o=i[0],l=i[1],u=Object(r.useRef)(),j=function(t,n,r){e.deleteComment(t,n,r).then((function(e){if(!e.success)throw new Error;s(c.filter((function(e){return e._id!==n})))})).catch((function(e){return console.log(e)}))},d=function(t,n,r){e.editComment(t,n,r).then((function(e){e.success&&(c.forEach((function(e){e._id===t&&(e.comment=n)})),s(c),l(!o))})).catch((function(e){return console.log(e)}))};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h4",{children:"Comments"}),Object(b.jsx)("div",{className:"comments",children:c.map((function(t){return Object(b.jsx)(F,{newComment:t,delete:j,itineraryId:e.itineraryId,edit:d,updateComment:o},t._id)}))}),Object(b.jsxs)("div",{className:"commentInputContainer",children:[Object(b.jsx)("input",{type:"text",className:"commentsInputs",autoComplete:"nope",ref:u,name:"comment",disabled:!e.token,placeholder:e.token?"Leave a coment!":"You have to log in to comment"}),Object(b.jsx)("button",{className:"sendComment",onClick:function(t){var n=u.current.value;e.addComment(e.itineraryId,n,e.token).then((function(e){s(e.response),u.current.value=""})).catch((function(e){return console.log(e)}))},disabled:!e.token,children:"Send"})]})]})})),R={getActivitiesByItinerary:A.getActivitiesByItinerary,likeDislike:B.likeDislike},M=Object(m.b)((function(e){return{token:e.users.token,firstName:e.users.firstName,src:e.users.src,userId:e.users._id}}),R)((function(e){var t=Object(r.useState)([]),n=Object(y.a)(t,2),c=n[0],s=n[1],a=Object(r.useState)(!0),i=Object(y.a)(a,2),l=i[0],j=i[1],d=Object(r.useState)(!0),p=Object(y.a)(d,2),m=(p[0],p[1]),h=Object(r.useState)(e.Itineraries.likes),O=Object(y.a)(h,2),f=O[0],g=O[1];Object(r.useEffect)((function(){e.getActivitiesByItinerary(e.Itineraries._id).then((function(e){s(e)}))}),[l]);var x=P.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:function(e){e.addEventListener("mouseenter",P.a.stopTimer),e.addEventListener("mouseleave",P.a.resumeTimer)}}),v=e.Itineraries,C=v.hashtags.map((function(e,t){return Object(b.jsx)("p",{children:"#"+e},t)})),k=function(){var t=Object(u.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(m(!1),e.token){t.next=5;break}x.fire({icon:"error",title:"You must be logged to like this post!"}),t.next=9;break;case 5:return t.next=7,e.likeDislike(e.Itineraries._id,e.token);case 7:n=t.sent,g(n.data.response);case 9:m(!0);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),I=f.includes(e.userId)?"/assets/heartFull.svg":"/assets/heart.svg";return Object(b.jsxs)("div",{className:"itinerary",children:[Object(b.jsx)("h3",{children:v.itineraryTitle}),Object(b.jsxs)("div",{className:"itineraryContent",children:[Object(b.jsxs)("div",{className:"itineraryInfo",children:[Object(b.jsxs)("div",{className:"author",children:[Object(b.jsx)("div",{className:"authorPicture",style:{backgroundImage:'url("'.concat(v.userPicture,'")')}}),Object(b.jsx)("h4",{children:v.userName})]}),Object(b.jsx)("p",{children:v.description}),Object(b.jsxs)("div",{className:"iconContainer",children:[Object(b.jsx)("p",{children:"\ud83d\udcb0".repeat(parseInt(v.price))}),Object(b.jsx)("p",{children:"\ud83d\udd53"+v.duration+"hs"}),Object(b.jsxs)("div",{className:"likes",children:[Object(b.jsx)("img",{src:I,onClick:k}),Object(b.jsx)("p",{children:f.length})]})]}),Object(b.jsx)("div",{className:"hashtags",children:C})]}),Object(b.jsx)("div",{className:"cityPicture",style:{backgroundImage:'url("'.concat(v.src,'")')}})]}),Object(b.jsxs)("div",{className:"activitiesContainer",children:[Object(b.jsxs)("div",{className:l?"hide":"show",children:[Object(b.jsx)("h4",{children:"Activities"}),Object(b.jsx)("div",{className:"activities",children:l?null:c.map((function(e){return Object(b.jsx)(U,{Activities:e},e._id)}))}),Object(b.jsx)(D,{itineraryId:e.Itineraries._id,comments:e.Itineraries.comments})]}),Object(b.jsx)("button",{className:"viewMore",onClick:function(){j(!l)},children:l?" View More":"View Less"})]})]})})),H=function(){return Object(b.jsxs)("div",{className:"itinerary",children:[Object(b.jsx)("h3",{children:"Sorry!"}),Object(b.jsx)("p",{children:"There are no itineraries for this city yet. Check out later!"}),Object(b.jsx)("img",{src:"/assets/error.gif",alt:"paper plane flying"})]})},W={getOneCity:E.getOneCity,getAllCities:E.getAllCities,getItineraryByCity:B.getItineraryByCity},z=Object(m.b)((function(e){return{selectedCity:e.cities.oneCity,cityItineraries:e.itineraries.cityItineraries,allCities:e.cities.filteredCities}}),W)((function(e){var t=Object(r.useState)(!0),n=Object(y.a)(t,2),c=n[0],s=n[1];return Object(r.useEffect)((function(){if(window.scrollTo(0,0),0===e.allCities.length)return e.history.push("/cities"),!1;e.getOneCity(e.match.params._id),e.getItineraryByCity(e.match.params._id),s(!1)}),[]),c?Object(b.jsxs)("div",{className:"loading",children:[Object(b.jsx)("img",{src:"/assets/flying-airplane.gif",alt:"plane flying gif"}),Object(b.jsx)("h3",{children:"Loading..."})]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(O,{}),Object(b.jsxs)("main",{children:[Object(b.jsx)("div",{className:"heroCity",style:{backgroundImage:'url("'.concat(e.selectedCity.hero,'")')}}),Object(b.jsx)("div",{className:"cityName",children:Object(b.jsx)("h3",{children:e.selectedCity.city})}),Object(b.jsx)("div",{className:"cityDescription",children:e.selectedCity.description}),Object(b.jsx)("div",{children:0!==e.cityItineraries.length?e.cityItineraries.map((function(e){return Object(b.jsx)(M,{Itineraries:e},e.id)})):Object(b.jsx)(H,{})}),Object(b.jsx)("div",{className:"construction",children:Object(b.jsx)(a.b,{to:"/cities",children:Object(b.jsx)("button",{children:"Go back to cities"})})})]}),Object(b.jsx)(x,{})]})})),V=n(21),J=n(28),q=n.n(J),K={signUp:p.signUp},Q=Object(m.b)(null,K)((function(e){var t=Object(r.useState)({firstName:"",lastName:"",src:"",country:"",email:"",password:""}),n=Object(y.a)(t,2),c=n[0],s=n[1],i=Object(r.useState)({}),o=Object(y.a)(i,2),u=o[0],j=o[1],d=P.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:function(e){e.addEventListener("mouseenter",P.a.stopTimer),e.addEventListener("mouseleave",P.a.resumeTimer)}}),p=function(e){s(Object(l.a)(Object(l.a)({},c),{},Object(V.a)({},e.target.name,e.target.value)))},m=function(t){var n={firstName:t.profileObj.givenName,lastName:t.profileObj.familyName,src:t.profileObj.imageUrl,country:"Argentina",email:t.profileObj.email,password:t.profileObj.googleId,google:!0};e.signUp(n).then((function(e){e.data.success?d.fire({icon:"success",title:"Your account has been created!"}):j(e.data.error)})).catch((function(e){console.log(e),d.fire({icon:"error",title:"Something went wrong! Come back later!"})}))};return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("main",{children:[Object(b.jsx)(O,{}),Object(b.jsx)("div",{className:"airport",style:{backgroundImage:'url("/assets/airport.jpg")'},children:Object(b.jsxs)("div",{className:"userForm",children:[Object(b.jsx)("h3",{children:"Create an Account!"}),Object(b.jsxs)("form",{children:[Object(b.jsxs)("div",{className:"inputs",children:[Object(b.jsx)("input",{type:"text",onChange:p,name:"firstName",placeholder:"First Name",autoComplete:"nope"}),Object(b.jsx)("p",{children:u.firstName}),Object(b.jsx)("input",{type:"text",onChange:p,name:"lastName",placeholder:"Last Name",autoComplete:"nope"}),Object(b.jsx)("p",{children:u.lastName}),Object(b.jsx)("input",{type:"url",onChange:p,name:"src",placeholder:"Url of your picture",autoComplete:"nope"})]}),Object(b.jsxs)("div",{className:"inputs",children:[Object(b.jsxs)("select",{name:"country",onChange:p,children:[Object(b.jsx)("option",{children:"Choose your country"}),["Egypt","Canada","Australia","Ireland","Argentina","Colombia","Peru","United States","Chile","China","Japan","Pakistan","Colombia","Uruguay","Cuba"].map((function(e,t){return Object(b.jsx)("option",{value:e.name,children:e.name},t)}))]}),Object(b.jsx)("input",{type:"email",onChange:p,name:"email",placeholder:"Email",autoComplete:"nope"}),Object(b.jsx)("p",{children:u.email}),Object(b.jsx)("input",{type:"password",onChange:p,name:"password",placeholder:"Password",autoComplete:"nope"}),Object(b.jsx)("p",{children:u.password})]})]}),Object(b.jsx)("button",{onClick:function(){Object.values(c).some((function(e){return""===e}))?d.fire({icon:"error",title:"There are fields incomplete, please complete them."}):e.signUp(c).then((function(e){e.data.success?d.fire({icon:"success",title:"Your account has been created!"}):e.data.errors?(j({}),e.data.errors.map((function(e){return j((function(t){return Object(l.a)(Object(l.a)({},t),{},Object(V.a)({},e.path,e.message))}))}))):d.fire({icon:"error",title:"That email has already been used! Try with another one."})})).catch((function(e){console.log(e),d.fire({icon:"error",title:"We are having technical difficulties! Come back later!"})}))},children:"Sign Up"}),Object(b.jsx)(q.a,{clientId:"556133798915-04cvch3go6p7e8emmtorfuogaa933l4h.apps.googleusercontent.com",buttonText:"Sign Up with Google",onSuccess:m,onFailure:m,cookiePolicy:"single_host_origin"}),Object(b.jsxs)("span",{className:"logIn/signUp",children:[Object(b.jsx)("h5",{children:"Already have an account?"}),Object(b.jsx)(a.b,{to:"/logIn",children:Object(b.jsx)("h5",{children:"Log In"})})]})]})})]})})})),X={logUser:p.logUser},Z=Object(m.b)(null,X)((function(e){var t=Object(r.useState)({email:"",password:""}),n=Object(y.a)(t,2),c=n[0],s=n[1],i=Object(r.useState)(null),o=Object(y.a)(i,2),u=(o[0],o[1]),j=function(e){s(Object(l.a)(Object(l.a)({},c),{},Object(V.a)({},e.target.name,e.target.value)))},d=P.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:function(e){e.addEventListener("mouseenter",P.a.stopTimer),e.addEventListener("mouseleave",P.a.resumeTimer)}}),p=function(t){var n={email:t.profileObj.email,password:t.profileObj.googleId,googleFlag:!0};e.logUser(n).then((function(e){e.data.success?d.fire({icon:"success",title:"Welcome back!"}):u(e.data.error)})).catch((function(e){console.log(e),d.fire({icon:"error",title:"You have to sign up before you log in!"})}))};return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("main",{children:[Object(b.jsx)(O,{}),Object(b.jsx)("div",{className:"jetway",style:{backgroundImage:'url("/assets/jetway.jpg")'},children:Object(b.jsxs)("div",{className:"userForm",children:[Object(b.jsx)("h3",{children:"Welcome back!"}),Object(b.jsxs)("form",{children:[Object(b.jsx)("input",{type:"email",onChange:j,name:"email",placeholder:"Email",autoComplete:"nope"}),Object(b.jsx)("input",{type:"password",onChange:j,name:"password",placeholder:"Password",autoComplete:"nope"})]}),Object(b.jsx)("button",{onClick:function(){Object.values(c).some((function(e){return""===e}))?d.fire({icon:"error",title:"There are fields incomplete, please complete them."}):e.logUser(c).then((function(e){e.data.success?d.fire({icon:"success",title:"Welcome back!"}):alert(e.data.response)})).catch((function(e){return d.fire({icon:"error",title:"Email and/or password incorrect"})}))},children:"Log In"}),Object(b.jsx)(q.a,{clientId:"556133798915-04cvch3go6p7e8emmtorfuogaa933l4h.apps.googleusercontent.com",buttonText:"Log in with Google",onSuccess:p,onFailure:p,cookiePolicy:"single_host_origin"}),Object(b.jsxs)("span",{className:"logIn/signUp",children:[Object(b.jsx)("h5",{children:"You don't have an account yet?"}),Object(b.jsx)(a.b,{to:"/signUp",children:Object(b.jsx)("h5",{children:"Sign Up"})})]})]})})]})})})),$=function(){return Object(b.jsxs)("div",{className:"notFound",children:[Object(b.jsx)("h2",{children:"We couldn't find what you're looking for!"}),Object(b.jsx)("img",{src:"/assets/error.gif",alt:"paper plane flying"}),Object(b.jsx)(a.b,{to:"/cities",children:Object(b.jsx)("button",{children:"Go back to Cities"})}),Object(b.jsx)(a.b,{to:"/",children:Object(b.jsx)("button",{children:"Go to Home"})})]})},ee=n(7),te={logInLS:p.logInLS},ne=Object(m.b)((function(e){return{token:e.users.token}}),te)((function(e){return Object(r.useEffect)((function(){localStorage.getItem("token")&&e.logInLS(localStorage.getItem("token"))}),[]),Object(b.jsx)(a.a,{children:Object(b.jsxs)(ee.d,{children:[Object(b.jsx)(ee.b,{exact:!0,path:"/",component:T}),Object(b.jsx)(ee.b,{exact:!0,path:"/cities",component:L}),Object(b.jsx)(ee.b,{path:"/city/:_id",component:z}),Object(b.jsx)(ee.b,{path:"/notFound",component:$}),!e.token&&Object(b.jsx)(ee.b,{path:"/signUp",component:Q}),!e.token&&Object(b.jsx)(ee.b,{path:"/logIn",component:Z}),Object(b.jsx)(ee.a,{to:"/"})]})})})),re=n(24),ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{allCities:[],filteredCities:[],oneCity:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ALL_CITIES":return Object(l.a)(Object(l.a)({},e),{},{allCities:t.payload,filteredCities:t.payload});case"FILTER_CITIES":return Object(l.a)(Object(l.a)({},e),{},{filteredCities:e.allCities.filter((function(e){return e.city.toLowerCase().startsWith(t.payload.toLowerCase().trim())}))});case"GET_ONE_CITY":return Object(l.a)(Object(l.a)({},e),{},{oneCity:e.allCities.find((function(e){return e._id===t.payload}))});default:return e}},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cityItineraries:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ITINERARY_BY_CITYID":return Object(l.a)(Object(l.a)({},e),{},{cityItineraries:t.payload});default:return e}},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{token:null,firstName:null,src:null,_id:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGGED":return localStorage.setItem("token",t.payload.token),localStorage.setItem("name",t.payload.firstName),localStorage.setItem("src",t.payload.src),localStorage.setItem("_id",t.payload._id),{token:t.payload.token,firstName:t.payload.firstName,src:t.payload.src,_id:t.payload._id};case"LOG_OUT":return localStorage.removeItem("token"),localStorage.removeItem("name"),localStorage.removeItem("src"),localStorage.removeItem("_id"),{token:null,firstName:null,src:null,_id:null};default:return e}},ie=Object(re.b)({cities:ce,itineraries:se,users:ae}),oe=n(56),le=Object(re.c)(ie,Object(re.a)(oe.a));s.a.render(Object(b.jsx)(m.a,{store:le,children:Object(b.jsx)(ne,{})}),document.getElementById("root"))},77:function(e,t,n){}},[[111,1,2]]]);
//# sourceMappingURL=main.b1a59129.chunk.js.map