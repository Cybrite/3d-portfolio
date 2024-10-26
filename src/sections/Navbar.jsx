import {useState} from "react";
import {navLinks} from "../content/index.js";

const NavItems = () => {
    return (
        <ul className='nav-ul'>
            {navLinks.map(({id , href , name}) => (
                <li key={id} className='nav-li'>
                  <a href={href} className='nav-li_a' onClick={() => {}}>
                     {name}
                  </a>
                </li>
            ))}
        </ul>
    )
};

const Navbar = () => {
    const[open, setOpen] = useState(false)

    function handleClick() {
        setOpen(!open)
    }

    return (
        <header className='fixed top-0 left-0 right-0 z-100 bg-black/90'>
            <div className='mx-auto max-w-7xl '>
                <div className='flex items-center justify-between py-5 mx-auto c-space'>
                    <a href='/' className='text-xl font-bold transition-colors text-neutral-400 hover:text-white'>
                        Harsh
                    </a>

                    <button onClick={() => handleClick()} className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex aria-label="toggle menu" '>
                        <img src={open ? 'assets/close.svg' : 'assets/menu.svg'} alt='toggle' className='w-6 h-6' />
                    </button>

                    <nav className='hidden sm:flex'>
                        <NavItems/>
                    </nav>
                </div>
            </div>

            <div className={`nav-sidebar ${open ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className='p-5'>
                    <NavItems/>
                </nav>
            </div>
        </header>

    )
}
export default Navbar
