import React from "react";
import Add from "./add";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";
const Assignment4 = () => {
     function sayHello() {
    alert("Hello");
  }

 return(
   <>
     <h1>Assignment 4</h1>
     <Add a = {10} b = {3}/>
     <ClickEvent/>
     <PassingDataOnEvent/>
     <PassingFunctions theFunction={sayHello} />
     <EventObject/>
     <Counter/>
     <BooleanStateVariables/>
     <StringStateVariables/>
     <DateStateVariable/>
     <ObjectStateVariable/>
     <ArrayStateVariable/>
     <ParentStateComponent/>
     <ReduxExamples/>
   </>
 );
};
export default Assignment4;

