import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import "./Home.css";




function Home() {
  
  const [disp, setDisplay] = useState(0);
  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState("");

  const handleClick = (e) => {
    console.log(e.target.innerText);
    console.log("x");
    let temp;
    let value = e.target.innerText;
    if (isNaN(value)) {
      if (value === "AC") {
        value = 0;
        setDisplay(value);
      } else if (
        value === "*" ||
        value === "+" ||
        value === "/" ||
        value === "-"
      ) {
        setResult(result + disp);
        setOperator(value);
        setDisplay(0);
      } else if (value === "+/-") {
        setDisplay(disp * -1);
      } else if (value === "%") {
        setDisplay(disp * 0.01);
      }
        else if(value === '.'){
          if(!disp.include('.')){
          setDisplay(disp + '.');
          }
        }
       else if (value === "=") {
        if (operator === "+") {
          if(Number.isInteger(disp) || Number.isInteger(result)){
          temp = parseInt(result) + parseInt(disp);
          }
          else {
            temp = parseFloat(result) + parseFloat(disp);
          }
        } else if (operator === "-") {
          temp = result - disp;
        }
        if (operator === "*") {
          temp = result * disp;
        }
        if (operator === "/") {
          temp = result / disp;
        }
        setDisplay(temp);
        setResult(0);
        setOperator("");
        console.log(disp);
      }
    } else {
      if (disp === 0) {
        setDisplay(value);
      } else setDisplay(disp + value);
    }
  };
  return (
    <div className="homeLayout">
      <div className="menu-layout grid-container">
        <div className="display_row">
          <span className="result_display">{disp}</span>
        </div>
        <div className="panel_display" onClick={(e) => handleClick(e)}>
          <div className="panel_row {classes.root}">
            <div className="panel_button">
              <Button style={{fontSize:'20px'}}  size="large"><b>AC</b></Button>
            </div>
            <div className="panel_button">
              <Button style={{fontSize:'20px'}} ><b>+/-</b></Button>
            </div>
            <div className="panel_button">
              <Button style={{fontSize:'20px'}} ><b>%</b></Button>
            </div>
            <div className="panel_button">
              <Button style={{fontSize:'20px'}} className="operator"><b>/</b></Button>
            </div>
          </div>
          <div className="panel_row">
            <div className="panel_button">
              <Button style={{fontSize:'20px'}} ><b>7</b></Button>
            </div>
            <div className="panel_button">
              <Button style={{fontSize:'20px'}} ><b>8</b></Button>
            </div>
            <div className="panel_button">
              <Button style={{fontSize:'20px'}} ><b>9</b></Button>
            </div>
            <div className="panel_button">
              <Button style={{fontSize:'20px'}}  className="operator"><b>*</b></Button>
            </div>
          </div>
          <div className="panel_row">
            <div className="panel_button">
              <Button style={{fontSize:'20px'}} ><b>4</b></Button>
            </div>
            <div className="panel_button">
              <Button style={{fontSize:'20px'}} ><b>5</b></Button>
            </div>
            <div className="panel_button">
              <Button style={{fontSize:'20px'}} ><b>6</b></Button>
            </div>
            <div className="panel_button">
              <Button style={{fontSize:'20px'}} className="operator"><b>-</b></Button>
            </div>
          </div>
          <div className="panel_row">
            <div className="panel_button">
              <Button style={{fontSize:'20px'}} ><b>1</b></Button>
            </div>
            <div className="panel_button">
              <Button style={{fontSize:'20px'}} ><b>2</b></Button>
            </div>
            <div className="panel_button">
              <Button style={{fontSize:'20px'}} ><b>3</b></Button>
            </div>
            <div className="panel_button">
              <Button style={{fontSize:'20px'}} className="operator"><b>+</b></Button>
            </div>
          </div>
          <div className="panel_row">
            <div className="panel_button double_width">
              <Button style={{fontSize:'20px'}} ><b>0</b></Button>
            </div>
            <div className="panel_button">
              <Button style={{fontSize:'20px'}} ><b>.</b></Button>
            </div>
            <div className="panel_button">
              <Button style={{fontSize:'20px'}} className="operator"><b>=</b></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
