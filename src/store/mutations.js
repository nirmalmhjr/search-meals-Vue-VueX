export function setSearchedMeals(state, meals){
    state.searchedMeals = meals
}

export function setSearchMealsByLetter(state, letter){
    state.mealsByLetter = letter
}

export function searchMealsByIngredients(state, ingredient){
    state.mealsByIngredient = ingredient
}