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
  const id = recipe.recipeId;
  const status = recipe.status;
  console.log('hello',id)
  console.log('tchay',status)
  await collection.updateOne({ recipeId: id }, { $set: { status: status } });
  const updatedDb = await collection.findOne({recipeId: id})
  return updatedDb;
}

export const deleteRecipe = async (recipeId : string) => {
  const collection = await getCollection();
  const deletedRecipe = await collection.deleteOne({recipeId: recipeId})
  return deletedRecipe;
}
