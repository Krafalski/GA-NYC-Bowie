describe('Letter', function() {
  var letter;
  
  beforeEach(function() {
    letter = new Letter('a');
  });
  
  it('should have a value which is a string', function() {
    // expect(letter.value).toBe('string');
    expect(letter.value).toEqual('a');
    // expect(letter.value).toMatch(/[a-z]/);
  });

  it('should be hidden by default', function() {
    expect(letter.hidden).toEqual(true);
    // expect(letter.hidden).toBe(true);
    // expect(letter.hidden).toBeTruthy();
  });

  describe('when hidden', function() {
    beforeEach(function() {
      letter.hidden = false;
      letter.hide();
    });
    
    it('should be hidden', function() {
      expect(letter.hidden).toBe(true);
    });

    it('should render as an _', function() {
      expect(letter.render()).toEqual('_');
    });
    
  });
  
  // it('should have a hide method which sets the hidden property to true', function() {
  //   letter.hidden = false;
  //   letter.hide();
  //   expect(letter.hidden).toBe(true);
  // });

  describe('when shown', function() {
    beforeEach(function() {
      letter.show();
    });

    it('should not be hidden', function() {
      expect(letter.hidden).not.toBe(true);
    });

    it('should render as a', function() {
      expect(letter.render()).toEqual('a');
    });
  });
  
});
