const pegarChave = (callback) => {
  setTimeout(() => {
    console.log('Voce pegou uma das chaves')
    callback()
  }, 200)
}

const abrirPorta = () => {
    console.log('Voce abriu a porta depois de conseguir todas as chaves')
}

pegarChave(() => {
  pegarChave(() => {
    pegarChave(() => {
      pegarChave(() => {
        pegarChave(() => {
          pegarChave(() => {
            pegarChave(() => {
              pegarChave(() => {
                pegarChave(() => {
                  pegarChave(() => {
                    pegarChave(() => {
                      pegarChave(() => {
                        pegarChave(() => {
                          pegarChave(() => {
                            pegarChave(() => {
                              pegarChave(() => {
                                pegarChave(abrirPorta)
                              })
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  })
})
