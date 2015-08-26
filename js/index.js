var main = {};
main.menuData = [
{
        className: 'BMapLib.HeatmapOverlay',
        classFunc: true,
        classEvent: false
    },
    {
        className: 'BMapLib.CurveLine',
        classFunc: false,
        classEvent: false
    },
    {
        className: 'BMapLib.DrawingManager',
        classFunc: true,
        classEvent: true
    },
    {
        className: 'BMapLib.InfoBox',
        classFunc: true,
        classEvent: true
    },
    {
        className: 'BMapLib.MarkerManager',
        classFunc: true,
        classEvent: false
    },
    {
        className: 'BMapLib.RichMarker',
        classFunc: true,
        classEvent: true
    },
    {
        className: 'BMapLib.LuShu',
        classFunc: true,
        classEvent: false
    },
    {
        className: 'BMapLib.DistanceTool',
        classFunc: true,
        classEvent: true
    },
    {
        className: 'BMapLib.MarkerClusterer',
        classFunc: true,
        classEvent: false
    },
    {
        className: 'BMapLib.MarkerTool',
        classFunc: true,
        classEvent: true
    },
    {
        className: 'BMapLib.TextIconOverlay',
        classFunc: true,
        classEvent: true
    },
    {
        className: 'BMapLib.RectangleZoom',
        classFunc: true,
        classEvent: true
    },
    {
        className: 'BMapLib.MarkerClusterer',
        classFunc: true,
        classEvent: false
    },
    {
        className: 'BMapLib.AreaRestriction',
        classFunc: true,
        classEvent: false
    },
    {
        className: 'BMapLib.GeoUtils',
        classFunc: true,
        classEvent: false
    }
];

