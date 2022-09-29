import React from "react";
import Myfirst from "./Myfirst";

const myblock = [
  {
    firstline : "#파이썬",
    secondline : "바로가기",
  },
  {
    firstline : "#자바스크립트",
    secondline : "바로가기",
  },
  {
    firstline : "#자바",
    secondline : "바로가기",
  },
  {
    firstline : "#업무스킬",
    secondline : "바로가기",
  },
];

function Yourfirst (props) {
  return (
    <div>
      {myblock.map((body)=>{
        return (
          <Myfirst firstline={body.firstline} secondline={body.secondline} />
        );
      })}
    </div>
  );
}

export default Yourfirst;