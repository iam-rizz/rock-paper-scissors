let playerScore = 0;
let computerScore = 0;
let isGameActive = true;

const choices = {
    rock: { emoji: '🗿', name: 'Batu' },
    paper: { emoji: '📄', name: 'Kertas' },
    scissors: { emoji: '✂️', name: 'Gunting' }
};

const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const playerChoiceDisplay = document.getElementById('player-choice-display');
const computerChoiceDisplay = document.getElementById('computer-choice-display');
const resultMessage = document.getElementById('result-message');
const choiceButtons = document.querySelectorAll('.choice-btn');
const resetButton = document.getElementById('reset-btn');
const resultContainer = document.querySelector('.result');

choiceButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (isGameActive) {
            const playerChoice = button.getAttribute('data-choice');
            playGame(playerChoice);
        }
    });
});

resetButton.addEventListener('click', resetGame);

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    
    updateDisplay(playerChoice, computerChoice, result);
    updateScore(result);
    addVisualEffects(result);
    checkWinStreak(result);
}

function getComputerChoice() {
    const choiceArray = Object.keys(choices);
    const randomIndex = Math.floor(Math.random() * choiceArray.length);
    return choiceArray[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'draw';
    }
    
    const winConditions = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };
    
    if (winConditions[playerChoice] === computerChoice) {
        return 'win';
    } else {
        return 'lose';
    }
}

function updateDisplay(playerChoice, computerChoice, result) {
    playerChoiceDisplay.textContent = choices[playerChoice].emoji;
    computerChoiceDisplay.textContent = choices[computerChoice].emoji;
    
    const messages = {
        win: `🎉 Anda Menang! ${choices[playerChoice].name} mengalahkan ${choices[computerChoice].name}`,
        lose: `😞 Anda Kalah! ${choices[computerChoice].name} mengalahkan ${choices[playerChoice].name}`,
        draw: `🤝 Seri! Sama-sama memilih ${choices[playerChoice].name}`
    };
    
    resultMessage.textContent = messages[result];
    
    resultContainer.className = `result ${result}`;
    
    highlightSelectedButton(playerChoice);
}

function highlightSelectedButton(playerChoice) {
    choiceButtons.forEach(btn => btn.classList.remove('selected'));
    
    const selectedButton = document.querySelector(`[data-choice="${playerChoice}"]`);
    if (selectedButton) {
        selectedButton.classList.add('selected');
        
        setTimeout(() => {
            selectedButton.classList.remove('selected');
        }, 1000);
    }
}

function updateScore(result) {
    if (result === 'win') {
        playerScore++;
        playerScoreElement.textContent = playerScore;
    } else if (result === 'lose') {
        computerScore++;
        computerScoreElement.textContent = computerScore;
    }
}

