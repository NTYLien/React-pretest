import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EditFoodForm({ food }) {

    const [id, setId] = useState(food.id);
    const [ID, setID] = useState(food.ID);
    const [name, setName] = useState(food.name);
    const [price, setPrice] = useState(food.price)

    const nav = useNavigate();

    const editNewFood = (e) => {
        const editFood = {
            "id": id,
            "ID": ID,
            "name": name,
            "price": price
        }
        e.preventDefault();



        fetch(`https://65d55b7e3f1ab8c63436c5ea.mockapi.io/menu/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            // Send your data in the request body as JSON
            body: JSON.stringify(editFood)
        }).then(() => {

            alert("Edit Succesfully");
            nav('/food');
        }
        )

    }
    return (
        <div>
            <h1>Add Form</h1>
            <form className='form-row'>
                <div className='form-group '>
                    ID:
                    <input
                        className='.form-control'
                        type='text'
                        name='ID'
                        onChange={(e) => { setID(e.target.value) }}
                        value={ID}
                    />
                </div>
                <div className='form-group'>
                    Name:
                    <input
                        className='.form-control'
                        type='text'
                        name='name'

                        onChange={(e) => { setName(e.target.value) }}

                        value={name}
                    />
                </div>
                <div className='form-group'>
                    Price:
                    <input
                        className='.form-control'
                        type='text'
                        name='price'
                        onChange={(e) => { setPrice(e.target.value) }}
                        value={price}
                    />
                </div>
                <div>

                    <button className='btn btn-success text-center m-2 '
                        onClick={editNewFood}
                    >Edit</button>

                </div>
            </form>
        </div>
    );
}

export default EditFoodForm;