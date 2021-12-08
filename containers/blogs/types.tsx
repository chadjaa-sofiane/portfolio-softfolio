interface IFrontMatter {
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
}

export interface IBlog {
  name: string;
  frontMatter: IFrontMatter;
}
