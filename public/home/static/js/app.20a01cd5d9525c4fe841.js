webpackJsonp([1],{"1IOS":function(t,e){},AJHr:function(t,e){},BVV4:function(t,e){},JeyX:function(t,e){},KQSE:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]},n=a("VU/8")({name:"app"},i,!1,null,null,null).exports,r=a("zL8q"),o=a.n(r),c=a("/ocq"),l=a("//Fk"),m=a.n(l),d=a("mtWM"),u=a.n(d),v=a("lbHh"),_=a.n(v),h="token";var p=u.a.create({timeout:15e3});p.defaults.baseURL="http://wx.live.com/",p.interceptors.request.use(function(t){return t.headers.token=_.a.get(h),t},function(t){console.log(t),m.a.reject(t)}),p.interceptors.response.use(function(t){return t.data},function(t){return console.log("err"+t),Message({message:t.message,type:"error",duration:5e3}),m.a.reject(t)});var f=p,g=function(t){var e=new Date((new Date).setHours(0,0,0,0))/1e3;return parseInt((t-e)/86400)},b=function(t){var e=new Date(1e3*t);return e.getMonth()+1+"月"+e.getDate()+"日  星期"+["一","二","三","四","五","六","日"][e.getDay()]},y=function(t){var e=new Date(1e3*t),a=e.getMinutes();return a<10&&(a="0"+a),e.getHours()+" : "+a},C={data:function(){return{list:[]}},created:function(){var t=this;f.get("/match/list").then(function(e){var a=[];e.data.forEach(function(t,e){var s=g(t.time);t.is_live=Math.abs(parseInt(Date.now()/1e3)-parseInt(t.time))<10800,t.date=b(t.time),t.time=y(t.time),a[s]?a[s].push(t):(a[s]=[],a[s].push(t))}),t.list=a})},methods:{jump:function(t,e){0!=e?this.$router.push({path:"/live/"+t+"/match/"+t}):alert("还没开始呢")}}},w={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home_container"},[s("header",{staticClass:"pad10 w100",staticStyle:{"text-align":"center",position:"relative",padding:"10px"}},[t._v("\n    赛程\n    "),s("span",{staticStyle:{position:"absolute",right:"20px"}},[s("router-link",{attrs:{to:"/login"}},[s("i",{staticClass:"el-icon-setting"})])],1)]),t._v(" "),s("div",{staticClass:"home_body w100"},[t._l(t.list,function(e,i){return[e?s("div",{staticClass:"item_header w100"},[s("span",0==i?[t._v("今天")]:1==i?[t._v("明天")]:[t._v("后天")]),t._v(" "),s("span",[t._v(t._s(e[0].date))])]):t._e(),t._v(" "),t._l(e,function(i){return e?s("div",{staticClass:"item_body",on:{click:function(e){t.jump(i.id,i.is_live)}}},[s("div",{staticStyle:{display:"flex"}},[s("div",{staticStyle:{padding:"5px"}},[s("p",{staticClass:"flex"},[s("span",[t._v(t._s(i.time))]),t._v(" "),s("img",{attrs:{src:a("WjQm")}})]),t._v(" "),s("p",{staticStyle:{color:"#999"}},[t._v("FIFA联赛")])]),t._v(" "),s("div",{staticStyle:{padding:"5px"}},[s("p",{staticClass:"flex"},[s("img",{attrs:{src:i.team1.icon}}),t._v(" "),s("span",[t._v(t._s(i.team1.name))])]),t._v(" "),s("p",{staticClass:"flex"},[s("img",{attrs:{src:i.team2.icon}}),t._v(" "),s("span",[t._v(t._s(i.team2.name))])])])]),t._v(" "),s("div",{staticStyle:{display:"flex"}},[s("div",{class:{red:i.is_live},staticStyle:{padding:"5px"}},[s("p",[t._v(t._s(i.score.team1_score))]),t._v(" "),s("p",[t._v(t._s(i.score.team2_score))])]),t._v(" "),s("div",{class:{red:i.is_live},staticStyle:{padding:"5px"}},[s("p",[t._v("图文直播")]),t._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:i.is_live,expression:"item.is_live"}]},[t._v("进行中")])])])]):t._e()})]})],2)])},staticRenderFns:[]};var x=a("VU/8")(C,w,!1,function(t){a("KQSE")},"data-v-28d798dc",null).exports,I=a("Dd8w"),k=a.n(I),S=a("NYxO"),U={data:function(){return{match_data:{team1:{},team2:{},score:{},goal:{}}}},computed:k()({},Object(S.c)(["matchInfo"])),props:["id"],mounted:function(){this.getMatchInfo(this.id)},methods:k()({},Object(S.b)(["getMatchInfo"])),watch:{matchInfo:function(t){this.match_data=t}}},V={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail_container"},[a("header",{staticClass:"header w100"},[a("span",{staticClass:"back"},[a("router-link",{attrs:{to:"/"}},[a("i",{staticClass:"el-icon-arrow-left"})])],1),t._v(" "+t._s(t.match_data.team1.name)+" VS "+t._s(t.match_data.team2.name)+"\n  ")]),t._v(" "),a("div",{staticClass:"banner w100"},[a("img",{attrs:{src:t.match_data.banner}}),t._v(" "),a("div",{staticClass:"team team_1"},[a("img",{attrs:{src:t.match_data.team1.icon}}),t._v(" "),a("p",[t._v(t._s(t.match_data.team1.name))]),t._v(" "),a("p",[t._v(t._s(t.match_data.team1.score))])]),t._v(" "),a("div",{staticClass:"team team_2"},[a("img",{attrs:{src:t.match_data.team2.icon}}),t._v(" "),a("p",[t._v(t._s(t.match_data.team2.name))]),t._v(" "),a("p",[t._v(t._s(t.match_data.team2.score))])])]),t._v(" "),a("div",{staticClass:"nav w100"},[a("ul",[a("li",{staticClass:"br"},[a("router-link",{attrs:{to:"/live/"+t.id+"/match/"+t.id}},[t._v("比赛直播")])],1),t._v(" "),a("li",{staticClass:"br"},[a("router-link",{attrs:{to:"/live/"+t.id+"/chat/"+t.id}},[t._v("聊天室")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/live/"+t.id+"/data"}},[t._v("数据")])],1)])]),t._v(" "),a("router-view")],1)},staticRenderFns:[]};var E=a("VU/8")(U,V,!1,function(t){a("JeyX")},"data-v-7e0cd5b2",null).exports,$={data:function(){return{liveContent:{first:[],second:[],ws:null}}},props:["id"],created:function(){var t=this;f.get("/live/list/"+this.id).then(function(e){e.data.forEach(function(e){0==e.section?t.liveContent.first.push(e):t.liveContent.second.push(e)})}),this.ws=new WebSocket("ws://192.168.1.121:8811"),this.ws.onopen=function(t){console.log("websocket connecting ....")},this.ws.onmessage=function(e){var a=JSON.parse(e.data);console.log(a),a.match_id==t.id&&("1"===a.section?t.liveContent.second.push(a):"0"===a.section&&t.liveContent.first.push(a))}}},M={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"w100"},[a("div",{staticClass:"match w100"},[0!=t.liveContent.first.length?a("div",{staticClass:"title"},[a("i",{staticClass:"el-icon-info"}),t._v(" "),a("span",[t._v("上半场")])]):a("div",{staticStyle:{"font-size":"14px",color:"#999"}},[t._v("\n\t\t\t比赛尚未开始，可以在聊天室发言\n\t\t")]),t._v(" "),a("div",{staticClass:"content"},t._l(t.liveContent.first,function(e){return t.liveContent.first?a("div",[a("div",{staticClass:"content_item pad5"},[a("p",{staticClass:"item_header"},[a("span",{staticClass:"circle"}),t._v(" "),a("img",{attrs:{src:e.team.icon}}),t._v(" "+t._s(e.team.name))]),t._v(" "),e.content?a("p",{staticClass:"pad5"},[t._v(t._s(e.time)+" "+t._s(e.content))]):t._e(),t._v(" "),e.img?a("p",[a("img",{attrs:{src:e.img}})]):t._e()])]):t._e()}))]),t._v(" "),a("div",{staticClass:"match w100"},[0!=t.liveContent.second.length?a("div",{staticClass:"title"},[a("i",{staticClass:"el-icon-info"}),t._v(" "),a("span",[t._v("下半场")])]):t._e(),t._v(" "),a("div",{staticClass:"content"},t._l(t.liveContent.second,function(e){return t.liveContent.second?a("div",[a("div",{staticClass:"content_item pad5"},[a("p",{staticClass:"item_header"},[a("span",{staticClass:"circle"}),t._v(" "),a("img",{attrs:{src:e.team.icon}}),t._v(" "+t._s(e.team.name))]),t._v(" "),e.content?a("p",{staticClass:"pad5"},[t._v(t._s(e.time)+" "+t._s(e.content))]):t._e(),t._v(" "),e.img?a("p",[a("img",{attrs:{src:e.img}})]):t._e()])]):t._e()}))])])},staticRenderFns:[]};var F=a("VU/8")($,M,!1,function(t){a("vBBR")},"data-v-e77d21a0",null).exports,A=a("mvHQ"),R=a.n(A),T={data:function(){return{myMsg:"",messages:[],ws:null}},props:["id"],created:function(){var t=this;this.ws=new WebSocket("ws://192.168.1.121:8812"),this.ws.onopen=function(t){console.log("websocket connecting ....")},this.ws.onmessage=function(e){var a=JSON.parse(e.data);a.message&&a.match_id==t.id&&t.messages.push(a)}},methods:{sendMsg:function(){var t={msg:this.myMsg,match_id:this.id};this.ws.send(R()(t)),this.myMsg=""}}},O={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chat_container"},[a("div",{staticClass:"content"},[a("ul",t._l(t.messages,function(e){return a("li",[a("span",{staticClass:"time"},[t._v(t._s(e.time)+" 游客：")]),t._v(" "),a("span",{staticClass:"msg"},[t._v(t._s(e.message))])])}))]),t._v(" "),a("div",{staticClass:"input_box"},[a("el-input",{attrs:{placeholder:"说点啥吧",clearable:""},model:{value:t.myMsg,callback:function(e){t.myMsg=e},expression:"myMsg"}}),t._v(" "),a("el-button",{on:{click:t.sendMsg}},[t._v("发送")])],1)])},staticRenderFns:[]};var j=a("VU/8")(T,O,!1,function(t){a("zr1K")},"data-v-47159da0",null).exports,B={computed:k()({},Object(S.c)(["matchInfo"]))},D={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data w100"},[a("div",{staticClass:"data_header"},[a("div",[a("img",{attrs:{src:t.matchInfo.team1.icon}}),t._v(" "),a("p",[t._v(t._s(t.matchInfo.team1.name))])]),t._v(" "),a("div",[a("p",[t._v(t._s(0==t.matchInfo.status?"上半场":"下半场"))]),t._v(" "),a("p",{staticClass:"red"},[t._v(t._s(t.matchInfo.team1.score)+" VS "+t._s(t.matchInfo.team2.score))]),t._v(" "),a("p",[t._v(t._s(t.matchInfo.type))])]),t._v(" "),a("div",[a("img",{attrs:{src:t.matchInfo.team2.icon}}),t._v(" "),a("p",[t._v(t._s(t.matchInfo.team2.name))])])]),t._v(" "),a("div",{staticClass:"data_body w100"},[a("p",{staticClass:"title"},[t._v("赛况")]),t._v(" "),a("div",{staticClass:"w100"},[a("table",{staticClass:"table table-striped w100 detail"},[t._m(0),t._v(" "),a("tr",[a("td",[a("img",{attrs:{src:t.matchInfo.team1.icon}})]),a("td",[t._v(t._s(t.matchInfo.score.team1_first))]),a("td",[t._v(t._s(t.matchInfo.score.team1_second))]),a("td",[t._v(t._s(t.matchInfo.score.team1_score))])]),t._v(" "),a("tr",[a("td",[a("img",{attrs:{src:t.matchInfo.team2.icon}})]),a("td",[t._v(t._s(t.matchInfo.score.team2_first))]),a("td",[t._v(t._s(t.matchInfo.score.team2_second))]),a("td",[t._v(t._s(t.matchInfo.score.team2_score))])])])])]),t._v(" "),a("div",{staticClass:"data_footer mt10"},[a("p",{staticClass:"title"},[t._v("进球情况")]),t._v(" "),a("div",{staticClass:"w100"},[a("table",{staticClass:"table table-striped w100 detail"},[t._m(1),t._v(" "),t._l(t.matchInfo.goal,function(e){return a("tr",[a("td",[a("img",{attrs:{src:e.team.icon}})]),t._v(" "),a("td",[t._v(t._s(e.time))]),t._v(" "),a("td",[a("img",{attrs:{src:e.player.icon}})])])})],2)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{staticClass:"bb"},[e("td",[this._v("球队")]),e("td",[this._v("上半场")]),e("td",[this._v("下半场")]),e("td",[this._v("总比分")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{staticClass:"bb"},[e("td",[this._v("球队")]),e("td",[this._v("时间")]),e("td",[this._v("球员")])])}]};var G=a("VU/8")(B,D,!1,function(t){a("jFtZ")},"data-v-d8242e2e",null).exports,L={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"admin_container"},[s("div",[s("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal"},on:{select:t.handleSelect}},[s("el-menu-item",{attrs:{index:"1"}},[s("a",{staticClass:"logo",attrs:{href:"/admin"}},[s("img",{attrs:{src:a("WjQm")}})])]),t._v(" "),s("el-menu-item",{attrs:{index:"5"}},[s("router-link",{attrs:{to:"/admin/home"}},[t._v("直播管理")])],1),t._v(" "),s("el-menu-item",{attrs:{index:"2"}},[s("router-link",{attrs:{to:"/admin/match"}},[t._v("赛事管理")])],1),t._v(" "),s("el-menu-item",{attrs:{index:"3"}},[s("router-link",{attrs:{to:"/admin/player"}},[t._v("球员管理")])],1),t._v(" "),s("el-menu-item",{attrs:{index:"4"}},[s("router-link",{attrs:{to:"/admin/team"}},[t._v("球队管理")])],1)],1)],1),t._v(" "),s("div",[s("router-view")],1)])},staticRenderFns:[]};var z=a("VU/8")({data:function(){return{activeIndex:"5"}},methods:{handleSelect:function(){}}},L,!1,function(t){a("BVV4")},null,null).exports,H={data:function(){return{user:"",passwd:""}},methods:{login:function(){var t=this;""!=this.user&&""!=this.passwd?f({url:"/login",method:"POST",data:{user:this.user,passwd:this.passwd}}).then(function(e){var a;"1001"==e.code&&(a=e.data,_.a.set(h,a)&&t.$router.push({path:"/admin/home"}))}):this.$message.error("账号密码不能为空")}}},P={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login_box"},[a("p",{staticStyle:{"text-align":"center",margin:"30px 0"}},[t._v("登录直播管理")]),t._v(" "),a("el-form",{attrs:{"label-width":"80px"}},[a("el-form-item",{attrs:{label:"账号"}},[a("el-input",{model:{value:t.user,callback:function(e){t.user=e},expression:"user"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"密码"}},[a("el-input",{attrs:{type:"password"},model:{value:t.passwd,callback:function(e){t.passwd=e},expression:"passwd"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.login}},[t._v("登录")])],1)],1)],1)},staticRenderFns:[]};var Q=a("VU/8")(H,P,!1,function(t){a("PYkp")},"data-v-015d592e",null).exports,J={data:function(){return{dialogVisible:!1,matchs:[],teams:[],team1_id:"",team2_id:"",banner:"",time:"",type:"",imageUrl:""}},created:function(){this.getInfo()},methods:{showAdd:function(){var t=this;f.get("/team/list").then(function(e){t.teams=e.data}),this.dialogVisible=!0},handleAvatarSuccess:function(t,e){this.banner=t,this.imageUrl=URL.createObjectURL(e.raw)},beforeAvatarUpload:function(t){var e=t.size/1024/1024<2;return e||this.$message.error("上传头像图片大小不能超过 2MB!"),e},add:function(){var t=this,e={team1_id:this.team1_id,team2_id:this.team2_id,banner:this.banner,time:this.time.getTime()/1e3,type:this.type};f({url:"/match/add",method:"POST",data:e}).then(function(e){t.dialogVisible=!1,t.$message({message:"添加成功",type:"success"})})},getInfo:function(){var t=this;f({url:"/match/all",method:"GET"}).then(function(e){e.data.forEach(function(t,a){e.data[a].time=b(t.time)+" -- "+y(t.time)}),t.matchs=e.data})}}},N={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",{staticStyle:{padding:"0 40px","text-align":"right"}},[a("el-button",{attrs:{type:"text"},on:{click:t.showAdd}},[a("i",{staticClass:"glyphicon glyphicon-plus"}),t._v(" 添加新比赛")])],1),t._v(" "),a("div",{staticClass:"player"},t._l(t.matchs,function(e){return a("div",[a("div",{staticClass:"match_item"},[a("div",{staticClass:"team_box"},[a("img",{attrs:{src:e.team1.icon}}),t._v(" "),a("p",[t._v(t._s(e.team1.name))])]),t._v(" "),a("div",{staticClass:"banner"},[a("img",{attrs:{src:e.banner}}),t._v(" "),a("p",[t._v(t._s(e.type))]),t._v(" "),a("p",[t._v(t._s(e.time))])]),t._v(" "),a("div",{staticClass:"team_box"},[a("img",{attrs:{src:e.team2.icon}}),t._v(" "),a("p",[t._v(t._s(e.team2.name))])])])])})),t._v(" "),a("el-dialog",{staticStyle:{"min-width":"420px"},attrs:{title:"添加球员",visible:t.dialogVisible,width:"80%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-form",{staticClass:"demo-ruleForm",attrs:{"label-width":"100px"}},[a("el-form-item",{attrs:{label:"主队"}},[a("el-select",{attrs:{placeholder:"求选择球队"},model:{value:t.team1_id,callback:function(e){t.team1_id=e},expression:"team1_id"}},t._l(t.teams,function(t){return a("el-option",{attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"客队"}},[a("el-select",{attrs:{placeholder:"求选择球队"},model:{value:t.team2_id,callback:function(e){t.team2_id=e},expression:"team2_id"}},t._l(t.teams,function(t){return a("el-option",{attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"比赛时间"}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"比赛Banner"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"http://wx.live.com//index/player/upload","show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload,name:"image"}},[t.imageUrl?a("img",{staticClass:"avatar",staticStyle:{"max-width":"200px"},attrs:{src:t.imageUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),t._v(" "),a("el-form-item",{attrs:{label:"比赛类型"}},[a("el-select",{attrs:{placeholder:"比赛类型"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[a("el-option",{attrs:{label:"国际联赛",value:1}}),t._v(" "),a("el-option",{attrs:{label:"友谊赛",value:2}})],1)],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.add()}}},[t._v("立即创建")])],1)],1)],1)],1)},staticRenderFns:[]};var W=a("VU/8")(J,N,!1,function(t){a("bfTk")},null,null).exports,q={data:function(){return{dialogVisible:!1,players:[],teams:[],name:"",team_id:"",icon:"",imageUrl:""}},created:function(){this.getInfo()},methods:{showAdd:function(){var t=this;f({url:"/team/list",method:"GET"}).then(function(e){t.teams=e.data}),this.dialogVisible=!0},handleAvatarSuccess:function(t,e){this.icon=t,this.imageUrl=URL.createObjectURL(e.raw)},beforeAvatarUpload:function(t){var e=t.size/1024/1024<2;return e||this.$message.error("上传头像图片大小不能超过 2MB!"),e},add:function(){var t=this;f({url:"/player/add",method:"POST",data:{name:this.name,icon:this.icon,team_id:this.team_id}}).then(function(e){t.dialogVisible=!1,t.$message({message:"添加成功",type:"success"})})},getInfo:function(){var t=this;f({url:"/player/list",method:"GET"}).then(function(e){t.players=e.data})}}},K={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",{staticStyle:{padding:"0 40px","text-align":"right"}},[a("el-button",{attrs:{type:"text"},on:{click:t.showAdd}},[a("i",{staticClass:"glyphicon glyphicon-plus"}),t._v(" 添加新球员")])],1),t._v(" "),a("div",{staticClass:"player"},[a("el-row",t._l(t.players,function(e){return a("el-col",{attrs:{xs:12,sm:8,md:6}},[a("div",{staticClass:"thumbnail"},[a("img",{staticClass:"player_avatar",attrs:{src:e.icon}}),t._v(" "),e?a("div",{staticClass:"caption"},[a("h3",[t._v(t._s(e.name))]),t._v(" "),a("p",[a("img",{staticClass:"player_team_avater",attrs:{src:e.team.icon}}),a("span",[t._v(t._s(e.team.name))])])]):t._e()])])}))],1),t._v(" "),a("el-dialog",{staticStyle:{"min-width":"420px"},attrs:{title:"添加球员",visible:t.dialogVisible,width:"80%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-form",{staticClass:"demo-ruleForm",attrs:{"label-width":"100px"}},[a("el-form-item",{attrs:{label:"球员姓名"}},[a("el-input",{model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"球员头像"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"http://wx.live.com//index/player/upload","show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload,name:"image"}},[t.imageUrl?a("img",{staticClass:"avatar",attrs:{src:t.imageUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),t._v(" "),a("el-form-item",{attrs:{label:"所属球队"}},[a("el-select",{attrs:{placeholder:"求选择球队"},model:{value:t.team_id,callback:function(e){t.team_id=e},expression:"team_id"}},t._l(t.teams,function(t){return a("el-option",{attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.add()}}},[t._v("立即创建")])],1)],1)],1)],1)},staticRenderFns:[]};var Y=a("VU/8")(q,K,!1,function(t){a("wa5/")},null,null).exports,X={data:function(){return{dialogVisible:!1,teams:[],name:"",icon:"http://wx.live.com/static/upload/20180809/d25e0c988ee65bb6bd224789e26298e7.png",imageUrl:""}},created:function(){this.getInfo()},methods:{showAdd:function(){this.dialogVisible=!0},handleAvatarSuccess:function(t,e){this.icon=t,this.imageUrl=URL.createObjectURL(e.raw)},beforeAvatarUpload:function(t){var e=t.size/1024/1024<2;return e||this.$message.error("上传头像图片大小不能超过 2MB!"),e},add:function(){var t=this;f({url:"/team/add",method:"POST",data:{name:this.name,icon:this.icon}}).then(function(e){t.dialogVisible=!1,t.$message({message:"添加成功",type:"success"})})},getInfo:function(){var t=this;f({url:"/team/list",method:"GET"}).then(function(e){t.teams=e.data})}}},Z={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",{staticStyle:{padding:"0 40px","text-align":"right"}},[a("el-button",{attrs:{type:"text"},on:{click:t.showAdd}},[a("i",{staticClass:"glyphicon glyphicon-plus"}),t._v(" 添加新球队")])],1),t._v(" "),a("div",{staticClass:"player"},[a("el-row",t._l(t.teams,function(e){return a("el-col",{attrs:{xs:12,sm:8,md:6}},[a("div",{staticClass:"thumbnail"},[a("img",{staticClass:"player_avatar",attrs:{src:e.icon}}),t._v(" "),a("div",{staticClass:"caption"},[a("h3",[t._v(t._s(e.name))])])])])}))],1),t._v(" "),a("el-dialog",{staticStyle:{"min-width":"420px"},attrs:{title:"添加球队",visible:t.dialogVisible,width:"80%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-form",{staticClass:"demo-ruleForm",attrs:{"label-width":"100px"}},[a("el-form-item",{attrs:{label:"队名"}},[a("el-input",{model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"球队LOGO"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"http://wx.live.com//index/player/upload","show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload,name:"image"}},[t.imageUrl?a("img",{staticClass:"avatar",attrs:{src:t.imageUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.add()}}},[t._v("立即创建")])],1)],1)],1)],1)},staticRenderFns:[]};var tt=a("VU/8")(X,Z,!1,function(t){a("AJHr")},null,null).exports,et={data:function(){return{empty:!0,matchs:[]}},created:function(){this.getInfo()},methods:{jump:function(t){var e=this;this.$confirm("开始比赛吗？").then(function(a){f({url:"/match/begain/"+t,method:"GET"}).then(function(a){e.$router.push({path:"/admin/live/"+t})})})},getInfo:function(){var t=this;f({url:"/match/live",method:"GET"}).then(function(e){0!==e.data.length&&(t.empty=!1,e.data.forEach(function(t,a){e.data[a].time=b(t.time)+" -- "+y(t.time)})),t.matchs=e.data})}}},at={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.empty?a("div",[a("h1",{staticStyle:{padding:"40px"}},[t._v("没有正在直播的比赛....")])]):a("div",[a("div",{staticClass:"player"},t._l(t.matchs,function(e){return a("div",[a("div",{staticClass:"match_item"},[a("div",{staticClass:"team_box"},[a("img",{attrs:{src:e.team1.icon}}),t._v(" "),a("p",[t._v(t._s(e.team1.name))])]),t._v(" "),a("div",{staticClass:"banner"},[a("p",[t._v(t._s(e.type))]),t._v(" "),a("img",{attrs:{src:e.banner}}),t._v(" "),a("p",[t._v(t._s(e.time))]),t._v(" "),a("p",[a("el-button",{attrs:{type:"danger"},on:{click:function(a){t.jump(e.id)}}},[t._v("点击直播")])],1)]),t._v(" "),a("div",{staticClass:"team_box"},[a("img",{attrs:{src:e.team2.icon}}),t._v(" "),a("p",[t._v(t._s(e.team2.name))])])])])}))])])},staticRenderFns:[]};var st=a("VU/8")(et,at,!1,function(t){a("tcvE")},null,null).exports,it={data:function(){return{matchInfo:{},team_id:"",content:"",img:"",imageUrl:"",status:!1,rules:{team_id:[{required:!0,message:"请选择球队",trigger:"blur"}],content:[{required:!0,message:"请输入内容",trigger:"blur"}]},dialogVisible:!1,winner:[],player_id:""}},props:["id"],created:function(){this._getMatchInfo()},methods:{handleAvatarSuccess:function(t,e){this.img=t,this.imageUrl=URL.createObjectURL(e.raw)},beforeAvatarUpload:function(t){var e=t.size/1024/1024<2;return e||this.$message.error("上传头像图片大小不能超过 2MB!"),e},clearForm:function(){this.team_id="",this.content="",this.img="",this.imageUrl=""},onSubmit:function(){var t=this;if(""==this.team_id&&""==this.content)return this.$message.error("输入不能为空"),!1;var e=new FormData;e.append("team_id",this.team_id),e.append("content",this.content),e.append("img",this.img),e.append("match_id",this.id),e.append("section",this.status?1:0),e.append("time",this._getCurrentlyTime());f.post("/live/push",e,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){t.$message.success("发送成功"),t.clearForm()})},changeMatchStat:function(){var t=this;Date.now()-this.matchInfo.time<2700&&this.$message.error("现在还不可以进入下半场"),this.$confirm("是否进入下半场","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){f({url:"/match/switch_status/"+t.id,method:"GET"}).then(function(e){t.status=!0})})},getScore:function(){var t=this;this.team_id?f({url:"/players/"+this.team_id,method:"GET"}).then(function(e){t.winner=e.data,t.dialogVisible=!0}):this.$message.error("请选择进球球队")},submitGoal:function(){var t=this,e={match_id:this.id,team_id:this.team_id,section:this.status?1:0,time:this._getCurrentlyTime(),player_id:this.player_id};this.matchInfo.team1.id==this.team_id?e.team=1:e.team=0,f({url:"/match/modify_score",method:"POST",data:e}).then(function(e){t._getMatchInfo(),t.dialogVisible=!1,t.content="进球了",t.onSubmit()})},_getCurrentlyTime:function(){var t=0;return(t=this.matchInfo.status?Date.now()/1e3-this.matchInfo.time+2700:Date.now()/1e3-this.matchInfo.time)<0||t>7200?"00:00":this._formatTime(t)},_formatTime:function(t){return parseInt(t/60)+":"+parseInt(t%60)},_getMatchInfo:function(){var t=this;f({url:"/match/get_match/"+this.id,method:"GET"}).then(function(e){t.matchInfo=e.data,t.status="1"==t.matchInfo.status})}}},nt={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"live"},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{rules:t.rules}},[a("el-form-item",[t._v("\n\t\t\t\t比赛当前状态\n\t\t\t\t"),a("p",[t.status?a("el-button",{attrs:{type:"danger",disabled:""}},[t._v("下半场")]):a("el-button",{attrs:{type:"success",disabled:""}},[t._v("上半场")]),t._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:!t.status,expression:"!status"}],attrs:{type:"primary",icon:"el-icon-check",circle:""},on:{click:t.changeMatchStat}})],1)]),t._v(" "),a("el-radio",{attrs:{label:t.matchInfo.team1.id},model:{value:t.team_id,callback:function(e){t.team_id=e},expression:"team_id"}},[a("img",{staticClass:"player_team_avater",attrs:{src:t.matchInfo.team1.icon}}),t._v("  "+t._s(t.matchInfo.team1.name))]),t._v(" "),a("el-radio",{attrs:{label:t.matchInfo.team2.id},model:{value:t.team_id,callback:function(e){t.team_id=e},expression:"team_id"}},[a("img",{staticClass:"player_team_avater",attrs:{src:t.matchInfo.team2.icon}}),t._v("  "+t._s(t.matchInfo.team2.name))]),t._v(" "),a("el-form-item",[t._v("\n\t\t\t\t比分板\n\t\t\t\t"),a("p",[a("el-button",{attrs:{type:"success",disabled:""}},[t._v(t._s(t.matchInfo.score.team1_score)+" : "+t._s(t.matchInfo.score.team2_score))]),t._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:t.getScore}},[t._v("进球了！")])],1)]),t._v(" "),a("el-form-item",{attrs:{label:"内容",prop:"content"}},[a("el-input",{attrs:{type:"textarea",rows:8,placeholder:"请输入内容"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"图片(可选)"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"http://wx.live.com/index/player/upload","show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload,name:"image"}},[t.imageUrl?a("img",{staticClass:"avatar",staticStyle:{"max-width":"220px"},attrs:{src:t.imageUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("发送")]),t._v(" "),a("el-button",{on:{click:t.clearForm}},[t._v("清空")])],1),t._v(" "),a("el-dialog",{attrs:{title:"选择进球队员",visible:t.dialogVisible,width:"80%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("ul",t._l(t.winner,function(e){return a("li",[a("el-radio",{attrs:{label:e.id},model:{value:t.player_id,callback:function(e){t.player_id=e},expression:"player_id"}},[a("img",{staticClass:"player_team_avater",attrs:{src:e.icon}}),t._v("  "+t._s(e.name))])],1)})),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.submitGoal}},[t._v("确 定")])],1)])],1)},staticRenderFns:[]};var rt=a("VU/8")(it,nt,!1,function(t){a("1IOS")},null,null).exports;s.default.use(c.a);var ot=new c.a({linkActiveClass:"active",routes:[{path:"/",component:x},{path:"/login",component:Q},{path:"/live/:id",component:E,props:!0,children:[{path:"match/:id",component:F,props:!0},{path:"chat/:id",component:j,props:!0},{path:"data",component:G}]},{path:"/admin",component:z,children:[{path:"home",component:st},{path:"live/:id",component:rt,props:!0},{path:"match",component:W},{path:"player",component:Y},{path:"team",component:tt}]}]}),ct={getMatchInfo:function(t,e){var a=t.commit;t.state;f.get("/match/get_match/"+e).then(function(t){a("getMatchInfo",t)})}};s.default.use(S.a);var lt=new S.a.Store({state:{matchInfo:{}},mutations:{getMatchInfo:function(t,e){t.matchInfo=e.data}},actions:ct});a("tvR6"),a("Qbok");s.default.use(o.a),new s.default({el:"#app",router:ot,store:lt,render:function(t){return t(n)}})},PYkp:function(t,e){},Qbok:function(t,e){},WjQm:function(t,e,a){t.exports=a.p+"static/img/fifa.1830c2f.png"},bfTk:function(t,e){},jFtZ:function(t,e){},tcvE:function(t,e){},tvR6:function(t,e){},vBBR:function(t,e){},"wa5/":function(t,e){},zr1K:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.20a01cd5d9525c4fe841.js.map