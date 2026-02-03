function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <h2>Anne's Bungalow</h2>
            </div>
            <ul className="nav-links">
                <li>Home</li>
                <li>About Us</li>
                <li>Our Rooms</li>
                <li>Facilities</li>
                <li>Contact</li>
                <li className="book-btn">Booking</li>
            </ul>
        </nav>
    );
}

export default Navbar;