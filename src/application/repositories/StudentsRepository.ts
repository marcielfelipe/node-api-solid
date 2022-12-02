import { Student } from '../../domain/entities/student';

export interface StudentsRepository {
  findbyId(id: string): Promise<Student | null>
}