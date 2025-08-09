# 🎮 Game Gunting Batu Kertas - Dark Mode Glassmorphism

Game klasik Gunting Batu Kertas (Rock Paper Scissors) dengan tema **Dark Mode Glassmorphism** dan efek visual yang spektakuler! Dibuat dengan HTML, CSS, dan JavaScript modern dengan pengalaman bermain yang sangat engaging.

## ✨ Fitur Utama

### 🌟 **Visual & Design**
- **Dark Mode Glassmorphism**: Tema futuristik dengan glass effect dan blur
- **Neon Accents**: Warna cyan, magenta, dan green yang berkilau
- **Responsive Design**: Perfect di desktop, tablet, dan mobile
- **Animated Background**: Floating particles dengan gradient dinamis
- **Modern UI**: Clean interface dengan depth dan layering

### 🎉 **Efek Visual Spektakuler**
- **Victory Effects**: Confetti burst, screen flash, victory glow, emoji rain
- **Defeat Effects**: Dramatic shake, fade effects, sad emoji rain
- **Win Streak Bonus**: Rainbow effect setelah 3x menang berturut-turut
- **Interactive Animations**: Hover effects, button transformations, glow effects
- **Sound Feedback**: Musical victory/defeat sounds dengan Web Audio API

### 🎮 **Gameplay Features**
- **Smart Score Tracking**: Real-time score dengan sparkle effects
- **Keyboard Shortcuts**: R=Batu, P=Kertas, S=Gunting, ESC=Reset
- **Achievement System**: Win streak tracking dengan special effects
- **Mobile Optimized**: Touch-friendly dengan proper tap highlights

## 🎯 Cara Bermain

1. **Pilih Senjata**: Klik salah satu dari tiga pilihan:
   - 🗿 **Batu** - Mengalahkan Gunting
   - 📄 **Kertas** - Mengalahkan Batu  
   - ✂️ **Gunting** - Mengalahkan Kertas

2. **Nikmati Efek Visual**: Setiap pilihan akan menampilkan animasi yang berbeda

3. **Lihat Hasil Spektakuler**: 
   - 🏆 **Menang**: Confetti, glow effects, victory sounds
   - 💔 **Kalah**: Dramatic effects, shake animations
   - 🤝 **Seri**: Dual glow effects

4. **Raih Win Streak**: Menang 3x berturut-turut untuk efek rainbow special!

## ⌨️ Keyboard Shortcuts

- **R** - Pilih Batu (Desktop only)
- **P** - Pilih Kertas (Desktop only)
- **S** - Pilih Gunting (Desktop only)
- **ESC** - Reset Game

*Note: Keyboard hints otomatis disembunyikan di mobile untuk pengalaman yang lebih clean*

## 🎨 Efek Visual Detail

### 🏆 **Victory Effects**
- **Confetti Burst**: Emoji 🎉 berjatuhan dari atas
- **Victory Glow**: Green neon glow dengan pulsing effect
- **Screen Flash**: Cyan flash di seluruh layar
- **Score Sparkle**: ✨ muncul saat skor bertambah
- **Victory Sound**: Nada Do-Mi-Sol-Do yang uplifting

### 💥 **Defeat Effects**
- **Dramatic Shake**: Container bergoyang dengan rotation
- **Defeat Fade**: Brightness dan saturation reduction
- **Sad Emoji Rain**: 💀😢😭💔 berjatuhan
- **Defeat Sound**: Nada menurun yang melancholic

### 🌈 **Win Streak (3+ Wins)**
- **Rainbow Filter**: Container berubah warna rainbow
- **Crown Emoji Rain**: 🏆👑⭐🌟✨ extra spectacular
- **Triple Flash**: Screen flash 3x berturut-turut
- **Achievement Message**: "WIN STREAK! ON FIRE!" dengan gold text

## 🛠️ Teknologi yang Digunakan

### 💻 **Frontend Technologies**
- **HTML5** - Semantic structure dengan accessibility
- **CSS3** - Advanced styling dengan modern features:
  - **Glassmorphism**: `backdrop-filter: blur()` effects
  - **CSS Grid & Flexbox**: Responsive layouts
  - **CSS Animations**: Keyframes untuk smooth transitions
  - **CSS Variables**: Dynamic theming
  - **Media Queries**: Mobile-first responsive design
  
- **JavaScript (Vanilla ES6+)** - Modern JavaScript features:
  - **DOM Manipulation**: Efficient element handling
  - **Event Handling**: Touch dan keyboard events
  - **Web Audio API**: Dynamic sound generation
  - **CSS Animations Control**: Programmatic animation triggers
  - **Local State Management**: Game state tracking

