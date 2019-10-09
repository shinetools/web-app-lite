interface Item {
  content: any;
  id: string;
  selected?: boolean;
  href: string;
}

interface Section {
  title: string;
  id: string;
  items: Item[];
}

export interface SectionListProps {
  sections: Section[];
}
