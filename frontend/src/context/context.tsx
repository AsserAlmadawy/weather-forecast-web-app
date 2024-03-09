"use client";

import React, { useState } from "react";

export interface StateValues {
  latitude?: number;
  setLatitude?: Function;
  longitude?: number;
  setLongitude?: Function;
  city?: string;
  setCity?: Function;
  temperatureDegree?: number;
  setTemperatureDegree?: Function;
}

const initialStateValues: StateValues = {};

export const AppContext: React.Context<StateValues> =
  React.createContext<StateValues>(initialStateValues);

interface ContextProviderProps {
  children: React.ReactNode;
}

type State<T> = [T, React.Dispatch<React.SetStateAction<T>>];

export const ContextProvider: React.FC<ContextProviderProps> = (
  props: ContextProviderProps
) => {
  const [latitude, setLatitude]: State<number> = useState<number>(0),
    [longitude, setLongitude]: State<number> = useState<number>(0),
    [city, setCity]: State<string> = useState<string>(""),
    [temperatureDegree, setTemperatureDegree]: State<number> =
      useState<number>(0),
    { children }: ContextProviderProps = props;

  return (
    <AppContext.Provider
      value={{
        latitude,
        setLatitude,
        longitude,
        setLongitude,
        city,
        setCity,
        temperatureDegree,
        setTemperatureDegree,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};