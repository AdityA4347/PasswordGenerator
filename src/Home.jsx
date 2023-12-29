import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useCallback } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const Home = () => {
  const [length, setLength] = useState(8);
  const [charallowed, setCharallowed] = useState(false);
  const [numallowed, setnumallowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordgenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";
    if (numallowed) {
      str = str + "1234567890";
    }
    if (charallowed) {
      str = str + "!@#$%^&*()?";
    }
    for (let i = 0; i < length; i++) {
      let temp = Math.floor(Math.random() * str.length + 1);
      pass = pass + str.charAt(temp);
    }
    setPassword(pass);
  }, [length, charallowed, numallowed, setPassword]);

  const copypassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);
  useEffect(() => {
    passwordgenerator();
  }, [length, charallowed, numallowed, passwordgenerator]);
  return (
    <div>
      <Container>
        <div className="title">Password Generator</div>
        <Search>
          <input
            type="text"
            value={password}
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copypassword}>Copy</button>
        </Search>
        <div className="belowcont">
          <div className="range">
            <input
              type="range"
              min={6}
              max={30}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length : {length}</label>
          </div>
          <div className="char">
            <input
              type="checkbox"
              defaultChecked={charallowed}
              id="charInput"
              onChange={() => {
                setCharallowed((prev) => !prev);
              }}
            />
            <label>CharAllowed</label>
          </div>
          <div className="num">
            <input
              type="checkbox"
              defaultChecked={numallowed}
              id="numInput"
              onChange={() => {
                setnumallowed((prev) => !prev);
              }}
            />
            <label>NumAllowed</label>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
const Search = styled.section`
  display: flex;
  justify-content: center;
  overflow: hidden;
  margin-top: 15px;
  input {
    color: #000000;
    background-color: #ffffff;
    padding-left: 10px;
    width: 400px;
    height: 40px;
    border-radius: 10px;
    font-size: 25px;
  }
  button {
    margin-left: 5px;
    padding-left: 2px;
    border-radius: 10px;
    font-size: 18px;
    width: 70px;
    height: 40px;
    cursor: pointer;
    color: #ffffff;
    background-color: #2196f3;
  }
  button:hover {
    background-color: #4169e1;
  }
`;
const Container = styled.section`
  padding-top: 10px;
  background-color: #000000;
  width: 100vh;
  height: 25vh;
  margin-top: 5%;
  margin-left: 20%;
  border-radius: 20px;
  color: orange;
  .title {
    display: flex;
    justify-content: center;
    font-size: 30px;
    color: orange;
  }
  .belowcont {
    display: flex;
    gap: 40px;
    justify-content: center;
    margin-top: 3%;
    font-size: 20px;
    .range {
      input {
        margin-right: 8px;
      }
    }
    .char {
      input {
        margin-right: 8px;
      }
    }
    .num {
      input {
        margin-right: 8px;
      }
    }
  }
`;
