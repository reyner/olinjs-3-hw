Homework 3
===========

## Reading

### Mongo embedding vs referencing

Let's say for example that you owned a series of bookstores each with a location, a manager, and tons of books. Each book has an author and a price. So our data structure so far looks like

```
bookstore
  location
  manager
  book
    author
    price
```

Keep in mind that a lot of books will be repeated across bookstores. How would we convert this to a Mongo datastore? There are 2 main ways: **Referencing** and **Embedding**.

**Referencing**
Referencing is when you reference a Mongo document (usually by _id) inside of another document. We could split up the `bookstore` into two separate Mongo collections, a `store` and a `book`. Then our collections will look like

```
store
  location
  manager
  items
```

```
book
  author
  price
```

This decouples stores with what they carry. We now have 1 book object that can be referenced from multiple stores. This is useful when you are lacking in space (because you don't repeat books). 

**Embedding**
Embedding is when you store a Mongo document inside of another Mongo document. This is the default way to do things in Mongo, and is the most obvious. Instead of creating two collections for your bookstore, you'll just have one bookstore collection that has a list of every book inside of the bookstore.

```
bookstore
  location
  manager
  book
    author
    price
```

This will lead you to repeat books across bookstores, but who cares because space is cheap. In general you want to use embedding in Mongo.

The Mongo documentation has further details about [when to embed vs reference](http://docs.mongodb.org/manual/core/data-modeling/).


## Assignment

Great news! We started shopping around your last two homeworks (hope you don'd mind) and although no one was interested in buying your cat tracking software, we did get a request from a local burger joint. Jessica's Burgers is looking to update their aging ordering system to the 21st century, and they want YOU to help. So in an effort to ~~make us loads of cash~~ improve your coding skills, this homework will focus on making a web app which will help Petey's customers get their delicous burgers even quicker (more delicously). 

Your application will do the following
* `/ingredient/new` => shows a form that allows someone to add a new ingredient into the system. An ingredient object consists of an ingredient name and a cost, for example {ingredient: cheese, cost:2}. 
* `/order/new` => shows a form which will allow customers to create a new burger. There should be a checklist of all available ingredients and a "submit order" button. Clicking on the "submit order" button should submit the customer's order WITHOUT refreshing the page. IE, with an [AJAX $.post request](http://api.jquery.com/jQuery.post/). 
* `/orders` will show a list of all the pending orders. There should be a "completed" button beside each order that does another $.post request to your server and completes the order. Clicking this button should also remove this order from the list of orders (again, without refreshing the page).
* Deploy your application to heroku and add your hame to the [Homework 3 sheet](https://docs.google.com/spreadsheet/ccc?key=0AjqGw-pw5UuudFhQSmJhZlRZWEhRTWcwYmxBVld6c1E#gid=3)

