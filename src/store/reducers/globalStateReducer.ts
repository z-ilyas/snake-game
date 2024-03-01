import { ISnakeCoord, IGlobalState } from './globalStateReducer.ts';
import { RIGHT, LEFT, UP, DOWN } from '../actions/actions.ts';


const initialState: IGlobalState = {
  snake: [
    { x: 580, y: 300 },
    { x: 560, y: 300 },
    { x: 540, y: 300 },
    { x: 520, y: 300 },
    { x: 500, y: 300 },
  ],
  disallowedDirection: ""
};

export const snakeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case RIGHT:
    case LEFT:
    case UP:
    case DOWN: {
      const newSnake = [...state.snake];
      const head = newSnake[0];
      let newHead: { x: number; y: number } = { ...head };

      switch (action.type) {
        case RIGHT:
          newHead.x += 20; // Move right
          break;
        case LEFT:
          newHead.x -= 20; // Move left
          break;
        case UP:
          newHead.y -= 20; // Move up
          break;
        case DOWN:
          newHead.y += 20; // Move down
          break;
        default:
          break;
      }

      newSnake.unshift(newHead); // Add new head
      newSnake.pop(); // Remove last segment

      return {
        ...state,
        snake: newSnake,
      };
    }
    default:
      return state;
  }
};

