import { ArtPiece } from '../models/art-piece';

export const ART_LIST: ArtPiece[] = [
  {
    id: 1,
    name: 'Starry Night',
    artist: 'Vincent van Gogh',
    yearCreated: 1889,
    description: 'A famous painting depicting a swirling night sky above a quiet town.',
    imageUrl: 'assets/Image2.jpg'
  },
  {
    id: 2,
    name: 'Mona Lisa',
    artist: 'Leonardo da Vinci',
    yearCreated: 1503,
    description: 'A portrait of a woman with a mysterious smile, painted by Leonardo da Vinci.',
    imageUrl: 'assets/Image3.png'
  },
  {
    id: 3,
    name: 'The Persistence of Memory',
    artist: 'Salvador Dalí',
    yearCreated: 1931,
    description: 'A surreal painting featuring melting clocks in a desert landscape.',
    imageUrl: 'assets/Image1.jpg'
  }
];
