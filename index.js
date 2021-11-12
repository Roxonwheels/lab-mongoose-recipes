const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';




// Connection to the database "recipe-app"
        // mongoose
        //   .connect(MONGODB_URI, {
        //     useCreateIndex: true,
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true
        //   })
          
        //   .then(self => {
        //     console.log(`Connected to the database: "${self.connection.name}"`);
        //     // Before adding any recipes to the database, let's remove all existing ones
        //     return Recipe.deleteMany()
        //   })
        //   .then(() => {
        //     // Run your code here, after you have insured that the connection was made
        //   })
        //   .catch(error => {
        //     console.error('Error connecting to the database', error);
        //   });




     
//-------------------------------------------------------------------------------------
    const connectToMongo = async()=>{
      try {   
        await mongoose.connect(MONGODB_URI, {
          useCreateIndex: true,
          useNewUrlParser: true,
          useUnifiedTopology: true
        })
    
        console.log(`Connected to the database`)
    
      } catch(err){
          console.log('Error connecting to the database', err);
      }
  }
  connectToMongo()

//---------------------------------------------------------------------------------------
  

// BORRAR LAS RECETAS

// const deleteAllRecipes = async()=>{
//   try {   
//     await Recipe.deleteMany()  
//   } catch(err){
//       console.log(err);
//   }
// }

// deleteAllRecipes()

//-------------------------------------------------

// CREAR LAS RECETAS
// const createRecipe = async()=>{
//   try {   
//     const deleteAllRecipes = await Recipe.deleteMany()
//     const recipe = await Recipe.create({
//       "title": "Asian Glazed Chicken Thighs",
//       "level": "Amateur Chef",
//       "ingredients": [
//         "1/2 cup rice vinegar",
//         "5 tablespoons honey",
//         "1/3 cup soy sauce (such as Silver Swan®)",
//         "1/4 cup Asian (toasted) sesame oil",
//         "3 tablespoons Asian chili garlic sauce",
//         "3 tablespoons minced garlic",
//         "salt to taste",
//         "8 skinless, boneless chicken thighs"
//       ],
//       "cuisine": "Asian",
//       "dishType": "main_course",
//       "image": "https://images.media-allrecipes.com/userphotos/720x405/815964.jpg",
//       "duration": 40,
//       "creator": "Chef LePapu"

//     });
//     console.log(recipe.title)
//   } catch(err){
//       console.log(err);
//   }

// }  
// console.log(createRecipe)

// createRecipe()

//---------------------------------------------------------------
const createRecipe = async()=>{
  try {
    const deleteAllRecipes = await Recipe.deleteMany()
    const createRecipe = await Recipe.create(data)
    console.log(Recipe)
  } catch(err){
    console.log('Error', err);
}
}

createRecipe()




