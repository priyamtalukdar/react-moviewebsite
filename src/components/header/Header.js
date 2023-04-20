import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://banner2.cleanpng.com/20190730/shy/kisspng-photographic-film-movie-camera-cinema-website-and-mobile-application-development-service-5d3fc924ce3b33.8538265315644613488447.jpg" /></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Most Viewed Movies</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Highest Rated </span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming Movies</span></Link>
            </div>
        </div>
    )
}

export default Header