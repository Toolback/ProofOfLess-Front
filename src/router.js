import HomePage from "./pages/HomePage"
import AppPage from "./pages/AppPage"
import CommunityPage from "./pages/CommunityPage"

const routes = [
  { path: '/', component: <HomePage />},
  { path: '/app', component: <AppPage /> },
  { path: '/community', component: <CommunityPage />},


]

export default routes