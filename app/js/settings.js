module.exports = {
  isDevel: true,
  inMante: true, // set to true and deploy if you want to set a maintenance message in all the services
  enabledLangs: ['en', 'sw'],
  mainDomain: 'tanbif.costech.or.tz', // used for cookies (without http/https)
  mainLAUrl: 'https://tanbif.costech.or.tz',
  baseFooterUrl: 'https://tanbif.costech.or.tz',
  services: {
    collectory: { url: 'https://collections.tanbif.costech.or.tz', title: 'Collections' },
    biocache: { url: 'https://tanbif.costech.or.tz', title: 'Occurrence records' },
    bie: { url: 'https://species.tanbif.costech.or.tz', title: 'Species' },
    regions: { url: 'https://regions.tanbif.costech.or.tz', title: 'Regions' },
    lists: { url: 'https://lists.tanbif.costech.or.tz', title: 'Species List' },
    spatial: { url: 'https://spatial.tanbif.costech.or.tz', title: 'Spatial Portal' },
    images: { url: 'https://images.tanbif.costech.or.tz', title: 'Images Service' },
    cas: { url: 'https://auth.tanbif.costech.or.tz', title: 'CAS' }
  },
  otherLinks: [
    { title: 'Datasets', url: 'https://collections.tanbif.costech.or.tz/datasets' },
    { title: 'Explore your area', url: 'http://records.tanbif.costech.or.tz/explore/your-area/' },
    { title: 'Datasets', url: 'https://collections.tanbif.costech.or.tz/datasets' },
    { title: 'twitter', url: '', icon: 'twitter' }
  ]
}
