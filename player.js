const playlist = {
  playlistInfo: {
    title: 'Hip-Hop-Hits',
    coverImgUrl: './cover.avif',
  },
  tracks: [
    {
      trackId: '1',
      artistName: 'Eminem',
      tracktitle: 'Rap God',
      trackFileUrl: './eminem_-_rap_god_(muztune.me).mp3',
      trackCoverImgUrl: './eminem.jpg',
    },
    {
      trackId: '2',
      artistName: '50 Cent',
      tracktitle: 'In da Club',
      trackFileUrl: './50cent_-_in_da_club_(muztune.me).mp3',
      trackCoverImgUrl: './50cent.jpg',
    },
    {
      trackId: '3',
      artistName: 'Шаман',
      tracktitle: 'Я руууускикиккккккй',
      trackFileUrl: './SHAMAN - Я РУССКИЙ.mp3',
      trackCoverImgUrl: './shaman-1.jpg',
    },
  ],
};

function renderPlayList(anyPlaylist) {
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

  const trackCoverElement = document.createElement('img');
  trackCoverElement.src = anyTrack.trackCoverImgUrl;
  trackCoverElement.style.width = '100px';
  trackCoverElement.style.height = '100px';

  const audio = document.createElement('audio')
  audio.src = anyTrack.trackFileUrl
  audio.controls = true
  trackElement.append(audio)
  trackElement.append(trackCoverElement);
  trackElement.append(anyTrack.artistName + ': ' + anyTrack.tracktitle);

  return trackElement;
}

renderPlayList(playlist);
