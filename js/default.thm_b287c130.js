window.skins=window.skins||{};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/LK/skins/Test_AddedSkin.exml'] = window.Test_AddedSkin = (function (_super) {
	__extends(Test_AddedSkin, _super);
	function Test_AddedSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 300;
		this.width = 400;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = Test_AddedSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Button1_i()];
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.label = "xixixih";
		return t;
	};
	return Test_AddedSkin;
})(eui.Skin);generateEUI.paths['resource/YXY/game_skins/base/common_Button_Red_Skin.exml'] = window.common_Button_Red_Skin = (function (_super) {
	__extends(common_Button_Red_Skin, _super);
	var common_Button_Red_Skin$Skin1 = 	(function (_super) {
		__extends(common_Button_Red_Skin$Skin1, _super);
		function common_Button_Red_Skin$Skin1() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","common_button_01")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","common_button_01")
					])
			];
		}
		var _proto = common_Button_Red_Skin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "common_button_01";
			t.percentWidth = 100;
			return t;
		};
		return common_Button_Red_Skin$Skin1;
	})(eui.Skin);

	function common_Button_Red_Skin() {
		_super.call(this);
		this.skinParts = ["common_red_btn","labelDisplay"];
		
		this.height = 74;
		this.width = 180;
		this.elementsContent = [this.common_red_btn_i(),this.labelDisplay_i()];
	}
	var _proto = common_Button_Red_Skin.prototype;

	_proto.common_red_btn_i = function () {
		var t = new eui.Button();
		this.common_red_btn = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.skinName = common_Button_Red_Skin$Skin1;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.horizontalCenter = 0;
		t.size = 18;
		t.stroke = 2;
		t.strokeColor = 0xcc3c54;
		t.textColor = 0xffffff;
		t.verticalCenter = 0;
		return t;
	};
	return common_Button_Red_Skin;
})(eui.Skin);generateEUI.paths['resource/YXY/game_skins/base/common_IconItem_Skin.exml'] = window.common_IconItem_Skin = (function (_super) {
	__extends(common_IconItem_Skin, _super);
	function common_IconItem_Skin() {
		_super.call(this);
		this.skinParts = ["common_icon_default","common_icon_bg","common_icon_img","common_icon_text"];
		
		this.height = 104;
		this.width = 104;
		this.elementsContent = [this.common_icon_default_i(),this.common_icon_bg_i(),this.common_icon_img_i(),this.common_icon_text_i()];
	}
	var _proto = common_IconItem_Skin.prototype;

	_proto.common_icon_default_i = function () {
		var t = new eui.Image();
		this.common_icon_default = t;
		t.percentHeight = 100;
		t.source = "common_iconbg_01";
		t.percentWidth = 100;
		return t;
	};
	_proto.common_icon_bg_i = function () {
		var t = new eui.Image();
		this.common_icon_bg = t;
		t.percentHeight = 100;
		t.source = "common_iconbg_02";
		t.percentWidth = 100;
		return t;
	};
	_proto.common_icon_img_i = function () {
		var t = new eui.Image();
		this.common_icon_img = t;
		t.percentHeight = 84.6;
		t.source = "common_icon_01";
		t.top = "7.6%";
		t.percentWidth = 86.5;
		t.x = 7;
		return t;
	};
	_proto.common_icon_text_i = function () {
		var t = new eui.Label();
		this.common_icon_text = t;
		t.percentHeight = 25;
		t.size = 16;
		t.stroke = 2;
		t.strokeColor = 0x000000;
		t.text = " x 5";
		t.textAlign = "right";
		t.top = "69.3%";
		t.verticalAlign = "middle";
		t.percentWidth = 94.2;
		return t;
	};
	return common_IconItem_Skin;
})(eui.Skin);generateEUI.paths['resource/YXY/game_skins/tabViewSkin.exml'] = window.tabViewSkin = (function (_super) {
	__extends(tabViewSkin, _super);
	var tabViewSkin$Skin2 = 	(function (_super) {
		__extends(tabViewSkin$Skin2, _super);
		var tabViewSkin$Skin2$Skin3 = 		(function (_super) {
			__extends(tabViewSkin$Skin2$Skin3, _super);
			function tabViewSkin$Skin2$Skin3() {
				_super.call(this);
				this.skinParts = ["thumb"];
				
				this.elementsContent = [this.thumb_i()];
			}
			var _proto = tabViewSkin$Skin2$Skin3.prototype;

			_proto.thumb_i = function () {
				var t = new eui.Image();
				this.thumb = t;
				t.scale9Grid = new egret.Rectangle(1,1,4,4);
				t.source = "battleSettlement_expStick_03";
				t.width = 8;
				return t;
			};
			return tabViewSkin$Skin2$Skin3;
		})(eui.Skin);

		function tabViewSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["verticalScrollBar"];
			
			this.elementsContent = [this.verticalScrollBar_i()];
		}
		var _proto = tabViewSkin$Skin2.prototype;

		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.percentHeight = 100;
			t.minHeight = 100;
			t.right = 0;
			t.width = 8;
			t.skinName = tabViewSkin$Skin2$Skin3;
			return t;
		};
		return tabViewSkin$Skin2;
	})(eui.Skin);

	function tabViewSkin() {
		_super.call(this);
		this.skinParts = ["mapList","mapScroller"];
		
		this.height = 368;
		this.width = 281;
		this.elementsContent = [this.mapScroller_i()];
	}
	var _proto = tabViewSkin.prototype;

	_proto.mapScroller_i = function () {
		var t = new eui.Scroller();
		this.mapScroller = t;
		t.height = 300;
		t.scrollPolicyH = "off";
		t.width = 281;
		t.x = 0;
		t.y = 0;
		t.viewport = this.mapList_i();
		t.skinName = tabViewSkin$Skin2;
		return t;
	};
	_proto.mapList_i = function () {
		var t = new eui.List();
		this.mapList = t;
		t.height = 300;
		t.width = 281;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 2;
		t.requestedColumnCount = 1;
		t.verticalGap = 3;
		return t;
	};
	return tabViewSkin;
})(eui.Skin);generateEUI.paths['resource/YXY/game_skins/test_item.exml'] = window.test_item = (function (_super) {
	__extends(test_item, _super);
	function test_item() {
		_super.call(this);
		this.skinParts = ["bgAsset"];
		
		this.height = 100;
		this.width = 100;
		this.elementsContent = [this.bgAsset_i()];
	}
	var _proto = test_item.prototype;

	_proto.bgAsset_i = function () {
		var t = new eui.Image();
		this.bgAsset = t;
		t.percentHeight = 100;
		t.source = "battleSettlement_expStick_04";
		t.percentWidth = 100;
		return t;
	};
	return test_item;
})(eui.Skin);generateEUI.paths['resource/YXY/game_skins/win/win_ProcessBar_Facility_Skin.exml'] = window.win_ProcessBar_Facility_Skin = (function (_super) {
	__extends(win_ProcessBar_Facility_Skin, _super);
	function win_ProcessBar_Facility_Skin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.height = 14;
		this.width = 193;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = win_ProcessBar_Facility_Skin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 85.71;
		t.left = "0.518%";
		t.scale9Grid = new egret.Rectangle(10,5,176,4);
		t.source = "battleSettlement_stick_facilities";
		t.percentWidth = 98.96;
		return t;
	};
	return win_ProcessBar_Facility_Skin;
})(eui.Skin);generateEUI.paths['resource/YXY/game_skins/win/win_ProcessBar_Monster_Skin.exml'] = window.win_ProcessBar_Monster_Skin = (function (_super) {
	__extends(win_ProcessBar_Monster_Skin, _super);
	function win_ProcessBar_Monster_Skin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.height = 14;
		this.width = 193;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = win_ProcessBar_Monster_Skin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 85.71;
		t.left = "0.518%";
		t.scale9Grid = new egret.Rectangle(10,5,176,4);
		t.source = "battleSettlement_stick_monster";
		t.top = "7.1%";
		t.percentWidth = 98.96;
		return t;
	};
	return win_ProcessBar_Monster_Skin;
})(eui.Skin);generateEUI.paths['resource/YXY/game_skins/win/win_ProcessBar_EXP_Skin.exml'] = window.win_ProcessBar_EXP_Skin = (function (_super) {
	__extends(win_ProcessBar_EXP_Skin, _super);
	function win_ProcessBar_EXP_Skin() {
		_super.call(this);
		this.skinParts = ["thumb","stick","label"];
		
		this.height = 38;
		this.width = 407;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this._Image2_i(),this.stick_i(),this.label_i()];
	}
	var _proto = win_ProcessBar_EXP_Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "battleSettlement_expStick_04";
		t.top = "-2.6%";
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "battleSettlement_expStick_02";
		t.percentWidth = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "battleSettlement_expStick_01";
		t.percentWidth = 100;
		return t;
	};
	_proto.stick_i = function () {
		var t = new eui.Image();
		this.stick = t;
		t.percentHeight = 68.42;
		t.source = "battleSettlement_expStick_03";
		t.top = "21.05%";
		t.visible = false;
		t.percentWidth = 0.49;
		return t;
	};
	_proto.label_i = function () {
		var t = new eui.Label();
		this.label = t;
		t.percentHeight = 57.89;
		t.size = 12;
		t.stroke = 2;
		t.strokeColor = 0xcc3530;
		t.text = "120\300";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.top = "28.94%";
		t.percentWidth = 100;
		return t;
	};
	return win_ProcessBar_EXP_Skin;
})(eui.Skin);generateEUI.paths['resource/YXY/game_skins/win/battle_Win_Skin.exml'] = window.battle_Win_Skin = (function (_super) {
	__extends(battle_Win_Skin, _super);
	var battle_Win_Skin$Skin4 = 	(function (_super) {
		__extends(battle_Win_Skin$Skin4, _super);
		function battle_Win_Skin$Skin4() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","common_button_close")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","common_button_close")
					])
			];
		}
		var _proto = battle_Win_Skin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "common_button_close";
			t.percentWidth = 100;
			return t;
		};
		return battle_Win_Skin$Skin4;
	})(eui.Skin);

	function battle_Win_Skin() {
		_super.call(this);
		this.skinParts = ["win_role","win_group_head","win_lv","win_name","win_group_name","win_facility_label","win_monster_label","win_exp_label","win_reward_label","win_processbar_facility","win_processbar_monster","win_facility_number","win_monster_number","win_processbar_exp","win_icon1","win_icon2","win_icon3","win_btn","win_group_center","win_close","win_group_bg_1"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = battle_Win_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.percentWidth = 100;
		t.elementsContent = [this.win_group_bg_1_i()];
		return t;
	};
	_proto.win_group_bg_1_i = function () {
		var t = new eui.Group();
		this.win_group_bg_1 = t;
		t.percentHeight = 63.7;
		t.horizontalCenter = 2;
		t.top = "21%";
		t.touchEnabled = false;
		t.width = 540;
		t.y = 248;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.win_group_head_i(),this.win_group_name_i(),this.win_group_center_i(),this.win_close_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 43;
		t.source = "battleSettlement_panel_01";
		t.percentWidth = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = "33%";
		t.percentHeight = 25;
		t.source = "battleSettlement_panel_02";
		t.percentWidth = 100;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.percentHeight = 34;
		t.source = "battleSettlement_panel_03";
		t.percentWidth = 100;
		return t;
	};
	_proto.win_group_head_i = function () {
		var t = new eui.Group();
		this.win_group_head = t;
		t.percentHeight = 47.3;
		t.horizontalCenter = 0;
		t.top = "-19.3%";
		t.touchEnabled = false;
		t.width = 369;
		t.y = -140;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this.win_role_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "battleSettlement_head_01";
		t.percentWidth = 93.86;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.percentHeight = 27.485;
		t.left = "3.9%";
		t.source = "battleSettlement_head_02";
		t.top = "49%";
		t.percentWidth = 27.485;
		t.x = 12;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.percentHeight = 27.485;
		t.left = "10.3%";
		t.source = "battleSettlement_head_02";
		t.top = "65%";
		t.percentWidth = 27.485;
		t.x = 34;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.percentHeight = 19.883;
		t.left = "64.9%";
		t.source = "battleSettlement_head_03";
		t.top = "67%";
		t.percentWidth = 19.883;
		t.x = 222;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.percentHeight = 19.883;
		t.left = "47.3%";
		t.source = "battleSettlement_head_03";
		t.top = "64%";
		t.percentWidth = 19.883;
		t.x = 162;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.percentHeight = 11.988;
		t.left = "76.6%";
		t.source = "battleSettlement_head_04";
		t.top = "49%";
		t.percentWidth = 11.695;
		t.x = 262;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.percentHeight = 11.988;
		t.left = "59%";
		t.source = "battleSettlement_head_04";
		t.top = "73%";
		t.percentWidth = 11.695;
		t.x = 202;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.percentHeight = 5.847;
		t.left = "88%";
		t.source = "battleSettlement_head_04";
		t.top = "46%";
		t.percentWidth = 5.847;
		t.x = 301;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.percentHeight = 14.619;
		t.left = "43.8%";
		t.source = "battleSettlement_head_03";
		t.top = "71%";
		t.percentWidth = 14.619;
		t.x = 150;
		return t;
	};
	_proto.win_role_i = function () {
		var t = new eui.Image();
		this.win_role = t;
		t.percentHeight = 70.175;
		t.horizontalCenter = 0;
		t.source = "common_icon_01";
		t.top = "14%";
		t.percentWidth = 70.175;
		return t;
	};
	_proto.win_group_name_i = function () {
		var t = new eui.Group();
		this.win_group_name = t;
		t.percentHeight = 19.3;
		t.left = "69%";
		t.top = "8.2%";
		t.touchEnabled = false;
		t.width = 146;
		t.y = 59;
		t.elementsContent = [this._Image13_i(),this.win_lv_i(),this.win_name_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "battleSettlement_namebg";
		t.percentWidth = 100;
		return t;
	};
	_proto.win_lv_i = function () {
		var t = new eui.Label();
		this.win_lv = t;
		t.percentHeight = 17.14;
		t.size = 16;
		t.stroke = 2;
		t.strokeColor = 0x80631f;
		t.text = "Lv . 10";
		t.textAlign = "center";
		t.top = "55%";
		t.percentWidth = 100;
		t.x = 0;
		return t;
	};
	_proto.win_name_i = function () {
		var t = new eui.Label();
		this.win_name = t;
		t.percentHeight = 14.28;
		t.size = 18;
		t.stroke = 2;
		t.strokeColor = 0x80631f;
		t.text = "NAME";
		t.textAlign = "center";
		t.textColor = 0xffdf8d;
		t.top = "28%";
		t.percentWidth = 100;
		t.x = 4;
		return t;
	};
	_proto.win_group_center_i = function () {
		var t = new eui.Group();
		this.win_group_center = t;
		t.percentHeight = 69.1;
		t.horizontalCenter = 0;
		t.left = "0.4%";
		t.top = "26.4%";
		t.touchEnabled = false;
		t.width = 540;
		t.x = 5;
		t.elementsContent = [this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Image17_i(),this._Image18_i(),this._Image19_i(),this._Image20_i(),this._Image21_i(),this._Image22_i(),this._Image23_i(),this._Image24_i(),this._Image25_i(),this._Image26_i(),this._Image27_i(),this.win_facility_label_i(),this.win_monster_label_i(),this.win_exp_label_i(),this.win_reward_label_i(),this.win_processbar_facility_i(),this.win_processbar_monster_i(),this.win_facility_number_i(),this.win_monster_number_i(),this.win_processbar_exp_i(),this.win_icon1_i(),this.win_icon2_i(),this.win_icon3_i(),this.win_btn_i(),this._Image28_i(),this._Image29_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.left = "6.4%";
		t.source = "battleSettlement_panel_img_01";
		t.top = "0.8%";
		t.percentWidth = 89;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.percentHeight = 14;
		t.left = "37.22%";
		t.source = "battleSettlement_panel_win";
		t.top = "-1.8%";
		t.percentWidth = 28.88;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.percentHeight = 2.6;
		t.left = "9.6%";
		t.source = "battleSettlement_panel_img_04";
		t.top = "15.2%";
		t.percentWidth = 2.77;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.percentHeight = 2.6;
		t.left = "9.6%";
		t.source = "battleSettlement_panel_img_04";
		t.top = "28.2%";
		t.percentWidth = 2.77;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.percentHeight = 2.6;
		t.left = "9.6%";
		t.source = "battleSettlement_panel_img_04";
		t.top = "43.8%";
		t.percentWidth = 2.77;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.percentHeight = 2.6;
		t.left = "42.22%";
		t.source = "battleSettlement_panel_img_04";
		t.top = "35.4%";
		t.percentWidth = 2.77;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.percentHeight = 2.6;
		t.left = "90.18%";
		t.source = "battleSettlement_panel_img_05";
		t.top = "43.8%";
		t.percentWidth = 2.77;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.percentHeight = 2.6;
		t.left = "58.41%";
		t.source = "battleSettlement_panel_img_05";
		t.top = "35.4%";
		t.percentWidth = 2.77;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.percentHeight = 9;
		t.left = "13.14%";
		t.source = "battleSettlement_panel_img_03";
		t.top = "11.8%";
		t.percentWidth = 74.81;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.percentHeight = 9;
		t.left = "13.14%";
		t.source = "battleSettlement_panel_img_03";
		t.top = "25%";
		t.percentWidth = 74.81;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.percentHeight = 10;
		t.left = "13.14%";
		t.source = "battleSettlement_panel_img_03";
		t.top = "39.4%";
		t.percentWidth = 74.81;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.percentHeight = 5.8;
		t.left = "37.96%";
		t.source = "battleSettlement_stick_bg";
		t.top = "14%";
		t.percentWidth = 54.62;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.percentHeight = 1.8;
		t.left = "10.84%";
		t.source = "battleSettlement_panel_img_02";
		t.top = "54.8%";
		t.percentWidth = 80;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.percentHeight = 5.8;
		t.left = "37.96%";
		t.source = "battleSettlement_stick_bg";
		t.top = "27%";
		t.percentWidth = 54.62;
		return t;
	};
	_proto.win_facility_label_i = function () {
		var t = new eui.Label();
		this.win_facility_label = t;
		t.percentHeight = 5.2;
		t.left = "13.15%";
		t.size = 14;
		t.text = "升级的设施";
		t.textColor = 0x765851;
		t.top = "14%";
		t.percentWidth = 27.77;
		return t;
	};
	_proto.win_monster_label_i = function () {
		var t = new eui.Label();
		this.win_monster_label = t;
		t.percentHeight = 5.2;
		t.left = "13.15%";
		t.size = 14;
		t.text = "升级的怪兽";
		t.textColor = 0x765851;
		t.top = "27.2%%";
		t.percentWidth = 27.77;
		return t;
	};
	_proto.win_exp_label_i = function () {
		var t = new eui.Label();
		this.win_exp_label = t;
		t.percentHeight = 5.2;
		t.left = "46.46%";
		t.size = 14;
		t.text = "EXP";
		t.textAlign = "center";
		t.textColor = 0x765851;
		t.top = "34.4%";
		t.percentWidth = 11.48;
		return t;
	};
	_proto.win_reward_label_i = function () {
		var t = new eui.Label();
		this.win_reward_label = t;
		t.background = true;
		t.backgroundColor = 0xefe5ca;
		t.percentHeight = 6;
		t.left = "37.37%";
		t.size = 18;
		t.text = "获得奖励";
		t.textAlign = "center";
		t.textColor = 0x765851;
		t.top = "51.7%";
		t.percentWidth = 27.77;
		return t;
	};
	_proto.win_processbar_facility_i = function () {
		var t = new eui.ProgressBar();
		this.win_processbar_facility = t;
		t.percentHeight = 2.8;
		t.left = "42.40%";
		t.skinName = "win_ProcessBar_Facility_Skin";
		t.top = "14.7%";
		t.value = 0;
		t.percentWidth = 35.74;
		return t;
	};
	_proto.win_processbar_monster_i = function () {
		var t = new eui.ProgressBar();
		this.win_processbar_monster = t;
		t.percentHeight = 2.8;
		t.left = "42.40%";
		t.skinName = "win_ProcessBar_Monster_Skin";
		t.top = "27.6%";
		t.value = 0;
		t.percentWidth = 35.74;
		return t;
	};
	_proto.win_facility_number_i = function () {
		var t = new eui.Label();
		this.win_facility_number = t;
		t.percentHeight = 5.2;
		t.left = "69.25%";
		t.size = 16;
		t.stroke = 2;
		t.strokeColor = 0x000000;
		t.text = "x 3";
		t.textAlign = "right";
		t.top = "12.8%";
		t.verticalAlign = "middle";
		t.percentWidth = 18.14;
		return t;
	};
	_proto.win_monster_number_i = function () {
		var t = new eui.Label();
		this.win_monster_number = t;
		t.percentHeight = 5.2;
		t.left = "69.25%";
		t.size = 16;
		t.stroke = 2;
		t.strokeColor = 0x000000;
		t.text = "x 3";
		t.textAlign = "right";
		t.top = "26%";
		t.verticalAlign = "middle";
		t.percentWidth = 18.14;
		return t;
	};
	_proto.win_processbar_exp_i = function () {
		var t = new game.ExpProcessBarView();
		this.win_processbar_exp = t;
		t.percentHeight = 7.6;
		t.left = "13.71%";
		t.skinName = "win_ProcessBar_EXP_Skin";
		t.top = "40.3%";
		t.value = 0;
		t.percentWidth = 75.37;
		t.y = 205;
		return t;
	};
	_proto.win_icon1_i = function () {
		var t = new game.CommonIconItemView();
		this.win_icon1 = t;
		t.percentHeight = 20.8;
		t.left = "20.55%";
		t.skinName = "common_IconItem_Skin";
		t.top = "58.4%";
		t.percentWidth = 19.25;
		return t;
	};
	_proto.win_icon2_i = function () {
		var t = new game.CommonIconItemView();
		this.win_icon2 = t;
		t.percentHeight = 20.8;
		t.left = "40.7%";
		t.skinName = "common_IconItem_Skin";
		t.top = "58.4%";
		t.percentWidth = 19.25;
		return t;
	};
	_proto.win_icon3_i = function () {
		var t = new game.CommonIconItemView();
		this.win_icon3 = t;
		t.percentHeight = 20.8;
		t.left = "61.2%";
		t.skinName = "common_IconItem_Skin";
		t.top = "58.4%";
		t.percentWidth = 19.25;
		return t;
	};
	_proto.win_btn_i = function () {
		var t = new game.CommonRedBtnView();
		this.win_btn = t;
		t.percentHeight = 14.8;
		t.left = "33.88%";
		t.skinName = "common_Button_Red_Skin";
		t.top = "82.4%";
		t.percentWidth = 33.33;
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.percentHeight = 14.2;
		t.left = "18%";
		t.source = "battleSettlement_panel_img_06";
		t.top = "79.8%";
		t.percentWidth = 23.51;
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.percentHeight = 14.2;
		t.left = "64.9%";
		t.source = "battleSettlement_panel_img_07";
		t.top = "79.75%";
		t.percentWidth = 23.51;
		return t;
	};
	_proto.win_close_i = function () {
		var t = new eui.Button();
		this.win_close = t;
		t.percentHeight = 6.5;
		t.left = "87.6%";
		t.top = "2.8%";
		t.width = 50;
		t.skinName = battle_Win_Skin$Skin4;
		return t;
	};
	return battle_Win_Skin;
})(eui.Skin);generateEUI.paths['resource/ZL/skins/adventure/adventure_enter.exml'] = window.adventure_enter = (function (_super) {
	__extends(adventure_enter, _super);
	function adventure_enter() {
		_super.call(this);
		this.skinParts = ["group_left","group_map","reward_start","reward_img","reward_num","reward","group_reward","group_ad","btn_back_out","btn_pause"];
		
		this.height = 640;
		this.width = 1136;
		this.elementsContent = [this._Rect1_i(),this._Group3_i()];
	}
	var _proto = adventure_enter.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.strokeAlpha = 0;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.bottom = 2;
		t.height = 592;
		t.horizontalCenter = 40;
		t.width = 943;
		t.elementsContent = [this._Image1_i(),this._Rect2_i(),this.group_left_i(),this._Group2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Event_Pic_Popup_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.2;
		t.height = 545;
		t.left = 27;
		t.verticalCenter = 0;
		t.width = 545;
		return t;
	};
	_proto.group_left_i = function () {
		var t = new eui.Group();
		this.group_left = t;
		t.height = 545;
		t.left = 27;
		t.verticalCenter = 0;
		t.width = 545;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.right = 90;
		t.verticalCenter = 0;
		t.width = 262;
		t.elementsContent = [this._Rect3_i(),this.group_map_i(),this.group_reward_i(),this.group_ad_i(),this.btn_back_out_i(),this.btn_pause_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.2;
		t.height = 178;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.top = 25;
		t.width = 178;
		t.y = 0;
		return t;
	};
	_proto.group_map_i = function () {
		var t = new eui.Group();
		this.group_map = t;
		t.height = 178;
		t.horizontalCenter = 0;
		t.top = 25;
		t.width = 178;
		return t;
	};
	_proto.group_reward_i = function () {
		var t = new UICommon.Group();
		this.group_reward = t;
		t.height = 262;
		t.horizontalCenter = 0;
		t.top = 213;
		t.width = 262;
		t.elementsContent = [this._Image2_i(),this.reward_start_i(),this.reward_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "Common_Icon_Divine_01_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.reward_start_i = function () {
		var t = new eui.Image();
		this.reward_start = t;
		t.height = 80;
		t.horizontalCenter = 0;
		t.source = "Common_Icon_Divine_04_png";
		t.verticalCenter = 0;
		t.width = 80;
		return t;
	};
	_proto.reward_i = function () {
		var t = new eui.Group();
		this.reward = t;
		t.height = 141;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 140;
		t.elementsContent = [this._Image3_i(),this._Group1_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "Common_Icon_Divine_02_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 84;
		t.horizontalCenter = 0;
		t.top = 19;
		t.width = 84;
		t.elementsContent = [this.reward_img_i(),this.reward_num_i()];
		return t;
	};
	_proto.reward_img_i = function () {
		var t = new eui.Image();
		this.reward_img = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.reward_num_i = function () {
		var t = new eui.Label();
		this.reward_num = t;
		t.bottom = 5;
		t.right = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.stroke = 2;
		t.strokeColor = 0x000000;
		t.text = "Label";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.group_ad_i = function () {
		var t = new eui.Group();
		this.group_ad = t;
		t.height = 59;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 440;
		t.width = 189;
		t.x = 37;
		t.elementsContent = [this._Image4_i(),this._Label1_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "Common_Icon_Divine_03_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 14;
		t.stroke = 2;
		t.strokeColor = 0xaba6a1;
		t.text = "看广告进行占卜";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.btn_back_out_i = function () {
		var t = new eui.Group();
		this.btn_back_out = t;
		t.bottom = 32;
		t.height = 52;
		t.left = 8;
		t.width = 120;
		t.elementsContent = [this._Image5_i(),this._Label2_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "Common_Button_Simple_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 18;
		t.stroke = 2;
		t.strokeColor = 0x80631f;
		t.text = "放弃探险";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.btn_pause_i = function () {
		var t = new eui.Group();
		this.btn_pause = t;
		t.bottom = 32;
		t.height = 52;
		t.right = 8;
		t.width = 120;
		t.elementsContent = [this._Image6_i(),this._Label3_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "Common_Button_Simple_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 18;
		t.stroke = 2;
		t.strokeColor = 0x80631F;
		t.text = "暂停探险";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return adventure_enter;
})(eui.Skin);generateEUI.paths['resource/ZL/skins/bottom/BottomSkillItemDes.exml'] = window.BottomSkillItemDesSkin = (function (_super) {
	__extends(BottomSkillItemDesSkin, _super);
	function BottomSkillItemDesSkin() {
		_super.call(this);
		this.skinParts = ["skill_item_des_bg","skill_item_des_name","skill_item_des","group_skill_item_des"];
		
		this.height = 640;
		this.width = 1136;
		this.elementsContent = [this.skill_item_des_bg_i(),this.group_skill_item_des_i()];
	}
	var _proto = BottomSkillItemDesSkin.prototype;

	_proto.skill_item_des_bg_i = function () {
		var t = new eui.Rect();
		this.skill_item_des_bg = t;
		t.fillAlpha = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.strokeAlpha = 0;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.group_skill_item_des_i = function () {
		var t = new eui.Group();
		this.group_skill_item_des = t;
		t.bottom = 55;
		t.height = 100;
		t.right = 300;
		t.width = 530;
		t.elementsContent = [this._Image1_i(),this.skill_item_des_name_i(),this._Image2_i(),this.skill_item_des_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(18,20,12,12);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Common_Pic_SecondaryPopup_02_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.skill_item_des_name_i = function () {
		var t = new eui.Label();
		this.skill_item_des_name = t;
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 16;
		t.text = "烈焰风暴";
		t.textAlign = "left";
		t.textColor = 0xe0ba6c;
		t.top = 10;
		t.verticalAlign = "middle";
		t.width = 500;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 1;
		t.left = 15;
		t.source = "Common_Pic_Line_02_png";
		t.top = 30;
		t.width = 154;
		return t;
	};
	_proto.skill_item_des_i = function () {
		var t = new eui.Label();
		this.skill_item_des = t;
		t.bottom = 10;
		t.height = 54;
		t.horizontalCenter = 0;
		t.lineSpacing = 5;
		t.size = 14;
		t.text = "状态描述状态描述状态描述状态描述状态描述";
		t.textAlign = "left";
		t.textColor = 0x575757;
		t.verticalAlign = "top";
		t.width = 500;
		return t;
	};
	return BottomSkillItemDesSkin;
})(eui.Skin);generateEUI.paths['resource/ZL/skins/bottom/BottomSkillListItemDes.exml'] = window.BottomSkillListItemDesSkin = (function (_super) {
	__extends(BottomSkillListItemDesSkin, _super);
	function BottomSkillListItemDesSkin() {
		_super.call(this);
		this.skinParts = ["skill_list_item_des_bg","skill_list_item_des","group_skill_list_item_des"];
		
		this.height = 640;
		this.width = 1136;
		this.elementsContent = [this.skill_list_item_des_bg_i(),this.group_skill_list_item_des_i()];
	}
	var _proto = BottomSkillListItemDesSkin.prototype;

	_proto.skill_list_item_des_bg_i = function () {
		var t = new eui.Rect();
		this.skill_list_item_des_bg = t;
		t.fillAlpha = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.strokeAlpha = 0;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.group_skill_list_item_des_i = function () {
		var t = new eui.Group();
		this.group_skill_list_item_des = t;
		t.bottom = 55;
		t.height = 80;
		t.left = 78;
		t.width = 250;
		t.elementsContent = [this._Image1_i(),this.skill_list_item_des_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(18,20,12,12);
		t.source = "Common_Pic_SecondaryPopup_02_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.skill_list_item_des_i = function () {
		var t = new eui.Label();
		this.skill_list_item_des = t;
		t.height = 50;
		t.horizontalCenter = 0;
		t.lineSpacing = 5;
		t.size = 14;
		t.text = "状态描述状态描述状态描述状态描述状态描述";
		t.textAlign = "left";
		t.textColor = 0x575757;
		t.verticalAlign = "top";
		t.verticalCenter = 0;
		t.width = 220;
		return t;
	};
	return BottomSkillListItemDesSkin;
})(eui.Skin);generateEUI.paths['resource/ZL/skins/bottom/progress_skill.exml'] = window.progress_skill = (function (_super) {
	__extends(progress_skill, _super);
	function progress_skill() {
		_super.call(this);
		this.skinParts = ["thumb","label"];
		
		this.height = 90;
		this.width = 171;
		this.elementsContent = [this.thumb_i(),this.label_i()];
	}
	var _proto = progress_skill.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.bottom = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "Common_Icon_MagicCrystal_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.label_i = function () {
		var t = new eui.Label();
		this.label = t;
		t.bottom = 0;
		t.percentHeight = 100;
		t.left = 10;
		t.size = 14;
		t.stroke = 2;
		t.strokeColor = 0xcc3c54;
		t.text = "";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	return progress_skill;
})(eui.Skin);generateEUI.paths['resource/ZL/skins/bottom/skill_item.exml'] = window.skill_item = (function (_super) {
	__extends(skill_item, _super);
	function skill_item() {
		_super.call(this);
		this.skinParts = ["image","count"];
		
		this.height = 88;
		this.width = 88;
		this.elementsContent = [this.image_i(),this._Group1_i()];
	}
	var _proto = skill_item.prototype;

	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.percentHeight = 100;
		t.horizontalCenter = "-6%";
		t.source = "Bottom_Button_ButtonSkill_01_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 42;
		t.right = 0;
		t.top = 6;
		t.width = 38;
		t.elementsContent = [this._Image1_i(),this.count_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Common_Frame_MP_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.count_i = function () {
		var t = new eui.Label();
		this.count = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.stroke = 2;
		t.strokeColor = 0xcc3c54;
		t.text = "20";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return skill_item;
})(eui.Skin);generateEUI.paths['resource/ZL/skins/bottom/GameUIViewBottom.exml'] = window.GameUIViewBottomSkin = (function (_super) {
	__extends(GameUIViewBottomSkin, _super);
	function GameUIViewBottomSkin() {
		_super.call(this);
		this.skinParts = ["scr_skill_bg","arrow_L","list_skill","scr_skill","arrow_R","group_skill_list","pro_skill","group_skill_01","group_skill_02","group_skill_03","group_skill_04","skill_num","group_skill"];
		
		this.height = 177;
		this.width = 1136;
		this.elementsContent = [this.group_skill_list_i(),this.group_skill_i()];
	}
	var _proto = GameUIViewBottomSkin.prototype;

	_proto.group_skill_list_i = function () {
		var t = new eui.Group();
		this.group_skill_list = t;
		t.bottom = 0;
		t.height = 56;
		t.left = 0;
		t.width = 703;
		t.elementsContent = [this.scr_skill_bg_i(),this.arrow_L_i(),this.scr_skill_i(),this.arrow_R_i()];
		return t;
	};
	_proto.scr_skill_bg_i = function () {
		var t = new eui.Image();
		this.scr_skill_bg = t;
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Battle_Pic_BottomBar_01_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.arrow_L_i = function () {
		var t = new eui.Image();
		this.arrow_L = t;
		t.bottom = 6;
		t.height = 35;
		t.left = 15;
		t.source = "Common_Button_left_png";
		t.width = 37;
		return t;
	};
	_proto.scr_skill_i = function () {
		var t = new eui.Scroller();
		this.scr_skill = t;
		t.bottom = 1;
		t.height = 46;
		t.left = 70;
		t.width = 528;
		t.viewport = this.list_skill_i();
		return t;
	};
	_proto.list_skill_i = function () {
		var t = new eui.List();
		this.list_skill = t;
		return t;
	};
	_proto.arrow_R_i = function () {
		var t = new eui.Image();
		this.arrow_R = t;
		t.bottom = 6;
		t.height = 35;
		t.right = 50;
		t.source = "Common_Button_right_png";
		t.width = 37;
		return t;
	};
	_proto.group_skill_i = function () {
		var t = new eui.Group();
		this.group_skill = t;
		t.percentHeight = 100;
		t.right = 10;
		t.verticalCenter = 0;
		t.width = 297;
		t.elementsContent = [this._Image1_i(),this.pro_skill_i(),this.group_skill_01_i(),this.group_skill_02_i(),this.group_skill_03_i(),this.group_skill_04_i(),this.skill_num_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 156;
		t.horizontalCenter = 0;
		t.source = "Battle_Pic_BottomBar_02_png";
		t.width = 297;
		return t;
	};
	_proto.pro_skill_i = function () {
		var t = new eui.ProgressBar();
		this.pro_skill = t;
		t.bottom = 8;
		t.height = 90;
		t.right = 8;
		t.skinName = "progress_skill";
		t.width = 171;
		return t;
	};
	_proto.group_skill_01_i = function () {
		var t = new game.BottomSkillItem();
		this.group_skill_01 = t;
		t.bottom = 10;
		t.right = 80;
		t.skinName = "skill_item";
		return t;
	};
	_proto.group_skill_02_i = function () {
		var t = new game.BottomSkillItem();
		this.group_skill_02 = t;
		t.bottom = 16;
		t.left = 5;
		t.skinName = "skill_item";
		return t;
	};
	_proto.group_skill_03_i = function () {
		var t = new game.BottomSkillItem();
		this.group_skill_03 = t;
		t.left = 85;
		t.skinName = "skill_item";
		t.top = 0;
		return t;
	};
	_proto.group_skill_04_i = function () {
		var t = new game.BottomSkillItem();
		this.group_skill_04 = t;
		t.right = 10;
		t.skinName = "skill_item";
		t.top = 0;
		return t;
	};
	_proto.skill_num_i = function () {
		var t = new eui.Label();
		this.skill_num = t;
		t.bottom = 2;
		t.height = 24;
		t.left = 58;
		t.size = 16;
		t.stroke = 2;
		t.strokeColor = 0x80631f;
		t.text = "10/10";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 62;
		return t;
	};
	return GameUIViewBottomSkin;
})(eui.Skin);generateEUI.paths['resource/ZL/skins/bottom/skill_list_item.exml'] = window.skill_list_item = (function (_super) {
	__extends(skill_list_item, _super);
	function skill_list_item() {
		_super.call(this);
		this.skinParts = ["icon","count"];
		
		this.height = 46;
		this.width = 46;
		this.elementsContent = [this.icon_i(),this.count_i()];
	}
	var _proto = skill_list_item.prototype;

	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.count_i = function () {
		var t = new eui.Label();
		this.count = t;
		t.bottom = 0;
		t.percentHeight = 50;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 14;
		t.stroke = 2;
		t.strokeColor = 0x000000;
		t.text = "20";
		t.textAlign = "right";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.percentWidth = 95;
		return t;
	};
	return skill_list_item;
})(eui.Skin);generateEUI.paths['resource/ZL/skins/configuration/configuration_info_des_item.exml'] = window.configuration_info_des_item = (function (_super) {
	__extends(configuration_info_des_item, _super);
	function configuration_info_des_item() {
		_super.call(this);
		this.skinParts = ["title","content"];
		
		this.width = 170;
		this.elementsContent = [this.title_i(),this._Image1_i(),this.content_i()];
	}
	var _proto = configuration_info_des_item.prototype;

	_proto.title_i = function () {
		var t = new eui.Label();
		this.title = t;
		t.left = 10;
		t.right = 10;
		t.size = 16;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xe0ba6c;
		t.top = 5;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1;
		t.left = 0;
		t.source = "Common_Pic_Line_02_png";
		t.top = 25;
		t.width = 154;
		return t;
	};
	_proto.content_i = function () {
		var t = new eui.Group();
		this.content = t;
		t.left = 10;
		t.right = 10;
		t.top = 40;
		return t;
	};
	return configuration_info_des_item;
})(eui.Skin);generateEUI.paths['resource/ZL/skins/configuration/configuration_info_des_sub_item.exml'] = window.configuration_info_des_sub_item = (function (_super) {
	__extends(configuration_info_des_sub_item, _super);
	function configuration_info_des_sub_item() {
		_super.call(this);
		this.skinParts = ["title","des"];
		
		this.width = 170;
		this.elementsContent = [this.title_i(),this.des_i()];
	}
	var _proto = configuration_info_des_sub_item.prototype;

	_proto.title_i = function () {
		var t = new eui.Label();
		this.title = t;
		t.left = 0;
		t.size = 16;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x7e6b3f;
		t.top = 0;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	_proto.des_i = function () {
		var t = new eui.Label();
		this.des = t;
		t.left = 0;
		t.lineSpacing = 5;
		t.size = 14;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x575757;
		t.top = 20;
		t.verticalAlign = "top";
		t.percentWidth = 100;
		return t;
	};
	return configuration_info_des_sub_item;
})(eui.Skin);generateEUI.paths['resource/ZL/skins/configuration/configuration_info.exml'] = window.configuration_info = (function (_super) {
	__extends(configuration_info, _super);
	function configuration_info() {
		_super.call(this);
		this.skinParts = ["group_info_bg","group_info","btn_label","group_btn","list_des","scr_des","group_des"];
		
		this.height = 515;
		this.width = 454;
		this.elementsContent = [this.group_info_i(),this.group_btn_i(),this.group_des_i()];
	}
	var _proto = configuration_info.prototype;

	_proto.group_info_i = function () {
		var t = new eui.Group();
		this.group_info = t;
		t.height = 453;
		t.left = 0;
		t.top = 0;
		t.width = 234;
		t.elementsContent = [this.group_info_bg_i()];
		return t;
	};
	_proto.group_info_bg_i = function () {
		var t = new eui.Image();
		this.group_info_bg = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "Common_Pic_Popup_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.group_btn_i = function () {
		var t = new eui.Group();
		this.group_btn = t;
		t.bottom = 0;
		t.height = 75;
		t.left = 27;
		t.width = 180;
		t.elementsContent = [this._Image1_i(),this.btn_label_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "Common_Button_Blue_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.btn_label_i = function () {
		var t = new eui.Label();
		this.btn_label = t;
		t.horizontalCenter = 0;
		t.size = 18;
		t.stroke = 2;
		t.strokeColor = 0x5961a2;
		t.text = "布置";
		t.verticalCenter = 0;
		return t;
	};
	_proto.group_des_i = function () {
		var t = new eui.Group();
		this.group_des = t;
		t.height = 400;
		t.right = 0;
		t.top = 34;
		t.width = 210;
		t.elementsContent = [this._Image2_i(),this.scr_des_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(20,18,12,12);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Common_Pic_SecondaryPopup_01_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.scr_des_i = function () {
		var t = new eui.Scroller();
		this.scr_des = t;
		t.bottom = 20;
		t.left = 10;
		t.right = 10;
		t.top = 20;
		t.viewport = this.list_des_i();
		return t;
	};
	_proto.list_des_i = function () {
		var t = new eui.List();
		this.list_des = t;
		return t;
	};
	return configuration_info;
})(eui.Skin);generateEUI.paths['resource/ZL/skins/configuration/configuration_list_item.exml'] = window.configuration_list_item = (function (_super) {
	__extends(configuration_list_item, _super);
	function configuration_list_item() {
		_super.call(this);
		this.skinParts = ["icon","border","selected_img"];
		
		this.height = 100;
		this.width = 100;
		this.elementsContent = [this.icon_i(),this.border_i(),this.selected_img_i()];
	}
	var _proto = configuration_list_item.prototype;

	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.height = 76;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 76;
		return t;
	};
	_proto.border_i = function () {
		var t = new eui.Image();
		this.border = t;
		t.height = 76;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 76;
		return t;
	};
	_proto.selected_img_i = function () {
		var t = new eui.Image();
		this.selected_img = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return configuration_list_item;
})(eui.Skin);generateEUI.paths['resource/ZL/skins/configuration/configuration.exml'] = window.configuration = (function (_super) {
	__extends(configuration, _super);
	function configuration() {
		_super.call(this);
		this.skinParts = ["view_back","sort","list","scroller","more","reset","save","label_title","group_title"];
		
		this.height = 640;
		this.width = 1136;
		this.elementsContent = [this.view_back_i(),this.sort_i(),this._Group1_i(),this.group_title_i()];
	}
	var _proto = configuration.prototype;

	_proto.view_back_i = function () {
		var t = new eui.Rect();
		this.view_back = t;
		t.fillAlpha = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.strokeAlpha = 0;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.sort_i = function () {
		var t = new eui.Group();
		this.sort = t;
		t.bottom = 103;
		t.height = 47;
		t.right = 4;
		t.visible = false;
		t.width = 236;
		t.elementsContent = [this._Image1_i(),this._Label1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "Common_Button_Order_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 16;
		t.stroke = 2;
		t.strokeColor = 0x5961a2;
		t.text = "按照生命力排序";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 6;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.height = 113;
		t.horizontalCenter = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Image2_i(),this.scroller_i(),this.more_i(),this.reset_i(),this.save_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "Battle_Pic_BottomBar_03_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.bottom = 0;
		t.height = 100;
		t.left = 10;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 905;
		t.x = 0;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		return t;
	};
	_proto.more_i = function () {
		var t = new eui.Image();
		this.more = t;
		t.percentHeight = 100;
		t.right = 190;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Common_Frame_SuspendedMask_png";
		t.top = 6;
		t.width = 45;
		return t;
	};
	_proto.reset_i = function () {
		var t = new eui.Group();
		this.reset = t;
		t.bottom = 6;
		t.height = 88;
		t.right = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 88;
		t.elementsContent = [this._Image3_i(),this._Label2_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "Common_Button_Reset_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.size = 18;
		t.stroke = 2;
		t.strokeColor = 0x5961a2;
		t.text = "重置";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.save_i = function () {
		var t = new eui.Group();
		this.save = t;
		t.bottom = 6;
		t.height = 88;
		t.right = 20;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 88;
		t.elementsContent = [this._Image4_i(),this._Label3_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Common_Button_Preserve_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.size = 18;
		t.stroke = 2;
		t.strokeColor = 0xcc3c54;
		t.text = "保存";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.group_title_i = function () {
		var t = new eui.Group();
		this.group_title = t;
		t.height = 41;
		t.left = 65;
		t.top = 15;
		t.visible = false;
		t.width = 449;
		t.elementsContent = [this._Image5_i(),this.label_title_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "Common_Frame_Suspended_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.label_title_i = function () {
		var t = new eui.Label();
		this.label_title = t;
		t.height = 36;
		t.horizontalCenter = 0;
		t.size = 14;
		t.stroke = 2;
		t.strokeColor = 0xcc3c54;
		t.text = "";
		t.textAlign = "center";
		t.top = 0;
		t.verticalAlign = "middle";
		return t;
	};
	return configuration;
})(eui.Skin);generateEUI.paths['resource/ZL/skins/top/btn_area.exml'] = window.btn_area = (function (_super) {
	__extends(btn_area, _super);
	function btn_area() {
		_super.call(this);
		this.skinParts = [];
		
		this.currentState = "goFar";
		this.height = 48;
		this.width = 48;
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("goFar",
				[
				])
			,
			new eui.State ("goNear",
				[
					new eui.SetProperty("_Image1","source","Common_Button_Nearest_png")
				])
		];
	}
	var _proto = btn_area.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "Common_Button_Farthest_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return btn_area;
})(eui.Skin);generateEUI.paths['resource/ZL/skins/top/btn_auto.exml'] = window.btn_auto = (function (_super) {
	__extends(btn_auto, _super);
	function btn_auto() {
		_super.call(this);
		this.skinParts = [];
		
		this.currentState = "auto";
		this.height = 48;
		this.width = 48;
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("auto",
				[
				])
			,
			new eui.State ("handMove",
				[
					new eui.SetProperty("_Image1","source","Common_Button_Manual_png")
				])
		];
	}
	var _proto = btn_auto.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "Common_Button_Auto_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return btn_auto;
})(eui.Skin);generateEUI.paths['resource/ZL/skins/top/btn_x.exml'] = window.btn_x = (function (_super) {
	__extends(btn_x, _super);
	function btn_x() {
		_super.call(this);
		this.skinParts = [];
		
		this.currentState = "x1";
		this.height = 48;
		this.width = 48;
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("x1",
				[
				])
			,
			new eui.State ("x2",
				[
					new eui.SetProperty("_Image1","source","Common_Button_Speed_x2_png")
				])
		];
	}
	var _proto = btn_x.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "Common_Button_Speed_x1_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return btn_x;
})(eui.Skin);generateEUI.paths['resource/ZL/skins/top/coin.exml'] = window.coin = (function (_super) {
	__extends(coin, _super);
	function coin() {
		_super.call(this);
		this.skinParts = ["icon","label"];
		
		this.height = 49;
		this.width = 140;
		this.elementsContent = [this._Image1_i(),this.icon_i(),this.label_i()];
	}
	var _proto = coin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 10;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Common_Pic_GoldBar_png";
		t.verticalCenter = 0;
		t.percentWidth = 92;
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.fillMode = "scale";
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Common_Icon_Gold2_png";
		t.verticalCenter = 0;
		t.percentWidth = 37;
		return t;
	};
	_proto.label_i = function () {
		var t = new eui.Label();
		this.label = t;
		t.percentHeight = 100;
		t.horizontalCenter = 4;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.stroke = 2;
		t.strokeColor = 0x000000;
		t.text = "55";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.percentWidth = 50;
		return t;
	};
	return coin;
})(eui.Skin);generateEUI.paths['resource/ZL/skins/top/progress_top.exml'] = window.progress_top = (function (_super) {
	__extends(progress_top, _super);
	function progress_top() {
		_super.call(this);
		this.skinParts = ["thumb","label"];
		
		this.height = 18;
		this.width = 161;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.label_i()];
	}
	var _proto = progress_top.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 12;
		t.horizontalCenter = 0;
		t.source = "Common_Pic_Top_BloodStrip_02_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.bottom = 0;
		t.height = 12;
		t.horizontalCenter = 0;
		t.source = "Common_Pic_Top_BloodStrip_01_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.label_i = function () {
		var t = new eui.Label();
		this.label = t;
		t.bottom = 0;
		t.percentHeight = 100;
		t.left = 10;
		t.size = 14;
		t.stroke = 2;
		t.strokeColor = 0xcc3c54;
		t.text = "310\320";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.percentWidth = 50;
		return t;
	};
	return progress_top;
})(eui.Skin);generateEUI.paths['resource/ZL/skins/top/GameUIViewTop.exml'] = window.GameUIViewTopSkin = (function (_super) {
	__extends(GameUIViewTopSkin, _super);
	var GameUIViewTopSkin$Skin5 = 	(function (_super) {
		__extends(GameUIViewTopSkin$Skin5, _super);
		function GameUIViewTopSkin$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameUIViewTopSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "Common_Icon_More_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameUIViewTopSkin$Skin5;
	})(eui.Skin);

	function GameUIViewTopSkin() {
		_super.call(this);
		this.skinParts = ["bg","user_img","user_name","user_vip","user_lv","user","taling_name","progress","coin","scence_name","area_name","times","btn_x","btn_auto","btn_area"];
		
		this.height = 99;
		this.width = 1136;
		this.elementsContent = [this.bg_i(),this.user_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i()];
	}
	var _proto = GameUIViewTopSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "Battle_Pic_TopBar_png";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.user_i = function () {
		var t = new eui.Group();
		this.user = t;
		t.percentHeight = 100;
		t.left = 0;
		t.verticalCenter = 0;
		t.width = 160;
		t.elementsContent = [this.user_img_i(),this.user_name_i(),this.user_vip_i(),this.user_lv_i()];
		return t;
	};
	_proto.user_img_i = function () {
		var t = new eui.Image();
		this.user_img = t;
		t.height = 67;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Main_Icon_Monster_01_png";
		t.top = 2;
		t.width = 116;
		t.x = 0;
		t.y = 2;
		return t;
	};
	_proto.user_name_i = function () {
		var t = new eui.Label();
		this.user_name = t;
		t.bottom = 0;
		t.height = 20;
		t.left = 10;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.stroke = 2;
		t.strokeColor = 0x000000;
		t.text = "玩家名称";
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 100;
		t.x = 10;
		t.y = 79;
		return t;
	};
	_proto.user_vip_i = function () {
		var t = new eui.Image();
		this.user_vip = t;
		t.height = 31;
		t.left = 106;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Unit_Icon_Vip_png";
		t.top = 5;
		t.width = 33;
		t.x = 106;
		t.y = 5;
		return t;
	};
	_proto.user_lv_i = function () {
		var t = new eui.Label();
		this.user_lv = t;
		t.bottom = 22;
		t.height = 28;
		t.right = 14;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 14;
		t.stroke = 2;
		t.strokeColor = 0x80631f;
		t.text = "Lv.10";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 41;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 54;
		t.left = 190;
		t.top = 0;
		t.width = 190;
		t.elementsContent = [this._Image1_i(),this.taling_name_i(),this.progress_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Battle_Button_TopName_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.taling_name_i = function () {
		var t = new eui.Label();
		this.taling_name = t;
		t.percentHeight = 50;
		t.size = 18;
		t.stroke = 2;
		t.strokeColor = 0x000000;
		t.text = "塔灵名称";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	_proto.progress_i = function () {
		var t = new game.CommonProcessBar();
		this.progress = t;
		t.bottom = 6;
		t.percentHeight = 25;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "progress_top";
		t.value = 30;
		t.width = 160;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 37;
		t.left = 390;
		t.top = 11;
		t.width = 126;
		t.layout = this._BasicLayout1_i();
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this.coin_i()];
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 12;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Common_Pic_GoldBar_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 37;
		t.left = 0;
		t.source = "Common_Icon_Gold_png";
		t.verticalCenter = 0;
		t.width = 39;
		return t;
	};
	_proto.coin_i = function () {
		var t = new eui.Label();
		this.coin = t;
		t.bottom = 1;
		t.left = 42;
		t.size = 18;
		t.stroke = 2;
		t.strokeColor = 0x000000;
		t.text = "55";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 50;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 54;
		t.left = 600;
		t.top = 0;
		t.width = 190;
		t.elementsContent = [this._Image4_i(),this.scence_name_i(),this.area_name_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Battle_Button_TopName_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.scence_name_i = function () {
		var t = new eui.Label();
		this.scence_name = t;
		t.percentHeight = 50;
		t.horizontalCenter = 0;
		t.size = 18;
		t.stroke = 2;
		t.strokeColor = 0x000000;
		t.text = "场景名称";
		t.textAlign = "center";
		t.top = 0;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	_proto.area_name_i = function () {
		var t = new eui.Label();
		this.area_name = t;
		t.bottom = 0;
		t.percentHeight = 50;
		t.horizontalCenter = 0;
		t.size = 14;
		t.stroke = 2;
		t.strokeColor = 0x000000;
		t.text = "区域名称";
		t.textAlign = "center";
		t.textColor = 0x919191;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 54;
		t.left = 755;
		t.top = 0;
		t.width = 54;
		t.elementsContent = [this._Image5_i(),this.times_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 41;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Common_Icon_Event_png";
		t.verticalCenter = 0;
		t.width = 41;
		return t;
	};
	_proto.times_i = function () {
		var t = new eui.Label();
		this.times = t;
		t.left = 28;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.stroke = 2;
		t.strokeColor = 0x000000;
		t.text = "X5";
		t.verticalCenter = 12;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 54;
		t.left = 830;
		t.top = 0;
		t.width = 54;
		t.elementsContent = [this._Image6_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 41;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Common_Icon_Map_png";
		t.verticalCenter = 0;
		t.width = 41;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 52;
		t.right = 0;
		t.top = 5;
		t.width = 230;
		t.elementsContent = [this.btn_x_i(),this.btn_auto_i(),this.btn_area_i(),this._Button1_i()];
		return t;
	};
	_proto.btn_x_i = function () {
		var t = new eui.Button();
		this.btn_x = t;
		t.bottom = 0;
		t.height = 44;
		t.label = "";
		t.left = 6;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "btn_x";
		t.width = 44;
		return t;
	};
	_proto.btn_auto_i = function () {
		var t = new eui.Button();
		this.btn_auto = t;
		t.bottom = 0;
		t.height = 44;
		t.label = "";
		t.left = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "btn_auto";
		t.width = 44;
		return t;
	};
	_proto.btn_area_i = function () {
		var t = new eui.Button();
		this.btn_area = t;
		t.bottom = 0;
		t.height = 44;
		t.label = "";
		t.left = 106;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "btn_area";
		t.width = 44;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.bottom = 0;
		t.height = 50;
		t.label = "";
		t.right = 12;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 52;
		t.skinName = GameUIViewTopSkin$Skin5;
		return t;
	};
	return GameUIViewTopSkin;
})(eui.Skin);