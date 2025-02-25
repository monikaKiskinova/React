import './Header.css'

export default function Header() {
    return (
        <>
            <header>
                <nav className="nav-bar">
                    <ul className="nav-list">
                        <li><a href="#">Dropdown</a></li>
                        <li><a href="#">Left Sidebar</a></li>
                        <li><a className="active" href="#">CAR GALLERY</a></li>
                        <li><a href="#">Right Sidebar</a></li>
                        <li><a href="#">No Sidebar</a></li>
                    </ul>
                </nav>
                <div className="feature-container">
                    <h1>Car Gallery</h1>
                    <p>Your ultimate destination for exploring stunning cars, from classNameics to the latest models!</p>
                    <a className="btn see-all-cars-btn" href="#">See all cars</a>
                </div>
            </header>
        </>
    )
}