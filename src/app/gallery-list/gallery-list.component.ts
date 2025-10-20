import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ArtService } from '../art.service';
import { ArtPiece } from '../models/art-piece';

@Component({
  selector: 'app-gallery-list',
  standalone: true,
  imports: [NgForOf, RouterLink],
  templateUrl: './gallery-list.component.html',
  styleUrl: './gallery-list.component.css'
})
export class GalleryListComponent implements OnInit {
  artPieces: ArtPiece[] = [];

  constructor(private artService: ArtService) {}

  ngOnInit(): void {
    // Initialize art pieces when component loads
    this.artPieces = this.artService.getArtPieces();
  }
}
