import fetch from "node-fetch";

async function getWithFetch() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const finalResponse = await response.json();
    console.log(finalResponse);
};
getWithFetch();

async function postWithFetch(){
    const data = {
        name: "lisa",
        avatar: "http://google.com",
        description: "Cat",
    }
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-type":"application/json",
    },
});
    const finalResponse = await response.json();
    console.log(finalResponse);
};
postWithFetch();

async function putWithFetch(){
    const data = {
        name: "lol",
        avatar: "http://google.com",
        description: "Cat",
    }
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
        "Content-type":"application/json",
    },
});
    const finalResponse = await response.json();
    console.log(finalResponse);
};
async function deleteWithFetch() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1",{
    method: "DELETE",
});
    const finalResponse = await response.json();
    console.log(finalResponse);
};