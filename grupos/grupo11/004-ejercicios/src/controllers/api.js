import fetch from 'node-fetch';

// getters Basicos de jsonplaceholder
export const getAlbums = async function(){
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    const albums = await response.json();

    return albums;
};

export const getComments = async function(){
    const response = await fetch("https://jsonplaceholder.typicode.com/comments");
    const comments = await response.json();

    return comments;
};

export const getPhotos = async function(){
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const photos = await response.json();

    return photos;
};

export const getPosts = async function(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    return posts;
};

export const getUserById = async function( userId ){
    const users = await getUsers();
    const user = users.find( (u) => u.id === userId);

    return user;
};

export const getUsers = async function(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    return users;
};


// getters para ejercicios (transforman los registros originales)
export const getAlbumById = async function( albumId ){
    const photos = await getPhotos();
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`);
    let album = await response.json();
    
    album.photos= photos.filter( (p) => p.albumId === album.id )
                        .map( (p) =>{
                            return {
                                id: p.id,
                                title: p.title,
                                url: p.url,
                                thumbnailUrl: p.thumbnailUrl,
                            }}
                        );

    return album;
};

export const getAlbumsFull = async function(){
    const users = await getUsers();
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    const albums = await response.json();

    return albums.map( (a) =>{
                return {
                  id: a.id,
                  title: a.title,
                  user: users.find( (u) => u.id=== a.userId ),
                }
              });
};

export const getPostById = async function( postId ){
    const comments = await getComments();
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    let post = await response.json();
    
    post.comments = comments.filter( (c) => c.postId === post.id )
                            .map( (c) =>{
                                    return {
                                        id: c.id,
                                        name: c.name,
                                        email: c.email,
                                        body: c.body,
                                        }
                                    });

    return post;
};

export const getPostsFull = async function(){
    const users = await getUsers();
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    return posts.map( (p) =>{
                return {
                  id: p.id,
                  title: p.title,
                  body: p.body,
                  user: users.find( (u) => u.id=== p.userId ),
                }
              });
};

export const getUsersFull = async function(){
    const users = await getUsers().then( result => result );
    const albums = await getAlbums().then( result => result );
    const posts = await getPosts().then( result => result );

    return users.map( (u) => {
            return {
                 id: u.id,
                 name: u.name,
                 username: u.username,
                 email: u.email,
                 address: u.address,
                 phone: u.phone,
                 website: u.website,
                 company: u.company,
                 albums: albums.filter( (a) => a.userId === u.id )
                                .map( (a) => {
                                    return {
                                        id: a.id,
                                        title: a.title,
                                    }
                                }),
                 posts: posts.filter( (p) => p.userId === u.id )
                            .map( (p) => {
                                return {
                                    id: p.id,
                                    title: p.title,
                                    body: p.body,
                                }
                            }),
            }}
    );

};

