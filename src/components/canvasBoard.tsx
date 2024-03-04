import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearBoard, drawObject, generateRandomPosition } from '../utilities/utilities.tsx';
import { moveSnake } from '../store/actions/actions.ts';

export interface ICanvasBoard {
  height: number;
  width: number;
}

const CanvasBoard = ({ height, width }: ICanvasBoard) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const snake1 = useSelector((state: IGlobalState) => state.snake);
  const disallowedDirection = useSelector((state: IGlobalState) => state.disallowedDirection);
  const dispatch = useDispatch();
  const pos = generateRandomPosition(width - 20, height - 20);

  const moveSnake = useCallback(
    (dx = 0, dy = 0, ds: string) => {
        if (dx > 0 && dy === 0 && ds !== "RIGHT") {
            dispatch(makeMove(dx, dy, MOVE_RIGHT));
        }

        if (dx < 0 && dy === 0 && ds !== "LEFT") {
            dispatch(makeMove(dx, dy, MOVE_LEFT));
        }

        if (dx === 0 && dy < 0 && ds !== "UP") {
            dispatch(makeMove(dx, dy, MOVE_UP));
        }

        if (dx === 0 && dy > 0 && ds !== "DOWN") {
            dispatch(makeMove(dx, dy, MOVE_DOWN));
        }
    },
    [dispatch]
);

  const handleKeyEvents = useCallback(
    (event: KeyboardEvent) => {
      if (disallowedDirection) {
        switch (event.key) {
          case "w":
            dispatch(moveSnake(0, -20, disallowedDirection));
            break;
          case "s":
            dispatch(moveSnake(0, 20, disallowedDirection));
            break;
          case "a":
            dispatch(moveSnake(-20, 0, disallowedDirection));
            break;
          case "d":
            event.preventDefault();
            dispatch(moveSnake(20, 0, disallowedDirection));
            break;
        }
      } else {
        if (
          disallowedDirection !== "LEFT" &&
          disallowedDirection !== "UP" &&
          disallowedDirection !== "DOWN" &&
          event.key === "d"
        )
          dispatch(moveSnake(20, 0, disallowedDirection)); //Move RIGHT at start
      }
    },
    [disallowedDirection, dispatch]
  );

  useEffect(() => {
    window.addEventListener("keypress", handleKeyEvents);

    return () => {
      window.removeEventListener("keypress", handleKeyEvents);
    };
  }, [disallowedDirection, handleKeyEvents]);

  useEffect(() => {
    setContext(canvasRef.current && canvasRef.current.getContext('2d'));
    drawObject(context, snake1, "#91C483");
    drawObject(context, [pos], "#676FA3");
  }, [context]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        border: "3px solid black",
      }}
      height={height}
      width={width}
    />
  );
};

export default CanvasBoard;
