export function renderPlayList(anyPlaylist) {
  renderPlayListHeader(anyPlaylist.playlistInfo);
  renderTracksList(anyPlaylist.tracks);
}

function renderPlayListHeader(anyPlayListInfo) {
  const playLisTitleElement = document.createElement('h1');
  playLisTitleElement.innerText = anyPlayListInfo.title;
  document.body.append(playLisTitleElement);

  const playListCoverElement = document.createElement('img');
  playListCoverElement.src = anyPlayListInfo.coverImgUrl;
  playListCoverElement.style.width = '150px';
  playListCoverElement.style.height = '150px';
  document.body.append(playListCoverElement);
}

function renderTracksList(anyTrack) {
  const trackListElement = document.createElement('ul');

  for (let i = 0; i < anyTrack.length; i++) {
    const trackElement = createTrack(anyTrack[i]);
    trackListElement.append(trackElement);
  }

  document.body.append(trackListElement);
}

function createTrack(anyTrack) {
  const trackElement = document.createElement('li');
  trackElement.style.listStyle = 'none'
  const trackCoverElement = document.createElement('img');
  trackCoverElement.src = anyTrack.trackCoverImgUrl;
  trackCoverElement.style.width = '100px';
  trackCoverElement.style.height = '100px';

  const audio = document.createElement('audio')
  audio.src = anyTrack.trackFileUrl
  audio.controls = true
  trackElement.append(trackCoverElement);
  trackElement.append(audio)
  trackElement.append(anyTrack.artistName + ': ' + anyTrack.tracktitle);

  return trackElement;
}