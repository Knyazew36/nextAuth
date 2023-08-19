"use client";
import LogIn from "./log-in";
import { useAppSelector } from "@/redux/store";

export default function Home() {
  const username = useAppSelector((state) => state.authSlice.value.username);
  const isModerator = useAppSelector(
    (state) => state.authSlice.value.isModerator
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LogIn />
      <h1>UserName: {username}</h1>
      {isModerator && <h2>This is a Moderator </h2>}
    </main>
  );
}
