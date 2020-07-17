import React from "react";
import "./Burger.css";
import BurgerIngredient from "./burger-ingredient/BurgerIngredient";

const Burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((bkey) => {
      return [...Array(props.ingredients[bkey])].map((_, i) => {
        return <BurgerIngredient key={bkey + i} type={bkey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  console.log(transformedIngredients);

  if(transformedIngredients.length === 0){
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className="burger">
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
