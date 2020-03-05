const formatFullname = require('../formatFullname');
const expect = require('chai').expect;

describe('FormatFullname', () => {
  it('should return an error if "fullName" arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(12)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function() {})).to.equal('Error');
  });

  it('should return an error if "fullName" arg length is 0', () => {
    expect(formatFullname('')).to.equal('Error');
  });

  it('should return the correct record when the size of each received letter is different', () => {
    expect(formatFullname('john doe')).to.equal('John Doe');
    expect(formatFullname('JOHN DOE')).to.equal('John Doe');
    expect(formatFullname('jOhN dOe')).to.equal('John Doe');
  });

  it('should return an error if there is more or less than two words in the string', () => {
    expect(formatFullname('John Doe Jane Doe')).to.equal('Error');
    expect(formatFullname('John')).to.equal('Error');
  });
});
