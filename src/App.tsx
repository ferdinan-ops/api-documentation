import { Routes, Route } from 'react-router-dom'
import { Dashboard, Detail } from './pages'
import { AuthLayout, DashboardLayout } from './components'
import Login from './pages/Login'
import Register from './pages/Register'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path=":id" element={<Detail />} />
      </Route>
      <Route path="/" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  )
}
