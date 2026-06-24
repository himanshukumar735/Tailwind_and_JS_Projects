const userInput = document.getElementById("username");
const button = document.getElementById("search-btn");
const displayArea = document.getElementById("profile-card");
const paraChild = document.getElementById("para");
const gitURL = "https://api.github.com/users"

const handleSearch = () => {
    const storeUserName = userInput.value.trim();
    fetchUser(storeUserName);
    userInput.value = "";
}

const attachEnterListener = () => {
    document.addEventListener('keydown', function (e) {
        if (e.key === "Enter") {
            handleSearch();
        }
    })
}

const attachButtonListener = () => {
    button.addEventListener("click", function () {
        handleSearch();
    })
}

async function fetchUser(storeUserName) {

    if (storeUserName === "") {
        paraChild.textContent = " Plesase enter any user to search!";
    }
    else {
        const fullURL = `${gitURL}/${storeUserName}`;

        paraChild.innerText = "Searching";

        const response = await fetch(fullURL);

        const JSONresponse = await response.json();

        console.log(JSONresponse);

        if (response.ok) {

            const userBio = JSONresponse.bio;
            const userName = JSONresponse.name;
            const userImg = JSONresponse.avatar_url;
            const userFollowers = JSONresponse.followers;

            updateUi(userBio, userName, userImg, userFollowers);
        }
        else {
            paraChild.textContent = " User not found !";
        }
    }

}

const updateUi = (userBio, userName, userImg, userFollowers) => {

    displayArea.innerHTML = "";

    const avatarImg = document.createElement("img")
    avatarImg.src = userImg;
    displayArea.appendChild(avatarImg)

    const heading1 = document.createElement("h2")
    heading1.textContent = userName;
    displayArea.appendChild(heading1);

    const heading2 = document.createElement("h3")
    heading2.textContent = userBio;
    displayArea.appendChild(heading2);

    const followersPara = document.createElement("p")
    followersPara.textContent = `followers: ${userFollowers}`;
    displayArea.appendChild(followersPara);

}


attachButtonListener();
attachEnterListener();
