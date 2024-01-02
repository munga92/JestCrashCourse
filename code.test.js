////////////////////////// simple test requiring function example
const { addNumber, myFunction, fetchData, fetchPromise } =  require('./code');

test('adds 1 + 2 to the test', () => {
    expect(addNumber(1, 2)).toBe(3);
});

test('two plus two is four', () => {
    expect(2+2).toBe(4);
});


//////////////////////// toEqual examples
test('object assignment', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
});

//////////////////////// toBeFalsy examples
test('null is falsy', () => {
    const n = null;
    expect(n).toBeFalsy();
});

test('zero is falsy', () => {
    const n = 0;
    expect(n).toBeFalsy();
});

//////////////////////// toBeTruthy example
test('one is truthy', () => {
    const n = 1;
    expect(n).toBeTruthy();
});

////////////////////////// toThrow (an error) example
test('throws on invalid input', () => {
    expect(() => {
        myFunction('random text string');
    }).toThrow();
})

////////////////////////// asynchronous test code example
test('the data is peanut butter', done => {
    function callback(data) {
        try {
            expect(data).toBe('peanut butter');
            done();
        } catch (error) {
            done(error);
        }
    }
    fetchData(callback);
})

////////////////////////// promise test code example
test('the data is peanut butter', () => {
    return expect(fetchPromise()).resolves.toBe('peanut butter')
});

////////////////////////// async/await test code example
test('the data is peanut butter', async () => {
    const data = await fetchPromise();
    expect(data).toBe('peanut butter');
});


test('mock implementation of a basic function', () => {
    const mock = jest.fn(x => 42 + x);
    expect(mock(1)).toBe(43);
    expect(mock).toHaveBeenCalledWith(1);
});

test('spying on a method of an object', () => {
    const video = {
        play() {
            return true;
        },
    };

    const spy = jest.spyOn(video, 'play');
    video.play();

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
});