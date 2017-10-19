import React from 'react'
import MainPage from './pages/MainPage'
import './App.css';


const App = ({ ...props }) => (
    <MainPage { ...props } />
)

export default App