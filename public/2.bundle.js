webpackJsonp([2],{93:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=r(0),i=r(6),u=r(28),h=(r.n(u),r(29)),l=function(e){function t(r){n(this,t);var a=o(this,e.call(this,r));return a.handleSearchTermChange=a.handleSearchTermChange.bind(a),a.handleSearchSubmit=a.handleSearchSubmit.bind(a),a}return a(t,e),t.prototype.handleSearchTermChange=function(e){this.props.setSearchTerm(e.target.value)},t.prototype.handleSearchSubmit=function(e){e.preventDefault(),this.context.router.history.push("/search")},t.prototype.render=function(){return c.default.createElement("div",{className:"landing"},c.default.createElement("h1",null,"Vidi"),c.default.createElement("form",{onSubmit:this.handleSearchSubmit},c.default.createElement("input",{value:this.props.searchTerm,type:"text",placeholder:"Search",onChange:this.handleSearchTermChange})),c.default.createElement(i.c,{to:"/search"},"or Browse All"))},t}(c.Component);l.propTypes={searchTerm:c.PropTypes.string,setSearchTerm:c.PropTypes.func},l.contextTypes={router:c.PropTypes.object};var s=function(e){return{searchTerm:e.searchTerm}};t.default=r.i(u.connect)(s,h)(l)}});