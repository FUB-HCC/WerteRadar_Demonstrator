const scalingFactor = 0.8

// ______________________________________________________________________
// ______________________________________________________________________
// ______________________________________________________________________


const scalePX = (px: number) => {
  const scaledPixels = Math.floor(px * scalingFactor);
  return `${scaledPixels}px`;
};

const maxHeight = 1024 * scalingFactor
const maxWidth =  1366 * scalingFactor

function mergeArrays(A: Array<Array<string>>, B: Array<Array<string>>) {
  const C = [];
  const minLength = Math.min(A.length, B.length);

  for (let i = 0; i < minLength; i++) {
    C.push(A[i], B[i]);
  }

  // If the arrays are of different lengths, add the remaining elements from the longer array
  if (A.length > B.length) {
    C.push(...A.slice(minLength));
  } else if (B.length > A.length) {
    C.push(...B.slice(minLength));
  }

  return C;
}


export { scalePX, maxHeight, maxWidth , mergeArrays};