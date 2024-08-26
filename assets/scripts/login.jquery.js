$(document).ready(function () {
    const users = [
        { username: "Florence", password: "123456" },
        { username: "Ebuka", password: "123456" },
        { username: "Divine", password: "654321" },
        { username: "Blessing", password: "Pa$$w0rd!" },
    ];

    const peepingIcon = $("#peeping-icon");
    const eyesIcon = $("#eyes-icon");
    const usernameField = $("#username");
    const passwordField = $("#password");

    function togglePasswordMode() {
        const isPasswordHidden = passwordField.attr("type") === "password";
        if (isPasswordHidden) {
            // Show the peeping icon
            peepingIcon.show();
            eyesIcon.hide();
            passwordField.attr("type", "text");
        } else {
            // Hide the peeping icon
            peepingIcon.hide();
            eyesIcon.show();
            passwordField.attr("type", "password");
        }
    }

    function findUser(username, password) {
        return users.find(function (user) {
            return user.username.toLowerCase() === username.toLowerCase() && user.password === password;
        });
    }

    $("#form").submit(function (event) {
        event.preventDefault();

        const user = findUser(usernameField.val(), passwordField.val());

        if (user) {
            toastr.success("Login successful");
        } else {
            toastr.error("Invalid username or password");
        }
    });

    // Attach click event listener to the toggle button
    $("#toggle-password-button").click(togglePasswordMode);
});