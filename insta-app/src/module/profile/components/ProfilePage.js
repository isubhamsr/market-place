import React, { useState, useEffect } from 'react'
import HttpClient from '../../../utility/HttpClient'
import { AddAPhoto, ControlPoint } from '@material-ui/icons'
import { Redirect, Link, useParams } from 'react-router-dom';
import ShowMoreText from 'react-show-more-text';
import CustomHome from '../../home/Container/CustomHome';
import HomeCard from '../../home/Components/HomeCard';
import PostCard from '../../../Reuseable/PostCard';
import Storage from '../../../utility/Storage'

export default function ProfilePage(props) {

    const params = useParams();
    const [posts, setPosts] = useState([])
    const [isLogin, setIsLogin] = useState(true)
    const [userName, setUserName] = useState(null)
    const [name, setName] = useState(null)
    const [userId, setUserId] = useState(null)
    const [message, setMessage] = useState(null)
    const [error, setError] = useState(false)
    const [user, setUser] = useState(null)
    const [isFollow, setIsFollow] = useState(false)
    const result = Storage.decodeToken('token')

    useEffect(() => {
        if (props.token !== null) {

            getResponse()
        }
    },[result])

    const getResponse = async () => {
        // let response = await HttpClient.get('userpost');
        let response

        // const result = Storage.decodeToken('token')
        if(result.user_username === params.username){
            response = await HttpClient.get('userpost');
        }else{
            setIsFollow(true)
            response = await HttpClient.get(`user/${params.username}`);
        }
        // console.log(decodeToken);
        setUserName(result.user_username)
        setName(result.user_name)
        setUserId(result.user_id)
        if (response.error === true) {
            setError(true)
            setMessage(response.message)
        } else {
            // response.posts.reverse()
            if(response.user !== undefined){
                setUser(response.user)
            }
            setPosts(response.posts)
        }
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

                            <h1 class="profile-user-name">{user !== null ? user.username : userName}</h1>
                            {
                                isFollow !== true ?
                                <>
                            <button class="btn profile-edit-btn">Edit Profile</button>

                            <button class="btn profile-settings-btn" aria-label="profile settings">
                                <Link to='/create'><ControlPoint /></Link>
                            </button>
                            </>
                            :
                            <button class="btn btn-primary profile-edit-btn">Follow</button>
                            }

                        </div>

                        <div class="profile-stats">

                            <ul className="profile-stats-ul">
                                <li><span class="profile-stat-count">{posts.length}</span> posts</li>
                                <li><span class="profile-stat-count">188</span> followers</li>
                                <li><span class="profile-stat-count">206</span> following</li>
                            </ul>

                        </div>

                        <div class="profile-bio">

                            <p><span class="profile-real-name">{user !== null ? user.name : name}</span></p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️
                            </p>

                        </div>

                    </div>

                </div>

            </header>

            <section >

                {/* {
                    posts.map((item) => (
                        item.post_image !== '' && item.post_image !== null?

                            <div class="profile-card">
                                <img src={item.post_image} class="card-img" alt="..." />
                            </div>
                            : null
                    ))
                } */}
                {error === false ?
                    posts.length === 0 ?
                    <div class="loader"></div>
                    :
                    posts.map((item)=>(
                        <PostCard userName={user !== null ? user.username : userName} post_image={item.post_image} post_description={item.post_description} postId={item._id} userId={userId} likes={item.likes} comments={item.comments}/>
                    ))
                    : <p>{message}</p>
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
