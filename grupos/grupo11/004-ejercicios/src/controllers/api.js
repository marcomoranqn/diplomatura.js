import fetch from 'node-fetch';

export const getUserById = async function(idUser){
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        const user =await  users.find( user => user.id === idUser);

        return user;
};

export const getPosts =function(){
//    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//    const posts = await response.json();
    return new Promise( function(resolve, reject) {
        const posts = fetch("https://jsonplaceholder.typicode.com/posts");

        console.log(posts);
        return posts;
    })
};