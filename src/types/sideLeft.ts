interface Story {
  id: string;
  title: string;
  selected: boolean;
}

export interface Folder {
  id: string;
  name: string;
  stories: Story[];
}
