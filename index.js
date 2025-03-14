// Add your code here
"dogs"; [
    {
      "dogName": "Luca",
      "dogBreed": "German Shepherd",
      "id": 1
    },
    {
      "dogName": "Lola",
      "dogBreed": "Giant Schnauzer",
      "id": 2
    },
    {
      "dogName": "Byron",
      "dogBreed": "Poodle",
      "id": 3
    },
    {
      "dogName": "Byron",
      "dogBreed": "Poodle",
      "id": 4
    },
    {
      "dogName": "Byron",
      "dogBreed": "Poodle",
      "id": 5
    },
    {
      "dogName": "Byron",
      "dogBreed": "Poodle",
      "id": 6
    },
    {
      "dogName": "Poodle",
      "dogBreed": "German",
      "id": 7
    }
],
"cats"; [
    {
      "catName": "Stanley",
      "catBreed": "Tabby",
      "id": 1
    },
    {
      "catName": "Gunnar",
      "catBreed": "American Shorthair",
      "id": 2
    }
  ],
  "users"; [
    {
      "name": "Steve",
      "email": "steve@steve.com",
      "id": 1
    },
    {
      "name": "Steve",
      "email": "steve@steve.com",
      "id": 2
    },
    {
      "name": "Steve",
      "email": "steve@steve.com",
      "id": 3
    },
    {
      "name": "Steve",
      "email": "steve@steve.com",
      "id": 4
    },
    {
      "name": "Steve",
      "email": "steve@steve.com",
      "id": 5
    },
    {
      "name": "Steve",
      "email": "steve@steve.com",
      "id": 6
    },
    {
      "name": "Steve",
      "email": "steve@steve.com",
      "id": 7
    }
  ],
  "robots"; [
    {
      "robotName": "C8-09S100K",
      "robotType": "Human Assistant",
      "id": 9000
    }
  ]

const formData = {
    name: 'Steve',
    email: 'steve@steve.com',
}

function submitData() {

    return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {"Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify(formData)
    })

    .then(res => res.json())
    .then(object => {
        document.body.innerHTML = object.id
        console.log(object)
    })

    .catch(error => {
        document.body.innerHTML = error.message
        console.log(error)

    })

};

submitData()