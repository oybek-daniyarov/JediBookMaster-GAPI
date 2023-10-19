enum QueryKeyEnum {
  IN_TITLE = "intitle",
  IN_AUTHOR = "inauthor",
  IN_PUBLISHER = "inpublisher",
  SUBJECT = "subject",
  ISBN = "isbn",
  LCCN = "lccn",
  OCLC = "oclc",
}

enum FilterEnum {
  PARTIAL = "partial",
  FULL = "full",
  FREE_EBOOKS = "free-ebooks",
  PAID_EBOOKS = "paid-ebooks",
  EBOOKS = "ebooks",
}

enum PrintTypeEnum {
  ALL = "all",
  BOOKS = "books",
}

enum ProjectionEnum {
  LITE = "lite",
  FULL = "full",
}

enum OrderByEnum {
  RELEVANCE = "relevance",
  NEWEST = "newest",
}

export { QueryKeyEnum, FilterEnum, PrintTypeEnum, ProjectionEnum, OrderByEnum };
