import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddNewFood(props) {

    const [ID, setID] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const nav = useNavigate();

    const submitNewFood = (e) => {
        e.preventDefault();

        const newFood = {
            "ID": ID.trim(),
            "name": name.trim(),
            "price": price.trim()
        }
        if (!newFood.ID || !newFood.name || !newFood.price) {
            alert("This field is required!  ");
            return;
        }

        // if (!newFood.ID.startsWith('F')) {
        //     alert("ID requires start with F");
        //     return;
        // }




        fetch('https://65d55b7e3f1ab8c63436c5ea.mockapi.io/menu', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            // Send your data in the request body as JSON
            body: JSON.stringify(newFood)
        }).then(() => {
            alert("Add Succesfully");
            nav("/food");
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
                        placeholder='Add new ID'
                        onChange={(e) => { setID(e.target.value) }}
                    />
                </div>
                <div className='form-group'>
                    Name:
                    <input
                        className='.form-control'
                        type='text'
                        name='name'
                        placeholder='Add new name'
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </div>
                <div className='form-group'>
                    Price:
                    <input
                        className='.form-control'
                        type='text'
                        name='price'
                        placeholder='Add new price'
                        onChange={(e) => { setPrice(e.target.value) }}
                    />
                </div>
                <div>

                    <button className='btn btn-success text-center m-2 '
                        onClick={submitNewFood}
                    >Add</button>

                </div>
            </form>
        </div>
    );
}

export default AddNewFood; 