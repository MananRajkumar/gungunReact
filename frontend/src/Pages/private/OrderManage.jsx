// import { useState } from "react"
import { useEffect, useState } from "react";
import "./ProductManage.css";

export default function OrderManage() {
  const [orderData, setOrder] = useState([]);

  const dataHandler = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/admin/", {
        method: "GET",
      });
      const data = await res.json();
      setOrder(data.order);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dataHandler();
  });

  return (
    <div>
      <div className="product-display">
        <ul>{
            orderData.map(items=>{
             const { _id, } = items;
             return <li key={_id}></li>     
            })    
        }</ul>
    </div>
    </div>
  );
}
