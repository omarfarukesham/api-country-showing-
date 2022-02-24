const buddiesLoad = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayBuddies(data))
}


const displayBuddies = (data) => {
   // console.log(data)
      const buddies = data.results
      const buddiesContainer = document.getElementById('buddies')

     for(const buddy of buddies ){
         let p = document.createElement('p')
         p.innerHTML= `<bold>Name</bold>: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} <br> email:${buddy.email} `
         buddiesContainer.appendChild(p)
        }
}