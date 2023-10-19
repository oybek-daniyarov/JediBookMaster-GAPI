type BookItem = {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
  saleInfo: SaleInfo;
  accessInfo: AccessInfo;
  searchInfo?: SearchInfo; // This might be optional since it's related to the search query
  layerInfo?: LayerInfo; // Information about the layers in the book
};

type VolumeInfo = {
  title: string;
  subtitle?: string;
  authors?: string[]; // Authors can sometimes be missing
  publisher?: string;
  publishedDate?: string;
  description?: string;
  industryIdentifiers?: IndustryIdentifier[];
  readingModes: ReadingModes;
  pageCount?: number;
  printType: string;
  categories?: string[];
  averageRating?: number; // Average rating of the book
  ratingsCount?: number; // Number of ratings the book received
  maturityRating: string;
  allowAnonLogging: boolean;
  contentVersion: string;
  panelizationSummary?: PanelizationSummary;
  imageLinks?: ImageLinks;
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
};

type IndustryIdentifier = {
  type: string;
  identifier: string;
};

type ReadingModes = {
  text: boolean;
  image: boolean;
};

type PanelizationSummary = {
  containsEpubBubbles: boolean;
  containsImageBubbles: boolean;
};

type ImageLinks = {
  smallThumbnail: string;
  thumbnail: string;
  small?: string;
  medium?: string;
  large?: string;
  extraLarge?: string;
};

type SaleInfo = {
  country: string;
  saleability: string;
  isEbook: boolean;
  listPrice?: Price;
  retailPrice?: Price;
  buyLink?: string;
  offers?: Offer[];
  onSaleDate?: string; // Date when the book is on sale
};

type Price = {
  amount: number;
  currencyCode: string;
};

type Offer = {
  finskyOfferType: number;
  listPrice: MicroPrice;
  retailPrice: MicroPrice;
  giftable?: boolean; // Whether the book can be gifted or not
};

type MicroPrice = {
  amountInMicros: number;
  currencyCode: string;
};

type AccessInfo = {
  country: string;
  viewability: string;
  embeddable: boolean;
  publicDomain: boolean;
  textToSpeechPermission: string;
  epub: Availability;
  pdf: Availability;
  webReaderLink: string;
  accessViewStatus: string;
  quoteSharingAllowed: boolean;
};

type Availability = {
  isAvailable: boolean;
  acsTokenLink?: string;
};

type SearchInfo = {
  textSnippet: string;
};

type LayerInfo = {
  layers: Layer[];
};

type Layer = {
  layerId: string;
  volumeAnnotationsVersion: string;
  layerType: string;
};

export type { BookItem };
