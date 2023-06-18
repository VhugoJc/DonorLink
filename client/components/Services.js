import React from "react";
import styles from "../styles/components/services.module.css";
import Link from "next/link";
import data from "../constants/data";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <>
      <section className={styles.services}>
        <h1>Provide Help</h1>
        <div className={styles.provideHelp}>
          {data?.provideHelpService?.map((data1) => {
            return (
              <>
                <div key={data1.id}>
                  <Link href={data1.link}>
                    <ServiceCard service={data1} />
                  </Link>
                </div>
              </>
            );
          })}
        </div>
        <h1>Get Help</h1>
        <div className={styles.getHelp}>
          {data?.getHelpService?.map((data2) => {
            return (
              <>
                <div key={data2.id}>
                  <ServiceCard service={data2} />
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Services;
