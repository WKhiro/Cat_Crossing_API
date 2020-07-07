fetch("https://acnhapi.com/v1/villagers")
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    for (const [key, value] of Object.entries(data)) {
      // Only care about the cats
      if (value.species == "Cat") {
        const card = document.createElement("div")
        card.setAttribute("class", "card")

        const h1 = document.createElement("h1")
        h1.textContent = value.name["name-USen"]

        const animal = document.createElement("img")
        animal.setAttribute("class", "animal")
        animal.src = value.image_uri

        const gender = document.createElement("p")
        gender.textContent = `Gender: ${value.gender}`
        const birthday = document.createElement("p")
        birthday.textContent = `Birthday: ${value["birthday-string"]}`
        const personality = document.createElement("p")
        personality.textContent = `Personality: ${value.personality}`
        const catchPhrase = document.createElement("p")
        catchPhrase.textContent = `Catchphrase: ${value["catch-phrase"]}`

        container.appendChild(card)
        card.appendChild(h1)
        card.appendChild(animal)
        card.appendChild(gender)
        card.appendChild(birthday)
        card.appendChild(personality)
        card.appendChild(catchPhrase)
      }
    }
  })
  .catch((err) => {
    console.log("Something went wrong")
  })

const app = document.getElementById("root")

// Container for logo to allow for resizing without loss of quality
const logoContainer = document.createElement("div")
logoContainer.setAttribute("id", "logoContainer")
const logo = document.createElement("img")
logo.setAttribute("id", "logo")
logo.src = "logo.png"

const container = document.createElement("div")
container.setAttribute("class", "container")
logoContainer.appendChild(logo)
app.appendChild(logoContainer)
app.appendChild(container)
