import { useEffect } from "react";
import "./App.css";
import useFetch from "./customhooks/useFetch";
import { useSelector } from "react-redux";

function App() {

  const data=useSelector((state)=>state.allproducts.products)

  const {fetchdata} =useFetch();

  useEffect(()=>{
    fetchdata('/posts')

  },[])
  return (
    <>
     {data.map((item)=>{ 
      return(
        <div key={item.id}>
        <p>{item.id}</p>
        <p>{item.title}</p>
        </div>
      )
     })}
    </>
  );
}

export default App;
