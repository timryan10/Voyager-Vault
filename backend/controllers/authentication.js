async function submitForm(e) {
    e.preventDefault();

    const newUser = {
        email,
        password
    };

    try {
        const response = await fetch(`http://localhost:5050/authentication/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        });

        const data = await response.json();

        if (response.ok) {
            localStorage.setItem('token', data.token); // Save the token to local storage
            const profileResponse = await fetch(`http://localhost:5050/authentication/profile`, {
                headers: {
                    'Authorization': `Bearer ${data.token}`
                }
            });
            const profileData = await profileResponse.json();
            setCurrentUser(profileData);
            navigate('/');
        } else {
            setErrorMessage(data.message);
        }
    } catch (error) {
        console.error("An error occurred:", error);
        setErrorMessage("An error occurred, please try again");
    }
}
