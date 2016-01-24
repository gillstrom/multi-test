import test from 'ava';
import m from './';

test('Should return true', t => {
	t.true(m(65, [1, 5, 7, 65, 100]));
	t.true(m('foo', ['bar', 'foo', 'horse']));
	t.true(m(['foo', 'bar'], [['hello', 'there'], ['foo', 'bar']]));
	t.true(m({foo: 'bar', tex: 'mex'}, [{numbers: 123, horse: 'race'}, {foo: 'bar', tex: 'mex'}]));
});

test('Should return false', t => {
	t.false(m(65, [1, 5, 7, 66, 100]));
	t.false(m('foo', ['bar', 'f00', 'horse']));
	t.false(m(['foo', 'bar'], [['hello', 'there'], ['dog', 'tooth']]));
	t.false(m({foo: 'bar', tex: 'mex'}, [{numbers: 123, horse: 'race'}, {hello: 'everyone', tex: 'mex'}]));
});

test('Should throw', t => t.throws(() => m('hi', 123)));
