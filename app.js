/**
 * @desc - Flatten any level of nested array.
 * @function - flatten
 * @param {array} - arr :  any nested array e.g. [[1,2,[3]],4]
 * @return {array} - flat array values e.g.  [1,2,3,4]
 */
 const flatten =(arr)=> {
  return arr.reduce( (flat, toFlatten)=> {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

module.exports = {flatten};