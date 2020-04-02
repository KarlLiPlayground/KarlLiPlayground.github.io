var __reflect=this&&this.__reflect||function(t,e,i){t.__class__=e,i?i.push(e):i=[e],t.__types__=t.__types__?i.concat(t.__types__):i},__extends=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);i.prototype=e.prototype,t.prototype=new i},__awaiter=this&&this.__awaiter||function(t,e,i,r){return new(i||(i=Promise))(function(n,o){function s(t){try{_(r.next(t))}catch(e){o(e)}}function a(t){try{_(r["throw"](t))}catch(e){o(e)}}function _(t){t.done?n(t.value):new i(function(e){e(t.value)}).then(s,a)}_((r=r.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){function i(t){return function(e){return r([t,e])}}function r(i){if(n)throw new TypeError("Generator is already executing.");for(;_;)try{if(n=1,o&&(s=o[2&i[0]?"return":i[0]?"throw":"next"])&&!(s=s.call(o,i[1])).done)return s;switch(o=0,s&&(i=[0,s.value]),i[0]){case 0:case 1:s=i;break;case 4:return _.label++,{value:i[1],done:!1};case 5:_.label++,o=i[1],i=[0];continue;case 7:i=_.ops.pop(),_.trys.pop();continue;default:if(s=_.trys,!(s=s.length>0&&s[s.length-1])&&(6===i[0]||2===i[0])){_=0;continue}if(3===i[0]&&(!s||i[1]>s[0]&&i[1]<s[3])){_.label=i[1];break}if(6===i[0]&&_.label<s[1]){_.label=s[1],s=i;break}if(s&&_.label<s[2]){_.label=s[2],_.ops.push(i);break}s[2]&&_.ops.pop(),_.trys.pop();continue}i=e.call(t,_)}catch(r){i=[6,r],o=0}finally{n=s=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}var n,o,s,a,_={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:i(0),"throw":i(1),"return":i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a},CarEntity=function(){function t(){this.is_destroyed=!1}return t.prototype._status_init=function(t){this.s=new CarStatus,this.s.sinit(t)},t.prototype.car_init=function(t,e){this.param=e,this._status_init(t),this.view=this._create_view(),this.view.bind_ee(this),this.view.visible=!1},t.prototype._update_fr=function(){},t.prototype.frame_update=function(){this._update_fr(),this._syn_pos()},t.prototype._syn_pos=function(){this.is_destroyed||(this.view.x=this.s.pos.x,this.view.y=this.s.pos.y)},t.prototype.destroy=function(){this.is_destroyed=!0,this.view.parent&&this.view.parent.removeChild(this.view),this.view=null,this.s=null},t}();__reflect(CarEntity.prototype,"CarEntity");var CarDisplay=function(t){function e(){return t.call(this)||this}return __extends(e,t),e.prototype._create_bg_display=function(t,e){var i=new eui.Rect;this.addChild(i),i.fillColor=16777215*Math.random(),i.width=t,i.height=e,i.x=-Math.round(.5*t),i.y=-Math.round(.5*e),this.bgrect=i},e.prototype._create_sprite=function(t){var e=new eui.Image(t.s.sprite);this.addChild(e),e.width=t.s.size.width,e.height=t.s.size.height,e.x=-Math.round(.5*t.s.size.width),e.y=-Math.round(.5*t.s.size.height),this.sprite=e},e.prototype.bind_ee=function(t){var e=t.s.size.width,i=t.s.size.height;this._create_sprite(t),this.lbl=new eui.Label,this.addChild(this.lbl),this.lbl.width=e,this.lbl.height=i,this.lbl.x=-Math.round(.5*e),this.lbl.y=-Math.round(.5*i),this.lbl.textAlign="center",this.lbl.verticalAlign="middle",this.lbl.text=t.s.health+""},e.prototype.update_health=function(t){this.lbl.text=t+""},e}(eui.Group);__reflect(CarDisplay.prototype,"CarDisplay");var BulletEmitter=function(){function t(){this._born_cursor=0}return t.prototype.emitter_init=function(t){this.car=t,this.bullets=new Array},t.prototype.frame_update=function(){this._born_cursor++;var t=gp_core.param.interval.bullet_emit;this._born_cursor>t&&(this._born_cursor=0,this._born_bullet());for(var e=0;e<this.bullets.length;e++){var i=this.bullets[e];i.is_destroyed||i.frame_update()}},t.prototype._born_bullet=function(){var t=new BulletEntity,e=gp_core.playground.create_bullet();t.bullet_init(e,this.car,this),this.bullets.push(t)},t.prototype.destroy_bullet=function(t){t.destroy();var e=this.bullets.indexOf(t);0>e||this.bullets.splice(e,1)},t}();__reflect(BulletEmitter.prototype,"BulletEmitter");var DebugPlatform=function(){function t(){}return t.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,{nickName:"username"}]})})},t.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2]})})},t}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var ThemeAdapter=function(){function t(){}return t.prototype.getTheme=function(t,e,i,r){function n(t){e.call(r,t)}function o(e){e.resItem.url==t&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,o,null),i.call(r))}var s=this;if("undefined"!=typeof generateEUI)egret.callLater(function(){e.call(r,generateEUI)},this);else if("undefined"!=typeof generateEUI2)RES.getResByUrl("resource/gameEui.json",function(t,i){window.JSONParseClass.setData(t),egret.callLater(function(){e.call(r,generateEUI2)},s)},this,RES.ResourceItem.TYPE_JSON);else if("undefined"!=typeof generateJSON)if(t.indexOf(".exml")>-1){var a=t.split("/");a.pop();var _=a.join("/")+"_EUI.json";generateJSON.paths[t]?egret.callLater(function(){e.call(r,generateJSON.paths[t])},this):RES.getResByUrl(_,function(i){window.JSONParseClass.setData(i),egret.callLater(function(){e.call(r,generateJSON.paths[t])},s)},this,RES.ResourceItem.TYPE_JSON)}else egret.callLater(function(){e.call(r,generateJSON)},this);else RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,o,null),RES.getResByUrl(t,n,this,RES.ResourceItem.TYPE_TEXT)},t}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);var AssetAdapter=function(){function t(){}return t.prototype.getAsset=function(t,e,i){function r(r){e.call(i,r,t)}if(RES.hasRes(t)){var n=RES.getRes(t);n?r(n):RES.getResAsync(t,r,this)}else RES.getResByUrl(t,r,this,RES.ResourceItem.TYPE_IMAGE)},t}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var CarStatus=function(){function t(){}return t.prototype.sinit=function(t){this.size=new ns_sirius.Size(t.width,t.height),this.rec=new egret.Rectangle,this.rec.width=this.size.width,this.rec.height=this.size.height,this.pos=new egret.Point,this.pos.y=-140;var e=gp_core.param.health.enemy_health_rand_min,i=gp_core.param.health.enemy_health_rand_max;this.health=Math.round(Math.random()*(i-e)+e),this.sprite=Math.random()>.5?"car_red_02_png":"car_blue_02_png"},t.prototype.cal_rect=function(){this.rec.x=this.pos.x-.5*this.size.width,this.rec.y=this.pos.y-.5*this.size.height},t}();__reflect(CarStatus.prototype,"CarStatus");var EnemyCar=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype._create_view=function(){return gp_core.playground.create_enemy()},e.prototype._rand_pos_x=function(){var t=game_config.column_middle_pos[this.param];return t},e.prototype.show=function(){this.s.pos.x=this._rand_pos_x(),this.view.visible=!0},e.prototype._update_fr=function(){this.s.pos.y+=gp_core.param.speed.world_move_speed,this.s.cal_rect(),this.s.pos.y>game_config.dead_line_bottom&&gp_core.destroy_enemy(this)},e.prototype.receive_dmg=function(t){this.s.health-=t,this.view.update_health(this.s.health),this.s.health<=0&&gp_core.destroy_enemy(this)},e.prototype.prepare_to_die=function(){this.s.health=0,gp_core.destroy_enemy(this)},e}(CarEntity);__reflect(EnemyCar.prototype,"EnemyCar");var PlayerCar=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype._status_init=function(e){t.prototype._status_init.call(this,e),this.s.health=gp_core.param.health.player_health,this.s.sprite=Math.random()>.5?"car_11_png":"car_5_png"},e.prototype.car_init=function(e,i){t.prototype.car_init.call(this,e,i),this._emit_pos=new egret.Point,this._emitter=new BulletEmitter,this._emitter.emitter_init(this)},e.prototype._create_view=function(){return gp_core.playground.create_player()},e.prototype.show=function(){this._syn_player_pos(),this.view.visible=!0},e.prototype.frame_update=function(){this._syn_player_pos();var t=this._judge_contract();return t?(t.prepare_to_die(),void this.receive_dmg(1)):void this._emitter.frame_update()},e.prototype._syn_player_pos=function(){var t=gp_core.ih.player_pos;this.s.pos.copyFrom(t),this.s.cal_rect(),this._syn_pos(),this._emit_pos.x=t.x,this._emit_pos.y=t.y-game_config.player_hh},e.prototype._judge_contract=function(){if(this.is_destroyed)return null;for(var t=gp_core.enemies,e=0;e<t.length;e++){var i=t[e],r=i.s.rec;if(this.s.rec.intersects(r))return i}return null},e.prototype.receive_dmg=function(t){this.s.health-=t,this.view.update_health(this.s.health),this.s.health<=0&&app_main.game_over()},e.prototype.prepare_to_die=function(){this.s.health=0,app_main.game_over()},e}(CarEntity);__reflect(PlayerCar.prototype,"PlayerCar");var BulletEntity=function(){function t(){this.is_destroyed=!1}return t.prototype.bullet_init=function(t,e,i){this.car=e,this.e=i,this.s=new BulletStatus,this.s.pos.x=this.car._emit_pos.x,this.s.pos.y=this.car._emit_pos.y-this.s.size.height,this.view=t,this.view.bind_ee(this),this._syn_pos()},t.prototype.destroy=function(){this.is_destroyed=!0,this.view.parent&&this.view.parent.removeChild(this.view),this.car=null,this.view=null,this.s=null,this.e=null},t.prototype.frame_update=function(){this.s.pos.y-=gp_core.param.speed.bullet_speed,this.s.cal_rect();var t=this._judge_contract();if(t){var e=gp_core.param.dmg.player_bullet_dmg;return t.receive_dmg(e),void this.e.destroy_bullet(this)}return this.s.pos.y<0?void this.e.destroy_bullet(this):void this._syn_pos()},t.prototype._syn_pos=function(){this.is_destroyed||(this.view.x=this.s.pos.x,this.view.y=this.s.pos.y)},t.prototype._judge_contract=function(){if(this.is_destroyed)return null;for(var t=gp_core.enemies,e=0;e<t.length;e++){var i=t[e],r=i.s.rec;if(this.s.rec.intersects(r))return i}return null},t}();__reflect(BulletEntity.prototype,"BulletEntity");var BulletStatus=function(){function t(){this.pos=new egret.Point,this.size=new ns_sirius.Size(10,20),this.rec=new egret.Rectangle,this.rec.width=this.size.width,this.rec.height=this.size.height,this.sprite="bullet_png"}return t.prototype.cal_rect=function(){this.rec.x=this.pos.x-.5*this.size.width,this.rec.y=this.pos.y-.5*this.size.height},t}();__reflect(BulletStatus.prototype,"BulletStatus");var game_config;!function(t){function e(e){t.initial_screen_h=e,t.playground_w=t.stage_design_w-2*t.gap_horizontal,t.playground_h=Math.ceil(e)-2*t.gap_vertical,t.column_width=Math.round(t.playground_w/t.column_count),this.column_middle_pos=new Array(t.column_count);for(var i=0;i<t.column_count;i++){var r=i*t.column_width+.5*t.column_width;this.column_middle_pos[i]=r}t.enemy_w=90,t.enemy_h=Math.round(17460/122),t.player_w=90,t.player_h=Math.round(90090/474),t.player_hw=Math.round(.5*t.player_w),t.player_hh=Math.round(.5*t.player_h),t.min_x=t.player_hw,t.max_x=t.playground_w-t.player_hw,t.player_default_y=t.playground_h-326,t.dead_line_top=-t.enemy_h,t.dead_line_bottom=t.playground_h+t.enemy_h}t.stage_design_w=640,t.stage_design_h=1136,t.gap_horizontal=15,t.gap_vertical=0,t.column_count=5,t.initial_screen_h=0,t.screen_w=0,t.screen_h=0,t.playground_w=0,t.playground_h=0,t.column_width=0,t.enemy_w=0,t.enemy_h=0,t.player_w=0,t.player_h=0,t.player_hw=0,t.player_hh=0,t.min_x=0,t.max_x=0,t.player_default_y=0,t.dead_line_top=0,t.dead_line_bottom=0,t.config_init=e}(game_config||(game_config={}));var global_game_param;!function(t){function e(t,e){e.speed=t.speed,e.dmg=t.dmg,e.health=t.health,e.interval=t.interval}var i=function(){function t(){}return t}();__reflect(i.prototype,"speed");var r=function(){function t(){}return t}();__reflect(r.prototype,"dmg");var n=function(){function t(){}return t}();__reflect(n.prototype,"health");var o=function(){function t(){}return t}();__reflect(o.prototype,"interval");var s=function(){function t(){}return t}();t.global_param=s,__reflect(s.prototype,"global_game_param.global_param"),t.parse=e}(global_game_param||(global_game_param={}));var GamePlayCore=function(){function t(){this._frame_cursor=0,this._samples=[[0],[1],[2],[3],[4],[0],[1],[2],[3],[4],[0,3],[1,4],[2,3],[0,2,4],[1,3,4],[0,1,3,4],[0,2,3,4],[0,2,3,4]]}return t.prototype.core_init=function(t){this.param=new global_game_param.global_param,global_game_param.parse(RES.getRes("global_param_json"),this.param),this.core_view=t,this.playground=t.playground,this.ih=new InputHandler,this.ih.session_start(t),this.player=new PlayerCar,this.player.car_init(new ns_sirius.Size(game_config.player_w,game_config.player_h),null),this.player.show(),this.enemies=new Array},t.prototype.game_start=function(){egret.Ticker.getInstance().register(function(t){dragonBones.WorldClock.clock.advanceTime(t/1e3),ns_sirius.world_clock.update(t)},this),ns_sirius.world_clock.add(this)},t.prototype.update=function(t){this._frame_cursor++;var e=gp_core.param.interval.enemy_born;this._frame_cursor%e===0&&this._born_enemies();for(var i=0;i<this.enemies.length;i++){var r=this.enemies[i];r.is_destroyed?console.error("is_destroyed"):this.enemies[i].frame_update()}this.player.frame_update(),this.core_view.frame_update()},t.prototype._born_single_enemy=function(t){var e=new EnemyCar;e.car_init(new ns_sirius.Size(game_config.enemy_w,game_config.enemy_h),t),e.show(),this.enemies.push(e)},t.prototype._born_enemies=function(){for(var t=this._samples.length,e=ns_sirius.random_region(0,t),i=this._samples[e],r=0;r<i.length;r++)this._born_single_enemy(i[r])},t.prototype.destroy_enemy=function(t){t.destroy();var e=this.enemies.indexOf(t);0>e||this.enemies.splice(e,1)},t}();__reflect(GamePlayCore.prototype,"GamePlayCore",["ns_sirius.IAnimatable"]);var LoadingUI=function(t){function e(){var e=t.call(this)||this;return e.createView(),e}return __extends(e,t),e.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},e.prototype.onProgress=function(t,e){this.textField.text="Loading..."+t+"/"+e},e}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var InputHandler=function(){function t(){this._start_player=new egret.Point,this._start_mouse=new egret.Point}return t.prototype.session_start=function(t){this.cw=game_config.playground_w,this.ch=game_config.playground_h,this.player_pos=new egret.Point(.5*this.cw,game_config.player_default_y),t.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this._handle_touch_down,this),t.addEventListener(egret.TouchEvent.TOUCH_MOVE,this._handle_touch_move,this),t.addEventListener(egret.TouchEvent.TOUCH_END,this._handle_touch_up,this)},t.prototype._handle_touch_down=function(t){this._start_mouse.x=t.stageX,this._start_mouse.y=t.stageY,this._start_player.copyFrom(this.player_pos)},t.prototype._handle_touch_move=function(t){var e=t.stageX-this._start_mouse.x,i=t.stageY-this._start_mouse.y,r=this._start_player.x+1.5*e;this._start_player.y+1.5*i;r<game_config.min_x&&(r=game_config.min_x),r>game_config.max_x&&(r=game_config.max_x),this.player_pos.x=r},t.prototype._handle_touch_up=function(t){},t}();__reflect(InputHandler.prototype,"InputHandler");var GameCoreView=function(t){function e(){var e=t.call(this)||this,i=new DecorationCover;e.addChild(i),i.horizontalCenter=0,i.width=game_config.playground_w,i.height=game_config.playground_h,i.bottom=0,e.dd=i;var r=new Playground;return e.addChild(r),r.horizontalCenter=0,r.width=game_config.playground_w,r.height=game_config.playground_h,r.bottom=0,e.playground=r,e}return __extends(e,t),e.prototype.frame_update=function(){this.dd.frame_update()},e}(eui.Group);__reflect(GameCoreView.prototype,"GameCoreView");var BulletDisplay=function(t){function e(){return t.call(this)||this}return __extends(e,t),e.prototype._create_bg_display=function(t,e){var i=new eui.Rect;this.addChild(i),i.fillColor=0,i.width=t,i.height=e,i.x=-Math.round(.5*t),i.y=-Math.round(.5*e),this.bgrect=i},e.prototype._create_sprite=function(t){var e=new eui.Image(t.s.sprite);this.addChild(e),e.width=22,e.height=66,e.x=-Math.round(.5*e.width),e.y=-Math.round(.5*e.height),this.sprite=e},e.prototype.bind_ee=function(t){var e=t.s.size.width,i=t.s.size.height;this._create_bg_display(e,i),this._create_sprite(t)},e}(egret.DisplayObjectContainer);__reflect(BulletDisplay.prototype,"BulletDisplay");var gp_core,app_main,Main=function(t){function e(){var e=t.call(this)||this;return app_main=e,e}return __extends(e,t),e.prototype.createChildren=function(){t.prototype.createChildren.call(this),egret.lifecycle.addLifecycleListener(function(t){}),egret.lifecycle.onPause=function(){},egret.lifecycle.onResume=function(){};var e=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",e),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()["catch"](function(t){console.log(t)})},e.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(i){switch(i.label){case 0:return[4,this.loadResource()];case 1:return i.sent(),this.createGameScene(),[4,RES.getResAsync("description_json")];case 2:return t=i.sent(),[4,platform.login()];case 3:return i.sent(),[4,platform.getUserInfo()];case 4:return e=i.sent(),console.log(e),[2]}})})},e.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(i){switch(i.label){case 0:return i.trys.push([0,4,,5]),t=new LoadingUI,this.stage.addChild(t),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return i.sent(),[4,this.loadTheme()];case 2:return i.sent(),[4,RES.loadGroup("preload",0,t)];case 3:return i.sent(),this.stage.removeChild(t),[3,5];case 4:return e=i.sent(),console.error(e),[3,5];case 5:return[2]}})})},e.prototype.loadTheme=function(){var t=this;return new Promise(function(e,i){var r=new eui.Theme("resource/default.thm.json",t.stage);r.addEventListener(eui.UIEvent.COMPLETE,function(){e()},t)})},e.prototype.createGameScene=function(){var t=this;this.stage.addEventListener(egret.Event.RESIZE,function(e){game_config.screen_w=t.stage.stageWidth,game_config.screen_h=t.stage.stageHeight},this),game_config.config_init(this.stage.stageHeight);var e=new eui.Rect;this.addChild(e),e.fillColor=2764919,e.percentWidth=100,e.percentHeight=100;var i=new GameCoreView;this.addChild(i),i.percentWidth=100,i.percentHeight=100,i.bottom=0,i.horizontalCenter=0,gp_core=new GamePlayCore,gp_core.core_init(i),setTimeout(function(){gp_core.game_start()},500)},e.prototype.createBitmapByName=function(t){var e=new egret.Bitmap,i=RES.getRes(t);return e.texture=i,e},e.prototype.onButtonClick=function(t){},e.prototype.game_over=function(){ns_sirius.world_clock.time_scale=0;var t=new eui.Panel;t.title="GameOver",t.horizontalCenter=0,t.verticalCenter=0,this.addChild(t)},e}(eui.UILayer);__reflect(Main.prototype,"Main");var PlayerDisplay=function(t){function e(){return t.call(this)||this}return __extends(e,t),e.prototype._create_turret=function(t){var e=new eui.Image("gun_png");this.addChild(e),e.width=40,e.height=40,e.x=-Math.round(.5*e.width),e.y=-Math.round(.5*t.s.size.height)-e.height,this.turret=e},e.prototype.bind_ee=function(e){t.prototype.bind_ee.call(this,e),this._create_turret(e)},e}(CarDisplay);__reflect(PlayerDisplay.prototype,"PlayerDisplay");var Playground=function(t){function e(){var e=t.call(this)||this,i=new eui.Rect;return e.addChild(i),i.percentWidth=100,i.percentHeight=100,i.fillAlpha=0,i.fillColor=0,i.alpha=0,e._bullets_container=new eui.Group,e.addChild(e._bullets_container),e._bullets_container.percentWidth=100,e._bullets_container.percentHeight=100,e}return __extends(e,t),e.prototype.create_player=function(){var t=new PlayerDisplay;return this.addChild(t),t},e.prototype.create_enemy=function(){var t=new CarDisplay;return this.addChild(t),t},e.prototype.create_bullet=function(){var t=new BulletDisplay;return this._bullets_container.addChild(t),t},e}(eui.Group);__reflect(Playground.prototype,"Playground");var DecorationCover=function(t){function e(){var e=t.call(this)||this;e.line_height=168,e.line_width=4,e.line_gap=225,e.row_h=0,e.line_row_count=0,e._start_offset=0,e.touchEnabled=!1,e.touchChildren=!1,e.row_h=e.line_height+e.line_gap,e.line_row_count=Math.floor(game_config.initial_screen_h/e.row_h)+2,e._rows=new Array(e.line_row_count);for(var i=0;i<e.line_row_count;i++){var r=new DecorationRow(e.line_width,e.line_height);e.addChild(r),e._rows[i]=r,r.percentWidth=100,r.height=e.line_height}return e._update_pos_y(),e}return __extends(e,t),e.prototype._cal_y=function(t){var e=this._start_offset+game_config.initial_screen_h-t*(this.line_height+this.line_gap)-this.line_height;return e},e.prototype._update_pos_y=function(){for(var t=0;t<this.line_row_count;t++)this._rows[t].y=this._cal_y(t)},e.prototype.frame_update=function(){this._start_offset+=gp_core.param.speed.world_move_speed,this._start_offset>=this.row_h&&(this._start_offset-=this.row_h,this._swap()),this._update_pos_y()},e.prototype._swap=function(){for(var t=this._rows[0],e=0;e<this.line_row_count-1;e++)this._rows[e]=this._rows[e+1];this._rows[this.line_row_count-1]=t},e}(eui.Group);__reflect(DecorationCover.prototype,"DecorationCover");var DecorationRow=function(t){function e(e,i){var r=t.call(this)||this;r.line_width=e,r.line_height=i;for(var n=1;n<game_config.column_count;n++)r._create_line(n*game_config.column_width);return r}return __extends(e,t),e.prototype._create_line=function(t){var e=new eui.Rect;return this.addChild(e),e.fillColor=8885736,e.width=this.line_width,e.height=this.line_height,e.x=t-.5*this.line_width,e.y=0,e},e}(eui.Group);__reflect(DecorationRow.prototype,"DecorationRow");var math_lib;!function(t){function e(t,e){return t.containsRect(e)}t.aabb=e}(math_lib||(math_lib={}));var ConfigPanel=function(t){function e(){var e=t.call(this)||this;return e.skinName="resource/module_skins/config/config.exml",e}return __extends(e,t),e}(eui.Component);__reflect(ConfigPanel.prototype,"ConfigPanel");var ns_sirius;!function(t){function e(t,e){for(var i=Object.keys(t),r=i.length,n=0;r>n;n++){var o=i[n],s=t[o],a=e(s);if(a===!0)break}}function i(t,e){for(var i=Object.keys(t),r=i.length,n=0;r>n;n++){var o=i[n],s=t[o],a=e(o,s);if(a===!0)break}}function r(t,e){var i=t.indexOf(e);0>i||t.splice(i,1)}function n(t,e){var i=Math.floor(Math.random()*(e-t))+t;return i}t.loop_values=e,t.loop_pps=i,t.arr_robj=r,t.random_region=n}(ns_sirius||(ns_sirius={}));var ns_sirius;!function(t){var e=function(){function t(){this._animatebles=new Array,this._timeScale=1}return t.frame_to_ms=function(t){return Math.round(1e3*t/60)},Object.defineProperty(t.prototype,"time_scale",{get:function(){return this._timeScale},set:function(t){this._timeScale=t},enumerable:!0,configurable:!0}),t.prototype.update=function(t){if(1!==this._timeScale&&(t*=this._timeScale),0!=t&&!(0>t)){for(var e=0,i=0,r=this._animatebles.length;r>e;++e){var n=this._animatebles[e];null!==n?(i>0&&(this._animatebles[e-i]=n,this._animatebles[e]=null),n.update(t)):i++}if(i>0){for(r=this._animatebles.length;r>e;++e){var o=this._animatebles[e];null!==o?this._animatebles[e-i]=o:i++}this._animatebles.length-=i}}},t.prototype.add=function(t){t&&this._animatebles.indexOf(t)<0&&(this._animatebles.push(t),t.clock=this)},t.prototype.clear=function(){for(var t=0,e=this._animatebles;t<e.length;t++){var i=e[t];null!==i&&(i.clock=null)}},t.prototype.remove=function(t){var e=this._animatebles.indexOf(t);e>=0&&(this._animatebles[e]=null,t.clock=null)},t.prototype.removeAt=function(t){t>=0&&(this._animatebles[t].clock=null,this._animatebles[t]=null)},t}();t.anim_clock=e,__reflect(e.prototype,"ns_sirius.anim_clock"),t.world_clock=new e}(ns_sirius||(ns_sirius={}));var ns_sirius;!function(t){var e=function(){function t(t,e){void 0===t&&(t=0),void 0===e&&(e=0),this.width=t,this.height=e}return t}();t.Size=e,__reflect(e.prototype,"ns_sirius.Size")}(ns_sirius||(ns_sirius={}));