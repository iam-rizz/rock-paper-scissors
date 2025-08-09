// Game variables
let playerScore = 0;
let computerScore = 0;
let isGameActive = true;

// Game choices dengan emoji
const choices = {
    rock: { emoji: '🗿', name: 'Batu' },
    paper: { emoji: '📄', name: 'Kertas' },
    scissors: { emoji: '✂️', name: 'Gunting' }
};

// DOM elements
const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const playerChoiceDisplay = document.getElementById('player-choice-display');
const computerChoiceDisplay = document.getElementById('computer-choice-display');
const resultMessage = document.getElementById('result-message');
const choiceButtons = document.querySelectorAll('.choice-btn');
const resetButton = document.getElementById('reset-btn');
const resultContainer = document.querySelector('.result');

// Event listeners
choiceButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (isGameActive) {
            const playerChoice = button.getAttribute('data-choice');
            playGame(playerChoice);
        }
    });
});

resetButton.addEventListener('click', resetGame);

// Fungsi utama game
function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    
    // Update display
    updateDisplay(playerChoice, computerChoice, result);
    
    // Update score
    updateScore(result);
    
    // Add visual effects
    addVisualEffects(result);
    
    // Check for game end (opsional - bisa ditambahkan batas score)
    // checkGameEnd();
}

// Generate pilihan komputer secara random
function getComputerChoice() {
    const choiceArray = Object.keys(choices);
    const randomIndex = Math.floor(Math.random() * choiceArray.length);
    return choiceArray[randomIndex];
}

// Tentukan pemenang
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

// Update tampilan pilihan dan hasil
function updateDisplay(playerChoice, computerChoice, result) {
    // Update choice displays
    playerChoiceDisplay.textContent = choices[playerChoice].emoji;
    computerChoiceDisplay.textContent = choices[computerChoice].emoji;
    
    // Update result message
    const messages = {
        win: `🎉 Anda Menang! ${choices[playerChoice].name} mengalahkan ${choices[computerChoice].name}`,
        lose: `😞 Anda Kalah! ${choices[computerChoice].name} mengalahkan ${choices[playerChoice].name}`,
        draw: `🤝 Seri! Sama-sama memilih ${choices[playerChoice].name}`
    };
    
    resultMessage.textContent = messages[result];
    
    // Update result container class untuk styling
    resultContainer.className = `result ${result}`;
    
    // Highlight selected button
    highlightSelectedButton(playerChoice);
}

// Highlight button yang dipilih
function highlightSelectedButton(playerChoice) {
    // Remove previous selection
    choiceButtons.forEach(btn => btn.classList.remove('selected'));
    
    // Add selection to current choice
    const selectedButton = document.querySelector(`[data-choice="${playerChoice}"]`);
    if (selectedButton) {
        selectedButton.classList.add('selected');
        
        // Remove selection after animation
        setTimeout(() => {
            selectedButton.classList.remove('selected');
        }, 1000);
    }
}

// Update score
function updateScore(result) {
    if (result === 'win') {
        playerScore++;
        playerScoreElement.textContent = playerScore;
    } else if (result === 'lose') {
        computerScore++;
        computerScoreElement.textContent = computerScore;
    }
}

// Tambahkan efek visual
function addVisualEffects(result) {
    // Animate choice displays
    const playerDisplay = document.querySelector('.player-choice');
    const computerDisplay = document.querySelector('.computer-choice');
    
    // Add glow effects based on result
    if (result === 'win') {
        playerDisplay.classList.add('glow-cyan');
        computerDisplay.classList.remove('glow-cyan', 'glow-magenta');
    } else if (result === 'lose') {
        computerDisplay.classList.add('glow-magenta');
        playerDisplay.classList.remove('glow-cyan', 'glow-magenta');
    } else {
        playerDisplay.classList.add('glow-cyan');
        computerDisplay.classList.add('glow-magenta');
    }
    
    playerDisplay.classList.add('pulse', 'active');
    computerDisplay.classList.add('pulse', 'active');
    
    // Remove animation classes after animation completes
    setTimeout(() => {
        playerDisplay.classList.remove('pulse');
        computerDisplay.classList.remove('pulse');
        
        // Remove glow after 2 seconds
        setTimeout(() => {
            playerDisplay.classList.remove('glow-cyan', 'glow-magenta', 'active');
            computerDisplay.classList.remove('glow-cyan', 'glow-magenta', 'active');
        }, 2000);
    }, 600);
    
    // Shake effect for losing
    if (result === 'lose') {
        const container = document.querySelector('.container');
        container.classList.add('shake');
        setTimeout(() => {
            container.classList.remove('shake');
        }, 500);
    }
}

