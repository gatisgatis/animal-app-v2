export type Animal = {
  name: string;
  type: string;
  description: string;
  img1: string;
  img2: string;
  img3: string;
  imgbox: string;
  filtered?: boolean;
};

export const allAnimals: Animal[] = [
  {
    name: 'Rembo',
    type: 'suns',
    description: 'Labs sunītis, garšo ēst',
    img1: 'https://cdn.cnn.com/cnnnext/dam/assets/191114120109-dog-aging-project-1-super-tease.jpg',
    img2: 'https://scx2.b-cdn.net/gfx/news/hires/2018/2-dog.jpg',
    img3: 'https://post.greatist.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg',
    imgbox: 'https://petguidereviews.com/wp-content/uploads/2019/02/cartoon-dog-names.jpg',
    filtered: false,
  },
  {
    name: 'Rokijs',
    type: 'lācis',
    description: 'Brūns lācis, 5-kārtējs pasaules čempions braukšanā ar vienriteni cirka lāču kategorijā vecuma grupā līdz 24 gadiem un svara kategorijā virs 140kg',
    img1: 'https://i.pinimg.com/originals/06/77/4e/06774e780ec8c85e2b0a966cd35a40cc.jpg',
    img2: 'https://pbs.twimg.com/media/DgxPflRX0AA1L8n.jpg',
    img3: 'https://www.askideas.com/media/11/Bear-With-Bicycle-Funny-Image.jpg',
    imgbox: 'https://image.freepik.com/free-vector/bear-cartoon-hand-drawn-style_42349-467.jpg',
    filtered: false,
  },
  {
    name: 'Reksis',
    type: 'suns',
    description: 'Lielisks suns, jo ir kaķa izmērā un uzvedas kā kaķis!',
    img1: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chihuahua-dog-running-across-grass-royalty-free-image-1580743445.jpg?crop=0.655xw:0.983xh;0.107xw,0&resize=640:*',
    img2: 'https://images.ctfassets.net/aynow2efrlx4/4yF425sqCDxys5gmCczkFc/a74591606c24dcdee797962f4842d47b/Dachshunds-3.jpg?w=1000&h=1000',
    img3: 'https://www.thelabradorsite.com/wp-content/uploads/2018/07/small-dog-breed-long.jpg',
    imgbox: 'https://www.letsgetpet.com/wp-content/uploads/2020/02/Top_10_small_dog_breeds-730x450.jpg',
    filtered: false,
  },
  {
    name: 'Rudais',
    type: 'kaķis',
    description: 'Patīk ķert peles un ēst zivis. Mīļākā filma - \'Pussy, Pussy, Pussycat\'',
    img1: 'https://i.pinimg.com/originals/11/ba/21/11ba21afca043b7db7d7fe6015f024c9.jpg',
    img2: 'https://www.catster.com/wp-content/uploads/2018/01/Orange-tabby-cat-sleeping-with-eyes-closed.jpg',
    img3: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/study-of-a-ginger-cat-philip-eustace-stretton.jpg',
    imgbox: 'https://st.depositphotos.com/1967477/3715/v/950/depositphotos_37158639-stock-illustration-cute-cat-cartoon.jpg',
    filtered: false,
  },
  {
    name: 'Rūdis',
    type: 'bebrs',
    description: 'Garšo koki, patīk būvēt dambjus. Moto: Nebaidies no aizdambēšanas!',
    img1: 'https://www.beefmagazine.com/sites/beefmagazine.com/files/styles/article_featured_retina/public/GettyImages-1143334124.jpg?itok=6UNjGlk_',
    img2: 'https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F64feeeb4-4b58-11ea-b112-75acb94b3417.jpg?crop=3495%2C2330%2C508%2C490',
    img3: 'https://www.dw.com/image/18461438_101.jpg',
    imgbox: 'https://banner2.cleanpng.com/20180327/lye/kisspng-beaver-cartoon-drawing-clip-art-beaver-5ab9f9061e65b3.3641984315221373501245.jpg',
    filtered: false,
  },
  {
    name: 'Raitis',
    type: 'zilonis',
    description: 'Riebjas dzīvieki, kuriem īss deguns. Patīk peldēties.',
    img1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/African_elephant_warning_raised_trunk.jpg/1200px-African_elephant_warning_raised_trunk.jpg',
    img2: 'https://i.ytimg.com/vi/S-8RVNzyY88/maxresdefault.jpg',
    img3: 'https://media-cdn.tripadvisor.com/media/photo-s/15/16/37/ca/elefant.jpg',
    imgbox: 'https://st.depositphotos.com/1967477/4224/v/950/depositphotos_42240485-stock-illustration-cute-elephant-cartoon.jpg',
    filtered: false,
  },
];


export const uniqueTypes = (arr: Animal[]) :string [] => {
  const onlyTypes : string[] = [];
  arr.forEach((animal) => {
    if (!onlyTypes.includes(animal.type)) onlyTypes.push(animal.type);
  });
  return onlyTypes;
};
