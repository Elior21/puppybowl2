import { useState } from 'react'

const CreateForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        id: '',
        breed: '',
        status: '',
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch (`https://fsa-puppy-bowl.herokuapp.com/api/2306-FSA-ET-WEB-FT/players`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if(!response.ok){
                throw new Error('Error creating the puppy');
            }

        } catch (error) {
            console.log('Error creating the puppy', error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({...prevFormData, [name]: value }));
    }


}


export default CreateForm;