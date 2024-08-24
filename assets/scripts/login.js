const users = [
    { username: "Florence", password: "123456" },
    { username: "Ebuka", password: "123456" },
    { username: "Divine", password: "654321" },
    { username: "Blessing", password: "Pa$$w0rd!" },
]

// console.table(users);

function login() {
    event.preventDefault()
    const userNameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    const userName = userNameInput.value;
    const password = passwordInput.value;

    console.log({ password })

    const user = users.find(function (u) {
        return u.username.toLowerCase() === userName.toLowerCase() && u.password === password;
    })

    if (user == undefined) {
        return alert("Invalid username or password")
    }

    alert("Login successful")

    // redirect to home page


}