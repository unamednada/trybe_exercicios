interface IPlant {
  id: string,
  breed: string,
  needsSun: Boolean,
  origin: string,
  size: number,
  specialCare?: { waterFrequency: number }
}

export default IPlant;
