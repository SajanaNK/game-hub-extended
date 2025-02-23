import { Media } from '../entities/Media';
import useMedia from '../hooks/useMedia';

interface Props {
    id: number
}

const GameTrailer = ({ id }: Props) => {
    const { data: movie, isLoading, error } = useMedia<Media>(id, 'movies');
    const first = movie?.results[0];

    if (!first) {
        return null;
    }

    if (isLoading) {
        return null;
    }

    return (
        <video width="100%" height="100%" controls
            poster={first?.preview } style={{marginTop: '1rem'}}
        >
            <source src={first?.data[480]}
                type="video/mp4" />
        </video>
    )
}

export default GameTrailer