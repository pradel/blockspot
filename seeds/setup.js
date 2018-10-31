exports.seed = async function(knex) {
  // Clean database first
  await knex('places').del();
  await knex('cities').del();
  await knex('countries').del();

  const countries = [
    {
      id: 'd20eacc0-1260-4921-be06-e0ad2b276769',
      name: 'France',
      slug: 'france',
      latitude: 46.227638,
      longitude: 2.213749,
      google_id: 'ChIJMVd4MymgVA0R99lHx5Y__Ws',
    },
    {
      id: 'e43bb00f-f9aa-4a03-8c77-c2f9e4e74720',
      name: 'Germany',
      slug: 'germany',
      latitude: 51.165691,
      longitude: 10.451526000000058,
      google_id: 'ChIJa76xwh5ymkcRW-WRjmtd6HU',
    },
  ];

  await knex('countries').insert(countries);

  const cities = [
    {
      id: '84415b1d-a6e7-4874-af27-6d4d8c199789',
      name: 'Paris',
      slug: 'paris',
      latitude: 48.856614,
      longitude: 2.3522219000000177,
      google_id: 'ChIJD7fiBh9u5kcRYJSMaMOCCwQ',
      nb_places: 1,
      unsplash_id: 'R5scocnOOdM',
      country_id: countries[0].id,
    },
    {
      id: '9459a730-bc19-4c45-9523-45b8fd3ab152',
      name: 'Berlin',
      slug: 'berlin',
      latitude: 52.52000659999999,
      longitude: 13.404953999999975,
      google_id: 'ChIJAVkDPzdOqEcRcDteW0YgIQQ',
      nb_places: 1,
      unsplash_id: '7nbP_kHaaGo',
      country_id: countries[1].id,
    },
  ];

  await knex('cities').insert(cities);

  const places = [
    {
      id: 'fa7039ff-a124-421f-a68a-5317e070ac48',
      name: 'Sofs Bar',
      slug: 'sofs-bar',
      latitude: 48.8660933,
      longitude: 2.348004700000047,
      google_id: 'ChIJAz8SKxhu5kcRfjSIfZtVDH8',
      address: '43 Rue Saint-Sauveur, 75002 Paris, France',
      category: 'bar',
      city_id: cities[0].id,
    },
    {
      id: 'f4376abe-11e0-47dd-ad68-6a4a1ebec984',
      name: 'Room 77',
      slug: 'room-77',
      latitude: 52.4930774,
      longitude: 13.418007799999941,
      google_id: 'ChIJ58zg3ctPqEcRQhYj9DjRRTE',
      address: 'Graefestraße 77, 10967 Berlin, Germany',
      category: 'bar',
      city_id: cities[1].id,
    },
  ];

  await knex('places').insert(places);
};
