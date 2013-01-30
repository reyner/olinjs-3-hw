Homework 3
===========

Great news! We started shopping around your last two homeworks (hope you don'd mind) and although no one was interested in buying your cat tracking software, we did get a request from a local burger joint. Jessica's Burgers is looking to update their aging ordering system to the 21st century, and they want YOU to help. So in an effort to ~~make us loads of cash~~ improve your coding skills, this homework will focus on making a web app which will help Petey's customers get their delicous burgers even quicker (more delicously). 

Here's what it will look like:

You will have a database which will store burger orders. Each order will contain only one burger (two burgers is just too many). Each order's DB entry will specify the ingredients the customer ordered on the burger. You will set this up in the database using whats called a "has many" relationship. So in your database an order will "have many" ingredients. We will now explain the what/how of a "has many" relationship.


Your application will do the following
* `/ingredient/new` => shows a form that allows someone to add a new ingredient into the system. An ingredient object consists of an ingredient name and a cost, for example {ingredient: cheese, cost:2}. 
* `/order/new` => shows a form which will allow customers to create a new burger. There should be a checklist of all available ingredients and a "submit order" button. Clicking on the "submit order" button should submit the customer's order WITHOUT refreshing the page. IE, with an [AJAX $.post request](http://api.jquery.com/jQuery.post/). 
* `/orders` will show a list of all the pending orders. There should be a "completed" button beside each order that does another $.post request to your server and completes the order. Clicking this button should also remove this order from the list of orders (again, without refreshing the page).

