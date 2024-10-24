

function getTenMinutesAgoTimestamp() {
    const now = Math.floor(Date.now() / 1000); 
    const tenMinutesAgo = now - 10 * 60;
    return tenMinutesAgo;
}

export default getTenMinutesAgoTimestamp;