exports.run_js = function (dict,ZJ_SJ_DATA) {
    // 在这里对输入的文字进行拆分 分析

    var strs = new Array(); //定义一数组
    strs = dict.js_txt.split("|"); //字符分割

        // 对语法进行分割运行

        switch (strs[0]) {
            case "ZJ_NAME":
                ZJ_SJ_DATA.ZJ_NAME = parsefuhao(ZJ_SJ_DATA.ZJ_NAME,parseInt(strs[2]),strs[1]);
                break;
            case "ZJ_SEX":
                ZJ_SJ_DATA.ZJ_SEX = parsefuhao(ZJ_SJ_DATA.ZJ_SEX,parseInt(strs[2]),strs[1]);
                break;
            case "SJ_SX":
                ZJ_SJ_DATA.SJ_SX = parsefuhao(ZJ_SJ_DATA.SJ_SX,parseInt(strs[2]),strs[1]);
                break;
            case "SJ_SD":
                ZJ_SJ_DATA.SJ_SD = parsefuhao(ZJ_SJ_DATA.SJ_SD,parseInt(strs[2]),strs[1]);
                break;
            case "ZJ_WULICZ":
                ZJ_SJ_DATA.ZJ_WULICZ = parsefuhao(ZJ_SJ_DATA.ZJ_WULICZ,parseInt(strs[2]),strs[1]);
                break;
            case "ZJ_YXXYL":
                ZJ_SJ_DATA.ZJ_YXXYL = parsefuhao(ZJ_SJ_DATA.ZJ_YXXYL,parseInt(strs[2]),strs[1]);
                break;
            case "SJ_CYTYPE":
                ZJ_SJ_DATA.SJ_CYTYPE = parsefuhao(ZJ_SJ_DATA.SJ_CYTYPE,parseInt(strs[2]),strs[1]);
                break;
            default: alert("Other");
        }

        // console.log(ZJ_SJ_DATA);
    
}

function parsefuhao(a,b,fuhao){
    
    switch (fuhao) {
        case "+":
            return a + b;
        case "=":
            return a = b;
        case "-":
            return a - b;
        default: alert("Other");
    }


}