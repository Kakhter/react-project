import React from "react";
import styles from "../../style/tvsStyle.module.css";

const TVSPaper = () => {
  return (
    <>
      <h3 className={styles.box}>
        Transport Department E Drive - Target - gyansysCopy folder
      </h3>
      <hr />
      <img src="./Vehicle/TransportDepartment.jpeg" width="90%"></img>
      <br></br>
      <h3 className={styles.box}>Insurance</h3>
      <hr />
      <img src="./Vehicle/Insurance.jpeg" width="90%"></img>
      <br></br>
      <h3 className={styles.box}>Invoice</h3>
      <hr />
      <img src="./Vehicle/Invoice.jpeg" width="90%"></img>
      <br></br>
      <h3 className={styles.box}>OnlineDoctor</h3>
      <hr />
      <img src="./Vehicle/OnlineDoctor.jpeg" width="90%"></img>
    </>
  );
};
export default TVSPaper;
