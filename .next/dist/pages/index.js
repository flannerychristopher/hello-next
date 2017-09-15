'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require('../components/MyLayout');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/chris/Documents/hello-next/pages/index.js?entry';


var ShowLink = function ShowLink(_ref) {
  var show = _ref.show;

  return _react2.default.createElement(_link2.default, { as: '/p/' + show.id, href: '/post?id=' + show.id, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, show.name));
};

var Index = function Index(props) {
  return _react2.default.createElement(_MyLayout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement('h1', {
    'data-jsx': 1289622886,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, 'Ninja Turtles TV Shows'), _react2.default.createElement('ul', {
    'data-jsx': 1289622886,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, props.shows.map(function (_ref2) {
    var show = _ref2.show;
    return _react2.default.createElement('li', { key: show.id, 'data-jsx': 1289622886,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    }, _react2.default.createElement(ShowLink, { show: show, __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      }
    }));
  })), _react2.default.createElement(_style2.default, {
    styleId: 1289622886,
    css: 'h1,a{font-family:"Arial"}ul{padding:0}li{list-style:none;margin:5px 0}a{text-decoration:none;color:green}a:hover{opacity:0.6}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCdUIsQUFHNkIsQUFJVixBQUlNLEFBS0ssQUFLVCxVQWJkLEVBY0EsSUFWZSxJQVJmLENBYWMsUUFKZCxJQUtBIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2NocmlzL0RvY3VtZW50cy9oZWxsby1uZXh0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcblxuY29uc3QgU2hvd0xpbmsgPSAoeyBzaG93IH0pID0+IHtcbiAgcmV0dXJuKFxuICAgIDxMaW5rIGFzPXtgL3AvJHtzaG93LmlkfWB9IGhyZWY9e2AvcG9zdD9pZD0ke3Nob3cuaWR9YH0+XG4gICAgICA8YT57c2hvdy5uYW1lfTwvYT5cbiAgICA8L0xpbms+XG4gIClcbn1cblxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IChcbiAgPExheW91dD5cbiAgICA8aDE+TmluamEgVHVydGxlcyBUViBTaG93czwvaDE+XG4gICAgPHVsPlxuICAgICAge3Byb3BzLnNob3dzLm1hcCgoeyBzaG93IH0pID0+IChcbiAgICAgICAgPGxpIGtleT17c2hvdy5pZH0+XG4gICAgICAgICAgPFNob3dMaW5rIHNob3c9e3Nob3d9IC8+XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBoMSwgYSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XG4gICAgICB9XG5cbiAgICAgIHVsIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cblxuICAgICAgbGkge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICB9XG5cbiAgICAgIGE6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0xheW91dD5cbilcblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zZWFyY2gvc2hvd3M/cT1uaW5qYSt0dXJ0bGVzJylcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcblxuICBjb25zb2xlLmxvZyhgc2hvdyBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGEubGVuZ3RofWApXG5cbiAgcmV0dXJuIHtcbiAgICBzaG93czogZGF0YVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG4iXX0= */\n/*@ sourceURL=pages/index.js?entry */'
  }));
};

Index.getInitialProps = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
  var res, data;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _isomorphicUnfetch2.default)('https://api.tvmaze.com/search/shows?q=ninja+turtles');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;

          console.log('show data fetched. Count: ' + data.length);

          return _context.abrupt('return', {
            shows: data
          });

        case 8:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}));

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxheW91dCIsIkxpbmsiLCJmZXRjaCIsIlNob3dMaW5rIiwic2hvdyIsImlkIiwibmFtZSIsIkluZGV4IiwicHJvcHMiLCJzaG93cyIsIm1hcCIsImdldEluaXRpYWxQcm9wcyIsInJlcyIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxXQUFXLFNBQVgsQUFBVyxlQUFjO01BQVgsQUFBVyxZQUFYLEFBQVcsQUFDN0I7O3lCQUNFLEFBQUMsZ0NBQUssWUFBVSxLQUFoQixBQUFxQixJQUFNLG9CQUFrQixLQUE3QyxBQUFrRDtnQkFBbEQ7a0JBQUEsQUFDRTtBQURGO0dBQUEsa0JBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFBSTtBQUFKO0FBQUEsVUFGSixBQUNFLEFBQ0UsQUFBUyxBQUdkO0FBTkQ7O0FBUUEsSUFBTSxRQUFRLFNBQVIsQUFBUSxNQUFBLEFBQUMsT0FBRDt5QkFDWixBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLGNBQUE7Z0JBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQURGLEFBQ0UsQUFDQSwyQ0FBQSxjQUFBO2dCQUFBOztnQkFBQTtrQkFBQSxBQUNHO0FBREg7QUFBQSxXQUNHLEFBQU0sTUFBTixBQUFZLElBQUksaUJBQUE7UUFBQSxBQUFHLGFBQUgsQUFBRzsyQkFDbEIsY0FBQSxRQUFJLEtBQUssS0FBVCxBQUFjLGdCQUFkOztrQkFBQTtvQkFBQSxBQUNFO0FBREY7S0FBQSxnQ0FDRSxBQUFDLFlBQVMsTUFBVixBQUFnQjtrQkFBaEI7b0JBRmEsQUFDZixBQUNFO0FBQUE7O0FBTFIsQUFFRSxBQUNHO2FBSEw7U0FEWSxBQUNaO0FBQUE7QUFERjs7QUFvQ0EsTUFBQSxBQUFNLDJGQUFrQixtQkFBQTtXQUFBO2dFQUFBO2NBQUE7dUNBQUE7YUFBQTswQkFBQTtpQkFDSixpQ0FESSxBQUNKLEFBQU07O2FBQWxCO0FBRGdCLHlCQUFBOzBCQUFBO2lCQUVILElBRkcsQUFFSCxBQUFJOzthQUFqQjtBQUZnQiwwQkFJdEI7O2tCQUFBLEFBQVEsbUNBQWlDLEtBSm5CLEFBSXRCLEFBQThDOzs7bUJBSnhCLEFBTWYsQUFDRTtBQURGLEFBQ0w7O2FBUG9CO2FBQUE7MEJBQUE7O0FBQUE7Y0FBQTtBQUF4QixBQVdBOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2NocmlzL0RvY3VtZW50cy9oZWxsby1uZXh0In0=