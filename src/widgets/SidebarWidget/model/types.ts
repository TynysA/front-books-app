export interface ISidebarWidget {
  items: {
    link: string;
    content: string;
    isChild?: boolean;
  }[];
  hiddenSidebarItems: string[];
}
