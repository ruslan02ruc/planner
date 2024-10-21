import { IBase } from "./root.types"

export interface IPomodoroRoundResponse extends IBase {
	isCompleted?: Boolean
	totalSeconds: number
}

export interface IPomodoroSessionResponse extends IBase {
	isCompleted?: Boolean
	rounds?: IPomodoroRoundResponse[]
}

export type TypePomodoroSessionState = Partial<Omit<IPomodoroSessionResponse, 'id' | 'createAt'| 'updatedAt'>>
export type TypePomodoroRoundState = Partial<Omit<IPomodoroSessionResponse, 'id' | 'createAt'| 'updatedAt'>>