import Dashboard from "./components/pages/Dashboard"
import Home from "./components/pages/Home"
import Skills from "./components/pages/Skills"

let routes = [
  { path: "/", element: Dashboard },
  { path: "/about", element: Home },
  { path: "/skills", element: Skills },
]

export default routes