main.classData = [
    {
        className: 'BMapLib.HeatmapOverlay',
        classDis: '热力图的覆盖物 实例化该类后，使用map.addOverlay即可以添加热力图',
        classCon: 'BMapLib.HeatmapOverlay(opts)',
        classConDis: '热力图的覆盖物',
        functions: [
            {
                funName: 'addDataPoint(lng, lat, count)',
                funBack: '无',
                funDis: '添加热力图的详细坐标点'

            },
            {
                funName: 'setDataSet(data)',
                funBack: '无',
                funDis: '设置热力图展现的详细数据, 实现之后,即可以立刻展现'

            },
            {
                funName: 'setOptions(options)',
                funBack: '无',
                funDis: '设置热力图展现的配置'

            },
            {
                funName: 'toggle()',
                funBack: '无',
                funDis: '更改热力图的展现或者关闭'

            }
        ],
        events: [
        ],
        example:[
            'var map = new BMap.Map("container");\n',
            'map.centerAndZoom(new BMap.Point(116.404, 39.915), 15);\n',
            '/* 参数:\n',
            ' * {Json Object} opts 可选的输入参数，非必填项。可输入选项包括：\n',
            ' * {\n',
            ' *\t"radius" : {String} 热力图的半径,\n',
            ' *\t"visible" : {Number} 热力图是否显示 \n',
            ' *\t"gradient" : {JSON} 热力图的渐变区间 \n',
            ' *\t"opacity" : {Number} 热力的透明度\n',
            ' * }\n',
            ' * /\n',
            'var heatmapOverlay = new BMapLib.HeatmapOverlay({"radius":10, "visible":true, "opacity":70});\n',
            '// data是热力图的详细数据\n',
            'heatmapOverlay.setDataSet(data);\n'
        ],
        funcDet:[
            '/* 添加热力图的详细坐标点\n',
            ' * @param {Number} lng 经度坐标\n',
            ' * @param {Number} lat 纬度坐标\n',
            ' * @param {Number} count 权重\n',
            ' */\n',
            'addDataPoint(lng, lat, count);\n',
            ' \n',
            '/* 设置热力图展现的详细数据, 实现之后,即可以立刻展现\n',
            ' * @param {Json Object} data 经度坐标\n',
            ' * {\n',
            ' *\t"max" : {Number} 权重的最大值, \n',
            ' *\t"data" : {Array} 坐标详细数据,格式如下\n', 
            ' *\t{"lng":116.421969,"lat":39.913527,"count":3}, 其中lng lat分别为经纬度, count权重值\n',
            ' * }\n',
            ' */\n',
            'setDataSet(data);\n',
            ' \n',
            '/* 设置热力图展现的配置\n',
            ' * \n',
            ' * @param {Json Object} options 可选的输入参数，非必填项。可输入选项包括：\n',
            ' * {\n',
            ' *\t"radius" : {String} 热力图的半径, \n',
            ' *\t"visible" : {Number} 热力图是否显示, \n',
            ' *\t"gradient" : {JSON} 热力图的渐变区间, \n',
            ' *\t"opacity" : {Number} 热力的透明度\n',
            ' * }\n',
            ' */\n',
            'setOptions(options);\n',
        ],
        eveDet:[            
        ]
    },
    {
        className: 'BMapLib.CurveLine',
        classDis: '弧线类，实现效果的入口。 实例化该类后，即可返回一个弧线的Polyline对象，使用方法同Polyline 即可调用map.addOverlay方法添加到地图当中 ',
        classCon: 'BMapLib.CurveLine(Array, opts)',
        classConDis: 'CurveLine类的构造函数',
        functions: [],
        events: [],
        example:[
            'var map = new BMap.Map("container");\n',
            'map.centerAndZoom(new BMap.Point(116.404, 39.915), 15);\n',
            'var points = [\n',
            '\tnew BMap.Point(116.432045,39.910683),\n', 
            '\tnew BMap.Point(116.388522,39.985964),\n',
            '\tnew BMap.Point(117.218862,39.141468),\n',
            '\tnew BMap.Point(121.485947,31.510083)\n',
            '];\n',
            '// 新建弧线覆盖物对象\n',
            '/* 参数:\n',
            ' * {Array} Array Point数组对象\n',
            ' * {Json Object} opts 可选的输入参数，非必填项。可输入选项参考<a href="http://developer.baidu.com/map/reference/index.php?title=Class:%E8%A6%86%E7%9B%96%E7%89%A9%E7%B1%BB/PolylineOptions" target="_blank">PolylineOptions</a> \n',
            ' * /\n',
            'var curve = new BMapLib.CurveLine(points, {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.5});\n',
            '// 添加到地图\n',
            'map.addOverlay(curve);\n',
            '// 开启编辑功能\n',
            'curve.enableEditing();\n'
        ],
        funcDet:[],
        eveDet:[]
    },
    {
        className: 'BMapLib.DrawingManager',
        classDis: '鼠标绘制管理类，实现鼠标绘制管理的入口。 实例化该类后，即可调用该类提供的open 方法开启绘制模式状态。 也可加入工具栏进行选择操作。 ',
        classCon: 'BMapLib.DrawingManager(map, opts)',
        classConDis: 'DrawingManager类的构造函数',
        functions: [
            {
                funName: 'close()',
                funBack: '无',
                funDis: '关闭地图的绘制状态'

            },
            {
                funName: 'disableCalculate()',
                funBack: '无',
                funDis: '关闭距离或面积计算'

            },
            {
                funName: 'enableCalculate()',
                funBack: '无',
                funDis: '打开距离或面积计算'

            },
            {
                funName: 'getDrawingMode()',
                funBack: 'DrawingType',
                funDis: '获取当前的绘制模式'

            },
            {
                funName: 'open()',
                funBack: '无',
                funDis: '开启地图的绘制模式'

            },
            {
                funName: 'setDrawingMode(DrawingType)',
                funBack: 'Boolean',
                funDis: '设置当前的绘制模式，参数DrawingType，为5个可选常量:\nBMAP_DRAWING_MARKER 画点\nBMAP_DRAWING_CIRCLE 画圆 \nBMAP_DRAWING_POLYLINE 画线 \nBMAP_DRAWING_POLYGON 画多边形 \nBMAP_DRAWING_RECTANGLE 画矩形'
            }
        ],
        events: [
            {
                eveName: 'circlecomplete(overlay)',
                evePara: '{Circle}',
                eveDis: '绘制圆完成后，派发的事件接口'
            },
            {
                eveName: 'markercomplete(overlay)',
                evePara: '{Marker}',
                eveDis: '绘制点完成后，派发的事件接口'
            },
            {
                eveName: 'overlaycomplete(e)',
                evePara: '{Event Object}',
                eveDis: '鼠标绘制完成后，派发总事件的接口'
            },
            {
                eveName: 'polygoncomplete(overlay)',
                evePara: '{Polygon}',
                eveDis: '绘制多边形完成后，派发的事件接口'
            },
            {
                eveName: 'polylinecomplete(overlay)',
                evePara: '{Polyline}',
                eveDis: '绘制线完成后，派发的事件接口'
            },
            {
                eveName: 'rectanglecomplete(overlay)',
                evePara: '{Polygon}',
                eveDis: '绘制矩形完成后，派发的事件接口'
            }
        ],
        example:[
            'var map = new BMap.Map("container");\n',
            'map.centerAndZoom(new BMap.Point(116.404, 39.915), 15);\n',
            '/* 参数:\n',
            ' * {Map} map Baidu map的实例对象\n',
            ' * {Json Object} opts 可选的输入参数，非必填项。可输入选项包括：\n',
            ' * {\n',
            ' *\t"isOpen" : {Boolean} 是否开启绘制模式 \n',
            ' *\t"enableDrawingTool" : {Boolean} 是否添加绘制工具栏控件，默认不添加 \n',
            ' *\t"drawingToolOptions" : {Json Object} 可选的输入参数，非必填项。可输入选项包括 \n',
            ' *\t{\n',
            ' *\t\t"anchor" : {ControlAnchor} 停靠位置、默认左上角 \n',
            ' *\t\t"offset" : {Size} 偏移值 \n',
            ' *\t\t"scale" : {Number} 工具栏的缩放比例,默认为1 \n',
            ' *\t\t"drawingModes" : {DrawingType} 工具栏上可以选择出现的绘制模式,将需要显示的DrawingType以数组型形式传入\n',
            ' *\t\t如[BMAP_DRAWING_MARKER, BMAP_DRAWING_CIRCLE] 将只显示画点和画圆的选项\n',
            ' *\t}\n',
            ' *\t"enableCalculate" : {Boolean} 绘制是否进行测距(画线时候)、测面(画圆、多边形、矩形) \n',
            ' *\t"markerOptions" : {CircleOptions} 所画的点的可选参数，参考api中的对应类 \n',
            ' *\t"circleOptions" : {CircleOptions} 所画的圆的可选参数，参考api中的对应类 \n',
            ' *\t"polylineOptions" : {CircleOptions} 所画的线的可选参数，参考api中的对应类 \n',
            ' *\t"polygonOptions" : {PolygonOptions} 所画的多边形的可选参数，参考api中的对应类 \n',
            ' *\t"rectangleOptions" : {PolygonOptions} 所画的矩形的可选参数，参考api中的对应类\n',
            ' * }\n',
            ' */\n',
            'var myDrawingManagerObject = new BMapLib.DrawingManager(map, {\n',
            '\tisOpen: true, \n',
            '\tdrawingType: BMAP_DRAWING_MARKER, \n',
            '\tenableDrawingTool: true, \n',
            '\tenableCalculate: false, \n',
            '\tdrawingToolOptions: {\n',
            '\t\tanchor: BMAP_ANCHOR_TOP_LEFT,\n',
            '\t\toffset: new BMap.Size(5, 5),\n',
            '\t\tdrawingTypes : [\n',
            '\t\t\tBMAP_DRAWING_MARKER,\n',
            '\t\t\tBMAP_DRAWING_CIRCLE,\n',
            '\t\t\tBMAP_DRAWING_POLYLINE,\n',
            '\t\t\tBMAP_DRAWING_POLYGON,\n',
            '\t\t\tBMAP_DRAWING_RECTANGLE\n',
            '\t\t]\n',
            '\t},\n',
            '\tpolylineOptions: {\n',
            '\t\tstrokeColor: "#333"\n',
            '\t}\n',
            ');\n'
        ],
        funcDet:[
            '/* 关闭地图的绘制状态\n',
            ' */\n',
            'myDrawingManagerObject.close();\n',
            ' \n',
            '/* 关闭距离或面积计算\n',
            ' */\n',
            'myDrawingManagerObject.disableCalculate();\n',
            ' \n',
            '/* 打开距离或面积计算\n',
            ' */\n',
            'myDrawingManagerObject.enableCalculate();\n',
            ' \n',
            '/* 获取当前的绘制模式\n',
            ' * @return {DrawingType} 绘制的模式',
            ' */\n',
            'alert(myDrawingManagerObject.getDrawingMode());\n',
            ' \n',
            '/* 开启地图的绘制模式\n',
            ' */\n',
            'myDrawingManagerObject.open();\n',
            ' \n',
            '/* 设置当前的绘制模式\n',
            ' * @param {DrawingType} DrawingType 为5个可选常量:\n',
            ' * \tBMAP_DRAWING_MARKER 画点 \n',
            ' * \tBMAP_DRAWING_CIRCLE 画圆\n',
            ' * \tBMAP_DRAWING_POLYLINE 画线\n',
            ' * \tBMAP_DRAWING_POLYGON 画多边形\n',
            ' * \tBMAP_DRAWING_RECTANGLE 画矩形\n',
            ' * @return {Boolean} 是否设置成功',
            ' */\n',
            'myDrawingManagerObject.setDrawingMode(BMAP_DRAWING_POLYLINE);\n',
            ' \n'
        ],
        eveDet:[
            '/* 绘制圆完成后，派发的事件接口\n',
            ' * @param {Circle} overlay 回调函数会返回相应的覆盖物:\n',
            ' */\n',
            'myDrawingManagerObject.addEventListener("circlecomplete", function(overlay) {\n',
            '\talert(overlay);\n',
            '});\n',
            ' \n',
            '/* 绘制点完成后，派发的事件接口\n',
            ' * @param {Marker} overlay 回调函数会返回相应的覆盖物:\n',
            ' */\n',
            'myDrawingManagerObject.addEventListener("markercomplete", function(overlay) {\n',
            '\talert(overlay);\n',
            '});\n',
            ' \n',
            '/* 鼠标绘制完成后，派发总事件的接口\n',
            ' * @param {Event Object} e 回调函数会返回event参数，包括以下返回值：\n',
            ' * {\n',
            ' *\t"drawingMode : {DrawingType} 当前的绘制模式 \n',
            ' *\t"overlay：{Marker||Polyline||Polygon||Circle} 对应的绘制模式返回对应的覆盖物 \n',
            ' *\t"calculate：{Number} 需要开启计算模式才会返回这个值，\n',
            ' *\t当绘制线的时候返回距离、绘制多边形、圆、矩形时候返回面积，单位为米\n',
            ' *\t"label：{Label} 计算面积时候出现在Map上的Label对象\n',
            ' * }\n',
            ' */\n',
            'myDrawingManagerObject.addEventListener("overlaycomplete", function(e) {\n',
            '\talert(e.drawingMode);\n',
            '\talert(e.overlay);\n',
            '\talert(e.calculate);\n',
            '\talert(e.label);\n',
            '});\n',
            ' \n',
            '/* 绘制多边形完成后，派发的事件接口\n',
            ' * @param {Polygon} overlay 回调函数会返回相应的覆盖物:\n',
            ' */\n',
            'myDrawingManagerObject.addEventListener("polygoncomplete", function(overlay) {\n',
            '\talert(overlay);\n',
            '});\n',
            ' \n',
            '/* 绘制线完成后，派发的事件接口\n',
            ' * @param {Polyline} overlay 回调函数会返回相应的覆盖物:\n',
            ' */\n',
            'myDrawingManagerObject.addEventListener("polylinecomplete", function(overlay) {\n',
            '\talert(overlay);\n',
            '});\n',
            ' \n',
            '/* 绘制矩形完成后，派发的事件接口\n',
            ' * @param {Polygon} overlay 回调函数会返回相应的覆盖物:\n',
            ' */\n',
            'myDrawingManagerObject.addEventListener("rectanglecomplete", function(overlay) {\n',
            '\talert(overlay);\n',
            '});\n',
            ' \n',
        ]
    },
        {
        className: 'BMapLib.InfoBox',
        classDis: 'InfoBox 入口。 可以自定义border,margin,padding,关闭按钮等等。  ',
        classCon: 'BMapLib.InfoBox(map, content, opts)',
        classConDis: 'InfoBox类的构造函数',
        functions: [
            {
                funName: 'close()',
                funBack: '无',
                funDis: '关闭infoBox'

            },
            {
                funName: 'disableAutoPan()',
                funBack: '无',
                funDis: '禁用自动平移'

            },
            {
                funName: 'enableAutoPan()',
                funBack: '无',
                funDis: '启用自动平移'

            },
            {
                funName: 'getOffset()',
                funBack: 'Size',
                funDis: '返回信息窗口的箭头距离信息窗口在地图 上所锚定的地理坐标点的像素偏移量。'

            },
            {
                funName: 'getPosition(none)',
                funBack: 'Point',
                funDis: '获得信息窗的地理位置'

            },
            {
                funName: 'open(anchor)',
                funBack: 'None',
                funDis: '打开infoBox'
            },
            {
                funName: 'setContent(content)',
                funBack: 'None',
                funDis: '设置infoBox的内容'

            },
            {
                funName: 'setPosition(point)',
                funBack: 'None',
                funDis: '设置信息窗的地理位置'
            }
        ],
        events: [
            {
                eveName: 'Close(e)',
                evePara: '{Event Object}',
                eveDis: '关闭infoBox时，派发事件的接口'
            },
            {
                eveName: 'Open(e)',
                evePara: '{Event Object}',
                eveDis: '打开infoBox时，派发事件的接口'
            }
        ],
        example:[
            '/* 参数:\n',
            ' * {Map} map Baidu map的实例对象\n',
            ' * {String} content infoBox中的内容\n',
            ' * {Json Object} opts 可选的输入参数，非必填项。可输入选项包括：\n',
            ' * {\n',
            ' *\t"offset" : {Size} infoBox的偏移量 \n',
            ' *\t"boxClass" : {String} 定义infoBox的class, \n',
            ' *\t"boxStyle" : {Json} 定义infoBox的style,此项会覆盖boxClass\n',
            ' *\t"closeIconMargin" : {String} 关闭按钮的margin \n',
            ' *\t"closeIconUrl" : {String} 关闭按钮的url地址 \n',
            ' *\t"enableAutoPan" : {Boolean} 是否启动自动平移功能 \n',
            ' *\t"align" : {Number} 基于哪个位置进行定位，取值为[INFOBOX_AT_TOP,INFOBOX_AT_BOTTOM]\n',
            ' */\n',
            'var infoBox = new BMapLib.InfoBox(map,"百度地图api",{\n',
            '\tboxStyle:{background:"url(\'tipbox.gif\') no-repeat center top",width: "200px"},\n',
            '\tcloseIconMargin: "10px 2px 0 0", \n',
            '\tenableAutoPan: true, \n',
            '\talignBottom: false\n',
            '});\n'
        ],
        funcDet:[
            '/* 关闭infoBox\n',
            ' */\n',
            'infoBox.close();\n',
            ' \n',
            '/* 禁用自动平移\n',
            ' */\n',
            'infoBox.disableAutoPan();\n',
            ' \n',
            '/* 启用自动平移\n',
            ' */\n',
            'infoBox.enableAutoPan();\n',
            ' \n',
            '/* 返回信息窗口的箭头距离信息窗口在地图 上所锚定的地理坐标点的像素偏移量。n',
            ' * @return {Size} 偏移量',
            ' */\n',
            'infoBox.getOffset();\n',
            ' \n',
            '/* 获得信息窗的地理位置\n',
            ' * @return {Point} 信息窗的地理坐标',
            ' */\n',
            'infoBox.getPosition();\n',
            ' \n',
            '/* 打开infoBox\n',
            ' * @param {Marker|Point} anchor 要在哪个marker或者point上打开infobox\n',
            ' */\n',
            'infoBox.open();\n',
            ' \n',
            '/* 设置infoBox的内容\n',
            ' * @param {String|HTMLElement} content 弹出气泡中的内容\n',
            ' */\n',
            'infoBox.setContent("百度地图API");\n',
            ' \n',
            '/* 设置信息窗的地理位置\n',
            ' * @param {Point} point 设置position\n',
            ' */\n',
            'infoBox.setPosition(new BMap.Point(116.35,39.911));\n',
            ' \n'
        ],
        eveDet:[
            '/* 关闭infoBox时，派发事件的接口\n',
            ' * @param {Event Object} e 回调函数会返回event参数，包括以下返回值:\n',
            ' * {\n',
            ' *\t"target : {BMap.Overlay} 触发事件的元素, \n',
            ' *\t"type：{String} 事件类型, \n',
            ' *\t"point：{Point} infoBox的关闭位置\n',
            ' * }\n',
            ' */\n',
            'infoBox.addEventListener("close", function(e) {\n',
            '\talert(e.type);\n',
            '});\n',
            ' \n',
            '/* 打开infoBox时，派发事件的接口\n',
            ' * @param {Event Object} e 回调函数会返回event参数，包括以下返回值:\n',
            ' * {\n',
            ' *\t"target : {BMap.Overlay} 触发事件的元素, \n',
            ' *\t"type：{String} 事件类型, \n',
            ' *\t"point：{Point} infoBox的关闭位置\n',
            ' * }\n',
            ' */\n',
            'infoBox.addEventListener("open", function(e) {\n',
            '\talert(e.type);\n',
            '});\n',
            ' \n',
        ]
    }
];
//上一个选择项
main.lastMenu = '';
$(function(){
    renderMenu();
    initEvent();
    initContent();
});

