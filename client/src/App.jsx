import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import routes from "./routes"
import Home from "./components/pages/Home"

function App() {
  return (
    <div className="App">
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
    </div>
  )
}

export default App
