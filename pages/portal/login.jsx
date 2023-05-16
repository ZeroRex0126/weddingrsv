import styled from "styled-components";
import { CusButton, Input } from "../../components";
import { useState } from "react";
import { fontColor, primaryColor } from "../../libs/color";
import Image from "next/image";

const LoginComp = styled.div`
  .loginComp {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${primaryColor};
    color: ${fontColor};
    height: 100vh;
  }
  .logoPortal {
    border-radius: 50%;
  }
`;

const Login = ({ loginFunc }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <LoginComp>
        <div className="loginComp">
          <Image
            className="logoPortal"
            width={200}
            height={200}
            src={"/webContent/X-I-Ting-logo.png"}
          />
          <Input
            name={"Username"}
            title={"Username"}
            value={username}
            type={"text"}
            width="auto"
            onValueChange={(e) => {
              setUsername(e.target.value);
            }}
          ></Input>
          <Input
            name={"Password"}
            title={"Password"}
            value={password}
            type={"text"}
            width="auto"
            onValueChange={(e) => {
              setPassword(e.target.value);
            }}
          ></Input>
          <CusButton
            id="loginBtn"
            title={"Login"}
            clicked={() => {
              loginFunc();
            }}
          />
        </div>
      </LoginComp>
    </div>
  );
};

export default Login;
