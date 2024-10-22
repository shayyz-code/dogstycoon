"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

import { ContextAuth } from "./ContextAuth";

type TUserData = {
  uid: number;
  points: number;
  setPoints: Dispatch<SetStateAction<number>>;
};

const DVUserData = {
  uid: 700,
  points: 0,
  setPoints: () => {},
};

type TContextUserData = { userData: TUserData };

const DVContextUserData = { userData: DVUserData };

export const ContextUserData =
  createContext<TContextUserData>(DVContextUserData);

export default function UserDataProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [points, setPoints] = useState<number>(0);
  const { userCredentials } = useContext(ContextAuth);
  useEffect(() => {
    setPoints(0);
  }, [userCredentials]);
  return (
    <ContextUserData.Provider
      value={{
        userData: {
          uid: userCredentials.uid,
          points: points,
          setPoints: setPoints,
        },
      }}
    >
      {children}
    </ContextUserData.Provider>
  );
}
