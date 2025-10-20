import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ArtService } from '../art.service';
import { ArtPiece } from '../models/art-piece';

@Component({
  selector: 'app-gallery-detail',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './gallery-detail.component.html',
  styleUrl: './gallery-detail.component.css'
})
export class GalleryDetailComponent implements OnInit {
  artPiece?: ArtPiece;

  constructor(
    private route: ActivatedRoute,
    private artService: ArtService
  ) {}

  ngOnInit(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    if (!Number.isNaN(id)) {
      this.artPiece = this.artService.getArtPieceById(id);
    }
  }
}
