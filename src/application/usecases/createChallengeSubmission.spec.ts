import { InMemoryChallengeRepository } from "../../tests/repositories/in-memory-challenge-repository"
import { InMemoryStudentRepository } from "../../tests/repositories/in-memory-student-repository"
import { CreateChallengeSubmission } from "./createChallengeSubmission"
import { Challenge } from "../../domain/entities/challenge"
import { Student } from "../../domain/entities/students"

describe('Create Challenge Submission | Use Cases', () => {
    it('Should be able to create a challenge submission', () => {
        const studentRepository = new InMemoryStudentRepository()
        const challengeRepository = new InMemoryChallengeRepository()
        
        const createChallengeSubmission = new CreateChallengeSubmission(
            studentRepository, challengeRepository
        )

        const student = Student.create({
            name: 'Alfredo',
            email: 'alfredo@gmail.com'
        })

        const challenge = Challenge.create({
            title: 'Challenge 01',
            instructionsUrl: 'http://example.com'
        })

        studentRepository.items.push(student)
        challengeRepository.items.push(challenge)

        const response = createChallengeSubmission.execute({
            studentId: student.id,
            challengeId: challenge.id
        })

        expect(response).toBeTruthy()
    })
})
