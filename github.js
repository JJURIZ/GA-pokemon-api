const $container = document.querySelector('.container');

fetch('https://api.github.com/users/jjuriz')
.then(response => {
    //console.log(response);
    return response.json();
})
.then(githubData => {
    const jeremyObj = {
        bio: githubData.bio,
        username: githubData.login,
        name: githubData.name
    }
    console.log(jeremyObj)
    // console.log(githubData)

    const $newElement = document.createElement('p');
    $newElement.textContent = jeremyObj.name;
    // append new element to container
    $container.appendChild($newElement);
    
})
.catch(error => {
    console.log(error)
})




