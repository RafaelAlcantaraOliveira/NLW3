const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
  //inserir dados na tabela
  // await saveOrphanage(db, {
  //   lat: "-27.222633",
  //   lng: "-49.6555874",
  //   name: "Lar das Meninos",
  //   about:
  //     "Presta assistência a crianças de 06 a 15 anos que se encontrem em situação de risco e/ou vulnerabilidade",
  //   whatsapp: "945711147",
  //   images: [
  //     "https://images.unsplash.com/photo-1604784674529-b56fe3b63d26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080",

  //     "https://images.unsplash.com/photo-1607273177086-5a1c81d78b9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080",
  //   ].toString(),
  //   instructions:
  //     "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
  //   opening_hours: "Horário de visitas Das 8h até 18h",
  //   open_on_weekends: "0"
  // }) 

  //consultar dados da tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages")
  console.log(selectedOrphanages)

  // //consultar somente 1 orfanato pelo id
  // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
  // console.log(orphanage)

  //deletar dado da tabela
  //await db.run("DELETE FROM orphanages WHERE id = '3' ")

})
