const charters = document.querySelector('.charters')
const modal = document.getElementById('infoModal')
const modalTitle =document.getElementById('modalTitle')
const modalImage = document.getElementById('modalImage')
const modalDescription = document.getElementById('modalDescription')
const closeModal = document.querySelector('.close-modal')


const xhr = new XMLHttpRequest()
xhr.open( 'GET', './data/personsMarvel.json' )
xhr.setRequestHeader('Content-type', 'application/json')
xhr.send()
xhr.onload = () => {
    const response = JSON.parse(xhr.response)
    console.log('нету пока перебора ',response)
    response.forEach((item) =>{
        const card = document.createElement('div')
        card.className = 'card'
        card.innerHTML = `
            <img src="${item.imageUrl}" alt="">
            <span>${item.name}</span>
            <button class="modal__open">More info</button>
        `
        charters.append(card)
        const morInfoButton = card.querySelector('.modal__open')
        morInfoButton.onclick = () => {
            openInfoModal(item)
        }

    })
}

function openInfoModal (item){
    modalTitle.innerText = item.name
    modalDescription.innerText = item.description
    modalImage.src = item.imageUrl
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}
closeModal.onclick =() => {
    modal.style.display = 'none'
    document.body.style.overflow = ''

}
modal.onclick = (e) => {
    if (e.target === modal){
        modal.style.display = 'none'
        document.body.style.overflow = ''

    }
}





const xhr2 = new XMLHttpRequest()
xhr2.open( 'GET', 'https://fakestoreapi.com/users' )
xhr2.setRequestHeader('Content-type', 'application/json')
xhr2.send()
xhr2.onload = () => {
    const response = JSON.parse(xhr2.response)
    response.forEach((item) =>{
        console.log( item)
        const card = document.createElement('div')
        card.className = 'card'
        card.innerHTML = `
    <strong>Имя:${item.name.firstname}</strong>
    <strong>Фамилия:${item.name.lastname}</strong>
<p>${item.email}</p>
           <span>${item.phone}</span>
        `
        charters.append(card)

    })

}