import { Recipe } from "../recipes/recipes.model";
import { INGREDIENTS } from "./mock-ingredients";

export const RECIPES: Recipe[] = [
  new Recipe("Paneer", "This is some paneer", "https://images.unsplash.com/photo-1462037629520-2a7c6feac7f4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b9695fd866bb2ebcd365a3155245220f&auto=format&fit=crop&w=1085&q=80", [INGREDIENTS[2],INGREDIENTS[5],INGREDIENTS[14]]),
  new Recipe("Haldi", "Yellow stuff.. Might be haldi I don't know", "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e0245bb4e87077312cc3d102e68c1efd&auto=format&fit=crop&w=1035&q=80", [INGREDIENTS[11],INGREDIENTS[3],INGREDIENTS[9]]),
  new Recipe("Kompot", "NO! COMPOTE!!", "https://images.unsplash.com/photo-1414450397866-85f90db48714?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fdff95435109c814de8b1bb4b468abd3&auto=format&fit=crop&w=1050&q=80", [INGREDIENTS[4],INGREDIENTS[12],INGREDIENTS[13],INGREDIENTS[10]]),
  new Recipe("Tea", "Ye le chai nashta kar le bhidu", "https://images.unsplash.com/reserve/EnF7DhHROS8OMEp2pCkx_Dufer%20food%20overhead%20hig%20res.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c27cdfa67c2902d633e694f4884b3c7a&auto=format&fit=crop&w=1057&q=80", [INGREDIENTS[6],INGREDIENTS[7],INGREDIENTS[2]]),
  new Recipe("Tamatar", "Here, we have some heirloom tomatoes", "https://images.unsplash.com/photo-1485795046599-702122cd1267?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1bfc98d64d81949c903c9135e7562eb5&auto=format&fit=crop&w=1050&q=80", [INGREDIENTS[4],INGREDIENTS[8],INGREDIENTS[7]])
]
