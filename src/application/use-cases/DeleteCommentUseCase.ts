import { ICommentRepository } from "../../domain/repositories/ICommentRepository";

export class DeleteCommentUseCase {
  constructor(private commentRepository: ICommentRepository) {}

  async execute(commentId: string): Promise<void> {
    await this.commentRepository.delete(commentId);
  }
}
