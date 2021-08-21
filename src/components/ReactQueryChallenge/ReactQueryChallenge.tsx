import axios from "axios";
import { useQuery } from "react-query";

import { CounterContext } from "../../App";

const getData = async () => {
    const URL = "https://randomuser.me/api/?results=10";
    const response = await axios.get(URL);
    const results = await response;

    return results.data.results.map((names: any) => names.name);
};

const ReactQueryChallenge = () => {
    const { isLoading, error, data } = useQuery("repoData", getData);

    console.log(data, "ini data");

    return (
        <CounterContext.Consumer>
            {/* counter dimulai dari 2 */}
            {(counter) => (
                <div className="counter">
                    Formik Challenge (counter: {counter.countR})
                </div>
            )}
        </CounterContext.Consumer>
    );
};

export default ReactQueryChallenge;
