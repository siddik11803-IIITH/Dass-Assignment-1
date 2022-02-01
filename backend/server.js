const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 4000;
const db_name = "assignment-1";
const axios = require("axios");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const User = require("./models/user.model");
const Food = require("./models/food.model");
const Buyer = require("./models/buyer.model");
const Vendor = require("./models/vendor.model");
const Order = require("./models/order.model");
const Wallet = require("./models/wallet.model")

mongoose.connect("mongodb://127.0.0.1:27017/" + db_name, {
  useNewUrlParser: true,
});
const connection = mongoose.connection; // Make sure that this is not used as a function.
connection.once("open", () => {
  console.log("MongoDB connection success!");
});

app.get("/register", (req, res) => {
  User.find(function (err, users) {
    if (err) {
      console.log(err);
    } else {
      res.send(users);
    }
  });
});

app.get("/food", (req, res) => {
  Food.find((err, food) => {
    if(err){
      console.log(err)
    }else{
      res.json(food)
    }
  })
})

app.get("/vendors", (req, res) => {
  Vendor.find((err, vendors) => {
    if(err){
      console.log(err)
    }else{
      res.send(vendors)
    }
  })
})

app.post("/wallets", (req, res) => {
  const email = req.body.email;
  const amount = req.body.amount;

  const newWallet = new Wallet({
    user_email: email,
    amount: amount
  })
  User.findOne({email: email}, (err, user) => {
    if(err){
      res.send({message: "User does not exist"})
    }else{
      res.send({message: "Success"})
      newWallet.save()

    }
  })
})


app.post("/register/buyer", (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    phone_number: req.body.phone_number,
    password: req.body.password,
    user_type: "Buyer",
  });
  const newBuyer = new Buyer({
    email: req.body.email,
    age: req.body.age,
    batch: req.body.batch,
  });
  const newWallet = new Wallet({
    user_email: req.body.email,
    amount: 0
  })

  User.findOne({ email: req.body.email }, (err, user) => {
    if (user) {
      console.log("User already registered by the email: " + req.body.email);
    }
  });
  newWallet.save();
  newUser.save();
  newBuyer
    .save()
    .then((user) => {
      res.send({ message: "Registration Success", user: user });
    })
    .catch((err) => {
      return res.status(400).send(err);
    });
});

app.post("/register/vendor", (req, res) => {
  const newUser = new User({
    name: req.body.name_vendor,
    email: req.body.email_vendor,
    phone_number: req.body.phone_number_vendor,
    password: req.body.password_vendor,
    user_type: "Vendor",
  });
  const newVendor = new Vendor({
    email: req.body.email_vendor,
    open_close_time: req.body.open_close_time,
    shop_name: req.body.shop_name,
  });
  //   console.log("Here");
  console.log(newUser, newVendor);
  User.findOne({ email: req.body.email }, (err, user) => {
    if (user) {
      console.log("User already registered by the email: " + req.body.email);
    }
  });
  newUser.save();
  newVendor
    .save()
    .then((user) => {
      res.send({ message: "Registration Success", user: user });
    })
    .catch((err) => {
      return res.status(400).send(err);
    });
});
app.post("/login", (req, res) => {
  console.log(req.body);
  User.findOne({ email: req.body.email }, (err, user) => {
    if (user) {
      if (user.password != req.body.password) {
        res.send("invalid password");
      } else {
        res.send({
          message: "Login Successful. Welcome " + user.name,
          user: user,
        });
      }
    } else {
      res.send("User not registered");
    }
  });
});





app.post("/vendor/profile", (req, res) => {
  Vendor.findOne({ email: req.body.email }, (err, vendors) => {
    res.send(vendors);
  });
});

app.put("/vendor/edit_profile", (req, res) => {
  User.findOneAndUpdate({email: req.body.email}, {phone_number: req.body.newUser.new_phone_number, name: req.body.newUser.new_name}, null, function(err, original){
    if(err){
      console.log(err)
    }else{
      console.log("original", original);
    }
  })
  
  Vendor.findOneAndUpdate({email: req.body.email}, {shop_name: req.body.newUser.new_shop_name, open_close_time: req.body.newUser.new_timings}, null, function(err, original){
    if(err){
      console.log(err)
    }else{
      console.log("Original", original)
    }
  })
  
    res.send("Done")
  })
  
  app.post("/vendor/add_food", (req, res) => {
    const newFood = new Food({
      vendor_email: req.body.newFood.vendor_email,
      food_name : req.body.newFood.food_name,
      price: req.body.newFood.price,
      add_ons: req.body.newFood.add_ons,
      rating: req.body.newFood.rating,
      tags: req.body.newFood.tags
    })
    newFood.save()
    .then((food) => {
      res.send({message: newFood.food_name + ' Added to the DB'})
    })
  })
  
