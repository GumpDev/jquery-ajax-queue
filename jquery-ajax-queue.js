var ajax_queue_resquest = [];
var isRunningAjax = false;

(function ( $ ) {
    $.post = function(url,data,returns,dataType,extraOptions,ignoreQueue) {
        if(ignoreQueue){
            $.ajax({...{
                url,
                type: 'POST',
                dataType,
                data,
                success: function(retorno){
                    returns(retorno);
                }
            },...extraOptions});
        }else{
            if(!isRunningAjax){
                $.ajax({...{
                    url,
                    type: 'POST',
                    dataType,
                    data,
                    success: function(retorno){
                        returns(retorno);
                        isRunningAjax = false;
                        if(ajax_queue_resquest.length > 0){
                            var ajax = ajax_queue_resquest[0];
                            $.post(ajax.url,ajax.data,ajax.returns,ajax.dataType,ajax.extraOptions);
                            ajax_queue_resquest.splice(0,1);
                        }
                    },
                    error: function(){
                        isRunningAjax = false;
                        if(ajax_queue_resquest.length > 0){
                            var ajax = ajax_queue_resquest[0];
                            $.post(ajax.url,ajax.data,ajax.returns,ajax.dataType,ajax.extraOptions);
                            ajax_queue_resquest.splice(0,1);
                        }
                    }
                },...extraOptions});
                isRunningAjax = true;
            }else
                ajax_queue_resquest.push({url,data,returns,dataType,extraOptions});
        }
    };
}( jQuery ));

(function ( $ ) {
    $.get = function(url,data,returns,dataType,extraOptions,ignoreQueue) {
        if(ignoreQueue){
            $.ajax({...{
                url,
                type: 'GET',
                dataType,
                data,
                success: function(retorno){
                    returns(retorno);
                }
            },...extraOptions});
        }else{
            if(!isRunningAjax){
                $.ajax({...{
                    url,
                    type: 'GET',
                    dataType,
                    data,
                    success: function(retorno){
                        returns(retorno);
                        isRunningAjax = false;
                        if(ajax_queue_resquest.length > 0){
                            var ajax = ajax_queue_resquest[0];
                            $.post(ajax.url,ajax.data,ajax.returns,ajax.dataType,ajax.extraOptions);
                            ajax_queue_resquest.splice(0,1);
                        }
                    },
                    error: function(){
                        isRunningAjax = false;
                        if(ajax_queue_resquest.length > 0){
                            var ajax = ajax_queue_resquest[0];
                            $.post(ajax.url,ajax.data,ajax.returns,ajax.dataType,ajax.extraOptions);
                            ajax_queue_resquest.splice(0,1);
                        }
                    }
                },...extraOptions});
                isRunningAjax = true;
            }else
                ajax_queue_resquest.push({url,data,returns,dataType,extraOptions});
        }
    };
}( jQuery ));