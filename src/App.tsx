import React, { useState, createContext } from "react";
import FormikChallenge from "./components/FormikChallenge/FormikChallenge";
import ReactQueryChallenge from "./components/ReactQueryChallenge/ReactQueryChallenge";
import CounterChallenge from "./components/CounterChallenge/CounterChallenge";
import "./App.css";

import { QueryClient, QueryClientProvider } from "react-query";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const queryClient = new QueryClient();

export const CounterContext = createContext({
    countF: 1,
    countR: 2,
    countC: 3,
    increment: () => {},
});

const App = () => {
    const [countR, setCounterR] = useState(2);
    const [countC, setCounterC] = useState(3);
    const [countF, setCounterF] = useState(1);

    const increment = () => {
        setCounterR(countR + 1);
        setCounterC(countC + 1);
        setCounterF(countF + 1);
    };

    return (
        <CounterContext.Provider value={{ countR, countC, countF, increment }}>
            <QueryClientProvider client={queryClient}>
                <div className="App">
                    <h1>Nore Interview CodeSandbox</h1>
                    <h4>Results</h4>
                    <h2>Sign Up</h2>
                    <section className="section-task">
                        <FormikChallenge />
                    </section>

                    <section className="section-task">
                        <ReactQueryChallenge />
                    </section>

                    <section className="section-task">
                        <CounterChallenge />
                        <Button
                            variant="contained"
                            size="small"
                            onClick={increment}
                            color="primary"
                        >
                            +
                        </Button>
                    </section>
                </div>
            </QueryClientProvider>
        </CounterContext.Provider>
    );
};

export default App;
