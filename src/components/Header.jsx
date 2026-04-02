import { Link } from 'react-router-dom'

function Header() {


    return (
        <>
            <header className='header'>
                <Link to='/'>Home</Link>
                <Link to='/movies'>Movies</Link>

            </header>

        </>
    )
}

export default Header
