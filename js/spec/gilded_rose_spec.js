describe("Gilded Rose", function() {

  /*it("should foo", function() {
    items = [ new Item("foo", 0, 0) ];
    update_quality();
    expect(items[0].name).toEqual("fixme");
  }); */

  it("reduces sell_in and quality by 1 for a normal item", function() {
    items = [ new Item("+5 Dexterity Vest", 10, 20) ];
    update_quality();
    expect(items[0].sell_in).toEqual(9);
    expect(items[0].quality).toEqual(19);  
  });

    it("quality degrades twice as fast after sell_in <= 0", function() {
    items = [ new Item("Elixir of the Mongoose", 0, 10) ];
    update_quality();
    expect(items[0].sell_in).toEqual(-1);
    expect(items[0].quality).toEqual(8);
  });




});
