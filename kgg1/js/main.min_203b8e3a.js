var extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},__extends=function(e,t){function n(){this.constructor=e}extendStatics(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;r>n;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},__rest=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},__decorate=function(e,t,n,r){var i,o=arguments.length,a=3>o?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(3>o?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},__param=function(e,t){return function(n,r){t(n,r,e)}},__metadata=function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0},__awaiter=function(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,o){function a(e){try{c(r.next(e))}catch(t){o(t)}}function s(e){try{c(r["throw"](e))}catch(t){o(t)}}function c(e){e.done?n(e.value):i(e.value).then(a,s)}c((r=r.apply(e,t||[])).next())})},__generator=function(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(i)throw new TypeError("Generator is already executing.");for(;c;)try{if(i=1,o&&(a=2&n[0]?o["return"]:n[0]?o["throw"]||((a=o["return"])&&a.call(o),0):o.next)&&!(a=a.call(o,n[1])).done)return a;switch(o=0,a&&(n=[2&n[0],a.value]),n[0]){case 0:case 1:a=n;break;case 4:return c.label++,{value:n[1],done:!1};case 5:c.label++,o=n[1],n=[0];continue;case 7:n=c.ops.pop(),c.trys.pop();continue;default:if(a=c.trys,!(a=a.length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){c=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){c.label=n[1];break}if(6===n[0]&&c.label<a[1]){c.label=a[1],a=n;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(n);break}a[2]&&c.ops.pop(),c.trys.pop();continue}n=t.call(e,c)}catch(r){n=[6,r],o=0}finally{i=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var i,o,a,s,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:n(0),"throw":n(1),"return":n(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},__exportStar=function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||__createBinding(t,e,n)},__createBinding=Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]},__values=function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},__read=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),a=[];try{for(;(void 0===t||t-->0)&&!(r=o.next()).done;)a.push(r.value)}catch(s){i={error:s}}finally{try{r&&!r.done&&(n=o["return"])&&n.call(o)}finally{if(i)throw i.error}}return a},__spread=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(__read(arguments[t]));return e},__spreadArrays=function(){for(var e=0,t=0,n=arguments.length;n>t;t++)e+=arguments[t].length;for(var r=Array(e),i=0,t=0;n>t;t++)for(var o=arguments[t],a=0,s=o.length;s>a;a++,i++)r[i]=o[a];return r},__await=function(e){return this instanceof __await?(this.v=e,this):new __await(e)},__asyncGenerator=function(e,t,n){function r(e){l[e]&&(u[e]=function(t){return new Promise(function(n,r){p.push([e,t,n,r])>1||i(e,t)})})}function i(e,t){try{o(l[e](t))}catch(n){c(p[0][3],n)}}function o(e){e.value instanceof __await?Promise.resolve(e.value.v).then(a,s):c(p[0][2],e)}function a(e){i("next",e)}function s(e){i("throw",e)}function c(e,t){e(t),p.shift(),p.length&&i(p[0][0],p[0][1])}if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var u,l=n.apply(e,t||[]),p=[];return u={},r("next"),r("throw"),r("return"),u[Symbol.asyncIterator]=function(){return this},u},__asyncDelegator=function(e){function t(t,i){n[t]=e[t]?function(n){return(r=!r)?{value:__await(e[t](n)),done:"return"===t}:i?i(n):n}:i}var n,r;return n={},t("next"),t("throw",function(e){throw e}),t("return"),n[Symbol.iterator]=function(){return this},n},__asyncValues=function(e){function t(t){r[t]=e[t]&&function(r){return new Promise(function(i,o){r=e[t](r),n(i,o,r.done,r.value)})}}function n(e,t,n,r){Promise.resolve(r).then(function(t){e({value:t,done:n})},t)}if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,i=e[Symbol.asyncIterator];return i?i.call(e):(e="function"==typeof __values?__values(e):e[Symbol.iterator](),r={},t("next"),t("throw"),t("return"),r[Symbol.asyncIterator]=function(){return this},r)},__makeTemplateObject=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e["default"]=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&__createBinding(t,e,n);return __setModuleDefault(t,e),t},__importDefault=function(e){return e&&e.__esModule?e:{"default":e}},__classPrivateFieldGet=function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)},__classPrivateFieldSet=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n},__reflect=function(e,t,n){e.__class__=t,n?n.push(t):n=[t],e.__types__=e.__types__?n.concat(e.__types__):n};!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(t){return e[t]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){n(1),n(2),n(0),n(3),n(4),n(5),n(6),n(7),n(8),n(9);var r=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.createChildren=function(){e.prototype.createChildren.call(this),egret.lifecycle.addLifecycleListener(function(e){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var t=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",t),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()["catch"](function(e){console.log(e)})},t.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(n){switch(n.label){case 0:return[4,this.loadResource()];case 1:return n.sent(),this.createGameScene(),[4,RES.getResAsync("description_json")];case 2:return e=n.sent(),[4,platform.login()];case 3:return n.sent(),[4,platform.getUserInfo()];case 4:return t=n.sent(),console.log(t),[2]}})})},t.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,4,,5]),e=new LoadingUI,this.stage.addChild(e),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return n.sent(),[4,this.loadTheme()];case 2:return n.sent(),[4,RES.loadGroup("preload",0,e)];case 3:return n.sent(),this.stage.removeChild(e),[3,5];case 4:return t=n.sent(),console.error(t),[3,5];case 5:return[2]}})})},t.prototype.loadTheme=function(){var e=this;return new Promise(function(t,n){var r=new eui.Theme("resource/default.thm.json",e.stage);r.addEventListener(eui.UIEvent.COMPLETE,function(){t({})},e)})},t.prototype.createGameScene=function(){var e=new Game1Page;this.addChild(e),e.percentWidth=100,e.percentHeight=100;var t=new eui.Button;t.label="debug",t.right=10,t.top=10,this.addChild(t),t.visible=!1,t.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onButtonClick,this)},t.prototype.createBitmapByName=function(e){var t=new egret.Bitmap,n=RES.getRes(e);return t.texture=n,t},t.prototype.onButtonClick=function(e){},t}(eui.UILayer);window.Main=r,__reflect(r.prototype,"Main",[])},function(e,t){var n=function(){function e(){}return e.prototype.getAsset=function(e,t,n){function r(r){t.call(n,r,e)}if(RES.hasRes(e)){var i=RES.getRes(e);i?r(i):RES.getResAsync(e,r,this)}else RES.getResByUrl(e,r,this,RES.ResourceItem.TYPE_IMAGE)},e}();window.AssetAdapter=n,__reflect(n.prototype,"AssetAdapter",["eui.IAssetAdapter"])},function(e,t){var n=function(e){function t(){var t=e.call(this)||this;return t.createView(),t}return __extends(t,e),t.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},t.prototype.onProgress=function(e,t){this.textField.text="Loading..."+e+"/"+t},t}(egret.Sprite);window.LoadingUI=n,__reflect(n.prototype,"LoadingUI",["RES.PromiseTaskReporter"])},function(e,t){var n=function(){function e(){}return e.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,{nickName:"username"}]})})},e.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2]})})},e}();window.DebugPlatform=n,__reflect(n.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new n)},function(e,t){var n=function(){function e(){}return e.prototype.getTheme=function(e,t,n,r){function i(e){t.call(r,e)}function o(t){t.resItem.url==e&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,o,null),n.call(r))}var a=this;if("undefined"!=typeof generateEUI)egret.callLater(function(){t.call(r,generateEUI)},this);else if("undefined"!=typeof generateEUI2)RES.getResByUrl("resource/gameEui.json",function(e,n){window.JSONParseClass.setData(e),egret.callLater(function(){t.call(r,generateEUI2)},a)},this,RES.ResourceItem.TYPE_JSON);else if("undefined"!=typeof generateJSON)if(e.indexOf(".exml")>-1){var s=e.replace(".exml","_EUI.json");generateJSON.paths[e]?egret.callLater(function(){t.call(r,generateJSON.paths[e])},this):RES.getResByUrl(s,function(n){window.JSONParseClass.setData(n),egret.callLater(function(){t.call(r,generateJSON.paths[e])},a)},this,RES.ResourceItem.TYPE_JSON)}else egret.callLater(function(){t.call(r,generateJSON)},this);else RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,o,null),RES.getResByUrl(e,i,this,RES.ResourceItem.TYPE_TEXT)},e}();window.ThemeAdapter=n,__reflect(n.prototype,"ThemeAdapter",["eui.IThemeAdapter"])},function(e,t){var n=function(e){function t(){var t=e.call(this)||this;return t.touchEnabled=!1,t.bg_img=new eui.Image,t.addChild(t.bg_img),t.bg_img.source="snow_png",t.bg_img.x=-162,t.bg_img.y=-166.5,t.bg_img.width=324,t.bg_img.height=333,t.bg_img.scaleX=1,t.bg_img.scaleY=1,setTimeout(function(){t.scaleup()},500),t}return __extends(t,e),t.prototype.$hitTest=function(e,t){return null},t.prototype.scaleup=function(){var e=this;egret.Tween.get(this).to({scaleX:1.5,scaleY:1.5},1500,egret.Ease.circOut).call(function(){e.scaledown()})},t.prototype.scaledown=function(){var e=this;egret.Tween.get(this).to({scaleX:1,scaleY:1},625,egret.Ease.circIn).call(function(){e.scaleup()})},t}(eui.Group);window.JumpSnow=n,__reflect(n.prototype,"JumpSnow",[])},function(e,t){var n=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.END="END",t}(egret.Event);window.ImgSequencePlayerEvent=n,__reflect(n.prototype,"ImgSequencePlayerEvent",[]);var r=function(e){function t(){var t=e.call(this)||this;return t._img_count=0,t._anim_count=0,t._frame_cursor=0,t._play_cursor=0,t._anim_count_cursor=0,t._frame_interval=3,t._bmp=new eui.Image,t.addChild(t._bmp),t._bmp.percentWidth=100,t._bmp.percentHeight=100,t._bmp.fillMode=egret.BitmapFillMode.SCALE,t._play_cursor=-1,t._frame_interval=1,t}return __extends(t,e),t.prototype.destroy=function(){this._is_destroyed||(this.removeEventListener(egret.Event.ENTER_FRAME,this._update,this),this.stop_play(),this._texts=null,this.removeChild(this._bmp),this._bmp=null,this._is_destroyed=!0)},t.prototype.player_init=function(e,t,n){this._texts=new Array(t),this._img_count=t,this._anim_count=n,this.refresh_img(e,t),this.addEventListener(egret.Event.ENTER_FRAME,this._update,this)},t.prototype._get_full_key=function(e,t){var n=39-t,r="";r=10>n?"0"+n:""+n;var i="g1bg_00"+r+"_Layer "+(t+1)+"_jpg";return i},t.prototype.refresh_img=function(e,t){if(!this._is_destroyed&&this._texts)for(var n=0;t>n;n++){var r=this._get_full_key(e,n),i=RES.getRes(r);i?this._texts[n]=i:this._texts[n]=null}},t.prototype.start_play=function(){if(this._frame_cursor=0,this._play_cursor=0,this._anim_count_cursor=0,this.visible=!0,this._texts&&this._texts.length>0&&this._bmp){var e=this._texts[0];this._bmp.texture=e}},t.prototype.stop_play=function(){this._play_cursor=-1},t.prototype._update=function(e){if(!(this._is_destroyed||this._play_cursor<0||(this._frame_cursor++,this._frame_cursor%this._frame_interval!=0))){var t=this._texts[this._play_cursor];this._bmp.texture=t,this._play_cursor++,this._play_cursor>this._img_count-1&&(this._play_cursor=0,this._anim_count_cursor++,this._anim_count>0&&this._anim_count_cursor>=this._anim_count&&(this._play_cursor=-1,this.dispatchEvent(new n(n.END)),this.visible=!1))}},t.prototype.modify_speed=function(e){0>e||(this._frame_interval=e)},t}(eui.Group);window.ImgSequencePlayer=r,__reflect(r.prototype,"ImgSequencePlayer",[])},function(e,t){var n=function(e){function t(){var t=e.call(this)||this;return t.set_bg_color(426495,0),t.page1=new Game1Page1(function(){console.log("goto page 2"),t.page1.Hide(),t.page2.Show()}),t.addChild(t.page1),t.page1.percentWidth=100,t.page1.percentHeight=100,t.page2=new Game1Page2(function(){console.log("goto page 1"),t.page1.Show(),t.page2.Hide()}),t.addChild(t.page2),t.page2.percentWidth=100,t.page2.percentHeight=100,t.page2.visible=!1,t}return __extends(t,e),t.prototype.set_bg_color=function(e,t){void 0===t&&(t=1);var n=new eui.Rect;return this.addChildAt(n,0),n.fillColor=e,n.percentWidth=100,n.percentHeight=100,n.alpha=t,n},t}(eui.Group);window.Game1Page=n,__reflect(n.prototype,"Game1Page",[])},function(e,t){var n=function(e){function t(t){var n=e.call(this)||this;n.sound_inited=!1,n.sound=RES.getRes("9_m4a"),n.addEventListener(egret.TouchEvent.TOUCH_BEGIN,n._handle_global_click,n);var r=new ImgSequencePlayer;n.addChild(r),r.player_init("",40,0),setTimeout(function(){r.start_play()},1),n.bumping=new JumpSnow,n.addChild(n.bumping),n.bumping.left=718,n.bumping.top=239.5;var i=new eui.Rect;return i.left=600,i.top=54,i.width=277,i.height=361,i.fillColor=589605,i.alpha=0,n.addChild(i),i.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){t()},n),n}return __extends(t,e),t.prototype.Hide=function(){this.visible=!1,this.channel&&(this.channel.stop(),this.channel=null)},t.prototype.Show=function(){this.visible=!0,this._play_bgm()},t.prototype._handle_global_click=function(e){this.sound_inited||this._play_bgm()},t.prototype._play_bgm=function(){user_touched&&(this.sound_inited=!0,this.channel||(this.channel=this.sound.play(0)))},t}(eui.Group);window.Game1Page1=n,__reflect(n.prototype,"Game1Page1",[])},function(e,t){var n=function(e){function t(t){var n=e.call(this)||this;n.pps=[],n.ccs=[],n.circle_width=90,n.circle_radius=45,n.progress_index=-1,n.sound_inited=!1,n.sound=RES.getRes("snow_m4a"),n.bg_img=new eui.Image(""),n.addChild(n.bg_img),n.bg_img.source="g1p1_jpg",n.bg_img.percentWidth=100,n.bg_img.percentHeight=100,n.bg_img.addEventListener(egret.TouchEvent.TOUCH_BEGIN,n._handle_global_click,n);var r=new eui.Rect;r.left=428,r.top=283,r.width=212,r.height=150,r.fillColor=589605,r.alpha=0,n.addChild(r),r.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){n._handle_cal()},n);var i=new eui.Image;i.left=100,i.top=64,i.width=80,i.height=80,i.source="btn_return_png",i.alpha=1,n.addChild(i),i.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){t()},n);var o=new eui.Image;return o.right=100,o.top=64,o.width=80,o.height=80,o.source="btn_clear_png",n.addChild(o),o.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){console.log("clear button"),n.reset_all()},n),n.createMarks(),n.createCircles(),n}return __extends(t,e),t.prototype.createMarks=function(){this.p1=this.CreateSingleMark(),this.p1.x=161,this.p1.y=658,this.pps.push(this.p1),this.p2=this.CreateSingleMark(),this.p2.x=806,this.p2.y=619,this.pps.push(this.p2),this.p3=this.CreateSingleMark(),this.p3.x=425,this.p3.y=502,this.pps.push(this.p3)},t.prototype.CreateSingleMark=function(){var e=new eui.Rect;return this.addChild(e),e.width=10,e.height=10,e.fillColor=65280,e},t.prototype.createCircles=function(){this.c1=this.CreateSingleCircle(),this.ccs.push(this.c1),this.c2=this.CreateSingleCircle(),this.ccs.push(this.c2),this.c3=this.CreateSingleCircle(),this.ccs.push(this.c3)},t.prototype.CreateSingleCircle=function(){var e=new eui.Image;return this.addChild(e),e.width=this.circle_width,e.height=this.circle_width,e.source="red_cycle_png",e.visible=!1,e},t.prototype.reset_all=function(){this.progress_index=-1,this.c1.visible=!1,this.c2.visible=!1,this.c3.visible=!1},t.prototype._handle_global_click=function(e){if(this.sound_inited||this._play_bgm(),this.progress_index>=2)return void console.log("---- 已经有3个标记了");this.progress_index++;var t=e.stageX,n=e.stageY;this.ccs[this.progress_index].visible=!0,this.ccs[this.progress_index].x=t-this.circle_radius,this.ccs[this.progress_index].y=n-this.circle_radius},t.prototype._contain_any_point=function(e){for(var t=new egret.Rectangle(e.x,e.y,this.circle_width,this.circle_width),n=0;3>n;n++){var r=new egret.Point(this.pps[n].x,this.pps[n].y);if(t.containsPoint(r))return!0}return!1},t.prototype._contain_all=function(){for(var e=0;3>e;e++){var t=this._contain_any_point(this.ccs[e]);if(!t)return alert("没有标记足全部的蒲公英"),!1}return!0},t.prototype._handle_cal=function(){return this.progress_index<2?void alert("标记不足3个"):void(this._contain_all()&&alert("完成任务"))},t.prototype.Hide=function(){this.visible=!1,this.channel&&(this.channel.stop(),this.channel=null)},t.prototype.Show=function(){this.visible=!0,this._play_bgm()},t.prototype._play_bgm=function(){user_touched&&(this.sound_inited=!0,this.channel||(this.channel=this.sound.play(0)))},t}(eui.Group);window.Game1Page2=n,__reflect(n.prototype,"Game1Page2",[])}]);