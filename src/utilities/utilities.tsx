export const clearBoard = (context: CanvasRenderingContext2D | null) => {
    if (context) {
        context.clearRect(0, 0, 1000, 600);
    }
}

export interface IObjectBody {
    x: number;
    y: number;
  }
  
  export const drawObject = (
    context: CanvasRenderingContext2D | null,
    objectBody: IObjectBody[] | undefined, // Update the type to allow undefined
    fillColor: string,
    strokeStyle = "#146356"
  ) => {
    if (context && objectBody) { // Check if objectBody is defined
      objectBody.forEach((object: IObjectBody) => {
        context.fillStyle = fillColor;
        context.strokeStyle = strokeStyle;
        context?.fillRect(object.x, object.y, 20, 20);
        context?.strokeRect(object.x, object.y, 20, 20);
      });
    }
  };
  

  export const generateRandomPosition = (maxX: number, maxY: number): IObjectBody => {
    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);
    return { x, y };
};
  