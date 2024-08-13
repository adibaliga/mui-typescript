import React from "react";

declare global {
  namespace React {
    interface FC<P = {}> {
      tour?: Tour;
    }
  }

  interface Tour {
    id: number;
    name: string;
    image: string;
    duration: number;
    rating: number;
    numberOfReviews: number;
    price: number;
  }

  interface City {
    id: number;
    name: string;
    tours: Tour[];
  }
}

import { TypographyPropsVariantOverrides } from "@mui/material/Typography";
import { OverridableStringUnion } from "@mui/types";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body3: true;
  }
}
