1.Notely Rest Api Requirements
methods   resource      input      description
  Get     api/note      none       gets a list of all the notes created by the user
  Get     api/note	    id(url)    gets a note with the specified id
  Post    api/note      note(body) creates a new note
  Delete  api/note/{id} id(url)    delete the note with the speified id
  Put     api/note      note(body) modify a note
  
2.the note model
a model is the software representation of the physical thing we are talking about.
models have propeerties and methods
ex> id: Zuid
	Subject:String
	Detail:String
	CreatedDate:DateTime
	LastModifiedDate:DateTime
	IsDeleted:Boolean
3. project setting
npx sequelize-cli init | create models,config,migrations,seeders    *cli: command line interface
sequelize.org | you can search sequelize related commands
config.json | we will use sqlite
npx sequelize-cli model:generate --name Note --attributes subject:string,detail:string,isDeleted:boolean | 
create a note model. the name of the attributes will be set as 'subject','detail','isDeleted'.
the orm we will be using in this project is the sequelize orm.
using this orm, we can simultaneously create our model and migration file using this command above.
npx sequelize db:migrate | create a database. /views/notelyrestapi.db  -> check in sqlite studio
once the migration files have been created, we execute the migration by running 
this command.
npx sequelize migration:generate --name update-note | model update. after updating the model, execute this command

4.controller
the controllers of this project majorily handles http request
the controllers of this application are implemented in the file note.controller.js.
These are the controller functions we will be implementing to fulfill the software requirement specification
Get All Notes: gets all the notes
Create Note : create new note
Edit Note : Edit Note
Get Note : Gets a specified note
Delete Note : Delete a note

'use strict': The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
With strict mode, you can not, for example, use undeclared variables.
ORM converts data between type systems that are unable to coexist within relational databases and OOP languages.

sequelize API reference: sequelize.org

5.visual studio 2019 shourtuct
ctrl+d copy the line above

6.creating the router and urls pattern
router: take a request and connect a controller function. that is, mapping the appropriate request
      
7.swagger
swagger is an industry standard for documenting api
it is an open-source software framework backed by a large ecosystem of tools that helps developers design,
build,document and consume RESTful web services.
what to do : install the swagger package via npm     npm install -save swagger-ui-express

1then we have to configure the package to work with our api.
		     we do this by creating an api definition file &  registering the package to our notely api
			 to review the swagger api documentation we navigate to:
             http://localhost:1337/swagger   in visual studio, 1337. 
			 but, basically, in other routes, 
			 in app.js, the port number is set as 3000 -> app.set('port', process.env.PORT || 3000);
			 for example, in command window, when you execute 'npm start', you have to reach with  http://localhost:3000/swagger 
we can use postman, instead 
8.postman
we can test the notely end points just like swagger
get  http://localhost:1337/api/note      get all data



