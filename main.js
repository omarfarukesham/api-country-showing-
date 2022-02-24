const loadKayneQut = () => {
    fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then(data => displayQutation(data))
}
const displayQutation = (data) =>{
    const getId = document.getElementById('qutation')
    const p = document.createElement('p')
    p.innerText = data.quote
    getId.appendChild(p)
} 