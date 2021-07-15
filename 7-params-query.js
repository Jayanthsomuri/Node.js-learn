const express = require('express')
const app = express()
const { products } = require('./data')

app.get('/', (req, res) => {
  res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
})
app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product
    return { id, name, image }
  })

  res.json(newProducts)
})
app.get('/api/products/:productID', (req, res) => {
  // console.log(req);
  // console.log(req.params)
  const { productID } = req.params;
  const singleProduct = products.find((product) => product.id === Number(productID))

  if (!singleProduct) {
    return res.status(404).send("Product Does Not Exist")
  }
  app.get('/api/products/:prodcutID/reviews/:reviewsID', (req, res) => {
    console.log(req.params)
    res.send('hello world')
  })
  return res.json(singleProduct)

})
app.get('/api/v1/query', (req, res) => {
  //console.log(req.query);
  const { search, limit } = req.query
  let sortedProducts = [...products];


  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      //http://localhost:5000/api/v1/query?search=a(search gonna search the by alphabets)
      return product.name.startsWith(search)
    })
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))
    //http://localhost:5000/api/v1/query?limit=4(limit is used to limit the stuff in http module)
  }
  if (sortedProducts.length < 1) {
    //res.status(200).send('NO products matched your search')
    //http://localhost:5000/api/v1/query?search=gh
    return res.status(200).json({ success: true, data: [] })
    //http://localhost:5000/api/v1/query?search=b
  }
     res.status(200).json(sortedProducts)
  //http://localhost:5000/api/v1/query?name=Jayanth&id=4
  //so we can write queries by query
  res.send('hello world')

})
app.listen(5000, () => {
  console.log("server is listinening at 5000.../")
})