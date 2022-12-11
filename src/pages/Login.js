import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import { Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { useState } from "react";

export default function Login({ setAuth }) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [error, setError] = useState(false);

  let navigate = useNavigate();

  const routeChange = () => {
    let path = `/products`;
    navigate(path);
  };

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      if (email === "test" && pwd === "test") {
        setAuth(true);
        routeChange();
      } else {
        setError(true);
        setErrorMsg("*Invalid username or password");
        setLoading(false);
      }
    }, 2000);
  };

  return (
    <Box
      component={"form"}
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      autoComplete={"on"}
    >
      <Typography fontSize={"1.5rem"}>Sign in to your account</Typography>
      <TextField
        required
        error={error}
        variant="outlined"
        id="email"
        label="Username"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        required
        error={error}
        variant="outlined"
        id="password"
        label="Password"
        type="password"
        onChange={(e) => setPwd(e.target.value)}
      />
      <br />
      
      {errorMsg ? (
        <Typography sx={{color: "red"}}>{errorMsg}</Typography>
      ) : null}
      <br />
      <LoadingButton
        size="large"
        onClick={handleClick}
        endIcon={<LoginIcon />}
        loading={loading}
        loadingPosition="end"
        variant="contained"
        type="submit"
      >
        Login
      </LoadingButton>
    </Box>
  );
}
