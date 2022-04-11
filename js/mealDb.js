const searchBtn = async ()=>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    if(searchText == ''){
      //please write something
    }
    else{
      const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
      const res =await fetch(url);
      const data = await res.json();
      displayFoodResult(data.meals);
      /* fetch(url)
      .then(res =>res.json())
      .then(data => displayFoodResult(data.meals)) */
    }
    searchField.value ='';

    

}

const displayFoodResult = meals =>{
 const searchFood = document.getElementById("search-food");
 searchFood.innerHTML ='';

 if(meals.length ==0){
   //show no result
 }
   meals.forEach(meal =>{
      //  console.log(meal)
const div = document.createElement('div');
div.classList.add("col");

div.innerHTML = `
<div onclick="loadMealDetail(${meal.idMeal})" class="card">
            <img width="200px" src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0,100)}</p>
            </div>
          </div>`

          searchFood.appendChild(div);
   })
}
const loadMealDetail =async mealId=>{
const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
const res = await fetch(url);
const data = await res.json();
displayMealDetail(data.meals[0]);

/* fetch(url)
.then(res => res.json())
.then(data =>displayMealDetail(data.meals[0])) */
}
const displayMealDetail = mealId =>{
  console.log(mealId)
   const mealDetails = document.getElementById("meal-details");
   mealDetails.textContent = '';
   const div = document.createElement('div');
   div.classList.add('card');
   div.innerHTML = `
   <img  src="${mealId.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${mealId.strMeal}</h5>
          <p class="card-text">${mealId.strInstructions.slice(0,100)}</p>
          <a href="${mealId.strYoutube}" class="btn btn-primary">Go somewhere</a>
        </div>
   
  `;
  mealDetails.appendChild(div);
}