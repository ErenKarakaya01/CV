import Dashboard from "./components/pages/Dashboard"
import Home from "./components/pages/Home"
import ChatApp from "./components/pages/projects/ChatApp"
import MofceLab from "./components/pages/projects/MofceLab"
import Skills from "./components/pages/Skills"

let routes = [
  { path: "/", element: Dashboard },
  { path: "/about", element: Home },
  { path: "/skills", element: Skills },
  { path: "/projects/chatapp", element: ChatApp },
  { path: "/projects/mofcelab", element: MofceLab },
]

export default routes