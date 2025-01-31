document.addEventListener('DOMContentLoaded', () => {
  const buttons = {
    rankTracker: document.getElementById('rankTracker'),
    bulkAnalyzer: document.getElementById('bulkAnalyzer'),
    thumbnailAnalyzer: document.getElementById('thumbnailAnalyzer'),
    keywordResearch: document.getElementById('keywordResearch'),
    videoAudit: document.getElementById('videoAudit'),
    scoreTracker: document.getElementById('scoreTracker'),
    viralFinder: document.getElementById('viralFinder'),
    channelCompare: document.getElementById('channelCompare'),
    batchAnalyzer: document.getElementById('batchAnalyzer')
  };

  const resultsPanel = document.getElementById('results');

  buttons.rankTracker.addEventListener('click', async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab.url.includes('youtube.com/watch')) {
      const videoId = new URL(tab.url).searchParams.get('v');
      const ranks = await chrome.runtime.sendMessage({
        type: 'GET_VIDEO_RANKS',
        videoId
      });
      displayResults(ranks);
    }
  });

  buttons.thumbnailAnalyzer.addEventListener('click', async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab.url.includes('youtube.com/watch')) {
      chrome.tabs.sendMessage(tab.id, { type: 'ANALYZE_THUMBNAIL' });
    }
  });

  buttons.videoAudit.addEventListener('click', async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab.url.includes('youtube.com/watch')) {
      const videoId = new URL(tab.url).searchParams.get('v');
      const audit = await chrome.runtime.sendMessage({
        type: 'AUDIT_VIDEO',
        videoId
      });
      displayAuditResults(audit);
    }
  });

  buttons.viralFinder.addEventListener('click', async () => {
    const trends = await chrome.runtime.sendMessage({
      type: 'FIND_VIRAL_POTENTIAL'
    });
    displayViralOpportunities(trends);
  });

  function displayResults(data) {
    resultsPanel.innerHTML = `
      <div class="result-item">
        <h3>Analysis Results</h3>
        <pre>${JSON.stringify(data, null, 2)}</pre>
      </div>
    `;
  }

  function displayAuditResults(audit) {
    resultsPanel.innerHTML = `
      <div class="audit-results">
        <h3>Video Audit Results</h3>
        <div class="audit-score">Overall Score: ${audit.score}%</div>
        <div class="audit-items">
          ${audit.items.map(item => `
            <div class="audit-item ${item.status}">
              <span>${item.title}</span>
              <span>${item.score}%</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  function displayViralOpportunities(trends) {
    resultsPanel.innerHTML = `
      <div class="viral-trends">
        <h3>Viral Opportunities</h3>
        ${trends.map(trend => `
          <div class="trend-item">
            <div class="trend-title">${trend.title}</div>
            <div class="trend-stats">
              <span>Growth: ${trend.growth}%</span>
              <span>Potential: ${trend.potential}%</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }
});
