import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Order.css";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

function Order() {
    const location = useLocation();
    const solarPlantType = location.state?.type || "On-Grid"; // Default to "On-Grid" if not provided
    const [offGridWatt, setOffGridWatt] = useState(0);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
        avgElectricityBill: "",
        load: "", // For on-grid
        battery: "", // For off-grid
    });

    const batteries = [
        { label: "Exide SolaTubular" },
        { label: "Luminous Solar Battery" },
        { label: "Genus Solar Battery" },
        { label: "Okaya Solar Battery" },
        { label: "Microtek Solar Battery" },
        { label: "Genus Solar Battery" }
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <div className="order-container">
            <Link to='/solar' className='go-back'><IoArrowBack /> Go back</Link>
            <div className="order-wrapper">
                <div className="order-form">
                    <h1>Order Form</h1>
                    <form>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                placeholder="Enter your name"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Home Address</label>
                            <textarea
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="Enter your home address"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Average Monthly Electricity Bill (₹)</label>
                            <input
                                type="number"
                                name="avgElectricityBill"
                                value={formData.avgElectricityBill}
                                onChange={handleChange}
                                min='0'
                                placeholder="Enter your electricity bill"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Solar Plant Type</label>
                            <input type="text" value={solarPlantType} readOnly />
                        </div>

                        {solarPlantType === "On-Grid" && (
                            <div className="form-group">
                                <label>Sanctioned Load (KW)</label>
                                <input
                                    type="number"
                                    name="load"
                                    value={formData.load}
                                    onChange={handleChange}
                                    placeholder="Enter your sanctioned load"
                                    max='10'
                                    min='0'
                                    required
                                />
                            </div>
                        )}


                        {formData.load && (
                            <div className="form-group">
                                <label>Watt Solar Plant (KW)</label>
                                <input
                                    type="number"
                                    name="watt"
                                    value={formData.load}
                                    readOnly
                                />
                            </div>
                        )}

                        {solarPlantType === "Off-Grid" && (
                            <div className="form-group">
                                <label>Select Battery</label>
                                <select
                                    name="battery"
                                    value={formData.battery}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select a battery</option>
                                    {batteries.map((battery, index) => (
                                        <option key={index} value={battery.label}>
                                            {battery.label}
                                        </option>
                                    ))}
                                </select>
                                <label>Watt Solar Plant (KW)</label>
                                <input
                                    type="number"
                                    name="watt"
                                    min='0'
                                    value={offGridWatt}
                                    onChange={(e) => setOffGridWatt(e.target.value)}
                                />

                            </div>
                        )}

                        <a
                            type="submit"
                            href={
                                solarPlantType == "On-Grid" ? `mailto:orders.abhaecopower@gmail.com?subject=Order&body=I%20have%20placed%20an%20order.%0DHere%20are%20my%20details:%0D%0DName:%20${formData.name}%0D%0DPhone%20Number:%20${formData.phone}%0D%0DAddress:%20${formData.address}%0D%0DType:%20On-Grid%0D%0DAverage%20Monthly%20Electricity%20Bill:%20${formData.avgElectricityBill}%0D%0DSanctioned%20Load%20(KW):%20${formData.load}%0D%0DSolar%20Plant%20(KW):%20${formData.load}`
                                    : `mailto:orders.abhaecopower@gmail.com?subject=Order&body=I%20have%20placed%20an%20order.%0DHere%20are%20my%20details:%0D%0DName:%20${formData.name}%0D%0DPhone%20Number:%20${formData.phone}%0D%0DAddress:%20${formData.address}%0D%0DType:%20Off-Grid%0D%0DAverage%20Monthly%20Electricity%20Bill:%20${formData.avgElectricityBill}%0D%0DBattery:%20${formData.battery}%0D%0DSolar%20Watt%20(KW):%20${offGridWatt}`
                            }
                            className="submit-btn">
                            Submit Order
                        </a>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default Order;
