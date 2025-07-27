
import React, { useEffect } from "react";
import './../styles/App.css';
import { useSelector, useDispatch } from "react-redux";
import fetchData from "../Redux/action/loremActionCreator";
import Card from "./Card";


const App = () => {
  let x = useSelector(state => state)
  const dispatch = useDispatch()

  let y = x?.data?.results?.books

  console.log(x);



  useEffect(() => {
    dispatch(fetchData())
  }, [])

  if (x) {

    switch (x.loading) {

      case true:
        return "Loading..."
    }
  }

  return (
    <div>

      {Array.isArray(y) && y.map((v) => {
        return <Card
          key={v.rank}
          title={v.title}
          body={v.description}

        />
      })}

    </div>
  )
}

export default App
