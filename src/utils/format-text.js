export const formatText = (str) => {
    const arr = str.split('_');
    const result = [];
    for (const word of arr) {
      result.push(word.charAt(0).toUpperCase() +
                  word.slice(1).toLowerCase() // 👈️ lowercase remainder
      );
    }
    return result.join(' ');
};
