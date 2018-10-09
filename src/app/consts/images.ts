const DEFAULT_FILL_COLOR = '#ffee2d';

export const images = [
  {
    zoom: 3,
    maxZoom: 4,
    minZoom: 2,
    imageDim: [3923, 4656],
    sourceImage: {
      imageUrl: './assets/img/usa_independence.jpg'
    },
    overlays: {
      markers: [
        {
          coords: [2000, 3000],
          // icon: {
          //   iconUrl: './assets/icons/pencil.svg',
          //   iconSize: [32, 32]
          // },
          data: {
            title: 'An anchor point for a text marker'
          },
          text: {
            content: 'My Text Marker',
            tooltip: {
              permanent: true,
              direction: 'center',
              className: 'my-ex-tooltip',
              opacity: 1.0
            }
          }
        }
      ],
      rectangles: [
        {
          bottomLeft: [2458, 278],
          topRight: [3272, 92],
          tags: ['./assets/icons/calendar.svg'],
          data: {
            title: 'The famous date',
            link: 'https://en.wikipedia.org/wiki/Independence_Day_(United_States)'
          },
          // text: {
          //   content: 'foobar'
          // },
          popup: {
            display: true,
            contentFunc: function(data) {
              return "<h1>" + data.title + "</h1>";
            }
          },
          style: {
            fillColor: '#947c74',
            color: '#782705',
            fillOpacity: 0.6
          }
        },
        {
          bottomLeft: [2232, 586],
          topRight: [2386, 512],
          tags: ['./assets/icons/pencil.svg', './assets/icons/users.svg'],
          data: {
            title: 'The founding states',
            abstract: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
               reprehenderit in voluptate velit esse cillum dolore eu fugiat
               nulla pariatur. Excepteur sint occaecat cupidatat non proident,
               sunt in culpa qui officia deserunt mollit anim id est laborum.`
          },
          popup: {
            display: true,
            contentFunc: function(data) {
              return "<h1>" + data.title + "</h1>" + "<p>" + data.abstract + "</p>";
            },
          },
          style: {
            fillColor: '#787aaf',
            color: '#0b186c',
            fillOpacity: 0.4
          }
        }
      ],
      lines: [
        {
          coords: [[412, 958], [3774, 958]],
          data: {
            title: 'Unalienable rights',
            wiki: 'https://en.wikipedia.org/wiki/Natural_and_legal_rights',
            wikiText: 'Natural Rights'
          },
          // text: {
          //   content: 'A sample permanent popup'
          // },
          popup: {
            display: true,
            contentFunc: function(data) {
              return `<h1>${data.title}</h1>
                <p>Refers to
                  <a href=${data.wiki}>${data.wikiText}</a>
                </p>`;
            }
          },
          style: {
            color: '#2816b8',
            weight: 2.5,

          }
        }
      ],
      polygons: [
        {
          coords: [[374,1414], [3762,1414],
            [3762, 2112], [3098,2112], [3098, 2180],
            [162, 2180], [162,2180], [162, 1484],
            [374,1484]
          ],
          data: {
            title: 'The "He Has..." part'
          },
          style: {
            fillColor: '#2299f2',
            color: '#082d8a'
          }
        },
        {
          coords: [
            [1722, 3462], [2248, 3462], [2184, 3546], [2242, 3550], [2276, 3568],
            [2248, 3620], [2152, 3598], [1680, 3638], [1528, 3680],
            [1502, 3622], [1684, 3514]
          ],
          data: {
            title: 'John Hancocks signature',
            comment: 'It is very beautiful!'
          },
          popup: {
            display: true,
            contentFunc: function(data) {
              return `<h1>${data.title}</h1><p>Comment: ${data.comment}</p>`;
            }
          },
          style: {
            fillColor: '#94466e',
            color: '#4a070c'
          }
        }
      ]
    }
  },
  {
    zoom: 0,
    maxZoom: 4,
    minZoom: 0,
    imageDim: [3066, 3834],
    sourceImage: {
      imageUrl: './assets/img/rosetta_stone.jpg'
    },
    overlays: {
      rectangles: [
        {
          bottomLeft: [45, 934.5],
          topRight: [730.5, 451.5],
          tags: [],
          data: {
            title: 'The upper rectangle',
            abstract: ''
          },
          style: {
            fillColor: '#9a5b2d',
            color: '#90eeff',
            fillOpacity: 0.8
          }
        },
        {
          bottomLeft: [1656, 2472],
          topRight: [3063, 1797],
          tags: [],
          data: {
            title: 'A part above the smaller sized text',
            abstract: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
               reprehenderit in voluptate velit esse cillum dolore eu fugiat
               nulla pariatur. Excepteur sint occaecat cupidatat non proident,
               sunt in culpa qui officia deserunt mollit anim id est laborum.`
          },
          style: {
            fillColor: DEFAULT_FILL_COLOR
          }
        }
      ],
      lines: [
        {
          coords: [[45, 954.5], [2913, 954.5]],
          data: {
            title: 'Example of a linestring',
            custom: 'You can pass any value to data, which will be emitted'
          },

          style: {
            color: '#ee99fc',
            weight: 6.5
          }
        }
      ],
      polygons: [
        {
          coords: [[200, 1200], [2010, 900],
            [1700, 2100], [350, 1800], [200, 1200]],
          data: {
            title: 'A fancy polyon'
          },
          style: {
            fillColor: '#2299f2',
            color: '#d9212e'
          }
        },
      ]
    }
  }
];
