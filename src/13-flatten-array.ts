export function recursiveFlatten<T>(arrToFlat: any[]) {
  const flatten: T[] = [];

  function appendAll(arr: any) {
    if (!Array.isArray(arr)) {
      return flatten.push(arr);
    }

    for (let element of arr) {
      appendAll(element);
    }
  }

  appendAll(arrToFlat);
  return flatten;
}

export function iterativeFlatten(arrayToFlat: any[]) {
  let i;
  const placeholder = [arrayToFlat];
  const lastIndex = [-1];
  const ans = [];

  while (placeholder.length) {
    const arr = placeholder.pop();
    if (!arr) {
      break;
    }
    arrayToFlat = arr;
    const lI = lastIndex.pop();
    if (lI === undefined) {
      return;
    }

    i = lI + 1;
    for (; i < arrayToFlat.length; ++i) {
      if (Array.isArray(arrayToFlat[i])) {
        placeholder.push(arrayToFlat);
        lastIndex.push(i);
        arrayToFlat = arrayToFlat[i];
        i = -1;
      } else ans.push(arrayToFlat[i]);
    }
  }
  return ans;
}
