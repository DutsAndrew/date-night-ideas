interface DropDownProps {
  title: string,
  list: string[],
  handleUserLocationSelection?: (selection: string) => void,
  handleUserEventSelection?: (selection: string) => void,
}

interface DropDownItemProps {
  item: string,
}

interface DateNightOptionProps {
  handleUserSelection: (selection: 'self' | 'auto' | 'none') => void,
}

interface DisplayDateSelectionProps {
  location: string,
  event: string,
  startOver: () => void,
}

interface FallingHeartProps {
  heartAmount: number,
  startDelay: number,
  fallDuration: number,
}

export type {
  DropDownProps,
  DropDownItemProps,
  DateNightOptionProps,
  DisplayDateSelectionProps,
  FallingHeartProps,
};