import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillHouseFill } from 'react-icons/bs'
import { IoMdArrowDropdown } from 'react-icons/io'
import './navbar.css'
// import NavDropDown from './navDropDown'
import { FaBars } from 'react-icons/fa'

// const Navbar = () => {
//     let [hide, setHide] = useState(false)
//     const [width, setWidth] = useState(window.innerWidth);
//     const updateWidthAndHeight = () => {
//         setWidth(window.innerWidth);
//     };

//     useEffect(() => {
//         window.addEventListener("resize", updateWidthAndHeight);
//         return () => window.removeEventListener("resize", updateWidthAndHeight);
//     }, []);

//     if (width > 765) {
//         hide = true
//     }
//     const handleNav = () => {
//         setHide(!hide)
//     }


//     let [open, setOpen] = useState({
//         ccs: false, dumps: false, socks: false,
//         ssn: false, acc: false, billing: false,
//         support: false, profile: false
//     })
//     const handleOpen = (e) => {
//         setOpen({ [e]: !open[e] })
//         // console.log(e)
//     }

//     // const handleNav = () => {
//     //    setNav(!nav)
//     //     // console.log(nav)
//     // }
//     console.log(hide)

//     return (
//         <div className='navbar_container' >
//             <div className='navbar_main_div'>
//                 <div className='bar_div' onClick={handleNav}>
//                     <FaBars />
//                 </div>
//                 {hide ?
//                     <ul

//                         className={hide ? 'nav_ul ' :
//                             'nav_ul list '
//                         }
//                     >
//                         <li>
//                             <Link className='nav_link'><BsFillHouseFill className='nav_icon' /> News </Link>
//                         </li>
//                         <li className='css' onClick={() => handleOpen('ccs')}>
//                             <p className='nav_link'>CCS/Fulls</p>
//                             <IoMdArrowDropdown className='nav_more_icon' />
//                             {open.ccs ?
//                                 <NavDropDown className={hide ? 'open' : null} />
//                                 :
//                                 null
//                             }
//                         </li>
//                         <li onClick={() => handleOpen('dumps')} >
//                             <p className='nav_link' >Dumps</p>
//                             <IoMdArrowDropdown className='nav_more_icon' />
//                             {open.dumps ?
//                                 <NavDropDown className={hide ? 'open' : null} />
//                                 :
//                                 null
//                             }
//                         </li>
//                         <li onClick={() => handleOpen('socks')}>
//                             <p className='nav_link'>Socks 5</p>
//                             <IoMdArrowDropdown className='nav_more_icon' />
//                             {open.socks ?
//                                 <NavDropDown className={!hide ? 'open' : null} />
//                                 :
//                                 null
//                             }
//                         </li>
//                         <li onClick={() => handleOpen('ssn')}>
//                             <p className='nav_link'>SSN/DOB</p>
//                             <IoMdArrowDropdown className='nav_more_icon' />
//                             {open.ssn ?
//                                 <NavDropDown className={!hide ? 'open' : null} />
//                                 :
//                                 null
//                             }
//                         </li>
//                         <li onClick={() => handleOpen('acc')}>
//                             <p className='nav_link'>Accounts</p>
//                             <IoMdArrowDropdown className='nav_more_icon' />
//                             {open.acc ?
//                                 <NavDropDown className={!hide ? 'open' : null} />
//                                 :
//                                 null
//                             }
//                         </li>
//                         <li onClick={() => handleOpen('billing')}>
//                             <p className='nav_link'>Billing</p>
//                             <IoMdArrowDropdown className='nav_more_icon' />
//                             {open.billing ?
//                                 <NavDropDown className={!hide ? 'open' : null} />
//                                 :
//                                 null
//                             }
//                         </li>
//                         <li >
//                             <p className='nav_link'>Binlookup</p>

//                         </li>
//                         <li onClick={() => handleOpen('support')}>
//                             <p className='nav_link'>Support</p>
//                             <IoMdArrowDropdown className='nav_more_icon' />
//                             {open.support ?
//                                 <NavDropDown className={!hide ? 'open' : null} />
//                                 :
//                                 null
//                             }
//                         </li>
//                         <li onClick={() => handleOpen('profile')}>
//                             <p className='nav_link'>Profile</p>
//                             <IoMdArrowDropdown className='nav_more_icon' />
//                             {open.profile ?
//                                 <NavDropDown className={!hide ? 'open' : null} />
//                                 :
//                                 null
//                             }
//                         </li>
//                     </ul>
//                     :
//                     null
//                 }
//             </div>
//         </div>
//     )
// }

// export default Navbar

export const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav nav_ul">
                        <li className="nav-item">
                            <Link className="nav-link active" to='/news' aria-current="page" >
                                <BsFillHouseFill className='nav_icon' />News</Link>
                        </li>
                        
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                CCV/Fullz
                           <IoMdArrowDropdown className='nav_more_icon' />

                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link className="dropdown-item"  >Buy CCV/Fullz</Link></li>
                                <li><Link className="dropdown-item"  >Cart CCV/Fullz</Link></li>
                                <li><Link className="dropdown-item"  >Orders CCV/Fullz</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                               Dumps
                           <IoMdArrowDropdown className='nav_more_icon' />

                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link className="dropdown-item" >Buy Dumps(USA/WorldWide)</Link></li>
                                <li><Link className="dropdown-item" >Cart Dumps</Link></li>
                                <li><Link className="dropdown-item" >Orders Dumps</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link-sock dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Socks 5
                            <IoMdArrowDropdown className='nav_more_icon' />
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link className="dropdown-item" >Buy Socks 5</Link></li>
                                <li><Link className="dropdown-item" >Orders Socks 5</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                             SSN/DOB
                             <IoMdArrowDropdown className='nav_more_icon' />
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link className="dropdown-item" >Buy SSN/DOB</Link></li>
                                <li><Link className="dropdown-item" >Orders SSN/DOB</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Accounts
                             <IoMdArrowDropdown className='nav_more_icon' />

                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link className="dropdown-item" >Buy Accounts</Link></li>
                                <li><Link className="dropdown-item" >Orders Accounts</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Billing
                             <IoMdArrowDropdown className='nav_more_icon' />

                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link className="dropdown-item" >Topup</Link></li>
                                <li><Link className="dropdown-item" >History</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" >Binlookup</Link>
                        </li>
                        
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Support
                             <IoMdArrowDropdown className='nav_more_icon' />

                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link className="dropdown-item" >My invitation code</Link></li>
                                <li><Link className="dropdown-item" >My tickets</Link></li>
                                <li><Link className="dropdown-item" >Create tickets</Link></li>
                                <li><Link className="dropdown-item" >Help center</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Profile
                             <IoMdArrowDropdown className='nav_more_icon' />

                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link className="dropdown-item" >Profile</Link></li>
                                <li><Link className="dropdown-item" >Logout</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
