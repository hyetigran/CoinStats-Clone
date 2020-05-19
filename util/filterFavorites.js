export const filterFavorites = (coins) => {
  //retrieve favorite coins from local storage
  let savedCoinsArray = JSON.parse(localStorage.getItem("coins"));
  //convert to object for faster lookup
  let coinsObject = savedCoinsArray.reduce((acc, cur) => {
    acc[cur] = 1;
    return acc;
  }, {});

  return coins.filter((element) => coinsObject.hasOwnProperty(element.name));
};
