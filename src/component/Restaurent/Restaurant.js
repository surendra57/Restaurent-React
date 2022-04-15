import React from "react";
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];
console.log(uniqueList);

export const Restaurant = () => {
  const [menuData, setMenuData] = React.useState(Menu); //hooks
  const [menuList, setMenuList] = React.useState(uniqueList); //hooks
  // console.log(menuData);
  const filterItem = (category) => {
    if (category === "All") {
      return setMenuData(Menu);
    }
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };
  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};
export default Restaurant;
