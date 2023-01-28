import { IChallengeRepository } from './../repositories/challengeRepository'
import { IStudentRepository } from './../repositories/studentRepository'
import { Submission } from "../../domain/entities/submissions"

type CreateChallengeSubmissionRequest = {
    studentId: string
    challengeId: string
}

export class CreateChallengeSubmission {
    constructor(
        private studentRepository: IStudentRepository,
        private challengeRepository: IChallengeRepository
    ) {}
    async execute({ studentId, challengeId }: CreateChallengeSubmissionRequest) {
        const student = await this.studentRepository.findById(studentId)
        if (!student) {
            throw new Error('Student does not exist')
        }
        const challenge = this.challengeRepository.findById(challengeId)
        if (!challenge) {
            throw new Error('Challenge does not exist')
        }
        return Submission.create({ studentId, challengeId })
    }
}
