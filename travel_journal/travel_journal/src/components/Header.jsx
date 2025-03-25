import globe from '../assets/globe.png'

function Header() {
    return (
        <header>
            <img src={globe} alt="logo" />
            <h1>my travel journal</h1>
        </header>
    )
}

export default Header;