export const getPrimaryPath = (path: string): string => {
  const arr = path.split('/');  
  if (arr.length <= 1) {
    return path;
  } else {
    let pathStr = '';
    arr.forEach((i,index) => {if(index > 0) pathStr += `/${i}`})
    return pathStr;
  }
};
