import { Challenge } from '../../domain/entities/challenge';

export interface ChallengesRepository {
  findbyId(id: string): Promise<Challenge | null>
}