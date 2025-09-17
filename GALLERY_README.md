# Gallery System Documentation

## Overview
The gallery system automatically scans for images in the `public/images/gallery/` directory and displays them in a responsive grid with category filtering and modal lightbox functionality.

## Features
- ✅ **Automatic Image Detection**: Scans for images in the gallery directory
- ✅ **Category Filtering**: Images are automatically categorized based on filename patterns
- ✅ **Modal Lightbox**: Click any image to view it in full-screen modal
- ✅ **Responsive Design**: Works on desktop, tablet, and mobile
- ✅ **Static Export Compatible**: Works with Next.js static export for cPanel hosting
- ✅ **SEO Optimized**: Proper alt text and meta tags

## How to Add New Images

### 1. Add Images to Gallery Directory
Place your images in: `frontend/public/images/gallery/`

Supported formats:
- `.jpg` / `.jpeg`
- `.png`
- `.gif`
- `.webp`

### 2. Generate Gallery Configuration
Run the following command to update the gallery configuration:

```bash
cd frontend
npm run generate-gallery
```

This will:
- Scan the gallery directory for new images
- Generate appropriate alt text and categories
- Update the `utils/galleryImages.js` file
- Display a summary of found images

### 3. Automatic Categorization
Images are automatically categorized based on filename patterns:

| Pattern | Category |
|---------|----------|
| `office`, `meeting`, `room` | Office |
| `team`, `staff`, `people` | Team |
| `finance`, `money`, `banking` | Finance |
| `strategy`, `planning`, `discussion` | Strategy |
| `presentation`, `client` | Presentation |
| `media`, `news`, `publication` | Media |
| Other | General |

### 4. Custom Alt Text
For specific images, you can customize the alt text by updating the `generateAltText` function in `scripts/generateGalleryConfig.js`.

## File Structure
```
frontend/
├── public/
│   └── images/
│       └── gallery/           # Your images go here
│           ├── IMG-20250917-WA0003.jpg
│           ├── IMG-20250917-WA0004.jpg
│           └── ...
├── utils/
│   └── galleryImages.js       # Auto-generated configuration
├── scripts/
│   └── generateGalleryConfig.js # Gallery generation script
└── pages/
    └── gallery.js             # Gallery page component
```

## Usage in Code

### Import Gallery Configuration
```javascript
import { galleryImages, getCategories, getImagesByCategory } from '../utils/galleryImages'
```

### Get All Images
```javascript
const allImages = galleryImages
```

### Get Images by Category
```javascript
const officeImages = getImagesByCategory('Office')
const allCategories = getCategories()
```

## Static Export Compatibility

The gallery system is fully compatible with Next.js static export:

1. **Image Paths**: Uses relative paths (`/images/gallery/...`) that work with static hosting
2. **No Server Dependencies**: All image data is pre-generated at build time
3. **Client-Side Filtering**: Category filtering works entirely in the browser
4. **Modal Functionality**: Lightbox modal works without server-side rendering

## Building for Production

```bash
# Generate gallery configuration
npm run generate-gallery

# Build for static export
npm run build

# The static files will be in the 'out' directory
```

## Troubleshooting

### Images Not Showing
1. Check that images are in `public/images/gallery/`
2. Verify image file extensions are supported
3. Run `npm run generate-gallery` to update configuration
4. Check browser console for 404 errors

### Categories Not Working
1. Run `npm run generate-gallery` to regenerate categories
2. Check that image filenames match the pattern rules
3. Manually update categories in `utils/galleryImages.js` if needed

### Modal Not Opening
1. Check that `ImageModal` component is properly imported
2. Verify that image paths are correct
3. Check browser console for JavaScript errors

## Customization

### Adding New Categories
1. Update the `generateCategory` function in `scripts/generateGalleryConfig.js`
2. Run `npm run generate-gallery` to regenerate configuration

### Changing Image Layout
Edit the gallery grid in `pages/gallery.js`:
```javascript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
```

### Modifying Modal Behavior
Edit the `ImageModal` component in `components/ImageModal.js`
