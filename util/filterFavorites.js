export const filterFavorites = (coins) => {
  //retrieve favorite coins from local storage
  let savedCoinsObject = JSON.parse(localStorage.getItem("coins"));
  console.log(savedCoinsObject);
  let result = coins.filter((element) => {
    console.log(savedCoinsObject.hasOwnProperty(element.name));
    return savedCoinsObject.hasOwnProperty(element.name);
  });
  //console.log("result", result);
  return result;
};
