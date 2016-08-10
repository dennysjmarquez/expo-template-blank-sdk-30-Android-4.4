import {
  Asset,
  Font,
} from 'exponent';

export default function cacheAssets({images = [], fonts = []}) {
  return Promise.all([
    ...cacheImages(images),
    ...cacheFonts(fonts),
  ]);
}

function cacheImages(images) {
  return images.map(image => Asset.fromModule(image).downloadAsync());
}

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}
