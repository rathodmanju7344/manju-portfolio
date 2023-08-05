import React, { useState } from "react";
import { FaBars, FaReact  } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './styles.scss';

const data = [
    {
        label: 'HOME',
        to: '/'
    },
    {
        label: 'ABOUT ME',
        to: '/about'
    },
    {
        label: 'SKILLS',
        to: '/skills'
    },
    {
        label: 'RESUME',
        to: '/resume'
    },
    {
        label: 'PORTFOLIO',
        to: '/portfolio'
    },
    {
        label: 'CONTACT',
        to: '/contact'
    },
];


const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(false)

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    }
    return (
        <div>
            <nav className={`navbar ${toggleIcon ? 'navbar-issue' : ''} `}>
                <div className="navbar__container">
                    <Link to={"/"} className={`navbar__container__logo ${toggleIcon ? 'navbar__container__logo__issue' : ''}`}>
                        <FaReact size={30} />
                    </Link>
                </div>
                <ul 
                  className={`navbar__container__menu ${toggleIcon ? "active" : ""} `}
                >
                    {
                        data.map((item, key) => (
                            <li className="navbar__container__menu__item">
                                <Link className="navbar__container__menu__item__links" to={item.to} onClick={handleToggleIcon}>
                                    {item.label}
                                </Link>
                            </li>

                        ))
                    }
                </ul>
                <div className={toggleIcon ? "nav-icon-issue":"nav-icon"} onClick={handleToggleIcon}>
                    {
                        toggleIcon ? <HiX size={30}/> : <FaBars size={30}/>
                    }

                </div>
            </nav>
        </div>
    )
}
export default Navbar;