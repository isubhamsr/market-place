import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import CustomForm from '../../auth/Containers/CustomForm'

export default function CreatePost(props) {

    const [description, setDescription] = useState(null)
    const [image, setImage] = useState(null)
    const [imageURL, setImageURL] = useState("")
    const [error, setError] = useState(null)
    const [message, setMessage] = useState(null)
    const [redirect, setRedirect] = useState(false)
    const [isPost, setIsPost] = useState(false)
    // let imageURL = ""
    // const [token, setToken] = useState(null)

    // useEffect(() => {
    //     const token = localStorage.getItem('token')
    //     console.log(token);
    //     if (token !== null) {
    //         setToken(token)
    //     }

    // }, [])

    const token = localStorage.getItem('token')

    useEffect(() => {
        if (description !== null) {

            axios.post("http://localhost:3001/api/v1/createpost", {
                post_description: description,
                post_image: imageURL
            }, {
                headers: {
                    'token': token
                }
            }, { validateStatus: false })
                .then((response) => {
                    // console.log(response);
                    if (response.data.error === false) {
                        setMessage(response.data.message)
                        setRedirect(true)
                    } else {
                        setMessage(response.data.message)
                    }
                })
                .catch(function (error) {
                    setMessage("Internal Server Error. Please Try Again")
                });
        }
    }, [imageURL])

    if(redirect){
        return (<Redirect to="/"/>)
    }

    const post = () => {
        console.log(description);

        if (image !== null) {
            console.log(image);
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
        }else{
            axios.post("http://localhost:3001/api/v1/createpost", {
                post_description: description,
                post_image: imageURL
            }, {
                headers: {
                    'token': token
                }
            }, { validateStatus: false })
                .then((response) => {
                    // console.log(response);
                    if (response.data.error === false) {
                        setMessage(response.data.message)
                        setRedirect(true)
                    } else {
                        setMessage(response.data.message)
                    }
                })
                .catch(function (error) {
                    setMessage("Internal Server Error. Please Try Again")
                });
        }
        
    }

    if (token !== null) {
        return (
            <section className="auth-card">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">
                            Create Post
                    </h5>
                        <hr />
                        {
                            error !== null ?
                                <p>{error}</p>
                                : null
                        }
                        {
                            message !== null ?
                                <p>{message}</p>
                                : null
                        }
                        <React.Fragment>
                            <div class="form-file mb-3">
                                <input type="file" class="form-file-input" id="customFile" onChange={(e) => setImage(e.target.files[0])} />
                                <label class="form-file-label" for="customFile">
                                    <span class="form-file-text">Upload Photo</span>
                                    <span class="form-file-button">Browse</span>
                                </label>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                            </div>
                        </React.Fragment>
                        <button class="btn btn-primary" onClick={post}>
                            Post
                            </button>
                    </div>
                </div>
            </section>
        )
    } else {
        return (<Redirect to="/signin" />)
    }
}
