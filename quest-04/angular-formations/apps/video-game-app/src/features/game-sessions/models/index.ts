import { VideoGame } from "../../models/video-games";

export interface GameSession{
    videoGame: VideoGame
    beginDate: Date
    endDate: Date
    players: Friend[]
    status: 'pending' | 'in-progress' | 'completed'
}
export interface Friend{
    id: number,
    name: string
}
export interface GameSteam{
    id: number
    name:string
}