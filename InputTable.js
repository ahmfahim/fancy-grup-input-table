import React, { useState } from 'react';
import './InputTable.css'

const InputTable = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [zip, setZip] = useState('');
    const [balance, setBalance] = useState('');
    const [state, setState] = useState('');


    // submit
    const submit = (e) => {
        e.preventDefault();
        console.log(name, address, phone, email, city, state, zip, country, balance);
    }

    return (
        <div className="container">
            <form action="" onSubmit={submit}>
                <div className="row">
                    <div className="col-3 d-flex justify-content-end align-items-center mt-3">
                        <p className="input-title">Customer Name:</p>
                    </div>
                    <div className="col-9 inputTable-input1">
                        <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="col-3 d-flex justify-content-end align-items-center mt-3">
                        <p className="input-title">Address:</p>
                    </div>
                    <div className="col-9 inputTable-input2">
                        <input type="text" name="address" onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div className="col-3 d-flex justify-content-end align-items-center mt-3">
                        <p className="input-title">Phone:</p>
                    </div>
                    <div className="col-9 inputTable-input3">
                        <input type="number" name="phone" onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="col-3 d-flex justify-content-end align-items-center">
                        <p className="input-title">Email:</p>
                    </div>
                    <div className="col-9 inputTable-input4">
                        <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="col-3 d-flex justify-content-end align-items-center mt-3">
                        <p className="input-title">City:</p>
                    </div>
                    <div className="col-9 inputTable-input5">
                        <input type="text" name="city" onChange={(e) => setCity(e.target.value)} />
                    </div>
                    <div className="col-3 d-flex justify-content-end align-items-center mt-3">
                        <p className="input-title">State:</p>
                    </div>
                    <div className="col-9 inputTable-input6">
                        <input type="text" name="state" onChange={(e) => setState(e.target.value)} />
                    </div>
                    <div className="col-3 d-flex justify-content-end align-items-center mt-3">
                        <p className="input-title">Zip:</p>
                    </div>
                    <div className="col-9 inputTable-input7">
                        <input type="number" name="zip" onChange={(e) => setZip(e.target.value)} />
                    </div>
                    <div className="col-3 d-flex justify-content-end align-items-center mt-3">
                        <p className="input-title">Country:</p>
                    </div>
                    <div className="col-9 inputTable-input8">
                        <input type="text" name="country" onChange={(e) => setCountry(e.target.value)} />
                    </div>
                    <div className="col-3 d-flex justify-content-end align-items-center mt-3">
                        <p className="input-title">Balance:</p>
                    </div>
                    <div className="col-9 inputTable-input9">
                        <input type="number" name="balance" onChange={(e) => setBalance(e.target.value)} />
                    </div>
                    <div className="col-3"></div>
                    <div className="col-9 mt-4">
                        <button type="submit" className="inputTable-btn" >Save</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default InputTable;