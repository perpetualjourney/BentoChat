// autogenerated by sql-generate v1.0.0 on Sat Jul 18 2015 12:02:30 GMT+0100 (BST)

var sql = require('sql');


/**
 * SQL definition for public.channels
 */
exports.channels = sql.define({
	name: 'channels',
	columns: [
		{ name: 'id' },
		{ name: 'group_id' },
		{ name: 'name' }
	]
});


/**
 * SQL definition for public.chat
 */
exports.chat = sql.define({
	name: 'chat',
	columns: [
		{ name: 'id' },
		{ name: 'author' },
		{ name: 'group_id' },
		{ name: 'channel_id' },
		{ name: 'body' },
		{ name: 'timestamp' }
	]
});


/**
 * SQL definition for public.groups
 */
exports.groups = sql.define({
	name: 'groups',
	columns: [
		{ name: 'id' },
		{ name: 'name' },
		{ name: 'timestamp' }
	]
});


/**
 * SQL definition for public.todos
 */
exports.todos = sql.define({
	name: 'todos',
	columns: [
		{ name: 'id' },
		{ name: 'group_id' },
		{ name: 'assignee_id' },
		{ name: 'creator_id' },
		{ name: 'timestamp' },
		{ name: 'title' },
		{ name: 'body' }
	]
});


/**
 * SQL definition for public.users
 */
exports.users = sql.define({
	name: 'users',
	columns: [
		{ name: 'id' },
		{ name: 'first_name' },
		{ name: 'last_name' },
		{ name: 'username' },
		{ name: 'hash' },
		{ name: 'email' }
	]
});


/**
 * SQL definition for public.users_groups
 */
exports.users_groups = sql.define({
	name: 'users_groups',
	columns: [
		{ name: 'group_id' },
		{ name: 'user_id' }
	]
});


/**
 * SQL definition for public.wiki
 */
exports.wiki = sql.define({
	name: 'wiki',
	columns: [
		{ name: 'id' },
		{ name: 'group_id' },
		{ name: 'timestamp' },
		{ name: 'creator_id' },
		{ name: 'title' },
		{ name: 'body' }
	]
});


