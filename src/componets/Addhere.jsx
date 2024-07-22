import React, { useState, useEffect } from 'react';

function Addhere() {
    const [ingredients, setIngredients] = useState([]);
    const [selectedIngredient, setSelectedIngredient] = useState(null);
    const [quantity, setQuantity] = useState(); // Initialize quantity with a default value
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
        if (!selectedIngredient) {
            console.error('No ingredient selected');
            return;
        }

        const data = {
            quantity: quantity,
            date: date
        };

        const url = `https://kitchenbackend.onrender.com/api/ingredients/${selectedIngredient.name}`;

        console.log('Sending PATCH request to:', url);
        console.log('Request payload:', data);

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
                return response.json().then(err => { throw new Error(JSON.stringify(err)) });
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Data updated successfully:', responseData);
            // Reset quantity to 0 after successful submission
            setQuantity(0);
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

    const handleQuantityChange = (e) => {
        const inputValue = e.target.value;
        const newQuantity = parseFloat(inputValue);

        if (!isNaN(newQuantity)) {
            // If the parsed value is a valid number, update the quantity state
            setQuantity(newQuantity);
        } else {
            // If the parsed value is NaN, the input value is not a valid number
            // You can choose to handle this case, such as displaying an error message or ignoring the input
            console.error('Invalid input value:', inputValue);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-yellow-200">
            <div className="max-w-lg p-8 bg-white rounded-lg shadow-lg">
                <div className="mb-4">
                    {selectedIngredient && (
                        <img
                            src={selectedIngredient.image} // Using the image URL from the API data
                            alt={selectedIngredient.name}
                            className="w-full h-auto"
                        />
                    )}
                </div>
                <div>
                    <h1 className="text-2xl font-semibold mb-2">Select Ingredient</h1>
                    <select
                        value={selectedIngredient ? selectedIngredient.name : ''}
                        onChange={handleIngredientChange}
                        className="border border-gray-300 rounded-md p-2 w-full mb-2"
                    >
                        {ingredients.map((ingredient) => (
                            <option key={ingredient.name} value={ingredient.name}>
                                {ingredient.name}
                            </option>
                        ))}
                    </select>
                    <input 
                        type="number" // Change input type to number
                        placeholder='Enter the Quantity Want Add' 
                        value={quantity} 
                        onChange={handleQuantityChange} // Use the custom handler for quantity change
                        className="border border-gray-300 rounded-md p-2 w-full mb-2"
                    />
                    <input 
                        type="date" 
                        value={date} 
                        onChange={(e) => setDate(e.target.value)} 
                        className="border border-gray-300 rounded-md p-2 w-full mb-2"
                    />
                    <button 
                        onClick={handleSubmit} 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Addhere;
