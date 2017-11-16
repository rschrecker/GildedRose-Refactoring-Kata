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
                continue
            }

            // adjust quality

            if (item.name === 'Aged Brie') {
                if (item.sellIn > 0) {
                    item.quality += 1
                }
                else {
                    item.quality +=2
                }
            }
            else if (item.name.slice(0,'Backstage pass'.length) === 'Backstage pass') {
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
            else if (item.name.slice(0,'Conjured'.length) === 'Conjured') {
                if (item.sellIn >0) {
                    item.quality -= 2
                }
                else {
                    item.quality -= 4
                }
            }
            else { //generic items
                if (item.sellIn >0) {
                    item.quality -= 1
                }
                else {
                    item.quality -= 2
                }
            }

            // ensure quality is in 0 to 50

            if (item.quality < 0) {
                item.quality = 0
            }

            if (item.quality > 50) {
                item.quality = 50
            }

            // decrement sellIn

            item.sellIn -= 1;
        }

        return this.items;
    }
}