// Reset game
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    isGameActive = true;
    
    // Reset displays
    playerScoreElement.textContent = '0';
    computerScoreElement.textContent = '0';
    playerChoiceDisplay.textContent = '❓';
    computerChoiceDisplay.textContent = '❓';
    resultMessage.textContent = 'Pilih untuk memulai!';
    
    // Reset styling and effects
    resultContainer.className = 'result';
    choiceButtons.forEach(btn => btn.classList.remove('selected'));
    
    // Remove all glow effects
    const playerDisplay = document.querySelector('.player-choice');
    const computerDisplay = document.querySelector('.computer-choice');
    playerDisplay.classList.remove('glow-cyan', 'glow-magenta', 'active', 'pulse');
    computerDisplay.classList.remove('glow-cyan', 'glow-magenta', 'active', 'pulse');
    
    // Add reset animation
    const container = document.querySelector('.container');
    container.style.transform = 'scale(0.95)';
    container.style.filter = 'brightness(1.2)';
    setTimeout(() => {
        container.style.transform = 'scale(1)';
        container.style.filter = 'brightness(1)';
    }, 200);
}

// Fungsi opsional untuk batas score (uncomment jika ingin digunakan)
/*
function checkGameEnd() {
    const maxScore = 5; // Batas maksimal score
    
    if (playerScore >= maxScore || computerScore >= maxScore) {
        isGameActive = false;
        
        const finalWinner = playerScore >= maxScore ? 'Anda' : 'Komputer';
        resultMessage.textContent = `🏆 Game Selesai! ${finalWinner} menang dengan score ${Math.max(playerScore, computerScore)}-${Math.min(playerScore, computerScore)}!`;
        
        // Disable buttons
        choiceButtons.forEach(btn => {
            btn.style.opacity = '0.5';
            btn.style.pointerEvents = 'none';
        });
        
        // Show restart message
        setTimeout(() => {
            if (confirm('Game selesai! Ingin bermain lagi?')) {
                resetGame();
                // Re-enable buttons
                choiceButtons.forEach(btn => {
                    btn.style.opacity = '1';
                    btn.style.pointerEvents = 'auto';
                });
            }
        }, 2000);
    }
}
*/

// Easter egg: Konami code atau keyboard shortcuts (opsional)
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

// Tambahkan tooltip untuk keyboard shortcuts
document.addEventListener('DOMContentLoaded', function() {
    // Check if device is mobile/touch device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                     ('ontouchstart' in window) || 
                     (navigator.maxTouchPoints > 0);
    
    // Only show keyboard hint on desktop/non-touch devices
    if (!isMobile) {
        // Create keyboard hint
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
});

// Add some fun sound effects (opsional - menggunakan Web Audio API)
function playSound(type) {
    // Simple beep sound using Web Audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Different frequencies for different events
    const frequencies = {
        win: 800,
        lose: 300,
        draw: 500,
        click: 600
    };
    
    oscillator.frequency.value = frequencies[type] || 400;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.2);
}

// Uncomment baris di bawah jika ingin menambahkan sound effects
/*
// Add sound to existing functions
const originalPlayGame = playGame;
playGame = function(playerChoice) {
    playSound('click');
    const result = originalPlayGame.call(this, playerChoice);
    setTimeout(() => playSound(determineWinner(playerChoice, getComputerChoice())), 300);
    return result;
};
*/
