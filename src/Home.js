import React, { useState,useEffect } from 'react'
import  {collection, deleteDoc, getDocs, doc} from 'firebase/firestore'
import {auth, db } from './firebase'
export default function Home({isAuth}) {
  const [postList, setPostList] = useState([])
const postsCollectionRef = collection(db,"posts")

  useEffect(() => {
    const getPosts = async () => {
			const data = await getDocs(postsCollectionRef)
			// console.log('yes', data.docs.map((doc)=>({...doc.data(),id:doc.id})))
			 setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
		}
   getPosts()
  })
  
  const deletePost = async (id) => {
		const postDoc = doc(db, 'posts', id)
		await deleteDoc(postDoc)
	}

  return (
    <div className='homePage'>
    {postList.map((post)=>{
      return (
				<>
					<div className="post">
						<div className="postHeader">
							<div className="title">
								<h1>{post.title}</h1>
							</div>
							<div className="deletePost">
								{isAuth && post.author.id === auth.currentUser.uid &&(<button
									onClick={() => {
										deletePost(post.id)
									}}
								>
									{' '}
									&#128465;{' '}
								</button>)}
							</div>
						</div>
						<div className="postTextContainer">{post.postText}</div>
						<h3>@{post.author.name}</h3>
					</div>
				</>
			)
    })}
    </div>
  )
}
