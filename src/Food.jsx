import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



function Food(props) {
    const [foodList, setFoodList] = useState([]);
    const [filteredFoodList, setFilteredFoodList] = useState([]);

    const [search, setSearch] = useState("");

    const nav = useNavigate();

    const getFood = () => {
        fetch('https://65d55b7e3f1ab8c63436c5ea.mockapi.io/menu', {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
        }).then(food => {
            setFoodList(food);
            setFilteredFoodList(food);
            // console.log("Student List" + studentList)
        }).catch(error => {
            console.log("Error" + error)
        })
    };

    useEffect(() => {
        getFood();


    }, []);



    const handleDelete = (id) => {
        if (window.confirm("Delete?")) {
            fetch(`https://65d55b7e3f1ab8c63436c5ea.mockapi.io/menu/${id}`, {
                method: 'DELETE',
            }).then(() => {

                getFood()

            })// goi lai ham de cap nhat danh sach

        }



    }




    return (
        <div>
            <h1>MENU</h1>
            <div>
                <input
                    placeholder='Search...'
                    onChange={(e) => { setSearch(e.target.value) }}
                ></input> <button onClick={
                    () => {
                        setFilteredFoodList(foodList.filter((food) => {
                            return food.name.toLowerCase().includes(search.toLowerCase())
                        }))
                    }
                } >Search</button>
            </div>
            <div >
                <table className='table table-bordered f table-striped table-hover align-middle mt-3' >
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredFoodList.map((food, index) => (
                            <tr key={index}>
                                <th scope='row'>{index + 1}</th>
                                <td>{food.ID}</td>
                                <td>{food.name}</td>
                                <td>{food.price}</td>

                                <td>
                                    <button className='btn btn-danger m-2' onClick={() => {
                                        handleDelete(food.id)
                                    }}>Delete</button>
                                    <button className='btn btn-success'
                                        onClick={() => {
                                            nav(`/edit/${food.id}`)

                                        }}
                                    > Edit </button>
                                    <button className='btn btn-info m-2'
                                        onClick={() => {
                                            nav(`/fooddetail/${food.id}`)
                                        }}

                                    >View</button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div >
    );
}

export default Food;