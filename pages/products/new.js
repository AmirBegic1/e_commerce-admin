import Layout from "@/components/Layout";
import { useState } from "react";

export default function NewProduct(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    return (
        <Layout>
            <h1>New product</h1>
            <label>Product name</label>
            <input type="text" placeholder="product name"></input>
            <label>Description</label>
            <textarea placeholder="Description"></textarea>
            <label>Price (u KM)</label>
            <input type="number" placeholder="price"></input>
            <button className="btn-primary">Save</button>
        </Layout>
    );
}