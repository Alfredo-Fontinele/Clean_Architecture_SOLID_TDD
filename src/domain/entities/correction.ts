import { Entity } from "../../core/domain/entity"

type CorrectionProps = {
    grade: number
    submissionId: string
    createdAt: Date
}

export class Correction extends Entity<CorrectionProps> {
    private constructor(props: CorrectionProps, id?: string) {
        super(props, id)
    }
    static create(props: CorrectionProps, id?: string) {
        return new Correction(props, id)
    }
}
