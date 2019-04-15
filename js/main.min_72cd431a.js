var __reflect=this&&this.__reflect||function(e,t,r){e.__class__=t,r?r.push(t):r=[t],e.__types__=e.__types__?r.concat(e.__types__):r},__extends=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);r.prototype=t.prototype,e.prototype=new r},__awaiter=this&&this.__awaiter||function(e,t,r,o){return new(r||(r=Promise))(function(n,a){function s(e){try{_(o.next(e))}catch(t){a(t)}}function i(e){try{_(o["throw"](e))}catch(t){a(t)}}function _(e){e.done?n(e.value):new r(function(t){t(e.value)}).then(s,i)}_((o=o.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){function r(e){return function(t){return o([e,t])}}function o(r){if(n)throw new TypeError("Generator is already executing.");for(;_;)try{if(n=1,a&&(s=a[2&r[0]?"return":r[0]?"throw":"next"])&&!(s=s.call(a,r[1])).done)return s;switch(a=0,s&&(r=[0,s.value]),r[0]){case 0:case 1:s=r;break;case 4:return _.label++,{value:r[1],done:!1};case 5:_.label++,a=r[1],r=[0];continue;case 7:r=_.ops.pop(),_.trys.pop();continue;default:if(s=_.trys,!(s=s.length>0&&s[s.length-1])&&(6===r[0]||2===r[0])){_=0;continue}if(3===r[0]&&(!s||r[1]>s[0]&&r[1]<s[3])){_.label=r[1];break}if(6===r[0]&&_.label<s[1]){_.label=s[1],s=r;break}if(s&&_.label<s[2]){_.label=s[2],_.ops.push(r);break}s[2]&&_.ops.pop(),_.trys.pop();continue}r=t.call(e,_)}catch(o){r=[6,o],a=0}finally{n=s=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}var n,a,s,i,_={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return i={next:r(0),"throw":r(1),"return":r(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i},BaseDemo=function(e){function t(){var t=e.call(this)||this;return t._loadCount=0,t._resources=[],t._resourceMap={},t.addEventListener(egret.Event.ADDED_TO_STAGE,function(){t._loadResources()},t),t}return __extends(t,e),t.prototype._loadResources=function(){var e=this;this._loadCount=this._resources.length;for(var t=0,r=this._resources;t<r.length;t++){var o=r[t];RES.getResByUrl(o,function(t,r){e._resourceMap[r]=t,e._loadCount--,0===e._loadCount&&(RES.getRes=function(t){return e._resourceMap[t]},e._onStart())},this,o.indexOf(".dbbin")>0?RES.ResourceItem.TYPE_BIN:null)}},t}(egret.DisplayObjectContainer);__reflect(BaseDemo.prototype,"BaseDemo");var GameCoreResManager=function(e){function t(){var t=e.call(this)||this,r=new Array;return t._resources=r,r.push(new AnimRes(1,"resource/characters/role_01/role_01_ske.json","resource/characters/role_01/role_01_tex.json","resource/characters/role_01/role_01_tex.png","Armature","角色01")),r.push(new AnimRes(2,"resource/characters/role_02/role_02_ske.json","resource/characters/role_02/role_02_tex.json","resource/characters/role_02/role_02_tex.png","Armature","角色02")),r.push(new AnimRes(3,"resource/characters/role_03/role_03_ske.json","resource/characters/role_03/role_03_tex.json","resource/characters/role_03/role_03_tex.png","Armature","角色3")),r.push(new AnimRes(4,"resource/characters/skull/skull_ske.json","resource/characters/skull/skull_tex.json","resource/characters/skull/skull_tex.png","Armature","skull")),t}return __extends(t,e),t.prototype.core_init=function(e,t){this._gc=e},t.prototype.load_res=function(){this._load_count=this._resources.length;for(var e=0,t=this._resources;e<t.length;e++){var r=t[e];this._load_ske_res(r)}},t.prototype._load_ske_res=function(e){var t=this;RES.getResByUrl(e.path_ske,function(r,o){e.data_ske=r,t._load_tex_config_res(e)},this,null)},t.prototype._load_tex_config_res=function(e){var t=this;RES.getResByUrl(e.path_tex_config,function(r,o){e.data_tex_config=r,t._load_tex_img_res(e)},this,null)},t.prototype._load_tex_img_res=function(e){var t=this;RES.getResByUrl(e.path_tex_img,function(r,o){e.data_tex_img=r,t._one_res_loaded(e)},this,null)},t.prototype._one_res_loaded=function(e){var t=dragonBones.EgretFactory.factory;t.parseDragonBonesData(e.data_ske),t.parseTextureAtlasData(e.data_tex_config,e.data_tex_img),this._load_count--,this._load_count<=0&&game_core.plate_cover.debug_character_display()},t}(egret.HashObject);__reflect(GameCoreResManager.prototype,"GameCoreResManager");var AnimRes=function(e){function t(t,r,o,n,a,s){void 0===t&&(t=0),void 0===r&&(r=""),void 0===o&&(o=""),void 0===n&&(n=""),void 0===a&&(a=""),void 0===s&&(s="");var i=e.call(this)||this;return i.res_id=t,i.path_ske=r,i.path_tex_config=o,i.path_tex_img=n,i.armature_name=a,i.character_name=s,i}return __extends(t,e),t}(egret.HashObject);__reflect(AnimRes.prototype,"AnimRes");var CharacterSlot=function(){function e(){}return e}();__reflect(CharacterSlot.prototype,"CharacterSlot"),CharacterSlot.MAX_COUNT=3;var CellPoint=function(){function e(){}return e}();__reflect(CellPoint.prototype,"CellPoint");var Cover=function(e){function t(){var t=e.call(this)||this,r=GameCoreConfig.config.cell_w,o=GameCoreConfig.config.cell_h,n=GameCoreConfig.config.row_count,a=GameCoreConfig.config.column_count,s=new Array(n);t._rows=s;var i=n*a;t._points=new Array(i);for(var _=0;n>_;_++){var c=new Array(a);s[_]=c;for(var l=0;a>l;l++){var u=l*r+.5*r,h=_*o+.5*o,p=_*a+l,f=new CellPoint;c[l]=f,f.column=l,f.row=_,f.index=p,t._points[p]=f,f.raw_point_local=new egret.Point(u,h),f.raw_point_global=new egret.Point(0,0),f.d3_point_global=new egret.Point(0,0),f.d3_point_local=new egret.Point(0,0),f.d3_scale=new egret.Point}}return t}return __extends(t,e),t.prototype.debug_character_display=function(){for(var e=GameCoreConfig.config.row_count,t=this._points.length,r=0;t>r;r++){var o=this._points[r];if(o.row!=e-1){var n=CharacterSlot.MAX_COUNT;o.slots=new Array(n);for(var a=0;n>a;a++){var s=new CharacterSlot;o.slots[a]=s,s.cell_index=r,s.slot_index=a,s.is_active=!0,this.debug_slot_init(o,s)}this.update_cell_slots_pos(o)}}},t.prototype.debug_slot_init=function(e,t){var r=Math.floor((t.cell_index+t.slot_index)%4);console.log(r);var o=game_core._res_m._resources[r],n=dragonBones.EgretFactory.factory,a=n.buildArmatureDisplay(o.armature_name,o.character_name);t.display=a,this.addChild(a),a.animation.play("攻击")},t.prototype.update_pp_param=function(e){for(var t=this._points.length,r=0;t>r;r++){var o=this._points[r];this.localToGlobal(o.raw_point_local.x,o.raw_point_local.y,o.raw_point_global),e.ppc.convert_2_to_3(o.raw_point_global,o.d3_point_global,o.d3_scale),this.globalToLocal(o.d3_point_global.x,o.d3_point_global.y,o.d3_point_local),o.mark&&(o.mark.x=o.d3_point_local.x,o.mark.y=o.d3_point_local.y),o.debug_bound&&(o.debug_bound.x=o.d3_point_local.x,o.debug_bound.y=o.d3_point_local.y,o.debug_bound.scaleX=o.d3_scale.x,o.debug_bound.scaleY=o.d3_scale.y),this.update_cell_slots_pos(o)}},t.prototype.update_cell_slots_pos=function(e){if(e.slots)for(var t=e.slots.length,r=0;t>r;r++){var o=e.slots[r],n=r-1;o.display.x=e.d3_point_local.x,o.display.y=e.d3_point_local.y+50*n,o.display.scaleX=.5*e.d3_scale.x,o.display.scaleY=.5*e.d3_scale.y}},t}(egret.DisplayObjectContainer);__reflect(Cover.prototype,"Cover");var GameCore=function(e){function t(){var t=e.call(this)||this;return t._inited=!1,t.ppc=new PerspectiveCore,t._pan_handler=new GameCorePanHandler,t._res_m=new GameCoreResManager,t}return __extends(t,e),t.prototype.core_init=function(e){this.ppc.core_init(e),this._pan_handler.core_init(this,e),this._res_m.core_init(this,e),this._inited=!0},t.prototype.register_views=function(e,t){this.plate_back=e,this.plate_cover=t},t.prototype.swap_scale_x=function(){this._inited&&this._pan_handler.swap_anim()},t.prototype.ci_perspective_needs_update=function(){this._inited&&(this.plate_cover.update_pp_param(this),this.plate_back.update_pp_param(this))},t}(egret.HashObject);__reflect(GameCore.prototype,"GameCore");var GameCoreConfig=function(e){function t(){var t=e.call(this)||this;return t.row_count=10,t.column_count=5,t.cell_w=204,t.cell_h=209*1.2,t.canvas_fixed_w=512,t.canvas_fixed_h=1024,t.canvas_x=0,t.canvas_y=0,t.canvas_scale_x=0,t.canvas_scale_y=0,t.horizontal_fixed=!1,t.total_w=t.column_count*t.cell_w,t.total_h=t.row_count*t.cell_h,t.element_count=t.column_count*t.row_count,t.canvas_x=.5*t.total_w,t.canvas_scale_x=t.total_w/t.canvas_fixed_w,t.canvas_y=.5*-t.total_h,t.canvas_scale_y=t.total_h/t.canvas_fixed_h,t}return __extends(t,e),t}(egret.HashObject);__reflect(GameCoreConfig.prototype,"GameCoreConfig"),GameCoreConfig.config=new GameCoreConfig;var GameCorePanHandler=function(e){function t(){var t=e.call(this)||this;return t._scale_is_anim=!1,t._anim_count=20,t._anim_cursor=0,t._cur_ox=0,t._start_ox=0,t._start_mouse_x=0,t._cur_oy=0,t._start_oy=0,t._start_mouse_y=0,t._cur_ox=0,t._cur_oy=0,t}return __extends(t,e),t.prototype.core_init=function(e,t){this._gc=e,t.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.mouse_down,this),t.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.mouse_move,this),t.addEventListener(egret.TouchEvent.TOUCH_END,this.mouse_up,this),t.addEventListener(egret.Event.ENTER_FRAME,this._handle_update,this)},t.prototype.swap_anim=function(){this._scale_is_anim||(this._anim_cursor=0,this._cur_ox=0,GameCoreConfig.config.horizontal_fixed=!GameCoreConfig.config.horizontal_fixed,this._start_scale=this._gc.ppc._shader_last_scale,this._end_scale=GameCoreConfig.config.horizontal_fixed?.7:1,this._scale_step=this._end_scale-this._start_scale,this._start_offset_x=this._gc.ppc._shader_offset_x,this._end_offset_x=0,this._offsetx_step=this._end_offset_x-this._start_offset_x,this._scale_is_anim=!0)},t.prototype._handle_update=function(e){if(this._scale_is_anim){var t=1e3*this._anim_cursor/this._anim_count/1e3,r=this._start_scale+t*this._scale_step,o=this._start_offset_x+t*this._offsetx_step;this._gc.ppc._shader_offset_x=o,this._gc.ppc._shader_last_scale=r,this._gc.ci_perspective_needs_update(),this._anim_cursor++,this._anim_cursor>=this._anim_count&&(this._scale_is_anim=!1)}},t.prototype.mouse_down=function(e){this._scale_is_anim||(this._start_mouse_x=e.stageX,this._start_ox=this._cur_ox,this._start_mouse_y=e.stageY,this._start_oy=this._cur_oy)},t.prototype.mouse_move=function(e){if(!this._scale_is_anim){if(GameCoreConfig.config.horizontal_fixed)this._cur_ox=0;else{var t=e.stageX-this._start_mouse_x;this._cur_ox=this._start_ox+.002*t}var r=e.stageY-this._start_mouse_y;this._cur_oy=this._start_oy-.002*r,this._gc.ppc._shader_offset_x=this._cur_ox,this._gc.ppc._shader_offset_y=this._cur_oy,this._gc.ci_perspective_needs_update()}},t.prototype.mouse_up=function(e){},t}(egret.HashObject);__reflect(GameCorePanHandler.prototype,"GameCorePanHandler");var AssetAdapter=function(){function e(){}return e.prototype.getAsset=function(e,t,r){function o(o){t.call(r,o,e)}if(RES.hasRes(e)){var n=RES.getRes(e);n?o(n):RES.getResAsync(e,o,this)}else RES.getResByUrl(e,o,this,RES.ResourceItem.TYPE_IMAGE)},e}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var LoadingUI=function(e){function t(){var t=e.call(this)||this;return t.createView(),t}return __extends(t,e),t.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},t.prototype.onProgress=function(e,t){this.textField.text="Loading..."+e+"/"+t},t}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var game_core,Main=function(e){function t(){var t=e.call(this)||this;return game_core=new GameCore,t.addEventListener(egret.Event.ADDED_TO_STAGE,t.added_to_stage,t),t.addEventListener(egret.Event.RESIZE,t.reisze_handler,t),t}return __extends(t,e),t.prototype.added_to_stage=function(e){},t.prototype.reisze_handler=function(e){var t=this.stage.stageWidth,r=this.stage.stageHeight,o=GameCoreConfig.config.total_w,n=GameCoreConfig.config.total_h,a=.5*(t-o);console.log("========= window size =========="),console.log(t+" - "+r),this.cell_canvas&&(this.cell_canvas.x=a,this.cell_canvas.y=r-n-10),this.cover&&(this.cover.x=a,this.cover.y=r-n-10)},t.prototype.createChildren=function(){e.prototype.createChildren.call(this),egret.lifecycle.addLifecycleListener(function(e){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var t=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",t),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()["catch"](function(e){console.log(e)})},t.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(r){switch(r.label){case 0:return[4,this.loadResource()];case 1:return r.sent(),this.createGameScene(),[4,RES.getResAsync("description_json")];case 2:return e=r.sent(),this.startAnimation(e),[4,platform.login()];case 3:return r.sent(),[4,platform.getUserInfo()];case 4:return t=r.sent(),console.log(t),[2]}})})},t.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(r){switch(r.label){case 0:return r.trys.push([0,4,,5]),e=new LoadingUI,this.stage.addChild(e),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return r.sent(),[4,this.loadTheme()];case 2:return r.sent(),[4,RES.loadGroup("preload",0,e)];case 3:return r.sent(),this.stage.removeChild(e),[3,5];case 4:return t=r.sent(),console.error(t),[3,5];case 5:return[2]}})})},t.prototype.loadTheme=function(){var e=this;return new Promise(function(t,r){var o=new eui.Theme("resource/default.thm.json",e.stage);o.addEventListener(eui.UIEvent.COMPLETE,function(){t()},e)})},t.prototype.createGameScene=function(){var e=this,t=new eui.Image("game_bg_jpg");this.addChild(t),t.percentWidth=100,t.percentHeight=100,this.cell_canvas=new Role2,this.addChild(this.cell_canvas);var r=new Cover;this.addChild(r),this.cover=r,this.plate=new PlateView,this.plate.visible=!1,this.addChildAt(this.plate,this.getChildIndex(this.cover)),this.reisze_handler(null),game_core.register_views(this.cell_canvas,this.cover),setTimeout(function(){game_core.core_init(e.stage),e.render_tt(e.plate),game_core.ci_perspective_needs_update(),game_core._res_m.load_res()},1e3);var o=new eui.Button;o.label="最远",o.left=20,o.top=20,this.addChild(o),o.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btn2_handler,this)},t.prototype.onButtonClick=function(e){this.cover.debug_character_display()},t.prototype.btn2_handler=function(e){game_core.swap_scale_x()},t.prototype.render_tt=function(e){var t=GameCoreConfig.config.total_w,r=GameCoreConfig.config.total_h;this._cur_rt&&(this._cur_rt.dispose(),this._cur_rt=null),this._cur_rt=new egret.RenderTexture,this._cur_rt.disposeBitmapData=!0,this._cur_rt.drawToTexture(e,new egret.Rectangle(0,0,t,r)),this.cell_canvas.replace_texture(this._cur_rt)},t.prototype.createBitmapByName=function(e){var t=new egret.Bitmap,r=RES.getRes(e);return t.texture=r,t},t.prototype.startAnimation=function(e){var t=this,r=new egret.HtmlTextParser,o=e.map(function(e){return r.parse(e)}),n=this.textfield,a=-1,s=function(){a++,a>=o.length&&(a=0);var e=o[a];n.textFlow=e;var r=egret.Tween.get(n);r.to({alpha:1},200),r.wait(2e3),r.to({alpha:0},200),r.call(s,t)};s()},t}(eui.UILayer);__reflect(Main.prototype,"Main");var PerspectiveCore=function(e){function t(){var t=e.call(this)||this;return t._shader_offset_x=0,t._shader_offset_y=0,t._shader_last_scale=1,t}return __extends(t,e),t.prototype.core_init=function(e){this._stage=e},t.prototype.convert_2_to_3=function(e,t,r){var o=.2,n=.5,a=this._stage.stageWidth,s=this._stage.stageHeight,i=2*e.x/a-1,_=2*-e.y/s+1,c=i*this._shader_last_scale,l=_*this._shader_last_scale+this._shader_last_scale-1,u=.5*(l+1)*o+.1*this._shader_offset_y,h=c+this._shader_offset_x,p=l+this._shader_offset_y,f=h*n/(u+n),d=p*n/(u+n);r.x=this._shader_last_scale*n/(u+n),r.y=r.x,t.x=(f+1)*a*.5,t.y=-(d-1)*s*.5},t.prototype.convert_3_to_2=function(){},t}(egret.HashObject);__reflect(PerspectiveCore.prototype,"PerspectiveCore");var PlateView=function(e){function t(){var t=e.call(this)||this;t._fr_cursor=0,t._sign=!1,t.imgs=new Array(GameCoreConfig.config.element_count);for(var r=GameCoreConfig.config.cell_w,o=GameCoreConfig.config.cell_h,n=GameCoreConfig.config.row_count,a=GameCoreConfig.config.column_count,s=GameCoreConfig.config.total_w,i=GameCoreConfig.config.total_h,_=10,c=0;n-1>c;c++)for(var l=0;a>l;l++){var u=l*r,h=c*o,p=c*a+l,f=new eui.Image;t.imgs[p]=f,f.width=r-2*_,f.height=o-2*_,f.x=u+_,f.y=h+_,t.addChild(f),p%7==0?f.source="room_battle_png":p%7==2?f.source="room_f_png":f.source="room_blank_png"}var d=3*r,g=187*d/546,m=new eui.Image;return m.source="room_boss_png",m.width=d,m.height=g,m.x=.5*(s-d),m.y=i-o,t.addChild(m),t}return __extends(t,e),t.prototype.update=function(){if(this._fr_cursor++,60==this._fr_cursor){this._sign=!this._sign;this.imgs.length;this.imgs[0].source=this._sign?"room_f_png":"room_battle_png",this._fr_cursor=0}},t}(egret.DisplayObjectContainer);__reflect(PlateView.prototype,"PlateView");var DebugPlatform=function(){function e(){}return e.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,{nickName:"username"}]})})},e.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2]})})},e}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var Role2=function(e){function t(){var t=e.call(this)||this;return t._resources.push("resource/square/square_ske.json","resource/square/square_tex.json","resource/square/square_tex.png"),t}return __extends(t,e),t.prototype.update_pp_param=function(e){this._customFilter1.uniforms.offset_x=e.ppc._shader_offset_x,this._customFilter1.uniforms.offset_y=e.ppc._shader_offset_y,this._customFilter1.uniforms.last_scale=e.ppc._shader_last_scale},t.prototype.replace_texture=function(e){this._dragon_display&&this._dragon_display.armature.replaceTexture(e)},t.prototype._onStart=function(){var e=(GameCoreConfig.config.cell_w,GameCoreConfig.config.cell_h,GameCoreConfig.config.row_count,GameCoreConfig.config.column_count,GameCoreConfig.config.total_w,GameCoreConfig.config.total_h,dragonBones.EgretFactory.factory);e.parseDragonBonesData(RES.getRes("resource/square/square_ske.json")),e.parseTextureAtlasData(RES.getRes("resource/square/square_tex.json"),RES.getRes("resource/square/square_tex.png"));var t=e.buildArmatureDisplay("Armature","square");this.addChild(t),t.x=GameCoreConfig.config.canvas_x,t.scaleX=GameCoreConfig.config.canvas_scale_x,t.y=GameCoreConfig.config.canvas_y,t.scaleY=GameCoreConfig.config.canvas_scale_y,this._dragon_display=t;var r="#define M_PI 3.1415926535897932384626433832795\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord; \n \nconst float near = 0.5;\nconst vec2 center = vec2(-1.0, 1.0);\n \nuniform float last_scale;\nuniform float offset_x;\nuniform float offset_y;\n \nuniform vec2 projectionVector;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\n \nfloat rand(vec2 co){\n    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\n\nvoid main(void) {\n\n    vec2 raw_pos =  (aVertexPosition / projectionVector) + center;\n   \n    //======= 先处理， 处理scale\n    raw_pos.x = raw_pos.x * last_scale;\n    raw_pos.y = raw_pos.y * last_scale + last_scale - 1.0;\n     \n\n    float rx = raw_pos.x;\n    float ry = raw_pos.y;\n  \n    //根据 ry [-1, 1] 映射 z 值 到  [0, m] 上 ，近平面为 x-o-y平面\n    const float m = 0.2;\n    float rz = (ry + 1.0) * 0.5 * m + offset_y * 0.1;\n  \n    float input_x = rx + offset_x; \n    float input_y = ry + offset_y;\n\n    float res_x =  (input_x * near) / (rz + near);\n    float res_y =  (input_y * near) / (rz + near);\n  \n    vec2 normal_pos = vec2(res_x, res_y);\n  \n    vec2 color_pos = aTextureCoord;  \n    color_pos.x = rx;\n    color_pos.y = ry;\n \n    gl_Position = vec4( normal_pos, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n    vColor = vec4(color_pos.x, color_pos.y, 0.0,1.0);\n    }\n",o="precision lowp float;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nuniform sampler2D uSampler;\n\nuniform float customUniform;\n\nvoid main(void) { \n     \n    vec4 fg = texture2D(uSampler, vTextureCoord); \n    // fg += (vColor * 0.5);\n    gl_FragColor = fg;\n\n    // gl_FragColor = vColor;\n\n    // gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);\n\n}",n=new egret.CustomFilter(r,o,{offset_x:0,offset_y:0,last_scale:1});t.filters=[n],this._customFilter1=n},t}(BaseDemo);__reflect(Role2.prototype,"Role2");var ThemeAdapter=function(){function e(){}return e.prototype.getTheme=function(e,t,r,o){function n(e){t.call(o,e)}function a(t){t.resItem.url==e&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,a,null),r.call(o))}var s=this;if("undefined"!=typeof generateEUI)egret.callLater(function(){t.call(o,generateEUI)},this);else if("undefined"!=typeof generateEUI2)RES.getResByUrl("resource/gameEui.json",function(e,r){window.JSONParseClass.setData(e),egret.callLater(function(){t.call(o,generateEUI2)},s)},this,RES.ResourceItem.TYPE_JSON);else if("undefined"!=typeof generateJSON)if(e.indexOf(".exml")>-1){var i=e.split("/");i.pop();var _=i.join("/")+"_EUI.json";generateJSON.paths[e]?egret.callLater(function(){t.call(o,generateJSON.paths[e])},this):RES.getResByUrl(_,function(r){window.JSONParseClass.setData(r),egret.callLater(function(){t.call(o,generateJSON.paths[e])},s)},this,RES.ResourceItem.TYPE_JSON)}else egret.callLater(function(){t.call(o,generateJSON)},this);else RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,a,null),RES.getResByUrl(e,n,this,RES.ResourceItem.TYPE_TEXT)},e}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);