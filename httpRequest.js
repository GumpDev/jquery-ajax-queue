http = {
    request : function(url,type,params,callback){
        var request = new XMLHttpRequest();

        if(type == undefined) type = "GET";

        var params_cache = "";
        if(params != undefined){
            var obj_asd = Object.keys(params);
            for(var i = 0; i < obj_asd.length; i++){
                if(i != 0) params_cache += "&";

                params_cache += obj_asd[i] + "=" + params[obj_asd[i]];
            }
        }

        if(type.toUpperCase() == "POST")
            type = "POST";
        else 
            type = "GET";

        request.open(type, url, true); 
        request.send(params_cache);

        if (request.status === 200) {
            callback(request.responseText);
        }
    },
    requestSync : function(url,type,params){
        var request = new XMLHttpRequest();

        if(type == undefined) type = "GET";

        var params_cache = "";
        if(params != undefined){
            var obj_asd = Object.keys(params);
            for(var i = 0; i < obj_asd.length; i++){
                if(i != 0) params_cache += "&";

                params_cache += obj_asd[i] + "=" + params[obj_asd[i]];
            }   
        }

        if(type.toUpperCase() == "POST")
            type = "POST";
        else 
            type = "GET";

        request.open(type, url, false); 
        request.send(params_cache);

        if (request.status === 200) 
            return request.responseText;
        else
            return false;
    }
}

/*
    webPreferences: {
        webSecurity: false
    }
*/