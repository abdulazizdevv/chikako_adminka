export interface ICategory {
  _id: string;
  createdAt: string;
  image: string;
  name: {
    uz: string;
    ru: string;
    en: string;
    cr: string;
  };
  updatedAt: string;
  __v: number;
}
export interface IBanner {
  _id: string;
  createdAt: string;
  url: string;
  image: {
    uz: string;
    ru: string;
    en: string;
    cr: string;
  };
  updatedAt: string;
  __v: number;
}
