document.getElementById('signupButton').addEventListener('click', function() {
    // Get user input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const address = document.getElementById('address').value;
    const mobile = document.getElementById('mobile').value;

    // Validate input (basic example)
    if (!name || !email || !password || !address || !mobile) {
        alert('Please fill out all fields.');
        return;
    }

    // Create a user object
    const user = {
        name,
        email,
        password,
        address,
        mobile,
    };

    // Save the user data in localStorage
    localStorage.setItem('userData', JSON.stringify(user));
    alert('User data saved successfully!');
    // Redirect to Tracking_MedTech.html
    window.location.href = './ocr.html';
});

// Function to retrieve and display user data
function displayUserData() {
    const userData = localStorage.getItem('userData');
    if (userData) {
        const user = JSON.parse(userData);
        alert(`Name: ${user.name}\nEmail: ${user.email}\nAddress: ${user.address}\nMobile: ${user.mobile}`);
    } else {
        alert('No user data found.');
    }
}

// Call this function where you want to retrieve the data
// displayUserData();
