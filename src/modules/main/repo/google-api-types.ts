type BookItem = {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
  saleInfo: SaleInfo;
  accessInfo: AccessInfo;
  searchInfo?: SearchInfo;
  layerInfo?: LayerInfo;
};

type VolumeInfo = {
  title: string;
  subtitle?: string;
  authors?: string[];
  publisher?: string;
  publishedDate?: string;
  description?: string;
  industryIdentifiers?: IndustryIdentifier[];
  readingModes: ReadingModes;
  pageCount?: number;
  printType: string;
  categories?: string[];
  averageRating?: number;
  ratingsCount?: number;
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
  onSaleDate?: string;
};

type Price = {
  amount: number;
  currencyCode: string;
};

type Offer = {
  finskyOfferType: number;
  listPrice: MicroPrice;
  retailPrice: MicroPrice;
  giftable?: boolean;
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

type Book = {
  id: string;
  title: string;
  subtitle?: string;
  authors?: string[];
  publisher?: string;
  publishedDate?: string;
  description?: string;
  isbn?: IndustryIdentifier[];
  images?: ImageLinks;
  language: string;
  previewLink: string;
  infoLink: string;
  saleability: string;
  isEbook: boolean;
  searchText?: string;
};

export type { BookItem, ImageLinks, Book };
