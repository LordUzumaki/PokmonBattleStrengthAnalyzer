// Tab functionality
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        tabContents.forEach(content => content.classList.remove('active'));
        document.getElementById(tab.getAttribute('data-tab')).classList.add('active');
    });
});

// Fetch and display all Pokémon
fetch('/pokemon')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const pokemonList = document.getElementById('pokemon-list-all');
        data.forEach(pokemon => {
            const listItem = document.createElement('li');
            listItem.className = 'pokemon-item';
            listItem.innerHTML = `
                <h2>${pokemon.Name}</h2>
                <p>Type: ${pokemon['Type 1']} ${pokemon['Type 2'] !== 'None' ? `/ ${pokemon['Type 2']}` : ''}</p>
                <p>Battle Strength: ${pokemon.Battle_Strength.toFixed(2)}</p>
                <p>HP: ${pokemon.HP}, Attack: ${pokemon.Attack}, Defense: ${pokemon.Defense}</p>
            `;
            pokemonList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error fetching Pokémon:', error));

// Fetch and display top 10 Pokémon
fetch('/pokemon/top10')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const pokemonList = document.getElementById('pokemon-list-top10');
        data.forEach(pokemon => {
            const listItem = document.createElement('li');
            listItem.className = 'pokemon-item';
            listItem.innerHTML = `
                <h2>${pokemon.Name}</h2>
                <p>Type: ${pokemon['Type 1']} ${pokemon['Type 2'] !== 'None' ? `/ ${pokemon['Type 2']}` : ''}</p>
                <p>Battle Strength: ${pokemon.Battle_Strength.toFixed(2)}</p>
                <p>HP: ${pokemon.HP}, Attack: ${pokemon.Attack}, Defense: ${pokemon.Defense}</p>
            `;
            pokemonList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error fetching top 10 Pokémon:', error));
