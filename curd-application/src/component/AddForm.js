import { useState } from "react";

const AddForm = ({gettableData,setTableData}) => {

    const [formData , setFormData] = useState({
        company: '',
        contact: '',
        country: ''
    });

    const handleChanges = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTableData(formData);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="company"
                    value={formData.company}
                    placeholder="Company Name"
                    onChange={handleChanges}
                />
                <input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    placeholder="Contact Name"
                    onChange={handleChanges}
                />
                <input
                    type="text"
                    name="country"
                    value={formData.country}
                    placeholder="Country Name"
                    onChange={handleChanges}
                />
                <button type="submit">ADD DATA</button>
            </form>
        </div>
    );
}; 

export default AddForm;
