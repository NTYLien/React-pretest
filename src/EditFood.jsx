import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EditFoodForm from './EditFoodForm';

function EditFood(props) {

    const { id } = useParams();
    const [food, setFood] = useState(null);
    useEffect(() => {
        fetch(`https://65d55b7e3f1ab8c63436c5ea.mockapi.io/menu/${id}`, {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
        }).then(fooditem => {
            setFood(fooditem);

        }).catch(error => {
            console.log("Error" + error)
        });


    }, [id]);

    return food ? <EditFoodForm food={food} /> : <p>"Loading"</p>;
}

export default EditFood;