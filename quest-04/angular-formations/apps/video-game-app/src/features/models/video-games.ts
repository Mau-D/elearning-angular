/**
 * Représente un jeu vidéo dans le projet
 */

export interface VideoGame {
  id?: number;
  label: string;
  year: number;
}

export type VideoGames = VideoGame[];
