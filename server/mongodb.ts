const { MongoClient, ServerApiVersion } = require('mongodb');

// const user = process.env.
const uri = "mongodb+srv://catarina:catarina1234@cluster0.qpaljlp.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// const getCartCollection = async () => {
//   await client.connect();
//   const db = client.db('Cluster0');
//   const collection = db.collection('recipes');
//   return collection;
// };
// const createNewCart = async () => {
//   const newCart = {
//     cartId: '1',
//     products: [],
//     totalNumberOfItems: 0,
//     totalPrice: 0,
//   };
//   const collection = await getCartCollection();
//   const result = await collection.insertOne(newCart);
//   console.log("Inserted new cart with ID:", result.insertedId);
//   return newCart;
// };
// createNewCart();