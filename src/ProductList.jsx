import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';                 // useSelector -- es code sin usar. (dead-code)
import { addItem } from './CartSlice';
import './ProductList.css'
import CartItem from './CartItem';

function ProductList({ onHomeClick }) {
    const [showCart, setShowCart] = useState(false);
    const [showPlants, setShowPlants] = useState(false); // State to control the visibility of the About Us page

    const pickedPlants = useSelector(state => state.cart.items);
    const NumberOfPickedPlants = pickedPlants.reduce((acc, planta) => (acc + planta.quantity), 0)   /* " .reduce() "  --  ES PARECIDO AL BUCLE "FOR"   .reduce((acc,num) => (acc + num), initialValue) */
    const isItemPicked = (itemName) => (pickedPlants.some((planta) => (planta.name === itemName)));

    const dispatch = useDispatch();

    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                {
                    name: "Snake Plant",
                    image: "/RTK-plantsStore/assets/snake-plant-5939187_1280.webp",
                    description: "Produces oxygen at night, improving air quality.",
                    cost: "$15"
                },
                {
                    name: "Spider Plant",
                    image: "/RTK-plantsStore/assets/chlorophytum-3530413_1280.webp",
                    description: "Filters formaldehyde and xylene from the air.",
                    cost: "$12"
                },
                {
                    name: "Peace Lily",
                    image: "/RTK-plantsStore/assets/peace-lilies-4269365_1280.webp",
                    description: "Removes mold spores and purifies the air.",
                    cost: "$18"
                },
                {
                    name: "Boston Fern",
                    image: "/RTK-plantsStore/assets/boston-fern-5114414_1280.webp",
                    description: "Adds humidity to the air and removes toxins.",
                    cost: "$20"
                },
                {
                    name: "Rubber Plant",
                    image: "/RTK-plantsStore/assets/flower-4850729_1280.webp",
                    description: "Easy to care for and effective at removing toxins.",
                    cost: "$17"
                },
                {
                    name: "Aloe Vera",
                    image: "/RTK-plantsStore/assets/leaf-3283175_1280.webp",
                    description: "Purifies the air and has healing properties for skin.",
                    cost: "$14"
                }
            ]
        },
        {
            category: "Aromatic Fragrant Plants",
            plants: [
                {
                    name: "Lavender",
                    image: "/RTK-plantsStore/assets/photo-1611909023032-2d6b3134ecba.webp",
                    description: "Calming scent, used in aromatherapy.",
                    cost: "$20"
                },
                {
                    name: "Jasmine",
                    image: "/RTK-plantsStore/assets/photo-1592729645009-b96d1e63d14b.webp",
                    description: "Sweet fragrance, promotes relaxation.",
                    cost: "$18"
                },
                {
                    name: "Rosemary",
                    image: "/RTK-plantsStore/assets/rosemary-4541241_1280.webp",
                    description: "Invigorating scent, often used in cooking.",
                    cost: "$15"
                },
                {
                    name: "Mint",
                    image: "/RTK-plantsStore/assets/mint-1126282_1280.webp",
                    description: "Refreshing aroma, used in teas and cooking.",
                    cost: "$12"
                },
                {
                    name: "Lemon Balm",
                    image: "/RTK-plantsStore/assets/balm-4480134_1280.webp",
                    description: "Citrusy scent, relieves stress and promotes sleep.",
                    cost: "$14"
                },
                {
                    name: "Hyacinth",
                    image: "/RTK-plantsStore/assets/hyacinth-4110726_1280.webp",
                    description: "Hyacinth is a beautiful flowering plant known for its fragrant.",
                    cost: "$22"
                }
            ]
        },
        {
            category: "Insect Repellent Plants",
            plants: [
                {
                    name: "oregano",
                    image: "/RTK-plantsStore/assets/oregano-790702_1280.webp",
                    description: "The oregano plants contains compounds that can deter certain insects.",
                    cost: "$10"
                },
                {
                    name: "Marigold",
                    image: "/RTK-plantsStore/assets/marigold-7028063_1280.webp",
                    description: "Natural insect repellent, also adds color to the garden.",
                    cost: "$8"
                },
                {
                    name: "Geraniums",
                    image: "/RTK-plantsStore/assets/flowerpot-43270_1280.webp",
                    description: "Known for their insect-repelling properties while adding a pleasant scent.",
                    cost: "$20"
                },
                {
                    name: "Basil",
                    image: "/RTK-plantsStore/assets/tulsi-1539181_1280.webp",
                    description: "Repels flies and mosquitoes, also used in cooking.",
                    cost: "$9"
                },
                {
                    name: "Lavender",
                    image: "/RTK-plantsStore/assets/photo-1611909023032-2d6b3134ecba.webp",
                    description: "Calming scent, used in aromatherapy.",
                    cost: "$20"
                },
                {
                    name: "Catnip",
                    image: "/RTK-plantsStore/assets/cat-829681_1280.webp",
                    description: "Repels mosquitoes and attracts cats.",
                    cost: "$13"
                }
            ]
        },
        {
            category: "Medicinal Plants",
            plants: [
                {
                    name: "Aloe Vera",
                    image: "/RTK-plantsStore/assets/leaf-3283175_1280.webp",
                    description: "Soothing gel used for skin ailments.",
                    cost: "$14"
                },
                {
                    name: "Echinacea",
                    image: "/RTK-plantsStore/assets/echinacea-557477_1280.webp",
                    description: "Boosts immune system, helps fight colds.",
                    cost: "$16"
                },
                {
                    name: "Peppermint",
                    image: "/RTK-plantsStore/assets/peppermint-2496773_1280.webp",
                    description: "Relieves digestive issues and headaches.",
                    cost: "$13"
                },
                {
                    name: "Lemon Balm",
                    image: "/RTK-plantsStore/assets/balm-4480134_1280.webp",
                    description: "Calms nerves and promotes relaxation.",
                    cost: "$14"
                },
                {
                    name: "Chamomile",
                    image: "/RTK-plantsStore/assets/flowers-1606041_1280.webp",
                    description: "Soothes anxiety and promotes sleep.",
                    cost: "$15"
                },
                {
                    name: "Calendula",
                    image: "/RTK-plantsStore/assets/flowers-4340127_1280.webp",
                    description: "Heals wounds and soothes skin irritations.",
                    cost: "$12"
                }
            ]
        },
        {
            category: "Low Maintenance Plants",
            plants: [
                {
                    name: "ZZ Plant",
                    image: "/RTK-plantsStore/assets/photo-1632207691143-643e2a9a9361.webp",
                    description: "Thrives in low light and requires minimal watering.",
                    cost: "$25"
                },
                {
                    name: "Pothos",
                    image: "/RTK-plantsStore/assets/plants-3816945_1280.webp",
                    description: "Tolerates neglect and can grow in various conditions.",
                    cost: "$10"
                },
                {
                    name: "Snake Plant",
                    image: "/RTK-plantsStore/assets/snake-plant-5939187_1280.webp",
                    description: "Needs infrequent watering and is resilient to most pests.",
                    cost: "$15"
                },
                {
                    name: "Cast Iron Plant",
                    image: "/RTK-plantsStore/assets/cast-iron-plant-2072008_1280.webp",
                    description: "Hardy plant that tolerates low light and neglect.",
                    cost: "$20"
                },
                {
                    name: "Succulents",
                    image: "/RTK-plantsStore/assets/cacti-1846147_1280.webp",
                    description: "Drought-tolerant plants with unique shapes and colors.",
                    cost: "$18"
                },
                {
                    name: "Aglaonema",
                    image: "/RTK-plantsStore/assets/aglaonema-482915_1280.webp",
                    description: "Requires minimal care and adds color to indoor spaces.",
                    cost: "$22"
                }
            ]
        }
    ];
    const styleObj = {
        backgroundColor: '#4CAF50',
        color: '#fff!important',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignIems: 'center',
        fontSize: '20px',
    }
    const styleObjUl = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '1100px',
    }
    const styleA = {
        color: 'white',
        fontSize: '30px',
        textDecoration: 'none',
    }

    const handleHomeClick = (e) => {
        e.preventDefault();
        onHomeClick();
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true); // Set showCart to true when cart icon is clicked
    };
    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowPlants(true); // Set showAboutUs to true when "About Us" link is clicked
        setShowCart(false); // Hide the cart when navigating to About Us
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
    };

    const handleAddToCart = (product) => {
        dispatch(addItem(product));
    };

    return (
        <div>
            <div className="navbar" style={styleObj}>
                <div className="tag">
                    <div className="luxury">
                        <img src="/RTK-plantsStore/assets/logo-icon---eco-5465432_1280.webp" alt="" />
                        <a href="/" onClick={(e) => handleHomeClick(e)}>
                            <div>
                                <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                                <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
                            </div>
                        </a>
                    </div>

                </div>
                <div style={styleObjUl}>
                    <div> <a href="#" onClick={(e) => handlePlantsClick(e)} style={styleA}>Plants</a></div>
                    <div> <a href="#" onClick={(e) => handleCartClick(e)} style={styleA}><h1 className='cart'><span className='number-of-items translate flex-vertical flex-horizontal'>{NumberOfPickedPlants}</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68"><rect width="156" height="156" fill="none"></rect><circle cx="80" cy="216" r="12"></circle><circle cx="184" cy="216" r="12"></circle><path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" id="mainIconPathAttribute"></path></svg></h1></a></div>
                </div>
            </div>
            {!showCart ? (
                <div className="product-grid">
                    {plantsArray.map((objSeccion, index) => (
                        <div key={index} className="bg-red">
                            <div className="flex-vertical">
                                <h1 className="section-title">{objSeccion.category}</h1>
                            </div>
                            <div className="product-list">
                                {objSeccion.plants.map((planta, plantaIndex) => (
                                    <div key={plantaIndex} className='product-card'>                    {/* OJO -- 'red-badge'----------- */}
                                        <div className='product-title'>{planta.name}</div>
                                        <img src={planta.image} className="product-image" />
                                        <div>{planta.description}</div>
                                        <div className="product-price">{planta.cost}</div>
                                        <button className={isItemPicked(planta.name)? "product-button disabled-btn": "product-button"} onClick={() => handleAddToCart(planta)}>{isItemPicked(planta.name) ? "Añadido" : "Añadir al Carrito"}</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                </div>
            ) : (
                <CartItem onContinueShopping={handleContinueShopping} />
            )}
        </div>
    );
}

export default ProductList;
