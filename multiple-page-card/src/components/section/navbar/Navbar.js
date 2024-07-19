import Favicon from '../../../utils/suitcase.png'
import { ViewContainer } from '../../layout/view_container/ViewContainer'
import "./Navbar.css"

function Navbar(){
    return(
        <nav className='navbar'>
            <img src={Favicon} alt='Logo img' width={35}/> VisionTrust
        </nav>
    )
}

export {Navbar}