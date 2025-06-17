const dataContainer = document.getElementById('user-data');
function printUserdata(data){
    dataContainer.innerHTML += `
        <tr>
            <td>${data.id}</td>
            <td>${data.name}</td>
            <td>${data.email}</td>
            <td>${data.phone}</td>
        </tr>
    `;
}

//fetch user data
async function getUserFromAPI() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    for (let i = 0; i < data.length; i++) {
        printUserdata(data[i]);
    }
}

getUserFromAPI();


//make post
const post = {
        "userId": 7,
        "id": 15,
        "title": "Javascript is awesome",
        "body": "my first post about javascript and how it is awesome\nI love it so much that I want to learn more about it and become a better developer"
    }


async function fetchPost() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts` , {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    });
    const data = await response.json();
    console.log(data);
}

fetchPost();