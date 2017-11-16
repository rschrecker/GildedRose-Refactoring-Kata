class Item {
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

class Shop {
    constructor(items = []) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {

            const item = this.items[i];

            if (item.name === 'Sulfuras, Hand of Ragnaros') {
                break
            }
            
            if (item.name === 'Aged Brie') {
                if (item.sellIn > 0) {
                    item.quality += 1
                }
                else {
                    item.quality +=2
                }
            }
            else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
                if (item.sellIn > 10) {
                    item.quality += 1
                }
                else if (item.sellIn > 5) {
                    item.quality +=2
                }
                else if (item.sellIn > 0) {
                    item.quality += 3
                }
                else {
                    item.quality = 0
                }
            }
            else {
                if (item.sellIn >0) {
                    item.quality -= 1
                }
                else {
                    item.quality -= 2
                }
            }

            if (item.quality < 0) {
                item.quality =0
            }

            if (item.quality > 50) {
                item.quality = 50
            }

            item.sellIn = item.sellIn - 1;
        }



        return this.items;
    }
}
