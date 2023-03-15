import express, { Application } from "express";
import axios from "axios";
import cors from "cors";
import { dbRecipes, deleteRecipe, saveRecipe, updateRecipe } from "./mongodb";

const app: Application = express();
const port = 5000;
app.use(express.json());
app.use(cors());

const apiId = "1fbf7cde";
const apiKey = "c4863efa2b218a6cc7151c09f620ed76";

// Don't forget error handling!!
app.get("/api/recipes", async (_req, res) => {
  const savedRecipes = await dbRecipes();
  const arraySavedRecipes = await savedRecipes.toArray();
  console.log("this", arraySavedRecipes);
  res.send(arraySavedRecipes);
});

app.get("/api/recipes/:query", async (req, res) => {
  const response = await axios.get(
    `https://api.edamam.com/search?q=${req.params.query}&app_id=${apiId}&app_key=${apiKey}`
  );
  // console.log(response.data.hits);
  res.json(response.data.hits);
});

app.post("/api/recipes", async (req, res) => {
  try {
    saveRecipe(req.body);
    return res.status(201).json();
  } catch (error) {
    res
      .status(400)
      .send({ message: "Something is not right with your request..." });
  }
});
app.put("/api/recipes", async (req, res) => {
    console.log(req.body.recipeId)
  try {
    await updateRecipe(req.body)
  } catch (error) {}
});

app.delete("/api/recipes/:recipeId", async (req, res) => {
  try {
    await deleteRecipe(req.params.recipeId);
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
