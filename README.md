Homework 3
===========

Great news! We started shopping around your last two homeworks (hope you don'd mind) and although no one was interested in buying your cat tracking software, we did get a request from a local burger joint. Jessica's Burgers is looking to update their aging ordering system to the 21st century, and they want YOU to help. So in an effort to ~~make us loads of cash~~ improve your coding skills, this homework will focus on making a web app which will help Petey's customers get their delicous burgers even quicker (more delicously). 

Here's what it will look like:

You will have a database which will store burger orders. Each order will contain only one burger (two burgers is just too many). Each order's DB entry will specify the ingredients the customer ordered on the burger. You will set this up in the database using whats called a "has many" relationship. So in your database an order will "have many" ingredients. We will now explain the what/how of a "has many" relationship.

Now that we understand our DB layout, whats the actual interface gonna look like?

/ingredient/new -> form which will allow the owner of Jessica's (Mario) to input new ingredients, into the system.

/order/new -> form which will allow customers to make new burger orders. There should be a checklist of all available ingredients. There should also be a "submit order" button which submits the customer's order WITHOUT refreshing the page. The button (when clicked) will also add a new element to the page which will change color to indicate when the customer's order is finished. 

/orders -> a list of all pending orders which will be used by the fry cooks. It should list all the orders, and have a button for each order which (when clicked) removes the order from the page, and marks it as "done" in the database, so the customer can be alerted that their order is complete.

