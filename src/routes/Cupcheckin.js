import React from 'react';
import NavBar from "./layout/NavBar";
import styles from "./Style.module.css";
import { useInput } from "../components/Hooks";

const Cupcheckin = () => {

    const maxLen = value => {
        let validate= true;
        validate = value.length <= 12;  // validate = value.includes("@");
        return validate;
    }
      
    const name = useInput("", maxLen);

    return (
        <div className={styles.container}>

            <NavBar />

            <div className={styles.section}>
                <h3>컵을 사용합니다.</h3>

                {/* Hooks : useInput */}
                <div className={styles.hooks}>
                    <p style={{margin:'0px'}}><input placeholder="Barcode Scan" {...name} autoFocus /></p>
                    {/* <input placeholder="Name" value={name.value} onChange={name.onChange} /> */}
                </div> 
            </div>

        </div>
    );
            
}

export default Cupcheckin;