import { Entity } from "../../core/domain/entity"

type StudentProps = {
    name: string
    email: string
}

export class Student extends Entity<StudentProps> {
    private constructor(props: StudentProps, id?: string) {
        super(props, id)
    }
    static create(props: StudentProps, id?: string) {
        return new Student(props, id)
    }
}
