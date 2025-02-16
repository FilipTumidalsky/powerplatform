'use client'

import { useState } from 'react'
import React from "react";
import {Button} from "../../components/ui/button";

export default function Home() {
    const [formData, setFormData] = useState({ name: "", email: "", needs: "" });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted! We will contact you soon.");
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <header className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900">Power Platform Solutions</h1>
                <p className="text-lg text-gray-600 mt-2">Automate, Optimize, and Innovate with Our Expertise</p>
                <Button className="mt-4">Get a Free Consultation</Button>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                    <img src="/images/power-automate.jpg" alt="Power Automate" className="w-full rounded" />
                    <h2 className="text-xl font-semibold mt-4">Power Automate</h2>
                    <p className="text-gray-600">Streamline workflows and automate tasks efficiently.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <img src="/images/power-apps.jpg" alt="Power Apps" className="w-full rounded" />
                    <h2 className="text-xl font-semibold mt-4">Power Apps</h2>
                    <p className="text-gray-600">Custom applications to solve business challenges.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <img src="/images/power-bi.jpg" alt="Power BI" className="w-full rounded" />
                    <h2 className="text-xl font-semibold mt-4">Power BI</h2>
                    <p className="text-gray-600">Data visualization and analytics for better decisions.</p>
                </div>
            </section>

            <section className="text-center mt-12">
                <h2 className="text-2xl font-bold text-gray-900">About Us</h2>
                <p className="text-gray-600 mt-2">We help businesses leverage Microsoft's Power Platform to drive efficiency and growth. Our team of experts specializes in automation, app development, and data insights to transform your workflow.</p>
            </section>

            <section className="text-center mt-12">
                <h2 className="text-2xl font-bold text-gray-900">Client Ratings</h2>
                <p className="text-gray-600 mt-2">See what our clients are saying about us.</p>
                <div className="flex justify-center mt-6 space-x-4">
                    <div className="bg-white p-4 rounded-lg shadow text-center">
                        <p className="text-xl font-bold text-yellow-500">★★★★★</p>
                        <p className="text-gray-600 mt-2">"Outstanding automation services! Highly recommended."</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow text-center">
                        <p className="text-xl font-bold text-yellow-500">★★★★☆</p>
                        <p className="text-gray-600 mt-2">"Great experience working with the team. Would use again!"</p>
                    </div>
                </div>
            </section>

            <section className="text-center mt-12">
                <h2 className="text-2xl font-bold text-gray-900">Tell Us About Your Needs</h2>
                <p className="text-gray-600 mt-2">Fill out the form, and we'll get back to you with a tailored solution.</p>
                <form className="mt-6 max-w-lg mx-auto bg-white p-6 rounded-lg shadow" onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded mb-4" required />
                    <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded mb-4" required />
                    <textarea name="needs" placeholder="Tell us about your needs..." value={formData.needs} onChange={handleChange} className="w-full p-2 border rounded mb-4" required></textarea>
                    <Button type="submit">Submit</Button>
                </form>
            </section>

            <section className="text-center mt-12">
                <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
                <p className="text-gray-600 mt-2">Get in touch to discuss your automation needs.</p>
                <Button className="mt-4">Contact Now</Button>
            </section>
        </div>
    );
}
