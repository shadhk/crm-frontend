import React from "react"
import { Footer } from "./partials/Footer.comp"
import { Header } from "./partials/Header.comp"

export const DefaultLayout = ({ children }) => {
  return (
    <div className="default-layout">
      <header className="header mb-3">
        <Header />
      </header>
      <main className="main">{children}</main>

      <footer class="py-3 my-4">
        <Footer />
      </footer>
    </div>
  )
}
