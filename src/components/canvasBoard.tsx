export interface ICanvasBoard {
    height: number;
    width: number;
  }
  
const canvasBoard = ({ height, width }: ICanvasBoard) => {
    return (
      <canvas
        style={{
          border: "3px solid black",
        }}
        height={height}
        width={width}
      />
    );
};

export default canvasBoard;
