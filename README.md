# Ematiq Assignment - Rectangles in the square

This is an assignment for Ematiq.
The target is to make a web app for calculating and filling rectangles in the given array 
(each value is the area of the rectangle) in the url 
and calculate if the rectangles can be filled to the square.  

## Conditions
1. The value of the rectangle area is within <0; 100>
2. The order of the rectangle in the array determines the order of the rectangles in the square. Starting from the left top. The first rectangle is filled from the top to the bottom, and its width must be calculated. The second one is filled to the width of the rest of the available space. This analogy is used for the rest of the values.
3. The URL format is as follows [http://localhost:5173/ematiq_assignment/?q=100-45-21-60-24](http://localhost:5173/ematiq_assignment/?q=100-45-21-60-24)
4. If the input in the URL is invalid, show the error message


## Getting Started

1. Run `yarn` or `npm install`
2. Run `yarn dev` or `npm run dev` for development
3. Open [http://localhost:5173/ematiq_assignment/?q=*YOUR_NUMBER_ARRAY*](http://localhost:5173/ematiq_assignment/?q=*YOUR_NUMBER_ARRAY*) with your browser to see the result