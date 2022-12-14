export interface CriticsRootObject {
  status: string;
  copyright: string;
  has_more: boolean;
  num_results: number;
  results: Result[];
}

export interface Result {
  display_title: string;
  mpaa_rating: string;
  critics_pick: number;
  byline: string;
  headline: string;
  summary_short: string;
  publication_date: string;
  opening_date: string;
  date_updated: string;
  link: Link;
  multimedia: Multimedia;
}

interface Multimedia {
  type: string;
  src: string;
  height: number;
  width: number;
}

interface Link {
  type: string;
  url: string;
  suggested_link_text: string;
}