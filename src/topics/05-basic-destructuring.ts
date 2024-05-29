
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: string;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: "2015"
    }
};

const song = 'New Song';

//Se puede cambiar el nombre de las propiedades al desestructurar como en este caso con anotherSong
//Se puede desestructurar un objeto dentro de otro como por ejemplo el author, const {details: {author} } = audioPlayer;
//pero es recomendado hacerlo fuera como el ejemplo final para que sea más legible
const {song: anotherSong, songDuration: duration, details } = audioPlayer;
const {author} = details;

// console.log('Song: ', anotherSong);
// console.log('Duration: ', duration);
// console.log('Duration: ', audioPlayer.details.author);
// console.log('Author: ', author);

// const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
// const trunks = dbz[3] || 'No hay personaje'
const [, , trunks = 'Not found']: string[] = ['Goku', 'Vegeta'];

console.error('Personaje 3: ', trunks);

export {};