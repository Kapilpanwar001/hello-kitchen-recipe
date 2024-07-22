import React, { useState, useEffect } from 'react';

function Removehere() {
    const [ingredients, setIngredients] = useState([]);
    const [selectedIngredient, setSelectedIngredient] = useState(null);
    const [quantity, setQuantity] = useState('');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

    // Fetch ingredients from the API
    useEffect(() => {
        fetch('https://kitchenbackend.onrender.com/api/ingredients')
            .then(response => response.json())
            .then(data => {
                setIngredients(data);
                if (data.length > 0) {
                    setSelectedIngredient(data[0]); // Set default selected ingredient
                }
            })
            .catch(error => console.error('Error fetching ingredients:', error));
    }, []);

    const handleSubmit = () => {
        const data = {
            quantity: quantity,
            date: date
        };

        const url = `https://kitchenbackend.onrender.com/api/ingredients/subtract/${selectedIngredient.name}`;

        fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (!response.ok) {
                console.error('Error status:', response.status);
                console.error('Error status text:', response.statusText);
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Data updated successfully:', responseData);
            setQuantity('');
            setDate(new Date().toISOString().split('T')[0]);
        })
        .catch(error => {
            console.error('Error updating data:', error);
        });
    };

    const handleIngredientChange = (e) => {
        const selectedName = e.target.value;
        const selectedIngredient = ingredients.find(ingredient => ingredient.name === selectedName);
        setSelectedIngredient(selectedIngredient);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-yellow-200">
            <div className="max-w-lg p-8 bg-white rounded-lg shadow-lg">
                {selectedIngredient && (
                    <img
                        src={selectedIngredient.image}
                        alt={selectedIngredient.name}
                        className="w-full h-auto"
                    />
                )}
                <h1 className="text-2xl font-semibold mt-4">Select Ingredient</h1>
                <select
                    value={selectedIngredient ? selectedIngredient.name : ''}
                    onChange={handleIngredientChange}
                    className="mt-2 border border-gray-300 rounded-md p-2 w-full"
                >
                    {ingredients.map((ingredient) => (
                        <option key={ingredient.name} value={ingredient.name}>
                            {ingredient.name}
                        </option>
                    ))}
                </select>
                <input 
                    type="text" 
                    placeholder='Enter the Quantity Want Remove' 
                    value={quantity} 
                    onChange={(e) => setQuantity(e.target.value)} 
                    className="mt-4 border border-gray-300 rounded-md p-2 w-full"
                />
                <input 
                    type="date" 
                    placeholder='Present Date' 
                    value={date} 
                    onChange={(e) => setDate(e.target.value)} 
                    className="mt-4 border border-gray-300 rounded-md p-2 w-full"
                />
                <button 
                    onClick={handleSubmit} 
                    className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full"
                >
                    Submit
                </button>
            </div>
        </div>
    );
}

export default Removehere;
