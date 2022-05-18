var feedURLRoot = 'https://www.youtube.com/feeds/videos.xml?channel_id=',
    canonicalChannelURL = document.querySelector("link[rel='canonical']").href.replace('https://www.youtube.com/channel/',feedURLRoot);
window.open(canonicalChannelURL, 'feedWindow');