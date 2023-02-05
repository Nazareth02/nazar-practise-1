import React from "react";
import { User } from "./types";
import { Header } from "./components/Header/Header";
import { Aside } from "./components/Aside/Aside";
import { Footer } from "./components/Footer/Footer";
import { Main } from "./components/Main/Main";

export const App = () => {
  const user: User = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  };
  return (
    <div>
      <Header name={user.name} userName={user.username} userEmail={user.email} />
      <Main userAddress={user.address} />
      <Aside userAddressInfo={user.address} />
      <Footer userCompanyInfo={user.company} />
    </div>
  );
};
