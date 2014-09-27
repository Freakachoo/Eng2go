//jQuery.noConflict();
function worker() {
    var request = new Request({
        //url: 'http://english2go.com/Yousay/getYousayData.asp',
        url: 'http://english2go.com/Yousay/getYousayData.asp?data1=FR&data2=3&data3=4',
        //url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=8&q=http://www.ynet.co.il/Integration/StoryRss2.xml',
        //method: 'post', // JSONP is always GET!
        log: true,
        onError: function (text, er) {
            alert(er);
        },
        onFailure: function (xhr) {
            alert(xhr);
        },
        //data: {data1: 'FR', data2: '3', data3: '4'},
        onSuccess: function (data) {
            alert(data);
        },
        onComplete: function(data){
            alert(data);
        }
    });//.send();
    // need to remove that or CORS will need to match it specifically
    delete request.headers['X-Requested-With'];
    request.send();

};

/*window.addEvent('domready', function () {
    $('goBtn').addEvents({
        click: function () {
            //worker();
        }
    });
});*/

$(document).ready(function () {
    $('#goBtn').on('click', function () {
/*
        function createCORSRequest(method, url) {
            var xhr = new XMLHttpRequest();
            if ("withCredentials" in xhr) {
                xhr.open(method, url, true);
                //xhr.setRequestHeader('Access-Control-Allow-Origin', 'http://english2go.com');
            } else if (typeof XDomainRequest != "undefined") {
                xhr = new XDomainRequest();
                xhr.open(method, url);
            } else {
                xhr = null;
            }
            return xhr;
        }

        var request = createCORSRequest("get", "http://english2go.com/Yousay/getYousayData.asp?data1=FR&data2=3&data3=4");
        if (request) {
            request.onload = function () {
                // ...
            };
            request.onreadystatechange = handler;
            request.send();
        }

        function handler(data) {
            var res = JSON.parse(data);
            if (res.IsValid) {
                alert(res.IsValid)
            }
        }
*/
        $.ajax({
            type: 'POST',
            async: true,
            url: 'http://english2go.com/Yousay/getYousayData.asp?data1=FR&data2=3&data3=4',
            dataType: "jsonp",
            success: InstantVisitMoveReady,
            error: InstantVisitMoveReady
    });
        function InstantVisitMoveReady(data) {
            var res = JSON.parse(data);
            if (res.IsValid) {

            }
        }

    });
});