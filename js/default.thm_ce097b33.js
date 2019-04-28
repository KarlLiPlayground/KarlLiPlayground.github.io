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
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
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
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 32;
			t.stroke = 2;
			t.strokeColor = 0xcc3c54;
			t.textColor = 0xffffff;
			t.verticalCenter = 0;
			return t;
		};
		return common_Button_Red_Skin$Skin1;
	})(eui.Skin);

	function common_Button_Red_Skin() {
		_super.call(this);
		this.skinParts = ["common_red_btn"];
		
		this.height = 74;
		this.width = 180;
		this.elementsContent = [this.common_red_btn_i()];
	}
	var _proto = common_Button_Red_Skin.prototype;

	_proto.common_red_btn_i = function () {
		var t = new eui.Button();
		this.common_red_btn = t;
		t.height = 75;
		t.width = 180;
		t.x = 0;
		t.y = 0;
		t.skinName = common_Button_Red_Skin$Skin1;
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
		t.height = 104;
		t.source = "common_iconbg_01";
		t.width = 104;
		return t;
	};
	_proto.common_icon_bg_i = function () {
		var t = new eui.Image();
		this.common_icon_bg = t;
		t.height = 104;
		t.source = "common_iconbg_02";
		t.width = 104;
		return t;
	};
	_proto.common_icon_img_i = function () {
		var t = new eui.Image();
		this.common_icon_img = t;
		t.height = 88;
		t.source = "common_icon_01";
		t.width = 90;
		t.x = 7;
		t.y = 8;
		return t;
	};
	_proto.common_icon_text_i = function () {
		var t = new eui.Label();
		this.common_icon_text = t;
		t.height = 26;
		t.size = 26;
		t.stroke = 2;
		t.strokeColor = 0x000000;
		t.text = " x 5";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 98;
		t.y = 72;
		return t;
	};
	return common_IconItem_Skin;
})(eui.Skin);generateEUI.paths['resource/YXY/game_skins/TestABCSkin.exml'] = window.TestABCSkin = (function (_super) {
	__extends(TestABCSkin, _super);
	function TestABCSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 300;
		this.width = 400;
	}
	var _proto = TestABCSkin.prototype;

	return TestABCSkin;
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
		t.height = 12;
		t.scale9Grid = new egret.Rectangle(10,5,176,4);
		t.source = "battleSettlement_stick_facilities";
		t.width = 191;
		t.x = 1;
		t.y = 1;
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
		t.height = 12;
		t.scale9Grid = new egret.Rectangle(24,6,145,4);
		t.source = "battleSettlement_stick_monster";
		t.width = 191;
		t.x = 1;
		t.y = 1;
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
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.thumb_i(),this.stick_i(),this.label_i()];
	}
	var _proto = win_ProcessBar_EXP_Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 38;
		t.source = "battleSettlement_expStick_04";
		t.width = 407;
		t.x = -1;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 38;
		t.source = "battleSettlement_expStick_01";
		t.width = 407;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 36;
		t.scale9Grid = new egret.Rectangle(55,16,320,8);
		t.source = "battleSettlement_expStick_02";
		t.width = 405;
		t.x = 1;
		t.y = 1;
		return t;
	};
	_proto.stick_i = function () {
		var t = new eui.Image();
		this.stick = t;
		t.height = 26;
		t.source = "battleSettlement_expStick_03";
		t.visible = false;
		t.width = 2;
		t.y = 8;
		return t;
	};
	_proto.label_i = function () {
		var t = new eui.Label();
		this.label = t;
		t.height = 22;
		t.size = 22;
		t.stroke = 2;
		t.strokeColor = 0xcc3530;
		t.text = "120\300";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.percentWidth = 100;
		t.y = 11;
		return t;
	};
	return win_ProcessBar_EXP_Skin;
})(eui.Skin);generateEUI.paths['resource/YXY/game_skins/win/battle_Win_Skin.exml'] = window.battle_Win_Skin = (function (_super) {
	__extends(battle_Win_Skin, _super);
	function battle_Win_Skin() {
		_super.call(this);
		this.skinParts = ["win_group_bg","win_role","win_group_head","win_lv","win_name","win_group_name","win_facility_label","win_monster_label","win_exp_label","win_reward_label","win_processbar_facility","win_processbar_monster","win_facility_number","win_monster_number","win_processbar_exp","win_icon1","win_icon2","win_icon3","win_btn","win_group_center"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.win_group_bg_i(),this.win_group_head_i(),this.win_group_name_i(),this.win_group_center_i()];
	}
	var _proto = battle_Win_Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1130;
		t.scale9Grid = new egret.Rectangle(13,13,81,81);
		t.source = "battlewin_png";
		t.visible = false;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 1130;
		t.scale9Grid = new egret.Rectangle(13,13,81,81);
		t.source = "common_mask";
		t.visible = false;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.win_group_bg_i = function () {
		var t = new eui.Group();
		this.win_group_bg = t;
		t.horizontalCenter = 2;
		t.width = 540;
		t.y = 248;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 308;
		t.horizontalCenter = 0;
		t.source = "battleSettlement_panel_01";
		t.width = 540;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 170;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(67,7,406,48);
		t.source = "battleSettlement_panel_02";
		t.width = 540;
		t.y = 308;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 245;
		t.horizontalCenter = 0;
		t.source = "battleSettlement_panel_03";
		t.width = 540;
		t.y = 478;
		return t;
	};
	_proto.win_group_head_i = function () {
		var t = new eui.Group();
		this.win_group_head = t;
		t.height = 321;
		t.width = 342;
		t.x = 159;
		t.y = 108;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this.win_role_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 342;
		t.source = "battleSettlement_head_01";
		t.width = 321;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 94;
		t.source = "battleSettlement_head_02";
		t.width = 94;
		t.x = 4;
		t.y = 169;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 94;
		t.source = "battleSettlement_head_02";
		t.width = 94;
		t.x = 28;
		t.y = 225;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 68;
		t.source = "battleSettlement_head_03";
		t.width = 68;
		t.x = 214;
		t.y = 230;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 68;
		t.source = "battleSettlement_head_03";
		t.width = 68;
		t.x = 154;
		t.y = 220;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 41;
		t.source = "battleSettlement_head_04";
		t.width = 40;
		t.x = 254;
		t.y = 170;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 41;
		t.source = "battleSettlement_head_04";
		t.width = 40;
		t.x = 194;
		t.y = 251;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.source = "battleSettlement_head_04";
		t.width = 20;
		t.x = 283;
		t.y = 160;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.source = "battleSettlement_head_03";
		t.width = 50;
		t.x = 142;
		t.y = 243;
		return t;
	};
	_proto.win_role_i = function () {
		var t = new eui.Image();
		this.win_role = t;
		t.height = 240;
		t.source = "common_icon_01";
		t.width = 240;
		t.x = 34;
		t.y = 49;
		return t;
	};
	_proto.win_group_name_i = function () {
		var t = new eui.Group();
		this.win_group_name = t;
		t.height = 140;
		t.width = 146;
		t.x = 412;
		t.y = 307;
		t.elementsContent = [this._Image15_i(),this.win_lv_i(),this.win_name_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.height = 140;
		t.source = "battleSettlement_namebg";
		t.visible = false;
		t.width = 146;
		return t;
	};
	_proto.win_lv_i = function () {
		var t = new eui.Label();
		this.win_lv = t;
		t.height = 24;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x80631f;
		t.text = "Lv . 10";
		t.textAlign = "center";
		t.width = 146;
		t.x = 0;
		t.y = 78;
		return t;
	};
	_proto.win_name_i = function () {
		var t = new eui.Label();
		this.win_name = t;
		t.height = 32;
		t.size = 32;
		t.stroke = 2;
		t.strokeColor = 0x80631f;
		t.text = "NAME";
		t.textAlign = "center";
		t.textColor = 0xffdf8d;
		t.width = 146;
		t.x = 4;
		t.y = 40;
		return t;
	};
	_proto.win_group_center_i = function () {
		var t = new eui.Group();
		this.win_group_center = t;
		t.height = 500;
		t.horizontalCenter = 0;
		t.width = 540;
		t.x = 5;
		t.y = 439;
		t.elementsContent = [this._Image16_i(),this._Image17_i(),this._Image18_i(),this._Image19_i(),this._Image20_i(),this._Image21_i(),this._Image22_i(),this._Image23_i(),this._Image24_i(),this._Image25_i(),this._Image26_i(),this._Image27_i(),this._Image28_i(),this._Image29_i(),this.win_facility_label_i(),this.win_monster_label_i(),this.win_exp_label_i(),this.win_reward_label_i(),this.win_processbar_facility_i(),this.win_processbar_monster_i(),this.win_facility_number_i(),this.win_monster_number_i(),this.win_processbar_exp_i(),this.win_icon1_i(),this.win_icon2_i(),this.win_icon3_i(),this.win_btn_i(),this._Image30_i(),this._Image31_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "battleSettlement_panel_img_01";
		t.x = 35;
		t.y = 4;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.source = "battleSettlement_panel_win";
		t.width = 156;
		t.x = 201;
		t.y = -9;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.height = 13;
		t.source = "battleSettlement_panel_img_04";
		t.width = 15;
		t.x = 52;
		t.y = 76;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.height = 13;
		t.source = "battleSettlement_panel_img_04";
		t.width = 15;
		t.x = 52;
		t.y = 141;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.height = 13;
		t.source = "battleSettlement_panel_img_04";
		t.width = 15;
		t.x = 52;
		t.y = 219;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.height = 13;
		t.source = "battleSettlement_panel_img_04";
		t.width = 15;
		t.x = 228;
		t.y = 175.5;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.height = 13;
		t.source = "battleSettlement_panel_img_05";
		t.width = 15;
		t.x = 487;
		t.y = 219;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.height = 13;
		t.source = "battleSettlement_panel_img_05";
		t.width = 15;
		t.x = 318.5;
		t.y = 179;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.height = 45;
		t.horizontalCenter = 3;
		t.source = "battleSettlement_panel_img_03";
		t.width = 404;
		t.y = 59;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.height = 45;
		t.horizontalCenter = 7;
		t.source = "battleSettlement_panel_img_03";
		t.width = 404;
		t.y = 125;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.height = 55;
		t.horizontalCenter = 2;
		t.source = "battleSettlement_panel_img_03";
		t.width = 404;
		t.y = 197;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.height = 29;
		t.source = "battleSettlement_stick_bg";
		t.width = 295;
		t.x = 205;
		t.y = 71;
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.height = 9;
		t.source = "battleSettlement_panel_img_02";
		t.width = 432;
		t.x = 58.54;
		t.y = 274;
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.height = 29;
		t.source = "battleSettlement_stick_bg";
		t.width = 295;
		t.x = 205;
		t.y = 135.5;
		return t;
	};
	_proto.win_facility_label_i = function () {
		var t = new eui.Label();
		this.win_facility_label = t;
		t.height = 26;
		t.size = 26;
		t.text = "升级的设施";
		t.textColor = 0x765851;
		t.width = 150;
		t.x = 71.04;
		t.y = 70;
		return t;
	};
	_proto.win_monster_label_i = function () {
		var t = new eui.Label();
		this.win_monster_label = t;
		t.height = 26;
		t.size = 26;
		t.text = "升级的怪兽";
		t.textColor = 0x765851;
		t.width = 150;
		t.x = 71.04;
		t.y = 135;
		return t;
	};
	_proto.win_exp_label_i = function () {
		var t = new eui.Label();
		this.win_exp_label = t;
		t.height = 26;
		t.size = 26;
		t.text = "EXP";
		t.textColor = 0x765851;
		t.width = 62;
		t.x = 257;
		t.y = 172;
		return t;
	};
	_proto.win_reward_label_i = function () {
		var t = new eui.Label();
		this.win_reward_label = t;
		t.backgroundColor = 0x765851;
		t.height = 30;
		t.size = 30;
		t.text = "获得奖励";
		t.textAlign = "center";
		t.textColor = 0x765851;
		t.width = 540;
		t.x = 1;
		t.y = 258;
		return t;
	};
	_proto.win_processbar_facility_i = function () {
		var t = new eui.ProgressBar();
		this.win_processbar_facility = t;
		t.skinName = "win_ProcessBar_Facility_Skin";
		t.value = 0;
		t.x = 229;
		t.y = 73.66;
		return t;
	};
	_proto.win_processbar_monster_i = function () {
		var t = new eui.ProgressBar();
		this.win_processbar_monster = t;
		t.skinName = "win_ProcessBar_Monster_Skin";
		t.value = 0;
		t.x = 229;
		t.y = 138.33;
		return t;
	};
	_proto.win_facility_number_i = function () {
		var t = new eui.Label();
		this.win_facility_number = t;
		t.height = 26;
		t.size = 26;
		t.stroke = 2;
		t.strokeColor = 0x000000;
		t.text = "x 3";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 98;
		t.x = 373;
		t.y = 64;
		return t;
	};
	_proto.win_monster_number_i = function () {
		var t = new eui.Label();
		this.win_monster_number = t;
		t.height = 26;
		t.size = 26;
		t.stroke = 2;
		t.strokeColor = 0x000000;
		t.text = "x 3";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 98;
		t.x = 374;
		t.y = 130;
		return t;
	};
	_proto.win_processbar_exp_i = function () {
		var t = new game.ExpProcessBarView();
		this.win_processbar_exp = t;
		t.skinName = "win_ProcessBar_EXP_Skin";
		t.value = 0;
		t.x = 74.04;
		t.y = 205;
		return t;
	};
	_proto.win_icon1_i = function () {
		var t = new game.CommonIconItemView();
		this.win_icon1 = t;
		t.skinName = "common_IconItem_Skin";
		t.width = 104;
		t.x = 111;
		t.y = 292;
		return t;
	};
	_proto.win_icon2_i = function () {
		var t = new game.CommonIconItemView();
		this.win_icon2 = t;
		t.skinName = "common_IconItem_Skin";
		t.width = 104;
		t.x = 220;
		t.y = 292;
		return t;
	};
	_proto.win_icon3_i = function () {
		var t = new game.CommonIconItemView();
		this.win_icon3 = t;
		t.skinName = "common_IconItem_Skin";
		t.width = 104;
		t.x = 331;
		t.y = 292;
		return t;
	};
	_proto.win_btn_i = function () {
		var t = new game.CommonRedBtnView();
		this.win_btn = t;
		t.height = 74;
		t.skinName = "common_Button_Red_Skin";
		t.width = 180;
		t.x = 183;
		t.y = 412;
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.height = 71;
		t.source = "battleSettlement_panel_img_06";
		t.width = 127;
		t.x = 90.32;
		t.y = 399.42;
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		t.height = 71;
		t.source = "battleSettlement_panel_img_07";
		t.width = 127;
		t.x = 324.95;
		t.y = 398.75;
		return t;
	};
	return battle_Win_Skin;
})(eui.Skin);generateEUI.paths['resource/ZL/skins/bottom/bottom_skill.exml'] = window.bottom_skill = (function (_super) {
	__extends(bottom_skill, _super);
	function bottom_skill() {
		_super.call(this);
		this.skinParts = ["count","total"];
		
		this.height = 90;
		this.width = 80;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.count_i(),this.total_i()];
	}
	var _proto = bottom_skill.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "bottom_skill_02";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "bottom_skill_03";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.percentHeight = 48;
		t.horizontalCenter = 0;
		t.source = "bottom_skill_01";
		t.verticalCenter = 0;
		t.percentWidth = 60;
		return t;
	};
	_proto.count_i = function () {
		var t = new eui.Label();
		this.count = t;
		t.percentHeight = 50;
		t.left = -2;
		t.size = 18;
		t.stroke = 2;
		t.strokeColor = 0x3F8BCB;
		t.text = "1";
		t.textAlign = "right";
		t.top = 2;
		t.verticalAlign = "bottom";
		t.percentWidth = 50;
		return t;
	};
	_proto.total_i = function () {
		var t = new eui.Label();
		this.total = t;
		t.bottom = -2;
		t.percentHeight = 50;
		t.right = 2;
		t.size = 18;
		t.stroke = 2;
		t.strokeColor = 0x3F8BCB;
		t.text = "10";
		t.textAlign = "left";
		t.verticalAlign = "top";
		t.percentWidth = 50;
		return t;
	};
	return bottom_skill;
})(eui.Skin);generateEUI.paths['resource/ZL/skins/bottom/skill_item.exml'] = window.skill_item = (function (_super) {
	__extends(skill_item, _super);
	function skill_item() {
		_super.call(this);
		this.skinParts = ["image","count"];
		
		this.height = 88;
		this.width = 120;
		this.elementsContent = [this.image_i(),this._Image1_i(),this.count_i()];
	}
	var _proto = skill_item.prototype;

	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.percentHeight = 100;
		t.horizontalCenter = "-6%";
		t.source = "bottom_button_skill01";
		t.verticalCenter = 0;
		t.percentWidth = 73;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 52;
		t.horizontalCenter = "50%";
		t.source = "bottom_common_01";
		t.top = 0;
		t.percentWidth = 34;
		return t;
	};
	_proto.count_i = function () {
		var t = new eui.Label();
		this.count = t;
		t.percentHeight = 52;
		t.horizontalCenter = "50%";
		t.size = 18;
		t.stroke = 2;
		t.strokeColor = 0xcc3c54;
		t.text = "20";
		t.textAlign = "center";
		t.top = 0;
		t.verticalAlign = "middle";
		t.percentWidth = 34;
		return t;
	};
	return skill_item;
})(eui.Skin);generateEUI.paths['resource/ZL/skins/bottom/GameUIViewBottom.exml'] = window.GameUIViewBottomSkin = (function (_super) {
	__extends(GameUIViewBottomSkin, _super);
	function GameUIViewBottomSkin() {
		_super.call(this);
		this.skinParts = ["skill","group_skill_01","group_skill_02","group_skill_03","group_skill_04","group_skill"];
		
		this.height = 112;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.skill_i(),this.group_skill_i()];
	}
	var _proto = GameUIViewBottomSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "bottom_common_02";
		t.percentWidth = 100;
		return t;
	};
	_proto.skill_i = function () {
		var t = new game.BottomSkill();
		this.skill = t;
		t.bottom = 0;
		t.left = "1%";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "bottom_skill";
		t.percentWidth = 12.5;
		return t;
	};
	_proto.group_skill_i = function () {
		var t = new eui.Group();
		this.group_skill = t;
		t.bottom = 0;
		t.right = 5;
		t.percentWidth = 75;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.group_skill_01_i(),this.group_skill_02_i(),this.group_skill_03_i(),this.group_skill_04_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.horizontalAlign = "center";
		t.paddingLeft = 0;
		t.paddingRight = 0;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.group_skill_01_i = function () {
		var t = new game.BottomSkillItem();
		this.group_skill_01 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.percentWidth = 25;
		t.skinName = "skill_item";
		t.verticalCenter = 0;
		return t;
	};
	_proto.group_skill_02_i = function () {
		var t = new game.BottomSkillItem();
		this.group_skill_02 = t;
		t.label = "";
		t.percentWidth = 25;
		t.skinName = "skill_item";
		t.x = 320;
		t.y = 13;
		return t;
	};
	_proto.group_skill_03_i = function () {
		var t = new game.BottomSkillItem();
		this.group_skill_03 = t;
		t.label = "";
		t.percentWidth = 25;
		t.skinName = "skill_item";
		t.x = 376;
		t.y = 23;
		return t;
	};
	_proto.group_skill_04_i = function () {
		var t = new game.BottomSkillItem();
		this.group_skill_04 = t;
		t.label = "";
		t.percentWidth = 25;
		t.skinName = "skill_item";
		t.x = 423;
		t.y = 35;
		return t;
	};
	return GameUIViewBottomSkin;
})(eui.Skin);generateEUI.paths['resource/ZL/skins/top/btn_area.exml'] = window.btn_area = (function (_super) {
	__extends(btn_area, _super);
	function btn_area() {
		_super.call(this);
		this.skinParts = [];
		
		this.currentState = "goFar";
		this.height = 63;
		this.width = 113;
		this.elementsContent = [this._Image1_i(),this._Label1_i()];
		this.states = [
			new eui.State ("goFar",
				[
				])
			,
			new eui.State ("goNear",
				[
					new eui.SetProperty("_Image1","source","top_button_goNear"),
					new eui.SetProperty("_Label1","text","最近")
				])
		];
	}
	var _proto = btn_area.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "top_button_goFar";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "汉仪粗宋简";
		t.percentHeight = 100;
		t.right = 0;
		t.size = 22;
		t.stroke = 2;
		t.strokeColor = 0xcc3c54;
		t.text = "最远";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.percentWidth = 60;
		return t;
	};
	return btn_area;
})(eui.Skin);generateEUI.paths['resource/ZL/skins/top/btn_auto.exml'] = window.btn_auto = (function (_super) {
	__extends(btn_auto, _super);
	function btn_auto() {
		_super.call(this);
		this.skinParts = [];
		
		this.currentState = "auto";
		this.height = 63;
		this.width = 113;
		this.elementsContent = [this._Image1_i(),this._Label1_i()];
		this.states = [
			new eui.State ("auto",
				[
				])
			,
			new eui.State ("handMove",
				[
					new eui.SetProperty("_Image1","source","top_button_handmove"),
					new eui.SetProperty("_Label1","text","手动")
				])
		];
	}
	var _proto = btn_auto.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "top_button_auto";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "汉仪粗宋简";
		t.percentHeight = 100;
		t.right = 0;
		t.size = 22;
		t.stroke = 2;
		t.strokeColor = 0x000000;
		t.text = "自动";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.percentWidth = 60;
		return t;
	};
	return btn_auto;
})(eui.Skin);generateEUI.paths['resource/ZL/skins/top/btn_x.exml'] = window.btn_x = (function (_super) {
	__extends(btn_x, _super);
	function btn_x() {
		_super.call(this);
		this.skinParts = [];
		
		this.currentState = "x1";
		this.height = 63;
		this.width = 113;
		this.elementsContent = [this._Image1_i(),this._Label1_i()];
		this.states = [
			new eui.State ("x1",
				[
				])
			,
			new eui.State ("x2",
				[
					new eui.SetProperty("_Image1","source","top_button_x2"),
					new eui.SetProperty("_Label1","text","X2")
				])
		];
	}
	var _proto = btn_x.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "top_button_x1";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "汉仪粗宋简";
		t.percentHeight = 100;
		t.right = 0;
		t.size = 22;
		t.stroke = 2;
		t.strokeColor = 0xcc3c54;
		t.text = "X1";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.percentWidth = 60;
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
		t.source = "top_common_01";
		t.verticalCenter = 0;
		t.percentWidth = 90;
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.percentHeight = 80;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "top_icon_gold";
		t.verticalCenter = 0;
		t.percentWidth = 28;
		return t;
	};
	_proto.label_i = function () {
		var t = new eui.Label();
		this.label = t;
		t.percentHeight = 100;
		t.left = "25%";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
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
		
		this.height = 37;
		this.width = 152;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this._Image2_i(),this.label_i()];
	}
	var _proto = progress_top.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "top_bloodStick_03";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "top_bloodStick_02";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "top_bloodStick_01";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.label_i = function () {
		var t = new eui.Label();
		this.label = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.size = 22;
		t.stroke = 2;
		t.strokeColor = 0xcc3c54;
		t.text = "310\320";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return progress_top;
})(eui.Skin);generateEUI.paths['resource/ZL/skins/top/GameUIViewTop.exml'] = window.GameUIViewTopSkin = (function (_super) {
	__extends(GameUIViewTopSkin, _super);
	var GameUIViewTopSkin$Skin2 = 	(function (_super) {
		__extends(GameUIViewTopSkin$Skin2, _super);
		function GameUIViewTopSkin$Skin2() {
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
		var _proto = GameUIViewTopSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "top_button_more";
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
		return GameUIViewTopSkin$Skin2;
	})(eui.Skin);

	function GameUIViewTopSkin() {
		_super.call(this);
		this.skinParts = ["bg","title","progress","coin","times","btn_area","btn_x","btn_auto"];
		
		this.height = 230;
		this.width = 640;
		this.elementsContent = [this.bg_i(),this._Group1_i(),this.btn_area_i(),this.btn_x_i(),this.btn_auto_i()];
	}
	var _proto = GameUIViewTopSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.percentHeight = 45;
		t.horizontalCenter = 0;
		t.source = "top_common_02";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.percentHeight = 24;
		t.horizontalCenter = 0;
		t.top = 5;
		t.percentWidth = 95;
		t.layout = this._BasicLayout1_i();
		t.elementsContent = [this.title_i(),this.progress_i(),this.coin_i(),this.times_i(),this._Button1_i()];
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Image();
		this.title = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 70;
		t.left = 12;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "top_common_03";
		t.verticalCenter = 0;
		t.percentWidth = 20;
		return t;
	};
	_proto.progress_i = function () {
		var t = new game.CommonProcessBar();
		this.progress = t;
		t.percentHeight = 70;
		t.left = "27%";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "progress_top";
		t.value = 30;
		t.verticalCenter = 0;
		t.percentWidth = 24;
		return t;
	};
	_proto.coin_i = function () {
		var t = new game.TopCoin();
		this.coin = t;
		t.percentHeight = 90;
		t.left = "51%";
		t.skinName = "coin";
		t.verticalCenter = 0;
		t.percentWidth = 24;
		return t;
	};
	_proto.times_i = function () {
		var t = new game.TopCoin();
		this.times = t;
		t.percentHeight = 90;
		t.left = "70%";
		t.skinName = "coin";
		t.verticalCenter = 0;
		t.percentWidth = 24;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.percentHeight = 85;
		t.label = "";
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.percentWidth = 8;
		t.skinName = GameUIViewTopSkin$Skin2;
		return t;
	};
	_proto.btn_area_i = function () {
		var t = new eui.Button();
		this.btn_area = t;
		t.percentHeight = 27;
		t.label = "";
		t.left = "2%";
		t.skinName = "btn_area";
		t.top = "41%";
		t.percentWidth = 18;
		return t;
	};
	_proto.btn_x_i = function () {
		var t = new eui.Button();
		this.btn_x = t;
		t.percentHeight = 27;
		t.label = "";
		t.right = "2%";
		t.skinName = "btn_x";
		t.top = "41%";
		t.percentWidth = 18;
		return t;
	};
	_proto.btn_auto_i = function () {
		var t = new eui.Button();
		this.btn_auto = t;
		t.percentHeight = 27;
		t.label = "";
		t.right = "2%";
		t.skinName = "btn_auto";
		t.top = "72%";
		t.percentWidth = 18;
		return t;
	};
	return GameUIViewTopSkin;
})(eui.Skin);