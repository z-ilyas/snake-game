import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { clearBoard, drawObject, generateRandomPosition } from "../utilities/utilities.tsx";

export interface ICanvasBoard {
  height: number;
  width: number;
}

const CanvasBoard = ({ height, width }: ICanvasBoard) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const snake1 = useSelector((state: IGlobalState) => state.snake);
  const [pos, setPos] = useState<IObjectBody>(
    generateRandomPosition(width - 20, height - 20)
  );

  useEffect(() => {
    setContext(canvasRef.current && canvasRef.current.getContext('2d'));
  }, []);

  useEffect(() => {
    if (context) {
      clearBoard(context);
      drawObject(context, snake1, "#91C483");
      drawObject(context, [pos], "#676FA3");
    }
  }, [context, snake1, pos]);

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

