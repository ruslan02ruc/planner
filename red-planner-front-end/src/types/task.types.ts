import { IBase } from "./root.types"

export enum EnumTaskPriorite {
	low =  'low',
	medium =  'medium',
	high =  'high'
}

export interface ITaskResponse extends IBase {
	name: string
	priority?: EnumTaskPriorite
	isCompleted: boolean
}

export type TypeTaskFormState = Partial<Omit<ITaskResponse, 'id' | 'updatedAt'>>X