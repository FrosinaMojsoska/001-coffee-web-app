import CoffeeItem from "./CoffeeItem/CoffeeItem";
import Card from "../UI/Card";
import classes from "./AvailableCoffees.module.css";
import { useEffect, useState } from "react";

const AvailableCoffees = () => {
  const [coffeeData, setCoffeeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  async function getCoffeeData() {
    const response = await fetch(
      "https://react-demo-ed830-default-rtdb.europe-west1.firebasedatabase.app/coffees.json"
    );
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    const responseData = await response.json();

    let coffeeData = [];
    let coffeeItem;
    for (const key in responseData) {
      coffeeItem = { ...responseData[key], id: key };
      coffeeData.push(coffeeItem);
    }
    setCoffeeData(coffeeData);
    setIsLoading(false);
  }
  useEffect(() => {

      getCoffeeData().catch((error)=>{
        setIsLoading(false);
        setHttpError(error.message);
      });
 
  }, []);

  if (isLoading) {
    return (
      <section className={classes.coffeesLoading}>
        <p>Loading...</p>
      </section>
    );
  }
  if (httpError) {
    return (
      <section className={classes.coffeeError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const coffeesContent = coffeeData.map((coffeeItem) => (
    <CoffeeItem key={coffeeItem.id} item={coffeeItem} />
  ));

  return (
    <section className={classes.coffee}>
      <Card>
        <ul>{coffeesContent}</ul>
      </Card>
    </section>
  );
};

export default AvailableCoffees;
