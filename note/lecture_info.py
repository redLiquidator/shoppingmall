1.lecturer
Linkedin: ebenezer Ogbu
Twitter: @Ebenezer_ogbu
Website: sailgust.com

2. sourcecode
Notely API
https://bitbucket.org/EbenezerOgbu/notely-rest-api/src/master/
BMES api
https://bitbucket.org/EbenezerOgbu/bmes-node-rest-api/src/master/

package.json 
npm start : start the rest api server on port 3000
localhost:3000/swagger -> navigate the localhost

3.request and response
HTTP request are the message that the client sends to the server. There are different types of request that the client can send to the server.
These include:
Http get Request : This is used to retrieve data fromthe server
Http post Request : This is used to send data to the server
Http put request : This is used to replace a specific data with a new data
Http delete request : This is used to delete a specific data in the server

Http response is the message the server returns to the client in response to a request.
Http response has two parts
response header: this contain additionalinformation about the data that is being requested such as its content type, 
when it was last updated, and if the data is to cached
response body: this is the main body of the message containing the data that is requested

4. project summary
main actors: client, network webservers, my api apps
the rule of engagement: http
resources, url, and routers
request and response
types of response
request handlers

5.data storage pattern
types of data: static data and dynamic data
database: mysql, sqlite, monge,mssql,postgres...

6.ORM(Object Relational Mapper)
ORM enables object-oriented programming languages to represent the database as an object allowing us 
to manipulate the database using the programming language constructs.
ex:entity gramework,hibernate,nhibernate,dapper,eloquent

7.serializer
framework specific mechanism that convert framework specific models into standard data formats like JSON, and XML

8.mvc 
model: this is mainly the software representation ofthe physical object qw are attempting to model.
It is the part of the application that handles the data and any logic associated with the real world Object.
the model also allows us to save its data to the database and to also retrieve its data from the database.
view: the view is responsible for rendering the presentation of the data encapsulated in the data we are modelling.
the view could render a html content or a non-html content like csv,pdf,word,video,audio,etc.
the view is implemented as templates.
controller: it is responsible for accepting http request from users, creating appropriate model and selecting
the right view to render to the users.
as the name suggest, the controller handles user requests and responses. 
it mediates between the model and the view.

benefit of mvc :  it makes it a lot easier to manage complex applications since it divides the application 
into model, view, controllerIt works well for applications with many developers
it provides better support for test driven development

express's approach: model serializer controller
(traditional mvc)   model view       controller

9. express
express app: middleware
express provides all the functionalities that could be implemented in a real app via middlewares
some of the middlewares we will be using in the project for this course include/
*sequelize: our ORM
*sequelize-cli: provides database migration functionalities
*basic expression:
var express = require('express');
var app = express();
app.get('/',function(req,res){
    res.json({
        name:"james law"
    });
});

10.preparation
install node and npmcreate an empty folder
run npm init
install express -> npm install express --save
create the startup file (app.js)
running the app

11. sequelize model field types
Integer
String(size)
Text
DateTime
Float
Boolean
Enum
UUID represents unique identifier

12.sequelizer
When it comes to ORM express provides you with several packages
that you can use. A widely used node ORM package is sequelize.
This extension provides us with a rich data access layer that allows us to works directly 
with databases using the JavaScript language instead of SQL. 
The ORM also, allows us to work with different types of datases like prstgreSQL, mysql, sqlite and oracle
becase the orm is respnsible for generating SQL queries internally,
we are protected from problems such as SQL injection attacks.
with ORM, we are able to perform complex queries lot easier.

13. controller
controllers are Javascript functions that accept http requests and returns a responses.
controllers are also used to fetch objects from the database and to modify
those object when needed. 
the controller to use for a given request is determined by the url pattern associated with the http request.
for out projects, controllers are created in a Javascript files called controller.js

var getNote = function(req,res){
    noteModel.findByPk(req.params.id).then(note ->{
        res.json(
            {
                title:'note detail',
                year:date.getFullYear(),
                note:note
            }
        );
    });
};

14.serializer
node will return a json formatted data by default.
to return data in other formats, 
you will need to install the appropriate serializers.(goto website npm and search)

15.working with urls
the url specifies the address of a specified web resources this includes HTML pages.
This mapping is defined in the router files.
The router files will have to be registered in the router register.
'use strict';

var noteController = require('note.controller.js');

var express = require('express');
var router = express.Router();

router.get('/',noteController.getAllNotes);
module.exports = router;

16. creating the project
visual studio 2019 -> new project  -> basic nodejs express 4 application

*questions
install ... -g 의 기능
install 시 저장되는 장소는?