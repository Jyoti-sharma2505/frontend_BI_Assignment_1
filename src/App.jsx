import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Meets from "./components/Meets";
import "./index.css";
import { useState } from "react";

function App() {
  const [title,setTitle]=useState("")
  return (
    <>
      <Header setTitle = {setTitle} />
      <Meets title = {title}/>
    </>
  );
}

export default App;