function addVisualEffects(result) {
    const playerDisplay = document.querySelector('.player-choice');
    const computerDisplay = document.querySelector('.computer-choice');
    const container = document.querySelector('.container');
    const playerScoreContainer = document.querySelector('.player-score');
    const computerScoreContainer = document.querySelector('.computer-score');
    
    if (result === 'win') {
        playerDisplay.classList.add('glow-cyan', 'victory-celebration');
        computerDisplay.classList.remove('glow-cyan', 'glow-magenta');
        container.classList.add('confetti-burst');
        playerScoreContainer.classList.add('score-sparkle');
        createScreenFlash();
        createEmojiRain(['🎉', '🌟', '✨', '🎊'], 8);
        playVictorySound();
        
    } else if (result === 'lose') {
        computerDisplay.classList.add('glow-magenta');
        playerDisplay.classList.remove('glow-cyan', 'glow-magenta');
        container.classList.add('dramatic-lose');
        playerDisplay.classList.add('defeat-effect');        
        createEmojiRain(['💀', '😢', '😭', '💔'], 5);        
        playDefeatSound();
        
    } else {
        playerDisplay.classList.add('glow-cyan');
        computerDisplay.classList.add('glow-magenta');
        container.style.filter = 'brightness(1.1)';
        setTimeout(() => {
            container.style.filter = 'brightness(1)';
        }, 500);
        createEmojiRain(['🤝', '😐', '🔄'], 3);
    }
    
    playerDisplay.classList.add('pulse', 'active');
    computerDisplay.classList.add('pulse', 'active');
    
    setTimeout(() => {
        playerDisplay.classList.remove('pulse');
        computerDisplay.classList.remove('pulse');
        
        if (result === 'win') {
            container.classList.remove('confetti-burst');
            playerDisplay.classList.remove('victory-celebration');
            playerScoreContainer.classList.remove('score-sparkle');
        }
        
        if (result === 'lose') {
            container.classList.remove('dramatic-lose');
            playerDisplay.classList.remove('defeat-effect');
        }
        
        setTimeout(() => {
            playerDisplay.classList.remove('glow-cyan', 'glow-magenta', 'active');
            computerDisplay.classList.remove('glow-cyan', 'glow-magenta', 'active');
        }, 2000);
    }, 600);
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    isGameActive = true;
    
    playerScoreElement.textContent = '0';
    computerScoreElement.textContent = '0';
    playerChoiceDisplay.textContent = '❓';
    computerChoiceDisplay.textContent = '❓';
    resultMessage.textContent = 'Pilih untuk memulai!';
    
    resultContainer.className = 'result';
    choiceButtons.forEach(btn => btn.classList.remove('selected'));
    
    const playerDisplay = document.querySelector('.player-choice');
    const computerDisplay = document.querySelector('.computer-choice');
    playerDisplay.classList.remove('glow-cyan', 'glow-magenta', 'active', 'pulse', 'victory-celebration', 'defeat-effect');
    computerDisplay.classList.remove('glow-cyan', 'glow-magenta', 'active', 'pulse');
    
    const container = document.querySelector('.container');
    container.classList.remove('confetti-burst', 'dramatic-lose');
    container.style.animation = '';
    container.style.transform = 'scale(0.95)';
    container.style.filter = 'brightness(1.2)';
    
    const playerScoreContainer = document.querySelector('.player-score');
    const computerScoreContainer = document.querySelector('.computer-score');
    if (playerScoreContainer) playerScoreContainer.classList.remove('score-sparkle');
    if (computerScoreContainer) computerScoreContainer.classList.remove('score-sparkle');
    
    setTimeout(() => {
        container.style.transform = 'scale(1)';
        container.style.filter = 'brightness(1)';
    }, 200);
}

/*
function checkGameEnd() {
    
    if (playerScore >= maxScore || computerScore >= maxScore) {
        isGameActive = false;
        
        const finalWinner = playerScore >= maxScore ? 'Anda' : 'Komputer';
        resultMessage.textContent = `🏆 Game Selesai! ${finalWinner} menang dengan score ${Math.max(playerScore, computerScore)}-${Math.min(playerScore, computerScore)}!`;
        
        choiceButtons.forEach(btn => {
            btn.style.opacity = '0.5';
            btn.style.pointerEvents = 'none';
        });
        
        setTimeout(() => {
            if (confirm('Game selesai! Ingin bermain lagi?')) {
                resetGame();
                choiceButtons.forEach(btn => {
                    btn.style.opacity = '1';
                    btn.style.pointerEvents = 'auto';
                });
            }
        }, 2000);
    }
}
*/

document.addEventListener('keydown', function(event) {
    switch(event.key.toLowerCase()) {
        case 'r':
            if (isGameActive) playGame('rock');
            break;
        case 'p':
            if (isGameActive) playGame('paper');
            break;
        case 's':
            if (isGameActive) playGame('scissors');
            break;
        case 'escape':
            resetGame();
            break;
    }
});

function createScreenFlash() {
    const flash = document.createElement('div');
    flash.className = 'screen-flash';
    document.body.appendChild(flash);
    
    setTimeout(() => {
        document.body.removeChild(flash);
    }, 500);
}

function createEmojiRain(emojis, count) {
    const emojiRain = document.createElement('div');
    emojiRain.className = 'emoji-rain';
    document.body.appendChild(emojiRain);
    
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const emoji = document.createElement('span');
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.left = Math.random() * 100 + '%';
            emoji.style.animationDelay = Math.random() * 1 + 's';
            emoji.style.animationDuration = (2 + Math.random() * 2) + 's';
            emojiRain.appendChild(emoji);
            
            setTimeout(() => {
                if (emojiRain.contains(emoji)) {
                    emojiRain.removeChild(emoji);
                }
            }, 4000);
        }, i * 200);
    }
    
    setTimeout(() => {
        if (document.body.contains(emojiRain)) {
            document.body.removeChild(emojiRain);
        }
    }, 5000);
}

