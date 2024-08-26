const users = [
    { username: "Florence", password: "123456" },
    { username: "Ebuka", password: "123456" },
    { username: "Divine", password: "654321" },
    { username: "Blessing", password: "Pa$$w0rd!" },
]


const peepingIcon = document.getElementById("peeping-icon");
const eyesIcon = document.getElementById("eyes-icon");
const usernameField = document.getElementById("username");
const passwordField = document.getElementById("password");


function togglePasswordMode() {
    const isPasswordHidden = passwordField.type === "password"
    if (isPasswordHidden) {
        // show the peeping icon icon
        peepingIcon.classList.remove("hidden")
        peepingIcon.classList.add("block")

        // hide the eyes icon
        eyesIcon.classList.remove("block")
        eyesIcon.classList.add("hidden")

        // make the field of type text
        passwordField.type = "text";
    } else {
        // make the field of type password
        passwordField.type = "password";

        // hide the peeping icon
        peepingIcon.classList.add("hidden")
        peepingIcon.classList.remove("block")

        // show the eyes icon
        eyesIcon.classList.add("block")
        eyesIcon.classList.remove("hidden")

    }
}

function findUser(username, password) {
    return users.find(function (user) {
        return user.username.toLowerCase() === username.toLowerCase() && user.password === password;
    });
}

function wait(milliseconds) {
    return new Promise((resolve) => {
        setTimeout(resolve, milliseconds * 1000);
    });
}

const login = () => {
    event.preventDefault();

    const user = findUser(usernameField.value, passwordField.value);

    if (user) {
        toastr.success("Login successful")

        wait(3).then(() => {
            window.location.href = "/index.html";
        })
        // similar behavior as clicking on a link
    } else {
        toastr.error("Invalid username or password");
    }

}

