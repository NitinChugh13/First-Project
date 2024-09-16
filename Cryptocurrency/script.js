document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.createElement('div');
    themeToggle.className = 'theme-toggle';
    themeToggle.textContent = 'Toggle Theme';
    document.body.appendChild(themeToggle);

    const currentTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(`${currentTheme}-theme`);

    themeToggle.addEventListener('click', () => {
        const newTheme = document.body.classList.contains('light-theme') ? 'dark' : 'light';
        document.body.classList.remove('light-theme', 'dark-theme');
        document.body.classList.add(`${newTheme}-theme`);
        localStorage.setItem('theme', newTheme);
    });

    // Add click functionality to coin blocks
    document.querySelectorAll('.coin').forEach(coin => {
        coin.addEventListener('click', () => {
            const id = coin.querySelector('h2 span').id;
            let url;
            switch (id) {
                case 'bitcoin':
                    url = 'https://bitcoin.org/en/';
                    break;
                case 'dogecoin':
                    url = 'https://dogecoin.com/';
                    break;
                case 'ethereum':
                    url = 'https://ethereum.org/en/';
                    break;
                default:
                    url = '#';
            }
            window.open(url, '_blank');
        });
    });
});

// // Define the API URL
// const apiURL = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd";

// // Function to fetch and display cryptocurrency prices
// async function getCost(url) {
//     try {
//         // Fetch data from the API
//         let response = await fetch(url);
//         let data = await response.json();
        
//         // Select the HTML elements
//         let bitcoin = document.getElementById('bitcoin');
//         let dogecoin = document.getElementById('dogecoin');
//         let ethereum = document.getElementById('ethereum');
        
//         // Update the HTML elements with fetched data
//         bitcoin.innerHTML = `$${data.bitcoin.usd}`;
//         dogecoin.innerHTML = `$${data.dogecoin.usd}`;
//         ethereum.innerHTML = `$${data.ethereum.usd}`;
//     } catch (error) {
//         console.error("Error fetching data: ", error);
//     }
// }

// // Call the function to fetch and display the prices
// getCost(apiURL);
