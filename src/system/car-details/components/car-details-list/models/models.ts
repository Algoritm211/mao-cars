import {AuctionExtended, Listing} from "@/core/interfaces/api/auction";
import React from "react";
import {TextSection} from "@/system/car-details/components/car-details-list/sections/text-section";
import {UserSection} from "@/system/car-details/components/car-details-list/sections/user-section";

enum SectionTypes {
  text = 'text',
  user = 'user',
}

type SectionNames = {
  [key in keyof AuctionExtended | keyof Listing]?:
  { type: SectionTypes, name: string }
}

export const SECTION_NAMES: SectionNames = {
  make: {name: 'Make', type: SectionTypes.text},
  model: {name: 'Model', type: SectionTypes.text},
  mileage: {name: 'Mileage', type: SectionTypes.text},
  vin: {name: 'VIN', type: SectionTypes.text},
  title_status: {name: 'Title Status', type: SectionTypes.text},
  location: {name: 'Location', type: SectionTypes.text},
  seller: {name: 'Seller', type: SectionTypes.user},
  engine: {name: 'Engine', type: SectionTypes.text},
  drive_train: {name: 'Drivetrain', type: SectionTypes.text},
  transmission: {name: 'Transmission', type: SectionTypes.text},
  body_style: {name: 'Body Style', type: SectionTypes.text},
  exterior_color: {name: 'Exterior Color', type: SectionTypes.text},
  interior_color: {name: 'Interior Color', type: SectionTypes.text},
  seller_type: {name: 'Seller Type', type: SectionTypes.text},
}

interface SectionComponents {
  text: React.FC<React.ComponentProps<typeof TextSection>>;
  user: React.FC<React.ComponentProps<typeof UserSection>>;
}

export const SECTION_COMPONENTS: SectionComponents = {
  text: TextSection,
  user: UserSection,
}
