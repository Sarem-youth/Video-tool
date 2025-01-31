# YouTube Analytics Tool

An advanced YouTube analytics extension with comprehensive features for content creators. This tool provides real-time analytics, VPH tracking, competitor analysis, and more - all for free.

## Setup Instructions

### Prerequisites
1. Node.js (v14 or higher)
2. Google Chrome or Microsoft Edge browser
3. YouTube Data API key

### Getting Your YouTube Data API Key
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable YouTube Data API v3 for your project
4. Create credentials (API key)
5. Copy your API key

### Installation Steps

1. Clone the repository:
```bash
git clone <repository-url>
cd Video-tool
```

2. Add your YouTube API key:
- Open `/background/background.js`
- Replace `const YOUTUBE_API_KEY = '';` with your API key

3. Install the extension in Chrome/Edge:
- Open Chrome/Edge and go to `chrome://extensions` or `edge://extensions`
- Enable "Developer mode" (top-right corner)
- Click "Load unpacked"
- Select the `Video-tool` folder

### Usage Instructions

1. Pin the extension to your browser toolbar
2. Visit any YouTube video
3. Click the extension icon to access quick tools
4. Analytics panels will automatically appear below YouTube videos

### Features Available
- Real-time VPH (Views Per Hour) tracking
- Competitor analysis
- SEO optimization suggestions
- Keyword research
- Thumbnail analysis
- Channel audit
- Social media impact tracking
- Growth predictions
- Historical data analysis

### Maintenance

To update the extension:
1. Pull the latest changes
```bash
git pull origin main
```
2. Go to `chrome://extensions` or `edge://extensions`
3. Find the extension and click the refresh icon

### Troubleshooting

If analytics panels don't appear:
1. Check if your API key is correctly set
2. Ensure you haven't exceeded API quota limits
3. Try refreshing the page
4. Check browser console for errors
5. Reload the extension

API quota management:
- The free YouTube Data API has daily quotas
- Monitor your usage in Google Cloud Console
- Implement local caching if needed
- Use the provided rate limiting features

### Development Tips

To modify the extension:
1. All styles are in `content/styles.css`
2. Main functionality in `content/content.js`
3. API handling in `background/background.js`
4. Popup interface in `popup` folder

### Best Practices

1. Keep your API key private
2. Don't share your built extension
3. Monitor API usage regularly
4. Clear cache periodically
5. Update the extension when new commits are available

### Support

For issues or questions:
1. Check the browser console for errors
2. Review API quotas
3. Verify URL permissions
4. Check for conflicting extensions

### Security Notes

- Keep your API key confidential
- Don't install on shared computers
- Regular security updates recommended
- Monitor API access logs
- Review permissions regularly

### Upcoming Features
- Enhanced VPH predictions
- Advanced competitor tracking
- Bulk video analysis
- Custom metrics dashboard
- Export capabilities