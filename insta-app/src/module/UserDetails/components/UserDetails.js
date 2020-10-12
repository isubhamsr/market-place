import React, { useState, useEffect } from 'react'
import HttpClient from '../../../utility/HttpClient'

export default function UserDetails() {

    const [description, setDescription] = useState(null)
    const [image, setImage] = useState(null)
    const [imageURL, setImageURL] = useState("")
    const [error, setError] = useState(null)
    const [message, setMessage] = useState(null)
    const [redirect, setRedirect] = useState(false)
    const [isPost, setIsPost] = useState(false)

    useEffect(() => {
        if (imageURL !== "") {
            console.log("upload");
            upload()
        }
    }, [imageURL])

    const upload = async () =>{
        const data = {
            profile_photo : imageURL
        }
        const response = await HttpClient.put('updateprofilephoto', data);
        console.log(response);
    }

    const uploadImg = () =>{
        const data = new FormData()
            data.append("file", image)
            data.append("upload_preset", "dukandari")
            data.append("cloud_name", "dkcwzsz7t")
            fetch("	https://api.cloudinary.com/v1_1/dkcwzsz7t/image/upload", {
                method: "post",
                body: data
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data.url);
                    if(description === null){
                        setDescription("none")
                        setImageURL(data.url)
                    }
                    setImageURL(data.url)
                    // imageURL = data.url
                })
                .catch(error => {
                    console.log(error.message);
                    setError("Something West Wornd, Please Try Again")
                })
    }

    return (
        <div class="row g-3" style={{ marginTop: '24px' }}>
            <div class="col-12">
                <input type="file" class="form-file-input" id="customFile" onChange={(e) => setImage(e.target.files[0])}/>
                <label class="form-file-label" for="customFile">
                    <span class="form-file-text">Upload Profile Picture</span>
                    <span class="form-file-button">Browse</span>
                </label>
                    <span class=" btn btn-primary" style={{ 'margin-top': '20px' }} onClick={uploadImg}>Upload</span>
            </div>
            <div class="col-12">
                <label for="inputAddress" class="form-label">Add Bio</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div class="col-12">
                <label for="inputAddress2" class="form-label">Address</label>
                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>
            <div class="col-12">
                <label for="inputAddress2" class="form-label">Website</label>
                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>
            <div class="col-12">
                <label for="inputAddress2" class="form-label">Gender</label>
                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>
            <div class="col-md-4">
                <label for="inputState" class="form-label">Phone Number</label>
                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>
            <div class="col-md-4">
                <label for="inputState" class="form-label">Business Type</label>
                <select id="inputState" class="form-select">
                    <option selected>Choose...</option>
                    <option>Small</option>
                    <option>Large</option>
                    <option>Big</option>
                </select>
            </div>
            <div class="col-12">
                <button type="submit" class="btn btn-primary">Add</button>
            </div>
        </div>
    )
}
