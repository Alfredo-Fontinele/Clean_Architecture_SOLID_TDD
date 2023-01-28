import { IStudentRepository } from './../../application/repositories/studentRepository'
import { Student } from '../../domain/entities/students'

export class InMemoryStudentRepository implements IStudentRepository {
    public items: Student[] = []

    async findById(id: string): Promise<Student | null> {
        const studentFound = await this.items.find(student => student.id === id)
        if (!studentFound) {
            return null
        }
        return studentFound
    }
}
