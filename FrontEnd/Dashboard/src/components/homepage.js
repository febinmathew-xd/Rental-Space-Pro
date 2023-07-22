import { useState } from "react";
function Homepage() {
  const [loginid, setloginid] = useState();
  const [username, setusername] = useState();
  const [password, setpassword] = useState();

  const save = () => {
    let param = {
      loginid: loginid,
      username: username,
      password: password,
    };
    fetch("http://127.0.0.1:8000/api/student_create", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(param),
    }).then((response) => {
      response.json().then((data) => {
        console.log(data);
      });
    });
  };
  return (
    <>
      <h1>HOME PAGE</h1>
      <input
        placeholder="enter your loginid"
        onchange={(event) => {
          setloginid(event.target.value);
        }}
      />
      <input
        placeholder="enter your username"
        onchange={(event) => {
          setusername(event.target.value);
        }}
      />
      <input
        placeholder="enter your password"
        onchange={(event) => {
          setpassword(event.target.value);
        }}
      />
      <button
        onClick={() => {
          save();
        }}
      >
        save
      </button>
    </>
  );
}
export default Homepage;
