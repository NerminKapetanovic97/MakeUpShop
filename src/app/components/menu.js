const Menu = () => {
  
    return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="/">Makeup shop</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="/">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="/shop" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/shop/all">All Products</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="/shop/blush">Blushes</a></li>
                                <li><a className="dropdown-item" href="/shop/lip_liner">Lip liners</a></li>
                                <li><a className="dropdown-item" href="/shop/bronzer">Bronzers</a></li>
                                <li><a className="dropdown-item" href="/shop/eyebrow">Eyebrow</a></li>
                                <li><a className="dropdown-item" href="/shop/eyeliner">Eyeliners</a></li>
                                <li><a className="dropdown-item" href="/shop/eyeshadow">Eyeshadows</a></li>
                                <li><a className="dropdown-item" href="/shop/lipstick">Lipstick</a></li>
                                <li><a className="dropdown-item" href="/shop/foundation">Foundation</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-dark" type="submit">
                            <i className="bi-cart-fill me-1"></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
  );
};

export default Menu;