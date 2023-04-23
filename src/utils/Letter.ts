type Position = {
  x: number;
  y: number;
};

type Item = Position;

const MAX_ATTEMPTS = 100;

const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const isOverlap = (
  item1: Item,
  item2: Item,
  itemWidth: number,
  itemHeight: number,
): boolean => {
  return (
    item1.x < item2.x + itemWidth &&
    item1.x + itemWidth > item2.x &&
    item1.y < item2.y + itemHeight &&
    item1.y + itemHeight > item2.y
  );
};

const generateNonOverlappingPosition = (
  positions: Position[],
  itemWidth: number,
  itemHeight: number,
  containerWidth: number,
  containerHeight: number,
): Position | null => {
  let newItem: Position;
  let isOverlapping: boolean;
  let attempts = 0;

  do {
    newItem = {
      x: getRandomInt(0, containerWidth - itemWidth),
      y: getRandomInt(0, containerHeight - itemHeight),
    };

    // eslint-disable-next-line @typescript-eslint/no-loop-func
    isOverlapping = positions.some((item) =>
      isOverlap(newItem, item, itemWidth, itemHeight),
    );

    attempts += 1;
  } while (isOverlapping && attempts < MAX_ATTEMPTS);

  if (attempts === MAX_ATTEMPTS) {
    return null;
  }

  return newItem;
};

const generateRandomPositions = (
  itemCount: number,
  itemWidth: number,
  itemHeight: number,
  containerWidth: number,
  containerHeight: number,
): Position[] => {
  const positions: Position[] = [];

  for (let i = 0; i < itemCount; i += 1) {
    const newItem = generateNonOverlappingPosition(
      positions,
      itemWidth,
      itemHeight,
      containerWidth,
      containerHeight,
    );

    if (newItem) {
      positions.push(newItem);
    } else {
      break;
    }
  }

  return positions;
};

export { generateRandomPositions };
