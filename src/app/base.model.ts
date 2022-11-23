//Readonly - To convert the varable only reading.
export interface BaseModel {
  readonly id: number | string,
  readonly createdAt: Date,
  updatedAt: Date
}
