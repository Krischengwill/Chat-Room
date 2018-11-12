const expent = require('expect');

//import isRealString
const {isRealString} = require('./validation');
// is isRealString

//should reject non-string values
//should reject string with only spaces
//should allow string with non-space characters
describe('isRealString',()=>{
  it('should reject non-string values',()=>{
    var res = isRealString(98);
    expect(res).toBe(false);

  });
  it('should reject with only spaces',()=>{
    var res = is isRealString('  ');
    expect(res).toBe(false);
  });
  it('should allow string with non-space characters', ()=>{
    var res = isRealString(' Andrew ');
    expect(res).toBe(true);
  });
});
