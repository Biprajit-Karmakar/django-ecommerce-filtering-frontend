import { useEffect, useState } from "react";
import Aside from "../components/Aside.component";
import FilterList from "../components/FilterLIst.component";
import axios from "axios";


export default function SideBarComponent(props){
    const [getFilterValue, setFilterValue] = useState({brands:[],categories:[],types:[]});
    const [loader, setLoader] = useState(true);

    const baseUrl = 'https://biprajit.pythonanywhere.com/';

    useEffect(()=>{
        axios.get(`${baseUrl}brands/`)
        .then(function (response) {

        setFilterValue((prevState)=>({
                ...prevState,
                brands:response.data
            }
            ));
        })
        .catch((error)=> {
            // handle error
            // console.log(error);
        });

        axios.get(`${baseUrl}categories/`)
        .then(function (response) {

            setFilterValue((prevState)=>({
                ...prevState,
                categories:response.data
                }
            ));
            
        })
        .catch((error)=> {
            // console.log(error);
        });

        axios.get(`${baseUrl}types/`)
        .then(function (response) {

            setFilterValue((prevState)=>({
                ...prevState,
                types:response.data,
            }));
            setLoader(false);
            
        })
        .catch((error)=> {
            
            // console.log(error);
        });

    },[])

    const { selectBrand, selectCategory, selectType, handleBrandCheck, handleCategoryCheck, handleTypeCheck} = props;

    return (
        <>

            {!!loader && (
                <Aside>
                    <div style={{ width:'100%', margin:'20% auto', fontWeight:'600', display:'flex', justifyContent:'center', alignItems:'center',color:'#fff'}}>Loading....</div>
                </Aside>
            )}
            {!loader && (
                <Aside>
                    <FilterList filterItems={getFilterValue.brands} selectItem={selectBrand} title="Brands" handleCheck={handleBrandCheck}/>
                    
                    <FilterList filterItems={getFilterValue.categories} selectItem={selectCategory} title="Categories" handleCheck={handleCategoryCheck}/>

                    <FilterList filterItems={getFilterValue.types} selectItem={selectType} title="Types" handleCheck={handleTypeCheck}/>
            </Aside>
            )}
        </>
    )
}