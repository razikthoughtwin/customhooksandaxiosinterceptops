import React, { useState } from "react";
import axiosinstance from "../services";
import { useDispatch } from "react-redux";
import { setproducts } from "../redux/action/action";

const useFetch = () => {
  // const [data, setData] = useState([]);
  const dispatch=useDispatch();

  const fetchdata = async (url) => {
    const response = await axiosinstance.get(url);
    // setData(response.data);
    dispatch(setproducts(response.data))

  };

  return {fetchdata}
};

export default useFetch;
