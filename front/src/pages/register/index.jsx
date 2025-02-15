import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Grid,
  Paper,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

const Signup = () => {
  // ✅ Yup ilə doğrulama sxemi
  const validationSchema = Yup.object({
    name: Yup.string().min(3, "Ad ən az 3 simvol olmalıdır").required("Ad tələb olunur"),
    email: Yup.string().email("Düzgün email daxil edin").required("Email tələb olunur"),
    password: Yup.string()
      .min(6, "Şifrə ən az 6 simvol olmalıdır")
      .required("Şifrə tələb olunur"),
  });

  // ✅ Formik formu
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Qeydiyyat məlumatları:", values);
      alert("Qeydiyyat uğurla tamamlandı!");
    },
  });

  return (
    <Container maxWidth="md">
      <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ minHeight: "100vh" }}>
        {/* Şəkil Bölməsi */}
        <Grid item xs={12} md={6}>
          <img
            src="https://source.unsplash.com/400x400/?shopping,cart"
            alt="Shopping"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </Grid>

        {/* Form Bölməsi */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 4, textAlign: "center" }}>
            <Typography variant="h5" fontWeight="bold">
              Create an account
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
              Enter your details below
            </Typography>

            {/* Form */}
            <form onSubmit={formik.handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                margin="normal"
                {...formik.getFieldProps("name")}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />

              <TextField
                fullWidth
                label="Email or Phone Number"
                variant="outlined"
                margin="normal"
                {...formik.getFieldProps("email")}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />

              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                {...formik.getFieldProps("password")}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />

              {/* Create Account Button */}
              <Button
                fullWidth
                variant="contained"
                color="error"
                type="submit"
                sx={{ mt: 2, py: 1.5 }}
              >
                Create Account
              </Button>

              {/* Google ilə qeydiyyat */}
              <Button
                fullWidth
                variant="outlined"
                startIcon={<GoogleIcon />}
                sx={{ mt: 2, py: 1.5 }}
              >
                Sign up with Google
              </Button>
            </form>

            {/* Login Link */}
            <Typography variant="body2" sx={{ mt: 2 }}>
              Already have an account? <a href="/login">Log in</a>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Signup;
