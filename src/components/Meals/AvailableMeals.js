import classes from "./AvailableMeals.module.css";
import Card from "./../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false) ;
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      const response = await fetch('https://meals-app-1d3c3-default-rtdb.firebaseio.com/meals.json') ; 
      
      if (!response.ok) {
        throw new Error('Something went wrong ...');
      }

      const responseData = await response.json();
      const mealList = [] 
      Object.entries(responseData).forEach(([key, value]) => {
        mealList.push({key, ...value});
      })
      setMeals(mealList)
      setIsLoading(false) ; 
    }

      fetchMeals().catch( error => {
        setIsLoading(false)
        setHttpError(error.message)
      });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.mealsLoading}>
        <p> Loading ...</p>
      </section>
    )
  }

  if (httpError) {
    return <section className={classes.mealsError}>
      <p>{httpError}</p>
    </section>
  }

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
