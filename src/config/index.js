import React from "react";


export const que1 = {
  title: "BARDZO KRWAWI?",
  to: "",
  linkYes: "/sol-2",
  linkNo: "/krok-2",
    backgroundColor: "#f98006"
};
export const que2 = {
  title: "CHODZI?",
  to: "",
  linkYes: "/sol-4",
  linkNo: "/krok-3",
  return: "/",
  back: "/",
    backgroundColor: "#f98006",
};
export const que3 = {
  title: "REAGUJE?",
  to: "",
  linkYes: "/sol-5",
  linkNo: "/krok-4",
  return: "/krok-2",
  back: "/",
    backgroundColor: "#f98006"
};
export const que4 = {
  title: "ODDYCHA?",
  to: "",
  linkYes: "/sol-3",
  linkNo: "/sol-1",
  return: "/krok-3",
  back: "/",
    backgroundColor: "#f98006"
};

export const bleed = {
  title: "TAMUJ KRWOTOK",
  to: "",
  linkYes: "/sol-3",
  backgroundColor: "#b30000",
  fontColor: "white",
  return: "/",
  description: "NIEPRZYTOMNY?",
  back: "/"
};

export const resu = {
  title: "ROZPOCZNIJ RKO",
  to: "",
  linkYes: "/Hemo",
  linkNo: "/krok-5",
  backgroundColor: "black",
  fontColor: "white",
  description: "pod warunkiem, że udzieliłeś pomocy pozostałym poszkodowanym",
  return: "/krok-4",
  back: "/"
};

export const save = {
  title: "POZYCJA BEZPIECZNA (NA BOKU)",
  to: "",
  backgroundColor: "#b30000",
  fontColor: "white",
  return: "sol-2",
  back: "/"
};

export const help = {
  title: "ZACHĘĆ DO UDZIELANIA POMOCY INNYM",
  to: "",
  backgroundColor: "#00b300",
  fontColor: "black",
  return: "krok-2",
  back: "/"
};

export const secure = {
  title: "ZABEZPIECZ RANY I ZŁAMANIA",
  description: "Zbierz wywiad",
  to: "",
  backgroundColor: "#e0e006",
  fontColor: "black",
  return: "krok-2",
  back: "/"
};
