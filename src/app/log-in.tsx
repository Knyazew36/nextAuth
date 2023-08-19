"use client";
import { logIn, logOut, toggleModerator } from "@/redux/features/auth-slice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function LogIn() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const isAuth = useAppSelector((state) => state.authSlice.value.username);

  const onClickLogIn = () => {
    dispatch(logIn(username));
  };
  const onClickToggle = () => {
    dispatch(toggleModerator());
  };
  const oncCLickLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <input type="text" onChange={(e) => setUsername(e.target.value)} />
      <br />
      <button onClick={onClickLogIn}>Log In</button>
      <br />
      <button onClick={oncCLickLogOut}>Log Out</button>
      <br />
      {isAuth && (
        <button onClick={onClickToggle}>Toggle Moderator Status</button>
      )}
    </div>
  );
}
