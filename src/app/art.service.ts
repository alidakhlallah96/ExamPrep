import { Injectable } from '@angular/core';
import { ART_LIST } from './shared/mock-art.data';
import { ArtPiece } from './models/art-piece';

@Injectable({ providedIn: 'root' })
export class ArtService {
  getArtPieces(): ArtPiece[] {
    return ART_LIST;
  }

  getArtPieceById(id: number): ArtPiece | undefined {
    return ART_LIST.find(a => a.id === id);
  }
}
