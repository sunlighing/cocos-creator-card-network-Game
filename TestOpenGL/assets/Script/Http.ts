

var selfURL = "https://127.0.0.1:8125"; //"http://47.107.41.91:8080"; // "http://43.230.171.202:8080/api";//



const {ccclass, property} = cc._decorator;

@ccclass
export default class Http extends cc.Component {

    static sessionId = 0;
    static userId = 0;
    static m_url = selfURL;
    static url = selfURL;
    static returnValue = "";
    static recome ;

    public static sendRequest (path, data, handler, extraUrl){
        var xhr = cc.loader.getXMLHttpRequest();
        xhr.timeout = 5000;
        var str = "?"; 
        for(var k in data){
            if(str != "?"){
                str += "&";
            }
            str += k + "=" + data[k];
        }

        if(extraUrl == null || extraUrl == ""){
            extraUrl = selfURL;
        }

        var requestURL = extraUrl + path //+ encodeURI(str);
        console.log("RequestURL:" + requestURL,data);
        xhr.open("POST",requestURL, true);
        xhr.setRequestHeader('content-type',"multipart/form-data");//'application/json');
        
        if (cc.sys.isNative){
            // xhr.setRequestHeader("Accept-Encoding", "gzip,deflate", "text/html;charset=UTF-8");
        }
       
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)){
                console.log("response-> http res("+ xhr.responseText.length + "):" + xhr.responseText);
                
                try {
                    var ret = JSON.parse(xhr.responseText);
                  
                    if(handler !== null){
                         handler(ret);
                        
                    }
                } catch (e) {
                    cc.log("err:" + e);
                }
                finally{
                }
            }
        };

        xhr.send(JSON.stringify(data));
        return xhr;
    }
    
    public static sendRequestpost (path, data, handler, extraUrl){
        var xhr = cc.loader.getXMLHttpRequest();
        xhr.timeout = 5000;
        // var str = "?"; 
        // for(var k in data){
        //     if(str != "?"){
        //         str += "&";
        //     }
        //     str += k + "=" + data[k];
        // }
        // if(extraUrl == null || extraUrl == ""){
        //     extraUrl = selfURL;
        // }
        var requestURL = extraUrl + path + data
        console.log("RequestURL:" + requestURL,data);
        xhr.open("GET",requestURL, true);
        xhr.setRequestHeader('content-type', 'application/json');
        
        if (cc.sys.isNative){
            // xhr.setRequestHeader("Accept-Encoding", "gzip,deflate", "text/html;charset=UTF-8");
        }
        
       
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)){
                console.log("response-> http res("+ xhr.responseText.length + "):" + xhr.responseText);
                
                try {
                    var ret = JSON.parse(xhr.responseText);
                  
                    if(handler !== null){
                         handler(ret);
                        
                    }
                } catch (e) {
                    cc.log("err:" + e);
                }
                finally{
                }
            }
        };
        //xhr.send(JSON.stringify(data));
        return xhr;
    }
}