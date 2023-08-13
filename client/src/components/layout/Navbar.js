import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container px-4 px-lg-5">
            <Link class="navbar-brand" to="/">AmazonLike</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                    <li class="nav-item"><Link class="nav-link active" aria-current="page" to="/">Home</Link></li>
                    <li class="nav-item"><Link class="nav-link" to="#!">About</Link></li>
                    <li class="nav-item dropdown">
                        <Link class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</Link>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link class="dropdown-item" to="#!">All Products</Link></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><Link class="dropdown-item" to="#!">Popular Items</Link></li>
                            <li><Link class="dropdown-item" to="#!">New Arrivals</Link></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link active" to='/login'>Login</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link active" to='/register'>Sign up</Link>
                    </li>
                </ul>
                <form class="d-flex">
                    <button class="btn btn-outline-dark" type="submit">
                        <i class="bi-cart-fill me-1"></i>
                        Cart
                        <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
                    </button>
                </form>
            </div>
        </div>
    </nav>
    );
}

export default Navbar;
