import React from "react"
import "./App.css"
import { DefaultLayout } from "./layout/DefaultLayout"
import Entry from "./page/entry/Entry.page"

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>Dashboard Content</DefaultLayout>
    </div>
  )
}

export default App