app.post("/vendor/food", (req, res) => {
  const email = req.body.email
  Food.find({vendor_email: email}, (err, food) => {
    if(err){
      console.log(err)
    }else{
      res.send(food)
    }
  })
})
  
  app.post("/vendor/edit_food", (req, res) => {
    Food.findOneAndUpdate({_id: req.body.data._id}, {food_name: req.body.data.food_name, price: req.body.data.price, add_ons: req.body.data.add_ons, rating: req.body.data.rating, tags: req.body.data.tags}, null, (err, original) => {
      if(err){
        console.log("Edit error: ", err)
      }else{
        console.log("Original", original)
      }
    })
  })
  
  app.post("/vendor/recieved_orders", (req, res) => {
    Order.find({vendor_email: req.body.email}, (err, order) => {
      if(err){
        console.log(err)
      }else{
        res.send(order)
      }
    })
  })

  app.post("/vendor/reject_order", (req, res) => {
    Order.findOneAndUpdate({_id: req.body.order._id}, {state: "REJECTED"}, null, (err, original) => {
      if(err){
        res.send({message: "Not able to delete", consoleLogger: err})
      }else{
        res.send({message: "Successfully deleted", consoleLogger: original})
      }
    })
    
  })

  app.post("/vendor/accept_order", (req, res) => {
    Order.findOneAndUpdate({_id: req.body.order._id}, {state: "ACCEPTED"},null, (err, original) => {
      if(err){
        res.send({message: "Error" + err, consoleLogger: original})
      }else{
        res.send({message: "Success: "+original.food_name+" accepted", consoleLogger: original})
      }
    })
  })

  app.post("/vendor/cook_order", (req, res) => {
    Order.findOneAndUpdate({_id: req.body.order._id}, {state: "COOKING"}, null, (err, original) => {
      if(err){
        res.send({message: "Error: " + err, consoleLogger: original})
      }else{
        res.send({message: "Success: "+original.food_name+" is  being cooked", consoleLogger: original})
      }
    })
  })

  app.post("/vendor/order_cooked", (req, res) => {
    Order.findOneAndUpdate({_id: req.body.order._id}, {state: "READY FOR PICKUP"}, null, (err, original) => {
      if(err){
        res.send({message: "Error: " + err, consoleLogger: original})
      }else{
        res.send({message: "Success: Bhaiyya "+original.food_name+"!!", consoleLogger: original})
      }
    })
  })
  
  
  
  
  
  
  
  
  
  
  
  app.post("/buyer/profile", (req, res) => {
    Buyer.findOne({email: req.body.email}, (err, buyers) => {
      res.send(buyers);
    })
  })
  
  app.put("/buyer/edit_profile", (req, res) => {
    User.findOneAndUpdate({email: req.body.email}, {phone_number: req.body.newUser.new_phone_number, name: req.body.newUser.new_name}, null, function(err, original){
      if(err){
        console.log(err)
      }else{
        console.log("original", original);
      }
    })
    Buyer.findOneAndUpdate({email: req.body.email}, {age: req.body.newUser.new_age, batch: req.body.newUser.new_batch}, null, function(err, original){
      if(err){
        console.log(err)
      }else{
        console.log("original", original)
      }
    })
    res.send("Done")
  })

  app.post("/buyer/place_order", (req, res) => {
    const newOrder = new Order({
      food_name: req.body.food_name,
      vendor_email: req.body.vendor_email,
      food_id: req.body.food_id,
      state: req.body.state,
      quantity: req.body.quantity,
      cost: req.body.cost,
      user_email: req.body.user_email
    })

    


    newOrder.save()
    .then((order) => {
      res.send({message: "Successfully placed"})
    })
  })

  app.post("/buyer/orders", (req, res) => {
    Order.find({user_email: req.body.email}, (err, orders) => {
      if(err){
        console.log(err)
      }else{
        res.send(orders)
      }
    })
  })

  app.post("/buyer/pickup_order", (req, res) => {
    Order.findOneAndUpdate({_id: req.body.order._id}, {state: "COMPLETED"}, null, (err, original) => {
      if(err){
        res.send({message: "Error: "+err, consoleLogger: original})
      }else{
        res.send({message: "Thank You, Visit Again. Enjoy Your "+original.food_name+" "+original.user_email, consoleLogger: original})
      }
    })
  })

  app.post("/buyer/get_wallet", (req, res) => {
    Wallet.findOne({user_email: req.body.email}, (err, wallet) => {
      if(err){
        res.send({message: "Error: "+err, consoleLogger: err, wallet: {}})
      }else{
        res.send({message: "Wallet request success", wallet: wallet, consoleLogger: "No  Error"})
      }
    })
  })

  app.post("/buyer/transaction", (req, res) => {
    Wallet.findOneAndUpdate({email: req.body.email}, {amount: req.body.newAmount}, null, (err, orignal) => {
      if(err){
        res.send({message: "Error: "+err})
      }else{
        res.send({message: "Added Successfully. Wallet Balance: "+req.body.newAmount})
      }
    })
  })
  
  app.listen(PORT, () => {
    console.log("Server running on port: " + PORT);
  });








  app.get("/orders", (req, res) => {
    Order.find((err, orders) => {
      if(err){
        console.log(err)
      }else{
        res.json(orders)
      }
    })
  })