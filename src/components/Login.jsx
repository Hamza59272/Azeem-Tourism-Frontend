import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import signin from '../assets/signin.jpg'
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ThemeColor = createTheme({
  palette: {
    primary: { main: "#3498db", contrastText: "#fff" },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default function SignInSide() {
  const navigateTo = useNavigate();
  const [email, setemail] = React.useState("");
  const [emailerror, setemailerror] = React.useState("");
  const [pass, setpass] = React.useState("");
  const [passerror, setpasserror] = React.useState("");
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const submit = (event) => {
    event.preventDefault();

    if (
      /.+@.+\.[A-Za-z]+$/.test(email) &&
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(pass)
    ) {
      const data = { email, password: pass };
      const URL = "https://backend.azeemtourism.com/api/auth/login";
      axios
        .post(URL, data)
        .then((response) => {
          localStorage.setItem("accessToken", response.data.accessToken);
          localStorage.setItem("refreshToken", response.data.refreshToken);
          localStorage.setItem("user", JSON.stringify(response.data.data));
          navigateTo("/");
          window.location.reload();
        })
        .catch((error) => {});
      event.preventDefault();
      setemail("");
      setpass("");
    }

    if (!/.+@.+\.[A-Za-z]+$/.test(email)) {
      setemailerror("Enter Valid Email");
    }

    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(pass)) {
      setpasserror("Enter Correct Password");
    }
  };

  return (
    <ThemeProvider theme={ThemeColor}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
            item
            xs={12}
            sm={8}
            md={5}
            backgroundColor={'#ffff'}
            component={Paper}
            elevation={6}
            square
            sx={{
              border: 0.2,
              borderColor:'blue',
              borderRadius: 10,
              boxShadow: 10,
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              height: '90vh',
              margin: 'auto',
              mt: 2,
              mb: 2,
            }}
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifySelf: 'center',
                backgroundImage: `url(${signin})`,
                        backgroundSize: '35% 35%', 
                        backgroundRepeat:  'no-repeat',
                       
                        backgroundPosition: 'right top',
              }}
            >
    
    <Avatar sx={{ m: 1, bgcolor: 'primary.main', }}>
      <LockOutlinedIcon />
    </Avatar>
    <Typography component="h1" variant="h5" >
      Sign in
    </Typography>
            <Box component="form" noValidate onSubmit={submit} sx={{ mt: 1 }}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                  setemailerror("");
                }}
                error={!!emailerror}
                helperText={emailerror}
                sx={{ borderRadius: 20 ,marginTop:'10%'}}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                id="password"
                onChange={(e) => {
                  setpass(e.target.value);
                  setpasserror("");
                }}
                error={!!passerror}
                helperText={passerror}
                autoComplete="current-password"
                type={values.showPassword ? "text" : "password"}
                value={pass}
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{ borderRadius: 20 }}
              />
              <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Remember me"
                    sx={{ mt: 1 }}
                  />
                  <Box sx={{ mt: 2, width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      sx={{ borderRadius: 20, width: '30%' }}
                    >
                      Sign In
                    </Button>
                  </Box>

              <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 5 }}>
                {"Copyright © "}
                <Link color="inherit">Azeem Tourism</Link> {new Date().getFullYear()}
                {"."}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
