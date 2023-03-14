const { MongoClient, ServerApiVersion } = require("mongodb");

// const user = process.env.
const uri =
  "mongodb+srv://catarina:catarina1234@cluster0.qpaljlp.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const getCollection = async () => {
  await client.connect();
  const db = client.db("Cluster0");
  const collection = db.collection("recipes");
  return collection;
};

const saveRecipe = async () => {
  const recipeToSave = {
    //add something here por favor
  }
  const collection = await getCollection();
  const result = await collection.insertOne(recipeToSave);
  console.log("Inserted a new recipe:", result.insertedId)
  return recipeToSave;
}

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
