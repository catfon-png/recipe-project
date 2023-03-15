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

export const saveRecipe = async (recipe : any) => {
  const collection = await getCollection();
  const result = await collection.insertOne(recipe);
  console.log("Inserted a new recipe:", result.insertedId)
  return recipe;
}

export const dbRecipes = async () => {
  const collection = await getCollection();
  const result = await collection.find();
  return result;
}

export const updateRecipe = async (recipe : any) => {
  const collection = await getCollection();
  const label = recipe.label;
  await collection.updateOne({label : {$set: recipe}});
  const updatedDb = await collection.findOne({label: label})
  return updatedDb;

}
export const deleteRecipe = async (recipe : any) => {
  const collection = await getCollection();
  //something to find the item?
  const deletedRecipe = await collection.deleteOne({label: recipe.label})
  return deletedRecipe;
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
