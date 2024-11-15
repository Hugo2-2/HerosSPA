import React from 'react'
import { Navbar } from '../../ui'
import { MarvelPage, DcPage, SearchPage, HeroePage } from '../pages'
import { Navigate, Routes, Route } from 'react-router-dom'

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />

        <div className="container">
            <Routes>
                <Route path="marvel" element={<MarvelPage />} />
                <Route path="dc" element={<DcPage />} />

                <Route path="search" element={<SearchPage />} />
                <Route path="hero/:id" element={<HeroePage />} />

                <Route path="/" element={<Navigate to="/marvel" />} />
              </Routes>
        </div>

        
    </>
  )
}
