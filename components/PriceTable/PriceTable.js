import { useEffect, useState } from "react";
import styles from "./PriceTable.module.css";
import TableHeading from "./TableHeading";
import TableRow from "./TableRow";

const PriceTable = (props) => {
  return (
    <div>
      <TableHeading />
      {props.coins
        ? props.coins.map((coin) => {
            return <TableRow key={coin.id} coin={coin} />;
          })
        : null}
    </div>
  );
};

export default PriceTable;
