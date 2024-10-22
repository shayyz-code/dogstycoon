"use client";

import { useInitData } from "@vkruglikov/react-telegram-web-app";
import { createContext, ReactNode, useEffect, useState } from "react";

type TUserCredentials = {
  uid: number;
  username: string | undefined;
};

const DVUserCredentials = {
  uid: 700,
  username: "shayy",
};

type TContextAuth = { userCredentials: TUserCredentials };

const DVContextAuth = { userCredentials: DVUserCredentials };

export const ContextAuth = createContext<TContextAuth>(DVContextAuth);

export default function AuthProvider({ children }: { children: ReactNode }) {
  const initData = useInitData();
  const [userCredentials, setUserCredentials] =
    useState<TUserCredentials>(DVUserCredentials);
  useEffect(() => {
    if (initData[0] && initData[0].user) {
      const { id: uid, username } = initData[0].user;

      setUserCredentials({ uid: uid, username: username });
    } else {
      setUserCredentials(userCredentials);
    }
  }, [initData, userCredentials]);
  return (
    <ContextAuth.Provider value={{ userCredentials }}>
      {children}
    </ContextAuth.Provider>
  );
}
