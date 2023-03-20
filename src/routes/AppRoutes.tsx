import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "@pages/Home";
import { Login } from "@pages/Login";
import { Search } from "@pages/Search";
import { Restaurant } from "@pages/Restaurant";
import { NewAccount } from "@pages/NewAccount";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/search" element={<Search />}/>
        <Route path="/signup" element={<NewAccount />}/>
        <Route path="/restaurant/:id" element={<Restaurant />}/>
      </Routes>
    </BrowserRouter>
  )
}