import React from "react";
//colorItem component
function colourIteam(props){
  return <li style={{color: props.clor}}>{props.color}</li>
}
//colorList component
function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];
  const colorElements =colors.map((color)=> {
    return <colorItem key={color} color={color} />;
    <li key={color} style={{ color: color}}>
      {color}
      </li>
});
  }
  
// with objects
const users = [
  { id: 1, firstName: "Star", lastName: "Zhaviah" },
  { id: 2, firstName: "Star", lastName: "Davies" },
];

const userHeadings = users.map((user) => {
  return <h1 key={user.id}>{user.firstName}</h1>;
});
//with Non-unique Arrays
const meme = [0, 1, 1, 2, 3, 5];

const memeList = meme.map((number, index) => {
  return <div key={index}>{number}</div>;
});

export default ColorList;
