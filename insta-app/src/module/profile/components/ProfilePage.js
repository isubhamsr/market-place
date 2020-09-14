import React, { useState, useEffect } from 'react'
import HttpClient from '../../../utility/HttpClient'
import { AddAPhoto, ControlPoint } from '@material-ui/icons'
import { Redirect, Link } from 'react-router-dom';

export default function ProfilePage(props) {

    const [posts, setPosts] = useState([])
    const [isLogin, setIsLogin] = useState(true)
    const [userName, setUserName] = useState(null)
    const [name, setName] = useState(null)

    useEffect(() => {
        if(props.token !== null){

            getResponse()
          }
    })

    const getResponse = async () =>{
        const response = await HttpClient.get('userpost');
        // console.log(response);
        response.posts.reverse()
        const decodeToken = JSON.parse(atob(props.token.split('.')[1]));
        // console.log(decodeToken);
        setUserName(decodeToken.user_username)
        setName(decodeToken.user_name)
        setPosts(response.posts)
    }

    return (
        <React.Fragment>
            <header>

                <div class="profile-header-container">

                    <div class="profile">

                        <div class="profile-image">

                            <img src="http://res.cloudinary.com/dkcwzsz7t/image/upload/v1598457071/kcukgc0e3m06phtg6lji.jpg" alt="" />

                        </div>

                        <div class="profile-user-settings">

                            <h1 class="profile-user-name">{userName}</h1>

                            <button class="btn profile-edit-btn">Edit Profile</button>

                            <button class="btn profile-settings-btn" aria-label="profile settings">
                                {/* <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-sliders" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M14 3.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zM11.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM7 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zM4.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm9.5 3.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zM11.5 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                                    <path fill-rule="evenodd" d="M9.5 4H0V3h9.5v1zM16 4h-2.5V3H16v1zM9.5 14H0v-1h9.5v1zm6.5 0h-2.5v-1H16v1zM6.5 9H16V8H6.5v1zM0 9h2.5V8H0v1z" />
                                </svg> */}
                                <Link to='/create'><ControlPoint /></Link>
                            </button>

                        </div>

                        <div class="profile-stats">

                            <ul className="profile-stats-ul">
                                <li><span class="profile-stat-count">164</span> posts</li>
                                <li><span class="profile-stat-count">188</span> followers</li>
                                <li><span class="profile-stat-count">206</span> following</li>
                            </ul>

                        </div>

                        <div class="profile-bio">

                            <p><span class="profile-real-name">{name}</span></p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️</p>

                        </div>

                    </div>

                </div>

            </header>

            <section style={{ display: "flex", flexWrap: "wrap" }} className="container">

                {
                    posts.map((item) => (
                        item.post_image !== '' && item.post_image !== null?

                            <div class="profile-card">
                                <img src={item.post_image} class="card-img" alt="..." />
                            </div>
                            : null
                    ))
                }
                        

                {/* <div class="card" style={{ width: "17rem", margin:"2px"}}>
                    <img src="https://source.unsplash.com/random/800x600" class="card-img" alt="..." />
                </div>

                <div class="card" style={{ width: "17rem", margin:"2px" }}>
                    <img src="https://source.unsplash.com/random/800x600" class="card-img" alt="..." />
                </div>

                <div class="card" style={{ width: "17rem", margin:"2px" }}>
                    <img src="https://source.unsplash.com/random/800x600" class="card-img" alt="..." />
                </div>

                <div class="card" style={{ width: "17rem", margin:"2px" }}>
                    <img src="https://source.unsplash.com/random/800x600" class="card-img" alt="..." />
                </div>

                <div class="card" style={{ width: "17rem", margin:"2px" }}>
                    <img src="https://source.unsplash.com/random/800x600" class="card-img" alt="..." />
                </div>

                <div class="card" style={{ width: "17rem", margin:"2px" }}>
                    <img src="https://source.unsplash.com/random/800x600" class="card-img" alt="..." />
                </div>

                <div class="card" style={{ width: "17rem", margin:"2px" }}>
                    <img src="https://source.unsplash.com/random/800x600" class="card-img" alt="..." />
                </div> */}


            </section>

            {/* <section>

                <div class="profile-body-container">

                    <div class="gallery">

                        <div class="gallery-item" tabindex="0">

                            <img src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=1500&h=500&fit=crop" class="gallery-image" alt="" />

                            <div class="gallery-item-info">

                                <ul>
                                    <li class="gallery-item-likes">
                                        <span class="visually-hidden">Likes:</span>
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{ paddingRight: 5 }}>
                                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                        </svg>
                            56</li>
                                    <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span>
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chat-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{ paddingRight: 5 }}>
                                            <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
                                        </svg>
                                    2</li>
                                </ul>

                            </div>

                        </div>

                        <div class="gallery-item" tabindex="0">

                            <img src="https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop" class="gallery-image" alt="" />

                            <div class="gallery-item-info">

                                <ul>
                                    <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span>
                                    <FavoriteIcon />
                                     89</li>
                                    <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span>
                                    <ModeCommentRoundedIcon />
                                     5</li>
                                </ul>

                            </div>

                        </div>

                        <div class="gallery-item" tabindex="0">

                            <img src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop" class="gallery-image" alt="" />

                            <div class="gallery-item-type">

                                <span class="visually-hidden">Gallery</span><i class="fas fa-clone" aria-hidden="true"></i>

                            </div>

                            <div class="gallery-item-info">

                                <ul>
                                    <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 42</li>
                                    <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 1</li>
                                </ul>

                            </div>

                        </div>

                        <div class="gallery-item" tabindex="0">

                            <img src="https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop" class="gallery-image" alt="" />

                            <div class="gallery-item-type">

                                <span class="visually-hidden">Video</span><i class="fas fa-video" aria-hidden="true"></i>

                            </div>

                            <div class="gallery-item-info">

                                <ul>
                                    <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 38</li>
                                    <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 0</li>
                                </ul>

                            </div>

                        </div>

                        <div class="gallery-item" tabindex="0">

                            <img src="https://images.unsplash.com/photo-1498471731312-b6d2b8280c61?w=500&h=500&fit=crop" class="gallery-image" alt="" />

                            <div class="gallery-item-type">

                                <span class="visually-hidden">Gallery</span><i class="fas fa-clone" aria-hidden="true"></i>

                            </div>

                            <div class="gallery-item-info">

                                <ul>
                                    <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 47</li>
                                    <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 1</li>
                                </ul>

                            </div>

                        </div>

                        <div class="gallery-item" tabindex="0">

                            <img src="https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=500&h=500&fit=crop" class="gallery-image" alt="" />

                            <div class="gallery-item-info">

                                <ul>
                                    <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 94</li>
                                    <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 3</li>
                                </ul>

                            </div>

                        </div>

                        <div class="gallery-item" tabindex="0">

                            <img src="https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=500&h=500&fit=crop" class="gallery-image" alt="" />

                            <div class="gallery-item-type">

                                <span class="visually-hidden">Gallery</span><i class="fas fa-clone" aria-hidden="true"></i>

                            </div>

                            <div class="gallery-item-info">

                                <ul>
                                    <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 52</li>
                                    <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 4</li>
                                </ul>

                            </div>

                        </div>

                        <div class="gallery-item" tabindex="0">

                            <img src="https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=500&h=500&fit=crop" class="gallery-image" alt="" />

                            <div class="gallery-item-info">

                                <ul>
                                    <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 66</li>
                                    <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 2</li>
                                </ul>

                            </div>

                        </div>

                        <div class="gallery-item" tabindex="0">

                            <img src="https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=500&h=500&fit=crop" class="gallery-image" alt="" />

                            <div class="gallery-item-type">

                                <span class="visually-hidden">Gallery</span><i class="fas fa-clone" aria-hidden="true"></i>

                            </div>

                            <div class="gallery-item-info">

                                <ul>
                                    <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 45</li>
                                    <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 0</li>
                                </ul>

                            </div>

                        </div>

                        <div class="gallery-item" tabindex="0">

                            <img src="https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=500&h=500&fit=crop" class="gallery-image" alt="" />

                            <div class="gallery-item-info">

                                <ul>
                                    <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 34</li>
                                    <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 1</li>
                                </ul>

                            </div>

                        </div>

                        <div class="gallery-item" tabindex="0">

                            <img src="https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=500&h=500&fit=crop" class="gallery-image" alt="" />

                            <div class="gallery-item-info">

                                <ul>
                                    <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 41</li>
                                    <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 0</li>
                                </ul>

                            </div>

                        </div>

                        <div class="gallery-item" tabindex="0">

                            <img src="https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=500&h=500&fit=crop" class="gallery-image" alt="" />

                            <div class="gallery-item-type">

                                <span class="visually-hidden">Video</span><i class="fas fa-video" aria-hidden="true"></i>

                            </div>

                            <div class="gallery-item-info">

                                <ul>
                                    <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 30</li>
                                    <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 2</li>
                                </ul>

                            </div>

                        </div>

                    </div>

                    <div class="loader"></div>

                </div>

            </section> */}
        </React.Fragment>
    )
}
