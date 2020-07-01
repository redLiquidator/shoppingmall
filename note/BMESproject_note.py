 
                                        logistics   
                                            ㅣ
                            accounting ㅡ e-store  ㅡ inventory
                                            ㅣ
                                         customer


*the BMES project sections by its operations
					
									catalogue section
											ㅣ  
			shopping cart sections	ㅡ	BMES project ㅡ checkout section
									      ㅣ      ㅣ
								user section    order section 
--------------------------------------------------------------------------------------------------------------------------------------------------
building materials Inc. is a building materials merchant business that operate from
brick and mortar stores across the country.
This business wants to provides its product and services to its customers online in order to 
be competitive in the insdustry and to also allow it to expand its business portfolio.
--------------------------------------------------------------------------------------------------------------------------------------------------
The application will be implemented using Node.js and Express and javascript.
this will fulfill the requirement for architecture as node and express provide us
with a robust framework to implement web API.
to fulfill the requirement for scalability, we will be implementing the app using the MVC pattern.
The application will be hosted in either asure, AWS,or Goocle Cloud to meet the Reliability
and Availability criteria.
--------------------------------------------------------------------------------------------------------------------------------------------------
the required feature for this application
-product catalogue feature
-shopping cart feature
-checkout feature
-order management feature
-customer registration feature
-customer authentication feature
-payment feature
--------------------------------------------------------------------------------------------------------------------------------------------------
specifications
 1.API specification for Product,Brand, and Category
    product catalogue API 
    requirements/ provide end point for saving a new product
                  provide an endpoint for getting a product based on specified ID
                  provide and endpoint for modifying a Product
                  provide an endpoint for fetching products based on filteration parameters
                  provide and endpoint for deleting a product
    brand API 
    requirements/provide end point for saving a new Brand
                 provide an endpoint for getting a brand based on specified ID
                 provide an endpoint for modifying a brand
                 provide an endpoint for fetching brands based on filteration paramenters
                 provide an enpoint for deleting a brand
    category API                
    requirements/provide end point for saving a new category
                  provide an endpoint for getting a category based on specified ID
                  provide an endpoint for modifying a category
                  provide an endpoint for getching categories based on filteration parameters
                  provide an endpoint for deleting a category 
 2.shopping cart API specifications
 3.checkout API specifications 
    the user should be able to checkout any item they have inside the cart.
    requirements/provide endpoint for checking out the cart
 4.customer registration specifications
    requirements/provide endpoint for customer management
 5.customer authentication specifications
    the user should be able to login in and logout from the API
    the user should be able to reset their password
 6.BMES administration specifications
    the API should have Admin features
    the admin feature shall have functionalities for inventory management
    the admin feature shall have functionalities for order management
    the admin feature shall have functionalities for user management
--------------------------------------------------------------------------------------------------------------------------------------------------
project flatform name : basic node.js express 4 application (visual code 2019)
--------------------------------------------------------------------------------------------------------------------------------------------------
work to do 1 : service -controller -router -router.register.js(general management) -app.js(register router files)

1.create the brand service
    create a new brand
	get a specified brand
	fetch all brands
	edit a brand
	delete a brand
2.create the category service
    create a new brand
	get a specified brand
	fetch all brands
	edit a brand
	delete a brand
3.create the product service
	create a new product
	get a specified product
	fetch products by applying pagination and filtration
	edit a product
    delete a product
---------------------------------------------------------------------------------------------------------------------------------------------------
               2.register the package to our BMES API 
                 (by creating an api definition file & registering the package in the router-register file)
               3.test with postman or swagger
                 http://localhost:1337/swagger enter the swagger ui
                 http://localhost:1337/api/category fetch category
                 http://localhost:1337/api/product/all-brands&all-products/1/9 fetch brands
----------------------------------------------------------------------------------------------------------------------------------------------------
work to do 3 : load data to the database tables from seeders folder
               SQLite studio -> click table name -> click 'import into the table' -> select the csv file from 'input file'     
----------------------------------------------------------------------------------------------------------------------------------------------------
work to do 4 : implement the shopping cart 
                (by creating the cart and cartItem models & setting the proper database field types for the models )
				1. cart&cartItem tables migration
				npx sequelize model:generate --models-path models/cart --name Cart --attributes uniqueCartId:string,cartStatus:enum
				npx sequelize model:generate --models-path models/cart --name CartItem --attributes quantity:integer,cartId:integer,productId:integer	
			    ->after executing these npx commands, migrations files & models/cart files are created.
				->npx sequelize db:migrate	(executing database migration)	
                ->after executing this npx commands, cart and cartItem tables are created   				
                2. session configuration
				add the contents below into app.js
				: var session = require('express-session');
			    session is like a middleware. to create a session, we will create an session object containing parameters into app.js.
				We've just created a new session as below.
                : app.use(session({
				  secret: '95371e2f-a487-4e22-a9e2-8b6356b85453',
				  proxy: true,
				  resave: true,
				  saveUninitialized: true
					}));
				we get unique cart id from uniqueCartId in cart.service.js.
			    uniqueCartId is created by uuid(remember we installed uuid through the command 'npm install --save uuid').		
				3. implement the cart service
				cart.service.js
				4. implement the cart controller
				cart.controller.js
				5. implement the cart router and url patterns
				( by creating the cart router &  registering cart router in the register )
				cart.router.js
				and then register this 'cart.router.js' to 'router.register.js'
			    6. test using postman 	
----------------------------------------------------------------------------------------------------------------------------------------------------
work to do 5 :implement locations and addresses module			
				create address model : npx sequelize model:generate --models-path models/location --name Address --attributes name:string,addressLine1:string,addressLine2:string,city:string,country:string,zipCode:string,addressType:enum,isDeleted:boolean
				set the proper Database Field Types for the model ex)enum values, default value 
				execute database migration for address model : npx sequelize db:migrate  => the address table is created.
----------------------------------------------------------------------------------------------------------------------------------------------------
work to do 6 :implement customer registration
				structure the user section
				define the customer models(person and customer) : 
					npx sequelize model:generate --models-path models/user --name Person --attributes firstName:string,middleName:string,lastName:string,emailAddress:string,phoneNumber:string,gender:string,dateOfBirth:date,isDeleted:boolean
					npx sequelize model:generate --models-path models/user --name Customer --attributes isDeleted:boolean
					npx sequelize migration:generate --name create-customer-address
					npx sequelize-cli model:generate --models-path models/user --name CustomerAddress --attributes customerId:integer,addressId:integer  (linking table between address and customer)
				execute database migration for person and customer models
----------------------------------------------------------------------------------------------------------------------------------------------------
work to do 7 :structure order and checkout section 
					npx sequelize model:generate --models-path models/order --name Person --attributes
** error message info
1. npm installation error / EINVAL: invalid argument, read
2. ERR_PACKAGE_PATH_NOT_EXPORTED : Package subpath './v4' is not defined by "exports" in D:\starter\node_modules\uuid\package.json
    -> change import syntax from 'const uuidv4 = require('uuid/v4');' to 'const { v4: uuidv4 } = require('uuid');'
** how to catch error
npm start




























