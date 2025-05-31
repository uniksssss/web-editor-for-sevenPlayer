import { BrowserRouter, Route, Routes } from "react-router-dom"
import StartScreen from "./components/start-screen/start-screen"
import Editor from "./components/editor/editor"
import NotFound from "./components/not-found/not-found"
import { AppRoute } from "./const"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Start} element={<StartScreen/>} />
          <Route path="/edit/:templateId" element={<Editor />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
