

export interface Artist {
    name: string;
    //playcount: number;
    listeners: string;
    mbid: string;
    url: string;
    streamable: string;
    image: Array<Image>;
    toptracks: TopTrack;
    topalbums: TopAlbum;
    stats: Stat;
}

export interface APIResponse<T> {
    topartists: TopArtist
}

export interface TopArtist {
    artist: Array<Artist>
}
interface Image {
    text: string;
    size: string;
}

interface TopTrack {
    track: Array<Track>
}

export interface Track {
    name: string;
    playcount: string;
    listeners: string;
    image: Array<Image>;
}

interface TopAlbum {
    album: Array<Album>;
}

interface Album {
    name: string;
    playcount: number;
    mbid: string;
    url: string;
    image: Array<Image>;
}

interface Stat {
    listeners: string;
    playcount: string;
}