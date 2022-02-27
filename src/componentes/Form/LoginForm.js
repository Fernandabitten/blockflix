import React, { useContext } from "react";
import { MyContext } from "../../context/context";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Logo from "../../img/logo.png";
import { Grid, Paper, Button } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import { LoginFormStyled } from "./LoginForm.styled";

const Schema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  senha: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const Login = () => {
  const paperStyle = {
    height: "68vh",
    width: 300,
    margin: "auto",
    backgroundColor: " transparent",
  };
  const { loginUser } = useContext(MyContext);

  const history = useHistory();
  const form = useFormik({
    initialValues: {
      email: "",
      senha: "",
    },
    validationSchema: Schema,
    onSubmit: (values) => {
      loginUser(values);
      history.push("/list-movies");
    },
  });

  return (
    <Grid>
      <form action="" onSubmit={form.handleSubmit}>
        <LoginFormStyled>
          <Paper style={paperStyle}>
            <Grid>
              <img src={Logo} alt={"blockflix"} />
            </Grid>
            <Input
              id="email"
              value={form.values.email}
              onChange={form.handleChange}
              label="E-mail"
              placeholder="Enter e-mail"
              type="email"
              fullWidth
              required
              style={{
                width: "300px",
                marginTop: "10%",
                borderBottom: " 1px solid white",
                color: "white",
                padding: "5px",
              }}
            />

            <Input
              id="senha"
              value={form.values.senha}
              onChange={form.handleChange}
              label="Password"
              placeholder="Enter password"
              type="password"
              fullWidth
              required
              style={{
                width: "300px",
                marginTop: "10%",
                borderBottom: " 1px solid white",
                color: "white",
                padding: "5px",
              }}
            />

            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={{
                backgroundColor: "#068DFF",
                fontSize: "15px",
                marginTop: "35px",
                width: "300px",
                height: "50px",
              }}
              fullWidth
            >
              Entrar
            </Button>
          </Paper>
        </LoginFormStyled>
      </form>
    </Grid>
  );
};

export default Login;