//构建菜单
function renderMenu() {
    var menuContent = '';
    $.each(main.menuData, function(i,n){
        menuContent += ' <div class="accordion-group">' 
                    + '<div class="accordion-heading">'
                    + '<a class="accordion-toggle" data-toggle="collapse" href="#collapse'+i+'">'
                    + n.className
                    + '</a>'
                    + '</div>'
                    + '<div id="collapse'+i+'" class="accordion-body collapse">'
                    + '<div class="accordion-inner"><a href="#">类说明</a></div>'
                    + (n.classFunc ? '<div class="accordion-inner"><a href="#">方法</a></div>':'')
                    + (n.classEvent ? '<div class="accordion-inner"><a href="#">事件</a></div>':'')
                    + '</div>'
                    + '</div>';
    });
    $("#menu").append(menuContent);
    $("#menu").affix({
        offset: {
            top: 0
        }
    });
}

// 设置事件响应
function initEvent() {
    $(".accordion-toggle").click(function () {
        var me = this;
        changeClass(me);
    });
}

// 处理class改变
function changeClass(me) {
    $(".accordion-toggle").removeClass('activeCla');
    $(me).addClass('activeCla');
    $(main.lastMenu).collapse('hide');
    main.lastMenu = $(me.parentNode.parentNode.lastChild);
    window.location.href='#'+me.innerHTML;
}

