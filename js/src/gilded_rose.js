function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = [
  new Item('+5 Dexterity Vest', 10, 20),
  new Item('Aged Brie', 2, 0),
  new Item('Elixir of the Mongoose', 5, 7),
  new Item('Sulfuras, Hand of Ragnaros', 0, 80),
  new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
  new Item('Conjured Mana Cake', 3, 6)
];

function isConjured(item) {
  return item.name.includes("Conjured");
}

function decreaseQuality(item, amount) {
  item.quality = Math.max(0, item.quality - amount);
}

function increaseQuality(item, amount = 1) {
  item.quality = Math.min(50, item.quality + amount);
}

function update_quality() {
  for (let item of items) {
    const isSulfuras = item.name === 'Sulfuras, Hand of Ragnaros';
    const isBrie = item.name === 'Aged Brie';
    const isBackstage = item.name === 'Backstage passes to a TAFKAL80ETC concert';

    if (!isBrie && !isBackstage) {
      if (!isSulfuras) {
        let degrade = isConjured(item) ? 2 : 1;
        if (item.sell_in <= 0) degrade *= 2;
        decreaseQuality(item, degrade);
      }
    } else {
      increaseQuality(item);
      if (isBackstage) {
        if (item.sell_in < 11) increaseQuality(item);
        if (item.sell_in < 6) increaseQuality(item);
      }
    }

    if (!isSulfuras) {
      item.sell_in -= 1;
    }

    if (item.sell_in < 0) {
      if (isBrie) {
        increaseQuality(item);
      } else if (isBackstage) {
        item.quality = 0;
      }
    }
  }
}
