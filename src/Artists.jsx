import { artists } from './store';

export default function Artists(){
    return (
        <>
            <h1>Artists 2019</h1>
            {artists.map(artist=>(
                <div id='card-body' key={artist.id}>
                    <div className='card'>
                        <h2>{artist.name}</h2>
                        <p>genre: {artist.genre}</p>
                        <p>Albums Released: {artist.albums}</p>
                    </div>
                </div>
            ))}
        </>

    )
}