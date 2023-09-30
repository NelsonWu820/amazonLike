import React from 'react';
import Items from '../Items/Items';


const Landing = () => {
    return (
        <div>
            <header className="bg-dark py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder">Shop in style</h1>
                        <p className="lead fw-normal text-white-50 mb-0">With this modernized amazon clone</p>
                    </div>
                </div>
            </header>

            <Items/>

            <div className="py-5 bg-dark footer-container">
                <div ><p className="m-0 text-center text-white">Copyright &copy; AmazonLike 2023 - Published by Nelson Wu</p></div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
            <script src="js/scripts.js"></script>
        </div>
    );
}

export default Landing;
