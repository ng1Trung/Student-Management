import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import cityApi from 'api/cityApi'
import { LoginPage } from 'features/auth/pages/LoginPage'
import { AdminLayout } from 'components/Layout'
import { NotFound, PrivateRoute } from 'components/Common'

function App() {
    useEffect(() => {
        cityApi.getAll().then((response) => console.log(response))
    })

    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <PrivateRoute path="/admin" element={<AdminLayout />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default App
