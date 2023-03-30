export function getPrevious(volumes, volume) {
  const volumeIndex = volumes.findIndex((x) => x.slug === volume.slug);
  return volumeIndex === 0 ? null : volumes[volumeIndex - 1];
}

export function getNext(volumes, volume) {
  const volumeIndex = volumes.findIndex((x) => x.slug === volume.slug);
  return volumeIndex === volumes.length - 1 ? null : volumes[volumeIndex + 1];
}
