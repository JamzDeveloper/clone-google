export default interface ContextData {
  getResults: (type: string) => Promise<void>;
  results: {
    results?: [
      {
        description?: string;
        link?: any;
        title?: string;
        additional_links?: [
          {
            href: string;
            text: string;
          }
        ];
      }
    ];
    image_results?: [
      {
        image?: {
          alt?: string;
          src?: string;
        };
        link?: {
          domain?: string;
          href?: string;
          title?: string;
        };
      }
    ];
    entries?: [
      {
        id?: any;
        links?: [
          {
            href?: string;
            rel?: string;
            type?: string;
          }
        ];
        link?: string;
        title?: string;
        source?: any;
      }
    ];
  };
  isLoading: boolean;
  search: string;
  setSearch: (search: string) => void;
}
