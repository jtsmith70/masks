# Costa Rican Indigenous Masks E-Commerce Website

A beautiful, modern e-commerce website for selling authentic Costa Rican indigenous masks.

## Features

- **Modern Design**: Elegant, responsive design with smooth animations
- **Product Gallery**: Displays all masks in a beautiful grid layout
- **Shopping Cart**: Full shopping cart functionality with local storage
- **Checkout Process**: Complete checkout form for order processing
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices

## Setup Instructions

1. **Copy Images**: 
   - Run the PowerShell script to copy images from `C:\masks` to the website folder:
   ```powershell
   .\copy-images.ps1
   ```
   - Or manually copy all `.jpg` files from `C:\masks` to the `masks` folder in this directory

2. **Open the Website**:
   - Simply open `index.html` in your web browser
   - Or use a local web server for better performance:
     ```powershell
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     ```

## File Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # Cart and functionality
├── products.js         # Product data
├── masks/              # Mask images folder
├── copy-images.ps1     # Script to copy images
└── README.md           # This file
```

## Product Information

- All masks are priced at **$50** each
- Each mask is a unique piece of authentic Costa Rican indigenous art
- Images are loaded dynamically from the `masks` folder

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge
- Firefox
- Safari
- Opera

## Notes

- The shopping cart uses browser localStorage to persist cart items
- Checkout form currently shows an alert (can be connected to a payment processor)
- All images should be in JPG format and placed in the `masks` folder
