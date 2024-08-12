import { TypographyPropsVariantOverrides } from "@mui/material/Typography";
import { OverridableStringUnion } from "@mui/types";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body3: true;
  }
}

export interface Tour {
  id: number;
  name: string;
  image: string;
  duration: number;
  rating: number;
  numberOfReviews: number;
  price: number;
}

export interface City {
  id: number;
  name: string;
  tours: Tour[];
}
