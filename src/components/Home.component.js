import NavBar from './NavBar.component';


export default function HomeComponent({products, loader}){

    return (
        <div className="container">
            {/* navigation */}
            <NavBar />

            <div className="row">

                <>

                    {!!loader &&(
                        <div style={{width:'100%', minHeight:'100vh', display:'flex', justifyContent:'center', alignItems:'center', fontWeight:'600', fontSize:'20px', margin:'auto auto', color:'#fff'}}>Loading...</div>
                    )}

                    {!loader && !products.length &&(
                        <div style={{width:'100%', minHeight:'100vh', display:'flex', justifyContent:'center', alignItems:'center', fontWeight:'600', fontSize:'20px', margin:'auto auto',color:'#fff'}}>No data found according to filtering...</div>
                    )}

                    {!!products.length && (products.map((product, index)=>{
                        return (
                            <div key={product?.slug + index} className="col-lg-3 offset-lg-1 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                                <div className="product"> 
                                    <img src={product?.image} alt={product?.name} />

                                    <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                                        <li className="icon"><span className="fas fa-expand-arrows-alt"></span></li>
                                        <li className="icon mx-3"><span className="far fa-heart"></span></li>
                                        <li className="icon"><span className="fas fa-shopping-bag"></span></li>
                                    </ul>
                                </div>

                                <div className={product?.type?.slug === "new" ? "tag bg-green" : product?.type?.slug === "tag in-stock" ? "tag bg-black" : "tag bg-red"}>{product?.type?.name}</div>
                                <div className="title pt-4 pb-1">{product?.name}</div>

                                <div className="d-flex align-content-center justify-content-center"> 
                                    <span className="fas fa-star"></span> 
                                    <span className="fas fa-star"></span> 
                                    <span className="fas fa-star"></span> 
                                    <span className="fas fa-star"></span> 
                                    <span className="fas fa-star"></span> 
                                </div>

                                <div className="price">$ {product?.price}</div>

                            </div>);
                        }))
                    }
                </>

                

                {/* <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                    <div className="product"> 
                        <img src={p1} alt="" />

                        <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                            <li className="icon"><span className="fas fa-expand-arrows-alt"></span></li>
                            <li className="icon mx-3"><span className="far fa-heart"></span></li>
                            <li className="icon"><span className="fas fa-shopping-bag"></span></li>
                        </ul>
                    </div>

                    <div className="tag bg-red">sale</div>
                    <div className="title pt-4 pb-1">Winter Sweater</div>

                    <div className="d-flex align-content-center justify-content-center"> 
                        <span className="fas fa-star"></span> 
                        <span className="fas fa-star"></span> 
                        <span className="fas fa-star"></span> 
                        <span className="fas fa-star"></span> 
                        <span className="fas fa-star"></span> 
                    </div>

                    <div className="price">$ 60.0</div>

                </div>

                <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                    <div className="product"> 
                    <img src={p2} alt="" />
                        <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                            <li className="icon"><span className="fas fa-expand-arrows-alt"></span></li>
                            <li className="icon mx-3"><span className="far fa-heart"></span></li>
                            <li className="icon"><span className="fas fa-shopping-bag"></span></li>
                        </ul>
                    </div>
                    <div className="tag bg-black">out of stock</div>
                    <div className="title pt-4 pb-1">Denim Dresses</div>
                    <div className="d-flex align-content-center justify-content-center"> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> </div>
                    <div className="price">$ 55.0</div>
                </div>

                <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                    <div className="product"> 
                    <img src={p3} alt="" />
                        <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                            <li className="icon"><span className="fas fa-expand-arrows-alt"></span></li>
                            <li className="icon mx-3"><span className="far fa-heart"></span></li>
                            <li className="icon"><span className="fas fa-shopping-bag"></span></li>
                        </ul>
                    </div>
                    <div className="tag bg-green">new</div>
                    <div className="title pt-4 pb-1"> Empire Waist Dresses</div>
                    <div className="d-flex align-content-center justify-content-center"> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> </div>
                    <div className="price">$ 70.0</div>
                </div>

                <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                    <div className="product"> 
                    <img src={p1} alt="" />
                        <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                            <li className="icon"><span className="fas fa-expand-arrows-alt"></span></li>
                            <li className="icon mx-3"><span className="far fa-heart"></span></li>
                            <li className="icon"><span className="fas fa-shopping-bag"></span></li>
                        </ul>
                    </div>
                    <div className="title pt-4 pb-1">Pinafore Dresses</div>
                    <div className="d-flex align-content-center justify-content-center"> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> </div>
                    <div className="price">$ 60.0</div>
                </div> */}

            </div>
            
        </div>
    )
}