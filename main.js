const $arenas = document.querySelector ('.arenas');
const $random = document.querySelector ('.button');

const player1 =  {
    player: 1,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: 'sword',
    changeHP,
    elHP,
    renderHP,
    attack: function() {
        const attack = (player1.name + ' ' + 'Fight...');
        console.log(attack);
    }    
}

const player2 = {
    player: 2,
    name: 'Sonya',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: 'Gun',
    changeHP,
    elHP,
    renderHP,
    attack: function() {
        const attack = (player2.name + ' ' + 'Fight...');
        console.log(attack);
    }

}


function createElement (tag, className) {
    const $tag = document.createElement (tag);

    if (className) {
        
        $tag.classList.add(className);
    }    

    return $tag;

}

function createPlayer (name){
    const $player = createElement('div', 'player' + name.player);
    
    const $progressbar = createElement('div', 'progressbar' );
    $player.appendChild($progressbar);
    
    const $life = createElement('div', 'life'); 
    $life.style.width = name.hp + '%';
    $progressbar.appendChild($life);
    
    const $name = createElement('div', 'name');
    $name.innerText = name.name;
    $progressbar.appendChild($name);
    
    const $character =createElement('div', 'character');
   
    const $img = createElement('img');
    $img.src = name.img;
    $character.appendChild($img);
    $player.appendChild($character);

    return $player;

}

function elHP () {
    return document.querySelector ('.player'+this.player+' .life');
}

function changeHP (damage) {
    this.hp -= damage;

    if (this.hp <= 0) {
        this.hp = 0;
    }
    
}

function renderHP () {
    this.elHP().style.width = this.hp + '%';
}

function getRandom(num) {
    return Math.ceil(Math.random() * 20);
}

function playerWins (name) {
    const $loseTitle = createElement('div', 'loseTitle');
    if (name) {
    $loseTitle.innerText = name + ' win';
    } else {
        $loseTitle.innerText = 'draw';
    }
    return $loseTitle;
}

function createRandomButton () {
    const $reloadButtonDiv = createElement ('div', 'reloadWrap');
    const $reloadButton = createElement ('button', 'button');
    $reloadButton.innerText = 'Reload';

    $reloadButton.addEventListener('click', function (){
        window.location.reload();
    })

    $reloadButtonDiv.appendChild($reloadButton);
    $arenas.appendChild($reloadButtonDiv);

}

$random.addEventListener ('click', function() {
    player1.changeHP(getRandom(20));
    player1.renderHP();

    player2.changeHP(getRandom(20));
    player2.renderHP();
    
    if (player2.hp === 0 || player1.hp === 0) {
        $random.disabled = true;
        createRandomButton();
    }

    if (player1.hp === 0 && player1.hp < player2.hp) {
        $arenas.appendChild(playerWins(player2.name));
    } else if (player2.hp === 0 && player2.hp < player1.hp){
        $arenas.appendChild(playerWins(player1.name));
    } else if (player1.hp === 0 && player2.hp === 00) {
        $arenas.appendChild(playerWins());
    }
})

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));