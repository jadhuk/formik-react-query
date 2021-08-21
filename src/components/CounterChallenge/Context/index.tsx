import { createContext } from "react";

const CounterContext = createContext({
    count: 0,
    increment: () => {},
    decrement: () => {},
});

CounterContext.displayName = "CounterContext";

export default CounterContext;
