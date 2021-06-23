import { getActivity } from '../../api/ActivityApi';

beforeEach(() => {
    fetch.resetMocks();
});

test('returns result if array', () => {
    const HELLO = "hello, world"
    fetch.mockResponseOnce(JSON.stringify({
        activity: HELLO
    }));

    const onResponse = jest.fn();
    const onError = jest.fn();

    return getActivity()
        .then(onResponse)
        .catch(onError)
        .finally(() => {
            expect(onResponse).toHaveBeenCalled();
            expect(onError).not.toHaveBeenCalled();

            expect(onResponse.mock.calls[0][0].activity).toEqual(HELLO);
        });
});

test('throws an error if empty object', () => {
    fetch.mockResponseOnce("not found");
    const onResponse = jest.fn();
    const onError = jest.fn();

    return getActivity()
        .then(onResponse)
        .catch(onError)
        .finally(() => {
            expect(onResponse).not.toHaveBeenCalled();
            expect(onError).toHaveBeenCalled();
        });
});