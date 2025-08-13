# UNLOCK - Coming Soon Page

A modern, responsive coming soon page with countdown timer and email collection form.

## Features

- ✅ **Countdown Timer** - Counts down to August 3, 2024 launch date
- ✅ **Email Collection Form** - Collects visitor emails with validation
- ✅ **Responsive Design** - Works perfectly on all devices
- ✅ **Brand Colors** - Uses your UNLOCK brand colors (#E75E24 and #FDF8EC)
- ✅ **Modern UI** - Clean, professional design with smooth animations
- ✅ **Logo Integration** - Features your UNLOCK logo with padlock icon

## Files

- `index.html` - Main HTML structure
- `styles.css` - All styling and responsive design
- `script.js` - Countdown timer and form functionality
- `README.md` - This file

## How to Use

1. **Upload to your web server** - Simply upload all files to your web hosting
2. **Customize the launch date** - Edit the date in `script.js` line 4
3. **Connect email form** - Replace the simulated form submission with your backend

## Customization

### Change Launch Date
Edit line 4 in `script.js`:
```javascript
const launchDate = new Date('August 3, 2024 00:00:00').getTime();
```

### Connect Email Form to Backend
Replace the setTimeout section in `script.js` (around line 40) with your actual API call:

```javascript
// Example with fetch API
fetch('/api/subscribe', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: email })
})
.then(response => response.json())
.then(data => {
    showMessage('Thanks! You\'ll be the first to know when we launch.', 'success');
    document.getElementById('email').value = '';
})
.catch(error => {
    showMessage('Something went wrong. Please try again.', 'error');
});
```

### Brand Colors
The page uses your brand colors:
- Primary Orange: `#E75E24`
- Background Cream: `#FDF8EC`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Lightweight (under 50KB total)
- Fast loading
- Optimized for mobile
- No external dependencies except Google Fonts

## License

All rights reserved - UNLOCK 2024 