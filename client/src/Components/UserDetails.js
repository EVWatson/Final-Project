const url = `mongodb url here${id}`

fetch(url)
    .then(resp => resp.json())
    .then(json => {

        if(json.currently_enrolled.enrolled = true) {
            const enrolled = `You are currently enrolled and your lessons are on ${json.currently_enrolled.day} at ${json.currently_enrolled.time}`
        } else {
            const enrolled = `You are not currently enrolled.`
        };

        const html = `
        <h1>Welcome ${json.firstname}!</h1>
        <p>Address: ${json.address}</p>
        <p>Phone Number: ${json.number}</p>
        <p>Email: ${json.email}</p>
        <p>Primary Contact: ${json.primary_contact_first_name} ${json.primary_contact_last_name}</p>
        <p>Primary Contact Number: ${json.primary_contact_number}</p>
        <br />
        <p>Your primary instrument is the ${json.primary_instrument} and your lesson location is ${json.primary_location}.</p>
        <p>${enrolled}</p>
        `
        const details = document.querySelector('#user-details')
        details.innerHTML = html;
    })
    .catch(error => console.log(error))