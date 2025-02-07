import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

/* Redux Setup*/
import { Route, Routes, BrowserRouter, Switch } from 'react-router-dom'

// Assets
import './styles/index.css'

// Components
import Header from './components/Header'
import Footer from './components/Footer'

// Pages
import Home from './pages/home'
import Interestrate from './pages/interestrate' 
import Support from './pages/support'
import LSP_DLA from './pages/LSP_DLA'
import Investorrelation from './pages/investorrelation'
import About from './pages/about'

import Reverseproxy from './config/reverseproxy'

const App = () => {

  const navigate = useNavigate()

  const [HeaderOptions, setHeaderOptions] = useState({
    options: [
      {
        id: 'home',
        label: 'Home',
        url: '/',
      },
      {
        id: 'about',
        label: 'About Us',
        url: '/about',
      },
      {
        id: 'investor-relations',
        label: 'Investor Relations',
        url: '/investor-relations',
      },
      {
        id: 'education',
        label: 'Consumer Education & FAQs',
        url: '/education',
      },
      {
        id: 'support',
        label: 'Support',
        url: '/support',
      },
    ],
    actions: [
      {
        id: 'contact',
        label: 'CONTACT US',
        callback: () => navigate('/contact')
      }

    ]
  })

  return (
    <div className="main-container">
      <div className="main-container-content">
        <Header
          options={HeaderOptions.options}
          actions={HeaderOptions.actions}
        />
        <Routes>
          <Route path={Reverseproxy['proxyUrl']+"/"} element={<Home />} />
          <Route path={Reverseproxy['proxyUrl']+ "/interestrate-servicecharges"} element={<Interestrate />} />
          <Route path={Reverseproxy['proxyUrl']+ "/support"} element={<Support />} />
          <Route path={Reverseproxy['proxyUrl']+ "/lsp-dla"} element={<LSP_DLA />} />
          <Route path={Reverseproxy['proxyUrl']+ "/investor-relations"} element={<Investorrelation />} />
          <Route path={Reverseproxy['proxyUrl']+ "/about"} element={<About />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App;
