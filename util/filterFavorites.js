export const filterFavorites = (coins) => {
  //retrieve favorite coins from local storage
  let savedCoinsObject = JSON.parse(localStorage.getItem("coins"));

  return coins.filter((element) =>
    savedCoinsObject.hasOwnProperty(element.name)
  );
};
