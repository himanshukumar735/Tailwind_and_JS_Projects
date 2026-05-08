const userInput = document.getElementById("username")
const searchButton = document.getElementById("search-btn")
const cardContainer = document.getElementById("profile-card")

const fetchUserProfile = async () => {
    const userSearch = userInput.value
    console.log(userSearch);
    const gitUrl = `https://api.github.com/users/${userSearch}`
    console.log(gitUrl)
    userInput.value = ""

    try {
        cardContainer.innerHTML = "<p>Searching...</p>"; // User experience ke liye
        const response = await fetch(gitUrl)
        console.log(response)

        if (!response.ok) {
            cardContainer.innerHTML = "<p>User not found!</p>";
            return; // Code yahan ruk jayega, niche nahi jayega
        }
        const jsonData = await response.json()
        console.log(jsonData)

        const { avatar_url, name, followers, bio } = jsonData;
        const cardHTML = `<img src="${avatar_url}" alt="Description of image" >
                        <h2>${name || "No Name"}</h2>
                        <p>${bio || "No Bio"}</p>
                        <p>Followers:${followers}</p>`

        cardContainer.innerHTML = cardHTML;

    }
    catch (error) {
        cardContainer.innerHTML = "<p>User not found or doesnt exits</p>"

    }
}

searchButton.addEventListener("click", fetchUserProfile);
userInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        fetchUserProfile();
    }
})