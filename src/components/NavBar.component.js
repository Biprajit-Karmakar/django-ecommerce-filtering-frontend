export default function NavBar(){
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-white">
            <div className="container-fluid p-0">
                <a className="navbar-brand text-uppercase fw-800" href="/">
                    <span className="border-red pe-2">QTEC</span>
                    E-Commerce
                </a> 

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNav" aria-controls="myNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="fas fa-bars"></span> 
                </button>

                <div className="collapse navbar-collapse" id="myNav">
                    <div className="navbar-nav ms-auto"> 
                        <a className="nav-link active" aria-current="page" href="/">All</a> 
                        <a className="nav-link" href="/">Women's</a> 
                        <a className="nav-link" href="/">Men's</a> 
                        <a className="nav-link" href="/">Kid's</a> 
                        <a className="nav-link" href="/">Accessories</a> 
                        <a className="nav-link" href="/">Cosmetics</a> 
                    </div>
                </div>
            </div>
        </nav>
    )
}