// Write your code here!
// Write your code here!
function displayUsers(users) {

    const userList = document.querySelector('#post-list');
    
    users.forEach(user => {
    
    const listItem = document.createElement('li');
    const pItem = document.createElement('p')
    const hItem = document.createElement('h1')
    hItem.textContent = user.title;
    pItem.textContent = user.body
    
    listItem.append(hItem,pItem)
    
    userList.appendChild(listItem);
    
    });
    }
    
    async function fetchAndDisplayUsers() {
    
    try {
    
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    const users = await response.json();
    
    displayUsers(users);
    console.log("done")
    
    } catch (error) {
    
    const userList = document.querySelector('#post-list');
    
    const errorMessage = document.createElement('li');
    
    errorMessage.textContent = 'Failed to load user data. Please try again later.';
    
    userList.append(errorMessage);
    
    console.error('Error fetching user data:', error);
    
    }
    
    }
    fetchAndDisplayUsers();