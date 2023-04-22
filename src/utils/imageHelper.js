export const getImageSource = (src) => {
    // Check if the image source is an absolute URL or starts with a '/'
    if (src.startsWith('http://') || src.startsWith('https://')) {
      return src;
    }
  
    // If it starts with '../', replace it with '/'
    if (src.startsWith('../')) {
      const updatedSrc = src.replace('..', '');
      return updatedSrc;
    }
  
    // For other cases, add a leading '/' and return the modified path
    return `${src}`;
  };
  