import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import InputField from "../InputField";
import "./FormikChallenge.css";

import { CounterContext } from "../../App";

interface FormValues {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
}

const initialValues: FormValues = {
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
};

const lowercaseRegex = /(?=.*[a-z])/;
const uppercaseRegex = /(?=.*[A-Z])/;
const numericRegex = /(?=.*[0-9])/;

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .max(24, "Maximal Full Name is 24 characters")
        .required("Required"),
    email: Yup.string()
        .lowercase()
        .email("Email is not valid!")
        .required("Required!"),
    password: Yup.string()
        .matches(lowercaseRegex, "one lowercase required!")
        .matches(uppercaseRegex, "one uppercase required!")
        .matches(numericRegex, "one number required!")
        .min(8, "Minimum password is 8 characters")
        .required("Required!"),
    passwordConfirm: Yup.string()
        .oneOf([Yup.ref("password")], "Password is not match!")
        .required("Required!"),
});

const useStyles = makeStyles({
    root: {
        background: "linear-gradient(45deg, #77fcc8 30%, #63ff91 90%)",
        border: 0,
        borderRadius: 3,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        color: "white",
        height: 48,
        padding: "0 30px",
    },
});

const FormikChallenge: React.FC = () => {
    // const [count, setCounter] = useState(1);

    const handleSubmit = (values: FormValues): void => {
        alert(JSON.stringify(values));
    };

    const classes = useStyles();

    return (
        <div className="FcBg">
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={SignupSchema}
            >
                {({ dirty, isValid }) => {
                    return (
                        <Form>
                            <InputField
                                name="name"
                                label="Full Name"
                                required
                            />
                            <InputField name="email" label="Email" required />
                            <InputField
                                name="password"
                                label="Password"
                                required
                                type="password"
                            />
                            <InputField
                                name="passwordConfirm"
                                label="Confirm Password"
                                required
                                type="password"
                            />

                            <Button
                                variant="contained"
                                className={classes.root}
                                disabled={!dirty || !isValid}
                                type="submit"
                            >
                                Submit
                            </Button>
                        </Form>
                    );
                }}
            </Formik>
            <CounterContext.Consumer>
                {/* counter dimulai dari 1 */}
                {(counter) => (
                    <div className="counter">
                        Formik Challenge (counter: {counter.countF})
                    </div>
                )}
            </CounterContext.Consumer>
        </div>
    );
};

export default FormikChallenge;
