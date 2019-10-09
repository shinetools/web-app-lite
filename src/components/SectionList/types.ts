interface Item {
  content: any;
  id: string;
  selected: boolean;
}

interface Section {
  title: string;
  id: string;
  items: Item[];
}

export interface SectionListProps {
  sections: Section[];
  onSelectItem: (item: Item) => void;
}
