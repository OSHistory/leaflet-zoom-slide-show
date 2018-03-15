const DEFAULT_FILL_COLOR = '#ffee2d';

export const images = [
  {
    zoom: 0,
    maxZoom: 6,
    minZoom: 0,
    imageDim: [11133, 8465],
    sourceTile: {
      tileUrl: 'http://localhost/Tb14_599_b_034/{z}/{x}/{y}.png'
    },
    overlays: {
      rectangles: [
        {
          bottomLeft: [732, 5380],
          topRight: [9304, 2360],
          tags: ['woman', 'alcohol'],
          data: {
            title: 'Betrunkene Frauen',
            abstract: 'Ein Name ganz unten auf der Liste'
          },
          style: {
            fillColor: DEFAULT_FILL_COLOR,
            color: '#000000'
          }
        },
        {
          bottomLeft: [37*4, 109*4],
          topRight: [158*4, 65*4],
          tags: ['woman', 'old'],
          data: {
            title: 'Der Zweite Name',
            abstract: 'Der Zeite Name aus der Liste'
          },
          style: {
            fillColor: DEFAULT_FILL_COLOR,
            color: '#ffffff'
          }
        },
        {
          bottomLeft: [514*4, 621*4],
          topRight: [878*4,556*4],
          tags: ['man', 'alcohol'],
          data: {
            title: 'Der letzte Kommentar',
            abstract: 'Der Teil knapp über dem winzigen Teil'
          },
          style: {
            fillColor: '#bbe3f1'
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
      imageUrl: './assets/img/rosetta.jpg'
    },
    overlays: {
      rectangles: [
        {
          bottomLeft: [45, 934.5],
          topRight: [730.5, 451.5],
          tags: ['woman', 'old'],
          data: {
            title: 'Die obere Bruchkante',
            abstract: 'Hier beginnt die obere Bruchkante'
          },
          image: 'sources/detail/page1-witwe.png',
          style: {
            fillColor: '#9a5b2d',
            color: '#90eeff',
            fillOpacity: 0.8
          }
        },
        {
          bottomLeft: [1656, 2472],
          topRight: [3063, 1797],
          tags: ['man', 'alcohol'],
          data: {
            title: 'Der Part über der Bruchlinie',
            abstract: 'Der Teil knapp über dem winzigen Teil'
          },
          image: 'sources/detail/page1-trunkenbold.png',
          style: {
            fillColor: DEFAULT_FILL_COLOR
          }
        }
      ],
      lines: [
        {
          coords: [[45, 954.5], [2913, 954.5]],
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
          style: {
            fillColor: '#2299f2',
            color: '#d9212e'
          }
        },
      ]
    }
  },
  {
    zoom: 0,
    maxZoom: 4,
    minZoom: 0,
    imageDim: [3540, 2520],
    sourceImage: {
      imageUrl: './assets/img/page1-resized.png'
    },
    overlays: {
      rectangles: [
        {
          bottomLeft: [36*4, 542*4],
          topRight: [150*4, 499*4],
          tags: ['woman', 'alcohol'],
          data: {
            title: 'Betrunkene Frauen',
            abstract: 'Ein Name ganz unten auf der Liste'
          },
          style: {
            fillColor: DEFAULT_FILL_COLOR,
            color: '#000000'
          }
        },
        {
          bottomLeft: [37*4, 109*4],
          topRight: [158*4, 65*4],
          tags: ['woman', 'old'],
          data: {
            title: 'Der Zweite Name',
            abstract: 'Der Zeite Name aus der Liste'
          },
          style: {
            fillColor: DEFAULT_FILL_COLOR,
            color: '#ffffff'
          }
        },
        {
          bottomLeft: [514*4, 621*4],
          topRight: [878*4,556*4],
          tags: ['man', 'alcohol'],
          data: {
            title: 'Der letzte Kommentar',
            abstract: 'Der Teil knapp über dem winzigen Teil'
          },
          style: {
            fillColor: '#bbe3f1'
          }
        }
      ]
    }
  }
];
