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

  it("never makes quality negative", function() {
    items = [ new Item("Elixir of the Mongoose", 5, 0) ];
    update_quality();
    expect(items[0].quality).toEqual(0); // Qualität bleibt bei 0
  });

    it("increases quality for Aged Brie", function() {
    items = [ new Item("Aged Brie", 2, 0) ];
    update_quality();
    expect(items[0].sell_in).toEqual(1);
    expect(items[0].quality).toEqual(1); // Qualität steigt
  });

    it("increases quality twice as fast for Aged Brie after sell_in", function() {
    items = [ new Item("Aged Brie", 0, 10) ];
    update_quality();
    expect(items[0].sell_in).toEqual(-1);
    expect(items[0].quality).toEqual(12); // Qualität +2
  });

  it("never increases quality above 50", function() {
    items = [ new Item("Aged Brie", 5, 50) ];
    update_quality();
    expect(items[0].quality).toEqual(50); // bleibt bei 50
  });

    it("Sulfuras never decreases in sell_in or quality", function() {
    items = [ new Item("Sulfuras, Hand of Ragnaros", 0, 80) ];
    update_quality();
    expect(items[0].sell_in).toEqual(0);
    expect(items[0].quality).toEqual(80);
  });

    it("increases quality by 1 when more than 10 days left for Backstage passes", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20) ];
    update_quality();
    expect(items[0].quality).toEqual(21);
  });

  it("increases quality by 2 when 10 days or less left for Backstage passes", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20) ];
    update_quality();
    expect(items[0].quality).toEqual(22);
  });

    it("increases quality by 3 when 5 days or less left for Backstage passes", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20) ];
    update_quality();
    expect(items[0].quality).toEqual(23);
  });

    it("drops quality to 0 after the concert", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20) ];
    update_quality();
    expect(items[0].quality).toEqual(0);
  });

  it("reduces quality by 2 for a conjured item", function() {
  items = [ new Item("Conjured Mana Cake", 3, 6) ];
  update_quality();
  expect(items[0].quality).toEqual(4); 
});

  it("degrades quality by 4 for Conjured items after sell_in", function() {
    items = [ new Item("Conjured Mana Cake", 0, 6) ];
    update_quality();
    expect(items[0].quality).toEqual(2); // Qualität -4
  });





});
