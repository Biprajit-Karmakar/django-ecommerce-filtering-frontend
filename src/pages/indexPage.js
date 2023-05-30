import SideBarComponent from "../components/Sidebar.component";
import HomeComponent from "../components/Home.component"
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from "react";
import axios from "axios";

export default function IndexPageComponent(){
    const [loader, setLoader] = useState(true);
    
    const [getProduct, setProduct] = useState([]);

    //filtering & watch checkbox
    const [selectBrand, setSelectBrand] = useState([]);
    const [selectCategory, setSelectCategory] = useState([]);
    const [selectType, setSelectType] = useState([]);
    const [productUrl, setProductUrl] = useState('http://biprajit.pythonanywhere.com/products/');
    let brandUrl = '';
    let categoryUrl = '';
    let typeUrl = '';

    useEffect(()=>{
        axios.get(productUrl)
        .then(function (response) {
            setProduct(response.data);
            setLoader(false);
        })
        .catch((error)=> {
            // console.log(error);
        });
    },[productUrl]);

    console.log('productUrl',productUrl);
    useEffect(() => {

        buildRequestUrl();
        // const requestUrl = buildRequestUrl();
        
    }, [selectBrand,selectCategory,selectType]);
    

    const buildRequestUrl = () => {
        
        if (selectBrand.length > 0) {
            brandUrl += `${selectBrand.join(',')}`;
        }

        if (selectCategory.length > 0) {
            categoryUrl += `${selectCategory.join(',')}`;
        }

        if (selectType.length > 0) {
            typeUrl += `${selectType.join(',')}`;
        }

        return setProductUrl(`http://biprajit.pythonanywhere.com/products/?id=&slug=&brand=${brandUrl}&category=${categoryUrl}&type=${typeUrl}&warranty=`);
    };


    const handleBrandCheck = (event) => {
        const {checked, value} = event.target;
        setLoader(true);
        setSelectBrand((prevSelectedBrands) => {
            if (checked) {
                return [...prevSelectedBrands, value];
            } else {
                return prevSelectedBrands.filter((brand) => brand !== value);
            }
        });
        
    };


    const handleCategoryCheck = (event) => {
        const {checked, value} = event.target;
        setLoader(true);
        setSelectCategory((prevSelectedBrands) => {
            if (checked) {
                return [...prevSelectedBrands, value];
            } else {
                return prevSelectedBrands.filter((category) => category !== value);
            }
        });
    }

    const handleTypeCheck = (event) => {
        const {checked, value} = event.target;
        setLoader(true);
        setSelectType((prevSelectedBrands) => {
            if (checked) {
                return [...prevSelectedBrands, value];
            } else {
                return prevSelectedBrands.filter((type) => type !== value);
            }
        });
    }
    // console.log('getCheckValue', getCheckValue);

    return (
        <>
            <div style={{ display: 'flex'}}>
                
                <div style={{ width:'15%', margin:'30px auto',  padding: '15px 5px'}}>
                    <SideBarComponent selectBrand={selectBrand} selectCategory={selectCategory} selectType={selectType} handleBrandCheck={handleBrandCheck} handleCategoryCheck={handleCategoryCheck} handleTypeCheck={handleTypeCheck}/>
                </div>

                        

                <div style={{ width:'85%'}}>
                    <HomeComponent products={getProduct} loader={loader}/>
                </div>

            </div>
            
        </>
    )
}