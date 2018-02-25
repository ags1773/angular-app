import { Recipe } from "../models/recipe"
import { INGREDIENTS } from "./mock-ingredients"

export const RECIPES: Recipe[] = [
  {
    image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5d2452cace2ee90c9781c7a39c9a30cf&auto=format&fit=crop&w=500&q=60",
    title: "Strawbery Cream Pie lol",
    description: "Who doesn't like good cream pie? Soft and sweet, hard to resist",
    ingredients: [INGREDIENTS[3], INGREDIENTS[8], INGREDIENTS[5]]
  },
  {
    image: "https://images.unsplash.com/photo-1453831362806-3d5577f014a4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9dd8da96be0724ab84e4147d428f6bba&auto=format&fit=crop&w=500&q=60",
    title: "Pulav. Bambai Ishtyle",
    description: "Apun ko machhi pulav bohot pasand hai mamu",
    ingredients: [INGREDIENTS[13], INGREDIENTS[5], INGREDIENTS[8], INGREDIENTS[14]]
  },
  {
    image: "https://images.unsplash.com/photo-1514809696236-086209234d2c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ad57be79374812364774dda1477b85df&auto=format&fit=crop&w=500&q=60",
    title: "Daru piyo",
    description: "Kya bolte bevda log?",
    ingredients: [INGREDIENTS[6], INGREDIENTS[10], INGREDIENTS[7], INGREDIENTS[13]]
  }
]
