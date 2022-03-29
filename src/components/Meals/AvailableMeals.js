import classes from "./AvailableMeals.module.css";
import Card from "./../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  useEffect(async () => {
    const fetchMeals = async () => {
      const response = await fetch('https://meals-app-1d3c3-default-rtdb.firebaseio.com/meals.json') ; 
      const responseData = await response.json();
      const mealList = [] 
      Object.entries(responseData).forEach(([key, value]) => {
        mealList.push({key, ...value});
      })
      setMeals(mealList)
    }
    fetchMeals();
  });

  const mealsList = meals.map((meal) => (
    <MealItem id={meal.id} meal={meal} key={meal.id}></MealItem>
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