### 🎨 **Design Features**
- **Dark Mode Theme**: Space-inspired color palette
- **Glassmorphism UI**: Semi-transparent elements dengan blur
- **Neon Accents**: Cyan (#00ffff), Magenta (#ff00ff), Green (#00ff80)
- **Dynamic Particles**: CSS-based floating animations
- **Responsive Typography**: Fluid font sizing
- **Touch Optimizations**: 44px minimum touch targets

### 🎵 **Audio System**
- **Web Audio API**: Real-time sound synthesis
- **Musical Scales**: Victory sounds menggunakan Do-Mi-Sol-Do
- **Frequency Modulation**: Different tones untuk win/lose
- **Cross-browser Support**: Fallback untuk older browsers

## 📁 Struktur File

```
Rock paper scissors/
├── index.html              # Main HTML dengan semantic structure
├── style.css               # Advanced CSS dengan glassmorphism
├── script.js               # Modern JavaScript dengan ES6+
├── README.md               # Comprehensive documentation
└── .github/
    └── copilot-instructions.md  # Development guidelines
```

## 🎨 CSS Features Detail

### 🔮 **Glassmorphism Effects**
```css
backdrop-filter: blur(20px);
background: rgba(255, 255, 255, 0.05);
border: 1px solid rgba(255, 255, 255, 0.1);
box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
```

### 🌈 **Advanced Animations**
- **Victory Bounce**: Scale + rotation dengan ease-out
- **Rainbow Effect**: Hue-rotate 360° untuk win streak
- **Particle Float**: Multi-layer background animations
- **Glow Effects**: Dynamic box-shadow dengan color transitions
- **Emoji Rain**: Positioned absolute dengan random timing

### 📱 **Responsive Breakpoints**
- **Desktop**: ≥768px - Full features dengan hover effects
- **Tablet**: 480px-768px - Optimized layout
- **Mobile**: ≤480px - Touch-first design
- **Mobile Small**: ≤320px - Compact mode

## 🧠 JavaScript Features Detail

### 🎮 **Game Logic**
```javascript
// Modern game state management
let gameState = {
    playerScore: 0,
    computerScore: 0,
    winStreak: 0,
    isActive: true
};

// Dynamic effect system
function createVisualEffect(type, intensity) {
    // Procedural effect generation
}
```

### 🎪 **Effect System**
- **Modular Animations**: Reusable effect functions
- **Cleanup Management**: Automatic animation cleanup
- **Performance Optimized**: RAF untuk smooth animations
- **Error Handling**: Graceful fallbacks

### 🔊 **Audio Features**
- **Dynamic Synthesis**: Real-time audio generation
- **Musical Theory**: Proper chord progressions
- **Volume Control**: Optimized untuk tidak mengganggu
- **Browser Compatibility**: Progressive enhancement

## � Cara Menjalankan

### 🌐 **Method 1: Direct Browser**
1. **Download/Clone** repository ini
2. **Double-click** pada `index.html`
3. **Game langsung berjalan** di browser default

### ⚡ **Method 2: Live Server (Recommended)**
1. **Install VS Code** + Live Server extension
2. **Open folder** project di VS Code
3. **Right-click** pada `index.html` → "Open with Live Server"
4. **Auto-reload** saat development

### 🌍 **Method 3: Local Server**
```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

Kemudian buka `http://localhost:8000`

## � Performance Features

### ⚡ **Optimizations**
- **CSS Hardware Acceleration**: `transform3d()` untuk smooth animations
- **Efficient DOM Queries**: Cached selectors
- **Event Debouncing**: Optimized interaction handling
- **Animation Cleanup**: Automatic memory management
- **Lazy Loading**: Effects loaded on demand

### 📱 **Mobile Optimizations**
- **Touch Events**: Native touch handling
- **Viewport Optimization**: Proper meta tags
- **No Zoom**: `user-scalable=no` untuk game experience
- **Fast Tap**: `-webkit-tap-highlight-color: transparent`
- **Reduced Motion**: Respect user preferences

## � Customization Guide

### 🎨 **Mengubah Tema**
```css
/* Update color variables di style.css */
:root {
    --primary-cyan: #00ffff;
    --primary-magenta: #ff00ff;
    --primary-green: #00ff80;
    --background-dark: #0f0f23;
}
```

### 🎵 **Sound Customization**
```javascript
// Update frequencies di script.js
const victoryChord = [523.25, 659.25, 783.99, 1046.50]; // C-E-G-C
const defeatChord = [523.25, 466.16, 415.30, 369.99];   // C-Bb-Ab-F#
```

### 🏆 **Win Streak Settings**
```javascript
// Ubah trigger win streak
if (winStreak >= 5) { // Default: 3
    createSuperVictoryEffect();
}
```

## 🎪 Advanced Features

### � **Easter Eggs**
- **Konami Code**: Implementasi tersembunyi untuk cheat codes
- **Win Streak Messages**: Dynamic messages berdasarkan streak
- **Secret Combinations**: Hidden gameplay elements
- **Developer Console**: Debug mode untuk testing

### 🔮 **Future Enhancements**
- **AI Difficulty Levels**: Smart computer opponents
- **Tournament Mode**: Best of series gameplay
- **Multiplayer Support**: Real-time player vs player
- **Statistics Dashboard**: Detailed performance analytics
- **Theme Customizer**: User-selectable themes
- **Save System**: Persistent game progress

## 🐛 Troubleshooting

### ❗ **Common Issues**

**🚫 Game tidak load:**
```
✅ Check: JavaScript enabled di browser
✅ Check: File integrity (semua file ada)
✅ Check: Browser compatibility (Chrome/Firefox recommended)
```

**🎵 Audio tidak berfungsi:**
```
✅ Check: Browser autoplay policy
✅ Check: Volume/mute settings
✅ Check: Web Audio API support
✅ Try: User interaction first (click button)
```

**📱 Mobile issues:**
```
✅ Check: Viewport meta tag
✅ Check: Touch event support
✅ Try: Force refresh (Ctrl+F5)
✅ Try: Clear browser cache
```

**🎨 Animations patah-patah:**
```
✅ Check: Hardware acceleration enabled
✅ Check: Browser performance settings
✅ Try: Close other tabs
✅ Try: Reduce motion in accessibility settings
```

### 🔍 **Debug Mode**
```javascript
// Tambahkan di console untuk debug
window.debugMode = true;
console.log('Game state:', { playerScore, computerScore, winStreak });
```

## 📱 Browser Compatibility

| Browser | Desktop | Mobile | Features |
|---------|---------|---------|----------|
| **Chrome** | ✅ Full | ✅ Full | Recommended |
| **Firefox** | ✅ Full | ✅ Full | Excellent |
| **Safari** | ✅ Good | ✅ Good | Minor audio delays |
| **Edge** | ✅ Full | ✅ Full | Perfect compatibility |
| **IE** | ❌ No | ❌ No | Not supported |

### 🎯 **Feature Support**
- **Glassmorphism**: Chrome 76+, Firefox 103+, Safari 14+
- **Web Audio API**: All modern browsers
- **CSS Animations**: Universal support
- **Touch Events**: All mobile browsers

## � License & Credits

### 📜 **License**
```
MIT License - Feel free to use, modify, and distribute
Perfect untuk pembelajaran dan pengembangan lebih lanjut
```

### 👨‍💻 **Development**
- **Concept**: Classic Rock Paper Scissors
- **Design**: Modern Glassmorphism + Dark Mode
- **Implementation**: Vanilla JavaScript (ES6+)
- **Optimization**: Performance-first approach

### 🙏 **Acknowledgments**
- **Design Inspiration**: Modern UI/UX trends 2025
- **Color Palette**: Cyberpunk aesthetic
- **Animation Library**: Custom CSS animations
- **Sound Design**: Musical theory implementation

---

## 🎉 **Enjoy the Game!**

Game ini mendemonstrasikan implementasi modern dari game klasik dengan:
- ✨ **Advanced CSS** dengan glassmorphism dan animations
- 🚀 **Modern JavaScript** dengan ES6+ features  
- 🎨 **Responsive Design** yang mobile-first
- 🎵 **Interactive Audio** dengan Web Audio API
- 🏆 **Engaging UX** dengan reward systems

**Perfect untuk portfolio, pembelajaran, atau just for fun!** 🎯

### 🔗 **Quick Links**
- 🎮 [Play the Game](https://iam-rizz.github.io/rock-paper-scissors/)
- 📖 [View Source](https://github.com/iam-rizz/rock-paper-scissors)
- 🐛 [Report Issues](https://github.com/iam-rizz/rock-paper-scissors/issues)
- ⭐ [Star on GitHub](https://github.com/iam-rizz/rock-paper-scissors)
