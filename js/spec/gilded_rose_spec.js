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
        const gildedRose = new Shop([new Item('foo', 1, 2), new Item('foo2', 5, 55)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(1);
        expect(items[1].quality).toEqual(54);
    });

    it('decreases its quality faster when sellIn = 0', function () {
        const gildedRose = new Shop([new Item('foo', 0, 3)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(1);
    });

    it('decreases its quality faster when sellIn = 0', function () {
        const gildedRose = new Shop([new Item('foo', 0, 3)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(1);
    });

    it('does not decreases in quality below 0', function () {
        const gildedRose = new Shop([new Item('foo', -5, 1), new Item('foo2', 1, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(0);
        expect(items[0].quality).toEqual(0);
    });

});