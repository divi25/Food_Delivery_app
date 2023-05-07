import React, { useEffect, useState } from 'react'
import Navbar from '../compo/Navbar'
import Footer from './Footer'
import Card from '../compo/Card'




export default function Home() {

    const [foodCat, setFoodCat] = useState([]);

    const [foodItem, setFoodItem] = useState([]);
const [search, setSearch] = useState('')

    const loadData = () => {
        //food category and  food items objects to be passed

        const food1 = [
            {
                "id":1,
                "CategoryName": "Biryani/Rice"
            },
            {
                "id":2,
                "CategoryName": "Starter"
            },
            {
                "id":3,
                "CategoryName": "Pizza"
            }
        ];

        const food2 = [
            {
                "id":15,
                "CategoryName": "Biryani/Rice",
                "name": "Chicken Fried Rice",
                "img": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGZyaWVkJTIwcmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                "options": [
                    {
                        "Half": "130",
                        "Full": "220"
                    }
                ],
                "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
            },
            {
                "id":16,
                "CategoryName": "Biryani/Rice",
                "name": "Veg Fried Rice",
                "img": "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmVnJTIwZnJpZWQlMjByaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "options": [
                    {
                        "Half": "110",
                        "Full": "200"
                    }
                ],
                "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
            },
            {
                "id":17,
                "CategoryName": "Biryani/Rice",
                "name": "Fish Biryani",
                "img": "https://media.istockphoto.com/photos/king-fish-biryani-with-raita-served-in-a-golden-dish-isolated-on-dark-picture-id1409942571?b=1&k=20&m=1409942571&s=170667a&w=0&h=ozlMJf5hsDmS2sSdEdBWnoSZOEITef4qGMeWeq2lyTc=",
                "options": [
                    {
                        "Half": "200",
                        "Full": "320"
                    }
                ],
                "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
            },
            {
                "id":18,
                "CategoryName": "Biryani/Rice",
                "name": "Chicken Biryani",
                "img": "https://cdn.pixabay.com/photo/2019/11/04/12/16/rice-4601049__340.jpg",
                "options": [
                    {
                        "Half": "170",
                        "Full": "300"
                    }
                ],
                "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
            },
            {
                "id":19,
                "CategoryName": "Biryani/Rice",
                "name": "Veg Biryani",
                "img": "https://media.istockphoto.com/photos/veg-biryani-picture-id1363306527?b=1&k=20&m=1363306527&s=170667a&w=0&h=VCbro7CX8nq2kruynWOCO2GbMGCea2dDJy6O6ebCKD0=",
                "options": [
                    {
                        "Half": "150",
                        "Full": "260"
                    }
                ],
                "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
            },
            {
                "id":20,
                "CategoryName": "Biryani/Rice",
                "name": "Prawns Fried Rice",
                "img": "https://cdn.pixabay.com/photo/2018/03/23/08/27/thai-fried-rice-3253027__340.jpg",
                "options": [
                    {
                        "Half": "120",
                        "Full": "220"
                    }
                ],
                "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
            },
            {
                "id":21,
                "CategoryName": "Starter",
                "name": "Chilli Paneer",
                "img": "https://media.istockphoto.com/photos/spicy-paneer-or-chilli-paneer-or-paneer-tikka-or-cottage-cheese-in-picture-id697316634?b=1&k=20&m=697316634&s=170667a&w=0&h=bctfHdYTz9q2dJUnuxGRDUUwC9UBWjL_oQo5ECVVDAs=",
                "options": [
                    {
                        "Half": "120",
                        "Full": "200"
                    }
                ],
                "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
            },
            {
                "id":22,
                "CategoryName": "Starter",
                "name": "Paneer 65",
                "img": "https://media.istockphoto.com/photos/paneer-tikka-kabab-in-red-sauce-is-an-indian-dish-made-from-chunks-of-picture-id1257507446?b=1&k=20&m=1257507446&s=170667a&w=0&h=Nd7QsslbvPqOcvwu1bY0rEPZXJqwoKTYCal3nty4X-Y=",
                "options": [
                    {
                        "Half": "150",
                        "Full": "260"
                    }
                ],
                "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
            },
            {
                "id":23,
                "CategoryName": "Starter",
                "name": "Chicken Tikka",
                "img": "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMHRpa2thfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "options": [
                    {
                        "Half": "170",
                        "Full": "300"
                    }
                ],
                "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
            },
            {
                "id":24,
                "CategoryName": "Starter",
                "name": "Paneer Tikka",
                "img": "https://media.istockphoto.com/photos/paneer-tikka-at-skewers-in-black-bowl-at-dark-slate-background-paneer-picture-id1186759790?k=20&m=1186759790&s=612x612&w=0&h=e9MlX_7cZtq9_-ORGLPNU27VNP6SvDz7s-iwTxrf7wU=",
                "options": [
                    {
                        "Half": "170",
                        "Full": "250"
                    }
                ],
                "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
            },
            {
                "id":25,
                "CategoryName": "Pizza",
                "name": "Chicken Cheese Pizza",
                "img": "https://media.istockphoto.com/photos/double-topping-pizza-on-the-wooden-desk-isolated-picture-id1074109872?k=20&m=1074109872&s=612x612&w=0&h=JoYwwTfU_mMBykXpRB_DmgeecfotutOIO9pV5_JObpk=",
                "options": [
                    {
                        "Regular": "120",
                        "Medium": "230",
                        "Large": "350"
                    }
                ],
                "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
            },
            {
                "id":26,
                "CategoryName": "Pizza",
                "name": "Mix Veg Pizza",
                "img": "https://media.istockphoto.com/photos/chinese-food-veg-pizza-picture-id1341905237?k=20&m=1341905237&s=612x612&w=0&h=Lbuza1Ig5cC1PwQhqTsq-Uac8hg1W-V0Wx4d4lqDeB0=",
                "options": [
                    {
                        "Regular": "100",
                        "Medium": "200",
                        "Large": "300"
                    }
                ],
                "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
            }
        ];

        setFoodItem(food2);
        setFoodCat(food1);

        // console.log(food1, food2);
    }

    useEffect(() => {
        loadData()
    }, [])



    return (
        <div>
            <div><Navbar /></div>
            <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style = {{objectFit:"contain !important"}}>
                <div className="carousel-inner" id ='carousel'>
                    <div className='carousel-caption' style={{zIndex : "10"}}>
                        <div className="d-flex justify-content-center">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value ={search}  onChange={(e)=>{setSearch(e.target.value)}} />
                            {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
                        </div>

                    </div>
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/900x700/?biryani" className="d-block w-100" style = {{filter : "brightness(30%)"}} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900x700/?Fries" className="d-block w-100" style = {{filter : "brightness(30%)"}} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900x700/?pizza" className="d-block w-100" style = {{filter : "brightness(30%)"}} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            </div>
            <div className='container '>{

                foodCat !==[]
                ? foodCat.map((data)=>{
                    return (<div className='row mb-3'>
                        <div key ={data.id} className ="fs-3 m-3">
                            {data.CategoryName}
                            </div>
                            <hr />
                            {foodItem !==[] ? foodItem.filter((item)=> (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase()))).map(filterItem =>{
                                return(
                                    <div key ={filterItem.id} className='col-12 col-md-6 col-lg-3'>
                                            < Card foonam ={filterItem.name}
                                            options ={filterItem.options[0]}
                                            imgsrc = {filterItem.img}
                                            desc ={filterItem.description}
                                            ></Card>
                                        </div>
                                )
                                }) : <div>No such data found</div>}
                            </div> 
                    )
                }):""
                

            }

                


            </div>
            <div>

                <Footer />

            </div>
        </div>

    )
}
