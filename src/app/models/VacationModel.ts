export class VacationModel {
  _id: string;
  destination: string;
  description: string;
  startDate: Date;
  endDate: Date;
  price: number;
  image: string;
  imageUrl: string;
  likesIds: string[];
  likesCount: number;
}
