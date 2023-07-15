const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
//ROUTES

//BASIC ROUTES
app.get('/hello', (req, res) => {
    console.log('hello world!')
    res.send('hello world!')
  })
app.get('/greet/:name', (req, res)=>{
    console.log(req.params)
    res.send(`Why hello there, ${req.params.name}!`)
})
app.get('/five', (req,res)=>{
    const arrFive = [1,2,3,4,5];
    res.send(arrFive)
})

//FRUIT ROUTES
app.get('/fruits', (req, res) => {
    const fruitArr = ['mango🥭', 'watermelon🍉', 'strawberry🍓', 'grapes🍇', 'blueberries🫐', 'bananas🍌', 'oranges🍊', 'pineapple🍍', 'pear🍐']
    res.send(fruitArr)
  })  

//Now let's add a route that takes a route parameter name and retrieves the fruit that matches the supplied name.
app.get('/fruits/:name', (req, res) => {
    const fruitArr = ['mango', 'watermelon', 'strawberry', 'grapes', 'blueberries', 'bananas', 'oranges', 'pineapple', 'pear'];
    for(i=0; i<fruitArr.length; i++){  
      if (req.params.name === fruitArr[i]){
        res.send(fruitArr[i]);
      }else{
        res.send(`Not a fruit in the inventory`);
      }
    }
  })

//VEGGIES ROUTES
app.get('/veggies', (req, res) => {
    const veggiesArr = [`carrots`, `celery`, `spinach`, `kale`, `cactus`]
    res.send(veggiesArr)
  }) 
   
app.get('/veggies/:name', (req, res) => {
  const veggiesArr = [`carrots`, `celery`, `spinach`, `kale`, `cactus`]
  for(i=0; i<veggiesArr.length; i++){  
    if (req.params.name === veggiesArr[i]){
      res.send(veggiesArr[i]);
    }else{
      res.send(`Not a veggie in the inventory`);
    }
  }
})

//LISTENER
app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))