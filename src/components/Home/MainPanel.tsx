"use client";

import { ContextAuth } from "@/context/ContextAuth";
import Image from "next/image";
import { useContext } from "react";

import logo from "@/app/logo.png";
import { ContextUserData } from "@/context/ContextUserData";

export default function MainPanel() {
  const { userCredentials } = useContext(ContextAuth);
  const { userData } = useContext(ContextUserData);
  return (
    <div className="flex flex-col items-center justify-center pt-20 pb-10">
      <Image
        src={logo}
        alt="DOGS"
        width={150}
        height={150}
        priority
        className="mt-0 mb-6 rounded-full shadow-c3xl shadow-violet-950"
      />
      <h2 className="mb-6 font-medium text-xl">@{userCredentials.username}</h2>
      <div>
        <span className="font-bold text-6xl">{userData.points}</span>
        <span>pts</span>
      </div>
    </div>
  );
}
