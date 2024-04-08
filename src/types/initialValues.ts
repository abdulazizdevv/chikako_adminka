export interface IinitialValues {
  image: string;
  name: {
    uz: string;
    ru: string;
    en: string;
    cr: string;
  };
}
export interface IBannerValue {
  url: string;
  image: {
    uz: string;
    ru: string;
    en: string;
    cr: string;
  };
}

export interface IProduct {
  images: string[];
  name: {
    uz: string;
    ru: string;
    en: string;
    cr: string;
  };
  description: {
    uz: string;
    ru: string;
    en: string;
    cr: string;
  };
  price: any;
  categoryId: any;
}
