const BEVERAGE_DATA = [
  {
    id: 1,
    category: '티',
    name: '제주 유기농 말차로 만든 라떼',
    eng_name: 'Malcha Latte from Jeju Organic farm',
    description:
      '차광재배한 어린 녹찻잎을 곱게 갈아 깊고 진한 말차 본연의 맛과 향을 부드럽게 즐길 수 있는 제주 유기농 말차로 만든 라떼',
    img: '/images/hayoungGam/matcha-latte.jpg',
    kcal: 205,
    sodium: 130,
    fat: 5,
    sugars: 20,
    protein: 9,
    caffeine: 60,
    allergic: '우유',
  },
  {
    id: 2,
    category: '브루드 커피',
    name: '오늘의 커피',
    eng_name: 'Brewed Coffee',
    description: '신선하게 브루드(Brewed)되어 원두의 다양함이 살아있는 커피',
    img: '/images/hayoungGam/coffee.jpg',
    kcal: 5,
    sodium: 10,
    fat: 0,
    sugars: 0,
    protein: 0,
    caffeine: 260,
    allergic: '',
  },
  {
    id: 3,
    category: '브루드 커피',
    name: '아이스 커피',
    eng_name: 'Iced Coffee',
    description: '깔끔하고 상큼함이 특징인 시원한 아이스 커피',
    img: '/images/hayoungGam/iced-coffee.jpg',
    kcal: 5,
    sodium: 10,
    fat: 0,
    sugars: 0,
    protein: 0,
    caffeine: 140,
    allergic: '',
  },
  {
    id: 4,
    category: '에스프레소',
    name: '화이트 초콜릿 모카',
    eng_name: 'White Chocolate Mocha',
    description:
      '달콤하고 부드러운 화이트 초콜릿 시럽과 에스프레소를 스팀 밀크와 섞어 휘핑크림으로 마무리한 음료로 달콤함과 강렬한 에스프레소가 부드럽게 어우러진 커피',
    img: '/images/hayoungGam/white-chocolate-mocha.jpg',
    kcal: 345,
    sodium: 150,
    fat: 11,
    sugars: 35,
    protein: 11,
    caffeine: 75,
    allergic: '우유',
  },
  {
    id: 5,
    category: '에스프레소',
    name: '카페 라떼',
    eng_name: 'Caffe Latte',
    description:
      '풍부하고 진한 에스프레소가 신선한 스팀 밀크를 만나 부드러워진 커피 위에 우유 거품을 살짝 얹은 대표적인 커피 라떼',
    img: '/images/hayoungGam/latte.jpg',
    kcal: 180,
    sodium: 115,
    fat: 5,
    sugars: 13,
    protein: 10,
    caffeine: 75,
    allergic: '우유',
  },
  {
    id: 6,
    category: '에스프레소',
    name: '아이스 카페 라떼',
    eng_name: 'Iced Caffe Latte',
    description:
      '풍부하고 진한 농도의 에스프레소가 시원한 우유와 얼음을 만나 고소함과 시원함을 즐길 수 있는 대표적인 커피 라떼',
    img: '/images/hayoungGam/iced-latte.jpg',
    kcal: 110,
    sodium: 75,
    fat: 3.5,
    sugars: 8,
    protein: 6,
    caffeine: 75,
    allergic: '우유',
  },
  {
    id: 7,
    category: '기타 제조 음료',
    name: '시그니처 핫 초콜릿',
    eng_name: 'Signature Hot Chocolate',
    description:
      '깊고 진한 초콜릿과 부드러운 휘핑크림이 입안에서 사르르 녹는 프리미엄 초콜릿 음료',
    img: '/images/hayoungGam/hot-chocolate.jpg',
    kcal: 500,
    sodium: 105,
    fat: 9,
    sugars: 52,
    protein: 15,
    caffeine: 15,
    allergic: '우유',
  },
];

export default BEVERAGE_DATA;
