import { getHello} from './util';

describe('util', () => {
    test('should get hello', () => {
        const result = getHello();
        expect(result).toBe('hello');
    });
});