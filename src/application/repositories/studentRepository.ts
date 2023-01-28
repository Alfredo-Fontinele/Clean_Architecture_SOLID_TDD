import { Student } from "../../domain/entities/students"

export interface IStudentRepository {
    findById(id: string): Promise<Student | null>
}
