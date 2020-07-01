<app.js> 

'use strict';

var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
//from module.exports = register of router.register.js file
var register = require("./routers/router.register.js");

//we register express(var name app) and register different use(logger,bodyParser.json..)
// app.use(logger('dev'));   - use:method  logger:function
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//register the routes. parameter app comes from "var app = express();"
register(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: {}
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + server.address().port);
});


    <note.controller.js>

// http functions
        'use strict';
        //import database object that sequalize automatically generated
        var db = require('../models/index.js');
        //import note class
        var note = require('../models/note.js');
        //create note model
        var noteModel = note(db.sequelize, db.Sequelize.DataTypes);

        /*findAll: find all the rows. here we call this findAll method.
        here, then is 'method'. this method calls a function. this function will bring lists of notes.
        function (req, res) : this function requires req & res.
 res.status(200).json({-
            status: 'success',           -     this 4 lines create res. this res will be passed back
            notes: notes,                -     this will return json
            message: ""                  -     this will return 3 objects-status,notes,message
 함수는 독립적으로 존재하고 메소드는 Class에 종속적인 함수이다.
 GET api/note        gets a list of all the notes created by the user. here, input is none.
 */
var getAllNotes = function (req, res) {
            noteModel.findAll({
                where: { isDeleted: false }
            }).then(function (notes) {
                res.status(200).json({
                    status: 'success',
                    notes: notes,
                    message: "20200608"
                });
            });
    };

    /*create a new note
     http post is the basic request method that we can direct with this function
     then(note => {- then is 'method'
                res.status(200).json({- note~"" is function. response contents are composed.
                    status: 'success'               - 200 means success. after this, we call json method.
                    note: note,                     -
                    message: ""                     -
                });
    catch - should we have problem in creating this note~
    POST api/note       create a new note. here, note(body) is input
     */
    var createNote = function (req, res) {
            noteModel.create({
                subject: req.body.subject,
                detail: req.body.detail
            }).then(note => {
                res.status(200).json({
                    status: 'success'
                note: note,
                    message: "hello"
                });
            }).catch(error =>
                res.status(500).json({
                    status: 'failure'
                error: error,   // you have the error object
                    message: "failure happened"
                });
    });
};
/*get note
 GET api/note/{id}   {id}is parameter. api/note/{id} is input
 res.status(200).json({we will call status, and json.
 */
var getNote = function (req, res) {
            noteModel.findByPk(req.params.id)
                .then((note) => {
                    res.status(200).json({
                        status: 'success',
                        note: note,
                        message: ""
                    });
                });
};

/* update note
 * PUT api/note     modify a note   here, input is note(body)
 * noteModel takes 2 objects - subject & detail
 * id in 'req.body.id' is the same :id in router.get('/api/note/:id', noteController.getNote);*/

var editNote = function (req, res){
            noteModel.update({
                subject: req.body.subject,
                detail: req.body.datail
            },
                {
                    where: { id: req.body.id }
                }).then(() =>
                    res.status(200).json({
                        status: 'success',
                        message: ""
                    });
    });
};

var deleteNote = function (req, res) {
            noteModel.update({
                isDeleted: true
            },
                {
                    where: { id: req.params.id }
                }).then(() => {
                    res.status(200).json({
                        status: 'success',
                        message: ""
                    });
                });
};

// we will wrap all these functions in this {} object and export them away
var module.exports = {
            getAllNotes: getAllNotes,
    createNote: createNote,
    getNote: getNote,
    editNote: editNote,
    deleteNote: deleteNote
};

        <router.register.js>

            'use strict';
            /*app is an express app.
            app.use is 'method'
            app.use('/', noteRouter)  specify the router
            module.exports = register   export the register function. then we can import this register module such as below
            var register = require("./routers/router.register.js");  - app.js
  var register = function (app) {- this is a void function because it returns nothing
    app.use('/', noteRouter);              -
  /swagger -> go to api manage page
};*/
var swaggerUi = require('swagger-ui-express');
var swaggerDocument = require('../swagger/swagger-definition.json');
var noteRouter = require("./note/note.router.js");
var register = function (app) {
                app.use('/', noteRouter);
    app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};


module.exports = register;

            <note.router.js>
'use strict';
 //import controller
var noteController = require('../../controllers/note.controller.js');
var express = require('express');
//import Router function of express module
var router = express.Router();

/*get all notes
 'api/note/' is called url signature , :id' is called parameter(variable).
  noteController.getAllNotes is http controller function
  the url signature is referred from swagger-definition.json */
router.get('api/note/', noteController.getAllNotes);
/*create new note*/
router.post('/api/note', noteController.createNote);
/*get note detail*/
router.get('/api/note/:id', noteController.getNote);
/*edit note*/
router.put('/api/note', noteController.editNote);
/*delete note*/
route.delete('api/note/:id', noteController.deleteNote);
//we export this router here and import into other js file, such as router.register.js
module.exports = router;