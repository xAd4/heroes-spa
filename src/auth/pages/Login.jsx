import { useNavigate } from "react-router-dom";

export const Login = () => {
  const handleLogin = useNavigate();

  const onLogin = () => {
    handleLogin("/marvel", {
      replace: true,
    });
  };

  return (
    <>
      <div className="container mt-5">
        <h1>Login</h1>
        <hr />
        <button onClick={onLogin} className="btn btn-primary">
          Login
        </button>
      </div>
    </>
  );
};