function playVictorySound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        
        notes.forEach((frequency, index) => {
            setTimeout(() => {
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.value = frequency;
                oscillator.type = 'sine';
                
                gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.3);
            }, index * 150);
        });
    } catch (error) {
        console.log('Audio tidak didukung');
    }
}

function playDefeatSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        
        notes.forEach((frequency, index) => {
            setTimeout(() => {
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.value = frequency;
                oscillator.type = 'triangle';
                
                gainNode.gain.setValueAtTime(0.08, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.4);
            }, index * 200);
        });
    } catch (error) {
        console.log('Audio tidak didukung');
    }
}

function addButtonHoverEffects() {
    choiceButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            const emoji = button.querySelector('.emoji');
            emoji.style.transform = 'scale(1.2) rotate(10deg)';
        });
        
        button.addEventListener('mouseleave', () => {
            const emoji = button.querySelector('.emoji');
            emoji.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}

let winStreak = 0;

function checkWinStreak(result) {
    if (result === 'win') {
        winStreak++;
        if (winStreak >= 3) {
            createSuperVictoryEffect();
        }
    } else {
        winStreak = 0;
    }
}

function createSuperVictoryEffect() {
    const container = document.querySelector('.container');
    container.style.animation = 'victoryBounce 0.5s ease-out, rainbow 2s linear infinite';
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    createEmojiRain(['🏆', '🎉', '👑', '⭐', '🌟', '✨'], 15);
    
    for (let i = 0; i < 3; i++) {
        setTimeout(() => createScreenFlash(), i * 200);
    }
    
    setTimeout(() => {
        const originalMessage = resultMessage.textContent;
        resultMessage.textContent = '🏆 WIN STREAK! Anda sedang ON FIRE! 🔥';
        resultMessage.style.fontSize = '1.2em';
        resultMessage.style.color = '#FFD700';
        
        setTimeout(() => {
            resultMessage.textContent = originalMessage;
            resultMessage.style.fontSize = '';
            resultMessage.style.color = '';
            container.style.animation = '';
            document.head.removeChild(style);
        }, 3000);
    }, 1000);
}

function checkWinStreak(result) {
    if (result === 'win') {
        winStreak++;
        if (winStreak >= 3) {
            createSuperVictoryEffect();
        }
    } else {
        winStreak = 0;
    }
}

function createSuperVictoryEffect() {
    const container = document.querySelector('.container');
    container.style.animation = 'victoryBounce 0.5s ease-out, rainbow 2s linear infinite';
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    createEmojiRain(['🏆', '🎉', '👑', '⭐', '🌟', '✨'], 15);
    
    for (let i = 0; i < 3; i++) {
        setTimeout(() => createScreenFlash(), i * 200);
    }
    
    setTimeout(() => {
        const originalMessage = resultMessage.textContent;
        resultMessage.textContent = '🏆 WIN STREAK! Anda sedang ON FIRE! 🔥';
        resultMessage.style.fontSize = '1.2em';
        resultMessage.style.color = '#FFD700';
        
        setTimeout(() => {
            resultMessage.textContent = originalMessage;
            resultMessage.style.fontSize = '';
            resultMessage.style.color = '';
            container.style.animation = '';
            if (document.head.contains(style)) {
                document.head.removeChild(style);
            }
        }, 3000);
    }, 1000);
}

function addButtonHoverEffects() {
    choiceButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            const emoji = button.querySelector('.emoji');
            if (emoji) {
                emoji.style.transform = 'scale(1.2) rotate(10deg)';
                emoji.style.transition = 'all 0.3s ease';
            }
        });
        
        button.addEventListener('mouseleave', () => {
            const emoji = button.querySelector('.emoji');
            if (emoji) {
                emoji.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                     ('ontouchstart' in window) || 
                     (navigator.maxTouchPoints > 0);
    
    if (!isMobile) {
        const keyboardHint = document.createElement('div');
        keyboardHint.className = 'keyboard-hint';
        keyboardHint.innerHTML = `
            <small style="color: #6c757d; font-size: 0.9em;">
                💡 Shortcut: R = Batu, P = Kertas, S = Gunting, ESC = Reset
            </small>
        `;
        keyboardHint.style.textAlign = 'center';
        keyboardHint.style.marginTop = '10px';
        
        document.querySelector('.container').appendChild(keyboardHint);
    }
    
    addButtonHoverEffects();
});
