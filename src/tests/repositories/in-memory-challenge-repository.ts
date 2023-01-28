import { IChallengeRepository } from '../../application/repositories/challengeRepository'
import { Challenge } from '../../domain/entities/challenge'

export class InMemoryChallengeRepository implements IChallengeRepository {
    public items: Challenge[] = []

    async findById(id: string): Promise<Challenge | null> {
        const challengeFound = await this.items.find(student => student.id === id)
        if (!challengeFound) {
            return null
        }
        return challengeFound
    }
}
