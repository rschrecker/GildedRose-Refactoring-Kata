describe('Gilded Rose', function () {

    it('should foo', function () {
        const gildedRose = new Shop([new Item('foo', 0, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toEqual('foo');
    });

});


describe('Generic Item', function() {

    it('decreases its sellIn value', function () {
        const gildedRose = new Shop([new Item('foo', 1, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(0);
    });

    it('decreases its sellIn value below 0', function () {
        const gildedRose = new Shop([new Item('foo', 0, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(-1);
    });

    it('decreases its quality', function () {
        const gildedRose = new Shop([new Item('foo', 1, 2)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(1);
    });

    it('decreases its quality faster when sellIn <= 0', function () {
        const gildedRose = new Shop([new Item('foo', 0, 3), new Item('foo', -5, 3)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(1);
        expect(items[1].quality).toEqual(1);
    });

    it('does not decreases in quality below 0', function () {
        const gildedRose = new Shop([new Item('foo', -5, 1), new Item('foo2', 5, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(0);
        expect(items[1].quality).toEqual(0);
    });

});


describe('Aged Brie', function () {

    it('decreases its sellIn value', function () {
        const gildedRose = new Shop([new Item('Aged Brie', 1, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(0);
    });

    it('decreases its sellIn value below 0', function () {
        const gildedRose = new Shop([new Item('Aged Brie', 0, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(-1);
    });

    it('increases its quality', function () {
        const gildedRose = new Shop([new Item('Aged Brie', 1, 2)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(3);
    });

    it('increases its quality faster when sellIn <= 0', function () {
        const gildedRose = new Shop([new Item('Aged Brie', 0, 2)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(4);
    });

    it('does not inrease its quality above 50', function () {
        const gildedRose = new Shop([new Item('Aged Brie', 0, 49), new Item('Aged Brie', 0, 55)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(50);
        expect(items[0].quality).toEqual(50);
    });

});


describe('Sulfuras', function() {

    it('values do not change', function () {
        const gildedRose = new Shop([new Item('Sulfuras, Hand of Ragnaros', 0, 80)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(0);
        expect(items[0].quality).toEqual(80);
    });

});


describe('Backstage passes', function() {

    it('decreases its sellIn value', function () {
        const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 1, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(0);
    });

    it('decreases its sellIn value below 0', function () {
        const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(-1);
    });

    it('adjusts quality correctly', function () {
        let gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 11, 0),
            new Item('Backstage passes to a TAFKAL80ETC concert', 6, 0),
            new Item('Backstage passes to a TAFKAL80ETC concert', 1, 0)]);
        let items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(1);
        expect(items[1].quality).toEqual(2);
        expect(items[2].quality).toEqual(3);
        gildedRose = new Shop(items);
        items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(3);
        expect(items[1].quality).toEqual(5);
        expect(items[2].quality).toEqual(0);
        gildedRose = new Shop(items);
        items = gildedRose.updateQuality();
        expect(items[2].quality).toEqual(0);

    });

});


describe('Conjured Item', function() {

    it('decreases its sellIn value', function () {
        const gildedRose = new Shop([new Item('Conjured foo', 1, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(0);
    });

    it('decreases its sellIn value below 0', function () {
        const gildedRose = new Shop([new Item('Conjured foo', 0, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(-1);
    });

    it('decreases its quality', function () {
        const gildedRose = new Shop([new Item('Conjured foo', 1, 4)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(2);
    });

    it('decreases its quality faster when sellIn <= 0', function () {
        const gildedRose = new Shop([new Item('Conjured foo', 0, 4), new Item('Conjured foo', -5, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(0);
        expect(items[1].quality).toEqual(1);
    });

    it('does not decreases in quality below 0', function () {
        const gildedRose = new Shop([new Item('Conjured foo', -5, 3), new Item('Conjured foo2', 5, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(0);
        expect(items[1].quality).toEqual(0);
    });

});