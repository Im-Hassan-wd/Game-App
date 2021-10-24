const addGame = document.querySelector('.games');
const gamesImages = document.querySelectorAll('.games img');
const gameDetails = document.querySelector('.game-details-container');
const preview = document.querySelector('.main-image');
const screenshotPreviews = document.querySelectorAll('.screenshot img');
const previewTitle = document.querySelector('.rating h3');
const rating = document.querySelector('.rating p');


const updateGames = (data) => {

	const games = data.games;

	games.forEach(({ name, released, background_image, rating, short_screenshots }, i) => {
		addGame.innerHTML += `
			<div class="game">
				<div class="game-header">
					<h3>${name}</h3>
					<h4>${released}</h4>
				</div>
				<div class="game-body">
					<img src="${background_image}" alt="${name}" data-shots="${data[i].short_screenshots}" data-rating="${rating}">
				</div>
			</div>
		`;
	});


	setTimeout(() => {
		const gamesImages = document.querySelectorAll('.games img');
		const screen = document.querySelector('.screenshot img');

		gamesImages.forEach(image => {
			image.addEventListener('click', (e) => {
				gameDetails.classList.add('open');
				preview.src = image.src;
				previewTitle.textContent = e.target.alt;
				rating.textContent = image.getAttribute('data-rating');
				console.log(games);
			});
		});

		gameDetails.addEventListener('click', (e) => {
			if (e.target.classList.contains('game-details-container')) {
				gameDetails.classList.remove('open');
			}
		});
	}, 3000)

};



const getGames = async () => {

	const games = await funGames();

	return {
		games: games.results
	}

}



getGames()
	.then(data => updateGames(data))
	.catch(err => console.log(err));
