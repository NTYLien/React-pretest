import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function FoodDetail(props) {
    const { id } = useParams();
    const [food, setFood] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getFood = () => {
            fetch(`https://65d55b7e3f1ab8c63436c5ea.mockapi.io/menu/${id}`, {
                method: 'GET',
                headers: { 'content-type': 'application/json' },
            }).then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    setError(res.statusText)
                    return null;
                }
                // handle error
            }).then(food => {
                if (food != null) {
                    setFood(food);
                }

            }).catch(error => {
                setError(error)
            })
        };
        getFood();
    }, [id]);

    const nav = useNavigate();

    useEffect(() => {
        if (error) {

            nav(`/not-found-resource?message=Food ID: ${id}`)

        }
    }, [error, nav, id]);


    if (food == null) {
        return <div>Loading</div>
    }
    return (
        <div>
            <h1>Food Detail {food.id}</h1>
            <h1>{food.name}</h1>
            <h2>Price: {food.price}</h2>
        </div>
    );
}

export default FoodDetail;