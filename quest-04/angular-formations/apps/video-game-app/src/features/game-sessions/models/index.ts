import { VideoGame } from "../../models/video-games";

export interface GameSession{
    videoGame: VideoGame
    beginDate: Date
    endDate: Date
    players: string[]
    status: 'pending' | 'in-progress' | 'completed'
}