const Database = require("./db.js");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  //inserir dados na tabela
  await saveOrphanage(db, {
    lat: "-27.2235866",
    lng: "-49.6646164",
    name: "Lar de Amor",
    description:
      "Presta assistência a crianças de 06 a 15 anos que se encontrem em situação de risco e/ou vulnerabilidade",
    images: [
      "https://images.unsplash.com/photo-1604784674529-b56fe3b63d26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080",

      "https://images.unsplash.com/photo-1607273177086-5a1c81d78b9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080",
    ].toString(),
    instructions:
      "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visitas Das 8h até 18h",
    open_on_weekends: "1",
  })

  //consultar dados da tabela
  const selectedOorphaneges = await db.all("SELECT * FROM orphanages");
  console.log(selectedOorphaneges);

  //consultar somente 1 orfanato pelo id
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"');
  console.log(orphanage);
})