// 初始化内容
function initContent() {
    var allContent = '';
    var contentItemArray = [];
    for(var i = 0; i < main.classData.length; i++) {
        var conItem = main.classData[i];
        contentItemArray.push(
            '<section id = "' + conItem.className + '">'
            + '<h1>' + conItem.className + '</h1>'
            + '<hr/>'
            + '<p>' + conItem.classDis + '</p>'
            + '<table class="table table-hover table-bordered">'
            + '<tr class="info">'
            + '<td class="cla">类</td>'              
            + '<td>描述</td>'
            + '</tr>'
            + '<tr>'
            + '<td>' + conItem.classCon + '</td>'
            + '<td>' + conItem.classConDis + '</td>'
            + '</tr>'
            + '</table>'
        );
        if (conItem.functions.length !==0 ) {
            contentItemArray.push(
                '<table class="table table-hover table-bordered">'
                + '<tr class="success">'
                + '<td class="func">方法</td>'
                + '<td class="ret">返回值</td>'
                + '<td>描述</td>'
                + '</tr>'
            );
            for(var j = 0; j < conItem.functions.length; j++) {
                var funItem = conItem.functions[j];
                contentItemArray.push(
                    '<tr>'
                    + '<td>' + funItem.funName + '</td>'
                    + '<td>' + funItem.funBack + '</td>'
                    + '<td>' + funItem.funDis + '</td>'
                    + '</tr>'
                );
            }
            contentItemArray.push(
                '</table>'
            );
        }
        if (conItem.events.length !==0 ) {
            contentItemArray.push(
                '<table class="table table-hover table-bordered">'
                + '<tr class="warning">'
                + '<td class="func">事件</td>'
                + '<td class="ret">参数</td>'
                + '<td>描述</td>'
                + '</tr>'
            );
            for(var j = 0; j < conItem.events.length; j++) {
                var eventItem = conItem.events[j];
                contentItemArray.push(
                    '<tr>'
                    + '<td>' + eventItem.eveName + '</td>'
                    + '<td>' + eventItem.evePara + '</td>'
                    + '<td>' + eventItem.eveDis + '</td>'
                    + '</tr>'
                );
            }
            contentItemArray.push(
                '</table>'
            );
        }
        contentItemArray.push(
            '<h4>参考示例</h4>'
            + '<pre class="prettyprint linenums">'
        );
        for (j = 0; j < conItem.example.length; j++) {
            contentItemArray.push(conItem.example[j]);
        }
        contentItemArray.push(
            '</pre>'
        );
        if (conItem.funcDet.length !== 0) {
            contentItemArray.push(
                '<h4>方法详述</h4>'
                + '<pre class="prettyprint linenums">'
            );
            for (j = 0; j < conItem.funcDet.length; j++) {
                contentItemArray.push(conItem.funcDet[j]);
            }
            contentItemArray.push(
                '</pre>'
            );
        }
        if (conItem.eveDet.length !== 0) {
            contentItemArray.push(
                '<h4>事件详述</h4>'
                + '<pre class="prettyprint linenums">'
            );
            for (j = 0; j < conItem.eveDet.length; j++) {
                contentItemArray.push(conItem.eveDet[j]);
            }
            contentItemArray.push(
                '</pre>'
            );
        }
    }
    allContent = contentItemArray.join(" ");
    $("#mainContent").append(allContent);
}