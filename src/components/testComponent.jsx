import React, { useEffect, useState } from "react";
import axios from "axios";
const TestComponent = () => {
  const [stateawal, setStateAwal] = useState({ title: "" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.spoonacular.com/recipes/complexSearch?number=10&apiKey=11ecbfcc9de34a729a9bd94fd062d1a9"
        );

        setStateAwal(response.data.title);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div>test</div>
      {stateawal[0].id}
      <div>test lagi</div>
    </>
  );
};

export default TestComponent;
