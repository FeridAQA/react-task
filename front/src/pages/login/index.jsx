import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Snackbar, Alert } from "@mui/material";
import { Link } from "react-router-dom";
import "./index.scss";

const Login = () => {
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const validationSchema = Yup.object({
        name: Yup.string().min(3, "Ad ən az 3 simvol olmalıdır").required("Ad tələb olunur"),
        email: Yup.string().email("Düzgün email daxil edin").required("Email tələb olunur"),
        password: Yup.string()
            .min(6, "Şifrə ən az 6 simvol olmalıdır")
            .required("Şifrə tələb olunur"),
    });

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
        },
        validationSchema,
        onSubmit: (values) => {
            console.log("Qeydiyyat məlumatları:", values);
            setOpenSnackbar(true);
        },
    });

    return (
        <div id="login">
            <div className="signup-container">
                <h2>Log in to Exclusive</h2>
                <p>Enter your details below</p>

                {/* Form */}
                <form onSubmit={formik.handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email && <p className="error">{formik.errors.email}</p>}

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.password && formik.errors.password && <p className="error">{formik.errors.password}</p>}

                    <div className="btndiv">
                        <button type="submit" className="create-btn">Log In</button>
                        <div className="forgot">Forget Password?</div>
                    </div>
                </form>


            </div>

            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={() => setOpenSnackbar(false)}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
                <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: "100%" }}>
                    Login olundu
                </Alert>
            </Snackbar>
        </div>
    );
};

export default Login;
