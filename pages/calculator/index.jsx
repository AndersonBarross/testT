
import React from "react";
import { useState } from "react";
import styles from "./Styles.module.css";
import { regularPrice, origin11_16, origin11_17, origin18_11, origin18_17} from "../../components/src/tablePrices/tablePrice.jsx";


const minutes =(time, setTime) => {
    return (
        <div className={styles.inputTime}> 
           
                <h1 className={styles.phrase}>Enter the call time in minutes</h1>
                <input 
                type="number"
                name="minutes" 
                placeholder="Call time in minutes" 
                value={time} 
                onChange={(e) => {setTime(e.target.value)}} 
               /> 
                
       </div>        
    )
}


const calculate = (time, setResult) =>{
    const calc=() =>{ 
        setResult(time)
    }
    return (
        <div className={styles.button}>
            <button onClick={calc}>Calculate</button>
        </div>
    )
};


const fResult = (result) =>{
       
    return (
        <div className={styles.grid}>
         
            <div className={styles.origin11_16}> 
                <h3 className={styles.h3}>   Origin DDD 11 - Destination DDD 16 </h3>
                <h3 className={styles.h3}>   regular Price = ${result*(regularPrice).toFixed(2)} </h3>

                <h3 className={styles.h3}>   Plan 30 minutes = ${(result*origin11_16[0]).toFixed(2)} </h3>
                <h6 className={styles.h3}>   Money Saved = ${(result*(regularPrice)-(result*origin11_16[0])).toFixed(2)} </h6>

                <h3 className={styles.h3}>   Plan 60 minutes = ${(result*origin11_16[1]).toFixed(2)} </h3>
                <h6 className={styles.h3}>   Money Saved = ${(result*(regularPrice)-(result*origin11_16[1])).toFixed(2)} </h6>
            
                <h3 className={styles.h3}>   Plan 120 minutes = ${(result*origin11_16[2]).toFixed(2)} </h3>
                <h6 className={styles.h3}>   Money Saved = ${(result*(regularPrice)-(result*origin11_16[2])).toFixed(2)} </h6>
            </div>
                 
            <div className={styles.origin11_17}> 
                <h3 className={styles.h3}>   Origin DDD 11 - Destination DDD 17 </h3>
                <h3 className={styles.h3}>   regular Price = ${result*(regularPrice).toFixed(2)} </h3>

                <h3 className={styles.h3}>   Plan 30 minutes = ${(result*origin11_17[0]).toFixed(2)} </h3>
                <h6 className={styles.h3}>   Money Saved = ${(result*(regularPrice)-(result*origin11_17[0])).toFixed(2)} </h6>
            
                <h3 className={styles.h3}>   Plan 60 minutes = ${(result*origin11_17[1]).toFixed(2)} </h3>
                <h6 className={styles.h3}>   Money Saved = ${(result*(regularPrice)-(result*origin11_17[1])).toFixed(2)} </h6>           
            
                <h3 className={styles.h3}>   Plan 120 minutes = ${(result*origin11_17[2]).toFixed(2)} </h3>
                <h6 className={styles.h3}>   Money Saved = ${(result*(regularPrice)-(result*origin11_17[0])).toFixed(2)} </h6>            
            </div>
                
            <div className={styles.origin18_11}> 
                <h3 className={styles.h3}>   Origin DDD 18 - Destination DDD 11 </h3>
                <h3 className={styles.h3}>   regular Price = ${result*(regularPrice).toFixed(2)} </h3>
            
                <h3 className={styles.h3}>   Plan 30 minutes = ${(result*origin18_11[0]).toFixed(2)} </h3>
                <h6 className={styles.h3}>   Money Saved = ${(result*(regularPrice)-(result*origin18_11[0])).toFixed(2)} </h6>

                <h3 className={styles.h3}>   Plan 60 minutes = ${(result*origin18_11[1]).toFixed(2)} </h3>
                <h6 className={styles.h3}>   Money Saved = ${(result*(regularPrice)-(result*origin18_11[1])).toFixed(2)} </h6>

                <h3 className={styles.h3}>   Plan 120 minutes = ${(result*origin18_11[2]).toFixed(2)} </h3>
                <h6 className={styles.h3}>   Money Saved = ${(result*(regularPrice)-(result*origin18_11[2])).toFixed(2)} </h6>
            </div>

             <div className={styles.origin11_17}> 
                <h3 className={styles.h3}>   Origin DDD 18 - Destination DDD 17 </h3>
                <h3 className={styles.h3}>   regular Price = ${result*(regularPrice).toFixed(2)}</h3>
                <h3 className={styles.h3}>   Plan 30 minutes = ${(result*origin18_17[0]).toFixed(2)} </h3>
                <h6 className={styles.h3}>   Money Saved = ${(result*(regularPrice)-(result*origin18_17[0])).toFixed(2)} </h6> 
            
                <h3 className={styles.h3}>   Plan 60 minutes = ${(result*origin18_17[1]).toFixed(2)} </h3>
                <h6 className={styles.h3}>   Money Saved = ${(result*(regularPrice)-(result*origin18_17[2])).toFixed(2)} </h6> 
            
                <h3 className={styles.h3}>   Plan 120 minutes = ${(result*origin18_17[2]).toFixed(2)} </h3>
                <h6 className={styles.h3}>   Money Saved = ${(result*(regularPrice)-(result*origin18_17[2])).toFixed(2)} </h6> 
            </div>
            <div  className={styles.showTablePrices}>
                <h1 className={styles.phrase}>Take a look on prices per minute</h1>
             
                <h2 >Plan 30 you pay per minute:</h2>
                <div >
                    <ul>Origin 11 - destinatory 16:   ${origin11_16[0]}</ul>
                    <ul>Origin 11 - destinatory 17:   ${origin11_17[0]}</ul>
                    <ul>Origin 18 - destinatory 11:   ${origin18_11[0]}</ul>
                    <ul>Origin 18 - destinatory 17:   ${origin18_17[0]}</ul>
                </div>
                <div>-----------------------------------------------</div>

                <h2>Plan 60 you pay per minute:</h2>
                <div className={styles.showTablePrices_origin_dest}>
                    <ul>Origin 11 - destinatory 16:   ${origin11_16[1]}</ul>
                    <ul>Origin 11 - destinatory 17:   ${origin11_17[1]}</ul>
                    <ul>Origin 18 - destinatory 11:   ${origin18_11[1]}</ul>
                    <ul>Origin 18 - destinatory 17:   ${origin18_17[1]}</ul>
                </div>
                <div>-----------------------------------------------</div>

                <h2>Plan 120 you pay per minute:</h2>
                <div className={styles.showTablePrices_origin_dest}>
                    <ul>Origin 11 - destinatory 16:   ${origin11_16[2]}</ul>
                    <ul>Origin 11 - destinatory 17:   ${origin11_17[2]}</ul>
                    <ul>Origin 18 - destinatory 11:   ${origin18_11[2]}</ul>
                    <ul>Origin 18 - destinatory 17:   ${origin18_17[2]}</ul>
                </div>
                <div>-----------------------------------------------</div>
                <h2> Regular Price you pay per minute:</h2>
                <div className={styles.showTablePrices_origin_dest}>
                    <ul>Origin 11 - destinatory 16:   ${regularPrice}</ul>
                    <ul>Origin 11 - destinatory 17:   ${regularPrice}</ul>
                    <ul>Origin 18 - destinatory 11:   ${regularPrice}</ul>
                    <ul>Origin 18 - destinatory 17:   ${regularPrice}</ul>
                </div>


            </div>
        </div>
    )
}

export function CallTime() {
    const [time, setTime] = useState(0);
    const [result, setResult] = useState(0);
      return (
        <>
        {minutes(time, setTime)}
        {calculate(time, setResult)}
        {fResult(result)}
    
        </>
    );
}






