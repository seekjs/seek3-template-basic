/**
 * Created by likaituan on 22/06/2017.
 */

exports.style = require('css.home');

exports.template = `
<ul class="aa">
	<script>var list = this.list;</script>
	<template sk-for="item in list">
		<li>{item.name}</li>
		<li>{item.sex}</li>
	</template>
</ul>
`;
//exports.template = require('tp.home');