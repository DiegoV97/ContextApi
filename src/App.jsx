import Router from "./app/Router"
import UserProvider from "./app/providers/UserProvider"


const App = () => {
  return (
    <div>
      <UserProvider>
        <Router />
      </UserProvider>
    </div>
  )
}

export default App

