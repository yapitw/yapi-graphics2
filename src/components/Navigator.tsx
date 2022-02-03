import * as React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './navigator.scss'

const links = [
    {
        title: 'Graphics',
        route: '/exp',
    },
    {
        title: 'About',
        route: '/about',
    },
    {
        title: 'Web',
        route: '/web',
    },
    {
        title: 'Natural of code',
        route: '/noc',
        hidden: true,
    },
    {
        title: 'Digital Art',
        route: '/art',
    },
]

const Navigator: React.FC = () => {
    return (
        <div className="header">
            <div className="container">
                <Link className="name" to="/">
                    CHUN-HSI HO
                </Link>
                <div className="tabs">
                    {links.map((link, i) => {
                        return link.hidden ? null : (
                            <React.Fragment key={link.route}>
                                {i !== 0 && <h4 className="pipe">|</h4>}
                                <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to={link.route}>
                                    {link.title}
                                </NavLink>
                            </React.Fragment>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Navigator
