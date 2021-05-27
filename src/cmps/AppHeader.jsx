import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useContext } from "react"
import { SettingsContext } from '../App'
import { UserSettings } from './UserSettings'

export const AppHeader = () => {

    const { settings } = useContext(SettingsContext)
    const { listView, darkMode } = settings
    const [menu, setMenu] = useState(false)
    const headerRef = useRef(null)
    let lastScrollY = 0
    const cloudinaryBaseUrl = process.env.REACT_APP_CLOUDINARY_BASE_URL

    const handleScroll = () => {
        closeMenu()
        window.scrollY ?
            headerRef.current.style.borderBottom = '1px solid #e2e2e2'
            : headerRef.current.style.borderBottom = 'none'
        window.scrollY > lastScrollY ?
            headerRef.current.style.top = '-77px'
            : headerRef.current.style.top = 0
        lastScrollY = window.scrollY
    }

    const toggleMenu = () => setMenu(!menu)
    const closeMenu = () => setMenu(false)

    let routeLinks = (
        <div className="routes-container flex">
            <NavLink to="/" exact activeClassName="active-link" onClick={closeMenu}>Home</NavLink>
            <NavLink to="/resume/" activeClassName="active-link" onClick={closeMenu}>Resume</NavLink>
            <NavLink to="/contact/" activeClassName="active-link" onClick={closeMenu}>Contact</NavLink>
        </div>
    )

    useEffect(() => {
        window.addEventListener('scroll', () => handleScroll())
        return () =>
            window.removeEventListener('scroll', () => handleScroll())
    }, [])

    return <header className={`app-header ${darkMode ? 'dark-mode' : ''}`} ref={headerRef}>
        <section className="main-layout flex j-between a-center">
            <NavLink to="/" onClick={() => window.scrollTo({ top: 0 })}>
                <img className="logo" src={`${process.env.PUBLIC_URL}/favicon.png`} alt="" />
            </NavLink>
            <nav className="flex a-center">
                {routeLinks}
                <button onClick={toggleMenu}>⚙️</button>
            </nav>
            <button className="hamburger-menu d-none" onClick={toggleMenu}>
                <img src={`${cloudinaryBaseUrl}/hamburger-menu_ervpof.svg`} alt="Menu" />
            </button>
            <div className={`menu-container ${menu ? '' : 'd-none'}`}>
                {routeLinks}
                <UserSettings />
                <div className="dialog-bubble"></div>
                <div className="dialog-background" onClick={closeMenu}></div>
            </div>
        </section>
    </header>
}