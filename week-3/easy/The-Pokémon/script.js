document.addEventListener('DOMContentLoaded', function(){

    document.querySelector('.submit').addEventListener('click', async function fetchPokeData() {
        let receivedCards = 0
        let id = Math.floor(Math.random() * 1000) + 1;
        let reqCat = document.querySelector('#category').value.toLowerCase()
        let reqCards = document.querySelector('#numberOfCards').value
        // 
        document.querySelector('body').removeChild(document.querySelector('.card-container-outside'))
        let main = document.createElement('div')
        main.className = "card-container-outside"
        document.querySelector('body').appendChild(main)
        while(receivedCards<reqCards){

            try {
                // fetch data from API
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}` )
                const data = await response.json();
                console.log('data is fetched');
                
                // extract required data
                // const hp = data.hp
                const pic = data.sprites.front_default;
                const name = data.name[0].toUpperCase() + data.name.slice(1);
                const category = data.types[0].type.name;
                console.log(category);
                
                const statAttack = data.stats[1].base_stat;
                const statDefense = data.stats[2].base_stat;
                const statSpeed = data.stats[5].base_stat;
                const hpStat = data.stats[0].base_stat;
                
    
                if (reqCat == category) {
                    receivedCards++

                    // cardBox is created with class
                    let cardBox = document.createElement('div')
                    cardBox.className = "pokemon-cards"

                    // Top div is created
                    let topDiv = document.createElement('div')
                    topDiv.className = "hp"
                    topDiv.innerHTML = `HP: ${hpStat}`
                    cardBox.appendChild(topDiv)

                    // main div created
                    let mainDiv = document.createElement('div')
                    mainDiv.className = "card-main"
                    let image = document.createElement('img')
                    image.src = pic;
                    let title = document.createElement('h2')
                    title.innerHTML = name;
                    let species = document.createElement('h3')
                    species.innerText = category;
                    mainDiv.appendChild(image)
                    mainDiv.appendChild(title)
                    mainDiv.appendChild(species)
                    cardBox.appendChild(mainDiv)

                    // bottom div created
                    let bottom = document.createElement('div')
                    bottom.className = "card-bottom"

                    //attack box in bottom div
                    let attBox = document.createElement('div')
                    attBox.className = "attack-box"
                    let attStat = document.createElement('div')
                    attStat.className = "attack-stats"
                    attStat.innerText = statAttack
                    attBox.appendChild(attStat)
                    let attStatsName = document.createElement('div')
                    attStatsName.className = "bottom-text"
                    attStatsName.innerHTML = "Attack"
                    attBox.appendChild(attStatsName)
                    bottom.appendChild(attBox)

                    //defence box in bottom div
                    let defBox = document.createElement('div')
                    defBox.className = "defence-box"
                    let defStat = document.createElement('div')
                    defStat.className = "defence-stats"
                    defStat.innerText = statDefense
                    defBox.appendChild(defStat)
                    let defStatsName = document.createElement('div')
                    defStatsName.className = "bottom-text"
                    defStatsName.innerHTML = "Defence"
                    defStatsName.className = "bottom-text"
                    defStatsName.innerHTML = "Attack"
                    defBox.appendChild(defStatsName)
                    bottom.appendChild(defBox)
                    
                    //speed box in bottom div
                    let speBox = document.createElement('div')
                    speBox.className = "speed-box"
                    let speStat = document.createElement('div')
                    speStat.className = "speed-stats"
                    speStat.innerText = statSpeed
                    speBox.appendChild(speStat)
                    let speStatsName = document.createElement('div')
                    speStatsName.className = "bottom-text"
                    speStatsName.innerHTML = "Speed"
                    speBox.appendChild(speStatsName)
                    bottom.appendChild(speBox)

                    cardBox.appendChild(bottom)
                    
                    let xyz = document.createElement('div')
                    xyz.className = "card-container"

                    document.querySelector('.card-container-outside').appendChild(xyz.appendChild(cardBox))
                    // if (receivedCards%3 = 1) {

                        
                    // } else{
                    //     document.querySelector('#card-container-outside').appendChild(cardBox)

                    // }
                    
                } 
                id++
            } catch (error) {
                console.log(`${error} occured while fetching API Data`);
            }

        }
    })
})