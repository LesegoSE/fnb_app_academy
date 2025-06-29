document.getElementById("refresh").addEventListener('click', fetchContacts);

function fetchContacts() {
    fetch(rootPath + "controller/get-contacts/")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            displayOutput(data);
        })
}//end of fetchContacts

function displayOutput(data) {
    output = "<table>";
    output += `<tr> 
                        <td>Profile</td>
                        <td>Name</td>
                        <td>Surname</td>
                </tr>`;

    for (a in data) {
        output += `<tr> 
                        <td> 
                            <img src="${rootPath}controller/uploads/${data[a].avatar} " width="40p"/>
                        </td>  
                        <td>
                            <h5>${data[a].firstname}</h5>
                        </td>  
                        <td><h5>${data[a].lastname}</h5>
                        </td> 
                    </tr>`

    }
    output += "</table>";
    document.getElementById("table").innerHTML = output;
}