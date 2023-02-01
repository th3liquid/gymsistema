import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DashboardPage } from '../pages/dashboard/DashboardPage'
import { LoginPage } from '../pages/login/LoginPage'

export const RouterGym = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='dashboard' element={<DashboardPage />} />
        
    </Routes>
    </>
  )
}
