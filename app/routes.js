var fs = require('fs');
var formidable = require('formidable');
module.exports = function(app) {

    app.post('/api/fileupload', function (req, res) {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var oldpath = files.filetoupload.path;
            var newpath = __dirname + '/../public/img/' +  'profilePic.png';
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                res.redirect('/');
                res.end();
            });
        });
    });

    app.post('/api/setDetails', function(req, res) {
        var jsonData = JSON.stringify(req.body);
        fs.writeFile("app/db.txt", jsonData, function(err) {
            if (err) {
                console.log(err);
            }
            res.end();

        });
    });

    app.get('/api/getDetails', function(req, res) {

        fs.exists("app/db.txt", function (exists) {
            if(exists) {
                fs.readFile("app/db.txt", function (err, data) {
                    if (err)
                        res.send(err);
                    //console.log("data " + data);
                    res.send(data)
                });
            }
            
        });

    });

};

