import Layout from "../components/MyLayout";
import Knopka from "../components/knopka";
import React from "react";
import { useState } from "react";


const styles = {
  root: {
    display: "flex",
    flexDirection: "column",

    
  },
  figures: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  }
};
export default function About() {
  const [result, setResult] = useState("");
  const calc = (n) => {
    setResult(n);
  };
  return (
    <Layout>
      <div style={styles.root}>
        <p>Введите число     {result}</p>
        
        <div style={styles.figures}>
        <Knopka number={"1"} calc={()=>calc(result + "1")}/>
        <Knopka number={"2"} calc={()=>setResult(result + "2")}/>
        <Knopka number={"3"} calc={()=>setResult(result + "3")}/>
        <Knopka number={"4"} calc={()=>setResult(result + "4")}/>
        <Knopka number={"5"} calc={()=>setResult(result + "5")}/>
        <Knopka number={"6"} calc={()=>setResult(result + "6")}/>
        <Knopka number={"7"} calc={()=>setResult(result + "7")}/>
        <Knopka number={"8"} calc={()=>setResult(result + "8")}/>
        <Knopka number={"9"} calc={()=>setResult(result + "9")}/>
        <Knopka number={"0"} calc={()=>setResult(result + "0")}/>
        <Knopka number={"="} calc={()=>setResult(eval(result))}/>
        <Knopka number={"C"} calc={()=>setResult("")}/>
        <Knopka number={"+"} calc={()=>setResult(result + "+")}/>
        <Knopka number={"-"} calc={()=>setResult(result + "-")}/>
        <Knopka number={"/"} calc={()=>setResult(result + "/")}/>
        <Knopka number={"*"} calc={()=>setResult(result + "*")}/>
        </div>
      </div>
    </Layout>
  );
}
