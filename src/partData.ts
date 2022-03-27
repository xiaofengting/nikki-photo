type unitName = 'dress' | 'hair' | 'eye' | 'eyebrow' | 'mouth' | 'hand' | 'frontHair'
  | 'front' | 'ts' | 'bg' | 'fw' |
  'dressLeft' | 'hairLeft' | 'eyeLeft' | 'eyebrowLeft' | 'mouthLeft' | 'handLeft' | 'frontHairLeft'
type colorUnitName = 'frontHairColor' | 'eyeColor' | 'eyebrowColor' | 'mouthColor' | 'bgColor' | 'fwColor'
  | 'frontHairColorLeft' | 'eyeColorLeft' | 'eyebrowColorLeft' | 'mouthColorLeft'

type partObj = {
  title: string,
  unit: unitName
  arr: string[]
  colorful: boolean
  unitColor?: colorUnitName
  bgPositionX?: string,
  bgPositionY?: string,
  bgSize?: string,
}

var PartFace = {
  heart: false,
  tear: false,
  star: false,
  red: false
}

var PartNormalData: Array<partObj> = [
  {
    title: '眼睛',
    unit: 'eye',
    colorful: true,
    unitColor: 'eyeColor',
    bgPositionX: '-40px',
    bgPositionY: '-60px',
    bgSize: '160px',
    arr: ['highlight1', 'highlight2', 'highlight3', 'wink1', 'wink2', 'wink3', 'smile', 'close']
  },
  {
    title: '眉毛',
    unit: 'eyebrow',
    colorful: true,
    unitColor: 'eyebrowColor',
    bgPositionX: '-40px',
    bgPositionY: '-40px',
    bgSize: '170px',
    arr: ['ptm', 'bzm', 'cm', 'dzm']
  },
  {
    title: '嘴巴',
    unit: 'mouth',
    colorful: true,
    unitColor: 'mouthColor',
    bgPositionX: '-130px',
    bgPositionY: '-190px',
    bgSize: '350px',
    arr: ['close1', 'close2', 'jz', 'kiss', 'open', 'smile']
  },
  {
    title: '头发',
    unit: 'frontHair',
    unitColor: 'frontHairColor',
    colorful: true,
    arr: ['wlh', 'qlhbj', 'qlh', 'sllh', 'sqf', 'sqfxbz', 'bzlh']
  },
  {
    title: '辫子',
    unit: 'hair',
    colorful: false,
    arr: ['dwztg', 'smwd', 'smwg', 'dmwg', 'nsdf', 'pfc', 'smwdb', 'zjchs']
  },
  {
    title: '裙子',
    unit: 'dress',
    colorful: false,
    bgPositionX: '-40px',
    bgPositionY: '-75px',
    bgSize: '150px',
    arr: ['czywq', 'dts', 'fslyq', 'hf', 'lmt', 'mydq', 'shq', 'syzf', 'xdwbdk', 'zcdgb'
    ]
  },
  {
    title: '手持',
    unit: 'hand',
    colorful: false,
    bgPositionX: '-40px',
    bgPositionY: '-130px',
    bgSize: '200px',
    arr: ['', 'cat', 'mc', 'milk', 'rabit']
  },
  {
    title: '头饰',
    unit: 'ts',
    colorful: false,
    arr: ['', 'butterHead', 'butterP', 'butterY', 'catEar', 'eyemask', 'leaf', 'rabitEar', 'star', 'sunGluss']
  },
]

var PartDecorateData: Array<partObj> = [
  {
    title: '装饰',
    unit: 'front',
    colorful: false,
    arr: ['', 'birth', 'flowers', 'smallF', 'star']
  },
  {
    title: '背景',
    unit: 'bg',
    colorful: true,
    unitColor: 'bgColor',
    arr: ['', 'circle', 'square', 'color', 'border']
  },
  {
    title: '背景装饰',
    unit: 'fw',
    colorful: true,
    unitColor: 'fwColor',
    bgPositionX: '-20px',
    bgPositionY: '-50px',
    bgSize: '170px',
    arr: ['', 'nikki', 'circleDot', 'squareDot']
  },
]

var PartLeftData: Array<partObj> = PartNormalData.map(item => {
  const itemLeft = Object.assign({}, item)
  itemLeft.unit += 'Left'
  itemLeft.title += '（左）'
  if (itemLeft.unitColor) itemLeft.unitColor += 'Left'
  return itemLeft
})

var imgSrc = import.meta.env.BASE_URL + 'assets'

export {
  PartNormalData, PartDecorateData, PartLeftData, unitName, colorUnitName, PartFace, imgSrc
}