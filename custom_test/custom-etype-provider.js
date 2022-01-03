var customElementTypeProvider = (function() {
	return function(options) {

		var addElementTypes = function(context) {
			context.addPrintElementTypes(
				"testModule",
				[
					new hiprint.PrintElementTypeGroup("常规", [{
							tid: 'testModule.text',
							text: '文本',
							data: '',
							type: 'text'
						},
						{
							tid: 'testModule.image',
							text: '图片',
							data: 'https://img-blog.csdnimg.cn/0b29843c861e493f8c1e75dc6cce4fad.png',
							type: 'image',
							"options": {


								"src": 'https://img-blog.csdnimg.cn/0b29843c861e493f8c1e75dc6cce4fad.png'
							}
						},
						{
							tid: 'testModule.longText',
							text: '长文',
							data: '',
							type: 'longText'
						},
						{
							tid: 'testModule.table',
							field: 'table',
							text: '表格',
							type: 'table',
							groupFields: ['name'],
							groupFooterFormatter: function(group, option) {
								return '这里自定义统计脚信息';
							},
							columns: [
								[{
										title: '行号',
										fixed: true,
										rowspan: 2,
										field: 'id',
										width: 70
									},
									{
										title: '人员信息',
										colspan: 2
									},
									{
										title: '销售统计',
										colspan: 2
									}
								],
								[{
										title: '姓名',
										align: 'left',
										field: 'name',
										width: 100
									},
									{
										title: '性别',
										field: 'gender',
										width: 100
									},
									{
										title: '销售数量',
										field: 'count',
										width: 100
									},
									{
										title: '销售金额',
										field: 'amount',
										width: 100
									}
								]
							]
						},
						{
							tid: 'testModule.tableCustom',
							title: '表格',
							type: 'tableCustom'
						},
						{
							tid: 'testModule.qrcode',
							title: '个人网页',
							data: 'http://www.hinnn.com',
							type: 'text',
							"options": {
								"height": 50,
								"width": 50,
								"fontSize": 19,
								"fontWeight": "700",
								"textAlign": "center",
								"lineHeight": 39,
								"hideTitle": true,
								"textType": "qrcode"
							}
						},
						{
							tid: 'testModule.barcode',
							title: '12345678910',
							type: 'text',
							"options": {
								"height": 44,
								"width": 120,
								"textAlign": "center",
								"textType": "barcode"
							}
						},
						{
							tid: 'testModule.html',
							title: 'html',
							formatter: function(data, options) {
								return $(
									'<div style="height:50pt;width:50pt;background:red;border-radius: 50%;"></div>'
									);
							},
							type: 'html'
						},
						{
							tid: 'testModule.customText',
							text: '自定义文本',
							customText: '自定义文本',
							custom: true,
							type: 'text'
						}
					]),
					new hiprint.PrintElementTypeGroup("辅助", [{
							tid: 'testModule.hline',
							text: '横线',
							type: 'hline'
						},
						{
							tid: 'testModule.vline',
							text: '竖线',
							type: 'vline'
						},
						{
							tid: 'testModule.rect',
							text: '矩形',
							type: 'rect'
						},
						{
							tid: 'testModule.oval',
							text: '椭圆',
							type: 'oval'
						}
					])
				]
			);
		};

		return {
			addElementTypes: addElementTypes
		};

	};
})();
