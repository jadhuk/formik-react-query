import React, { useState, createContext } from "react";
import FormikChallenge from "../FormikChallenge/FormikChallenge";
import { CounterContext } from "../../App";

const CounterChallenge = () => {
    return (
        <CounterContext.Consumer>
            {(counter) => (
                <div>
                    {/* counter dimulai dari 3 */}
                    <div>
                        Counter Challenge ({`counter: ${counter.countC}`})
                    </div>
                </div>
            )}
        </CounterContext.Consumer>
    );
};

export default CounterChallenge;
