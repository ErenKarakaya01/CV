import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import routes from "./routes"
import Home from "./components/pages/Home"
import NavigationBar from "./components/NavigationBar"
import AOS from "aos"
import { useEffect } from "react"
import Footer from "./components/Footer"

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <NavigationBar />
      <Router>
        <Routes>
          {routes.map((r, i) => {
            // Generating routes
            return r.element ? (
              <Route key={i} path={r.path} element={<r.element {...r} />} />
            ) : null
          })}
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
