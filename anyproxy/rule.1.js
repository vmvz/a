module.exports = {
    *beforeSendResponse(requestDetail, responseDetail) {
        if (requestDetail.url.indexOf('premlp-pt13') >0) {
            const newResponse = responseDetail.response;
            //newResponse.body
            var fs = require("fs");
            var txt = newResponse.body.toString();
            var url = requestDetail.url;
            //url = url.replace(/[\'\"\\\/\b\f\n\r\t]/g, '');
            //url = url.replace(/[\@\#\$\%\^\&\*\{\}\:\"\L\<\>\?]/g, '');
            var tt = Date.now();
            var file_path = '/tmp/' + tt + '.txt';

            co = url + ';\n' + txt;
            fs.writeFile(file_path, txt, function (err) {
                if (err) throw err;
                console.log('save: ' + tt + ' / ' + url); //文件被保存
            });
        }
    },
};
